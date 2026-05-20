/**
 * Heading — brand type scale
 *
 * level:
 *   "hero"         — 96px · -0.03em  (page hero only)
 *   "section"      — 68px · -0.025em (primary section title)
 *   "bento"        — 60px · -0.02em  (bento card titles)
 *   "subsection"   — 45px · -0.015em (sub-section / point title)
 *   "step"         — 32px · -0.01em  (step subtitle headline)
 *   "card"         — 32px · -0.01em  (small card title)
 *
 * All use Clash Grotesk SemiBold.
 * color defaults to #1E1E1E (dark). Pass "white" or any hex to override.
 */

import { ReactNode } from "react";

type HeadingLevel = "hero" | "section" | "bento" | "subsection" | "step" | "card";
type HeadingTag = "h1" | "h2" | "h3" | "h4" | "p";

interface HeadingProps {
  level?: HeadingLevel;
  as?: HeadingTag;
  color?: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const SCALE: Record<HeadingLevel, { fontSize: string; letterSpacing: string; lineHeight: number }> = {
  hero:       { fontSize: "96px",  letterSpacing: "-0.03em",  lineHeight: 1.0  },
  section:    { fontSize: "68px",  letterSpacing: "-0.025em", lineHeight: 1.05 },
  bento:      { fontSize: "60px",  letterSpacing: "-0.02em",  lineHeight: 1.05 },
  subsection: { fontSize: "45px",  letterSpacing: "-0.015em", lineHeight: 1.1  },
  step:       { fontSize: "32px",  letterSpacing: "-0.01em",  lineHeight: 1.15 },
  card:       { fontSize: "32px",  letterSpacing: "-0.01em",  lineHeight: 1.15 },
};

const TAG_MAP: Record<HeadingLevel, HeadingTag> = {
  hero:       "h1",
  section:    "h2",
  bento:      "h2",
  subsection: "h3",
  step:       "h3",
  card:       "h4",
};

export default function Heading({
  level = "section",
  as,
  color = "#1E1E1E",
  children,
  className = "",
  style,
}: HeadingProps) {
  const Tag = as ?? TAG_MAP[level];
  const scale = SCALE[level];

  return (
    <Tag
      className={className}
      style={{
        fontFamily: "'Clash Grotesk', sans-serif",
        fontWeight: 600,
        color,
        ...scale,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
