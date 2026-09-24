"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Bot, CalendarCheck, Database, Radar } from "lucide-react";

/* A "software panel" that shows the revenue system running:
   Traffic -> AI Qualify -> Booked -> CRM/Automation, with pulses
   travelling the wires (SMIL, zero JS) and live counters. */

const NODES = [
  { id: "traffic", label: "High-Intent Traffic", sub: "Google Ads · SEO", icon: Radar, x: 70, color: "#9cc9ff" },
  { id: "qualify", label: "AI Qualification", sub: "24/7 · no headcount", icon: Bot, x: 250, color: "#007aff" },
  { id: "booked", label: "Meeting Booked", sub: "auto-scheduled", icon: CalendarCheck, x: 430, color: "#34d399" },
  { id: "crm", label: "Custom CRM", sub: "proposal → invoice", icon: Database, x: 610, color: "#a7f3d0" },
];

const STEP_VISITORS: [number, number] = [1, 4];
const STEP_ONE: [number, number] = [0, 1];
const STEP_PIPELINE: [number, number] = [400, 2600];

function useTicker(start: number, step: [number, number], every: number) {
  const [v, setV] = useState(start);
  useEffect(() => {
    const id = setInterval(() => setV((x) => x + step[0] + Math.floor(Math.random() * (step[1] - step[0] + 1))), every);
    return () => clearInterval(id);
  }, [step, every]);
  return v;
}

export default function PipelineVisual() {
  const visitors = useTicker(12408, STEP_VISITORS, 900);
  const qualified = useTicker(1873, STEP_ONE, 2600);
  const booked = useTicker(412, STEP_ONE, 6200);
  const pipeline = useTicker(1284000, STEP_PIPELINE, 1700);

  return (
    <div className="glass-strong relative overflow-hidden rounded-3xl p-1">
      {/* window chrome */}
      <div className="flex items-center justify-between rounded-t-[20px] border-b border-line px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <div className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-fg-3">
          <span className="animate-live h-1.5 w-1.5 rounded-full bg-emerald" />
          revenue system · live
        </div>
      </div>

      <div className="relative px-3 pb-3 pt-4 sm:px-5">
        {/* wires + pulses */}
        <svg viewBox="0 0 680 150" className="h-auto w-full" aria-hidden>
          <defs>
            <linearGradient id="wire" x1="0" x2="1">
              <stop offset="0" stopColor="#3b96ff" stopOpacity="0.15" />
              <stop offset="0.5" stopColor="#3b96ff" stopOpacity="0.6" />
              <stop offset="1" stopColor="#34d399" stopOpacity="0.5" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {[0, 1, 2].map((i) => {
            const a = NODES[i].x + 34, b = NODES[i + 1].x - 34;
            const d = `M ${a} 75 C ${a + 50} 75, ${b - 50} 75, ${b} 75`;
            return (
              <g key={i}>
                <path d={d} stroke="url(#wire)" strokeWidth="1.5" fill="none" />
                <path d={d} className="animate-dashflow" stroke="#3b96ff" strokeWidth="1.5" fill="none" strokeOpacity="0.55" />
                {[0, 1].map((k) => (
                  <circle key={k} r="3.2" fill={k ? "#34d399" : "#3b96ff"} filter="url(#glow)">
                    <animateMotion dur={`${2.2 + i * 0.3}s`} begin={`${k * 1.1 + i * 0.4}s`} repeatCount="indefinite" path={d} />
                  </circle>
                ))}
              </g>
            );
          })}

          {NODES.map((n, i) => (
            <g key={n.id} transform={`translate(${n.x},75)`}>
              <motion.circle
                r="34"
                fill="rgba(255,255,255,0.03)"
                stroke={n.color}
                strokeOpacity="0.35"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              />
              <circle r="34" fill="none" stroke={n.color} strokeOpacity="0.5">
                <animate attributeName="r" values="34;46;34" dur="3.2s" begin={`${i * 0.8}s`} repeatCount="indefinite" />
                <animate attributeName="stroke-opacity" values="0.45;0;0.45" dur="3.2s" begin={`${i * 0.8}s`} repeatCount="indefinite" />
              </circle>
            </g>
          ))}
        </svg>

        {/* icons + labels positioned over nodes */}
        <div className="pointer-events-none absolute inset-x-3 top-4 sm:inset-x-5" style={{ aspectRatio: "680 / 150" }}>
          {NODES.map((n, i) => {
            const Icon = n.icon;
            return (
              <motion.div
                key={n.id}
                className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                style={{ left: `${(n.x / 680) * 100}%`, top: "50%" }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.15, duration: 0.7 }}
              >
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: n.color }} strokeWidth={1.75} />
              </motion.div>
            );
          })}
        </div>

        <div className="mt-1 grid grid-cols-4 gap-1 sm:gap-3">
          {NODES.map((n, i) => (
            <motion.div
              key={n.id}
              className="text-center"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.15, duration: 0.7 }}
            >
              <div className="text-[10.5px] font-semibold leading-tight text-fg sm:text-xs">{n.label}</div>
              <div className="mt-0.5 font-mono text-[9px] uppercase tracking-wider text-fg-3 sm:text-[10px]">{n.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* live counters */}
        <div className="mt-4 grid grid-cols-2 gap-2 border-t border-line pt-4 sm:grid-cols-4">
          {[
            { k: "Visitors", v: visitors.toLocaleString("en-US"), c: "text-fg" },
            { k: "AI-qualified", v: qualified.toLocaleString("en-US"), c: "text-blue-2" },
            { k: "Meetings", v: booked.toLocaleString("en-US"), c: "text-emerald" },
            { k: "Pipeline", v: `$${(pipeline / 1000).toFixed(0)}K`, c: "text-emerald" },
          ].map((s) => (
            <div key={s.k} className="rounded-xl bg-white/[0.03] px-3 py-2">
              <div className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-fg-3">{s.k}</div>
              <div className={`mt-0.5 font-mono text-sm tabular-nums sm:text-base ${s.c}`}>{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
