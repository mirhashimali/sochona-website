import type { Metadata } from "next";
import Link from "next/link";
import { PenTool, Palette, Eye, Fingerprint, LayoutTemplate, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Brand Identity & Design | Sochona",
  description: "We don't just design logos. We build comprehensive brand identities engineered for market positioning, trust, and aggressive conversion.",
};

export default function BrandingPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400">Visual Psychology</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
          Don't just look pretty. <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-500">
            Command authority.
          </span>
        </h1>
        <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
          A logo doesn't make you money; trust does. We engineer visual identities rooted in consumer psychology to position your business as the premium authority in your market. Stop blending in with generic templates.
        </p>
      </section>

      {/* The Strategy Section */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>
          
          <h2 className="text-3xl font-bold mb-8 text-white relative z-10">Design engineered for ROI.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="space-y-4 text-neutral-400 text-lg leading-relaxed">
              <p>
                Most designers focus purely on aesthetics. We focus on conversion. Every color choice, typography pairing, and visual asset we create is designed to lower the friction between your customer and the checkout button.
              </p>
              <p>
                Your brand is the visual infrastructure of your business. If it looks cheap, your customers will expect cheap prices. We build premium identities that justify high-ticket pricing.
              </p>
            </div>
            <div className="space-y-4 text-neutral-400 text-lg leading-relaxed">
              <ul className="space-y-4 mt-2 text-neutral-300 font-medium">
                <li className="flex items-center gap-3"><Fingerprint className="w-6 h-6 text-cyan-400" /> Unique Market Positioning</li>
                <li className="flex items-center gap-3"><Eye className="w-6 h-6 text-cyan-400" /> High-Trust Visual Architecture</li>
                <li className="flex items-center gap-3"><LayoutTemplate className="w-6 h-6 text-cyan-400" /> Seamless Cross-Platform Consistency</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Logo & Identity Systems",
              desc: "Bespoke logo design, versatile icon sets, and comprehensive identity systems that scale perfectly from a mobile app icon to a billboard.",
              icon: PenTool
            },
            {
              title: "Brand Guidelines",
              desc: "The blueprint of your business. We provide exact hex codes, typography rules, and spacing guidelines to keep your team completely aligned.",
              icon: Palette
            },
            {
              title: "UI/UX Design",
              desc: "Wireframing and high-fidelity prototyping. We design user interfaces that are not only beautiful but ruthlessly optimized for conversions.",
              icon: LayoutTemplate
            },
            {
              title: "Marketing Assets",
              desc: "Ad creatives, social media templates, and pitch decks designed to capture attention instantly in a crowded feed.",
              icon: Sparkles
            },
            {
              title: "Psychological Branding",
              desc: "We analyze your target demographic and utilize color theory and typography to subconsciously communicate trust and authority.",
              icon: Eye
            },
            {
              title: "Rebranding & Migration",
              desc: "Outgrown your current look? We execute seamless brand overhauls to elevate your market positioning without alienating your existing base.",
              icon: Fingerprint
            }
          ].map((feature, idx) => (
            <div key={idx} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
              <feature.icon className="w-10 h-10 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-neutral-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-3xl mx-auto px-6 text-center">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none"></div>
          <h2 className="text-3xl font-bold mb-4 relative z-10">Stop looking like everyone else.</h2>
          <p className="text-neutral-400 mb-8 relative z-10">Let's build a brand identity that commands premium pricing.</p>
          <Link href="/contact" className="inline-block relative z-10 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors">
            Start the Transformation
          </Link>
        </div>
      </section>
    </main>
  );
}