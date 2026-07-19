import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, UserCheck, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Local SEO & Geographic Monopoly | Sochona",
  description: "How to engineer a geographic monopoly. GBP optimization and local intent dominance for businesses that rely on regional traffic.",
};

export default function LocalSEOPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="mb-8">
          <Link href="/services/seo" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm font-semibold transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to SEO
          </Link>
        </div>
        <div className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-semibold tracking-wide mb-6">
          Geographic Domination
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-500">
          Geographic <br />Monopoly.
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Local search is a zero-sum game. You are either in the Map Pack, or you are invisible. We engineer the trust signals required to ensure you occupy the top three slots in your region.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-24">
        <article className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">The Proximity Paradox</h2>
          <p className="text-neutral-400 mb-8">
            Google's local algorithm is predicated on three pillars: Relevance, Distance, and Prominence. While you cannot control distance, you can engineer the other two. Local SEO is no longer just about filling out a GBP profile; it's about building a digital footprint that proves your physical authority.
          </p>

          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-3">
              <MapPin className="w-6 h-6" /> The Authority Loop
            </h3>
            <ul className="space-y-6 text-neutral-300">
              <li>
                <strong className="text-white block mb-1">NAP+W Consistency</strong>
                Consistency isn't just about Name, Address, Phone. It’s about Website authority signals. We ensure your business entity is validated across hundreds of local directories, creating an undeniable geographic footprint.
              </li>
              <li>
                <strong className="text-white block mb-1">Review Velocity & Semantics</strong>
                A 5-star rating is basic; review <em>velocity</em> and <em>keyword density</em> within those reviews are the actual ranking factors. We build automated systems that capture client feedback and guide them to use the high-intent keywords relevant to your niche.
              </li>
              <li>
                <strong className="text-white block mb-1">Geographic Context</strong>
                We optimize your site's on-page elements to explicitly claim geographic territories, building out geo-targeted landing pages that capture "Near Me" intent across your entire service area.
              </li>
            </ul>
          </div>
        </article>
      </section>

      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-emerald-500/20 rounded-3xl p-12 relative overflow-hidden">
          <h2 className="text-3xl font-bold mb-4">Own your city.</h2>
          <p className="text-neutral-400 mb-8 max-w-lg mx-auto">Let us conduct a local audit and build the strategy required to push your competitors out of the map pack.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-500 transition-colors">
            Dominate Local Search
          </Link>
        </div>
      </section>
    </main>
  );
}