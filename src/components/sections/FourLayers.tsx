"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useScrollRef } from "@/components/layout/ScrollProvider";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    num: "01",
    label: "Context",
    headline: "Build the knowledge base your QA needs.",
    body: "Feed Bugasura your requirements, user stories, past defects, and product docs. It builds shared context that every test decision gets made against — not just what to test, but why it matters to your users.",
    bullets: [
      "Requirements and user story ingestion",
      "Defect history analysis and pattern mapping",
      "Documentation and knowledge base sync",
      "Product and domain context building",
    ],
    cardBg: "var(--tint-salmon)",
    cardImage: "/section3/card1.png",
  },
  {
    num: "02",
    label: "Refine",
    headline: "Turn raw signals into precision test coverage.",
    body: "Bugasura analyses your context to surface the highest-risk areas, prune redundant cases, and align coverage to what actually breaks in production.",
    bullets: [
      "Risk-based test prioritisation",
      "Duplicate and redundant case detection",
      "Coverage gap analysis",
      "Continuous refinement as context evolves",
    ],
    cardBg: "var(--tint-orange)",
    cardImage: null,
  },
  {
    num: "03",
    label: "Generate",
    headline: "AI-written tests grounded in your context.",
    body: "Generate test cases, scripts, and edge-case scenarios that reflect your actual product — not generic patterns from training data.",
    bullets: [
      "Context-aware test case generation",
      "Edge case and boundary detection",
      "Natural language to test script conversion",
      "Multi-format output (manual, automation, BDD)",
    ],
    cardBg: "var(--tint-blue)",
    cardImage: null,
  },
  {
    num: "04",
    label: "Execute",
    headline: "Run, report, and close the loop automatically.",
    body: "Asura agents execute tests, triage failures, and push results back into your workflow — turning QA from a bottleneck into a continuous signal.",
    bullets: [
      "Autonomous test execution via Asura agents",
      "Intelligent failure triage and root cause",
      "CI/CD pipeline integration",
      "Real-time dashboards and stakeholder reports",
    ],
    cardBg: "var(--tint-gray)",
    cardImage: null,
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
      {/* ── Scroll triggers — one per step, each viewport-height tall ── */}
      <div className="absolute inset-0 pointer-events-none">
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
        className="sticky top-0 flex flex-col overflow-hidden"
        style={{ height: "calc(100vh - 48px)" }}
      >
        {/* Top header row */}
        <div className="flex items-start justify-between px-10 pt-10 pb-6">
          <h2
            className="font-semibold"
            style={{
              fontSize: "clamp(36px, 4.5vw, 68px)",
              letterSpacing: "-0.025em",
              lineHeight: 1.02,
              color: "var(--dark)",
              whiteSpace: "nowrap",
            }}
          >
            Four layers. One system.
            <br />
            End-to-end quality.
          </h2>

          <div style={{ maxWidth: "320px" }}>
            <p
              className="font-semibold mb-2"
              style={{ fontSize: "12px", letterSpacing: "0.08em", color: "var(--dark)", opacity: 0.5, textTransform: "uppercase" }}
            >
              The Platform
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.6, color: "var(--dark)", opacity: 0.6 }}>
              From context ingestion to agent-powered execution — a connected platform built for how AI-era teams actually build.
            </p>
          </div>
        </div>

        {/* Main two-column content */}
        <div className="flex flex-1 px-10 pb-10 gap-10 overflow-hidden">

          {/* Left: steps list */}
          <div className="flex flex-col justify-center gap-0 w-[44%] flex-shrink-0">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="border-t cursor-pointer"
                style={{ borderColor: "rgba(30,30,30,0.12)" }}
                onClick={() => setActive(i)}
              >
                {/* Row header */}
                <div className="flex items-center gap-4 py-4">
                  <span
                    className="font-semibold"
                    style={{
                      fontFamily: "'Clash Grotesk', sans-serif",
                      fontSize: "24px",
                      lineHeight: 1.0,
                      letterSpacing: "0em",
                      color: active === i ? "var(--red)" : "rgba(30,30,30,0.25)",
                      minWidth: "36px",
                    }}
                  >
                    {step.num}
                  </span>
                  <span
                    className="font-semibold"
                    style={{
                      fontFamily: "'Clash Grotesk', sans-serif",
                      fontSize: "24px",
                      lineHeight: 1.0,
                      letterSpacing: "0em",
                      color: active === i ? "var(--dark)" : "rgba(30,30,30,0.35)",
                    }}
                  >
                    {step.label}
                  </span>
                </div>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {active === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="pb-5">
                        <h3
                          className="font-semibold mb-3"
                          style={{
                            fontSize: "32px",
                            letterSpacing: "-0.015em",
                            lineHeight: 1.1,
                            color: "var(--dark)",
                          }}
                        >
                          {step.headline}
                        </h3>
                        <p
                          className="mb-4"
                          style={{ fontSize: "15px", lineHeight: 1.6, color: "var(--dark)", opacity: 0.6 }}
                        >
                          {step.body}
                        </p>
                        <ul className="flex flex-col gap-2">
                          {step.bullets.map((b) => (
                            <li
                              key={b}
                              className="flex items-start gap-2"
                              style={{ fontSize: "15px", lineHeight: 1.6, color: "var(--dark)", opacity: 0.7 }}
                            >
                              <span className="mt-[11px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--dark)" }} />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            {/* Last border */}
            <div className="border-t" style={{ borderColor: "rgba(30,30,30,0.12)" }} />
          </div>

          {/* Right: card */}
          <div className="flex-1 relative rounded-[24px] overflow-hidden" style={{ backgroundColor: steps[active].cardBg }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="absolute inset-0 flex items-end justify-center"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                {steps[active].cardImage ? (
                  <Image
                    src={steps[active].cardImage!}
                    alt={steps[active].label}
                    fill
                    className="object-cover object-bottom"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center w-full h-full opacity-20">
                    <span
                      className="font-semibold"
                      style={{ fontSize: "clamp(48px, 6vw, 80px)", letterSpacing: "-0.04em", color: "var(--dark)" }}
                    >
                      {steps[active].num}
                    </span>
                    <span
                      className="font-semibold"
                      style={{ fontSize: "clamp(20px, 2vw, 28px)", color: "var(--dark)" }}
                    >
                      {steps[active].label}
                    </span>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ── Scroll space — 4 × viewport height ── */}
      <div style={{ height: "400vh" }} />
    </section>
  );
}
