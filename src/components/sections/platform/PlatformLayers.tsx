"use client";

import { useRef, RefObject } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useScrollRef } from "@/components/layout/ScrollProvider";
import {
  BookOpen, FileText, TrendingDown,
  MessageCircle, Map, UserCheck,
  FileCode, PieChart, CalendarDays,
  Bot, Bug, Eye, Plug,
} from "lucide-react";

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
      { icon: BookOpen,    title: "Knowledge Base", desc: "Ingest your product documentation, onboarding materials, and internal wikis. Bugasura builds a searchable, AI-indexed knowledge layer that every other module draws from when making test decisions." },
      { icon: FileText,    title: "Requirements Management", desc: "Link requirements and user stories directly to tests. When a requirement changes, Bugasura flags which tests need to be revisited — automatically, not manually." },
      { icon: TrendingDown, title: "Defect History Analysis", desc: "Your past bugs are a map of your product's risk. Bugasura analyses defect patterns, recurring failure points, and regression history to inform where future tests need to focus." },
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
      { icon: MessageCircle, title: "Testpert Q&A Engine", desc: "Bugasura's AI asks the clarifying questions your team should be asking before sprint planning — about edge cases, user journeys, and business-critical paths. The answers shape everything that comes after." },
      { icon: Map,           title: "Risk Surface Mapping", desc: "Maps your product's risk surface — combining requirements context, defect history, and business impact scores — so test coverage is allocated where it matters, not where it's easiest." },
      { icon: UserCheck,     title: "Expert-in-the-Loop Mode", desc: "Your senior testers stay in control. Refine surfaces AI-generated questions and risk maps, but a human expert reviews, adjusts, and approves before anything is generated." },
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
      { icon: FileCode,    title: "Test Case Generation", desc: "Test cases generated from your context and risk map — not from a template. Bugasura writes the cases a senior QA lead would write, covering critical paths, edge cases, and regression scenarios." },
      { icon: PieChart,    title: "Coverage Planning", desc: "Coverage mapped against risk priority. Bugasura doesn't chase 100% line coverage — it builds toward coverage of the scenarios that matter most, ordered by business and user impact." },
      { icon: CalendarDays, title: "Sprint Alignment", desc: "Test plans structured around your sprint cycle. Bugasura generates a sprint-ready test plan alongside the development scope — so QA doesn't start from scratch every two weeks." },
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
      { icon: Bot,      title: "Asuras — Test Agents", desc: "Browser, API, and Mobile Asuras execute tests autonomously — powered by platform context, not just test scripts. Each agent knows what it's testing and why." },
      { icon: Bug,      title: "Bug Reporter", desc: "Capture, enrich, and triage bugs with AI-assisted context. Reports automatically include reproduction steps, environment data, and linked requirements." },
      { icon: Eye,      title: "Eagle Eye", desc: "Executive visibility into quality health. Eagle Eye surfaces what's breaking, what it's costing in revenue risk, and where quality debt is concentrated." },
      { icon: Plug,     title: "MCP Server + Integrations", desc: "Bugasura's MCP server connects to Claude and Cursor, giving developers quality context without leaving their editor. Integrates with GitHub, Jira, Slack, and more." },
    ],
    output: "Defects, test results, and coverage data flow back into the Context layer — closing the loop",
  },
];

type Layer = typeof layers[0];

function LayerPanel({
  layer,
  scrollContainer,
}: {
  layer: Layer;
  scrollContainer: RefObject<HTMLElement>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isExecute = layer.id === "execute";

  const { scrollYProgress } = useScroll({
    target: ref,
    container: scrollContainer,
    offset: ["start end", "start 0.2"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.7, 1], [2, 0.8, 0]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.7, 1], [-10, -3, 0]);
  const scale   = useTransform(scrollYProgress, [0, 1],       [0.94, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1],     [0, 1]);

  return (
    <motion.div
      ref={ref}
      className="rounded-[32px] mb-6 pb-10"
      style={{
        backgroundColor: layer.bg,
        transformOrigin: "top center",
        transformPerspective: 1400,
        rotateX,
        rotateZ,
        scale,
        opacity,
      }}
    >
      {/* ── Top: label + headline + body LEFT | placeholder RIGHT ── */}
      <div className="flex flex-col lg:flex-row gap-8 px-4 pt-8 pb-6 lg:px-12 lg:pt-10 lg:pb-8">
        {/* Left */}
        <div className="flex flex-col w-full lg:w-[42%] lg:flex-shrink-0">
          <p
            className="font-semibold uppercase mb-4"
            style={{
              fontFamily: "'Clash Grotesk', sans-serif",
              fontSize: "clamp(20px, 2.5vw, 32px)",
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
              fontSize: "clamp(32px, 5vw, 68px)",
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
              color: "#1A0A00",
            }}
          >
            {layer.headline}
          </h2>
          <p
            className="mt-4 max-w-[400px] lg:max-w-[80%]"
            style={{
              fontSize: "16px",
              lineHeight: 1.65,
              color: "rgba(20,10,0,0.8)",
            }}
          >
            {layer.body}
          </p>
        </div>

        {/* Right — placeholder (desktop only) */}
        <div className="hidden lg:flex flex-1">
          <div
            className="w-full rounded-3xl"
            style={{
              aspectRatio: "5 / 4",
              backgroundColor: "rgba(255,255,255,0.6)",
              border: "1.5px solid rgba(255,255,255,0.85)",
            }}
          />
        </div>
      </div>

      {/* ── Feature cards ── */}
      <div
        className={`px-4 pb-4 lg:px-12 grid grid-cols-1 gap-3 ${isExecute ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}
      >
        {layer.cards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl"
            style={{ backgroundColor: layer.cardBg, padding: "20px 20px" }}
          >
            <div
              className="rounded-xl mb-4 flex items-center justify-center flex-shrink-0"
              style={{ width: "48px", height: "48px", backgroundColor: layer.iconBg }}
            >
              <card.icon size={22} strokeWidth={1.8} color={layer.labelColor} />
            </div>
            <p
              className="font-semibold mb-2"
              style={{
                fontFamily: "'Clash Grotesk', sans-serif",
                fontSize: "clamp(18px, 1.8vw, 24px)",
                color: "#1A0A00",
                lineHeight: 1.15,
              }}
            >
              {card.title}
            </p>
            <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: "15px", lineHeight: 1.55, color: "#1A0A00" }}>
              {card.desc}
            </p>
          </div>
        ))}
      </div>

      {/* ── Footer bar ── */}
      <div
        className="flex flex-wrap items-center gap-2 mx-4 lg:mx-12 mt-2 px-4 py-3 lg:px-5 lg:py-4 rounded-xl"
        style={{
          backgroundColor: "rgba(255,255,255,0.5)",
          border: "1px solid rgba(255,255,255,0.7)",
        }}
      >
        <span
          className="text-[15px] lg:text-[20px]"
          style={{
            color: "#1A0A00",
            fontFamily: "var(--font-caveat)",
            fontWeight: 400,
          }}
        >
          {layer.label} Layer Output
        </span>
        <span className="text-[14px] lg:text-[18px]" style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, color: "#1A0A00" }}>
          {layer.output}
        </span>
      </div>
    </motion.div>
  );
}

export default function PlatformLayers() {
  const scrollRef = useScrollRef();

  return (
    <div style={{ overflowX: "clip", paddingTop: "8px" }}>
      {layers.map((layer) => (
        <LayerPanel
          key={layer.id}
          layer={layer}
          scrollContainer={scrollRef as RefObject<HTMLElement>}
        />
      ))}
    </div>
  );
}
