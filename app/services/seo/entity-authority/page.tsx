import type { Metadata } from "next";
import Link from "next/link";
import { Database, ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Entity Authority & Knowledge Graphs | Sochona",
  description: "Moving beyond keywords to entity-based indexing. How structured data powers your knowledge graph presence.",
};

export default function EntityPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="mb-8">
          <Link href="/services/seo" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm font-semibold transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to SEO
          </Link>
        </div>
        <div className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-semibold tracking-wide mb-6">
          Knowledge Engineering
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-500">Entities Over <br />Keywords.</h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto">Google doesn't index "keywords"; it indexes entities. If you aren't defining your business as an entity via Schema, you are practically invisible.</p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-24">
        <article className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">The Knowledge Graph Battlefield</h2>
          <p className="text-neutral-400 mb-8">
            SEO used to be about tricks; today it is about disambiguation. Google's Knowledge Graph wants to understand *exactly* who you are, what you do, and who trusts you. If your site is just a bunch of pages without structured context, you are forcing the algorithm to guess your identity. We don't let it guess.
          </p>

          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-3">
              <Database className="w-6 h-6" /> The Schema Layer
            </h3>
            <p className="text-neutral-300">We inject comprehensive JSON-LD structured data. We link your entity to industry concepts, author authority, and verified geographic locations. This isn't "metadata"—it's a digital resume that explicitly tells the Knowledge Graph that you are the primary authority in your field.</p>
          </div>
        </article>
      </section>

      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-emerald-500/20 rounded-3xl p-12 relative overflow-hidden">
          <h2 className="text-3xl font-bold mb-4">Establish your brand as an entity.</h2>
          <p className="text-neutral-400 mb-8 max-w-lg mx-auto">Let us architect your Knowledge Graph presence so Google recognizes you as the industry authority.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-500 transition-colors">
            Implement Schema Architecture
          </Link>
        </div>
      </section>
    </main>
  );
}