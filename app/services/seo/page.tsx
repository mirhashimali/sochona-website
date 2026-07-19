import type { Metadata } from "next";
import Link from "next/link";
import { Search, MapPin, Database, LineChart, Globe, Binary, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Technical SEO & Organic Search | Sochona",
  description: "Own your organic real estate. We engineer your web presence with Technical SEO, Local SEO, and Structured Data to rank for the keywords that drive revenue.",
};

export default function SEOPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-400">Search Engine Domination</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
          Don't just rank. <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-green-400">
            Own the market.
          </span>
        </h1>
        <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
          Traffic is vanity; revenue is sanity. We don't chase useless metrics. We engineer your digital footprint from the ground up, utilizing deep technical SEO, structured data, and aggressive local optimization to capture high-intent buyers exactly when they are searching for you.
        </p>
      </section>

      {/* The Strategy Section */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>
          
          <h2 className="text-3xl font-bold mb-8 text-white relative z-10">Algorithms change. Superior infrastructure doesn't.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="space-y-4 text-neutral-400 text-lg leading-relaxed">
              <p>
                The days of keyword stuffing and spammy backlinks are over. Google's AI-driven algorithms reward fast, authoritative, and structurally flawless websites.
              </p>
              <p>
                Our SEO strategy starts in the code. We ensure your Next.js architecture is perfectly readable to search engine crawlers, optimizing your site speed, core web vitals, and mobile experience before we even touch the content.
              </p>
            </div>
            <div className="space-y-4 text-neutral-400 text-lg leading-relaxed">
              <p>
                From there, we build topical authority. Whether you are a local clinic needing to dominate Google Maps, or an enterprise SaaS targeting national keywords, we deploy a ruthless, data-backed roadmap to get you to position one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Technical SEO Audits",
              desc: "We tear down your existing site architecture to fix crawl errors, broken links, and core web vital bottlenecks that are tanking your rankings.",
              icon: Binary
            },
            {
              title: "Local SEO & GBP",
              desc: "Dominate the 'Near Me' searches. We aggressively optimize your Google Business Profile to capture the highest-converting local traffic in your city.",
              icon: MapPin
            },
            {
              title: "On-Page Optimisation",
              desc: "Strategic placement of high-value keywords, semantic HTML tagging, and optimized meta-data to signal exact relevance to Google's bots.",
              icon: Search
            },
            {
              title: "Structured Data (Schema)",
              desc: "We inject JSON-LD code into your pages, giving search engines explicit context about your business, enabling rich snippets and higher CTRs.",
              icon: Database
            },
            {
              title: "Competitor Analysis",
              desc: "We reverse-engineer the exact strategies your top competitors are using to rank, then build a superior roadmap to steal their market share.",
              icon: Globe
            },
            {
              title: "KPI & Rank Tracking",
              desc: "Total transparency. We connect Google Search Console and GA4 to provide you with raw data on impression growth, click-through rates, and rank positioning.",
              icon: LineChart
            }
          ].map((feature, idx) => (
            <div key={idx} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1">
              <feature.icon className="w-10 h-10 text-emerald-400 mb-6" />
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-neutral-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Advanced Search Engineering (New Hub & Spoke Links) */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <div className="flex items-center gap-4 mb-8 border-b border-neutral-800 pb-4">
          <Search className="w-6 h-6 text-emerald-500" />
          <h2 className="text-2xl font-bold text-white">Advanced Search Engineering</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/services/seo/technical-infrastructure" className="group p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-emerald-500/50 transition-colors flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">Technical Infrastructure</h3>
              <p className="text-sm text-neutral-400">Core Web Vitals as a competitive advantage.</p>
            </div>
            <ArrowRight className="w-5 h-5 text-emerald-500 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>
          
          <Link href="/services/seo/local-monopoly" className="group p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-emerald-500/50 transition-colors flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">The Local Monopoly</h3>
              <p className="text-sm text-neutral-400">Engineering GBP authority and geographic dominance.</p>
            </div>
            <ArrowRight className="w-5 h-5 text-emerald-500 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>

          <Link href="/services/seo/ai-overviews" className="group p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-emerald-500/50 transition-colors flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">The SGE & AI Future</h3>
              <p className="text-sm text-neutral-400">Adapting to the zero-click, answer-engine era.</p>
            </div>
            <ArrowRight className="w-5 h-5 text-emerald-500 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>

          <Link href="/services/seo/entity-authority" className="group p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-emerald-500/50 transition-colors flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">Entity Authority</h3>
              <p className="text-sm text-neutral-400">Using structured data to become a recognized entity.</p>
            </div>
            <ArrowRight className="w-5 h-5 text-emerald-500 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-3xl mx-auto px-6 text-center">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none"></div>
          <h2 className="text-3xl font-bold mb-4 relative z-10">Stop hiding on page two.</h2>
          <p className="text-neutral-400 mb-8 relative z-10">Claim your free technical SEO audit and see exactly what is holding your site back.</p>
          <Link href="/contact" className="inline-block relative z-10 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors">
            Request SEO Audit
          </Link>
        </div>
      </section>
    </main>
  );
}