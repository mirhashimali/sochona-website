import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import LayoutWrapper from "@/components/LayoutWrapper";
import { ArrowRight } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sochona.net"),
  title: {
    default: "Sochona | The AI & Digital Growth Agency",
    template: "%s | Sochona",
  },
  description: "Stop buying websites. Build systems. We create hyper-profitable digital infrastructure.",
  verification: {
    google: "_SoAwQZ6Dueex24M3RgrNsX-7SuPR-MC3YCZBfqcwyE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-[#F5F5F7] overflow-x-hidden min-h-screen flex flex-col`}>
        <LayoutWrapper>
          
          {/* Page Content */}
          <div className="relative z-10 flex-grow flex flex-col">
            {children}
          </div>

          {/* Unified Global Footer */}
          <footer className="relative z-20 pointer-events-auto w-full border-t border-white/10 bg-neutral-950/90 backdrop-blur-2xl mt-auto text-xs">
            <div className="max-w-6xl mx-auto px-6 pt-12 pb-12">
              
              {/* 🇮🇳 INDIA EDITION DISCOVERY STRIP */}
              <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-neutral-900/60 to-neutral-900/40 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-center sm:text-left">
                  <span className="text-2xl">🇮🇳</span>
                  <div>
                    <h4 className="text-sm font-bold text-white">Sochona India Edition (For Growing MSMEs & Businesses)</h4>
                    <p className="text-xs text-white/60 mt-0.5">High-speed Next.js systems, verified buyer inquiries, and WhatsApp automation.</p>
                  </div>
                </div>
                <Link
                  href="/in"
                  className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-xs transition-all flex items-center gap-2 shrink-0 shadow-lg shadow-[#25D366]/20"
                >
                  <span>Explore India Systems</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Directory Columns */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider mb-4">Core Framework</h4>
                  <ul className="space-y-2.5 text-white/70">
                    <li><Link href="/attract" className="hover:text-white transition-colors">Attract Pillar</Link></li>
                    <li><Link href="/convert" className="hover:text-white transition-colors">Convert Pillar</Link></li>
                    <li><Link href="/run-smarter" className="hover:text-white transition-colors">Run Smarter Pillar</Link></li>
                    <li><Link href="/services" className="hover:text-white transition-colors">All Capabilities Hub</Link></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider mb-4">Engineering & Ads</h4>
                  <ul className="space-y-2.5 text-white/70">
                    <li><Link href="/services/performance-marketing" className="hover:text-white transition-colors">Performance Marketing</Link></li>
                    <li><Link href="/services/seo" className="hover:text-white transition-colors">Search Engine Optimization</Link></li>
                    <li><Link href="/services/web-development" className="hover:text-white transition-colors">Next.js Web Development</Link></li>
                    <li><Link href="/services/automation" className="hover:text-white transition-colors">AI & Custom Automation</Link></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider mb-4">India Sectors</h4>
                  <ul className="space-y-2.5 text-white/70">
                    <li><Link href="/in/b2b-manufacturing" className="hover:text-emerald-400 transition-colors">B2B Manufacturers</Link></li>
                    <li><Link href="/in/healthcare" className="hover:text-emerald-400 transition-colors">Clinics & Healthcare</Link></li>
                    <li><Link href="/in/real-estate" className="hover:text-emerald-400 transition-colors">Real Estate Systems</Link></li>
                    <li><Link href="/in/education" className="hover:text-emerald-400 transition-colors">Coaching & Institutes</Link></li>
                    <li><Link href="/in/d2c-brands" className="hover:text-emerald-400 transition-colors">D2C & Retail Brands</Link></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider mb-4">Company</h4>
                  <ul className="space-y-2.5 text-white/70">
                    <li><Link href="/about" className="hover:text-white transition-colors">About Sochona</Link></li>
                    <li><Link href="/book" className="text-[#007AFF] hover:text-blue-400 font-semibold transition-colors">Book Strategy Call</Link></li>
                    <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                    <li><Link href="/blog" className="hover:text-white transition-colors">Engineering Blog</Link></li>
                    <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                  </ul>
                </div>
              </div>

              {/* Bottom Signature Bar */}
              <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/50">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white tracking-tight">sochona<span className="text-[#007AFF]">.</span></span>
                  <span className="text-[11px] text-white/40">© {new Date().getFullYear()} All rights reserved. High-performance digital infrastructure.</span>
                </div>
                
                <div className="flex items-center gap-5 text-white/50">
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                  <Link href="/book" className="text-[#007AFF] hover:text-blue-400 transition-colors font-medium">Book Call</Link>
                  <Link href="/in" className="text-emerald-400 hover:text-emerald-300 transition-colors">India Edition</Link>
                  <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                  <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                </div>
              </div>

            </div>
          </footer>

        </LayoutWrapper>
      </body>
    </html>
  );
}