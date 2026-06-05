"use client";

import { useState } from "react";
import { Heading, BodyText } from "@/components/ui";

const FAQS = [
  {
    q: "Is the free tier really unlimited — no catch?",
    a: "No catch. Unlimited users, unlimited projects, unlimited bug reports, unlimited test cases, unlimited Asura runs. The only limit is 50 GB storage, which is more than enough for most teams. The free tier is not a trial — it has no expiry date and no seat wall. The only reason to move to Custom is if you need on-premises deployment, Testpert AI, or enterprise compliance documentation.",
  },
  {
    q: "When would I need Custom pricing?",
    a: "Custom is for three scenarios: you need on-premises or private cloud deployment with data residency guarantees; your procurement team requires SOC 2 documentation, SSO/SAML, or a dedicated success manager; or your QA team needs Testpert's advanced AI layer for risk-driven test strategy. Most teams never hit any of these — and that's fine.",
  },
  {
    q: "What exactly is Testpert, and do I need it?",
    a: "Testpert is the AI intelligence layer that sits above the core platform. It runs an expert Q&A engine before sprint planning, builds a prioritised risk surface from your requirements and defect history, and keeps a human expert in the loop before anything is generated. Most teams on the free tier don't need it. You'll know you need Testpert when your QA team's coverage decisions have direct revenue consequences — and gut instinct isn't good enough anymore.",
  },
  {
    q: "Are Asura automated test runs really unlimited?",
    a: "Yes. Browser Asura, API Asura, and Duplicate Bug Asura all run without a monthly cap on the free tier. The only constraint is 50 GB storage. Production-scale execution with priority queue and SLA guarantees is part of Custom — but unlimited runs for standard usage are free, forever.",
  },
  {
    q: "Can I migrate from another tool without losing data?",
    a: "Yes. Bugasura has import support for Jira, TestRail, and most common formats. For enterprise migrations with large datasets, our success team handles the migration as part of Custom onboarding. Reach out before you start and we'll scope the right path.",
  },
  {
    q: "Where is data hosted? What about compliance?",
    a: "Cloud hosting runs on servers in India and Singapore. Custom plans support data residency selection, dedicated infrastructure, and on-premises deployment. Bugasura is SOC 2 Type II certified. Full security and compliance documentation is available for procurement teams under NDA.",
  },
];

export default function PricingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="rounded-[32px]"
      style={{ backgroundColor: "var(--cream)", padding: "80px clamp(24px, 6vw, 80px)" }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 56px" }}>
        <Heading
          level="section"
          as="h2"
          color="var(--dark)"
          style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.025em", marginBottom: "14px" }}
        >
          Common questions.
        </Heading>
        <BodyText color="rgba(30,30,30,0.5)" style={{ fontSize: "16px", lineHeight: 1.7 }}>
          If something&apos;s not covered here, just ask us.
        </BodyText>
      </div>

      {/* Accordion */}
      <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "8px" }}>
        {FAQS.map(({ q, a }, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={q}
              style={{
                background: isOpen ? "#ffffff" : "rgba(30,30,30,0.04)",
                border: `1px solid ${isOpen ? "rgba(30,30,30,0.1)" : "rgba(30,30,30,0.07)"}`,
                borderRadius: "16px",
                overflow: "hidden",
                transition: "background 0.2s ease, border-color 0.2s ease",
              }}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full text-left"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "20px 24px",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: "16px", fontWeight: 600, color: "var(--dark)", lineHeight: 1.4 }}>
                  {q}
                </span>
                <span
                  aria-hidden
                  style={{
                    flexShrink: 0,
                    width: "28px",
                    height: "28px",
                    borderRadius: "8px",
                    background: isOpen ? "var(--dark)" : "rgba(30,30,30,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease, background 0.2s ease",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M3 5l4 4 4-4" stroke={isOpen ? "#ffffff" : "#1A1A1A"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>

              {isOpen && (
                <div style={{ padding: "0 24px 24px" }}>
                  <BodyText color="rgba(30,30,30,0.65)" style={{ fontSize: "15px", lineHeight: 1.7 }}>
                    {a}
                  </BodyText>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
