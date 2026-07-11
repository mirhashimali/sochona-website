"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Megaphone, Repeat, Cpu } from "lucide-react";
import Link from "next/link";

export default function Services() {
  return (
    <main className="min-h-screen bg-black text-[#F5F5F7] p-10">
      <Link href="/" className="flex items-center gap-2 text-[#86868B] hover:text-white transition-colors mb-10">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
      
      <h1 className="text-5xl font-bold text-white mb-10">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#1C1C1E] p-8 rounded-3xl border border-white/5">
          <Megaphone className="w-10 h-10 text-[#007AFF] mb-4" />
          <h2 className="text-2xl font-bold mb-4">Attract</h2>
          <p className="text-[#86868B]">We deploy high-intent lead generation systems, focusing on precision ad spend and organic search dominance.</p>
        </div>
        <div className="bg-[#1C1C1E] p-8 rounded-3xl border border-white/5">
          <Repeat className="w-10 h-10 text-[#5E5CE6] mb-4" />
          <h2 className="text-2xl font-bold mb-4">Convert</h2>
          <p className="text-[#86868B]">Our AI-driven conversation agents qualify your leads 24/7, ensuring you only talk to people ready to buy.</p>
        </div>
        <div className="bg-[#1C1C1E] p-8 rounded-3xl border border-white/5">
          <Cpu className="w-10 h-10 text-[#007AFF] mb-4" />
          <h2 className="text-2xl font-bold mb-4">Run Smarter</h2>
          <p className="text-[#86868B]">We integrate custom automation workflows that sync your sales to your database, removing manual data entry forever.</p>
        </div>
      </div>
    </main>
  );
}