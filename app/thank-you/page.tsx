"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Calendar, ArrowLeft, ShieldCheck, Clock } from "lucide-react";
import Link from "next/link";

export default function ThankYouPage() {
  // Fire conversion events when the user lands on this page
  useEffect(() => {
    if (typeof window !== "undefined") {
      // @ts-ignore Google Analytics / Google Ads Conversion Event
      window.gtag?.("event", "conversion", {
        send_to: "AW-CONVERSION_ID/LABEL", // Optional: Replace with your Google Ads Conversion Label when ready
        value: 1.0,
        currency: "USD",
      });

      // @ts-ignore Meta Pixel Lead Event
      window.fbq?.("track", "Lead");
    }
  }, []);

  return (
    <main className="relative min-h-screen bg-transparent overflow-hidden flex flex-col items-center justify-center text-white px-4 sm:px-6 pt-28 pb-20">
      
      {/* Ambient Lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none -z-10 blur-[150px]"
        style={{
          background: "radial-gradient(circle, rgba(255, 140, 30, 0.18) 0%, rgba(0, 122, 255, 0.10) 50%, transparent 75%)",
          mixBlendMode: "screen"
        }}
      />

      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-2xl w-full space-y-6"
      >
        {/* Main Confirmation Card */}
        <div className="bg-neutral-950/90 border border-white/20 p-8 sm:p-12 rounded-3xl backdrop-blur-2xl shadow-2xl text-center relative overflow-hidden">
          
          <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center mx-auto mb-6 text-[#007AFF] shadow-lg shadow-blue-500/10">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono tracking-widest uppercase text-white/70 mb-4">
            <span>Diagnostic Intake Confirmed</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-4">
            Audit Request Received.
          </h1>
          
          <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed mb-8 max-w-md mx-auto">
            Our systems architect is analyzing your digital footprint, Core Web Vitals, and conversion funnels. We deliver your private 5-minute video diagnostic within 24 to 48 hours.
          </p>

          {/* THE BRIDGE: Double-Conversion Action to /book */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-left mb-8 space-y-3">
            <div className="flex items-center gap-2 text-[#007AFF] text-xs font-semibold uppercase tracking-wider">
              <Calendar className="w-4 h-4" />
              <span>Want to skip the waiting line?</span>
            </div>
            <h3 className="text-base font-medium text-white">
              Schedule your 1-on-1 Strategy Call directly on our calendar.
            </h3>
            <p className="text-xs text-white/60 font-light leading-relaxed">
              If your inquiry is time-sensitive, bypass the video turnaround and lock in a 30-minute Google Meet session with our lead architect right now.
            </p>
            <div className="pt-2">
              <Link 
                href="/book" 
                className="w-full py-3.5 px-6 rounded-full bg-white text-black font-semibold text-xs transition-all hover:bg-neutral-100 hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2 shadow-xl shadow-white/10"
              >
                <span>Pick a Time on Our Calendar</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#007AFF]" />
              </Link>
            </div>
          </div>

          {/* Return link */}
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-xs text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>
        </div>

        {/* Assurance footer bar */}
        <div className="flex items-center justify-center gap-6 text-[11px] text-white/40 font-light">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 100% Data Confidentiality
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-blue-400" /> Fast Response Window
          </span>
        </div>

      </motion.div>
    </main>
  );
}