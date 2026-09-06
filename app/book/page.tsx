import type { Metadata } from "next";
import Link from "next/link";
import { 
  Calendar, 
  Clock, 
  Video, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink,
  ArrowRight,
  TrendingUp,
  Zap,
  Cpu
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Book a 30-Min Strategy Call | Sochona",
  description: "Schedule a 1-on-1 digital systems & ad architecture audit with our founder. Instant Google Meet confirmation and zero sales pressure.",
  openGraph: {
    title: "Book a 30-Min Architecture Call | Sochona",
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
      
      {/* Background Ambient Glows */}
      <div 
        className="absolute top-10 left-1/4 w-[700px] h-[500px] pointer-events-none -z-10 blur-[140px]"
        style={{
          background: "radial-gradient(circle, rgba(255, 150, 40, 0.15) 0%, rgba(0, 122, 255, 0.08) 50%, transparent 75%)",
          mixBlendMode: "screen"
        }}
      />
      <div 
        className="absolute top-80 right-10 w-[500px] h-[500px] pointer-events-none -z-10 blur-[150px]"
        style={{
          background: "radial-gradient(circle, rgba(255, 190, 60, 0.12) 0%, transparent 70%)",
          mixBlendMode: "screen"
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/40 border border-white/20 text-[10px] font-semibold tracking-[0.2em] uppercase text-white/90 mb-5 backdrop-blur-xl shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-[#007AFF] animate-pulse"></span>
              <span>1-on-1 Architecture Session</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white mb-4 drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] leading-[1.18]">
              Schedule Your <br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-white/75">
                30-Minute Strategy Call
              </span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-white/80 font-light leading-relaxed max-w-lg mx-auto drop-shadow">
              Direct consultation with our lead systems architect. Pick a slot that fits your timezone — your Google Meet invitation is generated instantly.
            </p>
          </div>
        </ScrollReveal>

        {/* Two-Column Grid: Executive Briefing + Google Calendar Scheduler */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Agenda & Trust Signals (No WhatsApp) */}
          <div className="lg:col-span-4 space-y-6">
            <ScrollReveal>
              <div className="bg-black/50 border border-white/15 rounded-3xl p-6 sm:p-7 backdrop-blur-2xl shadow-2xl space-y-6">
                
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#007AFF] font-bold">Executive Briefing</span>
                  <h2 className="text-lg font-medium text-white mt-1">What We Will Cover</h2>
                  <p className="text-xs text-white/60 font-light mt-1 leading-relaxed">
                    A zero-fluff, tactical diagnostic tailored strictly around your pipeline and profit margins.
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-white/10 text-xs text-white/80">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-white block font-medium text-xs">Digital Infrastructure Audit</strong>
                      <span className="text-white/60 font-light leading-relaxed">Reviewing your current site speed, Core Web Vitals, and conversion leaks.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-teal-500/10 border border-teal-500/25 flex items-center justify-center text-teal-400 shrink-0 mt-0.5">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-white block font-medium text-xs">Ad Spend & CAC Optimization</strong>
                      <span className="text-white/60 font-light leading-relaxed">Eliminating junk clicks from Google / Meta ads and tuning server attribution.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-400 shrink-0 mt-0.5">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-white block font-medium text-xs">Custom CRM & Automation</strong>
                      <span className="text-white/60 font-light leading-relaxed">Mapping out 24/7 lead capture, pipeline routing, and workflow blueprints.</span>
                    </div>
                  </div>
                </div>

                {/* Session Specifications */}
                <div className="pt-5 border-t border-white/10 space-y-2.5 text-xs text-white/70">
                  <div className="flex items-center justify-between py-1">
                    <span className="flex items-center gap-2 text-white/50">
                      <Clock className="w-3.5 h-3.5 text-blue-400" /> Duration
                    </span>
                    <span className="font-semibold text-white">30 Minutes</span>
                  </div>

                  <div className="flex items-center justify-between py-1">
                    <span className="flex items-center gap-2 text-white/50">
                      <Video className="w-3.5 h-3.5 text-teal-400" /> Format
                    </span>
                    <span className="font-semibold text-white">Google Meet Video Call</span>
                  </div>

                  <div className="flex items-center justify-between py-1">
                    <span className="flex items-center gap-2 text-white/50">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Commitment
                    </span>
                    <span className="font-semibold text-emerald-400">100% Free • No Sales Pressure</span>
                  </div>
                </div>

                {/* Direct Google Calendar Link Fallback */}
                <div className="pt-4 border-t border-white/10">
                  <a
                    href={DIRECT_CALENDAR_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/15 text-white/90 text-xs font-medium flex items-center justify-center gap-2 transition-all group"
                  >
                    <span>Open in Google Calendar Directly</span>
                    <ExternalLink className="w-3.5 h-3.5 text-white/60 group-hover:text-white transition-colors" />
                  </a>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Google Calendar Appointment Scheduler Embed (FIXED WHITE CANVAS) */}
          <div className="lg:col-span-8 w-full">
            <ScrollReveal>
              <div className="bg-black/50 border border-white/15 rounded-3xl p-3 sm:p-5 backdrop-blur-2xl shadow-2xl overflow-hidden relative min-h-[750px] flex flex-col">
                
                {/* Embed Header Bar */}
                <div className="px-4 py-2.5 mb-3 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-white/70">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#007AFF]" />
                    <span className="font-medium text-white/90">Select an Available Date & Time Slot</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-white/50">
                    <span>Automated timezone detection</span>
                  </div>
                </div>

                {/* FIXED: colorScheme light and pure white container so Google text is 100% readable */}
                <div 
                  className="w-full flex-grow rounded-2xl overflow-hidden shadow-2xl min-h-[680px] bg-white"
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