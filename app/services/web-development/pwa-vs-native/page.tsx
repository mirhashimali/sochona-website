import type { Metadata } from "next";
import Link from "next/link";
import { Smartphone, Zap, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "PWA vs. Native Apps: The Distribution Multiplier | Sochona",
  description: "Why Progressive Web Apps are the superior choice for high-growth startups and e-commerce, bypassing app store friction.",
};

export default function PWAPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="mb-8">
          <Link href="/services/web-development" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Web Development
          </Link>
        </div>
        <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-wide mb-6">
          Platform Strategy
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
          The PWA Advantage: <br />Bypassing the App Store.
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Native apps suffer from an aggressive drop-off rate: you lose roughly 20% of your audience for every click required to install. PWAs remove the friction.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-24">
        <article className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">Distribution Friction</h2>
          <p className="text-neutral-400 mb-8">
            The App Store model is broken for all but the biggest brands. It forces users to navigate to a third-party store, wait for a download, and grant permissions before they ever see your value. Progressive Web Apps (PWAs) are designed for the modern web—they offer offline caching, push notifications, and the ability to be "installed" to the home screen directly from your browser in a single tap.
          </p>

          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-3">
              <Zap className="w-6 h-6" /> Why PWAs Scale
            </h3>
            <ul className="space-y-4 text-neutral-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <span><strong>Instant Engagement:</strong> No App Store submission delays, no review process, and immediate updates across all devices.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <span><strong>SEO Integration:</strong> Unlike native apps, PWA content is indexable by Google. You are building an app that captures organic traffic.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <span><strong>Maintenance Economy:</strong> Maintain one codebase for desktop, mobile, and app. You save 50%+ in development costs by not building separate iOS and Android native apps.</span>
              </li>
            </ul>
          </div>
        </article>
      </section>

      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-blue-500/20 rounded-3xl p-12 relative overflow-hidden">
          <h2 className="text-3xl font-bold mb-4">Scale with a PWA.</h2>
          <p className="text-neutral-400 mb-8 max-w-lg mx-auto">Eliminate app store friction and capture more users with a lightning-fast PWA.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-colors">
            Engineer Your PWA
          </Link>
        </div>
      </section>
    </main>
  );
}