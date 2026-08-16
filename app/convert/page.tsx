import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, Target, CheckCircle2, Layers, Globe, Smartphone, ShieldCheck, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "High-Converting Web Design & CRO | Sochona",
  description: "Turn clicks into clients. We build custom web applications, landing pages, and lead funnels engineered for maximum Conversion Rate Optimisation (CRO).",
  keywords: "Web development, Conversion Rate Optimisation, CRO, landing page design, lead funnels, Next.js, Sochona",
};

export default function ConvertPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-32 pb-24 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center relative z-10">
        <div className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-4 py-1.5 text-sm font-medium text-neutral-300 mb-6 shadow-inner">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
          Pillar II: Conversion & Web Architecture
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-green-300 to-teal-200">
          Turn Clicks <br />Into Clients.
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-8">
          Traffic is entirely useless if your digital storefront fails to convert. We design lightning-fast web applications and high-converting landing pages built on modern infrastructure to maximize your return on ad spend.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-400">
          <span>Supported by:</span>
          <Link href="/attract" className="text-emerald-400 hover:underline">Attract Traffic</Link> • 
          <Link href="/run-smarter" className="text-emerald-400 hover:underline">Run Smarter (Operations)</Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 mb-24 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        
        {/* Web Development Card */}
        <Link 
          href="/services/web-development" 
          className="group block bg-neutral-900/60 border border-neutral-800 rounded-3xl p-8 hover:border-emerald-500/50 hover:bg-neutral-900/90 transition-all backdrop-blur-sm shadow-xl flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                <Code2 className="w-6 h-6" />
              </div>
              <ArrowRight className="w-5 h-5 text-neutral-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
            </div>
            <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors">Web Development</h2>
            <p className="text-neutral-400 mb-8 leading-relaxed">Enterprise-grade digital experiences built for unmatched speed, airtight security, and seamless scalability.</p>
            <ul className="space-y-3 text-neutral-300 font-medium text-sm border-t border-neutral-800/80 pt-6">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Custom Web Applications & PWAs</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> High-Performance Corporate Websites</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Vercel & Netlify Production Deployment</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Website Migration & Modern Redesign</li>
            </ul>
          </div>
          <div className="mt-8 pt-4 border-t border-neutral-800/40 text-xs text-emerald-400 font-semibold flex items-center justify-between">
            <span>Explore Development Services</span>
            <span>→</span>
          </div>
        </Link>
        
        {/* Conversion Rate Optimisation Card */}
        <Link 
          href="/services/performance-marketing" 
          className="group block bg-neutral-900/60 border border-neutral-800 rounded-3xl p-8 hover:border-green-500/50 hover:bg-neutral-900/90 transition-all backdrop-blur-sm shadow-xl flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 rounded-2xl bg-green-500/10 text-green-400 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6" />
              </div>
              <ArrowRight className="w-5 h-5 text-neutral-500 group-hover:text-green-400 group-hover:translate-x-1 transition-all" />
            </div>
            <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors">Conversion Rate Optimisation</h2>
            <p className="text-neutral-400 mb-8 leading-relaxed">We systematically eliminate friction from the buying journey, ensuring every single visitor experiences a crystal-clear path to purchase.</p>
            <ul className="space-y-3 text-neutral-300 font-medium text-sm border-t border-neutral-800/80 pt-6">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" /> High-Converting Landing Page Optimisation</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" /> Strategic Lead Funnel Architecture</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" /> User Heatmaps & Microsoft Clarity Audits</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" /> GA4 Enhanced Conversions Setup</li>
            </ul>
          </div>
          <div className="mt-8 pt-4 border-t border-neutral-800/40 text-xs text-green-400 font-semibold flex items-center justify-between">
            <span>Explore CRO Solutions</span>
            <span>→</span>
          </div>
        </Link>
      </section>

      {/* Deep-Dive SEO Content & Internal Navigation Hub */}
      <section className="max-w-5xl mx-auto px-6 mb-24 relative z-10 space-y-16 border-t border-neutral-800 pt-16">
        
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">The Science Behind High-Performance Conversion Systems</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Driving traffic via <Link href="/attract" className="text-emerald-400 underline hover:text-emerald-300">our Attract framework</Link> is only half the battle. Once users land on your ecosystem, your web application must capture attention and convert data effortlessly before routing leads to <Link href="/run-smarter" className="text-emerald-400 underline hover:text-emerald-300">your automated operational pipelines</Link>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-neutral-900/40 border border-neutral-800 p-6 rounded-2xl space-y-3">
            <Zap className="w-8 h-8 text-emerald-400" />
            <h3 className="text-xl font-bold text-white">Sub-Second Speed</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Slow load times kill conversions. By building on modern frameworks like Next.js, our <Link href="/services/web-development" className="text-emerald-400 underline">web development solutions</Link> load instantly on all mobile and desktop devices.
            </p>
          </div>
          <div className="bg-neutral-900/40 border border-neutral-800 p-6 rounded-2xl space-y-3">
            <Smartphone className="w-8 h-8 text-green-400" />
            <h3 className="text-xl font-bold text-white">Mobile-First UX</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              With over 70% of digital traffic arriving via mobile devices, every landing page we build undergoes rigorous mobile responsiveness and thumb-friendly checkout optimizations.
            </p>
          </div>
          <div className="bg-neutral-900/40 border border-neutral-800 p-6 rounded-2xl space-y-3">
            <ShieldCheck className="w-8 h-8 text-emerald-400" />
            <h3 className="text-xl font-bold text-white">Data Integrity</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Never guess what works. We install pristine analytics tracking so you can review metrics, case studies, and insights directly via the <Link href="/blog" className="text-emerald-400 underline">Sochona Blog</Link>.
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
          <h2 className="text-3xl font-bold mb-4">Is your website leaking valuable leads?</h2>
          <p className="text-neutral-400 mb-8 leading-relaxed">Stop wasting precious ad spend on poorly optimized landing pages. Let's upgrade your conversion rate today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-600 transition-colors shadow-lg inline-flex items-center gap-2">
              Upgrade Your Digital Presence <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/about" className="px-8 py-4 bg-neutral-800 text-white font-medium rounded-full hover:bg-neutral-700 transition-colors">
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}