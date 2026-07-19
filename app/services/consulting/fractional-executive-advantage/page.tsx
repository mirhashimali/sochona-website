import type { Metadata } from "next";
import Link from "next/link";
import { LineChart, Handshake, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Fractional Executive Advantage | Sochona",
  description: "Why scaling mid-market companies are abandoning full-time executives in favor of high-impact, fractional Chief Technology and Marketing Officers.",
};

export default function FractionalExecutivePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="mb-8">
          <Link href="/services/consulting" className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 text-sm font-semibold transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Consulting
          </Link>
        </div>
        <div className="inline-block px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 text-sm font-semibold tracking-wide mb-6">
          Human Capital Strategy
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">
          The Death of the <br />Bloated C-Suite.
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Hiring a full-time CTO or CMO costs upwards of $250k+ base salary. For mid-market companies, accessing elite strategic minds on a fractional basis is the ultimate cheat code.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-24">
        <article className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">The Mid-Market Paradox</h2>
          <p className="text-neutral-400 mb-8">
            As your company scales from 7 to 8 figures, you reach a dangerous plateau. The founder can no longer manage technology infrastructure or direct response marketing, but the company’s cash flow cannot safely absorb a massive executive payroll. This forces companies to hire mid-level managers who lack the strategic vision to scale, resulting in stalled growth and burned capital.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl relative overflow-hidden">
              <Users className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Fractional Deployment</h3>
              <p className="text-neutral-400">
                A fractional executive integrates seamlessly with your leadership team for 10 to 20 hours a week. They do not get bogged down in office politics or daily minutiae; they are laser-focused on high-leverage strategy and systemic growth.
              </p>
            </div>
            
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl relative overflow-hidden">
              <LineChart className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Capital Efficiency</h3>
              <p className="text-neutral-400">
                By utilizing a fractional CTO or CMO, you gain access to top-tier, battle-tested talent at a fraction of the cost. The capital saved on benefits, equity, and salaries can be aggressively redeployed straight into ad spend or infrastructure development.
              </p>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">The Execution Mechanism</h3>
          <p className="text-neutral-400">
            We operate as your strategic layer. We audit your internal team, build the quarterly roadmaps, set the KPIs, and provide the technical and marketing oversight required. We manage your in-house juniors and third-party vendors, ensuring everyone executes against a unified, profitable vision.
          </p>
        </article>
      </section>

      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-yellow-500/20 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50"></div>
          <h2 className="text-3xl font-bold mb-4">Inject elite strategy into your board.</h2>
          <p className="text-neutral-400 mb-8 max-w-lg mx-auto">Let's discuss how fractional executive leadership can unblock your growth plateau.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-yellow-600 text-black font-bold rounded-full hover:bg-yellow-500 transition-colors shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_40px_rgba(234,179,8,0.5)]">
            Explore Fractional Advisory
          </Link>
        </div>
      </section>
    </main>
  );
}