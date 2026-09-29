import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { ShieldCheck, Zap, Mail, Lock } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact Us | Initiate Engagement | Sochona",
  description: "Connect with our systems architects to evaluate your digital infrastructure, web development, and performance marketing ecosystem.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-transparent text-white pt-32 pb-24 relative overflow-hidden">
      
      {/* GLOBAL AMBIENT LAYER */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="bg-grid absolute inset-0 opacity-80" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-orange-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* HEADER */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-strong border border-white/10 text-[10px] sm:text-xs font-mono font-semibold tracking-widest uppercase text-white/80 mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              Initiate Engagement
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
              Let's Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">System.</span>
            </h1>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-xl mx-auto">
              Stop losing revenue to outdated infrastructure. Connect with our strategy team to evaluate your digital architecture and plug conversion leaks.
            </p>
          </div>
        </ScrollReveal>

        {/* SPLIT LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* FORM CONTAINER */}
          <div className="lg:col-span-7 w-full">
            <ScrollReveal>
              <div className="glass-strong border border-white/15 p-6 sm:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#007AFF]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10">
                  <LeadForm variant="global" showContainer={false} hideFooter={true} />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* TRUST LEDGER */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal>
              <div className="glass-strong border border-white/10 p-8 rounded-[2rem]">
                <h2 className="text-xl font-bold mb-3 text-white">What to Expect</h2>
                <p className="text-white/60 text-sm leading-relaxed mb-8">
                  No high-pressure sales pitches. You will speak directly with an architect to review your technical setup, CRM workflows, and ad spend efficiency.
                </p>

                <div className="space-y-6 border-t border-white/10 pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400 shrink-0">
                      <Lock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-white">Zero-Trust Confidentiality</h3>
                      <p className="text-xs text-white/50 mt-1 leading-relaxed">All shared business metrics and technical details are kept strictly secure and isolated.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-[#007AFF]/10 border border-[#007AFF]/20 text-[#007AFF] shrink-0">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-white">Actionable Review</h3>
                      <p className="text-xs text-white/50 mt-1 leading-relaxed">We identify immediate bottlenecks in your conversion funnels and Core Web Vitals on the call.</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6 mt-8">
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-white/40" />
                      <div>
                        <div className="text-[10px] font-mono uppercase text-white/40 tracking-wider">Direct Inquiry</div>
                        <a href="mailto:connect@sochona.net" className="text-sm font-semibold text-white hover:text-orange-400 transition-colors">
                          connect@sochona.net
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </main>
  );
}