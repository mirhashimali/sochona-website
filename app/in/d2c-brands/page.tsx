import type { Metadata } from "next";
import Link from "next/link";
import { 
  ShoppingBag, 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight, 
  Truck, 
  Zap, 
  Clock, 
  ShieldCheck, 
  XCircle, 
  RotateCcw,
  TrendingDown,
  Sparkles
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "D2C Brand Scaling & RTO Reduction Systems | Sochona India",
  description: "Cut Cash-on-Delivery (COD) RTO by 30% with automated WhatsApp verification. Sub-800ms Headless Next.js eCommerce speed for Indian retail brands.",
  keywords: "D2C digital marketing India, ecommerce conversion rate optimization India, COD RTO reduction WhatsApp, headless Next.js ecommerce India, Sochona",
};

export default function D2CBrandsPage() {
  const whatsappNumber = "919835182801";
  const whatsappMessage = encodeURIComponent("Namaste! I run an eCommerce / D2C brand in India and want to scale ROAS, reduce RTO, and audit my store speed.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main className="flex flex-col items-center w-full bg-transparent text-white selection:bg-rose-500 selection:text-white relative overflow-hidden pb-24">
      
      {/* 1. HERO SECTION */}
      <ScrollReveal>
        <section className="max-w-4xl mx-auto px-6 pt-32 pb-16 flex flex-col items-center text-center relative z-10">
          <div className="absolute inset-0 -z-10 bg-radial from-rose-600/20 via-black/60 to-transparent blur-3xl rounded-full pointer-events-none scale-125"></div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/80 border border-rose-500/30 mb-8 backdrop-blur-xl shadow-lg">
            <ShoppingBag className="w-4 h-4 text-rose-400" />
            <span className="text-xs font-semibold tracking-wider uppercase text-rose-300">
              Indian Direct-to-Consumer & Retail Brands
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 drop-shadow-2xl leading-[1.15] text-balance">
            Stop Bleeding Profits on COD RTO.<br />
            <span className="bg-gradient-to-r from-rose-400 via-orange-300 to-[#007AFF] bg-clip-text text-transparent">
              Scale ROAS With Edge Infrastructure.
            </span>
          </h1>

          <p className="max-w-2xl text-base md:text-lg text-white/80 leading-relaxed drop-shadow-lg mb-8 text-balance bg-black/40 p-5 rounded-2xl border border-white/10 backdrop-blur-md">
            Heavy Shopify themes jo 4G mobile par 5 second lagati hain aur 30% Cash-on-Delivery RTO aapka sara ad profit kha jate hain. Hum banate hain sub-second Headless Next.js storefronts aur automated WhatsApp order confirmations jo RTO ko dramatically reduce karte hain.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-sm transition-all shadow-xl shadow-[#25D366]/20 flex items-center justify-center gap-2.5 hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-black" />
              Discuss D2C Scaling & RTO
            </a>
            <a 
              href="#audit-form" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-neutral-900/90 border border-white/20 hover:bg-neutral-800 text-white font-semibold text-sm transition-all backdrop-blur-xl flex items-center justify-center gap-2"
            >
              Request Store Audit <ArrowRight className="w-4 h-4 text-white/70" />
            </a>
          </div>
        </section>
      </ScrollReveal>

      {/* 2. D2C INDUSTRY BENCHMARKS */}
      <section className="w-full max-w-5xl mx-auto px-6 py-8 relative z-10">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-neutral-950/70 border border-white/10 backdrop-blur-2xl">
            <div className="p-4 border-r border-white/10 last:border-none text-center">
              <span className="text-3xl font-extrabold text-rose-400">25-35%</span>
              <p className="text-[11px] text-white/60 mt-1 uppercase tracking-wider font-semibold">Average COD Return-to-Origin (RTO) in India</p>
            </div>
            <div className="p-4 border-r border-white/10 last:border-none text-center">
              <span className="text-3xl font-extrabold text-emerald-400">&lt; 14%</span>
              <p className="text-[11px] text-white/60 mt-1 uppercase tracking-wider font-semibold">Reduced RTO Rate via Automated WhatsApp Verification</p>
            </div>
            <div className="p-4 border-r border-white/10 last:border-none text-center">
              <span className="text-3xl font-extrabold text-[#007AFF]">&lt; 800ms</span>
              <p className="text-[11px] text-white/60 mt-1 uppercase tracking-wider font-semibold">Storefront Load Time on Mobile 4G/5G</p>
            </div>
            <div className="p-4 text-center">
              <span className="text-3xl font-extrabold text-amber-400">+8.4%</span>
              <p className="text-[11px] text-white/60 mt-1 uppercase tracking-wider font-semibold">Conversion Rate Lift per 0.1s Speed Gain (Deloitte)</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. D2C PAIN POINTS IN INDIA */}
      <section className="max-w-5xl mx-auto px-6 py-16 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-400">eCommerce Diagnostic</span>
            <h2 className="text-2xl md:text-4xl font-bold text-white mt-2">D2C Brands Ka Profit Kahan Doob Raha Hai?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-neutral-950/80 border border-white/10 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-xl bg-red-500/15 text-red-400 flex items-center justify-center mb-4">
                <RotateCcw className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">1. The COD RTO Disaster</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Customer timepass me Cash-on-Delivery order karta hai, par delivery boy jab ghar pahunchta hai to bolta hai <em>"Mujhe nahi chahiye."</em> Aapko forward aur reverse shipping dono ka loss hota hai.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-neutral-950/80 border border-white/10 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">2. Sluggish Mobile Store Speed</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Shopify par 20 apps install karne ke baad store 5 second lagati hai khulne me. Jio user 3 second me back dabata hai, ad click waste hota hai.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-neutral-950/80 border border-white/10 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center mb-4">
                <TrendingDown className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">3. Ad Tracking Loss (Meta Pixel Gaps)</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                iOS privacy updates ke baad Meta pixel aadhe purchases track nahi kar pata. Meta algorithm ko pata hi nahi chalta kisko ad dikhana hai, aur CAC skyrocket ho jati hai.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. THE SOCHONA D2C GROWTH ENGINE */}
      <section className="max-w-5xl mx-auto px-6 py-16 relative z-10">
        <ScrollReveal>
          <div className="bg-neutral-950/80 border border-white/15 rounded-3xl p-8 md:p-12 backdrop-blur-xl">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-rose-400">The D2C Stack</span>
              <h2 className="text-2xl md:text-4xl font-bold text-white mt-2 mb-3">Hum D2C Brands Ko Kaise Scale Karte Hain?</h2>
            </div>

            <div className="space-y-4 text-xs md:text-sm text-white/80">
              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-1">Automated WhatsApp COD Confirmation & Address Doctor</h4>
                  <p className="text-white/65 text-xs leading-relaxed">
                    Order aate hi WhatsApp par automated message jata hai. Customer se 1-click confirmation aur exact landmark liya jata hai. Fake orders instantly cancel hote hain before courier dispatch. Learn about <Link href="/in/whatsapp-automation" className="text-emerald-400 underline">WhatsApp Automation</Link>.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-1">Sub-800ms Headless Next.js Storefront</h4>
                  <p className="text-white/65 text-xs leading-relaxed">
                    Shopify backend ke aage custom Next.js frontend lagate hain jo globally sub-second khulta hai. Zero render-blocking script lag, instant product filtering, aur lightning-fast checkout. Learn more in our <Link href="/services/web-development" className="text-rose-400 underline">Web Development Hub</Link>.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-1">Server-Side CAPI Tracking (100% Attribution)</h4>
                  <p className="text-white/65 text-xs leading-relaxed">
                    First-party server-side Conversions API deploy karte hain jo ad blockers ko bypass karta hai aur Meta algorithm ko exact high-LTV buyers feed karta hai. Discover our <Link href="/services/performance-marketing/attribution-in-privacy-era" className="text-blue-400 underline">Attribution Stack</Link>.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-1">Abandoned Cart Recovery via WhatsApp</h4>
                  <p className="text-white/65 text-xs leading-relaxed">
                    Checkout par drop-off hote hi 15 minutes baad WhatsApp par personalized offer aur direct checkout link auto-send hoti hai. Recovers up to 18% of lost revenue without manual team calls.
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
          <div className="bg-neutral-950/90 border border-rose-500/30 rounded-3xl p-8 md:p-10 backdrop-blur-2xl shadow-2xl relative">
            <div className="text-center mb-8">
              <span className="inline-block px-3 py-1 bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-widest rounded-full mb-3">
                eCommerce Diagnostic
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Audit Your D2C Store Speed & RTO Gaps</h3>
              <p className="text-sm text-white/70 max-w-lg mx-auto">
                Enter your website URL and monthly order volume. We will send a private 5-minute video analyzing your checkout speed and RTO leakage.
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