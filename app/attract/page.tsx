import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Attract High-Intent Traffic | Sochona",
  description: "Scale your reach with data-driven Google Ads, Performance Max campaigns, and advanced Technical SEO. We put your business in front of the right audience.",
};

export default function AttractPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
          Dominate Search. <br />Attract Growth.
        </h1>
        <p className="text-xl text-neutral-400">
          Stop buying empty clicks. We build high-performance acquisition engines using Google Ads, Local SEO, and precision targeting to bring ready-to-buy customers to your doorstep.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-blue-500/50 transition-colors">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Performance Marketing</h2>
          <p className="text-neutral-400 mb-6">We deploy scalable capital across the Google ecosystem to capture high-intent demand.</p>
          <ul className="space-y-2 text-neutral-300 font-medium">
            <li>✓ Google Search & Display Ads</li>
            <li>✓ Performance Max Campaigns</li>
            <li>✓ YouTube Ad Placements</li>
            <li>✓ Remarketing & Lead Funnels</li>
          </ul>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-colors">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">Search Engine Optimisation</h2>
          <p className="text-neutral-400 mb-6">Own your organic real estate. We engineer your web presence to rank for the keywords that drive revenue.</p>
          <ul className="space-y-2 text-neutral-300 font-medium">
            <li>✓ Technical & On-Page SEO</li>
            <li>✓ Local SEO & Google Business Profile</li>
            <li>✓ Keyword Research & Competitor Analysis</li>
            <li>✓ Structured Data & Sitemap Setup</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-3xl mx-auto px-6 text-center">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to capture more market share?</h2>
          <p className="text-neutral-400 mb-8">Let's audit your current acquisition strategy and identify the gaps.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors">
            Start the Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}