import type { Metadata } from "next";
import Link from "next/link";
import { FileWarning, Clock, Terminal, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Human Capital Crisis: Zero-Touch Administration | Sochona",
  description: "An analysis of operational drag. How scaling businesses are replacing manual data entry with orchestrated webhook architectures.",
};

export default function DocumentAutomationPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="mb-8">
          <Link href="/services/automation" className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 text-sm font-semibold transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Automation
          </Link>
        </div>
        <div className="inline-block px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-sm font-semibold tracking-wide mb-6">
          Operational Strategy
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-rose-400">
          The End of <br />Context Switching.
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Human capital is too expensive to be utilized for data entry. The most profitable companies treat document generation and invoicing as API triggers, not administrative tasks.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-24">
        <article className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">The Invisible Margin Killer</h2>
          <p className="text-neutral-400 mb-8">
            Operational drag scales silently. When an agency handles 5 clients a month, manually drafting a proposal or formatting a Stripe invoice takes 20 minutes. When that scales to 50 clients, you are suddenly bleeding dozens of hours a week on "busywork." This creates a severe context-switching tax on your top performers, pulling them away from high-leverage activities like strategy and closing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl relative overflow-hidden">
              <FileWarning className="w-8 h-8 text-pink-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">The Liability of Manual Input</h3>
              <p className="text-neutral-400">
                Every time a human copies data from an email into a Word document or billing software, a failure point is introduced. Pricing errors, wrong clauses, and delayed send-times directly impact cash flow.
              </p>
            </div>
            
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl relative overflow-hidden">
              <Terminal className="w-8 h-8 text-rose-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Orchestrated Webhooks</h3>
              <p className="text-neutral-400">
                We engineer middleware that listens to your operations. Move a Trello card to "Closed"? The system immediately triggers a webhook that formats a PDF contract via API and dispatches it for e-signature.
              </p>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">Zero-Touch Revenue Collection</h3>
          <p className="text-neutral-400">
            The standard operating procedure of the future is frictionless. When a client signs a digital contract, the same system should inherently parse that signature event, calculate the upfront deposit, generate a localized invoice, and send the payment link. We build the digital nervous system that makes this a reality.
          </p>
        </article>
      </section>

      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-pink-500/20 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-50"></div>
          <h2 className="text-3xl font-bold mb-4">Engineering efficiency.</h2>
          <p className="text-neutral-400 mb-8 max-w-lg mx-auto">Let us map your administrative chokepoints and replace them with automated pipelines.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-pink-600 text-white font-bold rounded-full hover:bg-pink-500 transition-colors shadow-[0_0_20px_rgba(219,39,119,0.3)] hover:shadow-[0_0_40px_rgba(219,39,119,0.5)]">
            Audit Your Workflows
          </Link>
        </div>
      </section>
    </main>
  );
}