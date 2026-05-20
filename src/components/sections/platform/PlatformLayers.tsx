"use client";

import { useRef, RefObject } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useScrollRef } from "@/components/layout/ScrollProvider";

const layers = [
  {
    id: "context",
    label: "Context",
    labelColor: "#AC1515",
    bg: "#FDD9C8",
    cardBg: "rgba(255,255,255,0.6)",
    iconBg: "rgba(172,21,21,0.12)",
    headline: "Build knowledge behind every test decision.",
    body: "Before Bugasura writes a test or maps a risk, it needs to understand your product. The Context layer is where that intelligence lives — and grows with every sprint.",
    cards: [
      { title: "Knowledge Base", desc: "Ingest your product documentation, onboarding materials, and internal wikis. Bugasura builds a searchable, AI-indexed knowledge layer that every other module draws from when making test decisions." },
      { title: "Requirements Management", desc: "Link requirements and user stories directly to tests. When a requirement changes, Bugasura flags which tests need to be revisited — automatically, not manually." },
      { title: "Defect History Analysis", desc: "Your past bugs are a map of your product's risk. Bugasura analyses defect patterns, recurring failure points, and regression history to inform where future tests need to focus." },
    ],
    output: "Feeds into the Refine layer as the foundation for Q&A and risk mapping",
  },
  {
    id: "refine",
    label: "Refine",
    labelColor: "#C47200",
    bg: "#FFDAA8",
    cardBg: "rgba(255,255,255,0.6)",
    iconBg: "rgba(196,114,0,0.12)",
    headline: "Ask better questions before writing a single test.",
    body: "A senior QA lead doesn't start with test cases. They start with questions. The Refine layer does the same — mapping risk, surfacing ambiguity, and aligning coverage to what actually matters.",
    cards: [
      { title: "Testpert Q&A Engine", desc: "Bugasura's AI asks the clarifying questions your team should be asking before sprint planning — about edge cases, user journeys, and business-critical paths. The answers shape everything that comes after." },
      { title: "Risk Surface Mapping", desc: "Maps your product's risk surface — combining requirements context, defect history, and business impact scores — so test coverage is allocated where it matters, not where it's easiest." },
      { title: "Expert-in-the-Loop Mode", desc: "Your senior testers stay in control. Refine surfaces AI-generated questions and risk maps, but a human expert reviews, adjusts, and approves before anything is generated." },
    ],
    output: "Risk-prioritised context passed to the Generate layer for test strategy creation",
  },
  {
    id: "generate",
    label: "Generate",
    labelColor: "#0077B6",
    bg: "#B2D9EC",
    cardBg: "rgba(255,255,255,0.65)",
    iconBg: "rgba(0,119,182,0.12)",
    headline: "Risk-based test strategies, not vanity coverage.",
    body: "Line coverage that looks good in a report and misses the edge case that breaks production is not quality. Generate creates test plans that reflect what actually puts your users at risk.",
    cards: [
      { title: "Test Case Generation", desc: "Test cases generated from your context and risk map — not from a template. Bugasura writes the cases a senior QA lead would write, covering critical paths, edge cases, and regression scenarios." },
      { title: "Coverage Planning", desc: "Coverage mapped against risk priority. Bugasura doesn't chase 100% line coverage — it builds toward coverage of the scenarios that matter most, ordered by business and user impact." },
      { title: "Sprint Alignment", desc: "Test plans structured around your sprint cycle. Bugasura generates a sprint-ready test plan alongside the development scope — so QA doesn't start from scratch every two weeks." },
    ],
    output: "Test cases and plans are handed off to Asuras and manual testers in the Execute layer",
  },
  {
    id: "execute",
    label: "Execute",
    labelColor: "#555555",
    bg: "#DCDCDC",
    cardBg: "rgba(255,255,255,0.65)",
    iconBg: "rgba(0,0,0,0.08)",
    headline: "Run, report, and escalate with smart agents.",
    body: "Asuras execute tests autonomously. Bug Reporter captures and enriches defects. Eagle Eye gives engineering leaders the quality visibility they've never had.",
    cards: [
      { title: "Asuras — Test Agents", desc: "Browser, API, and Mobile Asuras execute tests autonomously — powered by platform context, not just test scripts. Each agent knows what it's testing and why." },
      { title: "Bug Reporter", desc: "Capture, enrich, and triage bugs with AI-assisted context. Reports automatically include reproduction steps, environment data, and linked requirements." },
      { title: "Eagle Eye", desc: "Executive visibility into quality health. Eagle Eye surfaces what's breaking, what it's costing in revenue risk, and where quality debt is concentrated." },
      { title: "MCP Server + Integrations", desc: "Bugasura's MCP server connects to Claude and Cursor, giving developers quality context without leaving their editor. Integrates with GitHub, Jira, Slack, and more." },
    ],
    output: "Defects, test results, and coverage data flow back into the Context layer — closing the loop",
  },
];

