import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Privacy Policy & Data Standards | Sochona",
  description: "Official privacy practices, data sovereignty protocols, and MSME compliance framework for Sochona Digital & AI Systems.",
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-transparent text-white selection:bg-[#007AFF] selection:text-white pt-32 pb-24 px-4 sm:px-6 relative overflow-hidden">
      
      {/* GLOBAL AMBIENT LAYER */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="bg-grid absolute inset-0 opacity-80" />
        <div className="absolute top-20 left-1/3 w-[600px] h-[500px] bg-gradient-to-r from-emerald-500/10 to-[#007AFF]/10 blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        {/* BACK LINK */}
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/50 hover:text-white transition-colors mb-10 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Return to Infrastructure
        </Link>

        {/* HEADER */}
        <ScrollReveal>
          <div className="mb-12 border-b border-white/10 pb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-strong border border-white/10 text-[10px] font-mono tracking-widest uppercase text-white/70 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Official Legal Disclosure
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Privacy Policy & Data Standards
            </h1>
            <p className="text-xs text-white/50 font-mono tracking-wider">
              LAST UPDATED: SEPTEMBER 2026 • EFFECTIVE IMMEDIATELY
            </p>
          </div>
        </ScrollReveal>

        {/* OFFICIAL ENTITY LEDGER */}
        <ScrollReveal>
          <div className="mb-14 p-6 sm:p-8 rounded-[2rem] glass-strong border border-emerald-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0_0_30px_rgba(16,185,129,0.05)]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white mb-1">Registered Enterprise Entity</h3>
                <p className="text-xs text-white/60 font-medium">
                  Ministry of Micro, Small & Medium Enterprises (MSME), Govt. of India
                </p>
              </div>
            </div>
            <div className="text-sm font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-xl">
              UDYAM-BR-26-0248887
            </div>
          </div>
        </ScrollReveal>

        {/* POLICY SECTIONS */}
        <div className="space-y-6 text-sm text-white/70 leading-relaxed font-medium">
          
          <ScrollReveal>
            <section className="glass-strong border border-white/10 p-8 sm:p-10 rounded-[2rem]">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-[#007AFF] font-mono text-sm">01.</span> Corporate Entity & Scope
              </h2>
              <p className="mb-3">
                This Privacy Policy applies to <strong className="text-white">Sochona Digital & AI Systems</strong> ("Sochona," "we," "our," or "us"), operating the primary web property <strong className="text-white">sochona.net</strong> and all associated digital infrastructure, APIs, and client portals.
              </p>
              <p>
                We are committed to operating with complete institutional integrity and compliance with the <em>Information Technology Act, 2000</em> (India) and global privacy frameworks.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="glass-strong border border-white/10 p-8 sm:p-10 rounded-[2rem]">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-[#007AFF] font-mono text-sm">02.</span> Proprietary Data Sovereignty
              </h2>
              <p className="mb-4">As an engineering firm specializing in AI and automation, we maintain strict data isolation boundaries:</p>
              <ul className="list-none space-y-3">
                <li className="flex gap-3"><span className="text-[#007AFF]">•</span> <div><strong className="text-white">Zero Public Model Training:</strong> We do not use your proprietary business records, transcripts, or private lead data to train public AI models.</div></li>
                <li className="flex gap-3"><span className="text-[#007AFF]">•</span> <div><strong className="text-white">Client Data Siloing:</strong> When custom automated workflows or mini-CRMs are deployed, your databases remain sovereign and under your exclusive control.</div></li>
                <li className="flex gap-3"><span className="text-[#007AFF]">•</span> <div><strong className="text-white">No Data Commercialization:</strong> We do not sell, rent, or trade client information to data brokers under any circumstances.</div></li>
              </ul>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="glass-strong border border-white/10 p-8 sm:p-10 rounded-[2rem]">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-[#007AFF] font-mono text-sm">03.</span> Tracking & Attribution
              </h2>
              <p className="mb-4">To measure marketing effectiveness and eliminate ad spend waste, we deploy vetted telemetry tools:</p>
              <ul className="list-none space-y-3 mb-6">
                <li className="flex gap-3"><span className="text-[#007AFF]">•</span> <div><strong className="text-white">Google Analytics (GA4):</strong> Aggregated behavioral telemetry to evaluate page performance.</div></li>
                <li className="flex gap-3"><span className="text-[#007AFF]">•</span> <div><strong className="text-white">Meta Pixel & CAPI:</strong> Server-level event signals deployed to measure cross-platform ad relevance and reduce CAC.</div></li>
              </ul>
              <p className="text-xs text-white/50 bg-white/[0.03] p-4 rounded-xl border border-white/5">
                You can manage your ad personalization directly through <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-[#007AFF]">Google Ad Settings</a> and <a href="https://www.facebook.com/adpreferences" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-[#007AFF]">Facebook Ad Preferences</a>.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="glass-strong border border-white/10 p-8 sm:p-10 rounded-[2rem]">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-[#007AFF] font-mono text-sm">04.</span> Your Rights & Inquiries
              </h2>
              <p className="mb-4">
                Regardless of your geographic location, you retain the right to request an audit of the personal information we maintain, request corrections, or request complete removal of your records.
              </p>
              <p>
                To submit a formal data inquiry, contact our compliance desk directly at <a href="mailto:connect@sochona.net" className="text-white font-bold underline hover:text-[#007AFF] transition-colors">connect@sochona.net</a>.
              </p>
            </section>
          </ScrollReveal>

        </div>
      </div>
    </main>
  );
}