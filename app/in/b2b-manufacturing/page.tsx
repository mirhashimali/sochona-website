import type { Metadata } from "next";
import Link from "next/link";
import { 
  Factory, 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Globe2, 
  TrendingUp, 
  FileSpreadsheet, 
  Zap, 
  Clock, 
  Building 
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "B2B Manufacturing & Export Growth Systems | Sochona India",
  description: "Stop relying only on B2B directories. Own your digital real estate on Google Search, capture verified international RFQs, and automate catalog dispatch via WhatsApp.",
  keywords: "B2B manufacturing digital marketing India, export lead generation India, industrial SEO India, Next.js web development for manufacturers, Sochona",
};

export default function B2BManufacturingPage() {
  const whatsappNumber = "919835182801";
  const whatsappMessage = encodeURIComponent("Namaste! I run a B2B Manufacturing / Export business in India and want to build a direct buyer acquisition system.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main className="flex flex-col items-center w-full bg-transparent text-white selection:bg-[#007AFF] selection:text-white relative overflow-hidden pb-24">
      
      {/* 1. HERO SECTION */}
      <ScrollReveal>
        <section className="max-w-4xl mx-auto px-6 pt-32 pb-16 flex flex-col items-center text-center relative z-10">
          <div className="absolute inset-0 -z-10 bg-radial from-blue-600/20 via-black/60 to-transparent blur-3xl rounded-full pointer-events-none scale-125"></div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/80 border border-blue-500/30 mb-8 backdrop-blur-xl shadow-lg">
            <Factory className="w-4 h-4 text-[#007AFF]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-blue-300">
              Indian Manufacturers & Exporters
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 drop-shadow-2xl leading-[1.15] text-balance">
            Grab The Best Real Estate on Google.<br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-[#007AFF] bg-clip-text text-transparent">
              Stop Depending on Directory Gatekeepers.
            </span>
          </h1>

          <p className="max-w-2xl text-base md:text-lg text-white/80 leading-relaxed drop-shadow-lg mb-8 text-balance bg-black/40 p-5 rounded-2xl border border-white/10 backdrop-blur-md">
            Jab tak aap sirf IndiaMART aur TradeIndia ke bharose rahoge, aapko wahi leads milengi jo 10 dusre competitors ko bhi bechi jaati hain. Hum banate hain aapka apna proprietary export system jo verified industrial buyers ko direct aapke pass lata hai.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-sm transition-all shadow-xl shadow-[#25D366]/20 flex items-center justify-center gap-2.5 hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-black" />
              Discuss Plant / Export Growth
            </a>
            <a 
              href="#audit-form" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-neutral-900/90 border border-white/20 hover:bg-neutral-800 text-white font-semibold text-sm transition-all backdrop-blur-xl flex items-center justify-center gap-2"
            >
              Request Export Audit <ArrowRight className="w-4 h-4 text-white/70" />
            </a>
          </div>
        </section>
      </ScrollReveal>

      {/* 2. VERIFIED INDUSTRY BENCHMARK METRICS */}
      <section className="w-full max-w-5xl mx-auto px-6 py-8 relative z-10">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-neutral-950/70 border border-white/10 backdrop-blur-2xl">
            <div className="p-4 border-r border-white/10 last:border-none text-center">
              <span className="text-3xl font-extrabold text-[#007AFF]">9x</span>
              <p className="text-[11px] text-white/60 mt-1 uppercase tracking-wider font-semibold">
                Higher Conversion Odds When Responding Within 5 Mins (Harvard Business Review)
              </p>
            </div>
            <div className="p-4 border-r border-white/10 last:border-none text-center">
              <span className="text-3xl font-extrabold text-emerald-400">98%</span>
              <p className="text-[11px] text-white/60 mt-1 uppercase tracking-wider font-semibold">
                WhatsApp Open Rate in India (vs 18% for Email RFQs)
              </p>
            </div>
            <div className="p-4 border-r border-white/10 last:border-none text-center">
              <span className="text-3xl font-extrabold text-purple-400">100%</span>
              <p className="text-[11px] text-white/60 mt-1 uppercase tracking-wider font-semibold">
                Exclusive Leads (Zero Shared Inquiries)
              </p>
            </div>
            <div className="p-4 text-center">
              <span className="text-3xl font-extrabold text-amber-400">&lt; 1s</span>
              <p className="text-[11px] text-white/60 mt-1 uppercase tracking-wider font-semibold">
                Global Edge Latency for Overseas Importers
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. THE PROBLEM WE SOLVE FOR FACTORY OWNERS */}
      <section className="max-w-5xl mx-auto px-6 py-16 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#007AFF]">Factory & Export Diagnostic</span>
            <h2 className="text-2xl md:text-4xl font-bold text-white mt-2">B2B Lead Generation Ki 3 Badi Kamzoriyaan</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-neutral-950/80 border border-white/10 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-xl bg-red-500/15 text-red-400 flex items-center justify-center mb-4">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">1. The Shared Directory Trap</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Directory portals ek hi RFQ ko aapke saath 8 dusre manufacturers ko bhejte hain. Client sirf sabse saste price wale ko order deta hai, aapka margin khatam.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-neutral-950/80 border border-white/10 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">2. Slow Response to Overseas Buyers</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Dubai, US ya Europe ka buyer quote mangta hai, lekin aapki sales team subah aakar reply karti hai. Tab tak buyer kisi aur vendor se sampark kar chuka hota hai.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-neutral-950/80 border border-white/10 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center mb-4">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">3. Outdated Catalog Websites</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                10 saal puraani WordPress site jisme heavy PDF download nahi hote. International buyers pehli nazar me site band kar dete hain.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. THE SOCHONA B2B INFRASTRUCTURE */}
      <section className="max-w-5xl mx-auto px-6 py-16 relative z-10">
        <ScrollReveal>
          <div className="bg-neutral-950/80 border border-white/15 rounded-3xl p-8 md:p-12 backdrop-blur-xl">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#007AFF]">The Solution</span>
              <h2 className="text-2xl md:text-4xl font-bold text-white mt-2 mb-3">Hum Aapka Private B2B Engine Kaise Banate Hain?</h2>
              <p className="text-white/70 text-sm">
                Har component ko industrial buyers ki psychology ke hisaab se engineer kiya gaya hai.
              </p>
            </div>

            <div className="space-y-4 text-xs md:text-sm text-white/80">
              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-1">Global SEO & Search Generative Authority (AEO)</h4>
                  <p className="text-white/65 text-xs leading-relaxed">
                    Google par exact high-value keywords rank karte hain (e.g., <em>"precision CNC components exporter India"</em>) taaki international purchase managers seedha aapko dhoondhein. Learn more about our <Link href="/services/seo" className="text-[#007AFF] underline">SEO Hub</Link> and <Link href="/services/seo/entity-authority" className="text-[#007AFF] underline">Entity Authority Strategy</Link>.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-1">Next.js Edge Architecture (Sub-1s Global Speed)</h4>
                  <p className="text-white/65 text-xs leading-relaxed">
                    Aapka digital product catalog Germany, Texas ya Tokyo me 0.8 seconds me open hota hai through global CDN caching. Explore our <Link href="/services/web-development" className="text-emerald-400 underline">Web Development Hub</Link> and <Link href="/services/web-development/edge-delivery-performance" className="text-emerald-400 underline">Edge Performance Stack</Link>.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-1">24/7 WhatsApp & Email RFQ Automation</h4>
                  <p className="text-white/65 text-xs leading-relaxed">
                    Buyer form bharta hai aur 30 seconds ke andar uske WhatsApp par verified technical specifications aur WhatsApp brochure dispatch ho jata hai. Learn about our <Link href="/services/automation" className="text-purple-400 underline">Automation Capabilities</Link> and <Link href="/in/whatsapp-automation" className="text-purple-400 underline">WhatsApp Lead Engine</Link>.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-1">Custom Lead Portal (Zero Monthly SaaS Fees)</h4>
                  <p className="text-white/65 text-xs leading-relaxed">
                    Aapka private dispatch portal jahan saari factory inquiries 1 jagah rehti hain. Team ke follow-up logs track hote hain without per-user subscription fees. Discover our <Link href="/services/automation/custom-crm-vs-saas" className="text-amber-400 underline">Custom CRM Architecture</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 5. AUDIT FORM SECTION */}
      <section id="audit-form" className="max-w-3xl mx-auto px-6 py-16 w-full relative z-10 scroll-mt-24">
        <ScrollReveal>
          <div className="bg-neutral-950/90 border border-blue-500/30 rounded-3xl p-8 md:p-10 backdrop-blur-2xl shadow-2xl relative">
            <div className="text-center mb-8">
              <span className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-[#007AFF] text-xs font-bold uppercase tracking-widest rounded-full mb-3">
                Industrial Diagnostic
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Audit Your Manufacturing Growth Funnel</h3>
              <p className="text-sm text-white/70 max-w-lg mx-auto">
                Submit your current plant website or export catalog link. We will review your international search rankings and tell you why direct buyers aren't contacting you.
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

      {/* 6. PERSISTENT FLOATING WHATSAPP BUTTON (DESKTOP & MOBILE) */}
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