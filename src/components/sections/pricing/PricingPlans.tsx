"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ClipboardList, Bug, FileText, BookOpen, Cpu, Monitor, Plug, HardDrive, BadgeCheck,
  Brain, Eye, MessageSquare, Network, Layers, Zap, Server, KeyRound, Database, ShieldCheck, HeadphonesIcon,
} from "lucide-react";
import { Heading, BodyText, Button } from "@/components/ui";

const FREE_SPECS = [
  { Icon: ClipboardList, label: "Test Management",              value: "Plan, run, and track test cycles across sprints" },
  { Icon: Bug,           label: "AI Issue Tracker",             value: "AI-enriched bug capture, triage, and deduplication" },
  { Icon: FileText,      label: "Requirements Management",      value: "Link requirements to tests, track coverage changes" },
  { Icon: BookOpen,      label: "Knowledge Base",               value: "Ingest docs, requirements, and product context" },
  { Icon: Cpu,           label: "MCP Server",                   value: "Quality context inside Claude and Cursor" },
  { Icon: Monitor,       label: "Chrome Reporter + Web Widget", value: "Capture bugs from anywhere" },
  { Icon: Plug,          label: "Integrations",                 value: "GitHub, Jira, Asana, Slack, ClickUp, and more" },
  { Icon: HardDrive,     label: "Storage",                      value: "50 GB free, forever — no upgrades needed" },
  { Icon: BadgeCheck,    label: "SOC 2 Type II",                value: "Certified security for procurement teams" },
];

const CUSTOM_SPECS = [
  { Icon: Brain,           label: "Testpert AI layer",         value: "Advanced Q&A engine, expert-in-the-loop mode, risk surface mapping" },
  { Icon: Eye,             label: "Eagle Eye",                 value: "Quality health visibility for engineering leadership" },
  { Icon: MessageSquare,   label: "Knowledge Base AI chat",    value: "Conversational AI over your product knowledge base" },
  { Icon: Network,         label: "Context mapping",           value: "Automated context linking across requirements and defects" },
  { Icon: Layers,          label: "Deeper test heuristics",    value: "AI-driven risk and edge-case analysis beyond basic coverage" },
  { Icon: Zap,             label: "Context-driven testing",    value: "Tests generated from full product context, not just scripts" },
  { Icon: Server,          label: "On-premises deployment",    value: "Your infrastructure, your data residency" },
  { Icon: KeyRound,        label: "SSO & SAML",                value: "Enterprise identity management" },
  { Icon: Database,        label: "Data isolation",            value: "Dedicated infrastructure, India & Singapore hosting" },
  { Icon: ShieldCheck,     label: "Private AI mode",           value: "Your data never trains any model" },
  { Icon: HeadphonesIcon,  label: "Dedicated success manager", value: "Onboarding, QBRs, and ongoing support" },
];

const CUSTOM_USE_CASES = [
  "Teams of 50+ engineers who need compliance documentation for procurement",
  "Organisations in regulated industries requiring data residency guarantees",
  "Engineering teams running high-volume Asura automation at production scale",
  "Companies that want Testpert's advanced AI capabilities for their QA team",
];

