import type { Metadata } from "next";
import Link from "next/link";
import { Code2, LineChart, Target, Bot, Compass, PenTool, ShieldCheck, ArrowRight, Sparkles, Zap } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Digital Marketing & Web Services | Sochona",
  description: "Comprehensive digital solutions including Next.js web development, Google Ads performance marketing, technical SEO, and business automation.",
};

const services = [
  {
    title: "Web Architecture",
    desc: "We build digital engines. High-performance Next.js applications designed for sub-second latency and brutal conversion rates.",
    href: "/services/web-development",
    icon: Code2,
    badge: "Next.js & React",
    color: "blue"
  },
  {
    title: "Performance Marketing",
    desc: "Deploy scalable capital across the Google & Meta ecosystems to capture high-intent demand and drive measurable pipeline ROI.",
    href: "/services/performance-marketing",
    icon: Target,
    badge: "PMax & Ads",
    color: "orange"
  },
  {
    title: "SEO & Search Intent",
    desc: "Own your organic real estate. We engineer your web presence with Technical SEO, schema markup, and Local GBP dominance.",
    href: "/services/seo",
    icon: LineChart,
    badge: "Organic Growth",
    color: "emerald"
  },
  {
    title: "CRM & Automation",
    desc: "Automate your workflow. We develop custom mini-CRMs, internal dashboards, and AI conversational agents that book meetings 24/7.",
    href: "/services/automation",
    icon: Bot,
    badge: "AI Workflows",
    color: "purple"
  },
  {
    title: "Brand Identity",
    desc: "Command authority. Comprehensive brand identities engineered around visual psychology and trust signals.",
    href: "/services/branding",
    icon: PenTool,
    badge: "UI/UX",
    color: "cyan"
  },
  {
    title: "Infrastructure Security",
    desc: "Downtime is lost revenue. Enterprise-grade hosting, Core Web Vitals optimization, and proactive zero-trust security.",
    href: "/services/maintenance",
    icon: ShieldCheck,
    badge: "Zero-Trust",
    color: "slate"
  },
];

const colorMap = {
  blue: "hover:border-blue-500/50 text-blue-400 bg-blue-500/10 border-blue-500/20 group-hover:shadow-[0_0_30px_rgba(0,122,255,0.15)]",
  orange: "hover:border-orange-500/50 text-orange-400 bg-orange-500/10 border-orange-500/20 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]",
  emerald: "hover:border-emerald-500/50 text-emerald-400 bg-emerald-500/10 border-emerald-500/20 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
  purple: "hover:border-purple-500/50 text-purple-400 bg-purple-500/10 border-purple-500/20 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
  cyan: "hover:border-cyan-500/50 text-cyan-400 bg-cyan-500/10 border-cyan-500/20 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]",
  slate: "hover:border-slate-400/50 text-slate-300 bg-slate-500/10 border-slate-500/20 group-hover:shadow-[0_0_30px_rgba(148,163,184,0.15)]",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen text-white selection:bg-[#007AFF] selection:text-white relative pb-24">
      
      {/* GLOBAL AMBIENT LAYER */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="bg-grid absolute inset-0 opacity-80" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-[#007AFF]/15 via-purple-500/10 to-transparent blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 pt-32">
        
        {/* HERO SECTION */}
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-6 backdrop-blur-xl">
              <Sparkles className="w-3.5 h-3.5 text-[#007AFF]" />
              <span className="text-[10px] sm:text-xs font-mono font-semibold tracking-widest uppercase text-white/80">Capabilities Hub</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white leading-tight">
              Architecting High-Performance <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-400 to-neutral-600">Digital Ecosystems</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Select a discipline below to explore our enterprise infrastructure, technical capabilities, and strategic growth roadmaps engineered for exponential scale.
            </p>
          </div>
        </ScrollReveal>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {services.map((service, idx) => {
            const styles = colorMap[service.color as keyof typeof colorMap];
            const baseColor = styles.split(' ')[1]; // extracts the text color class
            return (
              <ScrollReveal key={idx}>
                <Link href={service.href} className="block h-full group">
                  <div className={`glass-strong border border-white/10 rounded-3xl p-8 h-full transition-all duration-500 flex flex-col justify-between ${styles.split(' ')[0]} ${styles.split(' ')[4]}`}>
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${styles.split(' ')[2]} ${styles.split(' ')[3]}`}>
                          <service.icon className={`w-6 h-6 ${baseColor}`} />
                        </div>
                        <span className="text-[10px] font-mono font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 group-hover:text-white/90 transition-colors">
                          {service.badge}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold mb-3 text-white">{service.title}</h2>
                      <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                        {service.desc}
                      </p>
                    </div>
                    <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold">
                      <span className={baseColor}>Explore Architecture</span>
                      <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${baseColor}`} />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        {/* INTEGRATION BANNER */}
        <ScrollReveal>
          <div className="glass-strong border border-[#007AFF]/30 rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 mb-24 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#007AFF]/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="space-y-4 max-w-2xl relative z-10 text-center lg:text-left">
              <span className="eyebrow text-[#007AFF] flex items-center justify-center lg:justify-start gap-1.5">
                <Zap className="w-4 h-4" /> Unified Ecosystem
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold text-white">Why fragment your growth across 5 different agencies?</h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                When your performance marketing, Next.js architecture, and automated CRMs are built under one roof, data flows frictionlessly and ROI compounds exponentially.
              </p>
            </div>
            <Link href="/contact" className="w-full lg:w-auto px-8 py-4 bg-[#007AFF] hover:bg-blue-600 text-white font-bold rounded-full transition-all shadow-lg hover:scale-105 shrink-0 text-sm text-center relative z-10">
              Book an Architecture Review
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </main>
  );
}