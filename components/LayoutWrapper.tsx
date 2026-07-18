"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import GlobalUI from "@/components/GlobalUI";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  // This effect forces the cursor back to visible when on admin
  useEffect(() => {
    if (isAdmin) {
      document.body.style.cursor = "auto";
      document.body.style.pointerEvents = "auto";
    } else {
      document.body.style.cursor = "none";
      document.body.style.pointerEvents = "auto";
    }
  }, [isAdmin]);

  // If we are on the admin page, do NOT render the GlobalUI (the 3D background)
  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <GlobalUI />
      {children}
    </>
  );
}