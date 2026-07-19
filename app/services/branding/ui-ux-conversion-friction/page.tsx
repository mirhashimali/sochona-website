import type { Metadata } from "next";
import Link from "next/link";
import { MousePointerClick, Crosshair, Hourglass, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "UI/UX: Engineering Frictionless Conversions | Sochona",
  description: "Stop treating your website like a digital brochure. Learn the science of UX architecture and how to systematically remove friction from the checkout process.",
};

export default function UIUXPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="mb-8">
          <Link href="/services/branding" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Branding
          </Link>
        </div>
        <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-wide mb-6">
          Technical Deep Dive
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
          Your Website is <br />Not a Brochure.
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          It is a digital salesperson working 24/7. If your interface is confusing, cluttered, or difficult to navigate, you are actively turning away revenue.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-24">
        <article className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">The Mathematics of Friction</h2>
          <p className="text-neutral-400 mb-8">
            User Experience (UX) is not an art; it is a highly measurable science. Every additional field in a lead form, every confusing navigation dropdown, and every slow-loading animation introduces "friction." In digital commerce, friction equals drop-off. The goal of high-end UI/UX architecture is to pave a frictionless, inevitable path from the moment a user lands on the page to the moment they convert.
          </p>

          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-3">
              <Crosshair className="w-6 h-6" /> The Conversion Matrix
            </h3>
            <ul className="space-y-6 text-neutral-300">
              <li>
                <strong className="text-white block mb-1">Visual Hierarchy & F-Patterns</strong>
                We design interfaces based on eye-tracking studies. We guide the user's focus exactly where we want it—prioritizing high-leverage copy and stark, contrasting Calls-To-Action (CTAs).
              </li>
              <li>
                <strong className="text-white block mb-1">Micro-Interactions & Feedback Loops</strong>
                When a user hovers over a card or clicks a button, the system must respond instantly. These subtle animations provide psychological validation, making the interface feel alive, premium, and trustworthy.
              </li>
              <li>
                <strong className="text-white block mb-1">Mobile-First Lethality</strong>
                Over 60% of B2B traffic and 80% of consumer traffic is mobile. We do not "adapt" desktop designs for phones. We engineer brutal, thumb-friendly mobile experiences that load in milliseconds and convert flawlessly.
              </li>
            </ul>
          </div>
        </article>
      </section>

      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-blue-500/20 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
          <h2 className="text-3xl font-bold mb-4">Eliminate the friction.</h2>
          <p className="text-neutral-400 mb-8 max-w-lg mx-auto">Stop losing customers to confusing interfaces. Let us engineer a frictionless path to revenue.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(59,130,246,0.2)]">
            Audit Your User Experience
          </Link>
        </div>
      </section>
    </main>
  );
}