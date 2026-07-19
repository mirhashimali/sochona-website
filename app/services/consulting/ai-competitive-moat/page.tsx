import type { Metadata } from "next";
import Link from "next/link";
import { Cpu, ShieldCheck, Zap, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "AI as a Competitive Moat | Sochona",
  description: "An executive analysis on how to deploy artificial intelligence for actual operational leverage, rather than treating it as a marketing gimmick.",
};

export default function AILeveragePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="mb-8">
          <Link href="/services/consulting" className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 text-sm font-semibold transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Consulting
          </Link>
        </div>
        <div className="inline-block px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500 text-sm font-semibold tracking-wide mb-6">
          Advanced Intelligence
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500">
          Beyond the <br />AI Gimmick.
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Using ChatGPT to write emails is not an AI strategy. Building proprietary language models directly into your operational workflow to cut overhead by 40% is a competitive moat.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-24">
        <article className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">The Difference Between Tools and Systems</h2>
          <p className="text-neutral-400 mb-8">
            The market is currently flooded with "wrapper" applications—companies slapping a UI on top of OpenAI's API and calling it a revolution. For an enterprise, relying on public, off-the-shelf tools exposes sensitive data and offers zero proprietary advantage. Real leverage comes from integrating machine learning into the deep architecture of your business to solve highly specific, expensive problems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl">
              <Zap className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Workflow Injection</h3>
              <p className="text-sm text-neutral-400">We integrate LLMs into your existing CRM and ERP to automatically categorize support tickets, draft localized responses, and trigger routing.</p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl">
              <Cpu className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Predictive Analytics</h3>
              <p className="text-sm text-neutral-400">Replacing human guesswork with models trained on your historical data to predict churn risk, inventory demands, and optimal pricing elasticity.</p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl">
              <ShieldCheck className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Data Sovereignty</h3>
              <p className="text-sm text-neutral-400">Architecting isolated models where your proprietary data never leaves your environment, ensuring absolute corporate security.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-4">The Implementation Framework</h3>
          <p className="text-neutral-400">
            We act as your AI advisory board. We map your current human capital allocation, identify highly repetitive cognitive tasks, and deploy bespoke AI agents to execute them. By turning operational bottlenecks into automated compute costs, you scale revenue without scaling headcount.
          </p>
        </article>
      </section>

      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-orange-500/20 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>
          <h2 className="text-3xl font-bold mb-4">Build your competitive moat.</h2>
          <p className="text-neutral-400 mb-8 max-w-lg mx-auto">Let us identify the exact areas in your business where custom AI integration will drive the highest ROI.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-500 transition-colors shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_40px_rgba(249,115,22,0.5)]">
            Commission an AI Audit
          </Link>
        </div>
      </section>
    </main>
  );
}