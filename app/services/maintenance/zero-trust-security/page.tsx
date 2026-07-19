import type { Metadata } from "next";
import Link from "next/link";
import { ShieldAlert, KeyRound, EyeOff, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Zero-Trust Security & Breach Economics | Sochona",
  description: "A data breach is a board-level crisis, not an IT problem. Understand the economics of digital security and why legacy firewalls are failing.",
};

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="mb-8">
          <Link href="/services/maintenance" className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-300 text-sm font-semibold transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Maintenance
          </Link>
        </div>
        <div className="inline-block px-4 py-1.5 rounded-full border border-slate-500/30 bg-slate-500/10 text-slate-400 text-sm font-semibold tracking-wide mb-6">
          Cybersecurity Brief
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-slate-500">
          The Economics of <br />a Data Breach.
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          The cost of a cyber intrusion is not measured in server downtime. It is measured in lost brand equity, massive legal liabilities, and the permanent destruction of client trust.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-24">
        <article className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">The End of the "Castle and Moat"</h2>
          <p className="text-neutral-400 mb-8">
            Historically, companies built a "moat" around their servers with basic firewalls and assumed everything inside was safe. In modern digital commerce, this architecture is a catastrophic liability. Threat actors no longer break in; they log in using compromised credentials, out-of-date plugins, and neglected endpoints. Once inside a legacy system, they have unrestricted lateral movement.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl">
              <EyeOff className="w-8 h-8 text-slate-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Zero-Trust Architecture</h3>
              <p className="text-sm text-neutral-400">We operate on the principle of "never trust, always verify." Every API call, database query, and user login is heavily authenticated, regardless of origin.</p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl">
              <ShieldAlert className="w-8 h-8 text-slate-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Automated Threat Mitigation</h3>
              <p className="text-sm text-neutral-400">Human reaction time is too slow. We deploy algorithmic monitoring that instantly blacklists malicious IPs and neutralizes DDOS attacks at the Edge.</p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl">
              <KeyRound className="w-8 h-8 text-slate-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Immutable Backups</h3>
              <p className="text-sm text-neutral-400">Ransomware targets your backups first. We provision off-site, immutable snapshot backups that cannot be encrypted or deleted by compromised admin accounts.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-4">Security as a Competitive Advantage</h3>
          <p className="text-neutral-400">
            For B2B companies, proving your security posture is increasingly required to close enterprise deals. We elevate your infrastructure to meet stringent compliance standards (SOC2, GDPR), transforming security from a necessary expense into a verifiable sales asset.
          </p>
        </article>
      </section>

      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-slate-500/20 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent opacity-50"></div>
          <h2 className="text-3xl font-bold mb-4">Harden your digital perimeter.</h2>
          <p className="text-neutral-400 mb-8 max-w-lg mx-auto">Do not wait for a catastrophic breach to prioritize your infrastructure security.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-slate-200 text-black font-bold rounded-full hover:bg-white transition-colors shadow-[0_0_20px_rgba(203,213,225,0.1)]">
            Audit Your Security Posture
          </Link>
        </div>
      </section>
    </main>
  );
}