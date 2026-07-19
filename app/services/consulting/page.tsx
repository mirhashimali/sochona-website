import type { Metadata } from "next";
import Link from "next/link";
import { Lightbulb, Compass, BrainCircuit, Presentation, Briefcase, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Transformation & AI Strategy Consulting | Sochona",
  description: "High-level technology and marketing advisory. We help forward-thinking businesses navigate digital transformation, implement AI, and scale revenue.",
};

export default function ConsultingPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 mb-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-amber-500">Executive Advisory</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
          Navigate growth with <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
            lethal precision.
          </span>
        </h1>
        <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
          Execution without a roadmap is just organized chaos. We act as your fractional Chief Marketing and Technology Officers, providing high-level digital transformation strategy, AI implementation roadmaps, and ruthless marketing audits to ensure you dominate your market.
        </p>
      </section>

      {/* The Philosophy Section */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none"></div>
          
          <h2 className="text-3xl font-bold mb-8 text-white relative z-10">Stop guessing. Start dominating.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="space-y-4 text-neutral-400 text-lg leading-relaxed">
              <p>
                The digital landscape is shifting faster than ever. AI is disrupting legacy operations, ad costs are fluctuating, and SEO algorithms are being rewritten overnight. Trying to keep up while running your daily operations is a recipe for stagnation.
              </p>
              <p>
                We bridge the gap. We audit your entire business—from your tech stack to your sales funnels—identifying leaks in your revenue and engineering a master plan to fix them.
              </p>
            </div>
            <div className="space-y-4 text-neutral-400 text-lg leading-relaxed">
              <ul className="space-y-4 mt-2 text-neutral-300 font-medium">
                <li className="flex items-center gap-3"><ShieldCheck className="w-6 h-6 text-amber-500" /> Unbiased, data-driven audits</li>
                <li className="flex items-center gap-3"><Briefcase className="w-6 h-6 text-amber-500" /> Fractional CTO / CMO expertise</li>
                <li className="flex items-center gap-3"><Compass className="w-6 h-6 text-amber-500" /> Step-by-step execution roadmaps</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Digital Transformation",
              desc: "Transition your legacy business into a modern digital powerhouse. We map out the software, systems, and processes required to modernize your operations.",
              icon: Compass
            },
            {
              title: "AI Strategy & Implementation",
              desc: "Don't get left behind. We identify specific bottlenecks in your business where custom AI workflows and automation can drastically cut costs.",
              icon: BrainCircuit
            },
            {
              title: "Comprehensive Web Audits",
              desc: "We tear down your current website's code, UX, and conversion flow, handing you a brutal, actionable report on exactly why you are losing leads.",
              icon: ShieldCheck
            },
            {
              title: "Marketing & Brand Strategy",
              desc: "We help you define your unique value proposition, target demographics, and the exact channels you need to deploy capital into for maximum ROI.",
              icon: Lightbulb
            },
            {
              title: "Google Ads Consulting",
              desc: "Already running ads but bleeding cash? We audit your accounts, fix your targeting, restructure your campaigns, and coach your team on optimization.",
              icon: Presentation
            },
            {
              title: "Technology Advisory",
              desc: "From selecting the right CRM to choosing your hosting infrastructure, we ensure your tech stack is scalable, secure, and perfectly tailored to your needs.",
              icon: Briefcase
            }
          ].map((feature, idx) => (
            <div key={idx} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1">
              <feature.icon className="w-10 h-10 text-amber-500 mb-6" />
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-neutral-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-3xl mx-auto px-6 text-center">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none"></div>
          <h2 className="text-3xl font-bold mb-4 relative z-10">Need a roadmap?</h2>
          <p className="text-neutral-400 mb-8 relative z-10">Book a discovery call to discuss your business goals and current bottlenecks.</p>
          <Link href="/contact" className="inline-block relative z-10 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors">
            Book a Strategy Session
          </Link>
        </div>
      </section>
    </main>
  );
}