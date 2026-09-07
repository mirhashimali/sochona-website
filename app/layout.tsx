import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import LayoutWrapper from "@/components/LayoutWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sochona.net"),
  title: {
    default: "Sochona | The AI & Digital Growth Agency",
    template: "%s | Sochona",
  },
  description: "Stop buying websites. Build systems. We create sovereign digital infrastructure.",
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
          <footer className="relative z-20 pointer-events-auto w-full border-t border-white/10 bg-neutral-950/95 backdrop-blur-2xl mt-auto text-xs">
            <div className="max-w-6xl mx-auto px-6 pt-16 pb-12">

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
                  <h4 className="font-bold text-white uppercase tracking-wider mb-4">Industry Systems</h4>
                  <ul className="space-y-2.5 text-white/70">
                    <li><Link href="/in/b2b-manufacturing" className="hover:text-white transition-colors">B2B Manufacturers</Link></li>
                    <li><Link href="/in/healthcare" className="hover:text-white transition-colors">Clinics & Healthcare</Link></li>
                    <li><Link href="/in/real-estate" className="hover:text-white transition-colors">Real Estate Systems</Link></li>
                    <li><Link href="/in/education" className="hover:text-white transition-colors">Coaching & Institutes</Link></li>
                    <li><Link href="/in/d2c-brands" className="hover:text-white transition-colors">D2C & Retail Brands</Link></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider mb-4">Company</h4>
                  <ul className="space-y-2.5 text-white/70">
                    <li><Link href="/about" className="hover:text-white transition-colors font-medium text-white">About Sochona</Link></li>
                    <li><Link href="/book" className="text-[#007AFF] hover:text-blue-400 font-semibold transition-colors">Book Strategy Call</Link></li>
                    <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                    <li><Link href="/blog" className="hover:text-white transition-colors">Engineering Blog</Link></li>
                    <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                  </ul>
                </div>
              </div>

              {/* Bottom Signature Bar (Clean International Compliance) */}
              <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/50">
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
                  <span className="text-sm font-bold text-white tracking-tight">sochona<span className="text-[#007AFF]">.</span></span>
                  <span className="text-[11px] text-white/40">© {new Date().getFullYear()} All rights reserved.</span>
                  <span className="hidden sm:inline text-white/20">•</span>
                  {/* Clean Udyam Registration without state/country labels */}
                  <span className="text-[10px] font-mono text-white/60 font-medium bg-white/[0.04] px-2 py-0.5 rounded-md border border-white/10">
                    UDYAM-BR-26-0248887
                  </span>
                </div>
                
                <div className="flex items-center gap-5 text-white/50 text-xs">
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                  <Link href="/book" className="text-[#007AFF] hover:text-blue-400 transition-colors font-medium">Book Call</Link>
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