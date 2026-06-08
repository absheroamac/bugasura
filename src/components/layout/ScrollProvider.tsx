"use client";

import { createContext, useContext, useRef } from "react";
import { usePathname } from "next/navigation";

const ScrollContext = createContext<React.RefObject<HTMLDivElement | null> | null>(null);

export function useScrollRef() {
  return useContext(ScrollContext);
}

// Pages that opt out of the scroll wrapper (full-bleed / app-shell layouts)
const FULL_BLEED_ROUTES = ["/dashboard-preview"]; // covers /dashboard-preview and all sub-routes

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isFullBleed = FULL_BLEED_ROUTES.some((r) => pathname.startsWith(r));

  if (isFullBleed) {
    return <>{children}</>;
  }

  return (
    <ScrollContext.Provider value={ref}>
      {/* Outer: clips border-radius cleanly */}
      <div
        className="m-2 lg:m-6 rounded-[20px] lg:rounded-[32px] overflow-hidden h-[calc(100vh-16px)] lg:h-[calc(100vh-48px)]"
      >
        {/* Inner: handles scrolling, ref used for scroll events */}
        <div
          ref={ref}
          className="h-full overflow-y-auto overflow-x-hidden"
        >
          {children}
        </div>
      </div>
    </ScrollContext.Provider>
  );
}
