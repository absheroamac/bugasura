"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AUTO_ADVANCE_MS = 6000;
const CARD_HEIGHT = 460; // fixed height for both containers

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

interface SolutionsTestimonialProps {
  testimonials: Testimonial[];
}

const THEMES = [
  { cardBg: "#F4D4C8", badgeBg: "#E05C3A" },
  { cardBg: "#FFDAA8", badgeBg: "#C47200" },
  { cardBg: "#B2D9EC", badgeBg: "#0077C2" },
  { cardBg: "#DCDCDC", badgeBg: "#555555" },
];

export default function SolutionsTestimonial({ testimonials }: SolutionsTestimonialProps) {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const theme = THEMES[active % THEMES.length];

  const goTo = (i: number) => {
    const n = testimonials.length;
    setActive(((i % n) + n) % n);
  };

  useEffect(() => {
    if (isHovered || testimonials.length <= 1) return;
    const id = setInterval(() => setActive((p) => (p + 1) % testimonials.length), AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [isHovered, testimonials.length]);

  return (
    <div
      style={{ paddingTop: "0px", paddingBottom: "28px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Quote badge — in-flow, overlaps the card top edge */}
      <div
        className="hidden lg:flex"
        style={{ marginBottom: "-28px", paddingLeft: `calc(clamp(312px, 33.6vw, 456px) + clamp(32px, 5vw, 52px))`, position: "relative", zIndex: 10 }}
      >
        <div
          style={{
            width: "56px", height: "56px", borderRadius: "16px",
            background: theme.badgeBg,
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.4s ease",
          }}
        >
          <Image src="/illustrations/quote.svg" alt="" width={28} height={22} />
        </div>
      </div>

      {/* Card — image inside, full height, content on the right */}
      <div className="hidden lg:flex" style={{ height: `${CARD_HEIGHT}px` }}>

        <div
          className="flex-1 flex rounded-[32px] overflow-hidden"
          style={{
            height: `${CARD_HEIGHT}px`,
            background: theme.cardBg,
            transition: "background 0.4s ease",
          }}
        >
          {/* Image — inside card, full height, padded from left edge */}
          <div
            style={{
              width: "clamp(312px, 33.6vw, 456px)",
              height: "100%",
              flexShrink: 0,
              boxSizing: "border-box",
              paddingLeft: "20px",
            }}
          >
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              <Image
                src="/illustrations/testimonial-character.png"
                alt=""
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="380px"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col flex-1" style={{ height: "100%", padding: "clamp(32px, 5vw, 52px)", paddingTop: "48px" }}>

            {/* Arrows */}
            {testimonials.length > 1 && (
              <div className="flex items-center justify-end gap-2" style={{ marginBottom: "28px", flexShrink: 0 }}>
                <button onClick={() => goTo(active - 1)} aria-label="Previous" style={{
                  width: "36px", height: "36px", borderRadius: "999px",
                  background: "#ffffff", border: "none",
                  cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <ChevronLeft size={16} color="rgba(0,0,0,0.6)" />
                </button>
                <button onClick={() => goTo(active + 1)} aria-label="Next" style={{
                  width: "36px", height: "36px", borderRadius: "999px",
                  background: "#ffffff", border: "none",
                  cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <ChevronRight size={16} color="rgba(0,0,0,0.6)" />
                </button>
              </div>
            )}

            {/* All testimonials stacked, crossfade */}
            <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute", inset: 0,
                    display: "flex", flexDirection: "column",
                    opacity: i === active ? 1 : 0,
                    transition: "opacity 0.4s ease",
                    pointerEvents: i === active ? "auto" : "none",
                  }}
                >
                  <p style={{
                    fontFamily: "'Clash Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(17px, 2vw, 26px)",
                    lineHeight: 1.45,
                    letterSpacing: "-0.015em",
                    color: "var(--dark)",
                    flex: 1,
                    marginBottom: "32px",
                  }}>
                    {t.quote}
                  </p>

                  <div className="flex items-end justify-between gap-6" style={{ flexShrink: 0 }}>
                    <div>
                      <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: "15px", fontWeight: 700, color: "var(--dark)", lineHeight: 1.3 }}>
                        {t.name}
                      </p>
                      <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.5)", marginTop: "3px" }}>
                        {t.role}, {t.company}
                      </p>
                    </div>
                    <p style={{
                      fontFamily: "'Clash Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "clamp(16px, 1.8vw, 24px)",
                      color: "rgba(30,30,30,0.2)",
                      letterSpacing: "-0.02em",
                      textAlign: "right",
                      flexShrink: 0,
                    }}>
                      {t.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile fallback */}
      <div className="flex lg:hidden flex-col gap-4">
        <div style={{ borderRadius: "24px", background: theme.cardBg, padding: "32px", transition: "background 0.4s ease" }}>
          <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "18px", lineHeight: 1.5, color: "var(--dark)", marginBottom: "24px" }}>
            {testimonials[active].quote}
          </p>
          <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: "15px", fontWeight: 700, color: "var(--dark)" }}>{testimonials[active].name}</p>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.5)", marginTop: "3px" }}>{testimonials[active].role}, {testimonials[active].company}</p>
        </div>
      </div>
    </div>
  );
}
