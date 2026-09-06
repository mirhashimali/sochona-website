import type { Metadata } from "next";
import Link from "next/link";
import { 
  Calendar,
  MessageCircle, 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  XCircle, 
  Building2, 
  Stethoscope, 
  GraduationCap, 
  ShoppingBag, 
  Factory,
  Clock,
  Sparkles,
  ChevronRight
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Sochona India | Sovereign Digital Infrastructure",
  description: "Websites and automated WhatsApp systems for Indian MSMEs & growing businesses. Sub-1s Next.js mobile speed, verified buyer inquiries, and zero monthly software fees.",
  keywords: "Digital marketing agency India, WhatsApp automation, lead generation India, custom CRM for SMBs, Next.js web development India, Sochona India",
  openGraph: {
    title: "Sochona India | Stop Burning Money on Junk Leads",
    description: "Sub-1s Next.js web systems and automated WhatsApp lead booking for Indian businesses. Direct consultation on WhatsApp (+91 9835182801).",
    url: "https://sochona.net/in",
    siteName: "Sochona",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sochona India | Sovereign Digital Infrastructure",
    description: "High-performance digital infrastructure for Indian enterprises.",
  },
};

export default function IndiaGrowthPage() {
  const whatsappNumber = "919835182801";
  const whatsappMessage = encodeURIComponent("Namaste Sochona! I run a business in India and want to audit my growth infrastructure and stop junk leads.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main className="flex flex-col items-center w-full bg-transparent text-white selection:bg-[#007AFF] selection:text-white relative overflow-hidden pb-32">

      {/* Google Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Sochona India",
            "url": "https://sochona.net/in",
            "telephone": "+919835182801",
            "priceRange": "₹₹₹",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            },
            "description": "High-performance digital infrastructure, Next.js web applications, and WhatsApp lead automation for Indian businesses.",
            "areaServed": "IN"
          }),
        }}
      />

      {/* 1. HERO SECTION (Mobile-First Responsive Typography) */}
      <ScrollReveal>
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-8 flex flex-col items-center text-center relative z-10">

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/50 border border-white/20 mb-5 sm:mb-6 backdrop-blur-xl shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-[#007AFF] animate-pulse"></span>
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-white/90">
              Bharat Architecture Edition
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white mb-4 sm:mb-5 drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] leading-[1.2] max-w-3xl text-balance">
            Engineered for Revenue. <br />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-white/75 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              Junk Leads Band. Sovereign Systems Shuru.
            </span>
          </h1>

          <p className="max-w-xl text-sm sm:text-base text-white/85 font-normal leading-relaxed mb-6 sm:mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] text-balance px-2">
            No broken WordPress templates. No monthly software ki jhanjhat. Hum banate hain sub-second digital systems jo verified customer inquiries seedha aapke <span className="text-[#007AFF] font-medium">WhatsApp</span> aur private CRM dashboard par deliver karte hain.
          </p>

          {/* DUAL BUTTONS WITH RESPONSIVE TOUCH PADDING */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md mb-8">
            <a 
              href="#audit-form" 
              className="w-full sm:w-auto px-7 sm:px-8 py-3.5 rounded-full bg-white text-black font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300 hover:bg-neutral-100 hover:scale-105 active:scale-95 shadow-2xl shadow-white/20 flex items-center justify-center gap-2 group"
            >
              <span>Get Free Infrastructure Audit</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#007AFF] group-hover:translate-x-0.5 transition-transform" />
            </a>

            <Link 
              href="/book" 
              className="w-full sm:w-auto px-7 sm:px-8 py-3.5 rounded-full bg-black/75 hover:bg-black/90 border border-white/25 text-white font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-black/50 backdrop-blur-md flex items-center justify-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5 text-[#007AFF]" />
              <span>Book a Meeting</span>
            </Link>
          </div>

          {/* ⚡ LIVING ARTIFACT: RESPONSIVE HUD (Readable 12-13px on Mobile, No Squishing) */}
          <div className="w-full max-w-xl p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-black/55 border border-white/20 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-left relative overflow-hidden group hover:border-white/35 transition-all">
            
            {/* HUD Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-white/90 font-bold uppercase tracking-wider text-[11px] sm:text-xs">SOCHONA ENGINE // LIVE HUD</span>
              </div>
              <span className="text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold">
                MUMBAI (0.38s)
              </span>
            </div>

            {/* Event Rows (Stacked & Clean on Mobile • Wide on Desktop) */}
            <div className="space-y-2.5 font-mono text-xs">
              
              {/* Event 1 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-2 sm:p-1.5 rounded-xl bg-white/[0.02] sm:bg-transparent">
                <div className="flex items-center gap-2">
                  <span className="text-white/40 text-[11px]">[00:01.2s]</span>
                  <span className="text-white/90 text-xs sm:text-sm font-medium">Google Search Intent</span>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-2">
                  <span className="text-blue-400 text-xs">"B2B Exporter"</span>
                  <span className="text-emerald-400 font-bold text-[10px] sm:text-xs px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">VERIFIED</span>
                </div>
              </div>

              {/* Event 2 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-2 sm:p-1.5 rounded-xl bg-white/[0.02] sm:bg-transparent">
                <div className="flex items-center gap-2">
                  <span className="text-white/40 text-[11px]">[00:01.8s]</span>
                  <span className="text-white/90 text-xs sm:text-sm font-medium">WhatsApp Bot Dispatched</span>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-2">
                  <span className="text-white/60 text-xs">Hindi / Eng</span>
                  <span className="text-teal-400 font-bold text-[10px] sm:text-xs px-1.5 py-0.5 rounded bg-teal-500/10 border border-teal-500/20">1.2s</span>
                </div>
              </div>

              {/* Event 3 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-2 sm:p-1.5 rounded-xl bg-white/[0.02] sm:bg-transparent">
                <div className="flex items-center gap-2">
                  <span className="text-white/40 text-[11px]">[00:02.4s]</span>
                  <span className="text-white/90 text-xs sm:text-sm font-medium">Portal Synchronization</span>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-2">
                  <span className="text-white/60 text-xs">Zero SaaS Rent</span>
                  <span className="text-purple-400 font-bold text-[10px] sm:text-xs px-1.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">ROUTED</span>
                </div>
              </div>

            </div>

            {/* HUD Footer Readout */}
            <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-white/50 uppercase tracking-wider">
              <span>Latency: 38ms</span>
              <span>•</span>
              <span>LCP: 0.6s (Pass)</span>
              <span>•</span>
              <span className="text-emerald-400 font-semibold">100% Intent</span>
            </div>

          </div>

        </section>
      </ScrollReveal>

      {/* 2. RESEARCH BENCHMARKS (Responsive Mobile Grid) */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 relative z-10">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-black/50 border border-white/15 backdrop-blur-xl shadow-2xl">
            <div className="text-center p-2 border-r border-white/10">
              <span className="text-2xl sm:text-3xl font-light text-blue-400 tracking-tight">9x</span>
              <p className="text-[11px] sm:text-xs text-white/70 mt-1 uppercase tracking-wider font-medium leading-tight">
                Conversion Odds &lt; 5min (MIT)
              </p>
            </div>
            <div className="text-center p-2 md:border-r border-white/10">
              <span className="text-2xl sm:text-3xl font-light text-teal-300 tracking-tight">&lt; 0.8s</span>
              <p className="text-[11px] sm:text-xs text-white/70 mt-1 uppercase tracking-wider font-medium leading-tight">
                Edge Mobile Latency (Google)
              </p>
            </div>
            <div className="text-center p-2 border-r border-white/10">
              <span className="text-2xl sm:text-3xl font-light text-emerald-400 tracking-tight">98%</span>
              <p className="text-[11px] sm:text-xs text-white/70 mt-1 uppercase tracking-wider font-medium leading-tight">
                WhatsApp Delivery Open Rate
              </p>
            </div>
            <div className="text-center p-2">
              <span className="text-2xl sm:text-3xl font-light text-amber-300 tracking-tight">100%</span>
              <p className="text-[11px] sm:text-xs text-white/70 mt-1 uppercase tracking-wider font-medium leading-tight">
                Proprietary Code Ownership
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. GROUND REALITY (Comfortable Mobile Reading) */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10 pointer-events-auto">
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#007AFF]">The Indian Business Reality</span>
            <h2 className="text-2xl sm:text-4xl font-light text-white mt-2">Aapka Digital Paisa Kahan Barbaad Ho Raha Hai?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-black/50 border border-red-500/20 backdrop-blur-xl">
              <span className="text-[10px] sm:text-xs font-mono text-red-400/80 uppercase tracking-widest font-semibold">Purana Tariqa</span>
              <h3 className="text-base sm:text-lg font-medium text-white mt-1 mb-4 sm:mb-6">Freelancers & Typical Agency Retainers</h3>
              <ul className="space-y-3.5 sm:space-y-4 text-xs sm:text-sm text-white/75 leading-relaxed font-normal">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">—</span>
                  <span><strong>80% Junk Leads:</strong> Ads chalaye par callers bolte hain <em>"Maine galti se click kiya"</em> ya students job mangte hain.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">—</span>
                  <span><strong>Slow WordPress Themes:</strong> Mobile 4G par 6-8 seconds leti hain load hone me. Grahak pehle hi back dabakar chala jata hai.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">—</span>
                  <span><strong>Developer Gayab:</strong> Advance lene ke 1 mahine baad freelancer call nahi uthata aur bugs theek nahi karta.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">—</span>
                  <span><strong>Follow-Up Ka Loss:</strong> Leads Excel sheet me padi rehti hain aur ghanton tak koi WhatsApp message nahi jata.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-black/50 border border-blue-500/25 backdrop-blur-xl relative">
              <div className="absolute top-4 right-4 text-[10px] font-mono text-[#007AFF] uppercase tracking-widest font-bold">
                Production Standard
              </div>
              <span className="text-[10px] sm:text-xs font-mono text-blue-400/80 uppercase tracking-widest font-semibold">The Sochona System</span>
              <h3 className="text-base sm:text-lg font-medium text-white mt-1 mb-4 sm:mb-6">Unified Revenue Infrastructure</h3>
              <ul className="space-y-3.5 sm:space-y-4 text-xs sm:text-sm text-white/85 leading-relaxed font-normal">
                <li className="flex items-start gap-3">
                  <span className="text-[#007AFF] font-bold">✓</span>
                  <span><strong>Verified Inquiries:</strong> Strict intent-based funnels jo sirf serious buyers ko capture karte hain.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#007AFF] font-bold">✓</span>
                  <span><strong>Sub-Second Mobile Speed:</strong> Next.js code jo Jio aur Airtel 4G/5G par bina kisi delay ke instant khulta hai.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#007AFF] font-bold">✓</span>
                  <span><strong>Instant WhatsApp Automation:</strong> Grahak ke message karte hi instant catalog, pricing aur meeting link auto-send hoti hai.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#007AFF] font-bold">✓</span>
                  <span><strong>Zero Monthly Software Bills:</strong> Ek baar custom lead portal ban gaya, har mahine mehnge SaaS ka kharcha band.</span>
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. 4 PILLARS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 pointer-events-auto w-full relative z-10">
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#007AFF]">The Four Pillars</span>
            <h2 className="text-2xl sm:text-4xl font-light text-white mt-2 mb-2 sm:mb-3">Hum Aapke Business Ke Liye Kya Karte Hain?</h2>
            <p className="text-white/65 text-xs sm:text-sm font-normal max-w-xl mx-auto">
              Click on any discipline to inspect implementation blueprints and technical benchmarks.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex md:grid md:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible pt-4 sm:pt-8 pb-8 px-1 snap-x snap-mandatory scrollbar-none">
          
          <Link href="/in/zero-ad-waste" className="block min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-center">
            <div className="h-full bg-black/50 border border-white/15 rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between backdrop-blur-xl transition-all duration-300 hover:-translate-y-2.5 hover:border-blue-500/50 hover:bg-black/70 hover:shadow-[0_15px_35px_rgba(0,122,255,0.15)] group cursor-pointer">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center mb-5 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400/80">Phase 01</span>
                <h3 className="text-base sm:text-lg font-medium text-white mt-1 mb-2 group-hover:text-blue-300 transition-colors">1. High-Intent Ads</h3>
                <p className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed">
                  Google Search aur Meta ads jo exact unhi verified logon ko target karte hain jo aaj aapki service khareedne ke liye search kar rahe hain.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm text-blue-400 font-medium group-hover:translate-x-0.5 transition-all">
                <span>Zero Budget Waste</span>
                <ChevronRight className="w-4 h-4 opacity-70 group-hover:opacity-100" />
              </div>
            </div>
          </Link>

          <Link href="/in/speed-infrastructure" className="block min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-center">
            <div className="h-full bg-black/50 border border-white/15 rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between backdrop-blur-xl transition-all duration-300 hover:-translate-y-2.5 hover:border-teal-400/50 hover:bg-black/70 hover:shadow-[0_15px_35px_rgba(20,184,166,0.15)] group cursor-pointer">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-teal-500/10 border border-teal-500/25 flex items-center justify-center mb-5 text-teal-400 group-hover:scale-110 group-hover:bg-teal-500/20 transition-all">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-teal-400/80">Phase 02</span>
                <h3 className="text-base sm:text-lg font-medium text-white mt-1 mb-2 group-hover:text-teal-300 transition-colors">2. Blazing Speed Web</h3>
                <p className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed">
                  React aur Next.js par custom code. Zero bloated plugins, 100% security, aur Jio/Airtel 4G/5G par sub-second instant mobile loading.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm text-teal-400 font-medium group-hover:translate-x-0.5 transition-all">
                <span>Sub-1s Latency</span>
                <ChevronRight className="w-4 h-4 opacity-70 group-hover:opacity-100" />
              </div>
            </div>
          </Link>

          <Link href="/in/whatsapp-automation" className="block min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-center">
            <div className="h-full bg-black/50 border border-white/15 rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between backdrop-blur-xl transition-all duration-300 hover:-translate-y-2.5 hover:border-emerald-400/50 hover:bg-black/70 hover:shadow-[0_15px_35px_rgba(16,185,129,0.15)] group cursor-pointer">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center mb-5 text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400/80">Phase 03</span>
                <h3 className="text-base sm:text-lg font-medium text-white mt-1 mb-2 group-hover:text-emerald-300 transition-colors">3. WhatsApp Automation</h3>
                <p className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed">
                  24/7 automated agent jo client ke sawalon ka jawab deta hai, product catalog bhejta hai, aur direct calendar me meeting schedule karta hai.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm text-emerald-400 font-medium group-hover:translate-x-0.5 transition-all">
                <span>Instant 24/7 Response</span>
                <ChevronRight className="w-4 h-4 opacity-70 group-hover:opacity-100" />
              </div>
            </div>
          </Link>

          <Link href="/in/custom-crm" className="block min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-center">
            <div className="h-full bg-black/50 border border-white/15 rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between backdrop-blur-xl transition-all duration-300 hover:-translate-y-2.5 hover:border-amber-400/50 hover:bg-black/70 hover:shadow-[0_15px_35px_rgba(245,158,11,0.15)] group cursor-pointer">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center mb-5 text-amber-400 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400/80">Phase 04</span>
                <h3 className="text-base sm:text-lg font-medium text-white mt-1 mb-2 group-hover:text-amber-300 transition-colors">4. Custom Lead Portal</h3>
                <p className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed">
                  Aapka apna proprietary dashboard jahan saari leads, call recordings aur follow-ups 1 click par accessible hoti hain without SaaS fees.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm text-amber-400 font-medium group-hover:translate-x-0.5 transition-all">
                <span>No Per-User SaaS Fees</span>
                <ChevronRight className="w-4 h-4 opacity-70 group-hover:opacity-100" />
              </div>
            </div>
          </Link>

        </div>
      </section>

      {/* 5. INDUSTRY VERTICALS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 pointer-events-auto w-full relative z-10">
        <ScrollReveal>
          <div className="bg-black/50 border border-white/15 rounded-2xl sm:rounded-3xl p-6 sm:p-12 backdrop-blur-2xl">
            <div className="max-w-xl mb-8 sm:mb-10">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#007AFF]">Industry Specialization</span>
              <h2 className="text-2xl sm:text-3xl font-light text-white mt-2 mb-2">Sectors Where We Deploy Systems</h2>
              <p className="text-white/65 text-xs sm:text-sm font-normal">
                Har industry ka customer alag tarike se behave karta hai. Click any sector to view specialized funnels and verified case architectures.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 text-center">
              <Link href="/in/b2b-manufacturing" className="block">
                <div className="h-full p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/40 hover:bg-blue-500/[0.05] transition-all duration-300 flex flex-col items-center group cursor-pointer hover:-translate-y-1">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-2.5 sm:mb-3 group-hover:scale-110 transition-transform">
                    <Factory className="w-5 h-5 text-blue-400" />
                  </div>
                  <h4 className="font-medium text-white/90 text-xs sm:text-sm group-hover:text-white transition-colors">B2B Manufacturing</h4>
                </div>
              </Link>

              <Link href="/in/healthcare" className="block">
                <div className="h-full p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/40 hover:bg-emerald-500/[0.05] transition-all duration-300 flex flex-col items-center group cursor-pointer hover:-translate-y-1">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-2.5 sm:mb-3 group-hover:scale-110 transition-transform">
                    <Stethoscope className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h4 className="font-medium text-white/90 text-xs sm:text-sm group-hover:text-white transition-colors">Clinics & Healthcare</h4>
                </div>
              </Link>

              <Link href="/in/real-estate" className="block">
                <div className="h-full p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/40 hover:bg-purple-500/[0.05] transition-all duration-300 flex flex-col items-center group cursor-pointer hover:-translate-y-1">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-500/10 flex items-center justify-center mb-2.5 sm:mb-3 group-hover:scale-110 transition-transform">
                    <Building2 className="w-5 h-5 text-purple-400" />
                  </div>
                  <h4 className="font-medium text-white/90 text-xs sm:text-sm group-hover:text-white transition-colors">Real Estate Systems</h4>
                </div>
              </Link>

              <Link href="/in/education" className="block">
                <div className="h-full p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-500/40 hover:bg-amber-500/[0.05] transition-all duration-300 flex flex-col items-center group cursor-pointer hover:-translate-y-1">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-2.5 sm:mb-3 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-5 h-5 text-amber-400" />
                  </div>
                  <h4 className="font-medium text-white/90 text-xs sm:text-sm group-hover:text-white transition-colors">Coaching & Academies</h4>
                </div>
              </Link>

              <Link href="/in/d2c-brands" className="block col-span-2 md:col-span-1">
                <div className="h-full p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 hover:border-rose-500/40 hover:bg-rose-500/[0.05] transition-all duration-300 flex flex-col items-center group cursor-pointer hover:-translate-y-1">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-rose-500/10 flex items-center justify-center mb-2.5 sm:mb-3 group-hover:scale-110 transition-transform">
                    <ShoppingBag className="w-5 h-5 text-rose-400" />
                  </div>
                  <h4 className="font-medium text-white/90 text-xs sm:text-sm group-hover:text-white transition-colors">D2C & Retail Brands</h4>
                </div>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 6. FAQ (Comfortable Mobile Typography) */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 pointer-events-auto w-full relative z-10">
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#007AFF]">Clear Answers</span>
            <h2 className="text-2xl sm:text-3xl font-light text-white mt-2">Frequently Asked Questions</h2>
            <p className="text-white/60 text-xs sm:text-sm font-normal mt-1">Koi chupa hua kharcha nahi, zero technical confusion.</p>
          </div>

          <div className="space-y-3.5 sm:space-y-4">
            <div className="p-5 sm:p-6 rounded-2xl bg-black/50 border border-white/15 backdrop-blur-md">
              <h3 className="text-sm sm:text-base font-medium text-white mb-2 flex items-center justify-between">
                <span>1. Kya hume website aur code ka 100% ownership milta hai?</span>
                <span className="text-[#007AFF] text-xs">✓</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-normal">
                Haan, 100%. Hum proprietary agency lock-in me vishwas nahi rakhte. Project complete hote hi GitHub repository, domain controls, aur deployment dashboard ka pura access aapko hand over kar diya jata hai.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-black/50 border border-white/15 backdrop-blur-md">
              <h3 className="text-sm sm:text-base font-medium text-white mb-2 flex items-center justify-between">
                <span>2. Local freelancers ya typical digital marketing agencies se aap alag kaise hain?</span>
                <span className="text-[#007AFF] text-xs">✓</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-normal">
                Freelancers sirf template par content paste karte hain jo mobile par 6-8 second leti hai. Typical agencies sirf vanity metrics (impressions, clicks) dikhati hain. Hum <strong>Revenue Engineers</strong> hain—hum ad targeting, sub-second Next.js code, aur automated WhatsApp qualification ko ek single pipeline me connect karte hain taaki aapko sirf verified paying inquiries milein.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-black/50 border border-white/15 backdrop-blur-md">
              <h3 className="text-sm sm:text-base font-medium text-white mb-2 flex items-center justify-between">
                <span>3. System deploy hone me kitna time lagta hai?</span>
                <span className="text-[#007AFF] text-xs">✓</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-normal">
                Standard full-funnel systems (Next.js web architecture + WhatsApp automation + CRM dashboard) ko deploy hone me <strong>14 se 21 business days</strong> ka time lagta hai. Isme strict testing aur real device optimization included hoti hai.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-black/50 border border-white/15 backdrop-blur-md">
              <h3 className="text-sm sm:text-base font-medium text-white mb-2 flex items-center justify-between">
                <span>4. Kya hume monthly software maintenance fees deni hogi?</span>
                <span className="text-[#007AFF] text-xs">✓</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-normal">
                Nahi. Hum aapka lead dashboard aur web systems modern edge architecture par banate hain jahan hosting costs standard traffic ke liye zero ya negligible hoti hain. Koi expensive monthly per-user SaaS license fees nahi hoti.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 7. AUDIT FORM (Preserved variant="in") */}
      <section id="audit-form" className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-16 w-full relative z-10 pointer-events-auto scroll-mt-24">
        <LeadForm variant="in" />
      </section>

      {/* 8. DISCREET LUXURY WHATSAPP FLOAT */}
      <div className="fixed bottom-5 sm:bottom-6 right-5 sm:right-6 z-50 pointer-events-auto">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-black/80 border border-white/20 text-white/90 text-xs sm:text-sm font-medium backdrop-blur-2xl shadow-2xl hover:border-emerald-500/40 hover:scale-105 active:scale-95 transition-all group"
        >
          <div className="w-2 h-2 rounded-full bg-[#25D366] group-hover:scale-125 transition-transform"></div>
          <span>WhatsApp Consultation</span>
        </a>
      </div>

    </main>
  );
}