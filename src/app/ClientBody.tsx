"use client";

import { useEffect } from "react";

export default function ClientBody({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Add any client-side initialization here
    document.documentElement.classList.add("dark");
  }, []);

  return <>{children}</>;
}