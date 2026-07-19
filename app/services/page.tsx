import type { Metadata } from "next";
import Link from "next/link";
import { Code2, LineChart, Target, Bot, Compass, PenTool, ShieldCheck } from "lucide-react";

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
      color: "group-hover:border-blue-500/50",
      iconColor: "text-blue-400"
    },
    {
      title: "SEO & Search",
      desc: "Own your organic real estate. We engineer your web presence with Technical SEO and Local GBP optimization.",
      href: "/services/seo",
      icon: LineChart,
      color: "group-hover:border-emerald-500/50",
      iconColor: "text-emerald-400"
    },
    {
      title: "Performance Marketing",
      desc: "Deploy scalable capital across the Google ecosystem to capture high-intent demand and drive brutal ROI.",
      href: "/services/performance-marketing",
      icon: Target,
      color: "group-hover:border-orange-500/50",
      iconColor: "text-orange-400"
    },
    {
      title: "CRM & Automation",
      desc: "Automate your workflow. We develop custom mini-CRMs, internal dashboards, and AI automations.",
      href: "/services/automation",
      icon: Bot,
      color: "group-hover:border-purple-500/50",
      iconColor: "text-purple-400"
    },
    {
      title: "Branding & Identity",
      desc: "Command authority. Comprehensive brand identities engineered for market positioning and aggressive conversion.",
      href: "/services/branding",
      icon: PenTool,
      color: "group-hover:border-cyan-500/50",
      iconColor: "text-cyan-400"
    },
    {
      title: "Infrastructure & Maintenance",
      desc: "Downtime is lost revenue. Enterprise-grade hosting, security monitoring, and proactive maintenance.",
      href: "/services/maintenance",
      icon: ShieldCheck,
      color: "group-hover:border-slate-500/50",
      iconColor: "text-slate-400"
    },
    {
      title: "Consulting & Strategy",
      desc: "High-level technology and marketing advisory. Navigate digital transformation and scale revenue with lethal precision.",
      href: "/services/consulting",
      icon: Compass,
      color: "group-hover:border-amber-500/50",
      iconColor: "text-amber-500"
    }
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20 text-center pointer-events-none">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500 pointer-events-auto">
          Scalable Digital Solutions
        </h1>
        <p className="text-xl text-neutral-400 max-w-3xl mx-auto pointer-events-auto">
          Select a discipline below to explore our infrastructure, capabilities, and strategic roadmaps.
        </p>
      </section>

      {/* Services Grid (Clickable Portals) */}
      <section className="max-w-7xl mx-auto px-6 mb-24 pointer-events-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Link href={service.href} key={idx} className={`group block cursor-none`}>
              <div className={`bg-neutral-900 border border-neutral-800 rounded-2xl p-8 h-full transition-all duration-300 hover:-translate-y-2 shadow-lg ${service.color}`}>
                <service.icon className={`w-10 h-10 mb-6 transition-transform group-hover:scale-110 ${service.iconColor}`} />
                <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-gray-200 transition-colors">
                  {service.title}
                </h2>
                <p className="text-neutral-400 leading-relaxed">
                  {service.desc}
                </p>
                
                {/* Visual cue that it's a link */}
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold opacity-60 group-hover:opacity-100 transition-opacity">
                  <span className={service.iconColor}>Explore Infrastructure</span>
                  <span className={`transition-transform group-hover:translate-x-1 ${service.iconColor}`}>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-3xl mx-auto px-6 text-center pointer-events-auto">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to scale?</h2>
          <p className="text-neutral-400 mb-8">Let's audit your current digital infrastructure and build a system that drives revenue.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors cursor-none">
            Start the Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}