type Layer = typeof layers[0];

function LayerPanel({
  layer,
  index,
  scrollContainer,
}: {
  layer: Layer;
  index: number;
  scrollContainer: RefObject<HTMLElement>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isFirst = index === 0;
  const isExecute = layer.id === "execute";

  // Track when this panel enters viewport (bottom → top)
  const { scrollYProgress } = useScroll({
    target: ref,
    container: scrollContainer,
    offset: ["start end", "start start"],
  });

  // Stay heavily tilted through most of the journey,
  // snap to flat only in the final 15% (just before it locks at top)
  const rotateX = useTransform(scrollYProgress, [0, 0.75, 0.92, 1], [2, 1.5, 0.5, 0]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.75, 0.92, 1], [-10, -8, -1.5, 0]);
  const scale   = useTransform(scrollYProgress, [0, 0.85, 1],        [0.92, 0.97, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.08],            [0, 1]);

  return (
    <motion.div
      ref={ref}
      className="sticky top-0 rounded-[32px] overflow-hidden flex flex-col"
      style={{
        height: "100vh",
        backgroundColor: layer.bg,
        zIndex: index + 1,
        transformOrigin: "top center",
        transformPerspective: 1400,
        ...(isFirst ? {} : { rotateX, rotateZ, scale, opacity }),
      }}
    >
      {/* ── Row 1: label + headline + body LEFT | placeholder RIGHT ── */}
      <div
        className="flex gap-8 px-12 pt-10"
        style={{ flex: 1, overflow: "hidden", minHeight: 0 }}
      >
        {/* Left */}
        <div className="flex flex-col" style={{ width: "42%", flexShrink: 0 }}>
          <p
            className="font-semibold uppercase mb-4"
            style={{
              fontFamily: "'Clash Grotesk', sans-serif",
              fontSize: "32px",
              letterSpacing: "0.04em",
              color: layer.labelColor,
            }}
          >
            {layer.label}
          </p>
          <h2
            className="font-semibold"
            style={{
              fontFamily: "'Clash Grotesk', sans-serif",
              fontSize: "68px",
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
              color: "#1A0A00",
            }}
          >
            {layer.headline}
          </h2>
          <p
            className="mt-4"
            style={{
              fontSize: "16px",
              lineHeight: 1.65,
              color: "rgba(20,10,0,0.8)",
              maxWidth: "400px",
            }}
          >
            {layer.body}
          </p>
        </div>

        {/* Right — placeholder fills full available height */}
        <div className="flex-1 flex flex-col pb-8">
          <div
            className="w-full rounded-3xl flex-1"
            style={{
              backgroundColor: "rgba(255,255,255,0.6)",
              border: "1.5px solid rgba(255,255,255,0.85)",
            }}
          />
        </div>
      </div>

      {/* ── Row 2: feature cards ── */}
      <div
        className="px-12 pt-2 pb-4"
        style={{
          flexShrink: 0,
          display: "grid",
          gridTemplateColumns: isExecute ? "repeat(4, 1fr)" : "repeat(3, 1fr)",
          gap: "12px",
        }}
      >
        {layer.cards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl p-5"
            style={{ backgroundColor: layer.cardBg }}
          >
            <div
              className="rounded-xl mb-3"
              style={{ width: "36px", height: "36px", backgroundColor: layer.iconBg }}
            />
            <p
              className="font-semibold mb-1.5"
              style={{
                fontFamily: "'Clash Grotesk', sans-serif",
                fontSize: "13px",
                color: "#1A0A00",
                lineHeight: 1.25,
              }}
            >
              {card.title}
            </p>
            <p style={{ fontSize: "11.5px", lineHeight: 1.55, color: "rgba(20,10,0,0.8)" }}>
              {card.desc}
            </p>
          </div>
        ))}
      </div>

      {/* ── Row 3: footer bar ── */}
      <div
        className="flex items-center gap-3 mx-12 mb-5 px-5 py-3 rounded-xl"
        style={{
          flexShrink: 0,
          backgroundColor: "rgba(255,255,255,0.5)",
          border: "1px solid rgba(255,255,255,0.7)",
        }}
      >
        <span
          style={{
            fontSize: "13px",
            color: "rgba(0,0,0,0.4)",
            fontStyle: "italic",
            fontFamily: "Georgia, serif",
            whiteSpace: "nowrap",
          }}
        >
          {layer.label} Layer Output
        </span>
        <span style={{ fontSize: "13px", fontWeight: 600, color: "#1A0A00" }}>
          {layer.output}
        </span>
      </div>
    </motion.div>
  );
}

export default function PlatformLayers() {
  const scrollRef = useScrollRef();

  return (
    <div style={{ position: "relative", overflowX: "clip" }}>
      {layers.map((layer, index) => (
        <LayerPanel
          key={layer.id}
          layer={layer}
          index={index}
          scrollContainer={scrollRef as RefObject<HTMLElement>}
        />
      ))}
    </div>
  );
}
