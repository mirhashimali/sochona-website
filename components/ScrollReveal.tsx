"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function ScrollReveal({ 
  children, 
  className = "" 
}: { 
  children: ReactNode; 
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ 
        once: true,
        margin: "0px 0px 100px 0px", // Triggers early on mobile
        amount: "some"
      }}
      transition={{ 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className={`w-full ${className}`}
      style={{ opacity: 1 }} // Fallback safety
    >
      {children}
    </motion.div>
  );
}