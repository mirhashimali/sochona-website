import type { Metadata } from "next";
import Link from "next/link";
import { 
  Calendar, MessageCircle, Zap, ArrowRight, Building2, Stethoscope, 
  GraduationCap, ShoppingBag, Factory, Sparkles, Check, X, ArrowDownRight, 
  ArrowUpRight, Wallet, CheckCircle2
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import LeadForm from "@/components/LeadForm";
import SpeedRace from "@/components/SpeedRace";

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

const levers = [
  { 
    icon: ArrowDownRight, 
    t: "Zero Ad Paisa Waste", 
    b: "Sirf high-intent Google search buyers ko target karte hain. Fake clicks aur 'galti se dab gaya' callers band. Same budget me double sales inquiries.", 
    c: "text-blue-400", 
    ring: "border-blue-500/30 bg-blue-500/10" 
  },
  { 
    icon: ArrowUpRight, 
    t: "Instant WhatsApp Booking", 
    b: "Customer ke request karte hi 24/7 automated agent turant catalog, pricing aur meeting calendar bhej deta hai. Grahak thanda hone se pehle deal lock.", 
    c: "text-emerald-400", 
    ring: "border-emerald-500/30 bg-emerald-500/10" 
  },
  { 
    icon: Wallet, 
    t: "Har Mahine Ka SaaS Bill Zero", 
    b: "Aapka apna custom lead dashboard. Kisi bhi third-party CRM ko har mahine dollars me license fees dene ki zaroorat nahi. 100% proprietary code ownership.", 
    c: "text-amber-400", 
    ring: "border-amber-500/30 bg-amber-500/10" 
  },
];

const stats = [
  { v: "3.4×", k: "Genuine Buyer Inquiries", c: "text-gradient-growth" },
  { v: "41.8%", k: "Customer Acquisition Cost Kam", c: "text-gradient-blue" },
  { v: "+210%", k: "Confirmed Client Meetings", c: "text-gradient-growth" },
  { v: "16 hrs", k: "Admin Ka Manual Kaam Bachaya", c: "text-gradient-blue" },
];

const cases = [
  { 
    sector: "B2B Manufacturing", 
    t: "WordPress Se Sub-Second Next.js + RFQ Funnel", 
    b: "Lagging 7-second site ko edge code par badla. Bounce rate 68% ghata aur direct wholesale bulk orders WhatsApp par aane lage.", 
    kpi: "+210%", 
    kl: "Monthly Verified Inquiries", 
    c: "text-emerald-400" 
  },
  { 
    sector: "D2C & Retail Brands", 
    t: "High-Speed Mobile Funnel + Server-Side Tracking", 
    b: "Jio aur Airtel 4G par instant catalog delivery. Cart abandonment 40% kam aur direct UPI checkout rate double.", 
    kpi: "−41.8%", 
    kl: "Cost Per Acquisition (CAC)", 
    c: "text-blue-400" 
  },
  { 
    sector: "Real Estate & Clinics", 
    t: "Custom Private CRM + WhatsApp Follow-Up", 
    b: "Excel sheets ki tension khatam. 1-click dashboard jahan har customer ka status, call recording aur auto-reply sync hota hai.", 
    kpi: "16 hrs/wk", 
    kl: "Manual Busywork Removed", 
    c: "text-amber-400" 
  },
];

const comparisonRows = [
  ["Mobile 4G/5G Speed", "6–8s on slow shared WordPress", "< 0.8s on Edge Next.js"],
  ["After-Hours Leads", "Excel sheet me padi rehti hain", "WhatsApp bot 10s me catalog bhejta hai"],
  ["Lead Quality", "80% job seeker ya fake number", "OTP / Intent verified serious buyers"],
  ["Monthly CRM Cost", "₹10,000–₹25,000 har mahine SaaS rent", "₹0. One-time build, 100% aapka"],
  ["Developer Support", "Payment lene ke baad call nahi uthana", "100% GitHub code & full admin control"],
  ["Business Scaling", "Zyada sales staff hire karo", "Automated system se 10x volume sambhalo"],
];

export default function IndiaGrowthPage() {
  const whatsappNumber = "919835182801";
  const whatsappMessage = encodeURIComponent("Namaste Sochona! I run a business in India and want to audit my website and get verified buyer leads on WhatsApp.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main className="flex flex-col items-center w-full bg-transparent text-white selection:bg-[#007AFF] selection:text-white relative overflow-x-clip pb-40">

      {/* Google Schema.org Structured Data (RESTORED) */}
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

      {/* GLOBAL AMBIENT LAYER */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="bg-grid absolute inset-0 opacity-80" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[550px] bg-gradient-to-b from-[#007AFF]/20 via-[#25D366]/10 to-transparent blur-[140px] animate-pulse-glow" />
      </div>

      {/* 1. HERO SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-12 flex flex-col items-center text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-blue-500/30 mb-6 backdrop-blur-xl shadow-[0_0_25px_rgba(0,122,255,0.2)]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-blue-300">
            Bharat Business Architecture Edition
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-5 leading-[1.15] max-w-3xl text-balance">
          Junk Leads Band. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300">
            Verified Buyers Seedha Aapke WhatsApp Par.
          </span>
        </h1>

        <p className="max-w-2xl text-sm sm:text-base text-white/80 leading-relaxed mb-8 px-2">
          No slow WordPress templates. No monthly software ki jhanjhat. Hum banate hain sub-second Next.js web systems jo serious paying customers seedha aapke <span className="text-[#25D366] font-bold">WhatsApp</span> aur private CRM dashboard par deliver karte hain.
        </p>

        {/* Luminous Light-Up Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-12">
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto relative group inline-flex items-center justify-center px-8 py-4 rounded-full text-black font-extrabold text-sm overflow-hidden transition-all duration-300 active:scale-95 ring-glow-emerald bg-[#25D366] hover:bg-[#20ba59]"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5 text-black" />
              <span>Talk on WhatsApp Directly</span>
              <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-white/30 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
          </a>

          <a 
            href="#audit-form" 
            className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/[0.04] hover:bg-white/10 border border-white/20 text-white font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg backdrop-blur-md flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 text-[#007AFF]" />
            <span>Free Website Audit</span>
          </a>
        </div>

        {/* ⚡ LIVE ENGINE HUD (Restored purely as UI layout) */}
        <div className="w-full max-w-xl p-4 sm:p-5 rounded-2xl sm:rounded-3xl glass-strong text-left relative overflow-hidden border border-white/20 shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-white font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                SOCHONA PIPELINE // LIVE INQUIRY
              </span>
            </div>
            <span className="text-cyan-400 bg-cyan-500/15 border border-cyan-500/30 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold">
              MUMBAI EDGE (38ms)
            </span>
          </div>

          <div className="space-y-2.5 font-mono text-xs">
            <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.04]">
              <div className="flex items-center gap-2">
                <span className="text-white/40 text-[11px]">[00:01.2s]</span>
                <span className="text-white font-medium">Google Search Intent</span>
              </div>
              <span className="text-emerald-400 font-bold text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30">VERIFIED</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.04]">
              <div className="flex items-center gap-2">
                <span className="text-white/40 text-[11px]">[00:01.8s]</span>
                <span className="text-white font-medium">WhatsApp Bot Dispatched</span>
              </div>
              <span className="text-teal-300 font-bold text-[10px] px-2 py-0.5 rounded bg-teal-500/15 border border-teal-500/30">1.2s</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.04]">
              <div className="flex items-center gap-2">
                <span className="text-white/40 text-[11px]">[00:02.4s]</span>
                <span className="text-white font-medium">Lead Portal Sync</span>
              </div>
              <span className="text-purple-300 font-bold text-[10px] px-2 py-0.5 rounded bg-purple-500/15 border border-purple-500/30">ZERO SAAS</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. RESEARCH BENCHMARKS */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 relative z-10">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 p-4 sm:p-6 rounded-2xl sm:rounded-3xl glass-strong border border-white/15">
            <div className="text-center p-2 border-r border-white/10">
              <span className="text-2xl sm:text-3xl font-extrabold text-blue-400">9×</span>
              <p className="text-[11px] sm:text-xs text-white/70 mt-1 uppercase font-bold">Fast Reply = 9x Deals</p>
            </div>
            <div className="text-center p-2 md:border-r border-white/10">
              <span className="text-2xl sm:text-3xl font-extrabold text-teal-300">&lt; 0.8s</span>
              <p className="text-[11px] sm:text-xs text-white/70 mt-1 uppercase font-bold">Jio & Airtel 4G Speed</p>
            </div>
            <div className="text-center p-2 border-r border-white/10">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400">98%</span>
              <p className="text-[11px] sm:text-xs text-white/70 mt-1 uppercase font-bold">WhatsApp Open Rate</p>
            </div>
            <div className="text-center p-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-amber-300">100%</span>
              <p className="text-[11px] sm:text-xs text-white/70 mt-1 uppercase font-bold">Code Ownership</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. INTERACTIVE SPEED RACE */}
      <SpeedRace lang="in" />

      {/* 4. GROUND REALITY MATRIX (Restored) */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-16 relative z-10 border-t border-white/10">
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="eyebrow text-[#007AFF]">The Honest Truth</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Normal Agencies vs The Sochona Engine
            </h2>
            <p className="text-white/70 text-sm mt-2">Kyun purane retainers se aapka digital paisa barbaad ho raha hai:</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="glass-strong overflow-x-auto rounded-3xl border border-white/15 shadow-2xl">
            <div className="grid grid-cols-[1.2fr_1fr_1fr] min-w-[600px] border-b border-white/10 bg-white/[0.03] px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-white/50">
              <span>Metric</span>
              <span className="text-ember font-bold">Purana Freelancer / Agency</span>
              <span className="text-emerald-400 font-bold">The Sochona System</span>
            </div>
            {comparisonRows.map(([k, a, b]) => (
              <div key={k} className="grid grid-cols-[1.2fr_1fr_1fr] min-w-[600px] items-center gap-3 border-b border-white/10 px-5 py-4 text-xs sm:text-sm last:border-b-0">
                <span className="font-semibold text-white">{k}</span>
                <span className="flex items-start gap-1.5 text-white/60">
                  <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ember" /><span>{a}</span>
                </span>
                <span className="flex items-start gap-1.5 text-white/95 font-medium">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" /><span>{b}</span>
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* 5. 3 MSME REVENUE LEVERS */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 relative z-10 border-t border-white/10">
        <div className="grid gap-6 md:grid-cols-3">
          {levers.map((l) => {
            const Icon = l.icon;
            return (
              <ScrollReveal key={l.t}>
                <div className="glass h-full rounded-3xl p-7 flex flex-col justify-between hover:border-white/30 transition-all">
                  <div>
                    <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${l.ring} ${l.c} mb-5`}>
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{l.t}</h3>
                    <p className="text-sm leading-relaxed text-white/70">{l.b}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.k} className="glass-strong p-6 sm:p-7 rounded-2xl text-center border border-white/10">
              <div className={`text-3xl sm:text-4xl font-extrabold ${s.c}`}>{s.v}</div>
              <div className="mt-2 text-xs sm:text-sm text-white/70 font-bold">{s.k}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. VERIFIED MSME CASE STUDIES */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 relative z-10 border-t border-white/10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="eyebrow text-[#007AFF]">Real Results</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Indian Businesses Ke Verified Results</h2>
            <p className="text-white/70 text-sm mt-2">Jab website sirf dikhne ke liye nahi, sales lane ke liye banti hai:</p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {cases.map((c) => (
            <ScrollReveal key={c.t}>
              <article className="glass h-full flex flex-col justify-between rounded-3xl p-7 hover:border-white/30 transition-all">
                <div>
                  <span className="eyebrow text-blue-400">{c.sector}</span>
                  <h4 className="mt-3 text-lg font-bold text-white leading-snug">{c.t}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{c.b}</p>
                </div>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <div className={`text-3xl font-extrabold ${c.c}`}>{c.kpi}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-white/50">{c.kl}</div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 7. INDUSTRY VERTICALS (RESTORED) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 w-full relative z-10">
        <ScrollReveal>
          <div className="glass-strong rounded-3xl p-6 sm:p-10 border border-white/15">
            <div className="max-w-xl mb-8">
              <span className="eyebrow text-[#007AFF]">Industry Specialization</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">Sectors Where We Deploy Systems</h2>
              <p className="text-white/70 text-xs sm:text-sm mt-1">Har sector ka customer alag tarike se behave karta hai. Click any sector to view specialized funnels:</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5">
              <Link href="/in/b2b-manufacturing" className="block group">
                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all text-center flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-2.5 text-blue-400 group-hover:scale-110 transition-transform">
                    <Factory className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-xs sm:text-sm">B2B & Factories</h4>
                </div>
              </Link>

              <Link href="/in/healthcare" className="block group">
                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all text-center flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-2.5 text-emerald-400 group-hover:scale-110 transition-transform">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-xs sm:text-sm">Clinics & Doctors</h4>
                </div>
              </Link>

              <Link href="/in/real-estate" className="block group">
                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all text-center flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center mb-2.5 text-purple-400 group-hover:scale-110 transition-transform">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-xs sm:text-sm">Real Estate Brokers</h4>
                </div>
              </Link>

              <Link href="/in/education" className="block group">
                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-500/50 hover:bg-amber-500/5 transition-all text-center flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-2.5 text-amber-400 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-xs sm:text-sm">Coaching & Institutes</h4>
                </div>
              </Link>

              <Link href="/in/d2c-brands" className="block group col-span-2 md:col-span-1">
                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-rose-500/50 hover:bg-rose-500/5 transition-all text-center flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center mb-2.5 text-rose-400 group-hover:scale-110 transition-transform">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-xs sm:text-sm">D2C & Retail Brands</h4>
                </div>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 8. FAQ (RESTORED) */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pt-8 pb-16 w-full relative z-10">
        <ScrollReveal>
          <div className="text-center mb-8">
            <span className="eyebrow text-[#007AFF]">Clear Answers</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            <div className="p-5 sm:p-6 rounded-2xl glass-strong border border-white/10">
              <h3 className="text-sm sm:text-base font-bold text-white mb-2 flex items-center justify-between">
                <span>1. Kya hume website aur code ka 100% ownership milta hai?</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Haan, 100%. Hum proprietary agency lock-in me vishwas nahi rakhte. Project complete hote hi GitHub repository aur domain controls ka pura access aapko mil jata hai.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl glass-strong border border-white/10">
              <h3 className="text-sm sm:text-base font-bold text-white mb-2 flex items-center justify-between">
                <span>2. Local freelancers se aap alag kaise hain?</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Freelancers sirf template paste karte hain jo 6-8 second leti hai. Hum ad targeting, Next.js code, aur WhatsApp qualification ko ek single pipeline me connect karte hain taaki aapko sirf verified paying inquiries milein.
              </p>
            </div>
            
            <div className="p-5 sm:p-6 rounded-2xl glass-strong border border-white/10">
              <h3 className="text-sm sm:text-base font-bold text-white mb-2 flex items-center justify-between">
                <span>3. Kya hume monthly software fees deni hogi?</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Nahi. Hum cloud serverless edge setup use karte hain. Koi expensive monthly per-user SaaS license fees nahi hoti.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 9. AUDIT FORM */}
      <section id="audit-form" className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-16 w-full relative z-10 scroll-mt-28 border-t border-white/10">
        <div className="text-center mb-6">
          <span className="eyebrow text-[#007AFF]">Zero Risk</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Get Free 5-Minute Video Audit</h2>
          <p className="text-white/70 text-xs sm:text-sm mt-1">Apna website link daalein. Hum live speed aur lead bottlenecks check karke video bhejenge.</p>
        </div>
        <LeadForm variant="in" />
      </section>

      {/* 10. DISCREET LUXURY WHATSAPP FLOATING BUTTON */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-neutral-900/95 border border-[#25D366]/40 text-white font-bold text-xs sm:text-sm backdrop-blur-2xl ring-glow-emerald hover:scale-105 active:scale-95 transition-all shadow-[0_10px_40px_rgba(37,211,102,0.3)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]"></span>
          </span>
          <span>WhatsApp Us (+91 9835182801)</span>
        </a>
      </div>

    </main>
  );
}