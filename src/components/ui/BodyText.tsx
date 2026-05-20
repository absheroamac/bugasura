/**
 * BodyText — Inter · line-height 1.6
 *
 * size variants:
 *   sm   — 13px  (captions, labels, meta)
 *   base — 15px  (default body copy, cards, descriptions)
 *   lg   — 24px  (hero subtitles, large lead copy)
 *
 * Minimum body size per brand spec — never go below 13px.
 * opacity prop: convenience shorthand for muted text.
 */

import { ReactNode, CSSProperties } from "react";

type BodyTag = "p" | "span" | "li" | "div";
type BodySize = "sm" | "base" | "lg";

const SIZE_MAP: Record<BodySize, string> = {
  sm:   "13px",
  base: "16px",
  lg:   "24px",
};

interface BodyTextProps {
  as?: BodyTag;
  size?: BodySize;
  color?: string;
  opacity?: number;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  maxWidth?: string;
}

export default function BodyText({
  as: Tag = "p",
  size = "base",
  color = "#1E1E1E",
  opacity = 0.8,
  children,
  className = "",
  style,
  maxWidth,
}: BodyTextProps) {
  return (
    <Tag
      className={className}
      style={{
        fontFamily: "Inter, sans-serif",
        fontWeight: 400,
        fontSize: SIZE_MAP[size],
        lineHeight: 1.6,
        letterSpacing: "0em",
        color,
        opacity,
        maxWidth,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
