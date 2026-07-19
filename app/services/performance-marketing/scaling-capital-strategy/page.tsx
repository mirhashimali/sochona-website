import type { Metadata } from "next";
import Link from "next/link";
import { TrendingUp, Calculator, BarChart3, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Scaling Capital Strategy | Sochona",
  description: "When to push the gas? Understand the mathematical intersection of LTV, CAC, and cash-flow cycles to scale ad spend aggressively and profitably.",
};

export default function ScalingCapitalPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="mb-8">
          <Link href="/services/performance-marketing" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm font-semibold transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Performance Marketing
          </Link>
        </div>
        <div className="inline-block px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500 text-sm font-semibold tracking-wide mb-6">
          Fiscal Growth
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">
          The Math of <br />Aggressive Scaling.
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Scaling isn't just about turning up the daily budget. It's about understanding the velocity of your cash-flow cycle and the LTV-to-CAC ratio that makes your business unit-economically viable.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-24">
        <article className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">Growth Velocity vs. Profitability</h2>
          <p className="text-neutral-400 mb-8">
            The biggest mistake scaling agencies make is confusing "Revenue Growth" with "Capital Efficiency." We often see companies double their ad spend only to find that their CPA (Cost Per Acquisition) increases non-linearly, destroying their margins. Scaling must be calculated. It requires modeling how much you can afford to pay for a customer today, based on how much revenue that customer will generate over the next 12–24 months.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl">
              <Calculator className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Unit Economics First</h3>
              <p className="text-neutral-400">
                We map your entire financial lifecycle. If your LTV is $2,000 and your CAC is $200, you aren't spending enough—you're being fiscally irresponsible by not acquiring more customers while the unit economics hold.
              </p>
            </div>
            
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl">
              <TrendingUp className="w-8 h-8 text-red-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Cash-Flow Velocity</h3>
              <p className="text-neutral-400">
                Scaling eats cash. We ensure your ad campaigns are modeled around your specific cash-conversion cycle, ensuring that your ad spend does not outpace your ability to collect revenue.
              </p>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">The Scaling Roadmap</h3>
          <p className="text-neutral-400">
            We don't just run ads; we partner with you on capital deployment. We advise on when to throttle spend, when to increase it, and how to allocate it across various funnel stages to maintain target margins. True scale is the result of predictable, compounding returns—not gambling on a viral trend.
          </p>
        </article>
      </section>

      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-orange-500/20 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>
          <h2 className="text-3xl font-bold mb-4">Model your growth.</h2>
          <p className="text-neutral-400 mb-8 max-w-lg mx-auto">Let us analyze your unit economics and build a scaling roadmap that preserves your margins.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-500 transition-colors shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_40px_rgba(234,88,12,0.5)]">
            Analyze Scaling Potential
          </Link>
        </div>
      </section>
    </main>
  );
}