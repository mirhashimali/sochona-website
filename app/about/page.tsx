import type { Metadata } from "next";
import Link from "next/link";
import { 
  Zap, Lock, HeartHandshake, TrendingUp, 
  FileCheck2, ArrowRight, ShieldCheck, MapPin
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Sochona | Founded in Bihar, Building for Bharat",
  description: "The story behind Sochona. Founded in Patna to empower India's small and medium businesses with sovereign digital infrastructure and sub-second web speed.",
  keywords: "About Sochona, MSME digital transformation India, Udyam registered agency Bihar, Sochona founder story",
};

const commitments = [
  {
    title: "Systems Over Fragile Sites",
    desc: "We don't sell disposable templates that crash under traffic. We engineer Next.js systems that act as an automated, tireless sales engine.",
    icon: Zap,
    badge: "Engineering"
  },
  {
    title: "Zero SaaS Rent & Sovereignty",
    desc: "Indian businesses shouldn't pay per-user USD fees to foreign monopolies. We build custom portals where you own 100% of your data.",
    icon: Lock,
    badge: "Sovereignty"
  },
  {
    title: "Ground-Reality Empathy",
    desc: "Built for the factory owner in Rajkot and the clinic in Patna who need actual customer inquiries, not vanity marketing metrics.",
    icon: HeartHandshake,
    badge: "Commitment"
  },
  {
    title: "Speed as a Metric",
    desc: "With 85%+ of India browsing on mobile, we engineer sub-second load times that lock in visitors before they have a chance to bounce.",
    icon: TrendingUp,
    badge: "Performance"
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-transparent text-white selection:bg-[#007AFF] selection:text-white relative pt-32 pb-28 px-4 sm:px-6 overflow-hidden">
      
      {/* GLOBAL AMBIENT LAYER */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="bg-grid absolute inset-0 opacity-80" />
        <div className="absolute top-20 left-1/4 w-[700px] h-[500px] bg-gradient-to-r from-orange-500/10 via-[#007AFF]/10 to-transparent blur-[150px] animate-pulse-glow" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">

        {/* 1. HERO SECTION */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[10px] sm:text-xs font-mono tracking-widest uppercase text-white/80 mb-6 backdrop-blur-md shadow-2xl">
              <span className="w-1.5 h-1.5 rounded-full bg-[#007AFF] animate-ping" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#007AFF] absolute" />
              <span>Founded in Bihar • Engineered for Bharat</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] text-balance">
              The Digital Backbone for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007AFF] to-cyan-300">
                India's Real Builders.
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-white/70 font-medium leading-relaxed max-w-2xl mx-auto">
              We bypassed the conventional tech corridors to build from the grassroots up. Sochona exists to replace fragile websites with sovereign, automated revenue infrastructure.
            </p>
          </div>
        </ScrollReveal>

        {/* 2. THE FOUNDER NARRATIVE */}
        <section className="mb-24">
          <ScrollReveal>
            <div className="glass-strong border border-white/15 rounded-[2rem] p-8 sm:p-14 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row gap-12 items-center">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

              <div className="lg:w-2/3 space-y-6 text-sm sm:text-base text-white/80 leading-relaxed relative z-10">
                <div>
                  <span className="eyebrow text-orange-400">The Genesis</span>
                  <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 mb-6">Why We Chose Patna Over Silicon Valley</h2>
                </div>
                
                <p>
                  Decades ago, my father had to leave India to seek opportunities abroad. Like millions of Indian entrepreneurs, he was relentless, but the local ecosystem lacked the infrastructure to scale his ambitions.
                </p>
                <p>
                  After mastering modern software architecture, I saw a familiar tragedy repeating itself: <strong>63+ million small businesses were still being left behind.</strong> Local agencies sell them fragile websites that crash, while foreign SaaS conglomerates trap them into paying monthly subscriptions in USD.
                </p>
                
                <blockquote className="border-l-2 border-[#007AFF] pl-6 py-2 italic text-white/95 font-medium bg-gradient-to-r from-[#007AFF]/10 to-transparent rounded-r-2xl">
                  "I refused to start another vanity agency in Gurgaon or Bangalore. I chose to return home to Patna and establish Sochona right here—at the ground level."
                </blockquote>
                
                <p>
                  Sochona is our answer to the digital divide. We give Indian manufacturers, clinics, and traders the exact same enterprise-grade technology used by multinational giants.
                </p>
              </div>

              <div className="lg:w-1/3 flex flex-col items-center lg:items-start space-y-6 relative z-10 w-full">
                <div className="w-full bg-white/[0.02] border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#007AFF] to-purple-600 p-0.5 shrink-0">
                      <div className="w-full h-full rounded-full relative overflow-hidden bg-black">
                        <Image 
                          src="/hashim.jpeg"
                          alt="Mir Hashim Ali - Founder of Sochona"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">Mir Hashim Ali</div>
                      <div className="text-xs text-[#007AFF] font-mono uppercase tracking-wider">Founder & Architect</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/50 mb-6">
                    <MapPin className="w-3.5 h-3.5" /> Patna City, Bihar
                  </div>
                  <Link href="/book" className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-all shadow-lg hover:shadow-white/20">
                    Schedule a 1-on-1 Call <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </section>

        {/* 3. GOVERNMENT RECOGNITION */}
        <section className="mb-24">
          <ScrollReveal>
            <div className="glass-strong border-emerald-500/30 rounded-[2rem] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-start gap-5 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                  <FileCheck2 className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">Government Recognized</span>
                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Ministry of MSME</h3>
                  <p className="text-sm text-white/60 mt-1 max-w-md">
                    Operating with complete fiscal compliance and sovereign data standards under the Government of India.
                  </p>
                </div>
              </div>

              <div className="bg-black/80 border border-emerald-500/20 px-6 py-4 rounded-2xl shrink-0 text-center relative z-10">
                <div className="text-[10px] font-mono uppercase text-white/40 tracking-widest mb-1">Udyam Registration</div>
                <div className="text-lg font-mono font-bold text-emerald-400 tracking-wider">
                  UDYAM-BR-26-0248887
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 4. THE BENTO PILLARS */}
        <section className="mb-24">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="eyebrow text-[#007AFF]">Operational Philosophy</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">How We Build Systems</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commitments.map((c, idx) => (
              <ScrollReveal key={idx}>
                <div className="h-full glass-strong border border-white/10 p-8 rounded-3xl flex flex-col justify-between hover:border-white/30 hover:-translate-y-1 transition-all group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#007AFF] group-hover:scale-110 group-hover:bg-[#007AFF]/10 transition-all">
                        <c.icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 group-hover:text-white/70 transition-colors">{c.badge}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{c.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">{c.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}