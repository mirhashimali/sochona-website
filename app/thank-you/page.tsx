"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ThankYou() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center text-[#F5F5F7] px-6">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-[#007AFF] opacity-15 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-[#1C1C1E]/50 border border-white/10 p-10 md:p-16 rounded-3xl backdrop-blur-xl shadow-2xl text-center max-w-2xl w-full"
      >
        <div className="flex justify-center mb-6">
          <CheckCircle2 className="w-20 h-20 text-[#007AFF]" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">
          Audit Requested.
        </h1>
        
        <p className="text-lg text-[#86868B] font-light leading-relaxed mb-10">
          Your information is secure in our system. Our team is currently reviewing your digital footprint and will reach out shortly to reveal exactly how much revenue you are leaving on the table.
        </p>

        <Link href="/">
          <button className="bg-white/5 border border-white/10 text-white font-medium py-4 px-8 rounded-2xl hover:bg-white/10 transition-colors flex items-center gap-2 mx-auto">
            <ArrowLeft className="w-4 h-4" /> Return to Homepage
          </button>
        </Link>
      </motion.div>
    </main>
  );
}