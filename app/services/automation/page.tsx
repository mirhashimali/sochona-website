import type { Metadata } from "next";
import Link from "next/link";
import { Cpu, Bot, Workflow, Users, Network, Gauge } from "lucide-react";

export const metadata: Metadata = {
  title: "Business Automation & Custom CRMs | Sochona",
  description: "Automate your workflow. We develop custom mini-CRMs, internal dashboards, and AI automations to help your business operate with absolute efficiency.",
};

export default function AutomationPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 mb-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-purple-400">Operational Efficiency</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
          Work on your business. <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-fuchsia-500">
            Let systems work in it.
          </span>
        </h1>
        <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
          Manual data entry, missed follow-ups, and fragmented software are destroying your profit margins. We build bespoke CRM solutions, automated workflows, and internal AI systems that let you scale your operations without expanding your payroll.
        </p>
      </section>

      {/* The Infrastructure Section */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none"></div>
          
          <h2 className="text-3xl font-bold mb-8 text-white relative z-10">Scale without breaking.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="space-y-4 text-neutral-400 text-lg leading-relaxed">
              <p>
                Off-the-shelf software is bloated, expensive, and forces you to change how your business operates to fit their mold. We do the exact opposite.
              </p>
              <p>
                We map out your exact business logic and build custom, lightweight infrastructure around it. If a task is repetitive, we automate it. If data lives in three different places, we centralize it into one seamless dashboard.
              </p>
            </div>
            <div className="space-y-4 text-neutral-400 text-lg leading-relaxed">
              <p>
                The result? A frictionless operational environment where leads are contacted instantly, invoices are generated automatically, and your team focuses purely on high-leverage activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Custom Mini-CRMs",
              desc: "Lightweight, lightning-fast Customer Relationship Managers built specifically for your sales cycle, eliminating the bloat of traditional enterprise software.",
              icon: Users
            },
            {
              title: "Workflow Automation",
              desc: "We connect your favorite tools (Gmail, Slack, Sheets) to trigger automated actions. A new lead drops in? The system alerts your team and sends an instant intro email.",
              icon: Workflow
            },
            {
              title: "AI Integration",
              desc: "Deploy AI chatbots for 24/7 customer qualification, or integrate OpenAI APIs into your internal systems to draft proposals and summarize client data.",
              icon: Bot
            },
            {
              title: "Admin Dashboards",
              desc: "Centralize your operations. We build secure, role-based portals for your staff to manage inventory, track KPIs, and process client requests.",
              icon: Gauge
            },
            {
              title: "Automated Document Generation",
              desc: "Stop wasting time writing PDFs. We build systems that automatically generate and send customized invoices, receipts, and contracts the moment a deal is closed.",
              icon: Cpu
            },
            {
              title: "API & Webhook Connections",
              desc: "We write the middleware that allows your disparate software tools to 'talk' to each other, creating a unified digital nervous system for your agency.",
              icon: Network
            }
          ].map((feature, idx) => (
            <div key={idx} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
              <feature.icon className="w-10 h-10 text-purple-400 mb-6" />
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-neutral-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-3xl mx-auto px-6 text-center">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none"></div>
          <h2 className="text-3xl font-bold mb-4 relative z-10">Reclaim your time and margins.</h2>
          <p className="text-neutral-400 mb-8 relative z-10">Let's map out your workflows and build a system that runs while you sleep.</p>
          <Link href="/contact" className="inline-block relative z-10 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors">
            Automate Your Business
          </Link>
        </div>
      </section>
    </main>
  );
}