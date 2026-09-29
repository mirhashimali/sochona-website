import { Zap } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen w-full fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] selection:bg-[#007AFF]">
      
      {/* Ambient Loading Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#007AFF]/10 blur-[100px] rounded-full pointer-events-none animate-pulse" />

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Animated Architectural Ring */}
        <div className="relative flex items-center justify-center w-16 h-16">
          <div className="absolute inset-0 border border-white/10 rounded-full" />
          <div className="absolute inset-0 border-t-2 border-[#007AFF] rounded-full animate-spin" />
          <div className="absolute inset-2 border border-white/5 rounded-full" />
          <div className="absolute inset-2 border-b-2 border-orange-500 rounded-full animate-spin direction-reverse" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
          
          <Zap className="w-4 h-4 text-white/50 animate-pulse" />
        </div>

        {/* Telemetry Text */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#007AFF] font-bold">
            Compiling Infrastructure
          </span>
          <span className="text-[10px] font-mono text-white/30">
            Establishing secure edge connection...
          </span>
        </div>
      </div>
    </div>
  );
}