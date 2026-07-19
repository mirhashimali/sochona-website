"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black z-0"></div>,
});

export default function GlobalUI() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", updateMousePosition, { capture: true });
    return () => window.removeEventListener("mousemove", updateMousePosition, { capture: true });
  }, []);

  return (
    <>
      {/* Global Navigation Bar */}
      <header className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-6 flex justify-between items-center pointer-events-none">
        {/* Logo */}
        <div className="pointer-events-auto">
          <Link href="/" className="text-2xl font-bold text-white tracking-tighter hover:opacity-80 transition-opacity">
            sochona.
          </Link>
        </div>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8 pointer-events-auto bg-black/20 backdrop-blur-md border border-white/10 px-8 py-3 rounded-full shadow-lg">
          
          {/* Services Dropdown Parent */}
          <div className="relative group py-2">
            <Link href="/services" className="text-sm font-medium text-white/80 group-hover:text-white transition-colors flex items-center gap-1.5 focus:outline-none">
              Services
              <span className="text-[9px] opacity-50 group-hover:opacity-100 transition-opacity">▼</span>
            </Link>
            
            {/* The Dropdown Menu */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64 bg-[#1C1C1E]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col overflow-hidden">
              <Link href="/services/web-development" className="px-5 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors border-b border-white/5">
                Web Development
              </Link>
              <Link href="/services/seo" className="px-5 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors border-b border-white/5">
                SEO & Search
              </Link>
              <Link href="/services/performance-marketing" className="px-5 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors border-b border-white/5">
                Performance Marketing
              </Link>
              <Link href="/services/automation" className="px-5 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors border-b border-white/5">
                CRM & Automation
              </Link>
              <Link href="/services/branding" className="px-5 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors border-b border-white/5">
                Branding & Identity
              </Link>
              <Link href="/services/maintenance" className="px-5 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors border-b border-white/5">
                Hosting & Maintenance
              </Link>
              <Link href="/services/consulting" className="px-5 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                Consulting & Strategy
              </Link>
            </div>
          </div>

          <Link href="/about" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/blog" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="text-sm font-bold text-black bg-white px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-transform hover:scale-105 active:scale-95">
            Contact Us
          </Link>
        </nav>
      </header>

      {/* Custom Trailing Cursor (Hidden on Mobile) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-[#007AFF] rounded-full pointer-events-none z-[9999] mix-blend-screen hidden md:block"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#007AFF] rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />

      {/* 3D Spline Interactive Background */}
      <div className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-auto">
        <Spline scene="https://prod.spline.design/19UJG8bsVhWJAmeG/scene.splinecode" />
      </div>
    </>
  );
}