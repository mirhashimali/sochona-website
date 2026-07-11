"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"; // Added Link
import { Megaphone, Repeat, Cpu, ArrowRight, Lock, Sparkles } from "lucide-react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "" });
  const [status, setStatus] = useState("");
  const router = useRouter();

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [runawayPos, setRunawayPos] = useState({ top: 10, left: 80 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const handleRunaway = () => {
    const newTop = Math.random() * 80 + 5; 
    const newLeft = Math.random() * 80 + 5;
    setRunawayPos({ top: newTop, left: newLeft });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Connecting to database...");
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        router.push("/thank-you");
      } else {
        setStatus("Error saving lead.");
      }
    } catch (error) {
      setStatus("Error connecting.");
    }
  };

  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden text-[#F5F5F7] cursor-none md:cursor-none">
      
      {/* Custom Trailing Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-[#007AFF] rounded-full pointer-events-none z-50 mix-blend-screen"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#007AFF] rounded-full pointer-events-none z-50"
        animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />

      {/* Sliding Runaway Button */}
      <motion.button
        animate={{ top: `${runawayPos.top}%`, left: `${runawayPos.left}%` }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        onMouseEnter={handleRunaway}
        className="fixed z-50 flex items-center gap-2 bg-gradient-to-r from-[#007AFF] to-[#5E5CE6] text-white px-6 py-3 rounded-full shadow-[0_0_20px_rgba(0,122,255,0.5)] whitespace-nowrap cursor-none"
      >
        <Sparkles className="w-4 h-4" />
        <span className="text-sm font-bold uppercase tracking-wider">Click for Free Service. JK!</span>
      </motion.button>

      {/* Hero Section */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-[#007AFF] opacity-15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <nav className="w-full p-6 flex justify-between items-center relative z-20 max-w-6xl mx-auto">
        <div className="text-2xl font-bold tracking-tight text-white">sochona.</div>
        <div className="flex gap-6 items-center">
            <Link href="/services" className="text-sm font-medium text-white/80 hover:text-white transition-colors cursor-none">Services</Link>
            <Link href="/about" className="text-sm font-medium text-white/80 hover:text-white transition-colors cursor-none">About</Link>
            <button className="text-sm font-medium text-white/80 hover:text-white transition-colors flex items-center gap-2 cursor-none">
                Client Portal <ArrowRight className="w-4 h-4" />
            </button>
        </div>
      </nav>

      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20 flex flex-col items-center text-center relative z-10">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#007AFF] animate-pulse"></span>
          <span className="text-xs font-semibold tracking-widest uppercase text-white/80">The AI Agency</span>
        </motion.div>
        
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
          Stop buying websites.<br />Build systems.
        </motion.h1>
        
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl text-lg md:text-xl text-[#86868B] font-light leading-relaxed">
          We engineer hyper-profitable digital infrastructure that attracts eyeballs, converts clicks, and automates your business operations.
        </motion.p>
      </section>

      {/* Audit Form Section */}
      <section className="max-w-3xl mx-auto px-6 pb-32 relative z-10">
        <motion.div className="bg-[#1C1C1E]/50 border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-xl shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2 text-center tracking-tight">Free System Audit</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input type="text" placeholder="Your Name" value={formData.name} required className="bg-black/50 border border-white/10 text-white p-4 rounded-2xl w-full text-sm cursor-none" onChange={(e) => setFormData({...formData, name: e.target.value})} />
              <input type="email" placeholder="Email Address" value={formData.email} required className="bg-black/50 border border-white/10 text-white p-4 rounded-2xl w-full text-sm cursor-none" onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input type="tel" placeholder="Phone Number" value={formData.phone} required className="bg-black/50 border border-white/10 text-white p-4 rounded-2xl w-full text-sm cursor-none" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
              <input type="text" placeholder="Industry / Field of Business" value={formData.service} required className="bg-black/50 border border-white/10 text-white p-4 rounded-2xl w-full text-sm cursor-none" onChange={(e) => setFormData({...formData, service: e.target.value})} />
            </div>
            <button type="submit" className="mt-4 bg-[#F5F5F7] text-black font-semibold py-4 px-8 rounded-2xl text-base w-full cursor-none">
              {status || "Request Audit"}
            </button>
          </form>
        </motion.div>
      </section>

      {/* Framework Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 relative z-10 border-t border-white/10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">Our Framework</h2>
          <p className="text-[#86868B] text-lg max-w-2xl mx-auto font-light">We build end-to-end digital ecosystems designed around one metric: your revenue.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Megaphone, title: "1. Attract", desc: "Precision-targeted Google Ads and SEO to pull high-intent customers right to your front door." },
            { icon: Repeat, title: "2. Convert", desc: "CRO, robust analytics, and 24/7 AI Chatbots that qualify leads and book appointments." },
            { icon: Cpu, title: "3. Run Smarter", desc: "Custom Mini-CRMs and automated workflows that let you scale without losing your mind." }
          ].map((pillar, idx) => (
            <motion.div whileHover={{ y: -5 }} key={idx} className="bg-[#1C1C1E]/30 border border-white/5 p-8 rounded-3xl hover:bg-[#1C1C1E]/50 transition-colors cursor-none">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#007AFF] to-[#5E5CE6] flex items-center justify-center mb-6 text-white"><pillar.icon className="w-6 h-6" /></div>
              <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">{pillar.title}</h3>
              <p className="text-[#86868B] text-sm leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-white/10 flex justify-between items-center relative z-10">
        <div className="text-xl font-bold tracking-tight text-white">sochona.</div>
        <button className="flex items-center gap-2 text-xs text-[#86868B] hover:text-white transition-colors cursor-none">
          <Lock className="w-3 h-3" /> Admin Portal
        </button>
      </footer>
    </main>
  );
}