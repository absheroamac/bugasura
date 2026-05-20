/**
 * Card — standard content card
 *
 * tint values (matched to brand colour associations):
 *   "salmon"  → #FDD9C8  Context / red-associated
 *   "orange"  → #FFDAA8  Refine / orange-associated
 *   "blue"    → #B2D9EC  Generate / blue-associated
 *   "gray"    → #DCDCDC  Execute / neutral
 *   "white"   → #ffffff  On dark or coloured section backgrounds
 *   or pass any hex string directly
 *
 * radius: "sm" (16px) | "md" (20px) | "lg" (24px) | "xl" (32px)
 */

import { ReactNode, CSSProperties } from "react";

type CardTint = "salmon" | "orange" | "blue" | "gray" | "white";
type CardRadius = "sm" | "md" | "lg" | "xl";

const TINT_MAP: Record<CardTint, string> = {
  salmon: "#FDD9C8",
  orange: "#FFDAA8",
  blue:   "#B2D9EC",
  gray:   "#DCDCDC",
  white:  "#ffffff",
};

const RADIUS_MAP: Record<CardRadius, string> = {
  sm: "16px",
  md: "20px",
  lg: "24px",
  xl: "32px",
};

interface CardProps {
  tint?: CardTint | string;
  radius?: CardRadius;
  padding?: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function Card({
  tint = "gray",
  radius = "lg",
  padding = "24px",
  children,
  className = "",
  style,
}: CardProps) {
  const backgroundColor = TINT_MAP[tint as CardTint] ?? tint;
  const borderRadius = RADIUS_MAP[radius];

  return (
    <div
      className={className}
      style={{
        backgroundColor,
        borderRadius,
        padding,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
