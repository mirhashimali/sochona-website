import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Server, Activity, Lock, CloudRain, Wrench, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Web Hosting, Security & Maintenance | Sochona",
  description: "Downtime is lost revenue. We provide enterprise-grade hosting, security monitoring, and proactive maintenance to keep your digital engines running 24/7.",
};

export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-500/10 border border-slate-500/30 mb-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-slate-400">System Reliability</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
          Downtime is <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-400 to-blue-400">
            lost revenue.
          </span>
        </h1>
        <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
          Building a high-performance system is only half the battle; keeping it secure, fast, and online is the other. We provide enterprise-grade hosting, automated backups, and proactive security monitoring so you can sleep knowing your infrastructure is impenetrable.
        </p>
      </section>

      {/* The Infrastructure Section */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-500/10 blur-[100px] rounded-full pointer-events-none"></div>
          
          <h2 className="text-3xl font-bold mb-8 text-white relative z-10">Proactive, not reactive.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="space-y-4 text-neutral-400 text-lg leading-relaxed">
              <p>
                Most businesses only think about their server when their website crashes or gets hacked. By then, the damage to your SEO and brand reputation is already done.
              </p>
              <p>
                We deploy your applications on modern Edge networks (Vercel, AWS), ensuring sub-second load times globally. We handle the SSL certificates, the DDOS protection, and the continuous framework updates behind the scenes.
              </p>
            </div>
            <div className="space-y-4 text-neutral-400 text-lg leading-relaxed">
              <ul className="space-y-4 mt-2 text-neutral-300 font-medium">
                <li className="flex items-center gap-3"><Activity className="w-6 h-6 text-slate-400" /> 99.99% Uptime Guarantee</li>
                <li className="flex items-center gap-3"><Lock className="w-6 h-6 text-slate-400" /> Military-Grade SSL & Encryption</li>
                <li className="flex items-center gap-3"><Server className="w-6 h-6 text-slate-400" /> Global CDN Edge Delivery</li>
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
              title: "Edge Network Hosting",
              desc: "Deploying your site across a global Content Delivery Network (CDN) so it loads instantly for users, whether they are in New York or New Delhi.",
              icon: Server
            },
            {
              title: "Continuous Security Monitoring",
              desc: "Active threat detection, firewall management, and immediate patching of vulnerabilities to ensure your client data remains completely secure.",
              icon: ShieldCheck
            },
            {
              title: "Automated Daily Backups",
              desc: "Redundant, off-site cloud backups of your entire database and codebase. If the worst happens, we can restore your entire system in minutes.",
              icon: CloudRain
            },
            {
              title: "Core Web Vitals Optimisation",
              desc: "Google constantly updates its speed requirements. We proactively tweak your codebase every month to ensure you maintain perfect performance scores.",
              icon: Activity
            },
            {
              title: "SSL & Domain Management",
              desc: "We handle the technical headaches. Auto-renewing SSL certificates, DNS record management, and domain routing.",
              icon: Lock
            },
            {
              title: "On-Demand Support Block",
              desc: "Need a quick content update or a new landing page spun up? Our maintenance packages include dedicated developer hours every single month.",
              icon: Wrench
            }
          ].map((feature, idx) => (
            <div key={idx} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-slate-500/50 transition-all duration-300 hover:-translate-y-1">
              <feature.icon className="w-10 h-10 text-slate-400 mb-6" />
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-neutral-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Deep Dives / SEO Hub & Spoke Links */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <div className="flex items-center gap-4 mb-8 border-b border-neutral-800 pb-4">
          <ShieldCheck className="w-6 h-6 text-slate-400" />
          <h2 className="text-2xl font-bold text-white">Technical Insights & Market Realities</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/services/maintenance/edge-architecture-latency" className="group p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-blue-500/50 transition-colors flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">Edge Architecture & The Latency Tax</h3>
              <p className="text-sm text-neutral-400">Why centralized legacy servers are bleeding your conversions.</p>
            </div>
            <ArrowRight className="w-5 h-5 text-blue-500 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>
          
          <Link href="/services/maintenance/zero-trust-security" className="group p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-blue-500/50 transition-colors flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">Zero-Trust Security & Breach Economics</h3>
              <p className="text-sm text-neutral-400">A data breach is a board-level crisis, not an IT problem.</p>
            </div>
            <ArrowRight className="w-5 h-5 text-blue-500 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>

          <Link href="/services/maintenance/core-web-vitals-penalty" className="group p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-blue-500/50 transition-colors flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">Core Web Vitals & Algorithmic Penalties</h3>
              <p className="text-sm text-neutral-400">How Google silently demotes unmaintained digital properties.</p>
            </div>
            <ArrowRight className="w-5 h-5 text-blue-500 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>

          <Link href="/services/maintenance/proactive-code-maintenance" className="group p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-blue-500/50 transition-colors flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">The Liability of Unmaintained Code</h3>
              <p className="text-sm text-neutral-400">Why software is a depreciating asset without proactive patching.</p>
            </div>
            <ArrowRight className="w-5 h-5 text-blue-500 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-3xl mx-auto px-6 text-center">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-500/5 to-transparent pointer-events-none"></div>
          <h2 className="text-3xl font-bold mb-4 relative z-10">Secure your infrastructure.</h2>
          <p className="text-neutral-400 mb-8 relative z-10">Offload your technical headaches to our engineering team.</p>
          <Link href="/contact" className="inline-block relative z-10 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors">
            Get Protected Today
          </Link>
        </div>
      </section>
    </main>
  );
}