import type { Metadata } from "next";
import Link from "next/link";
import { Zap, ArrowRight, Activity, Server, ShieldCheck, Database } from "lucide-react";

export const metadata: Metadata = {
  title: "Technical SEO Infrastructure: Beyond Core Web Vitals | Sochona",
  description: "An architectural guide to SEO. Why rendering, edge delivery, and technical debt are the primary factors determining your organic ceiling.",
};

export default function TechnicalSEOPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="mb-8">
          <Link href="/services/seo" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm font-semibold transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to SEO
          </Link>
        </div>
        <div className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-semibold tracking-wide mb-6">
          Architectural Strategy
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-500">
          The Speed of Trust: <br />Engineering SEO.
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Modern SEO is not a content problem; it is an engineering problem. If Google's bot cannot parse your site in milliseconds, you are invisible to the algorithm.
        </p>
      </section>
      
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <article className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">Performance as a Ranking Signal</h2>
          <p className="text-neutral-400 mb-8">
            Google measures Core Web Vitals (CWV) as a proxy for user experience. If your Largest Contentful Paint (LCP) exceeds 2.5 seconds, you are effectively signaling to the algorithm that your platform is unoptimized and unreliable. But this goes deeper than speed—it's about "Crawlability."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl">
              <Zap className="w-8 h-8 text-emerald-400 mb-4"/>
              <h3 className="text-2xl font-bold mb-2">Rendering Excellence</h3>
              <p className="text-neutral-400">We optimize your JavaScript bundles and asset delivery, ensuring your site renders instantly across all devices. We shift the heavy lifting to the Edge, reducing the time-to-first-byte to negligible levels.</p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl">
              <Database className="w-8 h-8 text-emerald-400 mb-4"/>
              <h3 className="text-2xl font-bold mb-2">Crawl Budget Strategy</h3>
              <p className="text-neutral-400">Search bots have a finite amount of time to spend on your site. We prevent index bloat by managing canonicalization and sitemap efficiency, ensuring bots spend their budget on your highest-converting pages, not low-value utility pages.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-4">The Invisible Decay</h3>
          <p className="text-neutral-400">
            Tech debt is cumulative. Every new marketing script, third-party pixel, or "helpful" plugin adds bloat to your source code. Over time, this bloat degrades your rankings silently. We treat SEO infrastructure as a living system, performing continuous refactoring to ensure your codebase remains lean, clean, and highly indexable.
          </p>
        </article>
      </section>

      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-emerald-500/20 rounded-3xl p-12 relative overflow-hidden">
          <h2 className="text-3xl font-bold mb-4">Engineer your authority.</h2>
          <p className="text-neutral-400 mb-8 max-w-lg mx-auto">Let us audit your technical stack and build a roadmap for flawless indexing.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-500 transition-colors">
            Audit Infrastructure
          </Link>
        </div>
      </section>
    </main>
  );
}