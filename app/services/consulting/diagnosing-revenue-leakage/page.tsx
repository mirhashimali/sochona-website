import type { Metadata } from "next";
import Link from "next/link";
import { Search, Scissors, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Diagnosing Revenue Leakage | Sochona",
  description: "An analysis of the invisible costs bleeding your margins. Learn how ruthless audits uncover friction points in ad spend and technical infrastructure.",
};

export default function RevenueLeakagePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="mb-8">
          <Link href="/services/consulting" className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-500 text-sm font-semibold transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Consulting
          </Link>
        </div>
        <div className="inline-block px-4 py-1.5 rounded-full border border-amber-600/30 bg-amber-600/10 text-amber-500 text-sm font-semibold tracking-wide mb-6">
          Financial Strategy
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-red-500">
          Plugging the <br />Invisible Holes.
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Most companies do not have a traffic problem; they have a friction problem. Revenue leakage occurs in the microscopic gaps between your marketing, your software, and your sales team.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-24">
        <article className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">The Illusion of "More"</h2>
          <p className="text-neutral-400 mb-8">
            When sales drop, the default executive reaction is to pour more capital into the top of the funnel—running more ads, publishing more content, and hiring more sales reps. This is equivalent to pouring water into a bucket full of holes. Before you scale acquisition, you must ruthlessly audit and repair your retention and conversion infrastructure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl relative overflow-hidden">
              <Search className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">The Forensic Audit</h3>
              <p className="text-neutral-400">
                We act as impartial interrogators of your business. We rip apart your Google Ads accounts to find wasted spend on broad-match queries. We map your CRM workflows to identify exactly how long it takes your team to respond to a qualified lead.
              </p>
            </div>
            
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl relative overflow-hidden">
              <Scissors className="w-8 h-8 text-red-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Cutting the Bloat</h3>
              <p className="text-neutral-400">
                Once the leaks are quantified, we engineer the fixes. This often involves consolidating overlapping software subscriptions, rewriting high-bounce-rate landing pages, and establishing automated follow-up sequences that catch prospects falling through the cracks.
              </p>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">Profit is Found in the Margins</h3>
          <p className="text-neutral-400">
            A 1% increase in conversion rate across a 7-figure funnel generates exponential returns without requiring a single extra dollar in ad spend. Our consulting mandate is simple: we find the hidden capital trapped inside your inefficient processes and re-inject it into your bottom line.
          </p>
        </article>
      </section>

      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-amber-600/20 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent opacity-50"></div>
          <h2 className="text-3xl font-bold mb-4">Find your hidden capital.</h2>
          <p className="text-neutral-400 mb-8 max-w-lg mx-auto">Let us conduct a forensic audit of your digital infrastructure and patch the holes in your funnels.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-amber-600 text-white font-bold rounded-full hover:bg-amber-500 transition-colors shadow-[0_0_20px_rgba(217,119,6,0.3)] hover:shadow-[0_0_40px_rgba(217,119,6,0.5)]">
            Commission a Strategic Audit
          </Link>
        </div>
      </section>
    </main>
  );
}