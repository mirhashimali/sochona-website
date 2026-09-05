import type { Metadata } from "next";
import Link from "next/link";
import { 
  Building2, 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight, 
  MapPin, 
  ShieldCheck, 
  XCircle, 
  PhoneCall, 
  Eye, 
  Clock, 
  FileText 
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Real Estate Buyer Acquisition & Site Visit Systems | Sochona India",
  description: "Stop paying for junk property leads. High-intent search campaigns, automated WhatsApp brochure delivery, and confirmed site-visit bookings for Indian developers and channel partners.",
  keywords: "real estate lead generation India, property marketing Mumbai NCR Bangalore, real estate digital marketing, RERA compliant lead systems, Sochona",
};

export default function RealEstatePage() {
  const whatsappNumber = "919835182801";
  const whatsappMessage = encodeURIComponent("Namaste! I am a Real Estate Developer / Channel Partner in India and want to build a verified site-visit booking system.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main className="flex flex-col items-center w-full bg-transparent text-white selection:bg-purple-500 selection:text-white relative overflow-hidden pb-24">
      
      {/* 1. HERO SECTION */}
      <ScrollReveal>
        <section className="max-w-4xl mx-auto px-6 pt-32 pb-16 flex flex-col items-center text-center relative z-10">
          <div className="absolute inset-0 -z-10 bg-radial from-purple-600/20 via-black/60 to-transparent blur-3xl rounded-full pointer-events-none scale-125"></div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/80 border border-purple-500/30 mb-8 backdrop-blur-xl shadow-lg">
            <Building2 className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-semibold tracking-wider uppercase text-purple-300">
              Developers & Premium Channel Partners
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 drop-shadow-2xl leading-[1.15] text-balance">
            Stop Chasing Fake Property Leads.<br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-[#007AFF] bg-clip-text text-transparent">
              Book Confirmed Site Visits.
            </span>
          </h1>

          <p className="max-w-2xl text-base md:text-lg text-white/80 leading-relaxed drop-shadow-lg mb-8 text-balance bg-black/40 p-5 rounded-2xl border border-white/10 backdrop-blur-md">
            ₹50 per lead ke chakkar me Meta par ad chalakar aapki sales team din bhar <em>"Wrong number"</em> aur tire-kickers ko call karti rehti hai. Hum build karte hain intent-filtered search campaigns jo RERA-verified project details aur automated WhatsApp brochures dekar serious buyers ko site visit par schedule karti hain.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-sm transition-all shadow-xl shadow-[#25D366]/20 flex items-center justify-center gap-2.5 hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-black" />
              Discuss Project Site Visits
            </a>
            <a 
              href="#audit-form" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-neutral-900/90 border border-white/20 hover:bg-neutral-800 text-white font-semibold text-sm transition-all backdrop-blur-xl flex items-center justify-center gap-2"
            >
              Request Project Audit <ArrowRight className="w-4 h-4 text-white/70" />
            </a>
          </div>
        </section>
      </ScrollReveal>

      {/* 2. REAL ESTATE INDUSTRY BENCHMARKS */}
      <section className="w-full max-w-5xl mx-auto px-6 py-8 relative z-10">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-neutral-950/70 border border-white/10 backdrop-blur-2xl">
            <div className="p-4 border-r border-white/10 last:border-none text-center">
              <span className="text-3xl font-extrabold text-purple-400">4.2x</span>
              <p className="text-[11px] text-white/60 mt-1 uppercase tracking-wider font-semibold">Higher Show-Up Rate on Scheduled Site Visits</p>
            </div>
            <div className="p-4 border-r border-white/10 last:border-none text-center">
              <span className="text-3xl font-extrabold text-emerald-400">&lt; 30s</span>
              <p className="text-[11px] text-white/60 mt-1 uppercase tracking-wider font-semibold">Brochure & Floor Plan Dispatch via WhatsApp</p>
            </div>
            <div className="p-4 border-r border-white/10 last:border-none text-center">
              <span className="text-3xl font-extrabold text-[#007AFF]">100%</span>
              <p className="text-[11px] text-white/60 mt-1 uppercase tracking-wider font-semibold">RERA-Compliant Ad Copies & Disclaimers</p>
            </div>
            <div className="p-4 text-center">
              <span className="text-3xl font-extrabold text-amber-400">0</span>
              <p className="text-[11px] text-white/60 mt-1 uppercase tracking-wider font-semibold">Shared Broker Portals (Zero Co-Broking Leakage)</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. THE 3 PAIN POINTS IN INDIAN REAL ESTATE MARKETING */}
      <section className="max-w-5xl mx-auto px-6 py-16 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Real Estate Diagnostic</span>
            <h2 className="text-2xl md:text-4xl font-bold text-white mt-2">Real Estate Campaigns Me Paisa Kahan Barbaad Hota Hai?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-neutral-950/80 border border-white/10 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-xl bg-red-500/15 text-red-400 flex items-center justify-center mb-4">
                <XCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">1. Facebook Lead Form Fraud</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Pre-filled forms se log galti se submit kar dete hain. Jab aapka tele-caller call karta hai, 70% log bolte hain <em>"Maine koi inquiry nahi kari."</em>
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-neutral-950/80 border border-white/10 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">2. Brochure Dispatch Lag</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Customer Sunday shaam ko inquiry karta hai par brochure Monday dopahar ko milta hai. Tab tak buyer 3 aur properties dekh chuka hota hai.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-neutral-950/80 border border-white/10 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center mb-4">
                <PhoneCall className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">3. Expensive Cost Per Site Visit</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Cheap leads lene ke chakkar me aapki calling team ka time waste hota hai aur actual site visit ka cost ₹8,000–₹15,000 cross kar jata hai.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. THE SOCHONA REAL ESTATE ENGINE */}
      <section className="max-w-5xl mx-auto px-6 py-16 relative z-10">
        <ScrollReveal>
          <div className="bg-neutral-950/80 border border-white/15 rounded-3xl p-8 md:p-12 backdrop-blur-xl">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-400">The Conversion Engine</span>
              <h2 className="text-2xl md:text-4xl font-bold text-white mt-2 mb-3">Hum Real Estate Funnels Kaise Engineer Karte Hain?</h2>
            </div>

            <div className="space-y-4 text-xs md:text-sm text-white/80">
              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-1">Google Search Intent + PMax Real Estate Architecture</h4>
                  <p className="text-white/65 text-xs leading-relaxed">
                    Exact buyer keywords target karte hain (e.g., <em>"3 BHK luxury apartments in Bandra under 5 Cr"</em>). Koi generic browsing traffic nahi. Learn more in our <Link href="/services/performance-marketing" className="text-purple-400 underline">Performance Marketing Hub</Link> and <Link href="/services/performance-marketing/pmax-vs-search-intent" className="text-purple-400 underline">PMax Strategy Guide</Link>.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-1">Instant WhatsApp Floor Plan & Price Sheet Bot</h4>
                  <p className="text-white/65 text-xs leading-relaxed">
                    Inquiry aate hi 30 seconds ke andar verified WhatsApp message jata hai with RERA certificate, approved master layout, and virtual walkthrough video. Learn about <Link href="/in/whatsapp-automation" className="text-emerald-400 underline">WhatsApp Lead Automation</Link>.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-1">Automated Cab / Site-Visit Scheduling</h4>
                  <p className="text-white/65 text-xs leading-relaxed">
                    Buyer direct WhatsApp me site visit slot select karta hai. System sales manager ko Google Calendar alert aur buyer ko site location GPS link bhejta hai.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-1">Custom Broker CRM (Zero Per-Seat Monthly Fees)</h4>
                  <p className="text-white/65 text-xs leading-relaxed">
                    Aapki proprietary sales pipeline jahan har site visit status, tele-caller follow-up aur booking stage live track hoti hai. Discover our <Link href="/services/automation/custom-crm-vs-saas" className="text-amber-400 underline">Custom CRM vs SaaS Architecture</Link>.
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
          <div className="bg-neutral-950/90 border border-purple-500/30 rounded-3xl p-8 md:p-10 backdrop-blur-2xl shadow-2xl relative">
            <div className="text-center mb-8">
              <span className="inline-block px-3 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-widest rounded-full mb-3">
                Project Diagnostic
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Audit Your Project's Cost Per Site Visit</h3>
              <p className="text-sm text-white/70 max-w-lg mx-auto">
                Enter your project location, current ad budget, and website. We will send a private 5-minute video breakdown of where you are leaking ad spend.
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