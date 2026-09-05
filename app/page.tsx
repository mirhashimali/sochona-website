import type { Metadata } from "next";
import { 
  Megaphone, 
  Repeat, 
  Cpu, 
  ArrowRight, 
  TrendingUp, 
  Code2, 
  Layers, 
  Zap, 
  CheckCircle2, 
  ShieldCheck, 
  BarChart3, 
  Bot, 
  Clock,
  Sparkles,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Sochona | The AI & Digital Growth Architecture",
  description: "Stop buying fragile websites. Build sovereign systems. We engineer high-performance digital infrastructure that captures high-intent demand, converts clicks, and automates operations.",
  keywords: "Digital growth agency, AI automation, custom CRM, performance marketing, SEO, web development, CRO, Next.js architecture, Sochona",
  openGraph: {
    title: "Sochona | The AI & Digital Growth Architecture",
    description: "Stop buying websites. Build sovereign revenue systems.",
    url: "https://sochona.net",
    siteName: "Sochona",
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full bg-transparent text-white selection:bg-[#007AFF] selection:text-white relative overflow-hidden pb-28">
      
      {/* 1. HERO SECTION */}
      <ScrollReveal>
        <section className="max-w-4xl mx-auto px-6 pt-28 pb-8 flex flex-col items-center text-center relative z-10">

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/50 border border-white/20 mb-6 backdrop-blur-xl shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-[#007AFF] animate-pulse"></span>
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/90">
              The AI & Digital Growth Architecture
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white mb-5 drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] leading-[1.18] max-w-3xl text-balance">
            Stop buying websites. <br />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-white/75 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              Build sovereign revenue systems.
            </span>
          </h1>

          <p className="max-w-xl text-sm sm:text-base text-white/85 font-light leading-relaxed mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] text-balance">
            Your digital presence shouldn't just look aesthetic. We engineer end-to-end infrastructure that pulls high-intent demand, converts clicks with AI, and automates operations while you sleep.
          </p>

          {/* BALANCED DUAL BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-8">
            <a 
              href="#audit-form" 
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-semibold text-xs tracking-wide transition-all duration-300 hover:bg-neutral-100 hover:scale-105 active:scale-95 shadow-2xl shadow-white/20 flex items-center justify-center gap-2 group"
            >
              <span>Request Infrastructure Audit</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#007AFF] group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* OBSIDIAN GLASS PILL (No Yellow Bloom • 100% Crisp Legibility) */}
            <Link 
              href="/services" 
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-black/75 hover:bg-black/90 border border-white/25 text-white font-medium text-xs tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-black/50 backdrop-blur-md"
            >
              Explore Capabilities
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6 text-[11px] text-white/75 font-light tracking-wide drop-shadow">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Sub-1s Edge Latency
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span> 24/7 AI Qualification
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Zero CMS Code Bloat
            </span>
          </div>

        </section>
      </ScrollReveal>

      {/* 2. RESEARCH BENCHMARKS */}
      <section className="w-full max-w-5xl mx-auto px-6 py-6 relative z-10">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-3xl bg-black/50 border border-white/15 backdrop-blur-xl shadow-2xl">
            <div className="text-center p-2 border-r border-white/10 last:border-none">
              <span className="text-2xl md:text-3xl font-light text-blue-400 tracking-tight">3.4x</span>
              <p className="text-[10px] text-white/60 mt-1 uppercase tracking-widest font-medium">
                Average Pipeline Multiple
              </p>
            </div>
            <div className="text-center p-2 border-r border-white/10 last:border-none">
              <span className="text-2xl md:text-3xl font-light text-teal-300 tracking-tight">&lt; 0.8s</span>
              <p className="text-[10px] text-white/60 mt-1 uppercase tracking-widest font-medium">
                Global Edge Latency (Google)
              </p>
            </div>
            <div className="text-center p-2 border-r border-white/10 last:border-none">
              <span className="text-2xl md:text-3xl font-light text-purple-400 tracking-tight">24/7</span>
              <p className="text-[10px] text-white/60 mt-1 uppercase tracking-widest font-medium">
                Autonomous AI Lead Capture
              </p>
            </div>
            <div className="text-center p-2">
              <span className="text-2xl md:text-3xl font-light text-amber-300 tracking-tight">0%</span>
              <p className="text-[10px] text-white/60 mt-1 uppercase tracking-widest font-medium">
                Legacy WordPress CMS Bloat
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. AUDIT FORM SECTION */}
      <section id="audit-form" className="max-w-2xl mx-auto px-6 py-16 w-full relative z-10 scroll-mt-24">
        <LeadForm variant="global" />
      </section>

      {/* 4. THE 3-PILLAR GROWTH FRAMEWORK */}
      <section className="max-w-6xl mx-auto px-6 py-16 pointer-events-auto w-full relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#007AFF]">Architectural Methodology</span>
            <h2 className="text-2xl md:text-4xl font-light text-white mt-2 mb-3">Our Core Growth Framework</h2>
            <p className="text-white/60 text-xs md:text-sm font-light max-w-xl mx-auto">
              We design end-to-end ecosystems engineered around a single metric: your bottom-line revenue.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 pb-8 px-2 -mx-2 md:overflow-visible">
          <Link href="/attract" className="block group">
            <div className="bg-black/50 border border-white/15 p-8 rounded-3xl group-hover:border-blue-500/50 hover:bg-black/70 group-hover:-translate-y-2.5 group-hover:shadow-[0_15px_35px_rgba(0,122,255,0.15)] transition-all duration-300 h-full backdrop-blur-xl flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                  <Megaphone className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400/80">Pillar 01 • Demand</span>
                <h3 className="text-lg font-medium text-white mt-1 mb-2 group-hover:text-blue-300 transition-colors">1. Attract</h3>
                <p className="text-xs text-white/65 font-light leading-relaxed">
                  Precision-targeted campaigns that pull high-intent traffic directly to your front door without broad-match ad waste.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-blue-400 font-medium group-hover:translate-x-0.5 transition-all">
                <span>Explore Attract Architecture</span>
                <ChevronRight className="w-4 h-4 opacity-70 group-hover:opacity-100" />
              </div>
            </div>
          </Link>

          <Link href="/convert" className="block group">
            <div className="bg-black/50 border border-white/15 p-8 rounded-3xl group-hover:border-purple-400/50 hover:bg-black/70 group-hover:-translate-y-2.5 group-hover:shadow-[0_15px_35px_rgba(168,85,247,0.15)] transition-all duration-300 h-full backdrop-blur-xl flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                  <Repeat className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400/80">Pillar 02 • Conversion</span>
                <h3 className="text-lg font-medium text-white mt-1 mb-2 group-hover:text-purple-300 transition-colors">2. Convert</h3>
                <p className="text-xs text-white/65 font-light leading-relaxed">
                  Sub-second Next.js interfaces paired with AI conversational agents that qualify leads and book appointments 24/7.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-purple-400 font-medium group-hover:translate-x-0.5 transition-all">
                <span>Explore Convert Architecture</span>
                <ChevronRight className="w-4 h-4 opacity-70 group-hover:opacity-100" />
              </div>
            </div>
          </Link>

          <Link href="/run-smarter" className="block group">
            <div className="bg-black/50 border border-white/15 p-8 rounded-3xl group-hover:border-emerald-400/50 hover:bg-black/70 group-hover:-translate-y-2.5 group-hover:shadow-[0_15px_35px_rgba(16,185,129,0.15)] transition-all duration-300 h-full backdrop-blur-xl flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400/80">Pillar 03 • Scale</span>
                <h3 className="text-lg font-medium text-white mt-1 mb-2 group-hover:text-emerald-300 transition-colors">3. Run Smarter</h3>
                <p className="text-xs text-white/65 font-light leading-relaxed">
                  Custom Mini-CRMs and automated workflows that let your team scale revenue without per-seat software fees.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-emerald-400 font-medium group-hover:translate-x-0.5 transition-all">
                <span>Explore Run Smarter Architecture</span>
                <ChevronRight className="w-4 h-4 opacity-70 group-hover:opacity-100" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 5. INDIA EDITION DISCOVERY STRIP */}
      <section className="max-w-5xl mx-auto px-6 py-6 w-full relative z-10 pointer-events-auto">
        <ScrollReveal>
          <div className="p-8 rounded-3xl bg-black/50 border border-emerald-500/20 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-emerald-500/40 transition-all group">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform">
                🇮🇳
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">Localized Infrastructure</span>
                <h3 className="text-lg font-medium text-white mt-0.5">Explore Sochona India Edition</h3>
                <p className="text-xs text-white/60 font-light mt-1">
                  Tailored for Indian MSMEs & Enterprises: WhatsApp lead qualification, RTO reduction, and zero-per-user CRM portals.
                </p>
              </div>
            </div>
            <Link
              href="/in"
              className="px-6 py-3 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-semibold text-xs transition-all duration-300 hover:bg-emerald-500/25 hover:scale-105 shrink-0 flex items-center gap-2"
            >
              <span>Visit India Edition</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* 6. PROVEN SYSTEM CASE STUDIES */}
      <section className="max-w-6xl mx-auto px-6 py-20 pointer-events-auto w-full relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#007AFF]">Case Studies</span>
            <h2 className="text-2xl md:text-4xl font-light text-white mt-2 mb-3">Engineering Measurable ROI</h2>
            <p className="text-white/50 text-xs md:text-sm font-light">See how systems architecture outperforms traditional agency retainers.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <ScrollReveal>
            <div className="bg-neutral-950/40 border border-white/10 p-8 rounded-3xl h-full flex flex-col justify-between backdrop-blur-xl hover:border-blue-500/40 transition-all">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400">B2B Enterprise</span>
                <h3 className="text-lg font-medium text-white mt-2 mb-3">WordPress to Next.js + AI Qualification</h3>
                <p className="text-xs text-white/55 font-light leading-relaxed mb-6">
                  Rebuilt legacy infrastructure from scratch. Reduced bounce rates by 68% and deployed a 24/7 autonomous booking bot.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5">
                <div className="text-2xl font-light text-blue-400">+210%</div>
                <div className="text-[11px] text-white/50 font-light">Increase in Qualified Monthly Meetings</div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-neutral-950/40 border border-white/10 p-8 rounded-3xl h-full flex flex-col justify-between backdrop-blur-xl hover:border-teal-400/40 transition-all">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-teal-400">High-Growth Commerce</span>
                <h3 className="text-lg font-medium text-white mt-2 mb-3">Edge Delivery & PMax Intent Engine</h3>
                <p className="text-xs text-white/55 font-light leading-relaxed mb-6">
                  Eliminated render-blocking JS penalties, implemented server-side Conversions API, and rebuilt the purchase funnel.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5">
                <div className="text-2xl font-light text-teal-300">41.8%</div>
                <div className="text-[11px] text-white/50 font-light">Reduction in Customer Acquisition Cost (CAC)</div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-neutral-950/40 border border-white/10 p-8 rounded-3xl h-full flex flex-col justify-between backdrop-blur-xl hover:border-purple-400/40 transition-all">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400">Professional Services</span>
                <h3 className="text-lg font-medium text-white mt-2 mb-3">Custom Mini-CRM & Proposal Flow</h3>
                <p className="text-xs text-white/55 font-light leading-relaxed mb-6">
                  Replaced expensive seat-based SaaS with an internal unified operational dashboard and instant contract triggers.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5">
                <div className="text-2xl font-light text-purple-400">16 hrs/wk</div>
                <div className="text-[11px] text-white/50 font-light">Saved in Manual Administrative Workload</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. THE DIAGNOSTIC STORY */}
      <section className="max-w-6xl mx-auto px-6 py-20 pointer-events-auto w-full relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#007AFF]">Root Cause Diagnostic</span>
            <h2 className="text-2xl md:text-4xl font-light text-white mt-2 mb-3">Why Most Businesses Waste 60% of Their Digital Capital</h2>
            <p className="text-white/50 text-xs md:text-sm font-light">
              Siloed ad accounts, sluggish legacy CMS themes, and manual pipelines create friction at every touchpoint. Explore our <Link href="/services" className="text-[#007AFF] underline">Services Overview</Link> or learn more <Link href="/about" className="text-[#007AFF] underline">About Sochona</Link>.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollReveal>
            <div className="bg-neutral-950/40 border border-white/10 p-8 rounded-3xl h-full flex flex-col justify-between backdrop-blur-xl">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center mb-6">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-medium text-white mb-3">Brand & UX Friction</h3>
                <p className="text-xs text-white/55 font-light leading-relaxed mb-6">
                  When visual identity and UI are disconnected, bounce rates soar. Read our insights on <Link href="/services/branding/the-cost-of-fragmentation" className="text-blue-400 underline hover:text-blue-300">The Cost of Fragmentation</Link>, <Link href="/services/branding/ui-ux-conversion-friction" className="text-blue-400 underline hover:text-blue-300">UI/UX Friction</Link>, and <Link href="/services/branding/visual-psychology-roi" className="text-blue-400 underline hover:text-blue-300">Visual Psychology ROI</Link> via our <Link href="/services/branding" className="text-white underline">Branding Hub</Link>.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 text-[11px] text-white/40 font-light">
                Strategic Rebranding & Identity
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-neutral-950/40 border border-white/10 p-8 rounded-3xl h-full flex flex-col justify-between backdrop-blur-xl">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-medium text-white mb-3">Technical Penalties & Latency</h3>
                <p className="text-xs text-white/55 font-light leading-relaxed mb-6">
                  Slow load speeds destroy organic rankings. Discover why a <Link href="/services/maintenance/core-web-vitals-penalty" className="text-amber-400 underline hover:text-amber-300">Core Web Vitals Penalty</Link> hurts visibility, how <Link href="/services/maintenance/edge-architecture-latency" className="text-amber-400 underline hover:text-amber-300">Edge Architecture Latency</Link> affects users, and the necessity of <Link href="/services/maintenance/proactive-code-maintenance" className="text-amber-400 underline hover:text-amber-300">Proactive Maintenance</Link> and <Link href="/services/maintenance/zero-trust-security" className="text-amber-400 underline hover:text-amber-300">Zero-Trust Security</Link>.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 text-[11px] text-white/40 font-light">
                Managed via <Link href="/services/maintenance" className="text-white underline">Maintenance & Security Hub</Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-neutral-950/40 border border-white/10 p-8 rounded-3xl h-full flex flex-col justify-between backdrop-blur-xl">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-6">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-medium text-white mb-3">Executive Blind Spots</h3>
                <p className="text-xs text-white/55 font-light leading-relaxed mb-6">
                  Without expert oversight, revenue slips away. Learn how <Link href="/services/consulting/diagnosing-revenue-leakage" className="text-purple-400 underline hover:text-purple-300">Diagnosing Revenue Leakage</Link>, building an <Link href="/services/consulting/ai-competitive-moat" className="text-purple-400 underline hover:text-purple-300">AI Competitive Moat</Link>, deploying a <Link href="/services/consulting/digital-transformation-blueprint" className="text-purple-400 underline hover:text-purple-300">Digital Transformation Blueprint</Link>, and leveraging a <Link href="/services/consulting/fractional-executive-advantage" className="text-purple-400 underline hover:text-purple-300">Fractional Executive Advantage</Link> transforms operations.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 text-[11px] text-white/40 font-light">
                Guided by <Link href="/services/consulting" className="text-white underline">Executive Consulting</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. COMPLETE SERVICE ECOSYSTEM HUBS */}
      <section className="max-w-6xl mx-auto px-6 py-20 pointer-events-auto w-full relative z-10 space-y-16">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#007AFF]">Full-Stack Execution</span>
            <h2 className="text-2xl md:text-4xl font-light text-white mt-2 mb-3">Specialized Capability Hubs</h2>
            <p className="text-white/50 text-xs md:text-sm font-light">Every discipline is engineered to integrate cleanly into your automated revenue pipeline.</p>
          </div>
        </ScrollReveal>

        {/* Pillar A: Performance Marketing & SEO */}
        <div className="bg-neutral-950/40 border border-white/10 p-8 rounded-3xl backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-white/5 gap-4">
            <div>
              <h3 className="text-xl font-medium text-white flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4" />
                </div>
                Performance Marketing & Search Engine Optimization
              </h3>
              <p className="text-xs text-white/55 font-light mt-1">Capture high-intent demand across Google Ads and search engine real estate.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/services/performance-marketing" className="px-4 py-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-xl text-xs font-semibold hover:bg-blue-500/20 transition-colors">
                Performance Hub →
              </Link>
              <Link href="/services/seo" className="px-4 py-2 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-xl text-xs font-semibold hover:bg-cyan-500/20 transition-colors">
                SEO Hub →
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/services/performance-marketing/scaling-capital-strategy" className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl hover:border-blue-500/40 transition-all group">
              <h4 className="font-medium text-white group-hover:text-blue-300 mb-1 text-xs">Scaling Capital Strategy</h4>
              <p className="text-[11px] text-white/50 font-light">Deploy ad spend profitably across high-intent channels.</p>
            </Link>
            <Link href="/services/performance-marketing/pmax-vs-search-intent" className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl hover:border-blue-500/40 transition-all group">
              <h4 className="font-medium text-white group-hover:text-blue-300 mb-1 text-xs">PMax vs Search Intent</h4>
              <p className="text-[11px] text-white/50 font-light">Balance automated asset groups with exact keyword capture.</p>
            </Link>
            <Link href="/services/performance-marketing/attribution-in-privacy-era" className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl hover:border-blue-500/40 transition-all group">
              <h4 className="font-medium text-white group-hover:text-blue-300 mb-1 text-xs">Attribution in Privacy Era</h4>
              <p className="text-[11px] text-white/50 font-light">First-party data models and server-side tracking.</p>
            </Link>
            <Link href="/services/performance-marketing/the-economics-of-cro" className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl hover:border-blue-500/40 transition-all group">
              <h4 className="font-medium text-white group-hover:text-blue-300 mb-1 text-xs">The Economics of CRO</h4>
              <p className="text-[11px] text-white/50 font-light">Compound lifetime value with conversion rate lifts.</p>
            </Link>
          </div>

          <div className="mt-6 pt-6 border-t border-white/5 grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-light text-white/60">
            <Link href="/services/seo/ai-overviews" className="hover:text-cyan-400 transition-colors">• AI Overviews & Search Generative Experience</Link>
            <Link href="/services/seo/entity-authority" className="hover:text-cyan-400 transition-colors">• Entity Authority & Brand Signals</Link>
            <Link href="/services/seo/local-monopoly" className="hover:text-cyan-400 transition-colors">• Local Monopoly & GBP Dominance</Link>
            <Link href="/services/seo/technical-infrastructure" className="hover:text-cyan-400 transition-colors">• Technical Infrastructure & Crawlability</Link>
          </div>
        </div>

        {/* Pillar B: Web Development & Edge Engineering */}
        <div className="bg-neutral-950/40 border border-white/10 p-8 rounded-3xl backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-white/5 gap-4">
            <div>
              <h3 className="text-xl font-medium text-white flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center">
                  <Code2 className="w-4 h-4" />
                </div>
                Web Development & Conversion Architecture
              </h3>
              <p className="text-xs text-white/55 font-light mt-1">Build blazing-fast React/Next.js applications that convert visitors instantly.</p>
            </div>
            <Link href="/services/web-development" className="px-4 py-2 bg-teal-500/10 text-teal-300 border border-teal-500/20 rounded-xl text-xs font-semibold hover:bg-teal-500/20 transition-colors">
              Web Development Hub →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/services/web-development/conversion-first-ux" className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl hover:border-teal-400/40 transition-all group">
              <h4 className="font-medium text-white group-hover:text-teal-300 mb-1 text-xs">Conversion-First UX</h4>
              <p className="text-[11px] text-white/50 font-light">UI built around psychological friction reduction.</p>
            </Link>
            <Link href="/services/web-development/edge-delivery-performance" className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl hover:border-teal-400/40 transition-all group">
              <h4 className="font-medium text-white group-hover:text-teal-300 mb-1 text-xs">Edge Delivery Performance</h4>
              <p className="text-[11px] text-white/50 font-light">Sub-second load times via global edge caching.</p>
            </Link>
            <Link href="/services/web-development/modern-stack-vs-cms" className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl hover:border-teal-400/40 transition-all group">
              <h4 className="font-medium text-white group-hover:text-teal-300 mb-1 text-xs">Modern Stack vs CMS</h4>
              <p className="text-[11px] text-white/50 font-light">Why Next.js outperforms legacy WordPress.</p>
            </Link>
            <Link href="/services/web-development/pwa-vs-native" className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl hover:border-teal-400/40 transition-all group">
              <h4 className="font-medium text-white group-hover:text-teal-300 mb-1 text-xs">PWA vs Native Apps</h4>
              <p className="text-[11px] text-white/50 font-light">Progressive web apps without app store friction.</p>
            </Link>
          </div>
        </div>

        {/* Pillar C: Business Automation & AI Systems */}
        <div className="bg-neutral-950/40 border border-white/10 p-8 rounded-3xl backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-white/5 gap-4">
            <div>
              <h3 className="text-xl font-medium text-white flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                  <Cpu className="w-4 h-4" />
                </div>
                Business Automation & Custom CRMs
              </h3>
              <p className="text-xs text-white/55 font-light mt-1">Automate lead qualification, invoicing, and internal workflows.</p>
            </div>
            <Link href="/services/automation" className="px-4 py-2 bg-purple-500/10 text-purple-300 border border-purple-500/20 rounded-xl text-xs font-semibold hover:bg-purple-500/20 transition-colors">
              Automation Hub →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/services/automation/ai-chatbot-integration" className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl hover:border-purple-400/40 transition-all group">
              <h4 className="font-medium text-white group-hover:text-purple-300 mb-1 text-xs">AI Chatbot Integration</h4>
              <p className="text-[11px] text-white/50 font-light">24/7 lead qualification and booking agents.</p>
            </Link>
            <Link href="/services/automation/custom-crm-vs-saas" className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl hover:border-purple-400/40 transition-all group">
              <h4 className="font-medium text-white group-hover:text-purple-300 mb-1 text-xs">Custom CRM vs SaaS</h4>
              <p className="text-[11px] text-white/50 font-light">Tailored mini-CRMs without per-user SaaS fees.</p>
            </Link>
            <Link href="/services/automation/proposal-invoice-automation" className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl hover:border-purple-400/40 transition-all group">
              <h4 className="font-medium text-white group-hover:text-purple-300 mb-1 text-xs">Proposal & Invoice Flow</h4>
              <p className="text-[11px] text-white/50 font-light">Instant contract generation and e-signatures.</p>
            </Link>
            <Link href="/services/automation/unified-admin-dashboards" className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl hover:border-purple-400/40 transition-all group">
              <h4 className="font-medium text-white group-hover:text-purple-300 mb-1 text-xs">Unified Admin Dashboards</h4>
              <p className="text-[11px] text-white/50 font-light">Centralized command centers for your enterprise.</p>
            </Link>
          </div>
        </div>

      </section>

      {/* 9. THOUGHT LEADERSHIP & FINAL CALL TO ACTION */}
      <section className="max-w-6xl mx-auto px-6 py-20 pointer-events-auto w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#007AFF]">Agency Standards</span>
              <h2 className="text-2xl md:text-4xl font-light text-white">Engineered by Practitioners. Proven by Data.</h2>
              <p className="text-white/60 font-light leading-relaxed text-xs md:text-sm">
                Stop bouncing between fragmented freelancers and slow agencies. We align your codebase, ad spend attribution, and daily operational workflows into a single cohesive growth pipeline.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/blog" className="px-6 py-3 bg-white text-black font-semibold rounded-full text-xs hover:bg-neutral-200 transition-colors shadow-lg">
                  Read Our Blog
                </Link>
                <Link href="/about" className="px-6 py-3 bg-white/[0.03] border border-white/15 text-white/80 font-medium rounded-full text-xs hover:bg-white/10 transition-colors">
                  Our Founding Philosophy
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-neutral-950/70 border border-white/15 p-8 md:p-10 rounded-3xl backdrop-blur-2xl shadow-2xl space-y-6">
              <span className="text-[10px] font-mono text-[#007AFF] font-bold tracking-widest uppercase">Next Step</span>
              <h3 className="text-xl font-medium text-white">Ready to Modernize Your Revenue Infrastructure?</h3>
              <p className="text-xs text-white/60 font-light leading-relaxed">
                Schedule a 30-minute diagnostic session with our systems architect to review your ad spend efficiency, Core Web Vitals, and conversion pipelines.
              </p>
              <Link href="/contact" className="block w-full py-4 bg-[#007AFF] hover:bg-blue-600 text-white font-semibold text-center rounded-2xl transition-all shadow-lg shadow-blue-500/25 hover:scale-[1.01] text-xs">
                Schedule Your Architecture Call
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}