import type { Metadata } from "next";
import Link from "next/link";
import { Target, TrendingUp, MousePointerClick, BarChart3, Magnet, Wallet, Search, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Performance Marketing & Capital Deployment | Sochona",
  description: "Advanced Google Ads management (Search, PMax, YouTube). We engineer scalable demand-capture systems designed for high-intent ROI.",
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
          Most marketing agencies focus on impressions and vanity metrics. We focus on one thing: Return on Investment. We design ruthless, precision-targeted ad campaigns engineered to extract maximum revenue from your ad spend.
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
            { title: "Google Search Ads", desc: "Capture high-intent traffic instantly. We bid on keywords your ideal customers are searching for.", icon: Search },
            { title: "Performance Max (PMax)", desc: "Leverage Google's AI to deploy campaigns across Search, Display, YouTube, and Gmail simultaneously.", icon: Target },
            { title: "Local Services Ads", desc: "Get the 'Google Guaranteed' badge and pay only for verified leads, not clicks.", icon: MousePointerClick },
            { title: "Conversion Rate Optimisation", desc: "Analyze heatmaps to tweak landing pages, squeezing more leads out of the same budget.", icon: BarChart3 },
            { title: "Remarketing Campaigns", desc: "Aggressive retargeting ads to follow visitors until they return and convert.", icon: Magnet },
            { title: "Advanced Attribution", desc: "Configure GA4 and offline conversion tracking so you know which dollar produced which lead.", icon: TrendingUp }
          ].map((feature, idx) => (
            <div key={idx} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1">
              <feature.icon className="w-10 h-10 text-orange-400 mb-6" />
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-neutral-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Insights & Deep Dives */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <div className="flex items-center gap-4 mb-8 border-b border-neutral-800 pb-4">
          <BarChart3 className="w-6 h-6 text-orange-500" />
          <h2 className="text-2xl font-bold text-white">Performance Strategy & Analytics</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/services/performance-marketing/pmax-vs-search-intent" className="group p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-orange-500/50 transition-colors flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">PMax vs. Search: The Intent War</h3>
              <p className="text-sm text-neutral-400">Algorithmic scaling vs. manual precision.</p>
            </div>
            <ArrowRight className="w-5 h-5 text-orange-500 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>
          <Link href="/services/performance-marketing/the-economics-of-cro" className="group p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-orange-500/50 transition-colors flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">The Economics of CRO</h3>
              <p className="text-sm text-neutral-400">Why paying for traffic is meaningless without conversion architecture.</p>
            </div>
            <ArrowRight className="w-5 h-5 text-orange-500 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>
          <Link href="/services/performance-marketing/attribution-in-privacy-era" className="group p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-orange-500/50 transition-colors flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">Signal Loss & Attribution</h3>
              <p className="text-sm text-neutral-400">The reality of marketing performance in a privacy-first world.</p>
            </div>
            <ArrowRight className="w-5 h-5 text-orange-500 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>
          <Link href="/services/performance-marketing/scaling-capital-strategy" className="group p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-orange-500/50 transition-colors flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">Scaling Capital Strategy</h3>
              <p className="text-sm text-neutral-400">Pushing the gas: Understanding break-even points vs. LTV.</p>
            </div>
            <ArrowRight className="w-5 h-5 text-orange-500 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>
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