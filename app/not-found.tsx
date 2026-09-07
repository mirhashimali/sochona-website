import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-transparent text-white flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      
      {/* Ambient Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] pointer-events-none -z-10 blur-[140px]"
        style={{
          background: "radial-gradient(circle, rgba(255, 140, 30, 0.15) 0%, rgba(0, 122, 255, 0.08) 50%, transparent 75%)",
          mixBlendMode: "screen"
        }}
      />

      <div className="max-w-md w-full p-8 sm:p-12 rounded-3xl bg-neutral-950/80 border border-white/15 backdrop-blur-2xl shadow-2xl space-y-6">
        <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mx-auto text-[#007AFF]">
          <Compass className="w-6 h-6" />
        </div>

        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#007AFF] font-bold">404 Error</span>
          <h1 className="text-2xl sm:text-3xl font-light text-white mt-1">Page Not Located</h1>
          <p className="text-xs text-white/60 font-light mt-2 leading-relaxed">
            The requested digital coordinate does not exist or has been migrated to our new infrastructure.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black font-semibold text-xs transition-all hover:bg-neutral-200 flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/book"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/[0.05] border border-white/15 text-white font-medium text-xs transition-all hover:bg-white/10"
          >
            Book a Call
          </Link>
        </div>
      </div>

    </main>
  );
}