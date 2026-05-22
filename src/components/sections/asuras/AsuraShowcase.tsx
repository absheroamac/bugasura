"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heading, BodyText } from "@/components/ui";

const asuras = [
  {
    id: "browser",
    tab: "Browser Asura",
    tabIcon: "/asuras/tab-browser.png",
    eyebrow: "WEB TESTING",
    heading: "Browser Asura",
    quote: '"Hunts bugs across every page, every flow, every state."',
    body: "End-to-end web testing powered by your Bugasura context. It doesn't just click through screens — it understands your user flows and tests what matters to real users.",
    features: [
      "Natural language test authoring, no Selenium scripts",
      "Cross-browser execution with smart diff reporting",
      "Screenshot and video capture on failure",
      "Auto-escalation to Bugasura issue backlog",
      "Context-aware flow prioritisation",
    ],
    badge: "Early Access",
    char: "/asuras/char-browser.png",
    eyebrowColor: "#D51618",
  },
  {
    id: "api",
    tab: "API Asura",
    tabIcon: "/asuras/tab-api.png",
    eyebrow: "API TESTING",
    heading: "API Asura",
    quote: '"Every contract. Every edge. Every regression."',
    body: "Contract and regression testing that understands your API surface from your Bugasura context — not just a Postman collection.",
    features: [
      "Automatic contract generation from codebase context",
      "Schema drift detection across environments",
      "Response time and reliability regression tracking",
      "CI/CD integration with pass/fail gates",
      "Auto-linked to requirements and defect history",
    ],
    badge: "Early Access",
    char: "/asuras/char-api.png",
    eyebrowColor: "#D51618",
  },
  {
    id: "duplicate",
    tab: "Duplicate Bug",
    tabIcon: "/asuras/tab-duplicate.png",
    eyebrow: "BACKLOG HYGIENE",
    heading: "Duplicate Bug Asura",
    quote: '"One bug, one ticket. Every time."',
    body: "Keeps your issue backlog clean by detecting and merging duplicate defects before they pile up and slow your team down.",
    features: [
      "Semantic similarity detection across all open issues",
      "Auto-merge suggestions with confidence scores",
      "Root cause clustering for recurring bugs",
      "Reduces backlog noise by up to 40%",
      "Works on Bugasura, Jira, and Linear",
    ],
    badge: "Early Access",
    char: "/asuras/char-duplicate.png",
    eyebrowColor: "#D51618",
  },
  {
    id: "mobile",
    tab: "Mobile Asura",
    tabIcon: "/asuras/tab-mobile.png",
    eyebrow: "MOBILE TESTING",
    heading: "Mobile Asura",
    quote: '"iOS and Android. Real devices. Real flows."',
    body: "Autonomous mobile testing that runs on real device clouds — understanding your app flows from your Bugasura context, not just tap scripts.",
    features: [
      "iOS and Android execution on real device cloud",
      "Gesture, orientation, and interrupt testing",
      "Visual regression across screen sizes",
      "Crash log capture and auto-triage",
      "Context-aware test path generation",
    ],
    badge: "Coming Soon",
    char: "/asuras/char-mobile.png",
    eyebrowColor: "#D51618",
  },
];

