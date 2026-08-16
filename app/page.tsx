import type { Metadata } from "next";
import { Megaphone, Repeat, Cpu, ArrowRight, TrendingUp, Code2, Layers, Zap } from "lucide-react";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Sochona | The AI & Digital Growth Agency",
  description: "Stop buying websites. Build systems. We create hyper-profitable digital infrastructure that attracts traffic, converts clicks, and automates operations.",
  keywords: "Digital marketing agency, AI automation, custom CRM, performance marketing, SEO, web development, CRO, Sochona",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full bg-transparent text-white selection:bg-[#007AFF] selection:text-white relative overflow-hidden">
      
      {/* Hero Section (Transparent background, letting 3D backdrop shine) */}
      <ScrollReveal>
        <section className="max-w-5xl mx-auto px-6 pt-24 pb-20 flex flex-col items-center text-center pointer-events-none relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/80 border border-white/20 mb-8 backdrop-blur-xl shadow-lg pointer-events-auto hover:bg-neutral-900 transition-colors">
            <span className="w-2 h-2 rounded-full bg-[#007AFF] animate-pulse"></span>
            <span className="text-xs font-semibold tracking-widest uppercase text-white/90">The AI Agency</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 drop-shadow-2xl pointer-events-auto">
            Stop buying websites.<br />Build systems.
          </h1>
          
          <p className="max-w-2xl text-lg md:text-xl text-white/85 font-medium leading-relaxed drop-shadow-lg pointer-events-auto">
            Your website shouldn't just look pretty. It should be a hyper-profitable digital infrastructure that attracts eyeballs, converts clicks, and automates your operations while you sleep.
          </p>
        </section>
      </ScrollReveal>

      {/* Audit Form Section (High readability translucent card) */}
      <section className="max-w-3xl mx-auto px-6 pb-24 w-full relative z-10 pointer-events-auto">
        <ScrollReveal>
          <div className="bg-neutral-950/85 border border-white/15 rounded-3xl p-8 backdrop-blur-2xl shadow-2xl">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Request Your Free Revenue & Infrastructure Audit</h3>
              <p className="text-sm text-white/70">Discover where your digital ecosystem is leaking leads and capital.</p>
            </div>
            <LeadForm />
          </div>
        </ScrollReveal>
      </section>

      {/* Framework Section (The 3 Pillars) */}
      <section className="max-w-6xl mx-auto px-6 py-24 pointer-events-auto w-full relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4 tracking-tight drop-shadow-lg">Our Growth Framework</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto font-medium">We design end-to-end ecosystems engineered around a single metric: your bottom-line revenue.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Megaphone, title: "1. Attract", desc: "Precision-targeted campaigns that pull high-intent traffic directly to your front door.", slug: "attract" },
              { icon: Repeat, title: "2. Convert", desc: "CRO & AI Chatbots that qualify leads and relentlessly book appointments 24/7.", slug: "convert" },
              { icon: Cpu, title: "3. Run Smarter", desc: "Custom Mini-CRMs and automated workflows that let you scale without breaking.", slug: "run-smarter" }
            ].map((pillar, idx) => (
              <Link href={`/${pillar.slug}`} key={idx} className="block group">
                <div className="bg-neutral-950/85 border border-white/15 p-8 rounded-3xl group-hover:bg-neutral-900/90 transition-all duration-300 group-hover:-translate-y-2 h-full backdrop-blur-xl shadow-xl flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#007AFF] to-[#5E5CE6] flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform">
                      <pillar.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-[#007AFF] transition-colors">{pillar.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{pillar.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#007AFF] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Explore {pillar.title} Pillar <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Story Chapter: Diagnosing the Hidden Costs of Fragmentation */}
      <section className="max-w-6xl mx-auto px-6 py-24 pointer-events-auto w-full relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[#007AFF] text-xs font-bold uppercase tracking-widest">The Diagnostic Story</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Why Most Businesses Waste 60% of Their Digital Capital</h2>
            <p className="text-white/80 text-lg">
              Siloed ad accounts, sluggish legacy CMS themes, and manual pipelines create friction at every touchpoint. Explore our foundational <Link href="/services" className="text-[#007AFF] underline">Services Overview</Link> or learn more <Link href="/about" className="text-[#007AFF] underline">About Sochona</Link>.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollReveal>
            <div className="bg-neutral-950/85 border border-white/15 p-8 rounded-3xl h-full flex flex-col justify-between backdrop-blur-xl">
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-500/15 text-red-400 flex items-center justify-center mb-6">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Brand & UX Friction</h3>
                <p className="text-sm text-white/75 leading-relaxed mb-6">
                  When visual identity and UI are disconnected, bounce rates soar. Read our insights on <Link href="/services/branding/the-cost-of-fragmentation" className="text-blue-400 underline hover:text-blue-300">The Cost of Fragmentation</Link>, <Link href="/services/branding/ui-ux-conversion-friction" className="text-blue-400 underline hover:text-blue-300">UI/UX Conversion Friction</Link>, and <Link href="/services/branding/visual-psychology-roi" className="text-blue-400 underline hover:text-blue-300">Visual Psychology ROI</Link> via our <Link href="/services/branding" className="text-white underline">Branding Hub</Link>.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 text-xs text-white/50">
                Strategic Rebranding & Identity
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-neutral-950/85 border border-white/15 p-8 rounded-3xl h-full flex flex-col justify-between backdrop-blur-xl">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-6">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Technical Penalties & Latency</h3>
                <p className="text-sm text-white/75 leading-relaxed mb-6">
                  Slow load speeds destroy SEO rankings. Discover why a <Link href="/services/maintenance/core-web-vitals-penalty" className="text-amber-400 underline hover:text-amber-300">Core Web Vitals Penalty</Link> hurts visibility, how <Link href="/services/maintenance/edge-architecture-latency" className="text-amber-400 underline hover:text-amber-300">Edge Architecture Latency</Link> affects users, and the necessity of <Link href="/services/maintenance/proactive-code-maintenance" className="text-amber-400 underline hover:text-amber-300">Proactive Code Maintenance</Link> and <Link href="/services/maintenance/zero-trust-security" className="text-amber-400 underline hover:text-amber-300">Zero-Trust Security</Link>.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 text-xs text-white/50">
                Managed via <Link href="/services/maintenance" className="text-white underline">Maintenance & Security Hub</Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-neutral-950/85 border border-white/15 p-8 rounded-3xl h-full flex flex-col justify-between backdrop-blur-xl">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center mb-6">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Executive Blind Spots</h3>
                <p className="text-sm text-white/75 leading-relaxed mb-6">
                  Without expert oversight, revenue slips away. Learn how <Link href="/services/consulting/diagnosing-revenue-leakage" className="text-purple-400 underline hover:text-purple-300">Diagnosing Revenue Leakage</Link>, building an <Link href="/services/consulting/ai-competitive-moat" className="text-purple-400 underline hover:text-purple-300">AI Competitive Moat</Link>, deploying a <Link href="/services/consulting/digital-transformation-blueprint" className="text-purple-400 underline hover:text-purple-300">Digital Transformation Blueprint</Link>, and leveraging a <Link href="/services/consulting/fractional-executive-advantage" className="text-purple-400 underline hover:text-purple-300">Fractional Executive Advantage</Link> transforms operations.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 text-xs text-white/50">
                Guided by <Link href="/services/consulting" className="text-white underline">Executive Consulting</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Comprehensive Service Deep-Dive Hubs (Endless Scrolling Content) */}
      <section className="max-w-6xl mx-auto px-6 py-24 pointer-events-auto w-full relative z-10 space-y-16">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#007AFF] text-xs font-bold uppercase tracking-widest">Complete Capabilities</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Explore Our Specialized Service Ecosystem</h2>
            <p className="text-white/80 text-lg">Every capability is designed to integrate perfectly with your growth funnel.</p>
          </div>
        </ScrollReveal>

        {/* 1. Performance Marketing & SEO */}
        <div className="bg-neutral-950/85 border border-white/15 p-8 rounded-3xl backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-[#007AFF]" /> Performance Marketing & Search Engine Optimisation
              </h3>
              <p className="text-sm text-white/70 mt-1">Capture high-intent demand across Google Ads and organic search real estate.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/services/performance-marketing" className="px-4 py-2 bg-blue-600/20 text-[#007AFF] border border-blue-500/30 rounded-xl text-xs font-semibold hover:bg-blue-600/30 transition-colors">
                Performance Hub →
              </Link>
              <Link href="/services/seo" className="px-4 py-2 bg-cyan-600/20 text-cyan-400 border border-cyan-500/30 rounded-xl text-xs font-semibold hover:bg-cyan-600/30 transition-colors">
                SEO Hub →
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/services/performance-marketing/scaling-capital-strategy" className="bg-neutral-900/60 border border-white/10 p-5 rounded-2xl hover:border-[#007AFF]/50 transition-all group">
              <h4 className="font-bold text-white group-hover:text-[#007AFF] mb-1 text-sm">Scaling Capital Strategy</h4>
              <p className="text-xs text-white/70">Deploy ad spend profitably across high-intent channels.</p>
            </Link>
            <Link href="/services/performance-marketing/pmax-vs-search-intent" className="bg-neutral-900/60 border border-white/10 p-5 rounded-2xl hover:border-[#007AFF]/50 transition-all group">
              <h4 className="font-bold text-white group-hover:text-[#007AFF] mb-1 text-sm">PMax vs Search Intent</h4>
              <p className="text-xs text-white/70">Balance automated asset groups with exact keyword capture.</p>
            </Link>
            <Link href="/services/performance-marketing/attribution-in-privacy-era" className="bg-neutral-900/60 border border-white/10 p-5 rounded-2xl hover:border-[#007AFF]/50 transition-all group">
              <h4 className="font-bold text-white group-hover:text-[#007AFF] mb-1 text-sm">Attribution in Privacy Era</h4>
              <p className="text-xs text-white/70">First-party data models and server-side tracking.</p>
            </Link>
            <Link href="/services/performance-marketing/the-economics-of-cro" className="bg-neutral-900/60 border border-white/10 p-5 rounded-2xl hover:border-[#007AFF]/50 transition-all group">
              <h4 className="font-bold text-white group-hover:text-[#007AFF] mb-1 text-sm">The Economics of CRO</h4>
              <p className="text-xs text-white/70">Compound lifetime value with conversion rate lifts.</p>
            </Link>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
            <Link href="/services/seo/ai-overviews" className="text-cyan-400 hover:underline">• AI Overviews & Search Generative Experience</Link>
            <Link href="/services/seo/entity-authority" className="text-cyan-400 hover:underline">• Entity Authority & Brand Signals</Link>
            <Link href="/services/seo/local-monopoly" className="text-cyan-400 hover:underline">• Local Monopoly & GBP Dominance</Link>
            <Link href="/services/seo/technical-infrastructure" className="text-cyan-400 hover:underline">• Technical Infrastructure & Crawlability</Link>
          </div>
        </div>

        {/* 2. Web Development & Edge Engineering */}
        <div className="bg-neutral-950/85 border border-white/15 p-8 rounded-3xl backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <Code2 className="w-6 h-6 text-emerald-400" /> Web Development & Conversion Architecture
              </h3>
              <p className="text-sm text-white/70 mt-1">Build blazing-fast React/Next.js applications that convert visitors instantly.</p>
            </div>
            <Link href="/services/web-development" className="px-4 py-2 bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 rounded-xl text-xs font-semibold hover:bg-emerald-600/30 transition-colors">
              Web Development Hub →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/services/web-development/conversion-first-ux" className="bg-neutral-900/60 border border-white/10 p-5 rounded-2xl hover:border-emerald-500/50 transition-all group">
              <h4 className="font-bold text-white group-hover:text-emerald-400 mb-1 text-sm">Conversion-First UX</h4>
              <p className="text-xs text-white/70">UI built around psychological friction reduction.</p>
            </Link>
            <Link href="/services/web-development/edge-delivery-performance" className="bg-neutral-900/60 border border-white/10 p-5 rounded-2xl hover:border-emerald-500/50 transition-all group">
              <h4 className="font-bold text-white group-hover:text-emerald-400 mb-1 text-sm">Edge Delivery Performance</h4>
              <p className="text-xs text-white/70">Sub-second load times via global edge caching.</p>
            </Link>
            <Link href="/services/web-development/modern-stack-vs-cms" className="bg-neutral-900/60 border border-white/10 p-5 rounded-2xl hover:border-emerald-500/50 transition-all group">
              <h4 className="font-bold text-white group-hover:text-emerald-400 mb-1 text-sm">Modern Stack vs CMS</h4>
              <p className="text-xs text-white/70">Why Next.js outperforms legacy WordPress.</p>
            </Link>
            <Link href="/services/web-development/pwa-vs-native" className="bg-neutral-900/60 border border-white/10 p-5 rounded-2xl hover:border-emerald-500/50 transition-all group">
              <h4 className="font-bold text-white group-hover:text-emerald-400 mb-1 text-sm">PWA vs Native Apps</h4>
              <p className="text-xs text-white/70">Progressive web apps without app store friction.</p>
            </Link>
          </div>
        </div>

        {/* 3. Business Automation & AI Systems */}
        <div className="bg-neutral-950/85 border border-white/15 p-8 rounded-3xl backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <Cpu className="w-6 h-6 text-indigo-400" /> Business Automation & Custom CRMs
              </h3>
              <p className="text-sm text-white/70 mt-1">Automate lead qualification, invoicing, and internal workflows.</p>
            </div>
            <Link href="/services/automation" className="px-4 py-2 bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 rounded-xl text-xs font-semibold hover:bg-indigo-600/30 transition-colors">
              Automation Hub →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/services/automation/ai-chatbot-integration" className="bg-neutral-900/60 border border-white/10 p-5 rounded-2xl hover:border-indigo-500/50 transition-all group">
              <h4 className="font-bold text-white group-hover:text-indigo-400 mb-1 text-sm">AI Chatbot Integration</h4>
              <p className="text-xs text-white/70">24/7 lead qualification and booking agents.</p>
            </Link>
            <Link href="/services/automation/custom-crm-vs-saas" className="bg-neutral-900/60 border border-white/10 p-5 rounded-2xl hover:border-indigo-500/50 transition-all group">
              <h4 className="font-bold text-white group-hover:text-indigo-400 mb-1 text-sm">Custom CRM vs SaaS</h4>
              <p className="text-xs text-white/70">Tailored mini-CRMs without per-user SaaS fees.</p>
            </Link>
            <Link href="/services/automation/proposal-invoice-automation" className="bg-neutral-900/60 border border-white/10 p-5 rounded-2xl hover:border-indigo-500/50 transition-all group">
              <h4 className="font-bold text-white group-hover:text-indigo-400 mb-1 text-sm">Proposal & Invoice Flow</h4>
              <p className="text-xs text-white/70">Instant contract generation and e-signatures.</p>
            </Link>
            <Link href="/services/automation/unified-admin-dashboards" className="bg-neutral-900/60 border border-white/10 p-5 rounded-2xl hover:border-indigo-500/50 transition-all group">
              <h4 className="font-bold text-white group-hover:text-indigo-400 mb-1 text-sm">Unified Admin Dashboards</h4>
              <p className="text-xs text-white/70">Centralized command centers for your enterprise.</p>
            </Link>
          </div>
        </div>

      </section>

      {/* Thought Leadership & Blog Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 pointer-events-auto w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="space-y-6">
              <span className="text-[#007AFF] text-xs font-bold uppercase tracking-widest">Industry Insights</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Engineered by Experts. Proven by Data.</h2>
              <p className="text-white/80 leading-relaxed">
                Stay ahead of digital shifts with our strategic guides and case studies. Read our latest insights on the <Link href="/blog" className="text-[#007AFF] underline hover:text-blue-400">Sochona Blog</Link> or discover <Link href="/about" className="text-[#007AFF] underline hover:text-blue-400">our founding philosophy</Link>.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/blog" className="px-6 py-3 bg-white text-black font-bold rounded-full text-sm hover:bg-neutral-200 transition-colors shadow-lg">
                  Read Our Blog
                </Link>
                <Link href="/contact" className="px-6 py-3 bg-neutral-900 border border-white/20 text-white font-medium rounded-full text-sm hover:bg-neutral-800 transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-neutral-950/85 border border-white/15 p-8 rounded-3xl backdrop-blur-2xl shadow-2xl space-y-6">
              <h3 className="text-xl font-bold text-white">Ready to Scale Your Revenue System?</h3>
              <p className="text-sm text-white/75">
                Stop juggling disjointed agencies. Let's audit your current growth metrics and map out a high-performance digital infrastructure.
              </p>
              <Link href="/contact" className="block w-full py-4 bg-[#007AFF] hover:bg-blue-600 text-white font-bold text-center rounded-2xl transition-colors shadow-lg shadow-blue-500/25">
                Schedule Your Consultation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Complete Sitemap / Internal Navigation Footer Bar (Crawler Optimization) */}
      <section className="max-w-6xl mx-auto px-6 py-16 pointer-events-auto w-full relative z-10 text-center space-y-8">
        <h3 className="text-sm font-bold uppercase tracking-widest text-white/60">Complete Sochona Ecosystem Navigation</h3>
        <div className="flex flex-wrap justify-center gap-3 text-xs md:text-sm text-white/85">
          <Link href="/" className="px-4 py-2 rounded-xl bg-neutral-950/80 border border-white/10 hover:bg-white/10 transition-colors">Home</Link>
          <Link href="/about" className="px-4 py-2 rounded-xl bg-neutral-950/80 border border-white/10 hover:bg-white/10 transition-colors">About Us</Link>
          <Link href="/contact" className="px-4 py-2 rounded-xl bg-neutral-950/80 border border-white/10 hover:bg-white/10 transition-colors">Contact</Link>
          <Link href="/blog" className="px-4 py-2 rounded-xl bg-neutral-950/80 border border-white/10 hover:bg-white/10 transition-colors">Blog</Link>
          <Link href="/attract" className="px-4 py-2 rounded-xl bg-neutral-950/80 border border-white/10 hover:bg-white/10 transition-colors">Attract Pillar</Link>
          <Link href="/convert" className="px-4 py-2 rounded-xl bg-neutral-950/80 border border-white/10 hover:bg-white/10 transition-colors">Convert Pillar</Link>
          <Link href="/run-smarter" className="px-4 py-2 rounded-xl bg-neutral-950/80 border border-white/10 hover:bg-white/10 transition-colors">Run Smarter Pillar</Link>
          <Link href="/services" className="px-4 py-2 rounded-xl bg-neutral-950/80 border border-white/10 hover:bg-white/10 transition-colors">Services Hub</Link>
          <Link href="/services/performance-marketing" className="px-4 py-2 rounded-xl bg-neutral-950/80 border border-white/10 hover:bg-white/10 transition-colors">Performance Marketing</Link>
          <Link href="/services/seo" className="px-4 py-2 rounded-xl bg-neutral-950/80 border border-white/10 hover:bg-white/10 transition-colors">SEO Services</Link>
          <Link href="/services/web-development" className="px-4 py-2 rounded-xl bg-neutral-950/80 border border-white/10 hover:bg-white/10 transition-colors">Web Development</Link>
          <Link href="/services/automation" className="px-4 py-2 rounded-xl bg-neutral-950/80 border border-white/10 hover:bg-white/10 transition-colors">Automation</Link>
          <Link href="/services/consulting" className="px-4 py-2 rounded-xl bg-neutral-950/80 border border-white/10 hover:bg-white/10 transition-colors">Consulting</Link>
          <Link href="/services/branding" className="px-4 py-2 rounded-xl bg-neutral-950/80 border border-white/10 hover:bg-white/10 transition-colors">Branding</Link>
          <Link href="/services/maintenance" className="px-4 py-2 rounded-xl bg-neutral-950/80 border border-white/10 hover:bg-white/10 transition-colors">Maintenance</Link>
        </div>
      </section>

    </main>
  );
}