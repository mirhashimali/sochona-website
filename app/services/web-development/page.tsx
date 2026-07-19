import type { Metadata } from "next";
import Link from "next/link";
import { Code2, Zap, Smartphone, Server } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Web Development & PWAs | Sochona",
  description: "We don't build digital brochures; we engineer high-performance web applications, corporate websites, and PWAs designed to scale and convert.",
};

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 mb-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-400">Web Engineering</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
          Websites are dead. <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
            We build digital engines.
          </span>
        </h1>
        <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
          The era of the "digital brochure" is over. If your website isn't actively generating leads, closing sales, or automating your operations, it is a liability. We engineer enterprise-grade web applications that work relentlessly for your bottom line.
        </p>
      </section>

      {/* The "Anti-Fluff" Philosophy */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
          
          <h2 className="text-3xl font-bold mb-8 text-white relative z-10">Built for Speed, Scalability, and Supremacy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="space-y-4 text-neutral-400 text-lg leading-relaxed">
              <p>
                Most agencies patch together slow, bloated WordPress templates and call it a day. That doesn't cut it in today's landscape. A one-second delay in page load time costs you conversions.
              </p>
              <p>
                At Sochona, we write modern, server-side rendered code (like Next.js and React) deployed on edge networks. This means your site loads instantly, ranks higher on Google, and provides a frictionless experience for your users.
              </p>
            </div>
            <div className="space-y-4 text-neutral-400 text-lg leading-relaxed">
              <p>
                Whether you need a high-converting landing page, a complex Progressive Web App (PWA), or a complete corporate website migration, we build the infrastructure required for serious growth.
              </p>
              <ul className="space-y-2 mt-4 text-neutral-300 font-medium">
                <li className="flex items-center gap-2"><Zap className="w-5 h-5 text-blue-400" /> Sub-second load times</li>
                <li className="flex items-center gap-2"><Smartphone className="w-5 h-5 text-blue-400" /> Flawless mobile responsiveness</li>
                <li className="flex items-center gap-2"><Server className="w-5 h-5 text-blue-400" /> Vercel & Netlify Edge Deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Engineering Capabilities</h2>
          <p className="text-neutral-400 text-lg">Robust architecture for forward-thinking brands.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Custom Web Applications",
              desc: "Bespoke web apps built from the ground up to solve complex business problems, featuring secure authentication and custom database integration.",
              icon: Code2
            },
            {
              title: "Progressive Web Apps (PWA)",
              desc: "Deliver an app-like experience directly in the browser. PWAs offer offline capabilities, push notifications, and lightning-fast speeds.",
              icon: Smartphone
            },
            {
              title: "High-Performance Corporate Sites",
              desc: "Establish total industry authority with a corporate web presence that perfectly balances cutting-edge design with semantic SEO architecture.",
              icon: Server
            },
            {
              title: "Landing Page Development",
              desc: "Hyper-focused, A/B tested landing pages engineered with one singular goal: converting your paid ad traffic into qualified leads.",
              icon: Zap
            },
            {
              title: "Website Redesign & Migration",
              desc: "Moving away from a slow, outdated platform? We handle seamless migrations ensuring zero data loss and an immediate boost in organic rankings.",
              icon: Code2
            },
            {
              title: "Ongoing Infrastructure Maintenance",
              desc: "Security monitoring, backup management, and uptime tracking to ensure your digital engine never misfires.",
              icon: Server
            }
          ].map((feature, idx) => (
            <div key={idx} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1">
              <feature.icon className="w-10 h-10 text-blue-400 mb-6" />
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-neutral-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-3xl mx-auto px-6 text-center">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none"></div>
          <h2 className="text-3xl font-bold mb-4 relative z-10">Stop losing customers to slow load times.</h2>
          <p className="text-neutral-400 mb-8 relative z-10">Let's audit your current web infrastructure and map out an upgrade.</p>
          <Link href="/contact" className="inline-block relative z-10 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors">
            Start the Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}