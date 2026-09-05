import type { Metadata } from "next";
import Link from "next/link";
import { 
  TrendingUp, 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight, 
  Target, 
  ShieldAlert, 
  Clock, 
  ShieldCheck, 
  XCircle, 
  Filter,
  BarChart3,
  Flame
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Zero Ad Waste Systems | High-Intent Google & Meta Ads India",
  description: "Stop burning ad budget on junk leads and accidental clicks. High-intent keyword targeting, strict negative filters, and first-party attribution for Indian SMBs.",
  keywords: "Google ads agency India, stop junk leads Facebook ads, high intent performance marketing, CRO agency India, Sochona",
};

export default function ZeroAdWastePage() {
  const whatsappNumber = "919835182801";
  const whatsappMessage = encodeURIComponent("Namaste! I want to audit my Google/Meta ads and stop ad budget wastage on junk leads.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main className="flex flex-col items-center w-full bg-transparent text-white selection:bg-[#007AFF] selection:text-white relative overflow-hidden pb-24">
      
      {/* 1. HERO SECTION */}
      <ScrollReveal>
        <section className="max-w-4xl mx-auto px-6 pt-32 pb-16 flex flex-col items-center text-center relative z-10">
          <div className="absolute inset-0 -z-10 bg-radial from-blue-600/25 via-black/60 to-transparent blur-3xl rounded-full pointer-events-none scale-125"></div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/80 border border-blue-500/30 mb-8 backdrop-blur-xl shadow-lg">
            <Target className="w-4 h-4 text-[#007AFF]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-blue-300">
              Stage 01 • Demand Architecture
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 drop-shadow-2xl leading-[1.15] text-balance">
            Stop Burning 50% of Your Ad Spend.<br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-[#007AFF] bg-clip-text text-transparent">
              Target Verified Buyers, Not Browsers.
            </span>
          </h1>

          <p className="max-w-2xl text-base md:text-lg text-white/80 leading-relaxed drop-shadow-lg mb-8 text-balance bg-black/40 p-5 rounded-2xl border border-white/10 backdrop-blur-md">
            India me ad chalana aasan hai, par profit banana mushkil. Broad match keywords aur Meta ke generic algorithms aapka ad budget un logon par phoonk dete hain jo kabhi khareedne wale nahi hain. Hum build karte hain laser-targeted search funnels jo sirf high-intent buyers ko capture karte hain.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-sm transition-all shadow-xl shadow-[#25D366]/20 flex items-center justify-center gap-2.5 hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-black" />
              Audit My Current Ad Spend
            </a>
            <a 
              href="#audit-form" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-neutral-900/90 border border-white/20 hover:bg-neutral-800 text-white font-semibold text-sm transition-all backdrop-blur-xl flex items-center justify-center gap-2"
            >
              Request Free Ad Audit <ArrowRight className="w-4 h-4 text-white/70" />
            </a>
          </div>
        </section>
      </ScrollReveal>

      {/* 2. REAL BENCHMARK METRICS */}
      <section className="w-full max-w-5xl mx-auto px-6 py-8 relative z-10">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-neutral-950/70 border border-white/10 backdrop-blur-2xl">
            <div className="p-4 border-r border-white/10 last:border-none text-center">
              <span className="text-3xl font-extrabold text-[#007AFF]">42%</span>
              <p className="text-[11px] text-white/60 mt-1 uppercase tracking-wider font-semibold">Average Ad Budget Wasted on Irrelevant Search Queries</p>
            </div>
            <div className="p-4 border-r border-white/10 last:border-none text-center">
              <span className="text-3xl font-extrabold text-emerald-400">100%</span>
              <p className="text-[11px] text-white/60 mt-1 uppercase tracking-wider font-semibold">Verified Phone Numbers (Zero "Wrong Number" Leads)</p>
            </div>
            <div className="p-4 border-r border-white/10 last:border-none text-center">
              <span className="text-3xl font-extrabold text-purple-400">3.4x</span>
              <p className="text-[11px] text-white/60 mt-1 uppercase tracking-wider font-semibold">Average Return on Ad Spend (ROAS) Multiplier</p>
            </div>
            <div className="p-4 text-center">
              <span className="text-3xl font-extrabold text-amber-400">0</span>
              <p className="text-[11px] text-white/60 mt-1 uppercase tracking-wider font-semibold">Vanity Metrics (We Only Track Real Closed Revenue)</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. WHERE MONEY LEAKS IN PAID ADS */}
      <section className="max-w-5xl mx-auto px-6 py-16 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#007AFF]">Diagnostic Breakdown</span>
            <h2 className="text-2xl md:text-4xl font-bold text-white mt-2">Paid Campaigns Me 50% Paisa Kahan Dubta Hai?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-neutral-950/80 border border-white/10 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-xl bg-red-500/15 text-red-400 flex items-center justify-center mb-4">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">1. Broad Match Bleed</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Google Ads me broad match keywords on chhodne se aapke ads <em>"free courses"</em>, <em>"job vacancies"</em> aur irrelevant searches par dikhte hain. Har click par aapka paisa katta hai bina kisi lead ke.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-neutral-950/80 border border-white/10 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-4">
                <Filter className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">2. Zero Landing Page Friction</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Meta par pre-filled form lagane se log galti se submit button daba dete hain. Form me zero qualification hone ki wajah se sales team ko 80% junk leads milti hain.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-neutral-950/80 border border-white/10 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center mb-4">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">3. Broken Attribution Tracking</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Bina server-side tracking ke Meta aur Google ko pata hi nahi chalta ki kis keyword se actual paying customer aaya, isliye algorithm low-quality logo ko ads dikhata rehta hai.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. THE SOCHONA ZERO-WASTE FRAMEWORK */}
      <section className="max-w-5xl mx-auto px-6 py-16 relative z-10">
        <ScrollReveal>
          <div className="bg-neutral-950/80 border border-white/15 rounded-3xl p-8 md:p-12 backdrop-blur-xl">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#007AFF]">The Execution Stack</span>
              <h2 className="text-2xl md:text-4xl font-bold text-white mt-2 mb-3">Hum Ad Waste Ko Kaise Khatam Karte Hain?</h2>
            </div>

            <div className="space-y-4 text-xs md:text-sm text-white/80">
              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-1">Intent-Exact Search & PMax Asset Segregation</h4>
                  <p className="text-white/65 text-xs leading-relaxed">
                    Automated asset groups ko exact-match search intent se alag karte hain. Negative keyword lists systematically deploy hoti hain taaki zero irrelevant clicks aayein. Deep dive in our <Link href="/services/performance-marketing/pmax-vs-search-intent" className="text-blue-400 underline">PMax vs Search Intent Blueprint</Link>.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-1">Conversion Rate Optimization (CRO) Economics</h4>
                  <p className="text-white/65 text-xs leading-relaxed">
                    Website conversion rate ko 1.5% se 4% par le jane se aapki customer acquisition cost (CAC) seedha aadhi ho jati hai bina ad spend badhaye. Learn more in our <Link href="/services/performance-marketing/the-economics-of-cro" className="text-emerald-400 underline">Economics of CRO Guide</Link>.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-1">First-Party Server-Side Conversions API (CAPI)</h4>
                  <p className="text-white/65 text-xs leading-relaxed">
                    Ad-blockers aur iOS privacy drops ko bypass karne ke liye server-level tracking deploy karte hain jo algorithms ko real revenue data feed karta hai. Read our guide on <Link href="/services/performance-marketing/attribution-in-privacy-era" className="text-purple-400 underline">Attribution in the Privacy Era</Link>.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-1">Instant WhatsApp OTP & Chat Qualification</h4>
                  <p className="text-white/65 text-xs leading-relaxed">
                    Leads cold form submit nahi karti; wo direct WhatsApp verification ke through aati hain. Explore our <Link href="/in/whatsapp-automation" className="text-amber-400 underline">WhatsApp Automation Hub</Link>.
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
          <div className="bg-neutral-950/90 border border-blue-500/30 rounded-3xl p-8 md:p-10 backdrop-blur-2xl shadow-2xl relative">
            <div className="text-center mb-8">
              <span className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-[#007AFF] text-xs font-bold uppercase tracking-widest rounded-full mb-3">
                Ad Spend Diagnostic
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Audit Your Current Ad Spend Leakage</h3>
              <p className="text-sm text-white/70 max-w-lg mx-auto">
                Submit your website and current monthly ad budget. We will send a private 5-minute video breakdown of where your ad capital is leaking.
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