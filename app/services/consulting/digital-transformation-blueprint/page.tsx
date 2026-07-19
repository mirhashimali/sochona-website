import type { Metadata } from "next";
import Link from "next/link";
import { ServerCrash, Network, Scaling, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Anatomy of Digital Transformation | Sochona",
  description: "An executive guide to overcoming legacy tech debt. Learn how to architect a digital transformation that scales revenue rather than inflating overhead.",
};

export default function DigitalTransformationPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="mb-8">
          <Link href="/services/consulting" className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 text-sm font-semibold transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Consulting
          </Link>
        </div>
        <div className="inline-block px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-sm font-semibold tracking-wide mb-6">
          Infrastructure Strategy
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-500">
          Surviving Your <br />Tech Debt.
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Legacy systems do not break overnight; they decay slowly, suffocating operational speed and market agility until a leaner competitor overtakes you.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-24">
        <article className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">The True Cost of Standing Still</h2>
          <p className="text-neutral-400 mb-8">
            Digital Transformation is the most overused buzzword in the corporate ecosystem, often confused with simply buying new software. True transformation is architectural. It is the ruthless audit of how data flows through your company and the elimination of manual human intervention in spaces where code should dictate the outcome. If your staff is copy-pasting data between legacy databases to generate reports, you are bleeding capital.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl relative overflow-hidden">
              <ServerCrash className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Legacy Paralyzation</h3>
              <p className="text-neutral-400">
                Companies utilizing outdated infrastructure spend 70% of their technology budget purely on maintenance and keeping the lights on, leaving only 30% for actual innovation and market capture.
              </p>
            </div>
            
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl relative overflow-hidden">
              <Network className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Architecting Agility</h3>
              <p className="text-neutral-400">
                We engineer transformation roadmaps. We transition on-premise dinosaurs into cloud-native architectures, decentralize your monolithic operations, and deploy micro-services that allow you to pivot instantly.
              </p>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">Execution Without the Bloat</h3>
          <p className="text-neutral-400">
            A successful transformation requires a phased approach. We do not halt your business to rebuild it. We run parallel deployments—standing up modern, scalable infrastructure alongside your existing processes, securely migrating data, and phasing out legacy dependencies without interrupting your revenue stream.
          </p>
        </article>
      </section>

      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-amber-500/20 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"></div>
          <h2 className="text-3xl font-bold mb-4">Modernize your operations.</h2>
          <p className="text-neutral-400 mb-8 max-w-lg mx-auto">Let us evaluate your technical debt and architect a roadmap for scalable infrastructure.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-amber-600 text-white font-bold rounded-full hover:bg-amber-500 transition-colors shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_40px_rgba(245,158,11,0.5)]">
            Map Your Transformation
          </Link>
        </div>
      </section>
    </main>
  );
}