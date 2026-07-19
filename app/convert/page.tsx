import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "High-Converting Web Design & CRO | Sochona",
  description: "Turn clicks into clients. We build custom web applications, landing pages, and lead funnels engineered for maximum Conversion Rate Optimisation (CRO).",
};

export default function ConvertPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-green-400">
          Turn Clicks <br />Into Clients.
        </h1>
        <p className="text-xl text-neutral-400">
          Traffic is useless if it doesn't convert. We design lightning-fast web applications and high-converting landing pages built on modern infrastructure to maximize your ROI.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Made this whole card a clickable link to Web Development */}
        <Link href="/services/web-development" className="block bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-colors">
          <h2 className="text-2xl font-bold mb-4 text-emerald-400">Web Development</h2>
          <p className="text-neutral-400 mb-6">Enterprise-grade digital experiences built for speed, security, and scalability.</p>
          <ul className="space-y-2 text-neutral-300 font-medium">
            <li>✓ Custom Web Applications & PWAs</li>
            <li>✓ High-Performance Corporate Websites</li>
            <li>✓ Vercel & Netlify Deployment</li>
            <li>✓ Website Migration & Redesign</li>
          </ul>
        </Link>
        
        {/* Made this whole card a clickable link to Performance Marketing (CRO) */}
        <Link href="/services/performance-marketing" className="block bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-green-500/50 transition-colors">
          <h2 className="text-2xl font-bold mb-4 text-green-400">Conversion Rate Optimisation</h2>
          <p className="text-neutral-400 mb-6">We eliminate friction from the buying process, ensuring every visitor has a clear path to purchase.</p>
          <ul className="space-y-2 text-neutral-300 font-medium">
            <li>✓ Landing Page Optimisation</li>
            <li>✓ Lead Funnel Design</li>
            <li>✓ Heatmaps & Microsoft Clarity</li>
            <li>✓ GA4 Enhanced Conversions</li>
          </ul>
        </Link>
      </section>

      <section className="max-w-3xl mx-auto px-6 text-center">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Is your website leaking leads?</h2>
          <p className="text-neutral-400 mb-8">Stop wasting ad spend on poorly optimized pages.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-600 transition-colors">
            Upgrade Your Digital Presence
          </Link>
        </div>
      </section>
    </main>
  );
}