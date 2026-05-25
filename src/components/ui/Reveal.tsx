"use client";

import { useEffect, useRef, ReactNode } from "react";

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
const DURATION = "0.6s";

/** Fade + slide-up a single element when it enters the viewport. */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = `opacity ${DURATION} ${EASE} ${delay}ms, transform ${DURATION} ${EASE} ${delay}ms`;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "none";
          io.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -48px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/**
 * Wraps a grid/flex container and stagger-animates its direct children
 * as they enter the viewport. Pass the same className as the original
 * container so grid/flex styles are preserved.
 */
export function RevealStagger({
  children,
  className,
  step = 75,
  baseDelay = 0,
}: {
  children: ReactNode;
  className?: string;
  step?: number;
  baseDelay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const kids = Array.from(el.children) as HTMLElement[];

    kids.forEach((child, i) => {
      const d = baseDelay + i * step;
      child.style.opacity = "0";
      child.style.transform = "translateY(22px)";
      child.style.transition = `opacity ${DURATION} ${EASE} ${d}ms, transform ${DURATION} ${EASE} ${d}ms`;
    });

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          kids.forEach((child) => {
            child.style.opacity = "1";
            child.style.transform = "none";
          });
          io.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -48px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [step, baseDelay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
