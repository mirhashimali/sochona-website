"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ScrollReveal from "./ScrollReveal";

export default function LeadForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "" });
  const [status, setStatus] = useState("");
  const router = useRouter();

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
    <ScrollReveal>
      {/* 
        We added: transition-all duration-300 hover:-translate-y-2 hover:bg-[#1C1C1E]/85 
        hover:border-[#007AFF]/50 hover:shadow-[0_0_40px_rgba(0,122,255,0.15)] 
        to give it that lifted, glowing effect on hover 
      */}
      <div className="bg-[#1C1C1E]/70 border border-white/20 p-8 md:p-10 rounded-3xl backdrop-blur-xl shadow-2xl pointer-events-auto w-full transition-all duration-300 hover:-translate-y-2 hover:bg-[#1C1C1E]/85 hover:border-[#007AFF]/50 hover:shadow-[0_0_40px_rgba(0,122,255,0.15)]">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2 text-center tracking-tight">Free System Audit</h2>
        <p className="text-white/60 text-center text-sm mb-6">Enter your details below and we will analyze your current digital infrastructure.</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input 
              type="text" 
              placeholder="Your Name" 
              value={formData.name} 
              required 
              className="bg-black/60 border border-white/10 text-white placeholder-white/50 p-4 rounded-2xl w-full text-sm focus:outline-none focus:border-[#007AFF] transition-colors" 
              onChange={(e) => setFormData({...formData, name: e.target.value})} 
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              value={formData.email} 
              required 
              className="bg-black/60 border border-white/10 text-white placeholder-white/50 p-4 rounded-2xl w-full text-sm focus:outline-none focus:border-[#007AFF] transition-colors" 
              onChange={(e) => setFormData({...formData, email: e.target.value})} 
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input 
              type="tel" 
              placeholder="Phone Number" 
              value={formData.phone} 
              required 
              className="bg-black/60 border border-white/10 text-white placeholder-white/50 p-4 rounded-2xl w-full text-sm focus:outline-none focus:border-[#007AFF] transition-colors" 
              onChange={(e) => setFormData({...formData, phone: e.target.value})} 
            />
            <input 
              type="text" 
              placeholder="Industry / Field of Business" 
              value={formData.service} 
              required 
              className="bg-black/60 border border-white/10 text-white placeholder-white/50 p-4 rounded-2xl w-full text-sm focus:outline-none focus:border-[#007AFF] transition-colors" 
              onChange={(e) => setFormData({...formData, service: e.target.value})} 
            />
          </div>
          
          <button 
            type="submit" 
            className="mt-4 bg-gradient-to-r from-[#F5F5F7] to-[#E5E5EA] text-black font-bold py-4 px-8 rounded-2xl text-base w-full transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-[0.97]"
          >
            {status || "Request Audit"}
          </button>
        </form>
      </div>
    </ScrollReveal>
  );
}