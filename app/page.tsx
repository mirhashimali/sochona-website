import type { Metadata } from "next";
import { Megaphone, Repeat, Cpu } from "lucide-react";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import ScrollReveal from "@/components/ScrollReveal";

// This injects critical SEO data into the <head> for Google
export const metadata: Metadata = {
  title: "Sochona | The AI & Digital Growth Agency",
  description: "Stop buying websites. Build systems. We create hyper-profitable digital infrastructure that attracts traffic, converts clicks, and automates operations.",
  keywords: "Digital marketing agency, AI automation, custom CRM, performance marketing, SEO, web development",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      
      {/* Hero Section */}
      <ScrollReveal>
        <section className="max-w-5xl mx-auto px-6 pt-16 pb-20 flex flex-col items-center text-center pointer-events-none">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-white/20 mb-8 backdrop-blur-md shadow-lg pointer-events-auto hover:bg-black/60 transition-colors">
            <span className="w-2 h-2 rounded-full bg-[#007AFF] animate-pulse"></span>
            <span className="text-xs font-semibold tracking-widest uppercase text-white/90">The AI Agency</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 drop-shadow-xl pointer-events-auto">
            Stop buying websites.<br />Build systems.
          </h1>
          
          <p className="max-w-2xl text-lg md:text-xl text-white/80 font-medium leading-relaxed drop-shadow-md pointer-events-auto">
            Your website shouldn't just look pretty. It should be a hyper-profitable digital infrastructure that attracts eyeballs, converts clicks, and automates your operations while you sleep.
          </p>
        </section>
      </ScrollReveal>

      {/* Audit Form Section (Already wrapped internally in LeadForm.tsx) */}
      <section className="max-w-3xl mx-auto px-6 pb-24 w-full">
        <LeadForm />
      </section>

      {/* Framework Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-white/10 bg-black/40 backdrop-blur-sm rounded-t-[3rem] pointer-events-auto w-full">
        
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4 tracking-tight drop-shadow-md">Our Growth Framework</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto font-medium">We design end-to-end ecosystems engineered around a single metric: your bottom-line revenue.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Megaphone, title: "1. Attract", desc: "Precision-targeted campaigns that pull high-intent traffic directly to your front door.", slug: "attract" },
              { icon: Repeat, title: "2. Convert", desc: "CRO & AI Chatbots that qualify leads and relentlessly book appointments 24/7.", slug: "convert" },
              { icon: Cpu, title: "3. Run Smarter", desc: "Custom Mini-CRMs and automated workflows that let you scale without breaking.", slug: "run-smarter" }
            ].map((pillar, idx) => (
              <Link href={`/${pillar.slug}`} key={idx} className="block group">
                <div className="bg-black/60 border border-white/10 p-8 rounded-3xl group-hover:bg-black/80 transition-all duration-300 group-hover:-translate-y-2 h-full backdrop-blur-md shadow-xl">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#007AFF] to-[#5E5CE6] flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform">
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-[#007AFF] transition-colors">{pillar.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>

      </section>
    </main>
  );
}