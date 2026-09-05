import type { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  DollarSign, 
  Clock, 
  XCircle, 
  FileSpreadsheet, 
  Lock, 
  LayoutDashboard,
  Sparkles
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Custom Mini-CRM & Lead Portals | Zero Per-User SaaS Fees India",
  description: "Stop paying monthly per-user software fees in dollars. Custom lead management portals, automated WhatsApp dispatch, and 100% proprietary data ownership for Indian SMBs.",
  keywords: "custom CRM development India, CRM without monthly fees, SMB lead management portal, custom sales dashboard India, Sochona",
};

export default function CustomCRMPage() {
  const whatsappNumber = "919835182801";
  const whatsappMessage = encodeURIComponent("Namaste! I want to build a custom lead management dashboard for my sales team without monthly per-user SaaS fees.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main className="flex flex-col items-center w-full bg-transparent text-white selection:bg-amber-500 selection:text-black relative overflow-hidden pb-24">
      
      {/* 1. HERO SECTION */}
      <ScrollReveal>
        <section className="max-w-4xl mx-auto px-6 pt-32 pb-16 flex flex-col items-center text-center relative z-10">
          <div className="absolute inset-0 -z-10 bg-radial from-amber-600/25 via-black/60 to-transparent blur-3xl rounded-full pointer-events-none scale-125"></div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/80 border border-amber-500/30 mb-8 backdrop-blur-xl shadow-lg">
            <LayoutDashboard className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-300">
              Stage 04 • Operational Scale
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 drop-shadow-2xl leading-[1.15] text-balance">
            Stop Paying Per-User Monthly SaaS Fees.<br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-[#007AFF] bg-clip-text text-transparent">
              Own Your Custom Lead Command Center.
            </span>
          </h1>

          <p className="max-w-2xl text-base md:text-lg text-white/80 leading-relaxed drop-shadow-lg mb-8 text-balance bg-black/40 p-5 rounded-2xl border border-white/10 backdrop-blur-md">
            HubSpot aur Salesforce jaise complex software har mahine dollar me per-seat fees charge karte hain. 70% features aapki sales team kabhi use nahi karti, aur leads fir bhi Excel sheet me ghumti hain. Hum banate hain clean, tailored mini-CRMs jo aap 100% own karte hain without monthly rent.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-sm transition-all shadow-xl shadow-[#25D366]/20 flex items-center justify-center gap-2.5 hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-black" />
              Build My Custom CRM
            </a>
            <a 
              href="#audit-form" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-neutral-900/90 border border-white/20 hover:bg-neutral-800 text-white font-semibold text-sm transition-all backdrop-blur-xl flex items-center justify-center gap-2"
            >
              Explore CRM Demo <ArrowRight className="w-4 h-4 text-white/70" />
            </a>
          </div>
        </section>
      </ScrollReveal>

      {/* 2. REAL BENCHMARKS */}
      <section className="w-full max-w-5xl mx-auto px-6 py-8 relative z-10">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-neutral-950/70 border border-white/10 backdrop-blur-2xl">
            <div className="p-4 border-r border-white/10 last:border-none text-center">
              <span className="text-3xl font-extrabold text-amber-400">₹0</span>
              <p className="text-[11px] text-white/60 mt-1 uppercase tracking-wider font-semibold">Monthly Per-User Software Subscription Fees</p>
            </div>
            <div className="p-4 border-r border-white/10 last:border-none text-center">
              <span className="text-3xl font-extrabold text-emerald-400">100%</span>
              <p className="text-[11px] text-white/60 mt-1 uppercase tracking-wider font-semibold">Data Sovereignty (Your Proprietary Database)</p>
            </div>
            <div className="p-4 border-r border-white/10 last:border-none text-center">
              <span className="text-3xl font-extrabold text-[#007AFF]">16 hrs/wk</span>
              <p className="text-[11px] text-white/60 mt-1 uppercase tracking-wider font-semibold">Saved in Manual Data Entry & Lead Reconciliation</p>
            </div>
            <div className="p-4 text-center">
              <span className="text-3xl font-extrabold text-purple-400">1-Click</span>
              <p className="text-[11px] text-white/60 mt-1 uppercase tracking-wider font-semibold">Direct WhatsApp & Calling Integration for Telecallers</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. WHY COMMODITY SAAS FAILS INDIAN BUSINESSES */}
      <section className="max-w-5xl mx-auto px-6 py-16 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Operational Diagnostic</span>
            <h2 className="text-2xl md:text-4xl font-bold text-white mt-2">Kyu Standard CRM Software Fail Ho Jate Hain?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-neutral-950/80 border border-white/10 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-xl bg-red-500/15 text-red-400 flex items-center justify-center mb-4">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">1. The Dollar Pricing Trap</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Naye employee add karte hi bill multiply hota hai. 10 callers ki team ke liye har mahine ₹40,000–₹80,000 sirf software licenses me nikal jata hai.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-neutral-950/80 border border-white/10 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-4">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">2. Sales Team Rejection</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Software itna complex hota hai ki staff updates nahi daalta. Aakhir me team wapas Excel aur paper diaries me leads note karne lagti hai.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-neutral-950/80 border border-white/10 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">3. Vendor Data Lock-In</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Aapka valuable customer data third-party US servers par locked rehta hai. Kal ko subscription band karne par access band ho jata hai.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. THE SOCHONA CUSTOM CRM ARCHITECTURE */}
      <section className="max-w-5xl mx-auto px-6 py-16 relative z-10">
        <ScrollReveal>
          <div className="bg-neutral-950/80 border border-white/15 rounded-3xl p-8 md:p-12 backdrop-blur-xl">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">The Solution</span>
              <h2 className="text-2xl md:text-4xl font-bold text-white mt-2 mb-3">Aapka Apna Custom Lead Portal</h2>
            </div>

            <div className="space-y-4 text-xs md:text-sm text-white/80">
              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-1">Tailored Mini-CRM vs Complex SaaS</h4>
                  <p className="text-white/65 text-xs leading-relaxed">
                    Sirf wahi features jo aapke business me daily use hote hain: lead status, call recordings, WhatsApp dispatch aur payment status. Ek baar build hota hai, lifetime aapka proprietary asset rehta hai. Read our comparison in <Link href="/services/automation/custom-crm-vs-saas" className="text-amber-400 underline">Custom CRM vs SaaS</Link>.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-1">1-Click WhatsApp & Telecalling Integration</h4>
                  <p className="text-white/65 text-xs leading-relaxed">
                    Callers ko phone number type karne ki zaroorat nahi. 1 click par direct WhatsApp chat ya call dial ho jata hai pre-approved templates ke saath. Learn about our <Link href="/in/whatsapp-automation" className="text-emerald-400 underline">WhatsApp Automation Stack</Link>.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-1">Unified Founder Command Dashboards</h4>
                  <p className="text-white/65 text-xs leading-relaxed">
                    Aapko roz team se report mangne ki zaroorat nahi. Live dashboard par dikhta hai kitni leads aayi, kis caller ne kitne follow-ups kiye, aur kitna revenue close hua. Explore <Link href="/services/automation/unified-admin-dashboards" className="text-blue-400 underline">Unified Admin Dashboards</Link>.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-1">Automated Proposal & Invoice Generation</h4>
                  <p className="text-white/65 text-xs leading-relaxed">
                    Deal close hote hi 1 click par branded PDF proposal aur GST invoice generate hokar client ke WhatsApp par dispatch ho jata hai. Learn about <Link href="/services/automation/proposal-invoice-automation" className="text-purple-400 underline">Proposal & Invoice Flow</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 5. AUDIT FORM */}
      <section id="audit-form" className="max-w-3xl mx-auto px-6 py-16 w-full relative z-10 scroll-mt-24">
        <ScrollReveal>
          <div className="bg-neutral-950/90 border border-amber-500/30 rounded-3xl p-8 md:p-10 backdrop-blur-2xl shadow-2xl relative">
            <div className="text-center mb-8">
              <span className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest rounded-full mb-3">
                Operations Diagnostic
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Design Your Custom Lead Dashboard</h3>
              <p className="text-sm text-white/70 max-w-lg mx-auto">
                Tell us your current sales workflow and team size. We will design a custom CRM architecture blueprint tailored for your business.
              </p>
            </div>

            <LeadForm showContainer={false} hideFooter={true} />

            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#25D366] hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-[#25D366]" /> 
                Direct WhatsApp Par Baat Karein (+91 9835182801) →
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 6. FLOATING WHATSAPP BUTTON */}
      <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#25D366] text-black font-extrabold text-xs md:text-sm shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-105 active:scale-95 transition-all"
        >
          <MessageCircle className="w-5 h-5 fill-black" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>

    </main>
  );
}