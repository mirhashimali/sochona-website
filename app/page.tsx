import type { Metadata } from "next";
import Link from "next/link";
import { 
  Megaphone, Repeat, Cpu, ArrowRight, TrendingUp, Code2, Layers, Zap, 
  ShieldCheck, BarChart3, Bot, Clock, Sparkles, ChevronRight, Calendar,
  ArrowDownRight, ArrowUpRight, Wallet, Check, X, CheckCircle2
} from "lucide-react";
import LeadForm from "@/components/LeadForm";
import ScrollReveal from "@/components/ScrollReveal";
import Hero from "@/components/Hero";
import SpeedRace from "@/components/SpeedRace";

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
  other: {
    "facebook-domain-verification": "5kd314pd7tfx18wnapdsierf7nzj2k",
  },
};

const stats = [
  { v: "3.4×", k: "Average pipeline multiple", c: "text-gradient-growth" },
  { v: "41.8%", k: "Reduction in acquisition cost", c: "text-gradient-blue" },
  { v: "+210%", k: "Increase in qualified meetings", c: "text-gradient-growth" },
  { v: "16 hrs", k: "Saved per week in manual admin", c: "text-gradient-blue" },
];

const levers = [
  { 
    icon: ArrowDownRight, 
    t: "Lower Acquisition Cost", 
    b: "Faster pages and tighter intent targeting mean fewer wasted clicks per closed deal. Same budget, more customers.", 
    c: "text-blue-400", 
    ring: "border-blue-500/30 bg-blue-500/10" 
  },
  { 
    icon: ArrowUpRight, 
    t: "Higher Close Velocity", 
    b: "AI qualification and instant booking compress days of back-and-forth into minutes, so demand converts before it cools.", 
    c: "text-emerald-400", 
    ring: "border-emerald-500/30 bg-emerald-500/10" 
  },
  { 
    icon: Wallet, 
    t: "Lower Operating Cost", 
    b: "Custom automation replaces per-seat SaaS and manual admin. Revenue scales; payroll and software spend do not.", 
    c: "text-amber-400", 
    ring: "border-amber-500/30 bg-amber-500/10" 
  },
];

const comparisonRows = [
  ["First paint", "3–6s on shared hosting", "< 0.8s at the edge"],
  ["After-hours leads", "Sit in an inbox until morning", "Qualified and booked in minutes"],
  ["Attribution", "Broken by privacy changes", "Server-side, first-party"],
  ["CRM cost", "$150+/seat/month, forever", "Built once. Owned outright."],
  ["Proposals & invoices", "Manual, days of lag", "Generated on trigger, e-signed"],
  ["Scaling revenue", "Hire more people", "Add automation, not headcount"],
];

