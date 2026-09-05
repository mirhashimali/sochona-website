import type { Metadata } from "next";
import Link from "next/link";
import { 
  Zap, 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight, 
  Gauge, 
  Cpu, 
  Clock, 
  ShieldCheck, 
  XCircle, 
  Smartphone,
  Layers,
  Code2
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Sub-1s Mobile Speed & Next.js Architecture | Sochona India",
  description: "Why legacy WordPress CMS is destroying your Indian conversion rates. Sub-800ms Next.js web applications engineered for 4G/5G mobile networks.",
  keywords: "Next.js web development India, fast website development, Core Web Vitals agency India, WordPress vs Next.js, mobile speed optimization, Sochona",
};

export default function SpeedInfrastructurePage() {
  const whatsappNumber = "919835182801";
  const whatsappMessage = encodeURIComponent("Namaste! I want to audit my website speed and Core Web Vitals on mobile 4G/5G.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main className="flex flex-col items-center w-full bg-transparent text-white selection:bg-[#25D366] selection:text-black relative overflow-hidden pb-24">
      
      {/* 1. HERO SECTION */}
      <ScrollReveal>
        <section className="max-w-4xl mx-auto px-6 pt-32 pb-16 flex flex-col items-center text-center relative z-10">
          <div className="absolute inset-0 -z-10 bg-radial from-emerald-600/25 via-black/60 to-transparent blur-3xl rounded-full pointer-events-none scale-125"></div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/80 border border-emerald-500/30 mb-8 backdrop-blur-xl shadow-lg">
            <Zap className="w-4 h-4 text-[#25D366]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-emerald-300">
              Stage 02 • Core Infrastructure
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 drop-shadow-2xl leading-[1.15] text-balance">
            Every 1-Second Delay Costs You 10% Revenue.<br />
            <span className="bg-gradient-to-r from-[#25D366] via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Engineered for Indian Mobile Networks.
            </span>
          </h1>

          <p className="max-w-2xl text-base md:text-lg text-white/80 leading-relaxed drop-shadow-lg mb-8 text-balance bg-black/40 p-5 rounded-2xl border border-white/10 backdrop-blur-md">
            India me 85%+ traffic mobile par hota hai. Jab aapki website Jio ya Airtel par 6 second lagati hai khulne me, ad par click karne wala aadha grahak pehle hi back dabakar chala jata hai. Hum banate hain clean-code Next.js applications jo globally sub-second khulti hain.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-sm transition-all shadow-xl shadow-[#25D366]/20 flex items-center justify-center gap-2.5 hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-black" />
              Check My Site Speed on WhatsApp
            </a>
            <a 
              href="#audit-form" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-neutral-900/90 border border-white/20 hover:bg-neutral-800 text-white font-semibold text-sm transition-all backdrop-blur-xl flex items-center justify-center gap-2"
            >
              Test Mobile Speed <ArrowRight className="w-4 h-4 text-white/70" />
            </a>
          </div>
        </section>
      </ScrollReveal>

      {/* 2. SPEED BENCHMARKS */}
      <section className="w-full max-w-5xl mx-auto px-6 py-8 relative z-10">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-neutral-950/70 border border-white/10 backdrop-blur-2xl">
            <div className="p-4 border-r border-white/10 last:border-none text-center">
              <span className="text-3xl font-extrabold text-[#25D366]">&lt; 0.8s</span>
              <p className="text-[11px] text-white/60 mt-1 uppercase tracking-wider font-semibold">Global Edge Server Load Speed</p>
            </div>
            <div className="p-4 border-r border-white/10 last:border-none text-center">
              <span className="text-3xl font-extrabold text-emerald-400">100/100</span>
              <p className="text-[11px] text-white/60 mt-1 uppercase tracking-wider font-semibold">Google Mobile Core Web Vitals Score</p>
            </div>
            <div className="p-4 border-r border-white/10 last:border-none text-center">
              <span className="text-3xl font-extrabold text-purple-400">53%</span>
              <p className="text-[11px] text-white/60 mt-1 uppercase tracking-wider font-semibold">Mobile Visits Abandoned If Page Takes &gt; 3 Seconds (Google)</p>
            </div>
            <div className="p-4 text-center">
              <span className="text-3xl font-extrabold text-amber-400">0</span>
              <p className="text-[11px] text-white/60 mt-1 uppercase tracking-wider font-semibold">Vulnerable WordPress Plugins or Database Crashes</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. WHY WORDPRESS DIES IN INDIA */}
      <section className="max-w-5xl mx-auto px-6 py-16 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#25D366]">Architecture Diagnostic</span>
            <h2 className="text-2xl md:text-4xl font-bold text-white mt-2">Kyu Puraane CMS Aapka Profit Kha Rahe Hain?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-neutral-950/80 border border-white/10 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-xl bg-red-500/15 text-red-400 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">1. Plugin Bloat & Database Lag</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                WordPress par har choti cheez ke liye naya plugin install hota hai. Har visit par server database queries run karta hai, jisse mobile par massive freeze hota hai.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-neutral-950/80 border border-white/10 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-4">
                <Gauge className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">2. Google Core Web Vitals Penalty</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Google unhi websites ko search me prioritize karta hai jo fast load hoti hain. Slow site hone se Google aapke ad click ka rate (CPC) badha deta hai.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-neutral-950/80 border border-white/10 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">3. Continuous Security Exploits</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                PHP aur WordPress templates me roz nayi vulnerabilities aati hain. Site hack ho jati hai aur Google search results me <em>"This site may be hacked"</em> ka warning dikhne lagta hai.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. THE SOCHONA NEXT.JS STACK */}
      <section className="max-w-5xl mx-auto px-6 py-16 relative z-10">
        <ScrollReveal>
          <div className="bg-neutral-950/80 border border-white/15 rounded-3xl p-8 md:p-12 backdrop-blur-xl">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#25D366]">The Modern Stack</span>
              <h2 className="text-2xl md:text-4xl font-bold text-white mt-2 mb-3">Hum Speed Ko Kaise Engineer Karte Hain?</h2>
            </div>

            <div className="space-y-4 text-xs md:text-sm text-white/80">
              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-1">Global Edge Caching (Serverless & CDN Powered)</h4>
                  <p className="text-white/65 text-xs leading-relaxed">
                    Aapka static code India ke Mumbai, Chennai aur Delhi data centers me cache hota hai. Grahak ke click karte hi page 0.5 second me render ho jata hai. Learn about <Link href="/services/web-development/edge-delivery-performance" className="text-[#25D366] underline">Edge Delivery Performance</Link>.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-1">Modern Stack vs CMS Architecture</h4>
                  <p className="text-white/65 text-xs leading-relaxed">
                    Next.js aur React code me zero bloated PHP libraries hoti hain. Zero maintenance updates, zero database lockups, aur 100% security. Deep dive in our <Link href="/services/web-development/modern-stack-vs-cms" className="text-blue-400 underline">Modern Stack vs CMS Breakdown</Link>.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-1">Eliminating The Core Web Vitals Penalty</h4>
                  <p className="text-white/65 text-xs leading-relaxed">
                    Largest Contentful Paint (LCP) aur Cumulative Layout Shift (CLS) ko Google ke green zone me rakhne se organic Google SEO ranking aur ad Quality Scores dono boost hote hain. Read our analysis on <Link href="/services/maintenance/core-web-vitals-penalty" className="text-purple-400 underline">Core Web Vitals Penalty</Link>.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-1">PWA (Progressive Web App) Mobile Capability</h4>
                  <p className="text-white/65 text-xs leading-relaxed">
                    Aapki website app ki tarah behave karti hai—offline loading, instant screen transitions, aur zero app store download friction. Explore our <Link href="/services/web-development/pwa-vs-native" className="text-amber-400 underline">PWA vs Native Apps Guide</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 5. AUDIT FORM */}
      <section id="audit-form" className="max-w-3xl mx-auto px-6 py-16 w-full relative z-10 scroll-mt-24">
        <ScrollReveal>
          <div className="bg-neutral-950/90 border border-emerald-500/30 rounded-3xl p-8 md:p-10 backdrop-blur-2xl shadow-2xl relative">
            <div className="text-center mb-8">
              <span className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-[#25D366] text-xs font-bold uppercase tracking-widest rounded-full mb-3">
                Speed Diagnostic
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Audit Your Current Mobile Load Speed</h3>
              <p className="text-sm text-white/70 max-w-lg mx-auto">
                Submit your current website URL. We will run a deep Core Web Vitals audit and show you how many mobile visitors are bouncing.
              </p>
            </div>

            <LeadForm showContainer={false} hideFooter={true} />

            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#25D366] hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-[#25D366]" /> 
                Direct WhatsApp Par Speed Check Karein (+91 9835182801) →
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 6. FLOATING WHATSAPP BUTTON */}
      <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#25D366] text-black font-extrabold text-xs md:text-sm shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-105 active:scale-95 transition-all"
        >
          <MessageCircle className="w-5 h-5 fill-black" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>

    </main>
  );
}