"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function ScrollReveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ 
        once: true, // Animates in once, then stays visible — no more repeat triggering
        margin: "-50px" // Triggers slightly after it enters the screen
      }}
      transition={{ 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] // The signature Apple-style easing curve
      }}
    >
      {children}
    </motion.div>
  );
}