const cases = [
  { 
    sector: "B2B Enterprise", 
    t: "WordPress to Next.js + AI qualification", 
    b: "Rebuilt the legacy stack from scratch, cut bounce rate 68%, and deployed an autonomous booking agent.", 
    kpi: "+210%", 
    kl: "qualified monthly meetings", 
    c: "text-emerald-400" 
  },
  { 
    sector: "High-Growth Commerce", 
    t: "Edge delivery + PMax intent engine", 
    b: "Eliminated render-blocking JS, implemented server-side Conversions API, and rebuilt the purchase funnel.", 
    kpi: "−41.8%", 
    kl: "customer acquisition cost", 
    c: "text-blue-400" 
  },
  { 
    sector: "Professional Services", 
    t: "Custom mini-CRM + proposal flow", 
    b: "Replaced seat-based SaaS with a unified operations dashboard and instant contract triggers.", 
    kpi: "16 hrs/wk", 
    kl: "manual workload removed", 
    c: "text-amber-400" 
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full bg-transparent text-white selection:bg-[#007AFF] selection:text-white relative overflow-x-clip pb-28">

      {/* GLOBAL AMBIENT LAYER */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="bg-grid absolute inset-0 opacity-80" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[550px] bg-gradient-to-b from-[#007AFF]/20 via-[#5E5CE6]/10 to-transparent blur-[140px] animate-pulse-glow" />
      </div>
      
      {/* 1. HERO SECTION (Imported to preserve Metadata) */}
      <div className="w-full relative z-10">
        <Hero />
      </div>

      {/* 2. RESEARCH BENCHMARKS */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 relative z-10 mt-4 sm:mt-8">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 p-4 sm:p-6 rounded-2xl sm:rounded-3xl glass-strong border border-white/15 shadow-2xl">
            <div className="text-center p-2 border-r border-white/10">
              <span className="text-2xl sm:text-3xl font-extrabold text-blue-400">3.4x</span>
              <p className="text-[11px] sm:text-xs text-white/70 mt-1 uppercase tracking-wider font-semibold">Average Pipeline Multiple</p>
            </div>
            <div className="text-center p-2 md:border-r border-white/10">
              <span className="text-2xl sm:text-3xl font-extrabold text-teal-300">&lt; 0.8s</span>
              <p className="text-[11px] sm:text-xs text-white/70 mt-1 uppercase tracking-wider font-semibold">Global Edge Latency</p>
            </div>
            <div className="text-center p-2 border-r border-white/10">
              <span className="text-2xl sm:text-3xl font-extrabold text-purple-400">24/7</span>
              <p className="text-[11px] sm:text-xs text-white/70 mt-1 uppercase tracking-wider font-semibold">Autonomous Lead Capture</p>
            </div>
            <div className="text-center p-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-amber-300">0%</span>
              <p className="text-[11px] sm:text-xs text-white/70 mt-1 uppercase tracking-wider font-semibold">CMS Plugin Bloat</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. INTERACTIVE SPEED RACE */}
      <SpeedRace lang="en" />

      {/* 4. THE 3-PILLAR GROWTH FRAMEWORK (Restored) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 pointer-events-auto w-full relative z-10">
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-12">
            <span className="eyebrow text-[#007AFF]">Architectural Methodology</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 mb-2">Our Core Growth Framework</h2>
            <p className="text-white/65 text-xs sm:text-sm max-w-xl mx-auto">
              We design end-to-end ecosystems engineered around a single metric: your bottom-line revenue.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-2 pb-6 px-1">
          <Link href="/attract" className="block group">
            <div className="glass-strong border border-white/15 p-6 sm:p-8 rounded-2xl sm:rounded-3xl group-hover:border-blue-500/50 group-hover:-translate-y-2 group-hover:shadow-[0_15px_35px_rgba(0,122,255,0.15)] transition-all h-full flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center mb-5 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                  <Megaphone className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400/80">Pillar 01 • Demand</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1 mb-2">1. Attract</h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Precision-targeted campaigns that pull high-intent traffic directly to your front door without broad-match ad waste.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm text-blue-400 font-medium group-hover:translate-x-0.5 transition-all">
                <span>Explore Attract</span>
                <ChevronRight className="w-4 h-4 opacity-70 group-hover:opacity-100" />
              </div>
            </div>
          </Link>

          <Link href="/convert" className="block group">
            <div className="glass-strong border border-white/15 p-6 sm:p-8 rounded-2xl sm:rounded-3xl group-hover:border-purple-400/50 group-hover:-translate-y-2 group-hover:shadow-[0_15px_35px_rgba(168,85,247,0.15)] transition-all h-full flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center mb-5 text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                  <Repeat className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400/80">Pillar 02 • Conversion</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1 mb-2">2. Convert</h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Sub-second Next.js interfaces paired with AI conversational agents that qualify leads and book appointments 24/7.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm text-purple-400 font-medium group-hover:translate-x-0.5 transition-all">
                <span>Explore Convert</span>
                <ChevronRight className="w-4 h-4 opacity-70 group-hover:opacity-100" />
              </div>
            </div>
          </Link>

          <Link href="/run-smarter" className="block group">
            <div className="glass-strong border border-white/15 p-6 sm:p-8 rounded-2xl sm:rounded-3xl group-hover:border-emerald-400/50 group-hover:-translate-y-2 group-hover:shadow-[0_15px_35px_rgba(16,185,129,0.15)] transition-all h-full flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center mb-5 text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400/80">Pillar 03 • Scale</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1 mb-2">3. Run Smarter</h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Custom Mini-CRMs and automated workflows that let your team scale revenue without per-seat software fees.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm text-emerald-400 font-medium group-hover:translate-x-0.5 transition-all">
                <span>Explore Automation</span>
                <ChevronRight className="w-4 h-4 opacity-70 group-hover:opacity-100" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 5. THE DIAGNOSTIC STORY (Restored exactly for SEO internal links) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 pointer-events-auto w-full relative z-10 border-t border-white/10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
            <span className="eyebrow text-[#007AFF]">Root Cause Diagnostic</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 mb-2">Why Most Businesses Waste 60% of Their Digital Capital</h2>
            <p className="text-white/65 text-xs sm:text-sm">
              Siloed ad accounts, sluggish legacy CMS themes, and manual pipelines create friction at every touchpoint. Explore our <Link href="/services" className="text-[#007AFF] underline">Services Overview</Link> or learn more <Link href="/about" className="text-[#007AFF] underline">About Sochona</Link>.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <ScrollReveal>
            <div className="glass-strong border border-white/10 p-6 sm:p-8 rounded-2xl sm:rounded-3xl h-full flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center mb-5">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">Brand & UX Friction</h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
                  When visual identity and UI are disconnected, bounce rates soar. Read our insights on <Link href="/services/branding/the-cost-of-fragmentation" className="text-blue-400 underline hover:text-blue-300">The Cost of Fragmentation</Link>, <Link href="/services/branding/ui-ux-conversion-friction" className="text-blue-400 underline hover:text-blue-300">UI/UX Friction</Link>, and <Link href="/services/branding/visual-psychology-roi" className="text-blue-400 underline hover:text-blue-300">Visual Psychology ROI</Link> via our <Link href="/services/branding" className="text-white underline">Branding Hub</Link>.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 text-xs text-white/50">Strategic Rebranding & Identity</div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="glass-strong border border-white/10 p-6 sm:p-8 rounded-2xl sm:rounded-3xl h-full flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-5">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">Technical Penalties</h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
                  Slow load speeds destroy organic rankings. Discover why a <Link href="/services/maintenance/core-web-vitals-penalty" className="text-amber-400 underline hover:text-amber-300">Web Vitals Penalty</Link> hurts visibility, how <Link href="/services/maintenance/edge-architecture-latency" className="text-amber-400 underline hover:text-amber-300">Edge Latency</Link> affects users, and the necessity of <Link href="/services/maintenance/zero-trust-security" className="text-amber-400 underline hover:text-amber-300">Zero-Trust Security</Link>.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 text-xs text-white/50">Managed via <Link href="/services/maintenance" className="text-white underline">Maintenance Hub</Link></div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="glass-strong border border-white/10 p-6 sm:p-8 rounded-2xl sm:rounded-3xl h-full flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-5">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">Executive Blind Spots</h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
                  Without expert oversight, revenue slips away. Learn how <Link href="/services/consulting/diagnosing-revenue-leakage" className="text-purple-400 underline hover:text-purple-300">Diagnosing Revenue Leakage</Link>, building an <Link href="/services/consulting/ai-competitive-moat" className="text-purple-400 underline hover:text-purple-300">AI Competitive Moat</Link>, and leveraging a <Link href="/services/consulting/fractional-executive-advantage" className="text-purple-400 underline hover:text-purple-300">Fractional Executive Advantage</Link> transforms operations.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 text-xs text-white/50">Guided by <Link href="/services/consulting" className="text-white underline">Executive Consulting</Link></div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. COMPLETE SERVICE ECOSYSTEM HUBS (Restored massively for SEO) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 pointer-events-auto w-full relative z-10 space-y-12 sm:space-y-16">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="eyebrow text-[#007AFF]">Full-Stack Execution</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 mb-2">Specialized Capability Hubs</h2>
            <p className="text-white/65 text-xs sm:text-sm">Every discipline is engineered to integrate cleanly into your automated revenue pipeline.</p>
          </div>
        </ScrollReveal>

        {/* Pillar A: Performance Marketing & SEO */}
        <div className="glass-strong border border-white/10 p-5 sm:p-8 rounded-2xl sm:rounded-3xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-5 mb-5 border-b border-white/5 gap-4">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4 text-blue-400" />
                </div>
                <span>Performance Marketing & SEO</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/65 mt-1">Capture high-intent demand across Google Ads and search engine real estate.</p>
            </div>
            <div className="flex gap-2.5">
              <Link href="/services/performance-marketing" className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-xl text-xs font-semibold hover:bg-blue-500/20 transition-colors">
                Performance Hub →
              </Link>
              <Link href="/services/seo" className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-xl text-xs font-semibold hover:bg-cyan-500/20 transition-colors">
                SEO Hub →
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/services/performance-marketing/scaling-capital-strategy" className="bg-white/[0.02] border border-white/5 p-4 rounded-xl hover:border-blue-500/40 transition-all group">
              <h4 className="font-bold text-white group-hover:text-blue-300 mb-1 text-sm">Scaling Capital Strategy</h4>
              <p className="text-xs text-white/60">Deploy ad spend profitably across high-intent channels.</p>
            </Link>
            <Link href="/services/performance-marketing/pmax-vs-search-intent" className="bg-white/[0.02] border border-white/5 p-4 rounded-xl hover:border-blue-500/40 transition-all group">
              <h4 className="font-bold text-white group-hover:text-blue-300 mb-1 text-sm">PMax vs Search Intent</h4>
              <p className="text-xs text-white/60">Balance automated asset groups with exact keywords.</p>
            </Link>
            <Link href="/services/performance-marketing/attribution-in-privacy-era" className="bg-white/[0.02] border border-white/5 p-4 rounded-xl hover:border-blue-500/40 transition-all group">
              <h4 className="font-bold text-white group-hover:text-blue-300 mb-1 text-sm">Attribution in Privacy Era</h4>
              <p className="text-xs text-white/60">First-party data models and server-side tracking.</p>
            </Link>
            <Link href="/services/performance-marketing/the-economics-of-cro" className="bg-white/[0.02] border border-white/5 p-4 rounded-xl hover:border-blue-500/40 transition-all group">
              <h4 className="font-bold text-white group-hover:text-blue-300 mb-1 text-sm">The Economics of CRO</h4>
              <p className="text-xs text-white/60">Compound lifetime value with conversion rate lifts.</p>
            </Link>
          </div>
        </div>

        {/* Pillar B: Web Development */}
        <div className="glass-strong border border-white/10 p-5 sm:p-8 rounded-2xl sm:rounded-3xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-5 mb-5 border-b border-white/5 gap-4">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-teal-500/10 flex items-center justify-center shrink-0">
                  <Code2 className="w-4 h-4 text-teal-400" />
                </div>
                <span>Web Development & Architecture</span>
              </h3>
            </div>
            <Link href="/services/web-development" className="px-4 py-2 bg-teal-500/10 text-teal-300 rounded-xl text-xs font-semibold hover:bg-teal-500/20 transition-colors">
              Web Development Hub →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/services/web-development/conversion-first-ux" className="bg-white/[0.02] border border-white/5 p-4 rounded-xl hover:border-teal-400/40 transition-all group">
              <h4 className="font-bold text-white group-hover:text-teal-300 mb-1 text-sm">Conversion-First UX</h4>
              <p className="text-xs text-white/60">UI built around psychological friction reduction.</p>
            </Link>
            <Link href="/services/web-development/edge-delivery-performance" className="bg-white/[0.02] border border-white/5 p-4 rounded-xl hover:border-teal-400/40 transition-all group">
              <h4 className="font-bold text-white group-hover:text-teal-300 mb-1 text-sm">Edge Performance</h4>
              <p className="text-xs text-white/60">Sub-second load times via global edge caching.</p>
            </Link>
            <Link href="/services/web-development/modern-stack-vs-cms" className="bg-white/[0.02] border border-white/5 p-4 rounded-xl hover:border-teal-400/40 transition-all group">
              <h4 className="font-bold text-white group-hover:text-teal-300 mb-1 text-sm">Modern Stack vs CMS</h4>
              <p className="text-xs text-white/60">Why Next.js outperforms legacy WordPress.</p>
            </Link>
            <Link href="/services/web-development/pwa-vs-native" className="bg-white/[0.02] border border-white/5 p-4 rounded-xl hover:border-teal-400/40 transition-all group">
              <h4 className="font-bold text-white group-hover:text-teal-300 mb-1 text-sm">PWA vs Native Apps</h4>
              <p className="text-xs text-white/60">Progressive web apps without app store friction.</p>
            </Link>
          </div>
        </div>

        {/* Pillar C: Business Automation */}
        <div className="glass-strong border border-white/10 p-5 sm:p-8 rounded-2xl sm:rounded-3xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-5 mb-5 border-b border-white/5 gap-4">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                  <Cpu className="w-4 h-4 text-purple-400" />
                </div>
                <span>Automation & Custom CRMs</span>
              </h3>
            </div>
            <Link href="/services/automation" className="px-4 py-2 bg-purple-500/10 text-purple-300 rounded-xl text-xs font-semibold hover:bg-purple-500/20 transition-colors">
              Automation Hub →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/services/automation/ai-chatbot-integration" className="bg-white/[0.02] border border-white/5 p-4 rounded-xl hover:border-purple-400/40 transition-all group">
              <h4 className="font-bold text-white group-hover:text-purple-300 mb-1 text-sm">AI Chatbot Integration</h4>
              <p className="text-xs text-white/60">24/7 lead qualification and booking agents.</p>
            </Link>
            <Link href="/services/automation/custom-crm-vs-saas" className="bg-white/[0.02] border border-white/5 p-4 rounded-xl hover:border-purple-400/40 transition-all group">
              <h4 className="font-bold text-white group-hover:text-purple-300 mb-1 text-sm">Custom CRM vs SaaS</h4>
              <p className="text-xs text-white/60">Tailored mini-CRMs without per-user SaaS fees.</p>
            </Link>
            <Link href="/services/automation/proposal-invoice-automation" className="bg-white/[0.02] border border-white/5 p-4 rounded-xl hover:border-purple-400/40 transition-all group">
              <h4 className="font-bold text-white group-hover:text-purple-300 mb-1 text-sm">Proposal & Invoice Flow</h4>
              <p className="text-xs text-white/60">Instant contract generation and e-signatures.</p>
            </Link>
            <Link href="/services/automation/unified-admin-dashboards" className="bg-white/[0.02] border border-white/5 p-4 rounded-xl hover:border-purple-400/40 transition-all group">
              <h4 className="font-bold text-white group-hover:text-purple-300 mb-1 text-sm">Unified Dashboards</h4>
              <p className="text-xs text-white/60">Centralized command centers for your enterprise.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. ROI & P&L IMPACT SECTION */}
      <section id="roi" className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 relative z-10 border-t border-white/10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="eyebrow text-[#007AFF]">How It Hits Your P&amp;L</p>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold leading-tight">
              We are measured on <span className="text-gradient-growth">profit</span>, not deliverables.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {levers.map((l) => {
            const Icon = l.icon;
            return (
              <ScrollReveal key={l.t}>
                <div className="glass h-full rounded-3xl p-7 flex flex-col justify-between hover:border-white/30 transition-all">
                  <div>
                    <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${l.ring} ${l.c} mb-5`}>
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{l.t}</h3>
                    <p className="text-sm leading-relaxed text-white/70">{l.b}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.k} className="glass-strong p-6 sm:p-7 rounded-2xl text-center">
              <div className={`text-3xl sm:text-4xl font-extrabold ${s.c}`}>{s.v}</div>
              <div className="mt-2 text-xs sm:text-sm text-white/70 font-medium">{s.k}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center mb-8">
          <span className="eyebrow">Proven Case Studies</span>
          <h3 className="text-2xl font-bold text-white mt-2">Systems Architecture Outperforms Retainers</h3>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {cases.map((c) => (
            <ScrollReveal key={c.t}>
              <article className="glass h-full flex flex-col justify-between rounded-3xl p-7 hover:border-white/30 transition-all">
                <div>
                  <span className="eyebrow text-blue-400">{c.sector}</span>
                  <h4 className="mt-3 text-lg font-bold text-white leading-snug">{c.t}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{c.b}</p>
                </div>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <div className={`text-3xl font-extrabold ${c.c}`}>{c.kpi}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-white/50">{c.kl}</div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 8. URGENCY COMPARISON MATRIX */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-16 relative z-10 border-t border-white/10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="eyebrow text-[#007AFF]">The Competitive Gap</p>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold leading-tight">
              Your competitors already made the switch.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="glass-strong overflow-x-auto rounded-3xl border border-white/15 shadow-2xl">
            <div className="grid grid-cols-[1.2fr_1fr_1fr] min-w-[600px] border-b border-white/10 bg-white/[0.03] px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-white/50">
              <span>Metric</span>
              <span className="text-ember font-bold">Legacy Stack</span>
              <span className="text-emerald-400 font-bold">Sochona System</span>
            </div>
            {comparisonRows.map(([k, a, b]) => (
              <div key={k} className="grid grid-cols-[1.2fr_1fr_1fr] min-w-[600px] items-center gap-3 border-b border-white/10 px-5 py-4 text-xs sm:text-sm last:border-b-0">
                <span className="font-semibold text-white">{k}</span>
                <span className="flex items-start gap-1.5 text-white/60">
                  <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ember" /><span>{a}</span>
                </span>
                <span className="flex items-start gap-1.5 text-white/95 font-medium">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" /><span>{b}</span>
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* 9. AUDIT FORM SECTION */}
      <section id="audit-form" className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-16 w-full relative z-10 scroll-mt-28">
        <LeadForm variant="global" />
      </section>

      {/* 10. THOUGHT LEADERSHIP & FINAL CTA (Restored) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 pointer-events-auto w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <ScrollReveal>
            <div className="space-y-4 sm:space-y-6">
              <span className="eyebrow text-[#007AFF]">Agency Standards</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Engineered by Practitioners. Proven by Data.</h2>
              <p className="text-white/70 text-sm leading-relaxed">
                Stop bouncing between fragmented freelancers and slow agencies. We align your codebase, ad spend attribution, and daily operational workflows into a single cohesive growth pipeline.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/blog" className="px-6 py-3 bg-white text-black font-semibold rounded-full text-sm hover:bg-neutral-200 transition-colors shadow-lg">
                  Read Our Blog
                </Link>
                <Link href="/about" className="px-6 py-3 border border-white/20 text-white/80 font-medium rounded-full text-sm hover:bg-white/10 transition-colors">
                  Our Founding Philosophy
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="glass-strong p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-[0_0_50px_rgba(0,122,255,0.2)] border border-blue-500/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-600/30 to-transparent rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 space-y-4 sm:space-y-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> Next Step
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">Ready to Modernize Your Revenue Infrastructure?</h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Schedule a 30-minute diagnostic session with our systems architect to review your ad spend efficiency, Core Web Vitals, and conversion pipelines.
                </p>
                <Link href="/book" className="relative group flex items-center justify-center gap-2 w-full py-4 bg-[#007AFF] hover:bg-blue-600 text-white font-semibold rounded-full transition-all ring-glow hover:scale-[1.02] shadow-lg text-sm overflow-hidden">
                  <Calendar className="w-4 h-4 text-cyan-200" />
                  <span>Schedule Your Architecture Call</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}