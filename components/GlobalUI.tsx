"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black z-0"></div>,
});

export default function GlobalUI() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileOpen]);

  return (
    <>
      {/* Global Navigation Bar */}
      <header className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-6 flex justify-between items-center pointer-events-none">
        {/* Logo */}
        <div className="pointer-events-auto relative z-[110]">
          <Link href="/" onClick={() => setIsMobileOpen(false)} className="text-2xl font-bold text-white tracking-tighter hover:opacity-80 transition-opacity">
            sochona.
          </Link>
        </div>

        {/* Desktop Links (Hidden on Mobile) */}
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

        {/* Mobile Hamburger Button (Hidden on Desktop) */}
        <button 
          className="md:hidden pointer-events-auto relative z-[110] text-white p-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {/* Mobile Fullscreen Menu */}
        {isMobileOpen && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-[105] flex flex-col items-center justify-center pointer-events-auto md:hidden gap-10">
            <Link href="/services" onClick={() => setIsMobileOpen(false)} className="text-3xl font-semibold text-white hover:text-white/70 transition-colors">
              Services
            </Link>
            <Link href="/about" onClick={() => setIsMobileOpen(false)} className="text-3xl font-semibold text-white hover:text-white/70 transition-colors">
              About
            </Link>
            <Link href="/blog" onClick={() => setIsMobileOpen(false)} className="text-3xl font-semibold text-white hover:text-white/70 transition-colors">
              Blog
            </Link>
            <Link href="/contact" onClick={() => setIsMobileOpen(false)} className="text-xl font-bold text-black bg-white px-10 py-4 rounded-full mt-4 active:scale-95 transition-transform">
              Contact Us
            </Link>
          </div>
        )}
      </header>

      {/* 3D Spline Interactive Background - GEOMETRIC OVERSCAN FIX */}
      <div className="fixed top-0 left-0 w-full h-screen z-0 overflow-hidden pointer-events-auto">
        <div 
          className="absolute top-0 left-0"
          style={{ width: 'calc(100vw + 200px)', height: 'calc(100vh + 100px)' }}
        >
          <Spline scene="https://prod.spline.design/19UJG8bsVhWJAmeG/scene.splinecode" />
        </div>
      </div>
    </>
  );
}