import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Cpu, BarChart3, CheckCircle2, Zap, ShieldCheck, Database, Layers, Workflow, LineChart } from "lucide-react";

export const metadata: Metadata = {
  title: "Business Automation & Custom CRMs | Sochona",
  description: "Automate your workflow. We develop custom mini-CRMs, email automations, and data dashboards to help your business operate with optimized efficiency.",
  keywords: "Business automation, custom CRM, workflow automation, internal dashboards, data analytics, GTM tracking, Sochona",
};

export default function RunSmarterPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-32 pb-24 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center relative z-10">
        <div className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-4 py-1.5 text-sm font-medium text-neutral-300 mb-6 shadow-inner">
          <span className="flex h-2 w-2 rounded-full bg-purple-500 mr-2 animate-pulse"></span>
          Pillar III: Systems & Operational Automation
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-200">
          Automate. <br />Scale Operations.
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-8">
          Manual administrative tasks consume valuable capital and stall growth. We build bespoke digital infrastructure, internal dashboards, and automated pipelines so your team can focus entirely on high-impact revenue generation.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-400">
          <span>Connected with:</span>
          <Link href="/attract" className="text-purple-400 hover:underline">Attract Traffic</Link> • 
          <Link href="/convert" className="text-purple-400 hover:underline">Convert Leads</Link> • 
          <Link href="/services/web-development" className="text-purple-400 hover:underline">Web Development</Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 mb-24 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        
        {/* CRM & Internal Systems Card */}
        <Link 
          href="/services/automation" 
          className="group block bg-neutral-900/60 border border-neutral-800 rounded-3xl p-8 hover:border-purple-500/50 hover:bg-neutral-900/90 transition-all backdrop-blur-sm shadow-xl flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <ArrowRight className="w-5 h-5 text-neutral-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
            </div>
            <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">CRM & Internal Systems</h2>
            <p className="text-neutral-400 mb-8 leading-relaxed">Bespoke software solutions engineered precisely around how your enterprise operates, eliminating rigid out-of-the-box SaaS constraints.</p>
            <ul className="space-y-3 text-neutral-300 font-medium text-sm border-t border-neutral-800/80 pt-6">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> Custom Mini CRM Development</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> Admin Dashboards & Secure Staff Portals</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> Automated Appointment & Proposal Systems</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> Automated Invoice & Receipt Generation</li>
            </ul>
          </div>
          <div className="mt-8 pt-4 border-t border-neutral-800/40 text-xs text-purple-400 font-semibold flex items-center justify-between">
            <span>Explore Custom Infrastructure</span>
            <span>→</span>
          </div>
        </Link>
        
        {/* Analytics & Automation Card */}
        <Link 
          href="/services/automation" 
          className="group block bg-neutral-900/60 border border-neutral-800 rounded-3xl p-8 hover:border-pink-500/50 hover:bg-neutral-900/90 transition-all backdrop-blur-sm shadow-xl flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 rounded-2xl bg-pink-500/10 text-pink-400 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6" />
              </div>
              <ArrowRight className="w-5 h-5 text-neutral-500 group-hover:text-pink-400 group-hover:translate-x-1 transition-all" />
            </div>
            <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-pink-400 transition-colors">Analytics & Automation</h2>
            <p className="text-neutral-400 mb-8 leading-relaxed">Make critical decisions backed by hard data. We connect your disjointed marketing stack and automate repetitive administrative busywork.</p>
            <ul className="space-y-3 text-neutral-300 font-medium text-sm border-t border-neutral-800/80 pt-6">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" /> End-to-End Business Workflow Automation</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" /> Google Sheets & Email Sequence Synchronization</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" /> Real-Time KPI Reporting & Marketing Attribution</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" /> Advanced Call & Event Tracking via GTM</li>
            </ul>
          </div>
          <div className="mt-8 pt-4 border-t border-neutral-800/40 text-xs text-pink-400 font-semibold flex items-center justify-between">
            <span>Explore Analytics Solutions</span>
            <span>→</span>
          </div>
        </Link>
      </section>

      {/* Deep-Dive SEO Content & Internal Navigation Hub */}
      <section className="max-w-5xl mx-auto px-6 mb-24 relative z-10 space-y-16 border-t border-neutral-800 pt-16">
        
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Modern Businesses Need Operational Infrastructure</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            As your traffic scales through our <Link href="/services/performance-marketing" className="text-purple-400 underline hover:text-purple-300">Performance Marketing</Link> and <Link href="/services/seo" className="text-purple-400 underline hover:text-purple-300">SEO frameworks</Link>, manual processes inevitably break down. Here is how our automated systems keep your enterprise running seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-neutral-900/40 border border-neutral-800 p-6 rounded-2xl space-y-3">
            <Database className="w-8 h-8 text-purple-400" />
            <h3 className="text-xl font-bold text-white">Centralised Data Hubs</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Consolidate leads from your <Link href="/services/web-development" className="text-purple-400 underline">Next.js Web Apps</Link> and advertising channels into a single source of truth without paying enterprise software licensing fees.
            </p>
          </div>
          <div className="bg-neutral-900/40 border border-neutral-800 p-6 rounded-2xl space-y-3">
            <Workflow className="w-8 h-8 text-pink-400" />
            <h3 className="text-xl font-bold text-white">Zero-Touch Pipelines</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Trigger instant SMS notifications, Slack alerts, and automated client onboarding sequences the exact second a lead submits an inquiry on your <Link href="/contact" className="text-pink-400 underline">Contact Page</Link>.
            </p>
          </div>
          <div className="bg-neutral-900/40 border border-neutral-800 p-6 rounded-2xl space-y-3">
            <LineChart className="w-8 h-8 text-purple-400" />
            <h3 className="text-xl font-bold text-white">Attribution & Insights</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Understand precisely which campaigns drive revenue. Read our case studies and articles on the <Link href="/blog" className="text-purple-400 underline">Sochona Blog</Link> to master digital ROI.
            </p>
          </div>
        </div>

        {/* Complete Sitemap / Internal Navigation Links Bar */}
        <div className="bg-neutral-900/80 border border-neutral-800 rounded-3xl p-8 backdrop-blur-md space-y-6">
          <h3 className="text-lg font-bold text-white text-center">Quick Navigation Across Sochona Ecosystem</h3>
          <div className="flex flex-wrap justify-center gap-3 text-xs md:text-sm">
            <Link href="/" className="px-3.5 py-2 rounded-xl bg-neutral-800/80 hover:bg-neutral-700 transition-colors">Home</Link>
            <Link href="/about" className="px-3.5 py-2 rounded-xl bg-neutral-800/80 hover:bg-neutral-700 transition-colors">About Us</Link>
            <Link href="/attract" className="px-3.5 py-2 rounded-xl bg-neutral-800/80 hover:bg-neutral-700 transition-colors">Attract Pillar</Link>
            <Link href="/convert" className="px-3.5 py-2 rounded-xl bg-neutral-800/80 hover:bg-neutral-700 transition-colors">Convert Pillar</Link>
            <Link href="/run-smarter" className="px-3.5 py-2 rounded-xl bg-neutral-800/80 hover:bg-neutral-700 transition-colors">Run Smarter Pillar</Link>
            <Link href="/services/performance-marketing" className="px-3.5 py-2 rounded-xl bg-neutral-800/80 hover:bg-neutral-700 transition-colors">Performance Marketing</Link>
            <Link href="/services/seo" className="px-3.5 py-2 rounded-xl bg-neutral-800/80 hover:bg-neutral-700 transition-colors">SEO Services</Link>
            <Link href="/services/web-development" className="px-3.5 py-2 rounded-xl bg-neutral-800/80 hover:bg-neutral-700 transition-colors">Web Development</Link>
            <Link href="/services/automation" className="px-3.5 py-2 rounded-xl bg-neutral-800/80 hover:bg-neutral-700 transition-colors">Business Automation</Link>
            <Link href="/blog" className="px-3.5 py-2 rounded-xl bg-neutral-800/80 hover:bg-neutral-700 transition-colors">Blog</Link>
            <Link href="/contact" className="px-3.5 py-2 rounded-xl bg-neutral-800/80 hover:bg-neutral-700 transition-colors">Contact</Link>
            <Link href="/privacy-policy" className="px-3.5 py-2 rounded-xl bg-neutral-800/80 hover:bg-neutral-700 transition-colors">Privacy Policy</Link>
          </div>
        </div>

      </section>

      {/* CTA Section */}
      <section className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <div className="bg-neutral-900/80 border border-neutral-800 rounded-3xl p-12 backdrop-blur-md shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Reclaim your time and operational hours.</h2>
          <p className="text-neutral-400 mb-8 leading-relaxed">Let's build a robust custom system that works efficiently while you focus entirely on high-level growth.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700 transition-colors shadow-lg inline-flex items-center gap-2">
              Automate Your Business <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/about" className="px-8 py-4 bg-neutral-800 text-white font-medium rounded-full hover:bg-neutral-700 transition-colors">
              Learn About Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}