import type { Metadata } from "next";
import Link from "next/link";
import { Code2, LineChart, Target, Bot, Compass, PenTool, ShieldCheck, ArrowRight, Sparkles, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing & Web Services | Sochona",
  description: "Comprehensive digital solutions including high-performance web development, Google Ads management, SEO, and business automation for growing industries.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      desc: "We build digital engines. High-performance web applications, corporate websites, and PWAs designed to scale and convert.",
      href: "/services/web-development",
      icon: Code2,
      badge: "Next.js & React",
      borderColor: "hover:border-blue-500/40",
      iconColor: "text-blue-400",
      bgGlow: "group-hover:bg-blue-500/[0.02]"
    },
    {
      title: "SEO & Search",
      desc: "Own your organic real estate. We engineer your web presence with Technical SEO, AI Overviews, and Local GBP optimization.",
      href: "/services/seo",
      icon: LineChart,
      badge: "Organic Growth",
      borderColor: "hover:border-emerald-500/40",
      iconColor: "text-emerald-400",
      bgGlow: "group-hover:bg-emerald-500/[0.02]"
    },
    {
      title: "Performance Marketing",
      desc: "Deploy scalable capital across the Google ecosystem to capture high-intent demand and drive brutal ROI.",
      href: "/services/performance-marketing",
      icon: Target,
      badge: "PMax & Ads",
      borderColor: "hover:border-orange-500/40",
      iconColor: "text-orange-400",
      bgGlow: "group-hover:bg-orange-500/[0.02]"
    },
    {
      title: "CRM & Automation",
      desc: "Automate your workflow. We develop custom mini-CRMs, internal dashboards, and AI chatbots that book meetings 24/7.",
      href: "/services/automation",
      icon: Bot,
      badge: "AI & Workflows",
      borderColor: "hover:border-purple-500/40",
      iconColor: "text-purple-400",
      bgGlow: "group-hover:bg-purple-500/[0.02]"
    },
    {
      title: "Branding & Identity",
      desc: "Command authority. Comprehensive brand identities engineered for visual psychology and aggressive conversion.",
      href: "/services/branding",
      icon: PenTool,
      badge: "UI/UX & Identity",
      borderColor: "hover:border-cyan-500/40",
      iconColor: "text-cyan-400",
      bgGlow: "group-hover:bg-cyan-500/[0.02]"
    },
    {
      title: "Infrastructure & Maintenance",
      desc: "Downtime is lost revenue. Enterprise-grade hosting, Core Web Vitals optimization, and proactive zero-trust security.",
      href: "/services/maintenance",
      icon: ShieldCheck,
      badge: "Zero-Trust Security",
      borderColor: "hover:border-slate-400/40",
      iconColor: "text-slate-300",
      bgGlow: "group-hover:bg-slate-400/[0.02]"
    },
    {
      title: "Consulting & Strategy",
      desc: "High-level technology and marketing advisory. Navigate digital transformation, plug revenue leaks, and scale with lethal precision.",
      href: "/services/consulting",
      icon: Compass,
      badge: "Executive Advisory",
      borderColor: "hover:border-amber-500/40",
      iconColor: "text-amber-400",
      bgGlow: "group-hover:bg-amber-500/[0.02]"
    }
  ];

  return (
    <main className="min-h-screen text-white selection:bg-[#007AFF] selection:text-white relative">
      
      {/* Hero Section with Frosted Glass Card for Maximum Readability over 3D Background */}
      <section className="max-w-4xl mx-auto px-6 pt-36 pb-32 text-center relative z-10">
        <div className="bg-[#0b0f17]/60 backdrop-blur-2xl border border-white/15 rounded-3xl p-8 md:p-14 shadow-2xl relative overflow-hidden">
          
          {/* Subtle vibrant inner glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gradient-to-r from-blue-500/20 via-orange-500/20 to-purple-500/20 blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-xl shadow-lg relative z-10">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-xs font-semibold tracking-widest uppercase text-white">Capabilities Hub</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-100 to-neutral-300 pb-2 leading-tight relative z-10">
            Architecting High-Performance Digital Ecosystems
          </h1>
          
          <p className="text-base md:text-lg text-neutral-200 max-w-2xl mx-auto leading-relaxed font-normal relative z-10">
            Select a discipline below to explore our enterprise infrastructure, technical capabilities, and strategic growth roadmaps engineered for exponential scale.
          </p>
        </div>
      </section>

      {/* Lower Sections Container with Seamless Gradient Fade */}
      <div className="relative z-10 bg-gradient-to-b from-transparent via-[#0b0f17]/85 to-[#080b12] bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px] pt-4 pb-24 overflow-hidden">
        
        {/* Mixed Color Ambient Background Blobs */}
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />

        {/* Services Grid */}
        <section className="max-w-7xl mx-auto px-6 mb-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Link href={service.href} key={idx} className="group block h-full">
                <div className={`bg-[#131824]/90 border border-white/10 rounded-3xl p-8 h-full transition-all duration-300 group-hover:-translate-y-1.5 shadow-2xl backdrop-blur-2xl flex flex-col justify-between relative ${service.borderColor} ${service.bgGlow}`}>
                  
                  {/* Top Row: Icon & Badge */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner">
                        <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                      </div>
                      <span className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                        {service.badge}
                      </span>
                    </div>

                    <h2 className="text-xl font-semibold mb-3 text-white tracking-tight">
                      {service.title}
                    </h2>
                    
                    <p className="text-neutral-300 text-sm leading-relaxed font-normal">
                      {service.desc}
                    </p>
                  </div>

                  {/* Footer Action Cue */}
                  <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-medium">
                    <span className={`${service.iconColor}`}>Explore Infrastructure</span>
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 text-white/90" />
                    </div>
                  </div>

                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Process / Integration Banner */}
        <section className="max-w-6xl mx-auto px-6 mb-24">
          <div className="bg-[#131824]/90 border border-white/10 rounded-3xl p-10 backdrop-blur-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="text-[#007AFF] text-xs font-semibold uppercase tracking-widest flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" /> Unified Ecosystem
              </span>
              <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Why fragment your growth across 5 agencies?</h3>
              <p className="text-neutral-300 text-sm leading-relaxed font-normal">
                When your performance marketing, web architecture, and automated CRMs are built under one roof, data flows frictionlessly and ROI compounds exponentially.
              </p>
            </div>
            <Link href="/contact" className="px-8 py-4 bg-[#007AFF] hover:bg-blue-600 text-white font-medium rounded-2xl transition-colors shadow-lg shadow-blue-500/25 shrink-0 text-sm">
              Book an Architecture Review
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-[#131824]/90 border border-white/10 rounded-3xl p-12 backdrop-blur-2xl shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 tracking-tight">Ready to scale your enterprise?</h2>
            <p className="text-neutral-300 mb-8 max-w-lg mx-auto text-sm font-normal">
              Let's audit your current digital infrastructure and build a high-performance system that drives predictable revenue.
            </p>
            <Link href="/contact" className="inline-block px-8 py-3.5 bg-white text-black font-medium text-sm rounded-full hover:bg-neutral-200 transition-colors shadow-xl">
              Start the Conversation
            </Link>
          </div>
        </section>

      </div>

    </main>
  );
}