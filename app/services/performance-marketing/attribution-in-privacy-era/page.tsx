import type { Metadata } from "next";
import Link from "next/link";
import { EyeOff, Fingerprint, Network, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Attribution & Signal Loss in the Privacy Era | Sochona",
  description: "The hard truth about marketing data in a post-iOS14 world. How to build reliable attribution models when platform pixels fail.",
};

export default function AttributionPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="mb-8">
          <Link href="/services/performance-marketing" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm font-semibold transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Performance Marketing
          </Link>
        </div>
        <div className="inline-block px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500 text-sm font-semibold tracking-wide mb-6">
          Data Engineering
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">
          The Death of <br />Easy Attribution.
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Privacy regulations, browser-level blocking, and platform signal loss have rendered traditional "last-click" attribution effectively obsolete.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-24">
        <article className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">Navigating the Signal Vacuum</h2>
          <p className="text-neutral-400 mb-8">
            Ad platforms (Google, Meta) are no longer seeing the full picture of the user journey. Between iOS app-tracking transparency, cookie-less browser updates, and cross-device usage, your CRM is likely only capturing 60-70% of the actual marketing impact. Relying on "Platform Reported Conversion" data to make bidding decisions is a recipe for catastrophic budget misalignment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl">
              <EyeOff className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">The Data Gap</h3>
              <p className="text-neutral-400">
                Data is leaking from the funnel. If you don't reconcile your ad platform data with your internal "source of truth" (your CRM), you are bidding based on partial information.
              </p>
            </div>
            
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl">
              <Fingerprint className="w-8 h-8 text-red-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Offline Attribution</h3>
              <p className="text-neutral-400">
                We implement Server-Side Tracking (SST) and Enhanced Conversions. By routing data directly from your server to Google's API, we bypass browser-level blocking and maximize data fidelity.
              </p>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">Holistic Analytics</h3>
          <p className="text-neutral-400">
            We don't look at metrics in isolation. We analyze MER (Marketing Efficiency Ratio)—total revenue divided by total ad spend—as the final arbiter of truth. When individual pixel tracking fails, your high-level business performance data provides the signal that allows us to bid with confidence.
          </p>
        </article>
      </section>

      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-orange-500/20 rounded-3xl p-12 relative overflow-hidden">
          <h2 className="text-3xl font-bold mb-4">Fix your data fidelity.</h2>
          <p className="text-neutral-400 mb-8 max-w-lg mx-auto">Stop bidding in the dark. Let us engineer a server-side attribution model for your business.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-500 transition-colors">
            Audit Data Pipeline
          </Link>
        </div>
      </section>
    </main>
  );
}