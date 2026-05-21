"use client";

import { createContext, useContext, useRef } from "react";

const ScrollContext = createContext<React.RefObject<HTMLDivElement | null> | null>(null);

export function useScrollRef() {
  return useContext(ScrollContext);
}

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <ScrollContext.Provider value={ref}>
      {/* Outer: clips border-radius cleanly */}
      <div
        className="m-2 md:m-6 rounded-[20px] md:rounded-[32px] overflow-hidden h-[calc(100vh-16px)] md:h-[calc(100vh-48px)]"
      >
        {/* Inner: handles scrolling, ref used for scroll events */}
        <div
          ref={ref}
          className="h-full overflow-y-auto"
        >
          {children}
        </div>
      </div>
    </ScrollContext.Provider>
  );
}
