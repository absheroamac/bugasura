/**
 * Section — page section wrapper
 *
 * Applies the standard rounded-[32px] container with correct background colour.
 *
 * bg values (use the token names):
 *   "cream"   → #FFF6E2   default page background
 *   "red"     → #E52727   hero, CTA band
 *   "orange"  → #FFA840   accent sections
 *   "blue"    → #29A5FF   accent sections
 *   "dark"    → #1E1E1E   stats bar, footer-adjacent
 *   "white"   → #FFFFFF   card-like inset sections
 *   or pass any hex string directly
 *
 * padding: "default" | "none" | custom string e.g. "80px 80px"
 */

import { ReactNode, CSSProperties } from "react";

type BgToken = "cream" | "red" | "orange" | "blue" | "dark" | "white";

const BG_MAP: Record<BgToken, string> = {
  cream:  "#FFF6E2",
  red:    "#E52727",
  orange: "#FFA840",
  blue:   "#29A5FF",
  dark:   "#1E1E1E",
  white:  "#ffffff",
};

interface SectionProps {
  bg?: BgToken | string;
  padding?: "default" | "none" | string;
  overflow?: "hidden" | "visible";
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  id?: string;
}

export default function Section({
  bg = "cream",
  padding = "default",
  overflow = "hidden",
  children,
  className = "",
  style,
  id,
}: SectionProps) {
  const backgroundColor = BG_MAP[bg as BgToken] ?? bg;

  const paddingValue =
    padding === "default" ? "80px"
    : padding === "none"  ? "0"
    : padding;

  return (
    <section
      id={id}
      className={`rounded-[32px] ${className}`}
      style={{
        backgroundColor,
        padding: paddingValue,
        overflow,
        ...style,
      }}
    >
      {children}
    </section>
  );
}
