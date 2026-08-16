import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { ShieldCheck, Zap, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Sochona",
  description: "Get in touch with Sochona to discuss your digital transformation, web development, and performance marketing needs.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-32 pb-24 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-sm font-medium text-neutral-400 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Initiate Engagement
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Let's Build Your <span className="text-orange-500">System.</span>
          </h1>
          <p className="text-lg text-neutral-400 leading-relaxed">
            Stop losing revenue to outdated infrastructure. Connect with our strategy team to evaluate your digital architecture.
          </p>
        </div>

        {/* Split Layout: Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Container (Pushed first in DOM so it appears above on mobile / left on desktop) */}
          <div className="lg:col-span-7 bg-neutral-900/60 border border-neutral-800 p-8 md:p-10 rounded-3xl backdrop-blur-md shadow-2xl">
            <LeadForm />
          </div>

          {/* Trust & Details ("What to expect") */}
          <div className="lg:col-span-5 space-y-8 bg-neutral-900/40 border border-neutral-800/80 p-8 rounded-3xl backdrop-blur-sm">
            <div>
              <h2 className="text-2xl font-bold mb-3">What to expect</h2>
              <p className="text-neutral-400 text-sm leading-relaxed">
                No high-pressure sales pitches. You will speak directly with an architect to review your technical setup and performance marketing ecosystem.
              </p>
            </div>

            <div className="space-y-4 border-t border-neutral-800 pt-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-xl bg-orange-500/10 text-orange-500 mt-1">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Zero-Trust Confidentiality</h3>
                  <p className="text-xs text-neutral-400 mt-1">All shared business metrics and technical details are kept strictly secure.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-xl bg-orange-500/10 text-orange-500 mt-1">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Actionable Architecture Review</h3>
                  <p className="text-xs text-neutral-400 mt-1">We identify immediate bottlenecks in your conversion funnels and core web vitals.</p>
                </div>
              </div>
            </div>

            <div className="border-t border-neutral-800 pt-6">
              <div className="flex items-center gap-3 text-neutral-400 text-sm">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Direct Inquiry: </span>
                <a href="mailto:connect@sochona.net" className="text-white underline hover:text-orange-400 transition-colors">
                  connect@sochona.net
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}