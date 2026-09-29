import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Scale, Building2, Code2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Terms of Service & MSA | Sochona",
  description: "Master Services Agreement, code ownership terms, and operational liabilities for Sochona Digital & AI Systems.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-transparent text-white selection:bg-[#007AFF] selection:text-white pt-32 pb-24 px-4 sm:px-6 relative overflow-hidden">
      
      {/* GLOBAL AMBIENT LAYER */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="bg-grid absolute inset-0 opacity-80" />
        <div className="absolute top-20 right-1/3 w-[600px] h-[500px] bg-gradient-to-r from-orange-500/10 to-transparent blur-[150px]" />
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
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Master Services Agreement
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Terms of Service & Infrastructure Agreement
            </h1>
            <p className="text-xs text-white/50 font-mono tracking-wider">
              LAST UPDATED: SEPTEMBER 2026 • EFFECTIVE IMMEDIATELY
            </p>
          </div>
        </ScrollReveal>

        {/* OFFICIAL ENTITY LEDGER */}
        <ScrollReveal>
          <div className="mb-14 p-6 sm:p-8 rounded-[2rem] glass-strong border border-orange-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0_0_30px_rgba(249,115,22,0.05)]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white mb-1">Sochona Proprietorship Enterprise</h3>
                <p className="text-xs text-white/60 font-medium">
                  Operating in compliance with the Ministry of MSME, Govt. of India.
                </p>
              </div>
            </div>
            <div className="text-sm font-mono font-bold text-orange-400 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-xl">
              UDYAM-BR-26-0248887
            </div>
          </div>
        </ScrollReveal>

        {/* AGREEMENT SECTIONS */}
        <div className="space-y-6 text-sm text-white/70 leading-relaxed font-medium">
          
          <ScrollReveal>
            <section className="glass-strong border border-white/10 p-8 sm:p-10 rounded-[2rem]">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-[#007AFF] font-mono text-sm">01.</span> Scope of Architectural Services
              </h2>
              <p className="mb-3">
                By engaging <strong className="text-white">Sochona</strong> for web architecture, performance marketing, or AI automation services, the Client agrees to the terms outlined herein. Project scopes, deliverables, timelines, and payment milestones will be explicitly detailed in a separate Statement of Work (SOW) or invoice prior to commencement.
              </p>
              <p>
                We construct custom Next.js applications, server-side tracking pipelines, and CRM dashboards. We do not provide standard, unoptimized WordPress templates unless explicitly requested for legacy migration purposes.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="glass-strong border border-white/10 p-8 sm:p-10 rounded-[2rem]">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-[#007AFF] font-mono text-sm">02.</span> Absolute Code Ownership & IP
              </h2>
              <p className="mb-4">Unlike traditional agencies that trap clients in perpetual SaaS retainers or proprietary CMS lockdowns, our core operational philosophy relies on data sovereignty:</p>
              <ul className="list-none space-y-3">
                <li className="flex gap-3"><span className="text-[#007AFF]">•</span> <div><strong className="text-white">Complete Transfer of IP:</strong> Upon final clearance of all project invoices, 100% of the Intellectual Property (IP), source code (GitHub repository), and design assets (Figma files) are transferred directly to the Client.</div></li>
                <li className="flex gap-3"><span className="text-[#007AFF]">•</span> <div><strong className="text-white">Zero Software Rent:</strong> The Client assumes full ownership of the developed system. Sochona does not charge per-seat SaaS licensing fees for custom-built infrastructure.</div></li>
                <li className="flex gap-3"><span className="text-[#007AFF]">•</span> <div><strong className="text-white">Third-Party Subscriptions:</strong> The Client is solely responsible for direct billing relationships with third-party infrastructure providers necessary to host the application (e.g., Vercel, AWS, Google Cloud, OpenAI).</div></li>
              </ul>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="glass-strong border border-white/10 p-8 sm:p-10 rounded-[2rem]">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-[#007AFF] font-mono text-sm">03.</span> Marketing Performance Guarantees
              </h2>
              <p className="mb-4">
                While our systems are engineered strictly around proven conversion rate optimization (CRO) principles and high-intent targeting, digital markets are subject to variables outside our control (market saturation, competitor ad spend, algorithm updates). 
              </p>
              <p>
                Therefore, Sochona cannot legally guarantee specific revenue figures, fixed ROAS (Return on Ad Spend), or exact organic search engine ranking positions. We guarantee the structural integrity, sub-second latency, and accurate deployment of telemetry within the systems we build.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="glass-strong border border-white/10 p-8 sm:p-10 rounded-[2rem]">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-[#007AFF] font-mono text-sm">04.</span> Limitation of Liability
              </h2>
              <p className="mb-4">
                Sochona shall not be held liable for any indirect, incidental, or consequential damages, including but not limited to loss of profits, data loss, or business interruption arising from the use or inability to use the developed infrastructure.
              </p>
              <p>
                Our maximum aggregate liability under any circumstance is strictly limited to the total fees paid by the Client to Sochona for the specific service phase resulting in the liability claim over the preceding three (3) months.
              </p>
            </section>
          </ScrollReveal>

        </div>
      </div>
    </main>
  );
}