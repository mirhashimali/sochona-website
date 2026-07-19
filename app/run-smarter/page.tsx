import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business Automation & Custom CRMs | Sochona",
  description: "Automate your workflow. We develop custom mini-CRMs, email automations, and data dashboards to help your business operate with absolute efficiency.",
};

export default function RunSmarterPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          Automate. <br />Scale. Dominate.
        </h1>
        <p className="text-xl text-neutral-400">
          Manual tasks destroy profit margins. We build custom infrastructure, internal dashboards, and automated workflows so you can focus on growing your business, not just running it.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Made this whole card a clickable link to Automation */}
        <Link href="/services/automation" className="block bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-purple-500/50 transition-colors">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">CRM & Internal Systems</h2>
          <p className="text-neutral-400 mb-6">Bespoke software solutions designed exactly for how your team operates.</p>
          <ul className="space-y-2 text-neutral-300 font-medium">
            <li>✓ Mini CRM Development</li>
            <li>✓ Admin Dashboards & Staff Portals</li>
            <li>✓ Appointment & Proposal Systems</li>
            <li>✓ Invoice & Receipt Generation</li>
          </ul>
        </Link>
        
        {/* Made this whole card a clickable link to Automation / Analytics */}
        <Link href="/services/automation" className="block bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-pink-500/50 transition-colors">
          <h2 className="text-2xl font-bold mb-4 text-pink-400">Analytics & Automation</h2>
          <p className="text-neutral-400 mb-6">Make decisions based on hard data. We connect your tools and automate the busywork.</p>
          <ul className="space-y-2 text-neutral-300 font-medium">
            <li>✓ Business Workflow Automation</li>
            <li>✓ Google Sheets & Email Automation</li>
            <li>✓ KPI Reporting & Marketing Attribution</li>
            <li>✓ Call & Event Tracking (GTM)</li>
          </ul>
        </Link>
      </section>

      <section className="max-w-3xl mx-auto px-6 text-center">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Reclaim your time.</h2>
          <p className="text-neutral-400 mb-8">Let's build a system that works while you sleep.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700 transition-colors">
            Automate Your Business
          </Link>
        </div>
      </section>
    </main>
  );
}