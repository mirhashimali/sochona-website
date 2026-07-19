import type { Metadata } from "next";
import Link from "next/link";
import { Bot, ArrowRight, BrainCircuit } from "lucide-react";

export const metadata: Metadata = {
  title: "Optimizing for AI Overviews (SGE) | Sochona",
  description: "Why traditional SEO is changing. Learn how to capture the 'Answer Engine' traffic of the future by optimizing for AI summaries.",
};

export default function SGEPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="mb-8">
          <Link href="/services/seo" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm font-semibold transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to SEO
          </Link>
        </div>
        <div className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-semibold tracking-wide mb-6">
          AI Engineering
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-500">
          The Death of the <br />"Blue Link".
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Google is evolving from a link indexer to an Answer Engine. If your content is structured for keywords rather than entities, the AI Overviews will ignore you.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-24">
        <article className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">The Semantic Shift</h2>
          <p className="text-neutral-400 mb-8">
            In the Search Generative Experience (SGE), your meta-description is obsolete. The AI evaluates your content based on <em>Topical Authority</em>. It looks for depth, expert consensus, and structured answers to complex queries. If you don't provide the answer directly, Google's LLM will source it from someone who does.
          </p>

          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-3">
              <BrainCircuit className="w-6 h-6" /> Winning the AI Summary
            </h3>
            <ul className="space-y-6 text-neutral-300">
              <li>
                <strong className="text-white block mb-1">Atomic Content Structuring</strong>
                We rewrite your content to be "chunkable." Large language models prioritize clean, logical hierarchies where questions are clearly defined, followed by factual, data-backed answers.
              </li>
              <li>
                <strong className="text-white block mb-1">Perspective & Original Data</strong>
                AI models weigh original data, case studies, and proprietary research higher than general summaries. We leverage your business data to ensure you are the cited "expert" source in AI summaries.
              </li>
            </ul>
          </div>
        </article>
      </section>

      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-emerald-500/20 rounded-3xl p-12 relative overflow-hidden">
          <h2 className="text-3xl font-bold mb-4">Capture the answer box.</h2>
          <p className="text-neutral-400 mb-8 max-w-lg mx-auto">Let us restructure your content strategy to align with the future of AI-driven search.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-500 transition-colors">
            Optimize for AI Overviews
          </Link>
        </div>
      </section>
    </main>
  );
}