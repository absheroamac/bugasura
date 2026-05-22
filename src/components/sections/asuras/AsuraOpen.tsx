"use client";

import { useState } from "react";
import { Heading, BodyText, Button } from "@/components/ui";

const cards = [
  {
    title: "Build on the platform",
    body: "Your Asura runs on Bugasura's context engine. It inherits everything the platform knows about your product requirements, defect history, risk maps. No cold start.",
    image: "/asuras/s4-card1.png",
  },
  {
    title: "Deploy and share",
    body: "Deploy your Asura on your own Bugasura instance, or publish it to the World of Asuras. Other QA teams can discover, fork, and adapt your work.",
    image: "/asuras/s4-card2.png",
  },
  {
    title: "Grow with the marketplace.",
    body: "An SAP testing expert building an SAP Asura. A fintech QA lead building a payment-flow Asura. As the marketplace scales, creator monetization scales with it.",
    image: "/asuras/s4-card3.png",
  },
];

const codeSnippet = `import { AsuraBase, PlatformContext } from '@bugasura/sdk'

export class SAPValidationAsura extends AsuraBase {
  name = 'SAP Validation Asura'
  domain = 'sap-testing'

  async run(ctx: PlatformContext) {
    // Access defect history
    // and pull everything the bugasura platform
    const risks = await ctx.getRiskSurface()
    return this.testSAPFlows(risks)
  }
}`;

function ArrowBetween() {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      width: "0px",
      position: "relative",
      zIndex: 2,
    }}>
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
  );
}

