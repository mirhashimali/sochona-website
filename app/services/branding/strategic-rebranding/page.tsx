import type { Metadata } from "next";
import Link from "next/link";
import { Compass, Repeat, Rocket, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Architecture of a Rebrand | Sochona",
  description: "An industry guide on strategic rebranding. Learn how to elevate your market positioning without alienating your existing customer base.",
};

export default function RebrandingPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="mb-8">
          <Link href="/services/branding" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-semibold transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Branding
          </Link>
        </div>
        <div className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-semibold tracking-wide mb-6">
          Identity Evolution
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
          Evolve Without <br />Alienation.
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          The company you are today is not the company you were when you founded it. Your brand identity must evolve to reflect your current market dominance, but doing so recklessly can destroy equity.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-24">
        <article className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">The Pivot vs. The Polish</h2>
          <p className="text-neutral-400 mb-8">
            Rebranding is one of the most high-stakes maneuvers a company can execute. A successful rebrand signals maturity, justifies higher pricing, and captures new demographics. A failed rebrand confuses the market and erases years of built-up trust. The secret lies in understanding whether your company requires an <em>evolution</em> (a polish) or a <em>revolution</em> (a pivot).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl relative overflow-hidden">
              <Repeat className="w-8 h-8 text-indigo-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Evolutionary Rebranding</h3>
              <p className="text-neutral-400">
                For companies with strong existing equity, we perform a surgical modernization. We refine the typography, simplify the logo marks, and update the color palettes to meet modern digital standards, all while retaining the core soul of the brand that your clients recognize.
              </p>
            </div>
            
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl relative overflow-hidden">
              <Rocket className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Revolutionary Pivots</h3>
              <p className="text-neutral-400">
                When a company fundamentally changes its business model, targets a completely new demographic, or needs to shed a legacy reputation, we tear down the old architecture. We engineer a radically new identity designed aggressively for the new trajectory.
              </p>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">The Rollout Strategy</h3>
          <p className="text-neutral-400">
            A rebrand is useless if it is not deployed correctly. We map out the entire migration process—ensuring that your digital presence, physical assets, and internal communications switch over seamlessly, creating a massive PR event rather than a confusing transition.
          </p>
        </article>
      </section>

      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-indigo-500/20 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>
          <h2 className="text-3xl font-bold mb-4">Signal your evolution.</h2>
          <p className="text-neutral-400 mb-8 max-w-lg mx-auto">Your business has outgrown its current look. Let's design the identity for your next phase of scale.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-500 transition-colors shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_40px_rgba(79,70,229,0.5)]">
            Plan Your Rebrand
          </Link>
        </div>
      </section>
    </main>
  );
}