export default function AsuraShowcase() {
  const [active, setActive] = useState(0);
  const asura = asuras[active];

  return (
    <section
      className="rounded-[32px]"
      style={{ backgroundColor: "#F0A030", padding: "72px 0 24px" }}
    >
      {/* ── Heading block ── */}
      <div className="text-center px-4 lg:px-16 mb-10">
        <Heading
          level="section"
          as="h2"
          color="var(--dark)"
          style={{ fontSize: "clamp(32px, 5vw, 72px)", lineHeight: 1.0, letterSpacing: "-0.03em" }}
        >
          Specialized. Named. Unstoppable.
        </Heading>
        <BodyText
          color="var(--dark)"
          className="mt-5 mx-auto"
          style={{ fontSize: "16px", lineHeight: 1.65, maxWidth: "720px", opacity: 0.75 }}
        >
          Each Asura is a focused agent — trained on a specific testing domain,
          powered by your platform context, and built to run without a test script to follow.
        </BodyText>
      </div>

      {/* ── Tab switcher ── */}
      <div
        className="flex justify-center px-4 lg:px-16"
        style={{ position: "relative", zIndex: 2, marginBottom: "-32px" }}
      >
        {/* Pill — full width on mobile (tabs scroll inside), auto on desktop */}
        <div
          className="w-full lg:w-auto"
          style={{
            backgroundColor: "#FFDDB4",
            borderRadius: "24px",
            padding: "6px",
          }}
        >
          <div
            className="flex gap-[6px] overflow-x-auto lg:overflow-visible"
            style={{ scrollbarWidth: "none", borderRadius: "18px" }}
          >
            {asuras.map((a, i) => (
              <button
                key={a.id}
                onClick={() => setActive(i)}
                className="w-[160px] lg:w-[220px] text-[13px] lg:text-[16px] flex items-center justify-start gap-2 flex-shrink-0"
                style={{
                  padding: "8px 12px",
                  borderRadius: "18px",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'Clash Grotesk', sans-serif",
                  fontWeight: 600,
                  backgroundColor: active === i ? "#D51618" : "#FFB862",
                  color: active === i ? "#ffffff" : "#1E1E1E",
                  transition: "background-color 0.2s ease, color 0.2s ease",
                  whiteSpace: "nowrap",
                }}
              >
                <img
                  src={a.tabIcon}
                  alt=""
                  aria-hidden
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "14px",
                    flexShrink: 0,
                    objectFit: "contain",
                  }}
                />
                {a.tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Content panel ── */}
      <div
        style={{
          backgroundColor: "#FFB862",
          borderRadius: "28px",
          margin: "0 16px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ── DESKTOP: 3-column layout with jar ── */}
        <div
          className="hidden lg:flex items-center gap-0"
          style={{ padding: "0px 48px 0px" }}
        >
          {/* Left — copy */}
          <div className="flex flex-col flex-shrink-0" style={{ width: "28%", paddingRight: "32px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={asura.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <p className="font-semibold mb-3" style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: "20px", letterSpacing: "0.1em", color: asura.eyebrowColor }}>
                  {asura.eyebrow}
                </p>
                <Heading level="subsection" as="h3" color="var(--dark)" style={{ fontSize: "56px", lineHeight: 1.05, marginBottom: "16px" }}>
                  {asura.heading}
                </Heading>
                <p className="mb-4" style={{ fontFamily: "var(--font-caveat)", fontSize: "26px", lineHeight: 1.1, color: "var(--dark)" }}>
                  {asura.quote}
                </p>
                <BodyText color="var(--dark)" style={{ fontSize: "15px", lineHeight: 1.65, opacity: 0.8 }}>
                  {asura.body}
                </BodyText>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Centre — jar composition */}
          <div className="flex-1 flex justify-center items-end" style={{ position: "relative", minHeight: "650px" }}>
            <div style={{ position: "relative", width: "525px", height: "650px" }}>
              <img src="/asuras/jar.png" alt="" aria-hidden style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", zIndex: 1 }} />
              <div style={{ position: "absolute", bottom: "24%", left: 0, right: 0, display: "flex", justifyContent: "center", alignItems: "flex-end", zIndex: 2 }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={asura.id}
                    src={asura.char}
                    alt={asura.heading}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: [0, 1, 0.15, 1, 0.4, 1, 0.7, 1], scale: [0.92, 1, 1, 1, 1, 1, 1, 1] }}
                    exit={{ opacity: [1, 0.4, 1, 0.1, 0], scale: [1, 1, 1, 0.96, 0.96] }}
                    transition={{ duration: 0.45, times: [0, 0.12, 0.25, 0.4, 0.55, 0.7, 0.85, 1], ease: "linear" }}
                    style={{ width: "60%", height: "auto", objectFit: "contain", display: "block" }}
                  />
                </AnimatePresence>
              </div>
              <img src="/asuras/jar-overlay.png" alt="" aria-hidden style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", zIndex: 3, pointerEvents: "none" }} />
            </div>
          </div>

          {/* Right — features */}
          <div className="flex flex-col flex-shrink-0" style={{ width: "28%", paddingLeft: "32px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={asura.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut", delay: 0.05 }}
                className="flex flex-col gap-2"
              >
                {asura.features.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <img src="/asuras/pointer.svg" alt="" aria-hidden style={{ width: "18px", height: "18px", flexShrink: 0, marginTop: "2px" }} />
                    <BodyText color="var(--dark)" style={{ fontSize: "16px", fontWeight: 600, lineHeight: 1.3 }}>{f}</BodyText>
                  </div>
                ))}
                <div style={{ marginTop: "32px" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 14px", borderRadius: "999px", backgroundColor: "rgba(255,255,255,0.7)", fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "13px", color: "#D51618" }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7L5.5 10.5L12 3.5" stroke="#D51618" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {asura.badge}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── MOBILE: stacked copy + features ── */}
        <div className="lg:hidden px-5 pt-12 pb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={asura.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <p className="font-semibold mb-2" style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: "14px", letterSpacing: "0.1em", color: asura.eyebrowColor }}>
                {asura.eyebrow}
              </p>
              <Heading level="subsection" as="h3" color="var(--dark)" style={{ fontSize: "clamp(32px, 8vw, 48px)", lineHeight: 1.05, marginBottom: "12px" }}>
                {asura.heading}
              </Heading>
              <p className="mb-3" style={{ fontFamily: "var(--font-caveat)", fontSize: "22px", lineHeight: 1.1, color: "var(--dark)" }}>
                {asura.quote}
              </p>
              <BodyText color="var(--dark)" style={{ fontSize: "15px", lineHeight: 1.65, opacity: 0.8 }}>
                {asura.body}
              </BodyText>

              {/* Features list */}
              <div className="flex flex-col gap-3 mt-6">
                {asura.features.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <img src="/asuras/pointer.svg" alt="" aria-hidden style={{ width: "18px", height: "18px", flexShrink: 0, marginTop: "2px" }} />
                    <BodyText color="var(--dark)" style={{ fontSize: "15px", fontWeight: 600, lineHeight: 1.3 }}>{f}</BodyText>
                  </div>
                ))}
              </div>

              {/* Badge */}
              <div className="mt-6">
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 14px", borderRadius: "999px", backgroundColor: "rgba(255,255,255,0.7)", fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "13px", color: "#D51618" }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7L5.5 10.5L12 3.5" stroke="#D51618" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {asura.badge}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
