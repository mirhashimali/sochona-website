"use client";

import { usePathname } from "next/navigation";
import Spline from "@splinetool/react-spline"; // Adjust this import if your component is named differently

export default function BackgroundWrapper() {
  const pathname = usePathname();

  // If we are on any /admin route, return null (hide the background)
  if (pathname.startsWith("/admin")) {
    return null;
  }

  // Otherwise, show your 3D background
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
       <Spline scene="YOUR_SPLINE_SCENE_URL_HERE" />
    </div>
  );
}