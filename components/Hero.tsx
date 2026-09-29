"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import PipelineVisual from "@/components/PipelineVisual";

export default function Hero() {
  return (
    <section id="top" className="relative z-10 w-full pt-28 sm:pt-36 pb-16 sm:pb-24">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
        
        {/* Left Column: Copy & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 backdrop-blur-xl shadow-lg">
            <span className="h-2 w-2 rounded-full bg-[#007AFF] animate-ping" />
            <span className="eyebrow !text-white/80">The AI & Digital Growth Architecture</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold leading-[1.08] tracking-tight">
            <span className="block text-white">Stop buying websites.</span>
            <span className="block text-gradient-blue">Build sovereign revenue systems.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/75">
            Your digital presence shouldn't just look aesthetic. We engineer end-to-end infrastructure that captures high-intent demand, converts clicks with AI, and automates operations while you sleep.
          </p>

          {/* LIGHT-UP BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#audit-form"
              className="relative group inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-sm text-white overflow-hidden transition-all duration-300 ring-glow hover:scale-105 active:scale-95 bg-[#007AFF] hover:bg-blue-600"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>Request Infrastructure Audit</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
              {/* Luminous Shimmer Effect */}
              <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
            </a>

            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/[0.04] hover:bg-white/10 px-7 py-4 text-sm font-bold text-white transition-all hover:scale-105 active:scale-95 backdrop-blur-md"
            >
              <CalendarDays className="h-4 w-4 text-[#007AFF]" />
              <span>Book a Meeting</span>
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-wider text-white/60">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#007AFF]" /> Sub-0.8s edge latency
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> 24/7 AI qualification
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> Zero CMS code bloat
            </li>
          </ul>
        </motion.div>

        {/* Right Column: Interactive Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full relative"
        >
          <PipelineVisual />
        </motion.div>

      </div>
    </section>
  );
}