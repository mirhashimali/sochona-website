import type { Metadata } from "next";
import Link from "next/link";
import { TrendingDown, MousePointer2, ActivitySquare, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Core Web Vitals & Algorithmic Penalties | Sochona",
  description: "Learn how Google silently demotes unmaintained digital properties and why proactive code maintenance is mandatory for organic visibility.",
};

export default function CoreWebVitalsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="mb-8">
          <Link href="/services/maintenance" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-semibold transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Maintenance
          </Link>
        </div>
        <div className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-semibold tracking-wide mb-6">
          Search Engineering
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-500">
          The Silent <br />Demotion.
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Google no longer just reads your content; it measures your code. If your digital property is slow, jumpy, or unresponsive, the algorithm will ruthlessly strip your organic market share.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-24">
        <article className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">The Experience Era of Search</h2>
          <p className="text-neutral-400 mb-8">
            Historically, Search Engine Optimization (SEO) was entirely about keyword density and backlink profiles. Today, Google's algorithm heavily weights <strong>Core Web Vitals</strong>—a set of strict technical metrics that measure the real-world user experience of your web application. The problem? Code degrades over time. As you add new marketing scripts, upload heavier images, and integrate third-party tools, your metrics slip.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl relative overflow-hidden">
              <ActivitySquare className="w-8 h-8 text-indigo-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">LCP & INP Engineering</h3>
              <p className="text-neutral-400">
                Largest Contentful Paint (LCP) dictates how fast your hero section loads. Interaction to Next Paint (INP) measures how fast the site reacts when a user clicks a button. We proactively refactor your code to keep these metrics in the top 1st percentile.
              </p>
            </div>
            
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl relative overflow-hidden">
              <TrendingDown className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">The Algorithmic Penalty</h3>
              <p className="text-neutral-400">
                Failing Core Web Vitals triggers a silent penalty. You will not receive a notification from Google; you will simply watch your high-intent traffic dry up as competitors with better-maintained codebases take your spot on page one.
              </p>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">Maintenance is Marketing</h3>
          <p className="text-neutral-400">
            Many businesses view maintenance as an IT cost. We view it as an active SEO strategy. By putting your platform on a rigorous monthly maintenance schedule—deferring non-critical JavaScript, compressing modern image formats, and stabilizing layouts—we protect and scale your organic pipeline.
          </p>
        </article>
      </section>

      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-indigo-500/20 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>
          <h2 className="text-3xl font-bold mb-4">Protect your organic real estate.</h2>
          <p className="text-neutral-400 mb-8 max-w-lg mx-auto">Let us analyze your Core Web Vitals and deploy the technical fixes required to dominate search.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-500 transition-colors shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_40px_rgba(79,70,229,0.5)]">
            Audit Your Codebase
          </Link>
        </div>
      </section>
    </main>
  );
}