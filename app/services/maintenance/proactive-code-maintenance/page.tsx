import type { Metadata } from "next";
import Link from "next/link";
import { Wrench, FileWarning, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Liability of Unmaintained Code | Sochona",
  description: "Why software is a depreciating asset without proactive patching, and the financial danger of treating infrastructure as a one-time expense.",
};

export default function ProactiveMaintenancePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="mb-8">
          <Link href="/services/maintenance" className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-400 text-sm font-semibold transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Maintenance
          </Link>
        </div>
        <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-500 text-sm font-semibold tracking-wide mb-6">
          System Integrity
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Software is a <br />Depreciating Asset.
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          The worst mindset a business can adopt is treating a web application like a building. Once constructed, software immediately begins to decay as the ecosystem around it evolves. 
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-24">
        <article className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">The Reality of Code Rot</h2>
          <p className="text-neutral-400 mb-8">
            Modern applications are built on complex stacks of dependencies, open-source libraries, and third-party APIs. Every single month, these underlying technologies release security patches, deprecate old functions, and update their protocols. If your codebase remains stagnant, it inevitably breaks. This is known in the industry as "Code Rot" or technical debt.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl relative overflow-hidden">
              <FileWarning className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">The Rewrite Trap</h3>
              <p className="text-neutral-400">
                Companies that refuse to pay for monthly maintenance eventually hit a wall where updating one plugin breaks the entire site. The only solution is a total rebuild. The capital required to rewrite a broken system is always 10x the cost of having maintained it properly.
              </p>
            </div>
            
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl relative overflow-hidden">
              <Clock className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Continuous Deployment</h3>
              <p className="text-neutral-400">
                Our engineering team acts as your permanent technical partner. We manage staging environments, test package upgrades before they hit production, and refactor legacy functions so your digital engine never depreciates in value.
              </p>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">Future-Proofing Your Investment</h3>
          <p className="text-neutral-400">
            A high-performance digital presence requires constant iteration. With a dedicated maintenance block, your team isn't just reacting to crashes; you have on-demand access to elite developers ready to implement new features, launch fresh landing pages, and scale your operations without the friction of hiring freelancers.
          </p>
        </article>
      </section>

      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-cyan-500/20 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
          <h2 className="text-3xl font-bold mb-4">Stop the decay.</h2>
          <p className="text-neutral-400 mb-8 max-w-lg mx-auto">Ensure your digital assets appreciate in value with proactive, enterprise-level maintenance.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-cyan-600 text-white font-bold rounded-full hover:bg-cyan-500 transition-colors shadow-[0_0_20px_rgba(8,145,178,0.3)] hover:shadow-[0_0_40px_rgba(8,145,178,0.5)]">
            Explore Maintenance Plans
          </Link>
        </div>
      </section>
    </main>
  );
}