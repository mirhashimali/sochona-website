import type { Metadata } from "next";
import Link from "next/link";
import { BrainCircuit, Timer, Target, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Evolution of AI Lead Qualification | Sochona",
  description: "Why decision-tree chatbots are dead, and how autonomous LLM agents are redefining conversion rate optimization and sales pipeline velocity.",
};

export default function AILocalPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="mb-8">
          <Link href="/services/automation" className="inline-flex items-center gap-2 text-fuchsia-400 hover:text-fuchsia-300 text-sm font-semibold transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Automation
          </Link>
        </div>
        <div className="inline-block px-4 py-1.5 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-400 text-sm font-semibold tracking-wide mb-6">
          Technical Deep Dive
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-pink-500">
          The Death of the <br />Dumb Chatbot.
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Consumers have developed complete blindness to "If/Then" chatbots. The market standard has shifted from pre-programmed scripts to autonomous, context-aware LLM agents.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-24">
        <article className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">The Latency of Human Sales</h2>
          <p className="text-neutral-400 mb-8">
            In the modern digital economy, lead intent has a half-life of about 5 minutes. If a high-net-worth prospect lands on your site at 11:30 PM and encounters a generic lead form—or worse, a basic decision-tree bot that forces them to click buttons—they will bounce to a competitor. Human sales teams are bound by time zones; digital demand is not.
          </p>

          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-fuchsia-400 mb-6 flex items-center gap-3">
              <BrainCircuit className="w-6 h-6" /> The Autonomous Pipeline
            </h3>
            <ul className="space-y-6 text-neutral-300">
              <li>
                <strong className="text-white block mb-1">RAG (Retrieval-Augmented Generation)</strong>
                We do not use generic AI. We build systems that ingest your specific pricing sheets, case studies, and brand voice. The agent responds to technical queries with lethal accuracy, grounded entirely in your company's reality.
              </li>
              <li>
                <strong className="text-white block mb-1">Active Disqualification</strong>
                A high-performing system doesn't just collect leads; it protects your sales team's calendar. The LLM is trained to dynamically vet budget and timeline, politely filtering out tire-kickers while fast-tracking premium prospects.
              </li>
              <li>
                <strong className="text-white block mb-1">Zero-Friction Handoff</strong>
                When intent is verified, the system seamlessly executes an API call—pushing the enriched transcript to your CRM and triggering a calendar booking link without a single human touchpoint.
              </li>
            </ul>
          </div>
        </article>
      </section>

      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-fuchsia-500/20 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent opacity-50"></div>
          <h2 className="text-3xl font-bold mb-4">Capture demand in real-time.</h2>
          <p className="text-neutral-400 mb-8 max-w-lg mx-auto">Replace your static lead forms with an intelligent architecture that actually closes.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(217,70,239,0.2)]">
            Deploy Your Autonomous Agent
          </Link>
        </div>
      </section>
    </main>
  );
}