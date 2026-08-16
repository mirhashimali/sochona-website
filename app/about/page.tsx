import type { Metadata } from "next";
import Link from "next/link";
import { BrainCircuit, Zap, TrendingUp, ShieldCheck, Lock, Activity } from "lucide-react";

export const metadata: Metadata = {
  title: "About Sochona | Digital Transformation Experts",
  description: "Sochona is an AI Agency helping businesses scale by replacing static websites with high-performance, automated digital systems.",
};

const principles = [
  {
    title: "Systems Over Sites",
    desc: "We build scalable, automated infrastructure that functions as a direct extension of your sales and operations teams.",
    icon: BrainCircuit,
  },
  {
    title: "Data-First Execution",
    desc: "Every design choice and workflow is backed by data. We optimize for sustainable ROI, bridging technical architecture with high-level business strategy.",
    icon: TrendingUp,
  },
  {
    title: "Engineered for Velocity",
    desc: "In digital, technical latency directly impacts conversion. Our stack is built to minimize render times and deploy rapidly across edge networks.",
    icon: Zap,
  },
  {
    title: "Security by Design",
    desc: "We build with modern security protocols at every architectural layer, actively working to reduce attack vectors and protect your most valuable assets.",
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-sm font-medium text-neutral-400 mb-8">
          <span className="flex h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
          The Sochona Paradigm
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
          Stop buying websites.<br />
          Build <span className="text-orange-500">systems.</span>
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
          Sochona bridges the gap between world-class web engineering, autonomous workflows, and precision performance marketing.
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
          In today's digital landscape, a traditional website isn't enough. Businesses need a cohesive ecosystem where traffic intent, technical design, and operations work together seamlessly. That is where we step in.
        </p>
        <p>
          We don't just write code; we engineer <strong>revenue-focused infrastructure</strong>. Drawing on deep expertise in high-volume traffic intent, campaign signals, and data operations, we align your web presence directly with your customer acquisition strategy. From technical SEO audits to custom CRM integrations, we focus on replacing manual bottlenecks with efficient pipelines.
        </p>
        <p>
          Our methodologies are designed for high-growth sectors—including Healthcare, Law Firms, Real Estate, Retail, and SaaS—helping modern brands navigate digital transformation and scale their operations intelligently.
        </p>
      </section>

      {/* NEW: The Sochona Standard (Policy-Worthy Claims) */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <div className="border-t border-neutral-800 pt-16">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">The Sochona Standard</h2>
          <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
            We hold ourselves to strict operational standards. When you partner with us, these are the architectural and ethical commitments we make to your digital infrastructure.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <Lock className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Data Sovereignty</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  We do not aggregate your proprietary business data to train shared AI models. Your customer data remains siloed and strictly under your ownership, architected with modern privacy standards in mind.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Activity className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Performance Optimization</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  We engineer our architectures targeting Google's Core Web Vitals. While we cannot control human behavior, we actively work to eliminate technical bottlenecks to prevent latency-induced revenue leakage.
                </p>
              </div>
            </div>
          </div>
        </div>
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