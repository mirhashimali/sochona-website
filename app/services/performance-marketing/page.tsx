import type { Metadata } from "next";
import Link from "next/link";
import { Target, TrendingUp, MousePointerClick, BarChart3, Magnet, Wallet, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Performance Marketing & Google Ads | Sochona",
  description: "Stop buying empty clicks. We deploy scalable capital across the Google ecosystem (Search, PMax, YouTube) to capture high-intent demand and drive ROI.",
};

export default function PerformanceMarketingPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 mb-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-orange-400">Capital Deployment</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
          Stop buying clicks. <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">
            Buy customers.
          </span>
        </h1>
        <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
          Most marketing agencies focus on impressions, likes, and vanity metrics. We focus on one thing: Return on Investment (ROI). We design ruthless, precision-targeted ad campaigns engineered to extract maximum revenue from your ad spend.
        </p>
      </section>

      {/* The Philosophy Section */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none"></div>
          
          <h2 className="text-3xl font-bold mb-8 text-white relative z-10">Data-Driven Demand Capture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="space-y-4 text-neutral-400 text-lg leading-relaxed">
              <p>
                We don't guess. We test, measure, and scale. By tapping directly into the Google ecosystem, we put your offer in front of people who already have their credit cards out and are actively searching for your service.
              </p>
              <p>
                We handle the entire funnel. We don't just send traffic to a generic homepage; we direct it to hyper-optimized, high-converting landing pages built specifically to turn that click into a qualified lead.
              </p>
            </div>
            <div className="space-y-4 text-neutral-400 text-lg leading-relaxed">
              <ul className="space-y-4 mt-2 text-neutral-300 font-medium">
                <li className="flex items-center gap-3"><Wallet className="w-6 h-6 text-orange-500" /> Maximize Return on Ad Spend (ROAS)</li>
                <li className="flex items-center gap-3"><TrendingUp className="w-6 h-6 text-orange-500" /> Lower Cost Per Acquisition (CPA)</li>
                <li className="flex items-center gap-3"><Magnet className="w-6 h-6 text-orange-500" /> Relentless Lead Follow-up via Remarketing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Google Search Ads",
              desc: "Capture high-intent traffic instantly. We bid on the exact keywords your ideal customers are searching for, ensuring you appear at the very top of page one.",
              icon: Search
            },
            {
              title: "Performance Max (PMax)",
              desc: "Leverage Google's AI to deploy your campaigns across Search, Display, YouTube, and Gmail simultaneously, optimizing dynamically for conversions.",
              icon: Target
            },
            {
              title: "Local Services Ads",
              desc: "Perfect for local businesses. Get the 'Google Guaranteed' badge and pay only for actual leads (calls/messages), not just clicks.",
              icon: MousePointerClick
            },
            {
              title: "Conversion Rate Optimisation (CRO)",
              desc: "We analyze heatmaps and user behavior to constantly tweak your landing pages, squeezing more leads out of the exact same ad budget.",
              icon: BarChart3
            },
            {
              title: "Remarketing Campaigns",
              desc: "90% of visitors won't convert on the first visit. We deploy aggressive retargeting ads to follow them across the web until they return and buy.",
              icon: Magnet
            },
            {
              title: "Advanced Tracking & Attribution",
              desc: "We configure GA4, Google Tag Manager, and offline conversion tracking so you know exactly which dollar produced which lead.",
              icon: TrendingUp
            }
          ].map((feature, idx) => (
            <div key={idx} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1">
              <feature.icon className="w-10 h-10 text-orange-400 mb-6" />
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-neutral-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-3xl mx-auto px-6 text-center">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent pointer-events-none"></div>
          <h2 className="text-3xl font-bold mb-4 relative z-10">Ready to scale your revenue?</h2>
          <p className="text-neutral-400 mb-8 relative z-10">Stop burning cash on poorly optimized campaigns. Let us manage your capital.</p>
          <Link href="/contact" className="inline-block relative z-10 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors">
            Start Scaling Today
          </Link>
        </div>
      </section>
    </main>
  );
}