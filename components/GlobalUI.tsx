"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black z-0"></div>,
});

export default function GlobalUI() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", updateMousePosition, { capture: true });
    return () => window.removeEventListener("mousemove", updateMousePosition, { capture: true });
  }, []);

  return (
    <>
      {/* Custom Trailing Cursor (Mobile hidden classes removed to force visibility) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-[#007AFF] rounded-full pointer-events-none z-[9999] mix-blend-screen"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#007AFF] rounded-full pointer-events-none z-[9999]"
        animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />

      {/* 3D Spline Interactive Background */}
      <div className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-auto">
        <Spline scene="https://prod.spline.design/19UJG8bsVhWJAmeG/scene.splinecode" />
      </div>
    </>
  );
}