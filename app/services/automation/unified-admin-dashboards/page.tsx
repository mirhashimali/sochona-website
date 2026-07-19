import type { Metadata } from "next";
import Link from "next/link";
import { Command, Activity, Fingerprint, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Fragmentation Problem: Unified Admin Portals | Sochona",
  description: "An industry deep dive into solving data silos. Learn how centralized command centers are replacing the chaos of managing 15 different SaaS tools.",
};

export default function AdminPortalPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="mb-8">
          <Link href="/services/automation" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Automation
          </Link>
        </div>
        <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-semibold tracking-wide mb-6">
          Infrastructure Report
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          The SaaS <br />Fragmentation Problem.
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          The average modern business utilizes over 15 different software tools. Data is siloed, reporting is disjointed, and executives are making decisions blindly.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-24">
        <article className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">The Illusion of Integration</h2>
          <p className="text-neutral-400 mb-8">
            Most businesses operate in a state of cognitive overload. Marketing metrics live in Google Analytics, ad spend in Meta, sales pipelines in Pipedrive, and fulfillment in Shopify. Even with basic Zapier connections, finding the definitive truth—such as the true Cost of Acquisition (CAC) compared to Lifetime Value (LTV)—requires manually exporting CSVs and wrestling with pivot tables. 
          </p>

          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
              <Command className="w-6 h-6" /> The Single Source of Truth (SSOT)
            </h3>
            <ul className="space-y-6 text-neutral-300">
              <li>
                <strong className="text-white block mb-1">Data Parity via API Middleware</strong>
                We solve fragmentation at the code level. By building custom API middleware, we ingest real-time data from every tool in your stack and normalize it into a unified, secure database that you own.
              </li>
              <li>
                <strong className="text-white block mb-1">Executive Visibility</strong>
                Stop logging into 5 different platforms to check the health of your company. We engineer centralized command centers that display only the vital KPIs necessary for high-level decision making.
              </li>
              <li>
                <strong className="text-white block mb-1">Strict Access Architectures</strong>
                A unified dashboard allows for absolute control. Through robust Role-Based Access Control (RBAC), your sales team sees the pipeline, your accountants see the cash flow, and only the executive suite sees the macro-analytics.
              </li>
            </ul>
          </div>
        </article>
      </section>

      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-cyan-500/20 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
          <h2 className="text-3xl font-bold mb-4">Regain control of your data.</h2>
          <p className="text-neutral-400 mb-8 max-w-lg mx-auto">Let's consolidate your operational chaos into a single, beautifully engineered dashboard.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-cyan-500 text-black font-bold rounded-full hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)]">
            Architect Your Command Center
          </Link>
        </div>
      </section>
    </main>
  );
}