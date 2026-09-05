import type { Metadata } from "next";
import Link from "next/link";
import { 
  GraduationCap, 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  XCircle, 
  Users,
  Award,
  PhoneCall
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Education & Coaching Admission Growth Systems | Sochona India",
  description: "Stop wasting admission ad budget on students asking for free PDFs. Capture verified parent inquiries and automate counseling walk-ins for Indian institutes.",
  keywords: "coaching institute marketing India, student lead generation, education digital marketing, JEE NEET coaching ads India, IELTS lead generation, Sochona",
};

export default function EducationPage() {
  const whatsappNumber = "919835182801";
  const whatsappMessage = encodeURIComponent("Namaste! I run an educational institute / coaching academy in India and want to build an automated admission counseling system.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main className="flex flex-col items-center w-full bg-transparent text-white selection:bg-amber-500 selection:text-black relative overflow-hidden pb-24">
      
      {/* 1. HERO SECTION */}
      <ScrollReveal>
        <section className="max-w-4xl mx-auto px-6 pt-32 pb-16 flex flex-col items-center text-center relative z-10">
          <div className="absolute inset-0 -z-10 bg-radial from-amber-600/20 via-black/60 to-transparent blur-3xl rounded-full pointer-events-none scale-125"></div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/80 border border-amber-500/30 mb-8 backdrop-blur-xl shadow-lg">
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-300">
              Coaching Academies & Higher Ed Institutes
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 drop-shadow-2xl leading-[1.15] text-balance">
            Stop Getting Free PDF Downloaders.<br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-[#007AFF] bg-clip-text text-transparent">
              Book Verified Parent Walk-Ins.
            </span>
          </h1>

          <p className="max-w-2xl text-base md:text-lg text-white/80 leading-relaxed drop-shadow-lg mb-8 text-balance bg-black/40 p-5 rounded-2xl border border-white/10 backdrop-blur-md">
            Admission season me Facebook aur Instagram ads par 500 leads aati hain, par counselors bolte hain <em>"Koi call nahi utha raha."</em> Hum banate hain local Google authority aur WhatsApp screening funnels jo serious parents ko verified fee structure aur direct counseling session book karke dete hain.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-sm transition-all shadow-xl shadow-[#25D366]/20 flex items-center justify-center gap-2.5 hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-black" />
              Discuss Admission Inquiries
            </a>
            <a 
              href="#audit-form" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-neutral-900/90 border border-white/20 hover:bg-neutral-800 text-white font-semibold text-sm transition-all backdrop-blur-xl flex items-center justify-center gap-2"
            >
              Request Academy Audit <ArrowRight className="w-4 h-4 text-white/70" />
            </a>
          </div>
        </section>
      </ScrollReveal>

      {/* 2. EDUCATION INDUSTRY BENCHMARK METRICS */}
      <section className="w-full max-w-5xl mx-auto px-6 py-8 relative z-10">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-neutral-950/70 border border-white/10 backdrop-blur-2xl">
            <div className="p-4 border-r border-white/10 last:border-none text-center">
              <span className="text-3xl font-extrabold text-amber-400">70%</span>
              <p className="text-[11px] text-white/60 mt-1 uppercase tracking-wider font-semibold">Leads Go Cold If Not Contacted Within 15 Mins</p>
            </div>
            <div className="p-4 border-r border-white/10 last:border-none text-center">
              <span className="text-3xl font-extrabold text-emerald-400">98%</span>
              <p className="text-[11px] text-white/60 mt-1 uppercase tracking-wider font-semibold">WhatsApp Open Rate For Syllabus & Fee Structures</p>
            </div>
            <div className="p-4 border-r border-white/10 last:border-none text-center">
              <span className="text-3xl font-extrabold text-[#007AFF]">3.6x</span>
              <p className="text-[11px] text-white/60 mt-1 uppercase tracking-wider font-semibold">Higher Show-Up Rate For Campus / Branch Walk-Ins</p>
            </div>
            <div className="p-4 text-center">
              <span className="text-3xl font-extrabold text-purple-400">0</span>
              <p className="text-[11px] text-white/60 mt-1 uppercase tracking-wider font-semibold">Fake Numbers (Real-Time OTP / WhatsApp Verification)</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. PAIN POINTS IN EDUCATION MARKETING */}
      <section className="max-w-5xl mx-auto px-6 py-16 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Academy Diagnostic</span>
            <h2 className="text-2xl md:text-4xl font-bold text-white mt-2">Admission Campaigns Me 60% Budget Kahan Barbaad Hota Hai?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-neutral-950/80 border border-white/10 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-xl bg-red-500/15 text-red-400 flex items-center justify-center mb-4">
                <XCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">1. The "Free Material" Hunters</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Students Instagram ad dekh kar <em>"Previous Year Question Paper"</em> download karte hain. Unka intention admission lene ka nahi hota, par aapke counselor ka pura din waste hota hai.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-neutral-950/80 border border-white/10 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">2. Counselor Calling Delay</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Parent shaam 8 baje inquiry submit karta hai, lekin academy se call agle din 12 baje jata hai. Tab tak parent 2 dusre competitor institutes me enquiry kar chuka hota hai.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-neutral-950/80 border border-white/10 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">3. Weak Local City Rankings</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Aapke city me jab koi search karta hai <em>"Best coaching institute near me"</em>, competitor ka Google Business Profile pehle aata hai.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. THE SOCHONA EDUCATION SYSTEM */}
      <section className="max-w-5xl mx-auto px-6 py-16 relative z-10">
        <ScrollReveal>
          <div className="bg-neutral-950/80 border border-white/15 rounded-3xl p-8 md:p-12 backdrop-blur-xl">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">The Admission Engine</span>
              <h2 className="text-2xl md:text-4xl font-bold text-white mt-2 mb-3">Hum Coaching Academies Ke Liye Kya Deploy Karte Hain?</h2>
            </div>

            <div className="space-y-4 text-xs md:text-sm text-white/80">
              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-1">Local City SEO & Google Maps Dominance</h4>
                  <p className="text-white/65 text-xs leading-relaxed">
                    Aapke city aur nearby districts me Google Search par #1 rank karte hain taaki serious parents organic search se direct call karein. Learn more in our <Link href="/services/seo/local-monopoly" className="text-amber-400 underline">Local Monopoly Strategy</Link>.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-1">Instant WhatsApp Syllabus & Fee Structure Delivery</h4>
                  <p className="text-white/65 text-xs leading-relaxed">
                    Parent inquiry karte hi 30 seconds ke andar official WhatsApp message jata hai jisme batch dates, faculty credentials, aur fee concessions auto-delivered hote hain. Learn about <Link href="/in/whatsapp-automation" className="text-emerald-400 underline">WhatsApp Automation</Link>.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-1">Scholarship Test / Counseling Slot Booking</h4>
                  <p className="text-white/65 text-xs leading-relaxed">
                    Parent direct WhatsApp par scholarship test ya branch walk-in time slot select karta hai. Counselor ko live alert aur parent ko Google Maps navigation link instant bheja jata hai.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-1">Custom Counselor CRM (Zero Monthly Per-User Fees)</h4>
                  <p className="text-white/65 text-xs leading-relaxed">
                    Aapka apna private admission dashboard jahan har lead ka status (Follow-up done, Walk-in booked, Admission confirmed) live visible hota hai without paying thousands in monthly SaaS fees. Explore our <Link href="/services/automation/custom-crm-vs-saas" className="text-purple-400 underline">Custom CRM Stack</Link>.
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
                Academy Diagnostic
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Audit Your Institute's Admission Funnel</h3>
              <p className="text-sm text-white/70 max-w-lg mx-auto">
                Submit your academy website and course details. We will send a private 5-minute video breakdown of where you are losing potential admissions.
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