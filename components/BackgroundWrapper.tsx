"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function BackgroundWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col">
      {/* Subtle ambient background glow instead of heavy 3D Spline */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none -z-10 blur-[160px] opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(0, 122, 255, 0.25) 0%, rgba(52, 211, 153, 0.1) 50%, transparent 75%)",
        }}
      />
      {children}
    </div>
  );
}