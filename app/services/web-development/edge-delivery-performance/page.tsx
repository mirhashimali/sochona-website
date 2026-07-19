import type { Metadata } from "next";
import Link from "next/link";
import { Globe, Zap, ArrowRight, Server } from "lucide-react";

export const metadata: Metadata = {
  title: "Edge Delivery Architecture | Sochona",
  description: "The physics of sub-second load times. How Edge Computing ensures your digital engine performs globally.",
};

export default function EdgePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="mb-8">
          <Link href="/services/web-development" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Web Development
          </Link>
        </div>
        <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-wide mb-6">
          Performance Engineering
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
          The Physics of <br />Sub-Second Loads.
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Latency is not a technical inconvenience; it is a direct tax on your conversion rate. If your digital infrastructure relies on a single, centralized server, you are losing market share every millisecond.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-24">
        <article className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">The Latency Tax</h2>
          <p className="text-neutral-400 mb-8">
            Traditional hosting forces every global user to request data from a single origin point (e.g., a server in Virginia). The physical distance data must travel creates an unavoidable delay. Industry leaders like Amazon have calculated that every 100ms of latency costs them approximately 1% in total sales. For mid-market companies, this "Latency Tax" is even more aggressive, impacting both user experience and SEO rankings.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl">
              <Globe className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">The Edge Paradigm</h3>
              <p className="text-neutral-400">
                We deploy your application to an Edge Network, caching your code at hundreds of locations worldwide. A user in London pulls from a server in London; a user in Tokyo pulls from Tokyo. Distance is eliminated.
              </p>
            </div>
            
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl">
              <Zap className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Edge Compute</h3>
              <p className="text-neutral-400">
                Modern edge architecture doesn't just store static files; it executes server-side logic locally to the user. This means personalized content, authenticated redirects, and database queries happen at the Edge, resulting in sub-second TTFB (Time to First Byte).
              </p>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">Winning the Speed War</h3>
          <p className="text-neutral-400">
            By eradicating the latency tax, we immediately lift baseline conversion rates across all geographic regions. You don't have to spend more on ads if your existing traffic converts at double the rate. Performance is a high-leverage revenue strategy.
          </p>
        </article>
      </section>

      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-blue-500/20 rounded-3xl p-12 relative overflow-hidden">
          <h2 className="text-3xl font-bold mb-4">Deploy to the Edge.</h2>
          <p className="text-neutral-400 mb-8 max-w-lg mx-auto">Migrate your infrastructure to a distributed global network for instant global performance.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)]">
            Start Edge Deployment
          </Link>
        </div>
      </section>
    </main>
  );
}