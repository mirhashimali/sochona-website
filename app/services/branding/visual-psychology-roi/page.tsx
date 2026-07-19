import type { Metadata } from "next";
import Link from "next/link";
import { Brain, TrendingUp, Diamond, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The ROI of Visual Psychology & Premium Pricing | Sochona",
  description: "An analysis of how visual architecture dictates perceived value. Discover why premium design is the ultimate price justification in saturated markets.",
};

export default function VisualPsychologyPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="mb-8">
          <Link href="/services/branding" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Branding
          </Link>
        </div>
        <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-semibold tracking-wide mb-6">
          Market Analysis
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
          The Architecture <br />of Perceived Value.
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          In a commoditized market, the best product rarely wins. The product that commands the most trust—and looks the most expensive—wins.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-24">
        <article className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">Aesthetics as a Pricing Strategy</h2>
          <p className="text-neutral-400 mb-8">
            There is a cognitive bias known as the "Halo Effect." If a user perceives a company's website or brand identity as highly polished, they subconsciously assume the company's core service is equally elite. Conversely, if a multi-million dollar business has a visual identity that looks like a $50 template, they will attract clients who negotiate over pennies. Your visual architecture is the absolute ceiling of your pricing power.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl">
              <Diamond className="w-8 h-8 text-cyan-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">The Premium Multiplier</h3>
              <p className="text-sm text-neutral-400">High-end aesthetics create an emotional moat. Clients do not question premium retainers from agencies that look like industry leaders.</p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl">
              <Brain className="w-8 h-8 text-teal-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Cognitive Fluency</h3>
              <p className="text-sm text-neutral-400">Clean typography and ample negative space reduce cognitive load, making the user's brain process your value proposition faster and more favorably.</p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl">
              <TrendingUp className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Conversion Lift</h3>
              <p className="text-sm text-neutral-400">Trust is the ultimate conversion metric. Upgrading visual identity is the most rapid way to increase your lead-to-close ratio.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-4">Engineering Trust at First Glance</h3>
          <p className="text-neutral-400">
            We do not design to make things "look pretty." We engineer visual assets based on the psychological profile of your ideal buyer. For a B2B SaaS, that means utilizing stark geometry, Swiss typography, and high-contrast neo-brutalism to communicate technical dominance. For a luxury consultant, it means serifs, muted palettes, and heavy negative space to communicate exclusivity. Every pixel is a calculated business decision.
          </p>
        </article>
      </section>

      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-cyan-500/20 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
          <h2 className="text-3xl font-bold mb-4">Command the price you deserve.</h2>
          <p className="text-neutral-400 mb-8 max-w-lg mx-auto">Let's audit your current brand identity and calculate the revenue you are losing to poor visual positioning.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-cyan-600 text-white font-bold rounded-full hover:bg-cyan-500 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)]">
            Elevate Your Positioning
          </Link>
        </div>
      </section>
    </main>
  );
}