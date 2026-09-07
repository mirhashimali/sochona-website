import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, FileText, Lock, Globe2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Sochona",
  description: "Official privacy practices, data handling protocols, and compliance framework for Sochona Digital & AI Systems.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-transparent text-white selection:bg-[#007AFF] selection:text-white pt-32 pb-24 px-4 sm:px-6 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div 
        className="absolute top-20 left-1/3 w-[600px] h-[500px] pointer-events-none -z-10 blur-[150px]"
        style={{
          background: "radial-gradient(circle, rgba(255, 140, 30, 0.12) 0%, rgba(0, 122, 255, 0.08) 50%, transparent 75%)",
          mixBlendMode: "screen"
        }}
      />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs text-white/50 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Homepage
        </Link>

        {/* Page Header */}
        <div className="mb-12 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono tracking-widest uppercase text-white/70 mb-4">
            <span>Official Legal Disclosure</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white mb-3">
            Privacy Policy & Data Standards
          </h1>
          <p className="text-xs text-white/50 font-mono">
            Last Updated: September 2026 • Effective Immediately
          </p>
        </div>

        {/* Official Entity Recognition Card */}
        <div className="mb-12 p-6 rounded-2xl bg-neutral-950/80 border border-emerald-500/20 backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
            <div>
              <h3 className="text-sm font-medium text-white">Registered Enterprise Entity</h3>
              <p className="text-xs text-white/60 font-light">
                Ministry of Micro, Small & Medium Enterprises (MSME), Government of India
              </p>
            </div>
          </div>
          <div className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-lg">
            UDYAM-BR-26-0248887
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-10 text-xs sm:text-sm text-white/75 font-light leading-relaxed">
          
          <section className="space-y-3 bg-neutral-950/50 border border-white/10 p-6 sm:p-8 rounded-3xl backdrop-blur-xl">
            <h2 className="text-base sm:text-lg font-medium text-white">1. Corporate Entity & Scope</h2>
            <p>
              This Privacy Policy applies to <strong className="text-white font-medium">Sochona Digital & AI Systems</strong> ("Sochona," "we," "our," or "us"), operating the primary web property <strong className="text-white font-medium">sochona.net</strong> and all associated digital infrastructure, APIs, and client portals.
            </p>
            <p>
              We are committed to operating with complete institutional integrity, transparency, and compliance with the <em>Information Technology Act, 2000</em> (India), modern international data protection standards, and global privacy frameworks.
            </p>
          </section>

          <section className="space-y-3 bg-neutral-950/50 border border-white/10 p-6 sm:p-8 rounded-3xl backdrop-blur-xl">
            <h2 className="text-base sm:text-lg font-medium text-white">2. Proprietary Data Sovereignty & AI Ethics</h2>
            <p>
              As an engineering firm specializing in artificial intelligence and automation, we maintain strict data isolation boundaries:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-white/70">
              <li><strong className="text-white">Zero Public Model Training:</strong> We do <em>not</em> use your proprietary business records, customer transcripts, or private lead data to train public or shared AI models.</li>
              <li><strong className="text-white">Client Data Siloing:</strong> When custom automated workflows or mini-CRMs are deployed for your organization, your databases remain completely sovereign and under your exclusive organizational control.</li>
              <li><strong className="text-white">No Data Commercialization:</strong> We do not sell, rent, or trade client or prospect personal information to data brokers under any circumstances.</li>
            </ul>
          </section>

          <section className="space-y-3 bg-neutral-950/50 border border-white/10 p-6 sm:p-8 rounded-3xl backdrop-blur-xl">
            <h2 className="text-base sm:text-lg font-medium text-white">3. Information We Collect</h2>
            <p>We collect information across three operational touchpoints:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-white/70">
              <li><strong className="text-white">Voluntary Inbound Submissions:</strong> Information you provide when requesting an infrastructure audit, booking a consultation, or submitting a contact form (including your name, business email address, phone/WhatsApp number, current website URL, and ad spend metrics).</li>
              <li><strong className="text-white">Automated Technical Telemetry:</strong> Device identifiers, browser type, geographic node, and Core Web Vitals latency telemetry collected via server logs to ensure edge delivery performance.</li>
              <li><strong className="text-white">Payment & Invoicing Information:</strong> Invoices generated for agreed services record standard billing details and tax identification numbers. Digital payment processing is conducted via secure third-party banking gateways (e.g., direct bank transfer, UPI, or PayPal). We do not store sensitive payment card credentials on our servers.</li>
            </ul>
          </section>

          <section className="space-y-3 bg-neutral-950/50 border border-white/10 p-6 sm:p-8 rounded-3xl backdrop-blur-xl">
            <h2 className="text-base sm:text-lg font-medium text-white">4. Tracking, Attribution & Cookie Technologies</h2>
            <p>
              To measure marketing effectiveness, eliminate ad spend waste, and diagnose user experience friction, we deploy vetted telemetry tools:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-white/70">
              <li><strong className="text-white">Google Analytics (GA4):</strong> Aggregated behavioral telemetry to evaluate page performance and session engagement.</li>
              <li><strong className="text-white">Google Ads Conversion Tracking:</strong> Attribution tagging that measures audit requests and calendar appointments to optimize search campaign efficiency.</li>
              <li><strong className="text-white">Meta Pixel & Conversions API (CAPI):</strong> Server-level event signals deployed to measure cross-platform ad relevance and reduce customer acquisition costs.</li>
            </ul>
            <p className="pt-1">
              You can disable cookie tracking at any time via your browser settings or manage your ad personalization directly through{" "}
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-[#007AFF] underline">Google Ad Settings</a> and{" "}
              <a href="https://www.facebook.com/adpreferences" target="_blank" rel="noopener noreferrer" className="text-[#007AFF] underline">Facebook Ad Preferences</a>.
            </p>
          </section>

          <section className="space-y-3 bg-neutral-950/50 border border-white/10 p-6 sm:p-8 rounded-3xl backdrop-blur-xl">
            <h2 className="text-base sm:text-lg font-medium text-white">5. Third-Party Service Providers</h2>
            <p>
              We partner strictly with enterprise-grade infrastructure providers that uphold industry-standard security and encryption protocols:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-white/70">
              <li><strong className="text-white">Edge Hosting & Compute:</strong> Vercel Inc. and global content delivery networks.</li>
              <li><strong className="text-white">Calendar Scheduling:</strong> Google Meet and Google Workspace appointment scheduling infrastructure.</li>
              <li><strong className="text-white">Content Infrastructure:</strong> Sanity.io cloud datastores.</li>
            </ul>
          </section>

          <section className="space-y-3 bg-neutral-950/50 border border-white/10 p-6 sm:p-8 rounded-3xl backdrop-blur-xl">
            <h2 className="text-base sm:text-lg font-medium text-white">6. Your Rights & Data Inquiries</h2>
            <p>
              Regardless of your geographic location, you retain the right to request an audit of the personal information we maintain regarding your business, request corrections, or request complete removal of your records from our systems.
            </p>
            <p>
              To submit a formal data inquiry, contact our compliance desk directly at{" "}
              <a href="mailto:connect@sochona.net" className="text-[#007AFF] underline">connect@sochona.net</a>.
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}