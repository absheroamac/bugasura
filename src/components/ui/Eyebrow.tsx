/**
 * Eyebrow labels — two variants:
 *
 * variant="badge"    — small all-caps category tag  e.g. "THE PLATFORM"
 *                      12px · 0.08em tracking
 *
 * variant="section"  — large all-caps section label  e.g. "GENERATE"
 *                      24px · 0.08em tracking
 *
 * variant="step"     — numbered step label  e.g. "01  Context"
 *                      24px · number in red, label inherits color
 *
 * color prop overrides default red for the label/badge text.
 */

interface EyebrowProps {
  variant?: "badge" | "section" | "step";
  num?: string;          // only for variant="step"
  color?: string;        // label text colour (default: #E52727 for badge/section)
  numColor?: string;     // number colour for step variant (default: #E52727)
  children: React.ReactNode;
  className?: string;
}

const BASE = {
  fontFamily: "'Clash Grotesk', sans-serif",
  fontWeight: 600,
  lineHeight: 1.0,
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
};

export default function Eyebrow({
  variant = "badge",
  num,
  color = "#E52727",
  numColor = "#E52727",
  children,
  className = "",
}: EyebrowProps) {
  if (variant === "step") {
    return (
      <div
        className={`flex items-center gap-4 ${className}`}
        style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "24px", lineHeight: 1.0, letterSpacing: "0em" }}
      >
        {num && <span style={{ color: numColor }}>{num}</span>}
        <span style={{ color }}>{children}</span>
      </div>
    );
  }

  const size = variant === "section" ? "24px" : "12px";

  return (
    <p
      className={className}
      style={{ ...BASE, fontSize: size, color }}
    >
      {children}
    </p>
  );
}
