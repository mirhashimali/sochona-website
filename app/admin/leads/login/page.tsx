"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export default function LeadsLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/admin/leads");
      router.refresh();
    } else {
      setError("Invalid password");
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-neutral-950 border border-white/10 rounded-3xl p-8 shadow-2xl">
        <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 mb-6 mx-auto">
          <Lock className="w-5 h-5 text-white/70" />
        </div>
        <h1 className="text-xl font-semibold text-center mb-2">Leads Portal Access</h1>
        <p className="text-xs text-white/50 text-center mb-8">Enter your portal password to continue.</p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/30 text-white placeholder:text-white/30"
              required
            />
          </div>

          {error && <p className="text-xs text-red-400 text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-white text-black font-medium rounded-xl hover:bg-neutral-200 transition-colors disabled:opacity-50 text-sm"
          >
            {loading ? "Verifying..." : "Access Portal"}
          </button>
        </form>
      </div>
    </main>
  );
}