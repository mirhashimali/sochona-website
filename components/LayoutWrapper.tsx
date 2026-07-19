"use client";

import { usePathname } from "next/navigation";
import GlobalUI from "@/components/GlobalUI";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

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