export default function PricingPlans() {
  const [active, setActive] = useState<"free" | "custom">("free");

  return (
    <section
      className="rounded-[32px]"
      style={{ backgroundColor: "var(--cream)", padding: "80px clamp(24px, 6vw, 80px)" }}
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-16 mb-12">
        <div className="flex-shrink-0">
          <Heading
            level="section"
            as="h2"
            color="var(--dark)"
            style={{ fontSize: "clamp(32px, 4.5vw, 58px)", lineHeight: 1.05, letterSpacing: "-0.025em" }}
          >
            Two paths.<br />One is free.
          </Heading>
        </div>
        <BodyText
          color="rgba(30,30,30,0.5)"
          style={{ fontSize: "16px", lineHeight: 1.75, maxWidth: "380px" }}
        >
          The full platform is free for every team. Custom pricing is only for on-prem, Testpert AI, or enterprise-scale execution.
        </BodyText>
      </div>

      {/* Tab switcher — mobile only */}
      <div
        className="flex lg:hidden mb-6"
        style={{ background: "rgba(30,30,30,0.06)", borderRadius: "12px", padding: "4px", gap: "4px" }}
      >
        {(["free", "custom"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            style={{
              flex: 1, padding: "10px", borderRadius: "9px", border: "none", cursor: "pointer",
              fontFamily: "'Clash Grotesk', sans-serif", fontSize: "14px", fontWeight: 600,
              background: active === tab ? "#ffffff" : "transparent",
              color: active === tab ? "var(--dark)" : "rgba(30,30,30,0.5)",
              boxShadow: active === tab ? "0 1px 4px rgba(0,0,0,0.1)" : "none",
              transition: "all 0.15s ease",
            }}
          >
            {tab === "free" ? "Free — Forever" : "Custom"}
          </button>
        ))}
      </div>

      {/* Plan cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        {/* ── FREE ── */}
        <div
          className={active !== "free" ? "hidden lg:flex" : "flex"}
          style={{ background: "#FFDAA8", borderRadius: "24px", padding: "clamp(20px, 5vw, 36px)", flexDirection: "column" }}
        >
          <span style={{ display: "block", fontFamily: "'Clash Grotesk', sans-serif", fontSize: "16px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#CC7A00", marginBottom: "8px" }}>
            Free — Forever
          </span>

          <div className="flex items-end justify-between mb-3" style={{ gap: "16px" }}>
            <div>
              <Heading level="subsection" as="p" color="var(--dark)" style={{ fontSize: "64px", lineHeight: 1.0, letterSpacing: "-0.03em" }}>
                $0
              </Heading>
              <BodyText color="rgba(30,30,30,0.55)" style={{ fontSize: "13px", marginTop: "4px" }}>
                forever, for everyone
              </BodyText>
            </div>
            <div className="hidden sm:block" style={{ flexShrink: 0, marginBottom: "-36px", marginRight: "-8px" }}>
              <Image src="/asuras-free-pricing.png" alt="" width={120} height={120} style={{ objectFit: "contain" }} />
            </div>
          </div>

          <p style={{ fontFamily: "Georgia, serif", fontSize: "14px", fontStyle: "italic", color: "rgba(30,30,30,0.65)", lineHeight: 1.6, marginBottom: "28px", maxWidth: "340px" }}>
            &ldquo;The full platform. No seat limits. No feature gates. No expiry date on being free.&rdquo;
          </p>

          <div style={{ marginBottom: "28px" }}>
            <Button href="https://my.bugasura.io?go=sign_up" target="_blank" rel="noopener noreferrer" variant="primary" className="w-full justify-center">
              Start for free
            </Button>
          </div>

          <div style={{ height: "1px", background: "rgba(30,30,30,0.1)", marginBottom: "24px" }} />

          <div className="flex flex-col gap-4">
            {FREE_SPECS.map(({ Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <div style={{ width: "40px", height: "40px", borderRadius: "13px", background: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={19} strokeWidth={1.5} color="#CC7A00" />
                </div>
                <div>
                  <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#1A1A1A", display: "block", marginBottom: "2px" }}>
                    {label}
                  </span>
                  <span style={{ fontSize: "16px", color: "#1A1A1A", lineHeight: 1.5 }}>
                    {value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CUSTOM ── */}
        <div
          className={active !== "custom" ? "hidden lg:flex" : "flex"}
          style={{ background: "#B2D9EC", borderRadius: "24px", padding: "clamp(20px, 5vw, 36px)", flexDirection: "column" }}
        >
          <span style={{ display: "block", fontFamily: "'Clash Grotesk', sans-serif", fontSize: "16px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#0077C2", marginBottom: "8px" }}>
            Custom — Enterprise &amp; Scale
          </span>

          <div className="flex items-end justify-between mb-3" style={{ gap: "16px" }}>
            <div>
              <Heading level="subsection" as="p" color="var(--dark)" style={{ fontSize: "64px", lineHeight: 1.0, letterSpacing: "-0.03em" }}>
                Custom
              </Heading>
              <BodyText color="rgba(30,30,30,0.55)" style={{ fontSize: "13px", marginTop: "4px" }}>
                scoped to your deployment
              </BodyText>
            </div>
            <div className="hidden sm:block" style={{ flexShrink: 0, marginBottom: "-36px", marginRight: "-8px" }}>
              <Image src="/asuras-enterprise-pricing.png" alt="" width={120} height={120} style={{ objectFit: "contain" }} />
            </div>
          </div>

          <p style={{ fontFamily: "Georgia, serif", fontSize: "14px", fontStyle: "italic", color: "rgba(30,30,30,0.65)", lineHeight: 1.6, marginBottom: "28px", maxWidth: "340px" }}>
            &ldquo;For teams running Bugasura at scale, on-prem, or with Testpert AI capabilities built in.&rdquo;
          </p>

          <div style={{ marginBottom: "28px" }}>
            <Button href="https://calendly.com/get-bugasura/45min" target="_blank" rel="noopener noreferrer" variant="outline" className="w-full justify-center">
              Talk to us about Custom
            </Button>
          </div>

          <div style={{ height: "1px", background: "rgba(30,30,30,0.1)", marginBottom: "24px" }} />

          <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#1A1A1A", marginBottom: "16px", display: "block" }}>
            Everything in free, plus
          </span>

          <div className="flex flex-col gap-4 mb-8">
            {CUSTOM_SPECS.map(({ Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <div style={{ width: "40px", height: "40px", borderRadius: "13px", background: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={19} strokeWidth={1.5} color="#0077C2" />
                </div>
                <div>
                  <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#1A1A1A", display: "block", marginBottom: "2px" }}>
                    {label}
                  </span>
                  <span style={{ fontSize: "16px", color: "#1A1A1A", lineHeight: 1.5 }}>
                    {value}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ height: "1px", background: "rgba(30,30,30,0.1)", marginBottom: "20px" }} />

          <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#1A1A1A", marginBottom: "12px", display: "block" }}>
            Typical custom deployments
          </span>
          <div className="flex flex-col gap-3">
            {CUSTOM_USE_CASES.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: "14px", fontWeight: 600, color: "#0077C2", flexShrink: 0, lineHeight: 1.55 }}>→</span>
                <BodyText color="rgba(30,30,30,0.75)" style={{ fontSize: "13px", lineHeight: 1.55 }}>
                  {item}
                </BodyText>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
