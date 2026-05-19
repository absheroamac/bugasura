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
      <div
        ref={ref}
        className="m-6 rounded-[32px] overflow-y-auto h-[calc(100vh-48px)]"
      >
        {children}
      </div>
    </ScrollContext.Provider>
  );
}
