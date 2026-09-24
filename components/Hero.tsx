"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import { EASE, KineticLine, KineticText, Magnetic } from "./motion";
import PipelineVisual from "./PipelineVisual";

export default function Hero() {
  const { scrollY } = useScroll();
  const glowY = useTransform(scrollY, [0, 600], [0, 120]);
  const panelY = useTransform(scrollY, [0, 600], [0, -40]);

  return (
    <section id="top" className="noise relative overflow-hidden pt-28 sm:pt-36">
      {/* ambient */}
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <motion.div style={{ y: glowY }} className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-blue/25 blur-[140px] animate-drift" />
      <div className="pointer-events-none absolute right-[-10%] top-[30%] h-[420px] w-[420px] rounded-full bg-emerald/10 blur-[120px]" />

      {/* curtain reveal */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-20 bg-ink"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        style={{ transformOrigin: "top" }}
        transition={{ duration: 1.1, ease: EASE, delay: 0.05 }}
      />

      <div className="container-x relative z-10 grid items-center gap-14 pb-20 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-28">
        <div>
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-1.5"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: EASE }}
          >
            <span className="animate-live h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span className="eyebrow !text-fg-2">The AI & Digital Growth Architecture</span>
          </motion.div>

          <h1 className="text-[2.6rem] font-extrabold leading-[1.02] sm:text-6xl lg:text-[4.4rem]">
            <KineticText text="Stop buying websites." delay={0.45} className="block text-fg-2" />
            <KineticLine text="Build sovereign revenue systems." delay={0.8} className="text-gradient-blue" />
          </h1>

          <motion.p
            className="mt-7 max-w-xl text-lg leading-relaxed text-fg-2 sm:text-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.9, ease: EASE }}
          >
            Your digital presence shouldn't just look aesthetic. We engineer end-to-end infrastructure that pulls high-intent demand, converts clicks with AI, and automates operations while you sleep.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.9, ease: EASE }}
          >
            <Magnetic>
              <a
                href="#audit-form"
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-blue px-6 py-4 text-[15px] font-semibold text-white ring-glow transition-all hover:bg-blue-2 sm:w-auto"
              >
                Request Infrastructure Audit
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <Link
                href="/book"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-line-2 bg-white/[0.03] px-6 py-4 text-[15px] font-semibold text-fg transition-all hover:border-white/30 hover:bg-white/[0.06] sm:w-auto"
              >
                <CalendarDays className="h-4 w-4 text-fg-2" />
                Book a Meeting
              </Link>
            </Magnetic>
          </motion.div>

          <motion.ul
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-fg-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-blue" />Sub-1s edge latency</li>
            <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-emerald" />24/7 AI qualification</li>
            <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-fg-2" />Zero CMS code bloat</li>
          </motion.ul>
        </div>

        <motion.div
          style={{ y: panelY }}
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.9, duration: 1.1, ease: EASE }}
        >
          <PipelineVisual />
        </motion.div>
      </div>
    </section>
  );
}