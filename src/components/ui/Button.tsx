"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { motion, type Transition } from "framer-motion";

const MotionLink = motion(Link);

/**
 * Button / CTA link
 *
 * variant:
 *   "primary"       — red fill, white text        (cream / light backgrounds)
 *   "white"         — white fill, dark-red text   (red / dark backgrounds)
 *   "outline"       — transparent, dark border    (light backgrounds)
 *   "outline-light" — transparent, white border   (dark / red backgrounds)
 *
 * size:
 *   "md" — default
 *   "lg" — hero / large CTA
 *
 * Hover: modern offset hard-shadow lift (no blur).
 * The button shifts up-left by 2px and a solid shadow appears below-right.
 */

type ButtonVariant = "primary" | "white" | "outline" | "outline-light" | "dark";
type ButtonSize    = "md" | "lg";

interface ButtonProps {
  href?:      string;
  onClick?:   () => void;
  children:   ReactNode;
  variant?:   ButtonVariant;
  size?:      ButtonSize;
  className?: string;
  type?:      "button" | "submit";
}

const STYLES: Record<ButtonVariant, { bg: string; color: string; border: string; shadow: string }> = {
  primary:         { bg: "#E52727",     color: "#ffffff",  border: "transparent",          shadow: "4px 4px 0px #8B0D0D"               },
  white:           { bg: "#ffffff",     color: "#AC1515",  border: "transparent",          shadow: "4px 4px 0px rgba(0,0,0,0.55)"      },
  outline:         { bg: "transparent", color: "#1E1E1E",  border: "rgba(30,30,30,0.35)",  shadow: "4px 4px 0px rgba(30,30,30,0.7)"    },
  "outline-light": { bg: "transparent", color: "#ffffff",  border: "rgba(255,255,255,0.5)",shadow: "4px 4px 0px rgba(255,255,255,0.65)"},
  dark:            { bg: "#1E1E1E",     color: "#ffffff",  border: "transparent",          shadow: "4px 4px 0px rgba(0,0,0,0.7)"       },
};

const SIZES: Record<ButtonSize, { padding: string; fontSize: string }> = {
  md: { padding: "12px 24px", fontSize: "16px" },
  lg: { padding: "14px 32px", fontSize: "20px" },
};

const BASE_STYLE = {
  fontFamily:      "'Clash Grotesk', sans-serif",
  fontWeight:      600,
  letterSpacing:   "0.05em",
  textTransform:   "uppercase" as const,
  textDecoration:  "none",
  lineHeight:      1,
  borderRadius:    "10px",
  display:         "inline-flex",
  alignItems:      "center",
  gap:             "8px",
  cursor:          "pointer",
  border:          "2px solid",
  whiteSpace:      "nowrap" as const,
  boxShadow:       "none",
};

export default function Button({
  href,
  onClick,
  children,
  variant   = "primary",
  size      = "md",
  className = "",
  type      = "button",
}: ButtonProps) {
  const v = STYLES[variant];
  const s = SIZES[size];

  const style = {
    ...BASE_STYLE,
    backgroundColor: v.bg,
    color:           v.color,
    borderColor:     v.border,
    padding:         s.padding,
    fontSize:        s.fontSize,
  };

  const hoverAnim = {
    y:         -2,
    x:         -1,
    boxShadow: v.shadow,
  };

  const tapAnim = {
    y:         0,
    x:         0,
    boxShadow: "none",
  };

  const transition: Transition = { duration: 0.15, ease: "easeOut" };

  if (href) {
    return (
      <MotionLink
        href={href}
        style={style}
        className={className}
        whileHover={hoverAnim}
        whileTap={tapAnim}
        transition={transition}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      style={style}
      className={className}
      whileHover={hoverAnim}
      whileTap={tapAnim}
      transition={transition}
    >
      {children}
    </motion.button>
  );
}
