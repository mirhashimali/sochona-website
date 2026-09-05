import type { Metadata } from "next";
import Link from "next/link";
import { 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Clock, 
  Bot, 
  Send, 
  Calendar,
  Sparkles
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "WhatsApp Lead Automation & 24/7 AI Booking Agents | Sochona India",
  description: "Capture verified customer inquiries directly on WhatsApp. 24/7 automated lead qualification, instant brochure dispatch, and calendar booking without per-seat software fees.",
  keywords: "WhatsApp automation India, WhatsApp chatbot for business, lead qualification WhatsApp, WhatsApp CRM integration, Sochona",
};

export default function WhatsAppAutomationPage() {
  const whatsappNumber = "919835182801";
  const whatsappMessage = encodeURIComponent("Namaste! I want to automate my business leads and customer follow-ups on WhatsApp.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main className="flex flex-col items-center w-full bg-transparent text-white selection:bg-[#25D366] selection:text-black relative overflow-hidden pb-24">
      
      {/* 1. HERO SECTION */}
      <ScrollReveal>
        <section className="max-w-4xl mx-auto px-6 pt-32 pb-16 flex flex-col items-center text-center relative z-10">
          <div className="absolute inset-0 -z-10 bg-radial from-emerald-600/25 via-black/60 to-transparent blur-3xl rounded-full pointer-events-none scale-125"></div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/80 border border-emerald-500/30 mb-8 backdrop-blur-xl shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wider uppercase text-emerald-300">
              India's #1 Conversion Channel
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 drop-shadow-2xl leading-[1.15] text-balance">
            Your Customers Live on WhatsApp.<br />
            <span className="text-[#25D366]">
              Why Are You Still Waiting on Cold Emails?
            </span>
          </h1>

          <p className="max-w-2xl text-base md:text-lg text-white/80 leading-relaxed drop-shadow-lg mb-8 text-balance bg-black/40 p-5 rounded-2xl border border-white/10 backdrop-blur-md">
            India me 500 million se zyada active WhatsApp users hain. Jab customer aapki ad par click karta hai, hum usse bina kisi delay ke verified WhatsApp bot par qualify karte hain aur 30 seconds me brochure deliver karte hain.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-sm transition-all shadow-xl shadow-[#25D366]/20 flex items-center justify-center gap-2.5 hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-black" />
              Test Live WhatsApp Demo
            </a>
            <a 
              href="#audit-form" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-neutral-900/90 border border-white/20 hover:bg-neutral-800 text-white font-semibold text-sm transition-all backdrop-blur-xl flex items-center justify-center gap-2"
            >
              Automate My Funnel <ArrowRight className="w-4 h-4 text-white/70" />
            </a>
          </div>
        </section>
      </ScrollReveal>

      {/* 2. VERIFIED BENCHMARK STATS */}
      <section className="w-full max-w-5xl mx-auto px-6 py-8 relative z-10">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-neutral-950/70 border border-white/10 backdrop-blur-2xl">
            <div className="p-4 border-r border-white/10 last:border-none text-center">
              <span className="text-3xl font-extrabold text-[#25D366]">98%</span>
              <p className="text-[11px] text-white/60 mt-1 uppercase tracking-wider font-semibold">Average Open Rate in India</p>
            </div>
            <div className="p-4 border-r border-white/10 last:border-none text-center">
              <span className="text-3xl font-extrabold text-emerald-400">&lt; 3 mins</span>
              <p className="text-[11px] text-white/60 mt-1 uppercase tracking-wider font-semibold">80% of Messages Read Within 3 Mins</p>
            </div>
            <div className="p-4 border-r border-white/10 last:border-none text-center">
              <span className="text-3xl font-extrabold text-purple-400">24/7/365</span>
              <p className="text-[11px] text-white/60 mt-1 uppercase tracking-wider font-semibold">Instant Response While You Sleep</p>
            </div>
            <div className="p-4 text-center">
              <span className="text-3xl font-extrabold text-amber-400">0</span>
              <p className="text-[11px] text-white/60 mt-1 uppercase tracking-wider font-semibold">Manual Form Typing For Customers</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. HOW THE 4-STEP WHATSAPP FUNNEL WORKS */}
      <section className="max-w-5xl mx-auto px-6 py-16 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#25D366]">Autonomous Flow</span>
            <h2 className="text-2xl md:text-4xl font-bold text-white mt-2">Kaise Kaam Karta Hai WhatsApp Automation System?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-neutral-950/80 border border-white/10 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-[#007AFF] flex items-center justify-center mb-4">
                <Send className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-[#007AFF] font-bold">STEP 01</span>
              <h3 className="text-base font-bold text-white mt-1 mb-2">1-Click Ad Trigger</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Customer Google ya Meta ad par click karta hai aur seedha WhatsApp chat khulti hai pre-filled message ke saath.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-neutral-950/80 border border-white/10 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-[#25D366] flex items-center justify-center mb-4">
                <Bot className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-[#25D366] font-bold">STEP 02</span>
              <h3 className="text-base font-bold text-white mt-1 mb-2">Smart Qualification</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Bot 2 quick questions pooch kar pata lagata hai ki customer serious buyer hai ya student/junk lead.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-neutral-950/80 border border-white/10 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-purple-400 font-bold">STEP 03</span>
              <h3 className="text-base font-bold text-white mt-1 mb-2">Catalog Delivery</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Qualified customer ko foran PDF brochure, pricing sheet ya video demo WhatsApp par auto-send hota hai.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-neutral-950/80 border border-white/10 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-4">
                <Calendar className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-amber-400 font-bold">STEP 04</span>
              <h3 className="text-base font-bold text-white mt-1 mb-2">Calendar Booking</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Customer direct WhatsApp se call ya site visit book karta hai, aur lead aapke CRM dashboard me sync ho jati hai.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. INTERNAL LINKING ARCHITECTURE */}
      <section className="max-w-5xl mx-auto px-6 py-12 relative z-10">
        <div className="p-8 rounded-3xl bg-neutral-950/80 border border-white/15 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Explore Related Systems</h3>
            <p className="text-xs text-white/70">
              WhatsApp automation works best when paired with our <Link href="/services/automation" className="text-[#007AFF] underline">General Automation Hub</Link>, our <Link href="/services/performance-marketing" className="text-[#007AFF] underline">Paid Ads Scaling Stack</Link>, and our <Link href="/in/b2b-manufacturing" className="text-emerald-400 underline">B2B Manufacturing Systems</Link>.
            </p>
          </div>
          <Link 
            href="/services/automation" 
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold whitespace-nowrap transition-colors"
          >
            All Automation Capabilities →
          </Link>
        </div>
      </section>

      {/* 5. AUDIT FORM */}
      <section id="audit-form" className="max-w-3xl mx-auto px-6 py-16 w-full relative z-10 scroll-mt-24">
        <ScrollReveal>
          <div className="bg-neutral-950/90 border border-emerald-500/30 rounded-3xl p-8 md:p-10 backdrop-blur-2xl shadow-2xl relative">
            <div className="text-center mb-8">
              <span className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-[#25D366] text-xs font-bold uppercase tracking-widest rounded-full mb-3">
                Automation Consultation
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Deploy WhatsApp Automation for Your Team</h3>
              <p className="text-sm text-white/70 max-w-lg mx-auto">
                Tell us your current sales bottleneck. We'll map out a custom 24/7 WhatsApp conversation flow for your business.
              </p>
            </div>

            <LeadForm showContainer={false} />
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