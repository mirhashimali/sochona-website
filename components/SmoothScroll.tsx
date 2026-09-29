"use client";

import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.08, // The "friction" or smoothness level (lower is smoother)
        duration: 1.5, // Time it takes to slow down
        smoothWheel: true, // Applies to mouse wheels
        wheelMultiplier: 1, // Scrolling speed
      }}
    >
      {children}
    </ReactLenis>
  );
}