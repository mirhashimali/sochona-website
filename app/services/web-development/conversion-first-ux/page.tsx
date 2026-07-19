import type { Metadata } from "next";
import Link from "next/link";
import { MousePointer2, Eye, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Conversion-First UX Engineering | Sochona",
  description: "User Experience as a revenue driver. We engineer interfaces that guide users toward transactions with ruthless precision.",
};

export default function UXPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="mb-8">
          <Link href="/services/web-development" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Web Development
          </Link>
        </div>
        <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-wide mb-6">
          UX Engineering
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
          UI is Engineering.
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          If your buttons aren't guiding your user toward a transaction, your design is failing. We treat UI/UX as a high-stakes engineering discipline focused on maximizing revenue, not aesthetic decoration.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-24">
        <article className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">The Mechanics of Frictionless Conversion</h2>
          <p className="text-neutral-400 mb-8">
            Every element on a landing page carries an "attention cost." We optimize your UI by stripping back decorative fluff, utilizing color contrast to dictate visual focus, and applying F-pattern reading logic to place your CTAs exactly where users are most likely to click. We aren't making your site "look good"—we are engineering the path to your bank account.
          </p>

          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-3">
              <Eye className="w-6 h-6" /> The Conversion Matrix
            </h3>
            <ul className="space-y-6 text-neutral-300">
              <li>
                <strong className="text-white block mb-1">Visual Hierarchy & F-Patterns</strong>
                We design interfaces based on eye-tracking studies. We guide the user's focus—prioritizing high-leverage copy and stark, contrasting CTAs.
              </li>
              <li>
                <strong className="text-white block mb-1">Micro-Interactions</strong>
                When a user hovers over a card or clicks a button, the system responds instantly. These subtle interactions provide psychological validation, making the interface feel alive and trustworthy.
              </li>
              <li>
                <strong className="text-white block mb-1">Mobile-First Lethality</strong>
                We don't "adapt" desktop designs for phones. We engineer thumb-friendly, mobile-first interfaces that convert just as aggressively as their desktop counterparts.
              </li>
            </ul>
          </div>
        </article>
      </section>

      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-blue-500/20 rounded-3xl p-12 relative overflow-hidden">
          <h2 className="text-3xl font-bold mb-4">Eliminate the friction.</h2>
          <p className="text-neutral-400 mb-8 max-w-lg mx-auto">Let us engineer a frictionless path to revenue for your business.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-colors">
            Audit Your User Experience
          </Link>
        </div>
      </section>
    </main>
  );
}