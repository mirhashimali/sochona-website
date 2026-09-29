import type { Metadata } from "next";
import Link from "next/link";
import { 
  Calendar, Clock, Video, ShieldCheck, ExternalLink,
  TrendingUp, Zap, Cpu
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Book a Strategy Call | Sochona",
  description: "Schedule a 1-on-1 digital systems & ad architecture audit with our lead architect. Instant Google Meet confirmation and zero sales pressure.",
  openGraph: {
    title: "Book an Architecture Call | Sochona",
    description: "Diagnose your digital bottlenecks, review ad spend efficiency, and map out your custom revenue infrastructure on Google Meet.",
    url: "https://sochona.net/book",
    siteName: "Sochona",
    locale: "en_US",
    type: "website",
  },
};

const SCHEDULE_URL = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3uHGiboexpcWw_Ktcb57dWLkyrY0LPBarGaeZjwdZO2roi8llCmTz80V7sR8G5xPoJxy4dlp3X?gv=true";
const DIRECT_CALENDAR_LINK = "https://calendar.app.google/pzKCMrQAt9oR5CcL8";

export default function BookMeetingPage() {
  return (
    <main className="min-h-screen text-white selection:bg-[#007AFF] selection:text-white relative pt-32 pb-24 px-4 sm:px-6 overflow-hidden">
      
      {/* GLOBAL AMBIENT LAYER */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="bg-grid absolute inset-0 opacity-80" />
        <div className="absolute top-10 left-1/4 w-[700px] h-[500px] bg-gradient-to-r from-[#007AFF]/10 to-teal-500/10 blur-[150px] animate-pulse-glow" />
        <div className="absolute top-80 right-10 w-[500px] h-[500px] bg-purple-500/10 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* HERO HEADER */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-strong border border-white/10 text-[10px] sm:text-xs font-mono font-semibold tracking-widest uppercase text-white/80 mb-6 shadow-2xl">
              <span className="w-1.5 h-1.5 rounded-full bg-[#007AFF] animate-ping absolute" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#007AFF]" />
              <span>1-on-1 Architecture Session</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] leading-[1.1]">
              Schedule Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007AFF] via-cyan-400 to-white">
                Strategy Diagnostic
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-white/70 font-medium leading-relaxed max-w-xl mx-auto">
              Direct consultation with our lead systems architect. Pick a slot that fits your timezone—your Google Meet invitation is generated instantly.
            </p>
          </div>
        </ScrollReveal>

        {/* TWO-COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: EXECUTIVE BRIEFING */}
          <div className="lg:col-span-4 w-full">
            <ScrollReveal>
              <div className="glass-strong border border-white/15 rounded-[2rem] p-8 shadow-2xl space-y-8 relative overflow-hidden group hover:border-[#007AFF]/30 transition-colors duration-500">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#007AFF]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#007AFF]/10 transition-colors duration-500" />
                
                <div className="relative z-10">
                  <span className="eyebrow text-[#007AFF]">Executive Briefing</span>
                  <h2 className="text-2xl font-bold text-white mt-2 mb-2">What We Will Cover</h2>
                  <p className="text-sm text-white/60 leading-relaxed">
                    A zero-fluff, tactical diagnostic tailored strictly around your pipeline and profit margins.
                  </p>
                </div>

                <div className="space-y-6 pt-2 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-white block font-bold text-sm mb-1">Digital Infrastructure Audit</strong>
                      <span className="text-white/60 text-xs leading-relaxed block">Reviewing your current site speed, Core Web Vitals, and conversion leaks.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-white block font-bold text-sm mb-1">Ad Spend & CAC Optimization</strong>
                      <span className="text-white/60 text-xs leading-relaxed block">Eliminating junk clicks from Google/Meta ads and tuning server attribution.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-white block font-bold text-sm mb-1">Custom CRM & Automation</strong>
                      <span className="text-white/60 text-xs leading-relaxed block">Mapping out 24/7 lead capture, pipeline routing, and workflow blueprints.</span>
                    </div>
                  </div>
                </div>

                {/* SESSION SPECS */}
                <div className="pt-6 border-t border-white/10 space-y-3 text-xs text-white/70 relative z-10">
                  <div className="flex items-center justify-between py-1 bg-white/[0.02] px-3 rounded-lg border border-white/5">
                    <span className="flex items-center gap-2 text-white/50 font-medium">
                      <Clock className="w-4 h-4 text-blue-400" /> Duration
                    </span>
                    <span className="font-bold text-white">30 Minutes</span>
                  </div>
                  <div className="flex items-center justify-between py-1 bg-white/[0.02] px-3 rounded-lg border border-white/5">
                    <span className="flex items-center gap-2 text-white/50 font-medium">
                      <Video className="w-4 h-4 text-teal-400" /> Format
                    </span>
                    <span className="font-bold text-white">Google Meet</span>
                  </div>
                  <div className="flex items-center justify-between py-1 bg-emerald-500/10 px-3 rounded-lg border border-emerald-500/20">
                    <span className="flex items-center gap-2 text-emerald-400/80 font-medium">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" /> Commitment
                    </span>
                    <span className="font-bold text-emerald-400">100% Free Audit</span>
                  </div>
                </div>

                {/* DIRECT LINK FALLBACK */}
                <div className="pt-6 relative z-10">
                  <a
                    href={DIRECT_CALENDAR_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-white/[0.03] hover:bg-white/10 border border-white/10 text-white/80 text-xs font-semibold flex items-center justify-center gap-2 transition-all group"
                  >
                    <span>Open in Google Calendar</span>
                    <ExternalLink className="w-3.5 h-3.5 text-white/40 group-hover:text-white transition-colors" />
                  </a>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT: CALENDAR EMBED */}
          <div className="lg:col-span-8 w-full">
            <ScrollReveal>
              <div className="glass-strong border border-white/15 rounded-[2rem] p-3 sm:p-5 shadow-2xl relative overflow-hidden min-h-[750px] flex flex-col">
                
                {/* EMBED HEADER */}
                <div className="px-5 py-3 mb-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-white/70">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-lg bg-[#007AFF]/10 flex items-center justify-center">
                      <Calendar className="w-3.5 h-3.5 text-[#007AFF]" />
                    </div>
                    <span className="font-semibold text-white tracking-wide">Select an Available Date & Time Slot</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-white/50 uppercase tracking-wider bg-black/40 px-2.5 py-1 rounded-md border border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Automated Timezone Detection
                  </div>
                </div>

                {/* THE WHITE CANVAS ENCLOSURE FOR ACCESSIBILITY */}
                <div 
                  className="w-full flex-grow rounded-2xl overflow-hidden shadow-inner min-h-[680px] bg-white border border-white/20"
                  style={{ colorScheme: "light" }}
                >
                  <iframe
                    src={SCHEDULE_URL}
                    width="100%"
                    height="100%"
                    className="w-full h-full min-h-[680px] border-0"
                    title="Google Calendar Appointment Scheduling"
                    style={{ 
                      colorScheme: "light",
                      backgroundColor: "#ffffff"
                    }}
                  />
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </main>
  );
}