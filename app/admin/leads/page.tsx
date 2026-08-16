"use client";

import { useEffect, useState } from "react";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Lead {
  row: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  timestamp: string;
  status: string;
  assignedTo: string;
}

const STATUS_OPTIONS = [
  { label: "No Answer", color: "bg-neutral-500/20 text-neutral-300 border-neutral-500/40" },
  { label: "Pitched", color: "bg-blue-500/20 text-blue-300 border-blue-500/40" },
  { label: "Adopted Partial", color: "bg-amber-500/20 text-amber-300 border-amber-500/40" },
  { label: "Adopted", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40" },
  { label: "Won", color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40" },
  { label: "Follow up Scheduled", color: "bg-purple-500/20 text-purple-300 border-purple-500/40" },
];

function getStatusStyle(status: string) {
  return STATUS_OPTIONS.find((s) => s.label === status)?.color || STATUS_OPTIONS[0].color;
}

export default function LeadsDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingRow, setSavingRow] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchLeads();
  }, []);

  async function fetchLeads() {
    setLoading(true);
    const res = await fetch("/api/admin/leads");
    const data = await res.json();
    setLeads(data.leads || []);
    setLoading(false);
  }

  async function updateLead(row: number, field: "status" | "assignedTo", value: string) {
    setSavingRow(row);
    setLeads((prev) =>
      prev.map((lead) => (lead.row === row ? { ...lead, [field]: value } : lead))
    );

    await fetch("/api/admin/leads", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ row, [field]: value }),
    });
    setSavingRow(null);
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/leads/login");
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold">Leads Dashboard</h1>
          <div className="flex items-center gap-6">
  <Link
    href="/admin/leads/receipt"
    className="text-sm text-white/60 hover:text-white transition-colors"
  >
    Receipt Generator
  </Link>
  <button
    onClick={handleLogout}
    className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
  >
    <LogOut className="w-4 h-4" /> Log Out
  </button>
</div>
        </div>

        {loading ? (
          <p className="text-white/50">Loading leads...</p>
        ) : leads.length === 0 ? (
          <p className="text-white/50">No leads yet.</p>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-neutral-950 text-white/60 text-left">
                  <th className="px-4 py-3 font-medium">Name</th>
                  <th className="px-4 py-3 font-medium">Email</th>
                  <th className="px-4 py-3 font-medium">Phone</th>
                  <th className="px-4 py-3 font-medium">Service</th>
                  <th className="px-4 py-3 font-medium">Date</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Assigned To</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead.row} className="border-t border-white/10 hover:bg-white/[0.02]">
                    <td className="px-4 py-3 font-medium">{lead.name}</td>
                    <td className="px-4 py-3 text-white/70">{lead.email}</td>
                    <td className="px-4 py-3 text-white/70">{lead.phone}</td>
                    <td className="px-4 py-3 text-white/70">{lead.service}</td>
                    <td className="px-4 py-3 text-white/50 text-xs">{lead.timestamp}</td>
                    <td className="px-4 py-3">
                      <select
                        value={lead.status}
                        onChange={(e) => updateLead(lead.row, "status", e.target.value)}
                        className={`text-xs font-medium px-3 py-1.5 rounded-full border focus:outline-none ${getStatusStyle(lead.status)}`}
                      >
                        {STATUS_OPTIONS.map((opt) => (
                          <option key={opt.label} value={opt.label} className="bg-neutral-900 text-white">
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        defaultValue={lead.assignedTo}
                        onBlur={(e) => updateLead(lead.row, "assignedTo", e.target.value)}
                        placeholder="Unassigned"
                        className="bg-transparent border border-white/10 rounded-lg px-2 py-1.5 text-sm text-white w-32 focus:outline-none focus:border-white/30"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {savingRow && <p className="text-xs text-white/40 mt-3">Saving...</p>}
      </div>
    </main>
  );
}