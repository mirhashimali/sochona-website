import type { Metadata } from "next";
import Link from "next/link";
import { Server, Zap, Globe, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Edge Architecture & The Latency Tax | Sochona",
  description: "An analysis of why centralized legacy servers are bleeding your conversions and why modern businesses deploy exclusively to the Edge.",
};

export default function EdgeArchitecturePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="mb-8">
          <Link href="/services/maintenance" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Maintenance
          </Link>
        </div>
        <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-wide mb-6">
          Performance Engineering
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
          The Hidden Tax <br />of Milliseconds.
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Latency is not a technical inconvenience; it is a direct tax on your conversion rate. If your digital infrastructure relies on a single, centralized server, you are actively losing global market share.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-24">
        <article className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">The Legacy Server Bottleneck</h2>
          <p className="text-neutral-400 mb-8">
            For decades, the standard protocol was to rent a server in a fixed location (e.g., Virginia) and force every user on Earth to request data from that single point. If a user in London or Tokyo visits your site, the physical distance the data must travel creates an unavoidable delay. Amazon famously calculated that just 100 milliseconds of latency costs them 1% in total sales. For mid-market companies, the penalty is often much steeper.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl relative overflow-hidden">
              <Globe className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">The Edge Paradigm</h3>
              <p className="text-neutral-400">
                Modern enterprise applications are not hosted in one place. They are deployed to an Edge Network. Your entire codebase is cached and distributed across hundreds of data centers globally. A user in London pulls from a server in London; a user in Tokyo pulls from Tokyo.
              </p>
            </div>
            
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl relative overflow-hidden">
              <Zap className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Instantaneous Compute</h3>
              <p className="text-neutral-400">
                Beyond static asset delivery, modern edge architecture executes server-side functions at the location closest to the user. This results in sub-second Time to First Byte (TTFB) and a frictionless, app-like experience for global traffic.
              </p>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">Capitalizing on Speed</h3>
          <p className="text-neutral-400">
            We migrate our partners away from bloated shared hosting and legacy VPS environments onto enterprise-grade Edge infrastructure (utilizing AWS, Vercel, and Cloudflare). By eradicating the latency tax, we immediately lift baseline conversion rates across all geographic regions without spending a single dollar on marketing.
          </p>
        </article>
      </section>

      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-blue-500/20 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
          <h2 className="text-3xl font-bold mb-4">Stop paying the latency tax.</h2>
          <p className="text-neutral-400 mb-8 max-w-lg mx-auto">Let us migrate your digital infrastructure to a globally distributed Edge network.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)]">
            Deploy to the Edge
          </Link>
        </div>
      </section>
    </main>
  );
}