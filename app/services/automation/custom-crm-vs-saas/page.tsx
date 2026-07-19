import type { Metadata } from "next";
import Link from "next/link";
import { Database, TrendingDown, Network, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The SaaS Bloat Crisis: Custom CRM Architecture | Sochona",
  description: "An industry study on why modern businesses are abandoning monolithic enterprise CRMs for bespoke, logic-first architecture.",
};

export default function CustomCRMPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="mb-8">
          <Link href="/services/automation" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-semibold transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Automation
          </Link>
        </div>
        <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-semibold tracking-wide mb-6">
          Market Analysis
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
          The Great SaaS <br />Exodus.
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          The golden era of the monolithic CRM is over. Businesses are realizing that renting bloated, one-size-fits-all software is a tax on both capital and operational agility.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-24">
        <article className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">Reaching Peak SaaS Saturation</h2>
          <p className="text-neutral-400 mb-8">
            Look at the P&L of any scaling agency or e-commerce brand today, and you will find a glaring anomaly: software licensing costs have quietly become one of the highest operational expenses, second only to payroll. We call this the <strong>"Feature Fallacy."</strong> Companies are coerced into paying $150+ per user, per month for platforms like Salesforce or HubSpot, only to utilize roughly 10% of the available features. 
          </p>
          <p className="text-neutral-400 mb-12">
            The market is shifting. We are observing a mass migration of mid-market companies abandoning monolithic SaaS in favor of lightweight, bespoke infrastructure. The math is simple: why rent a factory when you only need a specialized assembly line?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl">
              <TrendingDown className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">The Penalty of Scale</h3>
              <p className="text-sm text-neutral-400">Per-seat licensing models actively punish you for hiring. Scaling your team should not exponentially scale your overhead.</p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl">
              <Database className="w-8 h-8 text-indigo-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Data Hostage Situations</h3>
              <p className="text-sm text-neutral-400">Enterprise CRMs trap your data in their ecosystem. Extracting and migrating that data later becomes a costly nightmare.</p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl">
              <Network className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Workflow Friction</h3>
              <p className="text-sm text-neutral-400">Forcing your unique sales process into a rigid software template creates operational bottlenecks and kills team adoption.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-4">The Solution: Logic-Driven Architecture</h3>
          <p className="text-neutral-400">
            The modern approach is to build a "Micro-CRM." By mapping your exact business logic first, we engineer a web application that does exactly what you need—nothing more, nothing less. Your team gets a lightning-fast interface, your data lives on your own AWS or Vercel servers, and your monthly software overhead drops to near zero. You stop renting, and start owning your operational engine.
          </p>
        </article>
      </section>

      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-purple-500/20 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
          <h2 className="text-3xl font-bold mb-4">Stop paying the bloatware tax.</h2>
          <p className="text-neutral-400 mb-8 max-w-lg mx-auto">Let's audit your current software stack and calculate how much capital you can reclaim by owning your infrastructure.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-500 transition-colors shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]">
            Commission a Systems Audit
          </Link>
        </div>
      </section>
    </main>
  );
}