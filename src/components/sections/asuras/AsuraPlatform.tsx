"use client";

import { Heading, BodyText } from "@/components/ui";

const steps = [
  {
    title: "Platform learns your product",
    body: "Context, Refine, and Generate layers build the shared intelligence — requirements, past defects, risk mapping.",
  },
  {
    title: "You attach an Asura to your project",
    body: "No configuration from scratch. The Asura inherits your platform context and knows what to prioritise immediately.",
  },
  {
    title: "It runs, reports, and escalates",
    body: "Test results flow back to Bugasura. Issues auto-escalate to your backlog. Eagle Eye surfaces the executive view.",
  },
];

function BracketConnector({ label }: { label: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", padding: "0 40px" }}>
      {/* Bracket arms */}
      <div style={{
        width: "100%",
        height: "20px",
        borderLeft: "1.5px solid #BBBBBB",
        borderRight: "1.5px solid #BBBBBB",
        borderBottom: "1.5px solid #BBBBBB",
        borderRadius: "0 0 6px 6px",
      }} />
      {/* Centre line down */}
      <div style={{ width: "1.5px", height: "16px", backgroundColor: "#BBBBBB" }} />
      {/* Arrow head */}
      <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
        <path d="M1 1L5 6L9 1" stroke="#BBBBBB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {/* Handwritten annotation */}
      <p style={{
        fontFamily: "var(--font-caveat)",
        fontSize: "15px",
        color: "#888",
        marginTop: "4px",
        whiteSpace: "nowrap",
      }}>
        {label}
      </p>
    </div>
  );
}

function Pill({ label, bg = "#FFFFFF" }: { label: string; bg?: string }) {
  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      padding: "6px 16px",
      borderRadius: "8px",
      backgroundColor: bg,
      fontFamily: "'Clash Grotesk', sans-serif",
      fontWeight: 500,
      fontSize: "14px",
      color: "#1E1E1E",
      border: "1px solid rgba(0,0,0,0.08)",
    }}>
      {label}
    </span>
  );
}

export default function AsuraPlatform() {
  return (
    <section
      className="rounded-[32px]"
      style={{ backgroundColor: "#FFF6E2", padding: "80px 64px" }}
    >
      {/* ── Top: copy left / diagram right ── */}
      <div className="flex items-start gap-16 mb-16">

        {/* Left — copy */}
        <div style={{ flex: "0 0 38%" }}>
          <Heading
            level="hero"
            as="h2"
            color="var(--dark)"
            style={{ fontSize: "clamp(48px, 4.5vw, 68px)", lineHeight: 1.0, letterSpacing: "-0.03em" }}
          >
            Platform intelligence.
            <br />
            Agent execution.
          </Heading>
          <BodyText
            color="var(--dark)"
            className="mt-6"
            style={{ fontSize: "16px", lineHeight: 1.65, maxWidth: "400px", opacity: 0.75 }}
          >
            Asuras aren't standalone tools. They're execution-layer agents that run on
            top of Bugasura's full platform — inheriting everything the platform knows
            about your product before they test a single thing.
          </BodyText>
        </div>

        {/* Right — infographic image */}
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/asuras/section3-infographic.png"
            alt="Platform intelligence flows into every Asura"
            style={{ width: "75%", height: "auto", display: "block" }}
          />
        </div>
      </div>

      {/* ── Bottom: 3 feature cards ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
        {steps.map((s) => (
          <div
            key={s.title}
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "20px",
              padding: "32px",
            }}
          >
            <Heading
              level="step"
              as="h3"
              color="var(--dark)"
              style={{ fontSize: "22px", lineHeight: 1.2, marginBottom: "12px" }}
            >
              {s.title}
            </Heading>
            <BodyText
              color="var(--dark)"
              style={{ fontSize: "15px", lineHeight: 1.65, opacity: 0.75 }}
            >
              {s.body}
            </BodyText>
          </div>
        ))}
      </div>
    </section>
  );
}
