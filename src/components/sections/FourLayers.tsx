"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollRef } from "@/components/layout/ScrollProvider";
import { motion, AnimatePresence } from "framer-motion";
import PlatformInfographic from "@/components/sections/PlatformInfographic";
import { Heading, BodyText } from "@/components/ui";

const steps = [
  {
    num: "01",
    label: "Context",
    color: "var(--red)",
    headline: "Build the knowledge base your QA needs.",
    body: "Feed Bugasura your requirements, user stories, past defects, and product docs. It builds shared context that every test decision gets made against — not just what to test, but why it matters to your users.",
    bullets: [
      "Requirements and user story ingestion",
      "Defect history analysis and pattern mapping",
      "Documentation and knowledge base sync",
      "Product and domain context building",
    ],
    cardBg: "var(--tint-salmon)",
  },
  {
    num: "02",
    label: "Refine",
    color: "var(--orange)",
    headline: "Turn raw signals into precision test coverage.",
    body: "Bugasura analyses your context to surface the highest-risk areas, prune redundant cases, and align coverage to what actually breaks in production.",
    bullets: [
      "Risk-based test prioritisation",
      "Duplicate and redundant case detection",
      "Coverage gap analysis",
      "Continuous refinement as context evolves",
    ],
    cardBg: "var(--tint-orange)",
  },
  {
    num: "03",
    label: "Generate",
    color: "var(--blue)",
    headline: "AI-written tests grounded in your context.",
    body: "Generate test cases, scripts, and edge-case scenarios that reflect your actual product — not generic patterns from training data.",
    bullets: [
      "Context-aware test case generation",
      "Edge case and boundary detection",
      "Natural language to test script conversion",
      "Multi-format output (manual, automation, BDD)",
    ],
    cardBg: "var(--tint-blue)",
  },
  {
    num: "04",
    label: "Execute",
    color: "#888888",
    headline: "Run, report, and close the loop automatically.",
    body: "Asura agents execute tests, triage failures, and push results back into your workflow — turning QA from a bottleneck into a continuous signal.",
    bullets: [
      "Autonomous test execution via Asura agents",
      "Intelligent failure triage and root cause",
      "CI/CD pipeline integration",
      "Real-time dashboards and stakeholder reports",
    ],
    cardBg: "var(--tint-gray)",
  },
];

