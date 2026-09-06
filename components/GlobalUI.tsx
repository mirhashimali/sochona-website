"use client";

import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowRight, Sparkles, Calendar } from "lucide-react";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black z-0"></div>,
});

export default function GlobalUI() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileOpen]);

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
    { href: "/services/web-development", label: "Web Development", badge: "Next.js" },
    { href: "/services/seo", label: "SEO & Search", badge: "AEO" },
    { href: "/services/performance-marketing", label: "Performance Marketing", badge: "Ads" },
    { href: "/services/automation", label: "CRM & Automation", badge: "AI" },
    { href: "/services/branding", label: "Branding & Identity", badge: "Design" },
    { href: "/services/maintenance", label: "Hosting & Maintenance", badge: "Edge" },
    { href: "/services/consulting", label: "Consulting & Strategy", badge: "Executive" },
  ];

  return (
    <>
      {/* 1. TOP NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-5 flex justify-between items-center pointer-events-none">
        <div className="pointer-events-auto relative z-[110]">
          <Link
            href="/"
            onClick={() => {
              setIsMobileOpen(false);
              setIsMobileServicesOpen(false);
            }}
            className="text-2xl font-extrabold text-white tracking-tighter hover:opacity-85 transition-opacity flex items-center gap-1 drop-shadow-md"
          >
            sochona<span className="text-[#007AFF]">.</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 pointer-events-auto bg-black/40 backdrop-blur-2xl border border-white/15 px-6 py-2 rounded-full shadow-2xl shadow-black/50 ring-1 ring-white/5">
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setIsDesktopServicesOpen(true)}
            onMouseLeave={() => setIsDesktopServicesOpen(false)}
          >
            <div className="flex items-center gap-1.5 py-1.5">
              <Link
                href="/services"
                className="text-xs font-semibold text-white/80 hover:text-white transition-colors"
              >
                Services
              </Link>
              <button
                onClick={() => setIsDesktopServicesOpen(!isDesktopServicesOpen)}
                aria-label="Toggle Services Menu"
                className="text-white/60 hover:text-white focus:outline-none p-0.5"
              >
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isDesktopServicesOpen ? "rotate-180 text-[#007AFF]" : ""
                  }`}
                />
              </button>
            </div>

            {isDesktopServicesOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-72 pointer-events-auto">
                <div className="bg-neutral-950/95 backdrop-blur-2xl border border-white/15 p-2 rounded-2xl shadow-2xl shadow-black/80 ring-1 ring-white/10 flex flex-col space-y-0.5 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white/40 border-b border-white/10 mb-1 flex items-center justify-between">
                    <span>Capabilities</span>
                    <Sparkles className="w-3 h-3 text-[#007AFF]" />
                  </div>
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setIsDesktopServicesOpen(false)}
                      className="group flex items-center justify-between px-3.5 py-2 text-xs font-medium text-white/75 hover:text-white rounded-xl hover:bg-white/10 transition-all"
                    >
                      <span>{service.label}</span>
                      <span className="text-[10px] font-mono uppercase text-white/40 group-hover:text-[#007AFF] transition-colors">
                        {service.badge}
                      </span>
                    </Link>
                  ))}
                  <div className="pt-1.5 mt-1 border-t border-white/10">
                    <Link
                      href="/services"
                      onClick={() => setIsDesktopServicesOpen(false)}
                      className="flex items-center justify-between px-3.5 py-1.5 text-[11px] font-semibold text-[#007AFF] hover:text-blue-400 transition-colors"
                    >
                      <span>All Services Overview</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/about" className="text-xs font-semibold text-white/80 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/blog" className="text-xs font-semibold text-white/80 hover:text-white transition-colors">
            Blog
          </Link>

          {/* TAILORED LUXURY BOOK CALL PILL */}
          <Link
            href="/book"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.16] border border-white/20 text-white text-xs font-medium transition-all shadow-sm hover:scale-105 active:scale-95 group"
          >
            <Calendar className="w-3.5 h-3.5 text-[#007AFF] group-hover:scale-110 transition-transform" />
            <span>Book Call</span>
          </Link>

          <Link
            href="/contact"
            className="text-xs font-bold text-black bg-white px-5 py-2 rounded-full hover:bg-neutral-200 transition-all shadow-md"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden pointer-events-auto relative z-[110] text-white p-2.5 bg-black/60 backdrop-blur-md rounded-full border border-white/15"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Mobile Fullscreen Drawer */}
        {isMobileOpen && (
          <div className="fixed inset-0 bg-neutral-950/95 backdrop-blur-2xl z-[105] flex flex-col items-center justify-start pt-24 pb-12 px-6 pointer-events-auto md:hidden overflow-y-auto space-y-6">
            <div className="w-full max-w-xs flex flex-col items-center">
              <div className="flex items-center justify-center w-full gap-2">
                <Link href="/services" onClick={() => setIsMobileOpen(false)} className="text-2xl font-bold text-white">
                  Services
                </Link>
                <button onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)} className="text-white p-2">
                  <ChevronDown className={`w-5 h-5 transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
              </div>

              {isMobileServicesOpen && (
                <div className="w-full mt-3 flex flex-col space-y-1.5 bg-neutral-900/90 border border-white/15 rounded-2xl p-3">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="text-sm text-white/80 py-2 px-3 rounded-xl hover:bg-white/10 flex justify-between"
                    >
                      <span>{service.label}</span>
                      <span className="text-xs text-white/40">{service.badge}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" onClick={() => setIsMobileOpen(false)} className="text-2xl font-bold text-white">
              About
            </Link>
            <Link href="/blog" onClick={() => setIsMobileOpen(false)} className="text-2xl font-bold text-white">
              Blog
            </Link>
            <Link
              href="/book"
              onClick={() => setIsMobileOpen(false)}
              className="text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 px-8 py-3 rounded-full mt-4 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#007AFF]" />
              <span>Book a Strategy Call</span>
            </Link>
            <Link href="/contact" onClick={() => setIsMobileOpen(false)} className="text-base font-bold text-black bg-white px-8 py-3 rounded-full mt-2">
              Contact Us
            </Link>
          </div>
        )}
      </header>

      {/* 2. BRIGHTENED 3D BACKGROUND */}
      <div className="fixed top-0 left-0 w-full h-screen z-0 overflow-hidden pointer-events-auto bg-black">
        <div
          className="absolute top-0 left-0"
          style={{ 
            width: "calc(100vw + 200px)", 
            height: "calc(100vh + 100px)",
            filter: "brightness(1.4) contrast(1.08)"
          }}
        >
          <Spline scene="https://prod.spline.design/19UJG8bsVhWJAmeG/scene.splinecode" />
        </div>
      </div>
    </>
  );
}