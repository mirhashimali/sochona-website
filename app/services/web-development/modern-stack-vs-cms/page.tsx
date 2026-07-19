import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Cpu, ShieldAlert, GitBranch, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "The Architecture of Scale: Next.js vs. CMS Bloat | Sochona",
  description: "An architectural deep-dive into why high-growth enterprises are abandoning monolithic CMS platforms for type-safe, server-side rendered frameworks.",
};

export default function ModernStackPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="mb-8">
          <Link href="/services/web-development" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Web Development
          </Link>
        </div>
        <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-wide mb-6">
          Architectural Strategy
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
          The Death of <br />Monolithic CMS.
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          The WordPress era prioritized ease of installation over performance, security, and scalability. Today, high-growth businesses are choosing the modular, type-safe power of the modern React/Next.js stack.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-24">
        <article className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">The Technical Debt of "Easy"</h2>
          <p className="text-neutral-400 mb-8">
            When you build on a legacy CMS, you inherit every architectural flaw of the platform. You are reliant on hundreds of unmaintained third-party plugins just to add basic functionality. Each plugin introduces security vulnerabilities, slows down your site by loading unoptimized JavaScript, and creates a "dependency hell" that makes future updates nearly impossible without crashing the front end.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl">
              <ShieldAlert className="w-8 h-8 text-red-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Security as a Liability</h3>
              <p className="text-neutral-400">
                Legacy platforms are a primary target for automated botnets. A single unpatched plugin is all it takes for a full site takeover. Our Next.js/React architecture removes this attack surface entirely.
              </p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl">
              <GitBranch className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Type-Safe Scalability</h3>
              <p className="text-neutral-400">
                Using TypeScript prevents entire classes of runtime bugs before they ever reach production. Your infrastructure becomes a predictable, scalable, and manageable business asset rather than a fragile "black box" that requires constant maintenance.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-4">The Shift to Server-Side Rendering (SSR)</h3>
          <p className="text-neutral-400 mb-6">
            Unlike client-side frameworks that force a user's browser to build the page after it loads, we utilize advanced server-side and edge-side rendering. The HTML is prepared before it hits the network, resulting in near-instant FCP (First Contentful Paint) and significantly better search engine indexing.
          </p>
        </article>
      </section>

      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-blue-500/20 rounded-3xl p-12 relative overflow-hidden">
          <h2 className="text-3xl font-bold mb-4">Migrate to a modern engine.</h2>
          <p className="text-neutral-400 mb-8 max-w-lg mx-auto">Stop managing plugins and start scaling your application. Let's discuss your migration roadmap.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)]">
            Commission a Migration Audit
          </Link>
        </div>
      </section>
    </main>
  );
}