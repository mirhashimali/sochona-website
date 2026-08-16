"use client";

import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black z-0"></div>,
});

export default function GlobalUI() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileOpen]);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDesktopServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const serviceLinks = [
    { href: "/services/web-development", label: "Web Development" },
    { href: "/services/seo", label: "SEO & Search" },
    { href: "/services/performance-marketing", label: "Performance Marketing" },
    { href: "/services/automation", label: "CRM & Automation" },
    { href: "/services/branding", label: "Branding & Identity" },
    { href: "/services/maintenance", label: "Hosting & Maintenance" },
    { href: "/services/consulting", label: "Consulting & Strategy" },
  ];

  return (
    <>
      {/* Global Navigation Bar */}
      <header className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-6 flex justify-between items-center pointer-events-none">
        {/* Logo */}
        <div className="pointer-events-auto relative z-[110]">
          <Link href="/" onClick={() => { setIsMobileOpen(false); setIsMobileServicesOpen(false); }} className="text-2xl font-bold text-white tracking-tighter hover:opacity-80 transition-opacity flex items-center gap-1.5">
            sochona<span className="text-[#007AFF]">.</span>
          </Link>
        </div>

        {/* Desktop Links (Hidden on Mobile) */}
        <nav className="hidden md:flex items-center gap-8 pointer-events-auto bg-black/20 backdrop-blur-md border border-white/10 px-8 py-3 rounded-full shadow-lg">
          
          {/* Services Dropdown Parent */}
          <div 
            className="relative py-2" 
            ref={dropdownRef}
            onMouseEnter={() => setIsDesktopServicesOpen(true)}
            onMouseLeave={() => setIsDesktopServicesOpen(false)}
          >
            <div className="flex items-center gap-1.5">
              <Link 
                href="/services" 
                className="text-sm font-medium text-white/80 hover:text-white transition-colors focus:outline-none"
              >
                Services
              </Link>
              <button 
                onClick={() => setIsDesktopServicesOpen(!isDesktopServicesOpen)}
                aria-label="Toggle Services Menu"
                className="text-white/80 hover:text-white focus:outline-none p-1"
              >
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isDesktopServicesOpen ? "rotate-180 text-[#007AFF]" : ""}`} />
              </button>
            </div>
            
            {/* The Dropdown Menu */}
            {isDesktopServicesOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64 bg-[#1C1C1E]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                {serviceLinks.map((service, idx) => (
                  <Link 
                    key={service.href}
                    href={service.href} 
                    onClick={() => setIsDesktopServicesOpen(false)}
                    className={`px-5 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors ${idx !== serviceLinks.length - 1 ? 'border-b border-white/5' : ''}`}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}
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
          className="md:hidden pointer-events-auto relative z-[110] text-white p-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10"
          onClick={() => {
            setIsMobileOpen(!isMobileOpen);
            if (isMobileOpen) setIsMobileServicesOpen(false);
          }}
          aria-label="Toggle Menu"
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Fullscreen Menu with Sub-Services Accordion */}
        {isMobileOpen && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-[105] flex flex-col items-center justify-start pt-28 pb-12 px-6 pointer-events-auto md:hidden overflow-y-auto space-y-6">
            
            {/* Services Section with Accordion */}
            <div className="w-full max-w-xs flex flex-col items-center">
              <div className="flex items-center justify-center w-full gap-2">
                <Link 
                  href="/services" 
                  onClick={() => setIsMobileOpen(false)} 
                  className="text-2xl font-semibold text-white hover:text-white/70 transition-colors"
                >
                  Services
                </Link>
                <button 
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="text-white p-2"
                  aria-label="Toggle Sub-services"
                >
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180 text-[#007AFF]" : ""}`} />
                </button>
              </div>

              {isMobileServicesOpen && (
                <div className="w-full mt-4 flex flex-col space-y-2 bg-neutral-900/80 border border-white/10 rounded-2xl p-4 animate-in fade-in slide-in-from-top-2 duration-200">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="text-sm text-white/75 hover:text-white py-2 px-3 rounded-xl hover:bg-white/5 transition-colors"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" onClick={() => setIsMobileOpen(false)} className="text-2xl font-semibold text-white hover:text-white/70 transition-colors">
              About
            </Link>
            <Link href="/blog" onClick={() => setIsMobileOpen(false)} className="text-2xl font-semibold text-white hover:text-white/70 transition-colors">
              Blog
            </Link>
            <Link href="/contact" onClick={() => setIsMobileOpen(false)} className="text-lg font-bold text-black bg-white px-10 py-3.5 rounded-full mt-2 active:scale-95 transition-transform shadow-lg">
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