export default function AsuraOpen() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      className="rounded-[32px] px-4 py-10 lg:px-20 lg:py-[72px]"
      style={{ backgroundColor: "#29A5FF" }}
    >
      {/* ── Heading ── */}
      <div className="text-center mb-10 lg:mb-12">
        <Heading
          level="section"
          as="h2"
          color="var(--dark)"
          style={{ fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 1.0, letterSpacing: "-0.03em" }}
        >
          The Asura Platform is open.
        </Heading>
        <BodyText
          color="var(--dark)"
          className="mt-5 mx-auto"
          style={{ fontSize: "16px", lineHeight: 1.65, maxWidth: "560px", opacity: 0.8 }}
        >
          Got a testing problem no off-the-shelf agent solves? Build an Asura that does
          exactly one thing, exceptionally well — on top of the same context engine that
          powers the built-in ones.
        </BodyText>
      </div>

      {/* ── 3 cards with arrows between them ── */}
      <div className="flex flex-col lg:flex-row lg:items-stretch mb-8 lg:mb-11 gap-3 lg:gap-3">
        {cards.map((card, i) => (
          <>
            {/* Card */}
            <div
              key={card.title}
              style={{
                flex: 1,
                backgroundColor: "#FFF6E2",
                borderRadius: "32px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Text area */}
              <div style={{ padding: "28px 28px 20px" }}>
                <Heading
                  level="step"
                  as="h3"
                  color="var(--dark)"
                  style={{ fontSize: "clamp(26px, 3vw, 38px)", lineHeight: 1.05, marginBottom: "10px" }}
                >
                  {card.title}
                </Heading>
                <BodyText color="var(--dark)" style={{ fontSize: "14px", lineHeight: 1.6, opacity: 0.75 }}>
                  {card.body}
                </BodyText>
              </div>

              {/* Image — flush to bottom, side-inset with matching radius */}
              <div style={{ flex: 1, display: "flex", alignItems: "flex-end", padding: "0 10px 10px" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.image}
                  alt={card.title}
                  style={{ width: "100%", height: "auto", display: "block", borderRadius: "22px" }}
                />
              </div>
            </div>

            {/* Arrow between cards — desktop only */}
            {i < cards.length - 1 && (
              <div key={`arrow-${i}`} className="hidden lg:flex">
                <ArrowBetween />
              </div>
            )}
          </>
        ))}
      </div>

      {/* ── Code block ── */}
      <div
        style={{
          backgroundColor: "#1E1E1E",
          borderRadius: "24px",
          padding: "32px",
          marginBottom: "32px",
          position: "relative",
        }}
      >
        {/* Copy button — absolute top-right on desktop, hidden on mobile */}
        <button
          className="hidden lg:flex"
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            alignItems: "center",
            gap: "6px",
            padding: "8px 16px",
            borderRadius: "8px",
            backgroundColor: copied ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.1)",
            border: `1px solid ${copied ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.15)"}`,
            color: copied ? "#90EE90" : "#ffffff",
            fontFamily: "'Clash Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: "13px",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onClick={handleCopy}
        >
          {copied ? (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7L5.5 10.5L12 3.5" stroke="#90EE90" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="4" y="4" width="9" height="9" rx="1.5" stroke="white" strokeWidth="1.2"/>
              <path d="M4 3V2.5A1.5 1.5 0 0 1 5.5 1H11.5A1.5 1.5 0 0 1 13 2.5V8.5A1.5 1.5 0 0 1 11.5 10H11" stroke="white" strokeWidth="1.2"/>
            </svg>
          )}
          {copied ? "COPIED!" : "COPY"}
        </button>

        <pre
          style={{
            margin: 0,
            fontFamily: "'Fira Code', 'Fira Mono', 'Courier New', monospace",
            fontSize: "13px",
            lineHeight: 1.7,
            color: "#e0e0e0",
            overflowX: "auto",
            whiteSpace: "pre",
          }}
        >
          <code>
            {codeSnippet.split('\n').map((line, i) => {
              const highlighted = line
                .replace(/(import|export|class|extends|async|const|return|from)/g, '<kw>$1</kw>')
                .replace(/('.*?')/g, '<str>$1</str>')
                .replace(/(\/\/.*)/g, '<comment>$1</comment>');
              return (
                <span key={i} dangerouslySetInnerHTML={{ __html: highlighted
                  .replace(/<kw>(.*?)<\/kw>/g, '<span style="color:#C792EA">$1</span>')
                  .replace(/<str>(.*?)<\/str>/g, '<span style="color:#C3E88D">$1</span>')
                  .replace(/<comment>(.*?)<\/comment>/g, '<span style="color:#546E7A">$1</span>')
                }} />
              );
            }).reduce<React.ReactNode[]>((acc, el, i) => i === 0 ? [el] : [...acc, '\n', el], [])}
          </code>
        </pre>

        {/* Copy button — below code on mobile, inside the container */}
        <button
          className="lg:hidden flex items-center justify-center gap-2 w-full mt-5"
          style={{
            padding: "10px 20px",
            borderRadius: "10px",
            backgroundColor: copied ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.08)",
            border: `1px solid ${copied ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.15)"}`,
            color: copied ? "#90EE90" : "#ffffff",
            fontFamily: "'Clash Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: "13px",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onClick={handleCopy}
        >
          {copied ? (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7L5.5 10.5L12 3.5" stroke="#90EE90" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="4" y="4" width="9" height="9" rx="1.5" stroke="white" strokeWidth="1.2"/>
              <path d="M4 3V2.5A1.5 1.5 0 0 1 5.5 1H11.5A1.5 1.5 0 0 1 13 2.5V8.5A1.5 1.5 0 0 1 11.5 10H11" stroke="white" strokeWidth="1.2"/>
            </svg>
          )}
          {copied ? "COPIED!" : "COPY CODE"}
        </button>
      </div>

      {/* ── Footer row: CTA + launch note ── */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <Button href="/signup" variant="white" size="md" className="w-full lg:w-auto justify-center">
          <span className="lg:hidden">Join Developer Programme</span>
          <span className="hidden lg:inline">Join the Early Developer Programme</span>
        </Button>
        <BodyText color="var(--dark)" className="text-[14px] lg:text-[16px]" style={{ opacity: 0.7 }}>
          Launching to developers Q3 2026 · SDK in active development
        </BodyText>
      </div>
    </section>
  );
}
