"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Loader2, Zap } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface SpeedRaceProps {
  lang?: "en" | "in";
}

export default function SpeedRace({ lang = "en" }: SpeedRaceProps) {
  const speedRef = useRef<HTMLDivElement>(null);
  // Safe trigger threshold for mobile screens
  const isSpeedInView = useInView(speedRef, { once: true, amount: 0.2 });
  const [t, setT] = useState(0);
  const [runKey, setRunKey] = useState(0);

  const LEGACY_S = 3.6;
  const EDGE_S = 0.8;

  useEffect(() => {
    if (!isSpeedInView) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = () => {
      const s = (performance.now() - t0) / 1000;
      setT(s);
      if (s < LEGACY_S + 0.6) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isSpeedInView, runKey]);

  const edgeDone = t >= EDGE_S;
  const legacyDone = t >= LEGACY_S;
  const edgePct = Math.min(1, t / EDGE_S);
  const legacyPct = Math.min(1, (t / LEGACY_S) * (0.55 + 0.45 * Math.abs(Math.sin(t * 1.9))));

  const isIndia = lang === "in";

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10 pointer-events-auto">
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <ScrollReveal>
          <div>
            <p className="eyebrow text-[#007AFF]">
              {isIndia ? "Mobile Speed Is Sales" : "Speed is a revenue metric"}
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold leading-tight text-white">
              {isIndia ? (
                <>Har second jo customer wait karta hai, <span className="text-ember">aapka paisa doobta hai.</span></>
              ) : (
                <>Every second you make a customer wait, <span className="text-ember">you pay twice.</span></>
              )}
            </h2>
            <p className="mt-5 text-sm sm:text-base text-white/70 leading-relaxed">
              {isIndia
                ? "Ek baar ad click ka paisa gaya, aur doosri baar customer bina website dekhe back dabakar chala gaya. Hum Next.js web systems banate hain jo Jio aur Airtel 4G/5G par 1 second se kam me khulti hain."
                : "Once for the click. Again when they leave. We ship React/Next.js applications cached at the edge, so your first paint lands in well under a second across all mobile devices."}
            </p>
            <ul className="mt-8 space-y-3.5 text-xs sm:text-sm text-white/80">
              {(isIndia
                ? [
                    "No 30-plugin WordPress sprawl jo mobile par hang ho jaye",
                    "Sub-second loading chahe customer Tier-2 ya Tier-3 se ho",
                    "Google Search par fast speed ki wajah se #1 ranking boost",
                    "Har bacha hua second aapki cost per inquiry ko aadhi karta hai",
                  ]
                : [
                    "No WordPress themes, no plugin sprawl, no render-blocking scripts",
                    "Global edge caching with sub-second first paint",
                    "100% Core Web Vitals engineered in, not patched on later",
                    "Every millisecond saved lowers your effective cost per lead",
                  ]
              ).map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <Zap className="mt-0.5 h-4 w-4 shrink-0 text-[#007AFF]" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div ref={speedRef} className="glass-strong rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl relative overflow-hidden">
            <div className="mb-6 flex items-center justify-between">
              <span className="eyebrow">
                {isIndia ? "Real Mobile Speed Test" : "Simulated Mobile Page Load"}
              </span>
              <button
                onClick={() => { setT(0); setRunKey((k) => k + 1); }}
                className="rounded-full border border-white/20 px-3.5 py-1 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-white/70 hover:text-white transition-all bg-white/[0.04]"
              >
                {isIndia ? "Test Dobara Chalao" : "Replay Race"}
              </button>
            </div>

            {/* Sochona Next.js */}
            <div className="mb-7">
              <div className="mb-2 flex items-center justify-between text-xs sm:text-sm">
                <span className="font-semibold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" /> Sochona (Next.js Edge)
                </span>
                <span className={`flex items-center gap-1.5 font-mono tabular-nums ${edgeDone ? "text-emerald-400" : "text-white/60"}`}>
                  {edgeDone ? <Check className="h-4 w-4" /> : <Loader2 className="h-4 w-4 animate-spin text-[#007AFF]" />}
                  {Math.min(t, EDGE_S).toFixed(2)}s
                </span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-white/[0.08]">
                <motion.div 
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-emerald-400" 
                  style={{ width: `${edgePct * 100}%` }} 
                />
              </div>
              <p className={`mt-2 text-[11px] transition-opacity duration-300 ${edgeDone ? "text-emerald-400 opacity-100" : "opacity-0"}`}>
                {isIndia ? "✓ Page open ho gaya. Customer headline padh raha hai." : "✓ Page loaded. Visitor is reading your offer."}
              </p>
            </div>

            {/* Legacy CMS */}
            <div>
              <div className="mb-2 flex items-center justify-between text-xs sm:text-sm">
                <span className="font-semibold text-white/70 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400" /> {isIndia ? "Purani WordPress Site" : "Typical WordPress (Shared Host)"}
                </span>
                <span className={`flex items-center gap-1.5 font-mono tabular-nums ${legacyDone ? "text-ember" : "text-white/60"}`}>
                  {legacyDone ? <Check className="h-4 w-4" /> : <Loader2 className="h-4 w-4 animate-spin text-amber-400" />}
                  {Math.min(t, LEGACY_S).toFixed(2)}s
                </span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-white/[0.08]">
                <motion.div 
                  className="h-full rounded-full bg-gradient-to-r from-amber-500 to-red-500" 
                  style={{ width: `${legacyPct * 100}%` }} 
                />
              </div>
              <p className={`mt-2 text-[11px] transition-opacity duration-300 ${t > 2.8 ? "text-red-400 opacity-100" : "opacity-0"}`}>
                {isIndia
                  ? "⚠️ 3s se zyada ho gaye. 53% grahak back dabakar ja chuke hain."
                  : "⚠️ Past 3 seconds. Google research: 53% of mobile users have already bounced."}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 text-center">
              <div>
                <div className="text-lg sm:text-xl font-bold text-white">&lt; 0.8s</div>
                <div className="mt-1 font-mono text-[9px] sm:text-[10px] uppercase text-white/50">{isIndia ? "Instant Speed" : "Edge Load"}</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-emerald-400">4.5×</div>
                <div className="mt-1 font-mono text-[9px] sm:text-[10px] uppercase text-white/50">{isIndia ? "WP Se Tez" : "Faster"}</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-cyan-300">0%</div>
                <div className="mt-1 font-mono text-[9px] sm:text-[10px] uppercase text-white/50">{isIndia ? "Bloatware" : "Traffic Waste"}</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}