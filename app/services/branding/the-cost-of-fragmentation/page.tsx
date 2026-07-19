import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, Layers, Unlink, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Cost of Brand Fragmentation | Sochona",
  description: "How inconsistent visual systems across touchpoints actively bleed market trust, and why enterprise uniformity is critical for scaling.",
};

export default function FragmentationPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="mb-8">
          <Link href="/services/branding" className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 text-sm font-semibold transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Branding
          </Link>
        </div>
        <div className="inline-block px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-sm font-semibold tracking-wide mb-6">
          Operational Strategy
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-400">
          The Silent Margin <br />Killer.
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          When your website looks like 2024, your sales deck looks like 2018, and your social media is a collage of Canva templates, the market sees a disorganized company.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-24">
        <article className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">The Trust Deficit</h2>
          <p className="text-neutral-400 mb-8">
            Scaling businesses often suffer from rapid, decentralized asset creation. The marketing team hires a freelancer for an ad campaign, the sales team edits a proposal document in a hurry, and suddenly the brand fractures. This fragmentation introduces micro-frictions in the buyer's journey. When a prospect moves from an Instagram ad to a landing page, any disjointed visual cues subconsciously trigger suspicion.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl relative overflow-hidden">
              <AlertTriangle className="w-8 h-8 text-teal-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Subconscious Abandonment</h3>
              <p className="text-neutral-400">
                A disjointed user journey forces the brain to constantly reassess if it is in the right place. This cognitive dissonance directly increases bounce rates and reduces conversion velocity.
              </p>
            </div>
            
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl relative overflow-hidden">
              <Layers className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Enterprise Uniformity</h3>
              <p className="text-neutral-400">
                We construct strict Design Systems. From web components to presentation decks, we establish a centralized visual truth. Every touchpoint becomes a compounding reinforcement of your authority.
              </p>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">Building a Unifying Framework</h3>
          <p className="text-neutral-400">
            A brand is not a logo; it is a system of behaviors. We deliver comprehensive identity architectures—defining exact typographic hierarchies, rigid color spaces, and precise grid systems. We equip your internal teams with the blueprints required to scale content creation rapidly without ever breaking the visual integrity of the enterprise.
          </p>
        </article>
      </section>

      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-teal-500/20 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-50"></div>
          <h2 className="text-3xl font-bold mb-4">Unify your market presence.</h2>
          <p className="text-neutral-400 mb-8 max-w-lg mx-auto">Let us consolidate your fractured assets into a single, lethal brand identity.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-teal-600 text-white font-bold rounded-full hover:bg-teal-500 transition-colors shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_40px_rgba(20,184,166,0.5)]">
            Standardize Your Brand
          </Link>
        </div>
      </section>
    </main>
  );
}