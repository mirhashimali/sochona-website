"use client";

import { useEffect, useState } from "react";
import { LogOut, Search, Play, Database, RefreshCw, MapPin } from "lucide-react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const MapComponent = dynamic(() => import("@/components/RadiusMap"), { ssr: false });

interface Lead {
  row?: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  timestamp: string;
  status: string;
  assignedTo: string;
}

export default function LeadsDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"directory" | "scraper">("directory");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  // Scraper Controls
  const [keyword, setKeyword] = useState("Plumbers");
  const [targetType, setTargetType] = useState<"city" | "radius">("radius");
  const [cityName, setCityName] = useState("Gurugram Sector 29");
  const [lat, setLat] = useState(28.4595);
  const [lng, setLng] = useState(77.0266);
  const [radius, setRadius] = useState(5);
  const [unit, setUnit] = useState<"km" | "miles">("km");

  const [isScraping, setIsScraping] = useState(false);
  const [scrapeStatus, setScrapeStatus] = useState("");

  useEffect(() => {
    fetchLeads();
  }, []);

  async function fetchLeads() {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/leads");
      const data = await res.json();
      setLeads(data.leads || []);
    } catch (err) {
      console.error("Failed to load leads", err);
    } finally {
      setLoading(false);
    }
  }

  // Handle Logout via the API route shown in your screenshot
  async function handleLogout() {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin/leads/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  }

  // Function to translate Zip/City to Coordinates to move the map
  async function locateOnMap() {
    if (!cityName) return;
    setScrapeStatus("Locating area on map...");
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(cityName)}`);
      const data = await res.json();
      if (data && data.length > 0) {
        setLat(parseFloat(data[0].lat));
        setLng(parseFloat(data[0].lon));
        setScrapeStatus(`✅ Map Locked to: ${data[0].display_name}`);
      } else {
        setScrapeStatus("❌ Could not find this location. Try adding a city or country name.");
      }
    } catch (err) {
      setScrapeStatus("❌ Map verification failed.");
    }
  }

  async function triggerScraper(e: React.FormEvent) {
    e.preventDefault();
    setIsScraping(true);
    setScrapeStatus("Launching Google Maps Scraper Bot...");

    try {
      const res = await fetch("/api/admin/scrape", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          keyword,
          targetType,
          location: targetType === "city" ? cityName : `${lat},${lng}`,
          radius: targetType === "radius" ? radius : null,
          unit,
        }),
      });

      if (res.ok) {
        setScrapeStatus("Scraper Agent Dispatched! Leads will auto-populate in your Google Sheet in 3-5 minutes.");
      } else {
        const errData = await res.json();
        setScrapeStatus(`Error starting task: ${errData.error || "Check GitHub tokens"}`);
      }
    } catch (err) {
      setScrapeStatus("Network error launching scraper task.");
    } finally {
      setIsScraping(false);
    }
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 border-b border-neutral-800 pb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Sochona Admin Console</h1>
          <p className="text-sm text-neutral-400">Lead Intelligence & Automation Hub</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/admin/leads/receipt"
            className="px-4 py-2 text-sm bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded-lg transition"
          >
            Generate Receipt
          </a>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-sm bg-red-900/20 hover:bg-red-900/40 text-red-400 border border-red-900/30 rounded-lg transition"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </div>

      {/* Tabs Bar */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("directory")}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition ${
            activeTab === "directory" ? "bg-cyan-600 text-white" : "bg-neutral-900 text-neutral-400 hover:text-white"
          }`}
        >
          <Database size={16} /> Saved Leads ({leads.length})
        </button>
        <button
          onClick={() => setActiveTab("scraper")}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition ${
            activeTab === "scraper" ? "bg-cyan-600 text-white" : "bg-neutral-900 text-neutral-400 hover:text-white"
          }`}
        >
          <Search size={16} /> Map Lead Scraper
        </button>
      </div>

      {/* Directory Tab */}
      {activeTab === "directory" && (
        <div className="bg-neutral-900 rounded-xl border border-neutral-800 overflow-hidden">
          <div className="p-4 border-b border-neutral-800 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-white">Live Google Sheets Directory</h2>
            <button onClick={fetchLeads} className="flex items-center gap-1 text-xs text-cyan-400 hover:underline">
              <RefreshCw size={12} /> Refresh
            </button>
          </div>
          {loading ? (
            <div className="p-8 text-center text-neutral-500">Loading leads...</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-neutral-950 text-neutral-400 border-b border-neutral-800">
                  <tr>
                    <th className="p-3">Business Name</th>
                    <th className="p-3">Phone</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Service</th>
                    <th className="p-3">Timestamp</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Assigned To</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800">
                  {leads.map((lead, idx) => (
                    <tr key={idx} className="hover:bg-neutral-800/50">
                      <td className="p-3 font-medium text-white">{lead.name}</td>
                      <td className="p-3 text-neutral-300">{lead.phone || "—"}</td>
                      <td className="p-3 text-cyan-400">{lead.email || "—"}</td>
                      <td className="p-3 text-neutral-300">{lead.service}</td>
                      <td className="p-3 text-neutral-500 text-xs">{lead.timestamp}</td>
                      <td className="p-3">
                        <span className="px-2 py-1 text-xs rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                          {lead.status || "New"}
                        </span>
                      </td>
                      <td className="p-3 text-neutral-400">{lead.assignedTo || "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* Scraper Tab */}
      {activeTab === "scraper" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 bg-neutral-900 p-6 rounded-xl border border-neutral-800">
            <h2 className="text-lg font-semibold mb-4 text-cyan-400">Targeting Parameters</h2>
            <form onSubmit={triggerScraper} className="space-y-4">
              <div>
                <label className="block text-xs text-neutral-400 mb-1">Target Keyword / Niche</label>
                <input
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="e.g. Plumbers, Dentists, Real Estate"
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2.5 text-sm text-white focus:border-cyan-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs text-neutral-400 mb-1">Location Strategy</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setTargetType("radius")}
                    className={`p-2 text-xs rounded-lg border ${
                      targetType === "radius" ? "border-cyan-500 bg-cyan-500/10 text-cyan-300" : "border-neutral-800 text-neutral-400"
                    }`}
                  >
                    Radius targeting
                  </button>
                  <button
                    type="button"
                    onClick={() => setTargetType("city")}
                    className={`p-2 text-xs rounded-lg border ${
                      targetType === "city" ? "border-cyan-500 bg-cyan-500/10 text-cyan-300" : "border-neutral-800 text-neutral-400"
                    }`}
                  >
                    City / Zip / Sector
                  </button>
                </div>
              </div>

              {targetType === "city" ? (
                <div>
                  <label className="block text-xs text-neutral-400 mb-1">Location Name or Zip Code</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={cityName}
                      onChange={(e) => setCityName(e.target.value)}
                      placeholder="e.g. 800008 or Gurugram Sector 29"
                      className="flex-1 bg-neutral-950 border border-neutral-800 rounded-lg p-2.5 text-sm text-white focus:border-cyan-500 outline-none"
                    />
                    <button
                      type="button"
                      onClick={locateOnMap}
                      className="px-4 flex items-center gap-1 bg-neutral-800 hover:bg-neutral-700 text-cyan-400 text-sm font-medium rounded-lg transition"
                    >
                      <MapPin size={14} /> Verify
                    </button>
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">Type location and click Verify to lock coordinates.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs text-neutral-400 mb-1">Latitude</label>
                      <input
                        type="number"
                        step="any"
                        value={lat}
                        onChange={(e) => setLat(parseFloat(e.target.value))}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2 text-sm text-white outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-neutral-400 mb-1">Longitude</label>
                      <input
                        type="number"
                        step="any"
                        value={lng}
                        onChange={(e) => setLng(parseFloat(e.target.value))}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2 text-sm text-white outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs text-neutral-400 mb-1">Radius Distance</label>
                      <input
                        type="number"
                        min="1"
                        max="50"
                        value={radius}
                        onChange={(e) => setRadius(Number(e.target.value))}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2 text-sm text-white outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-neutral-400 mb-1">Unit</label>
                      <select
                        value={unit}
                        onChange={(e: any) => setUnit(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2 text-sm text-white outline-none"
                      >
                        <option value="km">Kilometers (km)</option>
                        <option value="miles">Miles (mi)</option>
                      </select>
                    </div>
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">You can also click anywhere on the map to drop the pin.</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isScraping}
                className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-lg text-sm transition flex items-center justify-center gap-2 disabled:opacity-50 mt-4"
              >
                <Play size={16} /> {isScraping ? "Dispatching..." : "Lock & Start Extraction"}
              </button>

              {scrapeStatus && (
                <p className="text-xs text-center p-3 rounded bg-neutral-950 text-cyan-400 border border-cyan-900/50 mt-4">
                  {scrapeStatus}
                </p>
              )}
            </form>
          </div>

          {/* Interactive Map Preview */}
          <div className="lg:col-span-7 bg-neutral-900 p-4 rounded-xl border border-neutral-800 flex flex-col">
            <h3 className="text-sm font-semibold mb-2 text-neutral-400">Coverage Map Preview</h3>
            <div className="w-full h-[400px] rounded-lg overflow-hidden border border-neutral-800 relative bg-neutral-950 cursor-crosshair">
              {/* Notice we pass down setLat and setLng so clicking the map updates the form */}
              <MapComponent 
                lat={lat} 
                lng={lng} 
                radius={radius} 
                unit={unit} 
                targetType={targetType} 
                setLat={setLat} 
                setLng={setLng} 
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}