import type { Metadata } from "next";
import Link from "next/link";
import { BrainCircuit, Zap, TrendingUp, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About Sochona | Digital Transformation Experts",
  description: "Sochona is a digital transformation agency helping businesses across healthcare, law, and retail scale through high-performance tech and marketing.",
};

const principles = [
  {
    title: "Systems Over Sites",
    desc: "We don't build digital brochures. We build scalable systems that function as an extension of your sales team.",
    icon: BrainCircuit,
  },
  {
    title: "Data-First Execution",
    desc: "Every design choice and marketing spend is backed by data, not guesswork. We optimize for ROI, always.",
    icon: TrendingUp,
  },
  {
    title: "Velocity & Speed",
    desc: "In digital, speed is currency. Our tech stack is engineered for sub-second load times and rapid deployment.",
    icon: Zap,
  },
  {
    title: "Security & Trust",
    desc: "Your data is your most valuable asset. We build with enterprise-grade security protocols at every layer.",
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
          We engineer <span className="text-orange-500">growth.</span>
        </h1>
        <p className="text-xl text-neutral-400">
          Sochona bridges the gap between world-class web engineering and precision performance marketing.
        </p>
      </section>

      {/* Philosophy Grid */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((p, idx) => (
            <div key={idx} className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl hover:border-neutral-700 transition-colors">
              <p.icon className="w-10 h-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-neutral-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Narrative Section */}
      <section className="max-w-3xl mx-auto px-6 mb-24 text-neutral-300 text-lg leading-relaxed space-y-6">
        <h2 className="text-3xl font-bold text-white mb-6">Why Sochona?</h2>
        <p>
          In today's digital landscape, a website alone isn't enough. Businesses need a cohesive ecosystem where traffic, design, and automation work together seamlessly. That is where we step in.
        </p>
        <p>
          We don't just build static pages; we build <strong>revenue-generating engines</strong>. From technical SEO audits and Google Ads management to custom Web Apps and CRM infrastructure, we provide end-to-end solutions for forward-thinking brands.
        </p>
        <p>
          We have successfully partnered with high-growth industries including Healthcare, Law Firms, Real Estate Agencies, Retail, and SaaS to navigate their digital transformation and scale their operations efficiently.
        </p>
      </section>

      {/* Final CTA */}
      <section className="max-w-3xl mx-auto px-6 text-center">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Partner with Sochona</h2>
          <p className="text-neutral-400 mb-8">Are you ready to transform your digital infrastructure?</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors">
            Start the Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}