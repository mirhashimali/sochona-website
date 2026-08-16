import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, Search, CheckCircle2, Zap, Globe, BarChart } from "lucide-react";

export const metadata: Metadata = {
  title: "Attract High-Intent Traffic | Sochona",
  description: "Scale your reach with data-driven Google Ads, Performance Max campaigns, and advanced Technical SEO. We put your business in front of the right audience.",
  keywords: "Google Ads agency, Performance Max, Technical SEO, local SEO, traffic acquisition, Sochona",
};

export default function AttractPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-32 pb-24 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center relative z-10">
        <div className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-4 py-1.5 text-sm font-medium text-neutral-300 mb-6 shadow-inner">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
          Pillar I: Acquisition & Traffic Generation
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-200">
          Dominate Search. <br />Attract Growth.
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-8">
          Stop buying empty clicks. We build high-performance acquisition engines using Google Ads, Local SEO, and precision targeting to bring ready-to-buy customers directly to your digital doorstep.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-400">
          <span>Integrated with:</span>
          <Link href="/convert" className="text-blue-400 hover:underline">Convert Leads</Link> • 
          <Link href="/run-smarter" className="text-blue-400 hover:underline">Run Smarter (Operations)</Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 mb-24 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        
        {/* Performance Marketing Card */}
        <Link 
          href="/services/performance-marketing" 
          className="group block bg-neutral-900/60 border border-neutral-800 rounded-3xl p-8 hover:border-blue-500/50 hover:bg-neutral-900/90 transition-all backdrop-blur-sm shadow-xl flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>
              <ArrowRight className="w-5 h-5 text-neutral-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
            </div>
            <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">Performance Marketing</h2>
            <p className="text-neutral-400 mb-8 leading-relaxed">We deploy scalable capital across the Google ecosystem to capture high-intent demand at the exact moment of search.</p>
            <ul className="space-y-3 text-neutral-300 font-medium text-sm border-t border-neutral-800/80 pt-6">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" /> Google Search & Display Ads Management</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" /> Performance Max & App Campaign Scaling</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" /> Targeted YouTube Ad Placements</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" /> Advanced Remarketing & Lead Funnels</li>
            </ul>
          </div>
          <div className="mt-8 pt-4 border-t border-neutral-800/40 text-xs text-blue-400 font-semibold flex items-center justify-between">
            <span>Explore Performance Marketing</span>
            <span>→</span>
          </div>
        </Link>
        
        {/* SEO Card */}
        <Link 
          href="/services/seo" 
          className="group block bg-neutral-900/60 border border-neutral-800 rounded-3xl p-8 hover:border-cyan-500/50 hover:bg-neutral-900/90 transition-all backdrop-blur-sm shadow-xl flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                <Search className="w-6 h-6" />
              </div>
              <ArrowRight className="w-5 h-5 text-neutral-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
            </div>
            <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">Search Engine Optimisation</h2>
            <p className="text-neutral-400 mb-8 leading-relaxed">Own your organic real estate. We engineer your digital presence to rank consistently for high-value commercial keywords.</p>
            <ul className="space-y-3 text-neutral-300 font-medium text-sm border-t border-neutral-800/80 pt-6">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Technical & On-Page SEO Architecture</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Local SEO & Google Business Profile Dominance</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Keyword Research & Competitor Gap Analysis</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Structured Data & Dynamic Sitemap Setup</li>
            </ul>
          </div>
          <div className="mt-8 pt-4 border-t border-neutral-800/40 text-xs text-cyan-400 font-semibold flex items-center justify-between">
            <span>Explore SEO Services</span>
            <span>→</span>
          </div>
        </Link>
      </section>

      {/* Deep-Dive SEO Content & Internal Navigation Hub */}
      <section className="max-w-5xl mx-auto px-6 mb-24 relative z-10 space-y-16 border-t border-neutral-800 pt-16">
        
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">The Architecture of High-Intent Traffic Acquisition</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Attracting eyeballs is only the spark. Once visitors click through our <Link href="/services/performance-marketing" className="text-blue-400 underline hover:text-blue-300">Google Ads campaigns</Link> or organic <Link href="/services/seo" className="text-cyan-400 underline hover:text-cyan-300">SEO real estate</Link>, they must land on optimized <Link href="/convert" className="text-blue-400 underline hover:text-blue-300">conversion funnels</Link> before being managed by <Link href="/run-smarter" className="text-blue-400 underline hover:text-blue-300">automated operational systems</Link>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-neutral-900/40 border border-neutral-800 p-6 rounded-2xl space-y-3">
            <Zap className="w-8 h-8 text-blue-400" />
            <h3 className="text-xl font-bold text-white">Intent-First Targeting</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              We filter out window shoppers by targeting users with active commercial intent, maximizing every dollar of your advertising budget.
            </p>
          </div>
          <div className="bg-neutral-900/40 border border-neutral-800 p-6 rounded-2xl space-y-3">
            <Globe className="w-8 h-8 text-cyan-400" />
            <h3 className="text-xl font-bold text-white">Omnichannel Reach</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Combine search engine dominance with <Link href="/services/web-development" className="text-cyan-400 underline">custom web applications</Link> and video placements for complete market saturation.
            </p>
          </div>
          <div className="bg-neutral-900/40 border border-neutral-800 p-6 rounded-2xl space-y-3">
            <BarChart className="w-8 h-8 text-blue-400" />
            <h3 className="text-xl font-bold text-white">Transparent ROI</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Review case studies and strategic growth insights on the <Link href="/blog" className="text-blue-400 underline">Sochona Blog</Link> to learn how we scale enterprise accounts.
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
          <h2 className="text-3xl font-bold mb-4">Ready to capture more market share?</h2>
          <p className="text-neutral-400 mb-8 leading-relaxed">Let's audit your current acquisition strategy and identify hidden growth gaps.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors shadow-lg inline-flex items-center gap-2">
              Start the Conversation <ArrowRight className="w-4 h-4" />
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