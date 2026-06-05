"use client";

import { useState } from "react";
import Image from "next/image";
import { Heading, BodyText } from "@/components/ui";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

interface SolutionsTestimonialProps {
  testimonials: Testimonial[];
}

const BG_COLORS = ["#FDD9C8", "#FFDAA8", "#B2D9EC", "#DCDCDC"];

export default function SolutionsTestimonial({ testimonials }: SolutionsTestimonialProps) {
  const [active, setActive] = useState(0);
  const current = testimonials[active];
  const bg = BG_COLORS[active % BG_COLORS.length];

  return (
    <section
      className="rounded-[32px]"
      style={{ backgroundColor: bg, padding: "clamp(48px, 8vw, 80px) clamp(24px, 6vw, 80px)", transition: "background-color 0.4s ease" }}
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

        {/* Left: quote + nav */}
        <div className="flex-1 flex flex-col">
          <svg width="36" height="28" viewBox="0 0 36 28" fill="none" aria-hidden style={{ marginBottom: "24px", opacity: 0.25 }}>
            <path d="M0 28V16.8C0 7.47 5.6 2.07 16.8 0l1.68 3.36C12.32 4.76 9.1 7.7 8.4 12.6H15.4V28H0ZM20.6 28V16.8C20.6 7.47 26.2 2.07 37.4 0l1.68 3.36C32.92 4.76 29.7 7.7 29 12.6H36V28H20.6Z" fill="#1A1A1A"/>
          </svg>

          <Heading
            level="section"
            as="p"
            color="var(--dark)"
            style={{ fontSize: "clamp(20px, 2.5vw, 30px)", lineHeight: 1.4, letterSpacing: "-0.015em", marginBottom: "28px" }}
          >
            {current.quote}
          </Heading>

          <div style={{ marginBottom: "36px" }}>
            <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: "15px", fontWeight: 700, color: "var(--dark)", lineHeight: 1.3 }}>
              {current.name}
            </p>
            <BodyText color="rgba(30,30,30,0.55)" style={{ fontSize: "14px", marginTop: "2px" }}>
              {current.role}, {current.company}
            </BodyText>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                style={{
                  width: i === active ? "28px" : "8px",
                  height: "8px",
                  borderRadius: "999px",
                  background: i === active ? "rgba(30,30,30,0.7)" : "rgba(30,30,30,0.2)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 0.25s ease",
                }}
              />
            ))}
          </div>
        </div>

        {/* Right: illustration */}
        <div
          className="hidden lg:block flex-shrink-0"
          style={{ width: "440px", position: "relative", alignSelf: "stretch", minHeight: "300px" }}
        >
          <Image
            src="/illustrations/feedback.png"
            alt=""
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
            sizes="440px"
          />
        </div>

      </div>
    </section>
  );
}
