"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-[#F5F5F7] p-10 flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <Link href="/" className="flex items-center gap-2 text-[#86868B] hover:text-white transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <h1 className="text-5xl font-bold text-white mb-6">About Sochona.</h1>
        <p className="text-xl text-[#86868B] leading-relaxed mb-6">
          We don't build "websites." We build digital ecosystems. Most agencies sell you a digital brochure—we sell you a machine that makes money while you sleep.
        </p>
        <p className="text-xl text-[#86868B] leading-relaxed">
          Founded on the principle that digital presence should be measurable, scalable, and automated. We are the architects of your digital future.
        </p>
      </div>
    </main>
  );
}