export default function FourLayers() {
  const [active, setActive] = useState(0);
  const scrollRef = useScrollRef();
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = scrollRef?.current;
    if (!container) return;

    const observers: IntersectionObserver[] = [];

    triggerRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(i); },
        { root: container, threshold: 0.5 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [scrollRef]);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ backgroundColor: "var(--cream)" }}
    >
      {/* ── Scroll triggers — desktop only ── */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {steps.map((_, i) => (
          <div
            key={i}
            ref={(el) => { triggerRefs.current[i] = el; }}
            style={{ height: "100vh", top: `${i * 100}vh`, position: "absolute", width: "100%" }}
          />
        ))}
      </div>

      {/* ── Sticky content panel ── */}
      <div
        className="relative lg:sticky top-0 flex flex-col lg:overflow-hidden lg:h-[calc(100vh-48px)]"
      >
        {/* Top header row */}
        <div className="flex flex-col lg:flex-row items-start lg:justify-between px-4 lg:px-10 pt-8 lg:pt-10 pb-4 lg:pb-6 gap-4">
          <Heading
            level="section"
            as="h2"
            color="var(--dark)"
            className="text-center lg:text-left w-full lg:w-auto"
            style={{
              fontSize: "clamp(32px, 4.5vw, 68px)",
              lineHeight: 1.02,
            }}
          >
            Four layers. One system.
            <br />
            End-to-end quality.
          </Heading>

          {/* Desktop only — THE PLATFORM label + body */}
          <div className="hidden lg:block" style={{ maxWidth: "320px" }}>
            <p
              className="font-semibold mb-2"
              style={{ fontSize: "12px", letterSpacing: "0.08em", color: "var(--dark)", opacity: 0.5, textTransform: "uppercase" }}
            >
              The Platform
            </p>
            <BodyText color="var(--dark)" style={{ fontSize: "15px" }}>
              From context ingestion to agent-powered execution — a connected platform built for how AI-era teams actually build.
            </BodyText>
          </div>
        </div>

        {/* ── Mobile accordion — outlined boxes, all active colours ── */}
        <div className="flex flex-col gap-3 px-4 pb-8 lg:hidden">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="rounded-[16px] overflow-hidden cursor-pointer"
              style={{ border: "1.5px solid rgba(0,0,0,0.1)" }}
              onClick={() => setActive(active === i ? -1 : i)}
            >
              {/* Row header */}
              <div className="flex items-center justify-between px-4 py-4">
                <div className="flex items-center gap-2">
                  <span className="font-semibold" style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: "20px", lineHeight: 1.0, color: step.color, minWidth: "32px" }}>
                    {step.num}
                  </span>
                  <span className="font-semibold" style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: "20px", lineHeight: 1.0, color: "var(--dark)" }}>
                    {step.label}
                  </span>
                </div>
                <motion.span
                  animate={{ rotate: active === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 6L8 11L13 6" stroke="rgba(30,30,30,0.4)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.span>
              </div>
              {/* Expanded content */}
              <AnimatePresence initial={false}>
                {active === i && (
                  <motion.div
                    key="mob-content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="px-4 pb-5" style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
                      <Heading level="step" as="h3" color="var(--dark)" className="mt-4 mb-2" style={{ fontSize: "22px", lineHeight: 1.1 }}>
                        {step.headline}
                      </Heading>
                      <BodyText color="var(--dark)" style={{ fontSize: "14px" }}>
                        {step.body}
                      </BodyText>
                      <ul className="flex flex-col mt-3">
                        {step.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2">
                            <span className="mt-[9px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: step.color }} />
                            <BodyText as="span" color="var(--dark)" style={{ fontSize: "13px", lineHeight: 1.35 }}>{b}</BodyText>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* ── Desktop: two-column steps + card ── */}
        <div className="hidden lg:flex lg:flex-1 px-10 pb-10 gap-10 overflow-hidden">

          {/* Left: steps list */}
          <div className="flex flex-col justify-center gap-0 w-[44%] flex-shrink-0">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`cursor-pointer ${i > 0 ? "border-t" : ""}`}
                style={{ borderColor: "rgba(30,30,30,0.12)" }}
                onClick={() => setActive(i)}
              >
                <div className="flex items-center gap-2 py-4">
                  <span className="font-semibold" style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: "24px", lineHeight: 1.0, letterSpacing: "0em", color: active === i ? step.color : "rgba(30,30,30,0.25)", minWidth: "36px" }}>
                    {step.num}
                  </span>
                  <span className="font-semibold" style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: "24px", lineHeight: 1.0, letterSpacing: "0em", color: active === i ? "var(--dark)" : "rgba(30,30,30,0.35)" }}>
                    {step.label}
                  </span>
                </div>
                <AnimatePresence initial={false}>
                  {active === i && (
                    <motion.div key="content" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} style={{ overflow: "hidden" }}>
                      <div className="pb-5">
                        <Heading level="step" as="h3" color="var(--dark)" className="mb-3" style={{ fontSize: "32px", lineHeight: 1.1 }}>{step.headline}</Heading>
                        <BodyText color="var(--dark)" className="mb-4" style={{ fontSize: "15px" }}>{step.body}</BodyText>
                        <ul className="flex flex-col gap-0">
                          {step.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-2">
                              <span className="mt-[11px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--dark)" }} />
                              <BodyText as="span" color="var(--dark)" style={{ fontSize: "15px", lineHeight: 1.35 }}>{b}</BodyText>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right: card */}
          <motion.div
            className="flex-1 relative rounded-[24px] overflow-hidden"
            animate={{ backgroundColor: steps[active].cardBg }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <PlatformInfographic active={active} />
          </motion.div>
        </div>
      </div>

      {/* ── Scroll space — desktop only ── */}
      <div className="hidden lg:block" style={{ height: "400vh" }} />
    </section>
  );
}
