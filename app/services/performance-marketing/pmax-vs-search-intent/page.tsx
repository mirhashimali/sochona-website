import type { Metadata } from "next";
import Link from "next/link";
import { Cpu, Search, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "PMax vs. Search: Algorithmic Scaling vs. Manual Precision | Sochona",
  description: "An analysis of the war for intent. When to rely on Google’s black-box AI and when to exert surgical manual control over your keyword targeting.",
};

export default function PMaxSearchPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="mb-8">
          <Link href="/services/performance-marketing" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm font-semibold transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Performance Marketing
          </Link>
        </div>
        <div className="inline-block px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500 text-sm font-semibold tracking-wide mb-6">
          Campaign Strategy
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
          The War for <br />Intent Capture.
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Performance Max is a black box. Search is a scalpel. Understanding when to use which is the difference between a profitable account and wasted ad spend.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-24">
        <article className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">The Black Box Dilemma</h2>
          <p className="text-neutral-400 mb-8">
            PMax (Performance Max) uses Google's predictive AI to cross-channel bid on your behalf. It is excellent at finding incremental, broad-intent conversions at scale, but it lacks the nuance of direct-intent targeting. If you are a high-ticket service, you cannot afford to have your budget diluted by low-quality PMax prospecting. 
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl">
              <Search className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Manual Search Control</h3>
              <p className="text-neutral-400">
                Search campaigns are for capturing high-intent "now" traffic. We leverage exact-match keywords to ensure your budget is deployed only when a user is demonstrably ready to transact.
              </p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl">
              <Cpu className="w-8 h-8 text-red-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Algorithmic Scaling</h3>
              <p className="text-neutral-400">
                PMax is for scale. Once you have exhausted your high-intent keyword pool, PMax leverages your first-party data and conversion signals to find prospects you otherwise wouldn't reach.
              </p>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">The Hybrid Strategy</h3>
          <p className="text-neutral-400">
            A winning account doesn't choose between these two—it orchestrates them. We use Search to stabilize your bottom-line ROAS and PMax to drive aggressive, algorithmic top-of-funnel discovery. Without a strict negative keyword list in PMax and tight bid caps in Search, you are leaving thousands on the table.
          </p>
        </article>
      </section>

      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-orange-500/20 rounded-3xl p-12 relative overflow-hidden">
          <h2 className="text-3xl font-bold mb-4">Optimize your bid strategy.</h2>
          <p className="text-neutral-400 mb-8 max-w-lg mx-auto">Let us conduct a forensic audit of your campaign architecture.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-500 transition-colors">
            Audit Campaign Architecture
          </Link>
        </div>
      </section>
    </main>
  );
}