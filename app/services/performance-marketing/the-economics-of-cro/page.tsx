import type { Metadata } from "next";
import Link from "next/link";
import { BarChart3, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Economics of Conversion Rate Optimisation | Sochona",
  description: "Traffic is a commodity; conversion is the product. Learn how to engineer your landing pages for maximum ROI.",
};

export default function CROPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="mb-8">
          <Link href="/services/performance-marketing" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm font-semibold transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Performance Marketing
          </Link>
        </div>
        <div className="inline-block px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500 text-sm font-semibold tracking-wide mb-6">
          Conversion Strategy
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">
          Traffic is Cheap. <br />Conversion is Expensive.
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          If your conversion rate is 1%, you are paying 100x what you need to acquire a customer. We treat the landing page as an engineering challenge, not a design project.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-24">
        <article className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">The CRO Multiplier</h2>
          <p className="text-neutral-400 mb-8">
            Most businesses obsess over their CPC (Cost Per Click). This is vanity. A 50% decrease in CPC is nice, but a 100% increase in Conversion Rate (CR) is transformative. When you optimize the bottom of the funnel, you gain the ability to bid more aggressively than your competitors—effectively pricing them out of the auction while capturing a higher volume of traffic.
          </p>

          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-orange-500 mb-6 flex items-center gap-3">
              <BarChart3 className="w-6 h-6" /> The Optimization Lifecycle
            </h3>
            <ul className="space-y-6 text-neutral-300">
              <li>
                <strong className="text-white block mb-1">Behavioral Heatmapping</strong>
                We install session recording and scroll tracking to see exactly where users stop reading or where they get confused.
              </li>
              <li>
                <strong className="text-white block mb-1">Multivariate Testing</strong>
                We don't rely on intuition. We run A/B/n tests on headlines, button copy, and CTA positioning to move the needle by statistically significant margins.
              </li>
              <li>
                <strong className="text-white block mb-1">Friction Audit</strong>
                We identify redundant form fields, slow load times, and broken mobile responsiveness that bleed prospects before they reach the thank-you page.
              </li>
            </ul>
          </div>
        </article>
      </section>

      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-orange-500/20 rounded-3xl p-12 relative overflow-hidden">
          <h2 className="text-3xl font-bold mb-4">Squeeze more ROI from your budget.</h2>
          <p className="text-neutral-400 mb-8 max-w-lg mx-auto">Let us audit your funnel and identify where your traffic is currently stalling.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-500 transition-colors">
            Audit Landing Page Funnels
          </Link>
        </div>
      </section>
    </main>
  );
}