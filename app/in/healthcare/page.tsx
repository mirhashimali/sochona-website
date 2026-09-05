import type { Metadata } from "next";
import Link from "next/link";
import { 
  Stethoscope, 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  XCircle, 
  Users,
  Activity
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Healthcare & Clinic Patient Acquisition Systems | Sochona India",
  description: "High-intent patient appointment booking systems for Indian clinics, IVF centres, and specialists. Cut patient no-shows with automated WhatsApp reminders.",
  keywords: "clinic digital marketing India, patient lead generation, healthcare SEO India, doctor website development, WhatsApp clinic booking, Sochona",
};

export default function HealthcarePage() {
  const whatsappNumber = "919835182801";
  const whatsappMessage = encodeURIComponent("Namaste! I run a clinic / hospital in India and want to build a verified patient appointment booking system.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main className="flex flex-col items-center w-full bg-transparent text-white selection:bg-emerald-500 selection:text-black relative overflow-hidden pb-24">
      
      {/* 1. HERO SECTION */}
      <ScrollReveal>
        <section className="max-w-4xl mx-auto px-6 pt-32 pb-16 flex flex-col items-center text-center relative z-10">
          <div className="absolute inset-0 -z-10 bg-radial from-emerald-600/20 via-black/60 to-transparent blur-3xl rounded-full pointer-events-none scale-125"></div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/80 border border-emerald-500/30 mb-8 backdrop-blur-xl shadow-lg">
            <Stethoscope className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-semibold tracking-wider uppercase text-emerald-300">
              Specialist Clinics & Healthcare Networks
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 drop-shadow-2xl leading-[1.15] text-balance">
            Stop Getting Free Treatment Inquiries.<br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-[#007AFF] bg-clip-text text-transparent">
              Book Verified Patient Consultations.
            </span>
          </h1>

          <p className="max-w-2xl text-base md:text-lg text-white/80 leading-relaxed drop-shadow-lg mb-8 text-balance bg-black/40 p-5 rounded-2xl border border-white/10 backdrop-blur-md">
            Generic Facebook ads clinic ka phone to bajwa dete hain, par 70% log bolte hain <em>"Consultation free hai kya?"</em> Hum banate hain local Google authority aur WhatsApp screening systems jo sirf serious, paying patients ko aapki clinic me book karte hain.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-sm transition-all shadow-xl shadow-[#25D366]/20 flex items-center justify-center gap-2.5 hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-black" />
              Discuss Clinic Patient Flow
            </a>
            <a 
              href="#audit-form" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-neutral-900/90 border border-white/20 hover:bg-neutral-800 text-white font-semibold text-sm transition-all backdrop-blur-xl flex items-center justify-center gap-2"
            >
              Request Clinic Audit <ArrowRight className="w-4 h-4 text-white/70" />
            </a>
          </div>
        </section>
      </ScrollReveal>

      {/* 2. INDUSTRY BENCHMARKS */}
      <section className="w-full max-w-5xl mx-auto px-6 py-8 relative z-10">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-neutral-950/70 border border-white/10 backdrop-blur-2xl">
            <div className="p-4 border-r border-white/10 last:border-none text-center">
              <span className="text-3xl font-extrabold text-emerald-400">35%</span>
              <p className="text-[11px] text-white/60 mt-1 uppercase tracking-wider font-semibold">Average Patient No-Show Rate Reduced Via WhatsApp Reminders</p>
            </div>
            <div className="p-4 border-r border-white/10 last:border-none text-center">
              <span className="text-3xl font-extrabold text-[#007AFF]">#1 Local</span>
              <p className="text-[11px] text-white/60 mt-1 uppercase tracking-wider font-semibold">Google Maps Ranking For "Doctor Near Me" Searches</p>
            </div>
            <div className="p-4 border-r border-white/10 last:border-none text-center">
              <span className="text-3xl font-extrabold text-purple-400">2 Mins</span>
              <p className="text-[11px] text-white/60 mt-1 uppercase tracking-wider font-semibold">Average Slot Confirmation Speed via Automated Chatbot</p>
            </div>
            <div className="p-4 text-center">
              <span className="text-3xl font-extrabold text-amber-400">100%</span>
              <p className="text-[11px] text-white/60 mt-1 uppercase tracking-wider font-semibold">Private Patient Data Protection (No Data Leakage)</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. CLINIC PAIN POINTS */}
      <section className="max-w-5xl mx-auto px-6 py-16 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Clinic Diagnostic</span>
            <h2 className="text-2xl md:text-4xl font-bold text-white mt-2">Doctors & Clinic Owners Ki 3 Badi Pareshaniyaan</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-neutral-950/80 border border-white/10 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-xl bg-red-500/15 text-red-400 flex items-center justify-center mb-4">
                <XCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">1. High No-Show Rates</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Patient appointment to book kar leta hai par time par clinic nahi pahunchta. Receptionist manual calls karti reh jati hai aur doctor ka slot waste hota hai.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-neutral-950/80 border border-white/10 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">2. Weak Google Map Presence</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Aapki clinic ke 5km radius me jab koi <em>"Best dentist"</em> ya <em>"Orthopedic doctor near me"</em> dhoondhta hai, competitor ka naam pehle aata hai.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-neutral-950/80 border border-white/10 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">3. Unqualified Tele-Calling</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Agency 200 leads deti hai, par reception staff din bhar unhe samjhane me laga rehta hai jo treatment afford hi nahi kar sakte.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. THE SOCHONA HEALTHCARE SYSTEM */}
      <section className="max-w-5xl mx-auto px-6 py-16 relative z-10">
        <ScrollReveal>
          <div className="bg-neutral-950/80 border border-white/15 rounded-3xl p-8 md:p-12 backdrop-blur-xl">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">The Healthcare Blueprint</span>
              <h2 className="text-2xl md:text-4xl font-bold text-white mt-2 mb-3">Hum Aapki Clinic Ke Liye Kya Deploy Karte Hain?</h2>
            </div>

            <div className="space-y-4 text-xs md:text-sm text-white/80">
              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-1">Local 3-Pack Google Maps Dominance</h4>
                  <p className="text-white/65 text-xs leading-relaxed">
                    Aapke local pin-code me Google Business Profile ko systematically rank karte hain taaki emergency aur high-intent patients sabse pehle aapko call karein. Learn more in our <Link href="/services/seo/local-monopoly" className="text-emerald-400 underline">Local Monopoly Hub</Link>.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-1">WhatsApp Pre-Consultation Screening & Slot Booking</h4>
                  <p className="text-white/65 text-xs leading-relaxed">
                    Patient click karte hi WhatsApp bot poochta hai unka primary symptom aur consultation preference. Serious slot select hote hi automated calendar reminder schedule ho jata hai. Learn about <Link href="/in/whatsapp-automation" className="text-blue-400 underline">WhatsApp Automation</Link>.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-1">Automated 2-Hour & 24-Hour Reminder Triggers</h4>
                  <p className="text-white/65 text-xs leading-relaxed">
                    Consultation se 24 ghante pehle aur 2 ghante pehle WhatsApp par Google Maps clinic directions aur prep instructions automatically bheje jate hain. Result: No-show rate 35% tak drop hota hai.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-1">Mobile Next.js Speed (Under 1s On 4G)</h4>
                  <p className="text-white/65 text-xs leading-relaxed">
                    Aapke clinic ki website Jio aur Airtel par instant khulti hai, allowing patients in pain to book immediately without frustrating page freezes. Explore our <Link href="/services/web-development" className="text-amber-400 underline">Next.js Web Stack</Link>.
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
          <div className="bg-neutral-950/90 border border-emerald-500/30 rounded-3xl p-8 md:p-10 backdrop-blur-2xl shadow-2xl relative">
            <div className="text-center mb-8">
              <span className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest rounded-full mb-3">
                Healthcare Diagnostic
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Audit Your Clinic's Patient Booking Flow</h3>
              <p className="text-sm text-white/70 max-w-lg mx-auto">
                Enter your clinic name, city, and website. We will send a private 5-minute video analyzing your local Google Maps ranking and booking friction.
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
                Seedha WhatsApp Par Baat Karein (+91 9835182801) →
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