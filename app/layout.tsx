import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Lock } from "lucide-react";
import LayoutWrapper from "@/components/LayoutWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "sochona. | The AI Agency",
  description: "Stop buying websites. Build systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-[#F5F5F7] overflow-x-hidden min-h-screen flex flex-col`}>
        
        {/* Wrap everything in our new Client Wrapper */}
        <LayoutWrapper>
          
          {/* Page Content */}
          <div className="relative z-10 flex-grow flex flex-col">
            {children}
          </div>

          {/* Global Footer */}
          <div className="relative z-20 pointer-events-none w-full mt-auto">
            <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-white/10 flex justify-between items-center bg-black/40 backdrop-blur-sm pointer-events-auto w-full">
              <div className="text-xl font-bold tracking-tight text-white drop-shadow-md">sochona.</div>
              <Link href="/admin" className="flex items-center gap-2 text-xs text-white/50 hover:text-white transition-colors">
                <Lock className="w-3 h-3" /> Admin Portal
              </Link>
            </footer>
          </div>
        </LayoutWrapper>

      </body>
    </html>
  );
}