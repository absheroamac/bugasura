/**
 * ButtonGroup — horizontal row of buttons with consistent gap
 * Wrap Button components inside this for correct spacing.
 */

import { ReactNode } from "react";

interface ButtonGroupProps {
  children: ReactNode;
  gap?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export default function ButtonGroup({
  children,
  gap = "16px",
  className = "",
  align = "left",
}: ButtonGroupProps) {
  const justifyMap = { left: "flex-start", center: "center", right: "flex-end" };

  return (
    <div
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap,
        justifyContent: justifyMap[align],
      }}
    >
      {children}
    </div>
  );
}
