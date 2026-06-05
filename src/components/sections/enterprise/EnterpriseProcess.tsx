"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import { Phone, FileText, ShieldCheck, Rocket, ChevronLeft, ChevronRight } from "lucide-react";
import { Heading, BodyText } from "@/components/ui";
import type { LucideProps } from "lucide-react";

type StepData = {
  num: string;
  Icon: React.ComponentType<LucideProps>;
  iconBg: string;
  iconColor: string;
  label: string;
  title: string;
  desc: string;
  tags: string[];
};

const steps: StepData[] = [
  {
    num: "01",
    Icon: Phone,
    iconBg: "rgba(255,168,64,0.18)",
    iconColor: "#CC7A00",
    label: "30 min",
    title: "Discovery call",
    desc: "We learn your team size, deployment needs, compliance requirements, and what you're trying to solve.",
    tags: ["30-min call", "Team size", "Requirements", "Compliance"],
  },
  {
    num: "02",
    Icon: FileText,
    iconBg: "rgba(229,39,39,0.1)",
    iconColor: "#C22020",
    label: "2–3 days",
    title: "Scoping & proposal",
    desc: "We come back with a deployment scope, a commercial proposal, and custom terms — not a standard package.",
    tags: ["Deployment scope", "Custom proposal", "Commercial terms"],
  },
  {
    num: "03",
    Icon: ShieldCheck,
    iconBg: "rgba(41,165,255,0.14)",
    iconColor: "#0077C2",
    label: "Parallel",
    title: "Security review",
    desc: "SOC 2 report, DPA, MSA, and infosec questionnaire support runs in parallel with commercial negotiation.",
    tags: ["SOC 2 report", "DPA & MSA", "Infosec review"],
  },
  {
    num: "04",
    Icon: Rocket,
    iconBg: "rgba(201,150,58,0.15)",
    iconColor: "#A87820",
    label: "2–4 weeks",
    title: "Deployment & onboarding",
    desc: "Your dedicated success manager handles deployment, team onboarding, and integration setup end to end.",
    tags: ["Team onboarding", "Integrations", "Success manager"],
  },
];

const MAX_CARD_WIDTH = 400; // px cap so cards aren't enormous on wide screens

export default function EnterpriseProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [index, setIndex] = useState(0);

  // Measure the section's content area (excluding its horizontal padding) so
  // card widths are always based on the visible content column.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const measure = () => {
      const style = window.getComputedStyle(el);
      const w = el.clientWidth
        - parseFloat(style.paddingLeft)
        - parseFloat(style.paddingRight);
      setContentWidth(w);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // On mobile (<768px): show 1 card full-width; on desktop: show 2 cards capped at MAX_CARD_WIDTH
  const isMobile = contentWidth > 0 && contentWidth < 768;
  const cardsVisible = isMobile ? 1 : 2;
  const maxIndex = steps.length - cardsVisible;
  const cardWidth = contentWidth > 0
    ? (isMobile ? contentWidth : Math.min((contentWidth - 16) / 2, MAX_CARD_WIDTH))
    : 0;

  // Translate by one card + gap per step
  const translateX = index * (cardWidth + 16);

  // Clamp index when viewport resizes and maxIndex changes
  useEffect(() => {
    setIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const goTo = useCallback((next: number) => {
    setIndex(Math.max(0, Math.min(next, maxIndex)));
  }, [maxIndex]);

  return (
    <section
      ref={sectionRef}
      className="rounded-[32px]"
      style={{
        backgroundColor: "#29A5FF",
        padding: "80px clamp(24px, 6vw, 80px)",
        overflow: "hidden", // clips carousel at the actual section edges
      }}
    >
      {/* Header — centered */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <Heading
          level="section"
          as="h2"
          color="#ffffff"
          style={{
            fontSize: "clamp(32px, 4.5vw, 58px)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            marginBottom: "12px",
          }}
        >
          What happens when you reach out.
        </Heading>
        <BodyText
          color="rgba(255,255,255,0.75)"
          style={{ fontSize: "16px", lineHeight: 1.65 }}
        >
          No 6-month procurement cycles. No surprise commitments. We scope fast and get you running.
        </BodyText>
      </div>

      {/* Carousel — negative side margins make it extend to the section edges
          so overflow is clipped by the section boundary, not the inner padding. */}
      <div
        style={{
          overflow: "hidden",
          marginLeft:  "calc(-1 * clamp(24px, 6vw, 80px))",
          marginRight: "calc(-1 * clamp(24px, 6vw, 80px))",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "16px",
            // Re-apply left padding so the first card aligns with section content
            paddingLeft: "clamp(24px, 6vw, 80px)",
            transform: `translateX(-${translateX}px)`,
            transition: "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {steps.map((step, i) => (
            <React.Fragment key={step.num}>
              {i > 0 && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    width: "0px",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  <div style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                  }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/asuras/s4-arrow.svg" alt="" aria-hidden style={{ width: "16px", height: "auto" }} />
                  </div>
                </div>
              )}
            <div
              style={{
                flexShrink: 0,
                width: cardWidth > 0 ? `${cardWidth}px` : "80%",
                background: "#FFF6E2",
                borderRadius: "24px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Icon box */}
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "14px",
                  background: step.iconBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  flexShrink: 0,
                }}
              >
                <step.Icon size={24} strokeWidth={1.6} color={step.iconColor} />
              </div>

              {/* Title */}
              <Heading
                level="subsection"
                as="h3"
                color="var(--dark)"
                style={{ fontSize: "22px", lineHeight: 1.2, marginBottom: "10px" }}
              >
                {step.title}
              </Heading>

              {/* Description */}
              <BodyText
                color="rgba(30,30,30,0.6)"
                style={{ fontSize: "14px", lineHeight: 1.65, marginBottom: "24px", flex: 1 }}
              >
                {step.desc}
              </BodyText>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {step.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      display: "inline-block",
                      padding: "4px 11px",
                      borderRadius: "999px",
                      background: "rgba(30,30,30,0.06)",
                      fontFamily: "'Clash Grotesk', sans-serif",
                      fontSize: "11px",
                      fontWeight: 500,
                      color: "rgba(30,30,30,0.5)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Prev / Next — centered below cards */}
      <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "32px" }}>
        {[
          { dir: -1, label: "Previous", Icon: ChevronLeft,  disabled: index === 0 },
          { dir: +1, label: "Next",     Icon: ChevronRight, disabled: index >= maxIndex },
        ].map(({ dir, label, Icon, disabled }) => (
          <button
            key={label}
            onClick={() => goTo(index + dir)}
            disabled={disabled}
            aria-label={label}
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              border: "none",
              background: disabled ? "rgba(255,255,255,0.18)" : "#ffffff",
              color: disabled ? "rgba(255,255,255,0.45)" : "#1A1A1A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: disabled ? "not-allowed" : "pointer",
              transition: "background 0.2s, color 0.2s",
              flexShrink: 0,
            }}
          >
            <Icon size={20} strokeWidth={2.2} />
          </button>
        ))}
      </div>
    </section>
  );
}
