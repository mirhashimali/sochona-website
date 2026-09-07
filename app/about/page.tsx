import type { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  ArrowRight, 
  Building2, 
  TrendingUp, 
  Zap, 
  Lock, 
  HeartHandshake, 
  Globe2, 
  CheckCircle2, 
  FileCheck2 
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Sochona | Founded in Bihar, Building for Bharat",
  description: "The story behind Sochona. Founded in Bihar to empower India's small and medium businesses with sovereign digital infrastructure, sub-second web speed, and zero software rent.",
  keywords: "About Sochona, MSME digital transformation India, Udyam registered agency Bihar, Sochona founder story",
};

const commitments = [
  {
    title: "Systems Over Fragile Sites",
    desc: "We don't sell disposable ₹5,000 WordPress templates that crash after two months. We engineer custom Next.js systems that act as an automated sales engine for your business.",
    icon: Zap,
    badge: "Engineering"
  },
  {
    title: "Zero SaaS Rent & Data Sovereignty",
    desc: "Indian businesses shouldn't pay monthly per-user software fees in dollars to foreign SaaS monopolies. We build custom portals that you own 100% with your data locked on private servers.",
    icon: Lock,
    badge: "Sovereignty"
  },
  {
    title: "Ground-Reality Empathy",
    desc: "We don't design for abstract Silicon Valley boards. We build for the factory owner in Rajkot, the clinic in Patna, and the trader in Chandni Chowk who needs real customer inquiries, not vanity impressions.",
    icon: HeartHandshake,
    badge: "Commitment"
  },
  {
    title: "Speed as a Business Metric",
    desc: "In India, 85%+ of customers browse on mobile networks. We engineer sub-second load times that keep visitors on your page and convert them before they bounce.",
    icon: TrendingUp,
    badge: "Performance"
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-transparent text-white selection:bg-[#007AFF] selection:text-white relative pt-32 pb-28 px-4 sm:px-6 overflow-hidden">
      
      {/* Background Ambient Lighting */}
      <div 
        className="absolute top-20 left-1/4 w-[700px] h-[500px] pointer-events-none -z-10 blur-[150px]"
        style={{
          background: "radial-gradient(circle, rgba(255, 150, 40, 0.15) 0%, rgba(0, 122, 255, 0.08) 50%, transparent 75%)",
          mixBlendMode: "screen"
        }}
      />

      <div className="max-w-5xl mx-auto w-full relative z-10">

        {/* 1. HERO SECTION */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-black/50 border border-white/20 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-white/90 mb-6 backdrop-blur-xl shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-[#007AFF] animate-pulse"></span>
              <span>Founded in Bihar • Engineered for Bharat</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] leading-[1.18] text-balance">
              The Digital Backbone for <br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-white/70">
                India's Real Builders.
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-white/80 font-normal leading-relaxed max-w-xl mx-auto drop-shadow">
              We left the conventional tech corridors to build from the grassroots up. Sochona exists to replace fragile websites with sovereign, automated revenue infrastructure.
            </p>
          </div>
        </ScrollReveal>

        {/* 2. THE FOUNDER NARRATIVE (Father's Story & The Bihar Vision) */}
        <section className="mb-20">
          <ScrollReveal>
            <div className="bg-neutral-950/90 border border-white/15 rounded-3xl p-6 sm:p-12 backdrop-blur-2xl shadow-2xl space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>

              <div>
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#007AFF] font-bold">Genesis</span>
                <h2 className="text-2xl sm:text-4xl font-light text-white mt-1">Why We Chose to Build from Bihar</h2>
              </div>

              <div className="space-y-5 text-sm sm:text-base text-white/80 leading-relaxed font-light">
                <p>
                  Decades ago, my father—a hardworking small business owner—had to leave India to seek opportunities abroad. Like millions of Indian entrepreneurs of his generation, he was relentless and capable, but the ecosystem back home simply didn’t have the market access, technology, or digital infrastructure to support his ambitions.
                </p>
                <p>
                  Growing up watching his journey shaped everything I believe about commerce. Small and medium enterprises (MSMEs) are not just entries on a tax ledger; they are families, local employment, and the true economic heartbeat of this nation.
                </p>
                <p>
                  After studying and mastering modern software architecture, I saw a familiar tragedy repeating itself across India: <strong>63+ million small businesses were still being left behind.</strong> Local agencies sell them fragile ₹5,000 WordPress sites that crash in 3 months, while foreign SaaS conglomerates trap them into paying monthly subscriptions in USD for features they never touch.
                </p>
                <p className="text-white font-normal text-base sm:text-lg border-l-2 border-[#007AFF] pl-4 py-1 italic bg-white/[0.02] rounded-r-xl">
                  "I refused to start another vanity agency in Gurgaon or Bangalore. I chose to return home to Bihar and establish Sochona right here—at the ground level."
                </p>
                <p>
                  Sochona is our answer to the digital divide. We give Indian manufacturers, clinic owners, coaching founders, and traders the exact same enterprise-grade technology used by multinational giants—sub-second Next.js edge speed, automated WhatsApp qualification, and custom CRM systems—built with transparency and absolute code ownership.
                </p>
              </div>

              {/* Founder Sign-off */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-base font-medium text-white">Founder, Sochona</div>
                  <div className="text-xs text-white/50">Digital Infrastructure Architect • Bihar, India</div>
                </div>
                <Link
                  href="/book"
                  className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs transition-all hover:bg-neutral-200"
                >
                  Schedule a 1-on-1 Call →
                </Link>
              </div>

            </div>
          </ScrollReveal>
        </section>

        {/* 3. GOVERNMENT RECOGNITION & UDYAM COMPLIANCE (The Trust Anchor) */}
        <section className="mb-20">
          <ScrollReveal>
            <div className="bg-neutral-950/90 border border-emerald-500/25 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0 mt-1">
                  <FileCheck2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">Government Recognized Entity</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span className="text-[10px] font-mono text-white/50 uppercase">Verified MSME</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium text-white mt-1">
                    Ministry of Micro, Small & Medium Enterprises (MSME)
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 font-light mt-1">
                    Officially registered under the Government of India. Operating with full fiscal compliance and sovereign standards.
                  </p>
                </div>
              </div>

              <div className="bg-black/60 border border-white/15 px-5 py-3 rounded-2xl shrink-0 self-stretch md:self-auto text-center md:text-right">
                <div className="text-[10px] font-mono uppercase text-white/40 tracking-wider">Udyam Registration Number</div>
                <div className="text-sm sm:text-base font-mono font-bold text-emerald-400 mt-0.5 tracking-wider">
                  UDYAM-BR-26-0248887
                </div>
                <div className="text-[10px] text-white/50 mt-0.5">State of Registration: Bihar, India</div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 4. THE SOCHONA PILLARS */}
        <section className="mb-20">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#007AFF]">Operational Philosophy</span>
              <h2 className="text-2xl sm:text-4xl font-light text-white mt-2">How We Build Systems</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commitments.map((c, idx) => (
              <ScrollReveal key={idx}>
                <div className="h-full bg-neutral-950/90 border border-white/10 p-6 sm:p-8 rounded-3xl backdrop-blur-xl flex flex-col justify-between hover:border-white/20 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/80">
                        <c.icon className="w-5 h-5 text-[#007AFF]" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">{c.badge}</span>
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2">{c.title}</h3>
                    <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* 5. FINAL CALL TO ACTION */}
        <section>
          <ScrollReveal>
            <div className="bg-neutral-950/90 border border-white/15 rounded-3xl p-8 sm:p-12 text-center backdrop-blur-2xl shadow-2xl relative overflow-hidden">
              <h2 className="text-2xl sm:text-4xl font-light text-white mb-3">Ready to Modernize Your Digital Operations?</h2>
              <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto font-light mb-8">
                Let’s diagnose where your business is leaking leads and design an enterprise-grade revenue system for your team.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/book"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-semibold text-xs transition-all hover:bg-neutral-200"
                >
                  Schedule a Strategy Session
                </Link>
                <Link
                  href="/in"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-black/60 border border-white/20 text-white font-medium text-xs transition-all hover:bg-white/10"
                >
                  Explore India Infrastructure
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>

      </div>
    </main>
  );
}