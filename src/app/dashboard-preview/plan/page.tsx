"use client";

import { useState } from "react";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Search,
  Settings,
  Trash2,
  Database,
  Eye,
  Zap,
  BookOpen,
  FileText,
  Bug,
  TrendingUp,
  TestTube,
  Minus,
  Plus,
  ListChecks,
  Target,
  Coins,
  User,
  Terminal,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import BodyText from "@/components/ui/BodyText";

// ─── Data ─────────────────────────────────────────────────────────────────────

type StepStatus = "completed" | "active" | "upcoming";
interface Step { label: string; status: StepStatus }

const STEPS: Step[] = [
  { label: "Sprint",   status: "completed" },
  { label: "Refine",   status: "completed" },
  { label: "Plan",     status: "active"    },
  { label: "Enrich",   status: "completed" },
  { label: "Coverage", status: "completed" },
  { label: "Generate", status: "completed" },
  { label: "Tests",    status: "upcoming"  },
  { label: "Runs",     status: "upcoming"  },
  { label: "Reports",  status: "upcoming"  },
];

interface Feature { title: string; tags: string[] }
const FEATURES: Feature[] = [
  { title: "Unified Checkout Experience",      tags: ["Support for multiple payment methods"] },
  { title: "Authentication and Convenience Features", tags: ["Auto OTP Read", "1 Click Card Checkout"] },
  { title: "Transaction Resilience",           tags: ["Auto Retry Engine"] },
  { title: "Checkout Experience Customization",tags: ["No Code Design Studio"] },
  { title: "Payment Routing and Orchestration",tags: ["Dynamic Payment Routing", "Platform Integrations"] },
  { title: "Order API Lifecycle",              tags: [] },
];

interface ValueCard { icon: React.ReactNode; title: string; tags: string[]; iconBg: string }
const VALUE_CARDS: ValueCard[] = [
  {
    icon: <Coins size={20} color="#C47200" strokeWidth={1.8} />,
    iconBg: "#FFF3DC",
    title: "Business Value",
    tags: ["PCI Dss Compliance"],
  },
  {
    icon: <User size={20} color="#16a34a" strokeWidth={1.8} />,
    iconBg: "#DCFCE7",
    title: "User Value",
    tags: ["Privacy"],
  },
  {
    icon: <Terminal size={20} color="#0077B6" strokeWidth={1.8} />,
    iconBg: "#DBEAFE",
    title: "Technical Value",
    tags: ["Authentication", "Authorization", "Security Holes", "Data Integrity", "Error Handling"],
  },
];

const FOCUS_TAGS = ["Authentication", "Authorization", "Privacy", "Security Holes", "PCI Dss Compliance", "Data Integrity", "Error Handling"];

const NAV_ITEMS = [
  { label: "Eagle Eye",     Icon: Eye,        count: null,  active: false },
  { label: "Revenue Flows", Icon: TrendingUp,  count: null,  active: false },
  { label: "Knowledge Base",Icon: BookOpen,    count: 10,    active: false },
  { label: "Requirements",  Icon: FileText,    count: 26,    active: false },
  { label: "Test Repo",     Icon: TestTube,    count: 350,   active: false },
  { label: "Sprints",       Icon: Zap,         count: 6,     active: true  },
  { label: "Test Data",     Icon: Database,    count: null,  active: false },
  { label: "Issues",        Icon: Bug,         count: 141,   active: false },
  { label: "Settings",      Icon: Settings,    count: null,  active: false },
  { label: "Trash",         Icon: Trash2,      count: null,  active: false },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function StepBar() {
  return (
    <div style={{
      background: "#ffffff",
      borderRadius: "14px",
      padding: "14px 20px",
      border: "1px solid rgba(30,30,30,0.07)",
      marginBottom: "20px",
    }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        {STEPS.map((step, i) => (
          <div key={step.label} style={{ display: "flex", alignItems: "center", flex: i < STEPS.length - 1 ? 1 : "none" }}>
            <div style={{
              display: "flex", alignItems: "center", gap: "5px",
              padding: "5px 13px",
              borderRadius: "20px",
              flexShrink: 0,
              background:
                step.status === "active"    ? "#29A5FF" :
                step.status === "completed" ? "rgba(22,163,74,0.1)" :
                "rgba(30,30,30,0.04)",
              border:
                step.status === "active"    ? "1px solid #29A5FF" :
                step.status === "completed" ? "1px solid rgba(22,163,74,0.2)" :
                "1px solid rgba(30,30,30,0.08)",
            }}>
              {step.status === "completed" && <CheckCircle2 size={12} color="#16a34a" strokeWidth={2.5} />}
              {step.status === "active"    && <Target size={12} color="#ffffff" strokeWidth={2.5} />}
              <span style={{
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: "11.5px",
                fontWeight: step.status === "upcoming" ? 400 : 600,
                color:
                  step.status === "active"    ? "#ffffff" :
                  step.status === "completed" ? "#16a34a" :
                  "rgba(30,30,30,0.38)",
              }}>
                {step.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div style={{
                flex: 1, height: "1.5px", minWidth: "6px",
                background: step.status === "completed" ? "rgba(22,163,74,0.25)" : "rgba(30,30,30,0.08)",
              }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function Tag({ label, color = "rgba(30,30,30,0.6)", bg = "rgba(30,30,30,0.06)", border = "rgba(30,30,30,0.1)" }: {
  label: string; color?: string; bg?: string; border?: string
}) {
  return (
    <span style={{
      fontFamily: "var(--font-inter), Inter, sans-serif",
      fontSize: "11.5px",
      fontWeight: 500,
      color,
      background: bg,
      border: `1px solid ${border}`,
      padding: "3px 10px",
      borderRadius: "20px",
      whiteSpace: "nowrap" as const,
      display: "inline-block",
    }}>
      {label}
    </span>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TestPlanPage() {
  const [activeTab, setActiveTab] = useState<"features" | "focus">("features");
  const [collapsed, setCollapsed] = useState<Record<number, boolean>>({});

  function toggleRow(i: number) {
    setCollapsed(prev => ({ ...prev, [i]: !prev[i] }));
  }

  return (
    <div style={{
      display: "flex",
      height: "100vh",
      background: "#F2EFE8",
      fontFamily: "var(--font-inter), Inter, sans-serif",
      overflow: "hidden",
    }}>
      {/* ── Sidebar ─────────────────────────────────────────────────────────── */}
      <div style={{ padding: "12px 0 12px 12px", flexShrink: 0 }}>
        <aside style={{
          width: "232px",
          height: "100%",
          background: "#1E1E1E",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          borderRadius: "16px",
        }}>
          {/* Logo */}
          <div style={{ padding: "20px 16px 16px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "36px", height: "36px", background: "#29A5FF", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "15px", color: "#fff" }}>A</span>
              </div>
              <div>
                <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "15px", color: "#ffffff", lineHeight: 1.2 }}>Acme</div>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", marginTop: "1px" }}>Workspace</div>
              </div>
            </div>
          </div>

          {/* Search */}
          <div style={{ padding: "12px 16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.06)", borderRadius: "8px", padding: "8px 12px" }}>
              <Search size={13} color="rgba(255,255,255,0.3)" strokeWidth={2} />
              <span style={{ fontSize: "12.5px", color: "rgba(255,255,255,0.28)" }}>Search…</span>
            </div>
          </div>

          {/* Nav */}
          <nav style={{ padding: "4px 8px", flex: 1 }}>
            {NAV_ITEMS.map(({ label, Icon, count, active }) => (
              <div key={label} style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "8px 12px", marginBottom: "2px", borderRadius: "10px", cursor: "pointer",
                background: active ? "rgba(229,39,39,0.14)" : "transparent",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                  <Icon size={15} color={active ? "#E52727" : "rgba(255,255,255,0.38)"} strokeWidth={active ? 2.2 : 1.8} />
                  <span style={{ fontSize: "13px", fontWeight: active ? 600 : 400, color: active ? "#ffffff" : "rgba(255,255,255,0.52)" }}>
                    {label}
                  </span>
                </div>
                {count !== null && (
                  <span style={{
                    fontSize: "11px", fontWeight: 600,
                    color: active ? "#E52727" : "rgba(255,255,255,0.25)",
                    background: active ? "rgba(229,39,39,0.18)" : "rgba(255,255,255,0.06)",
                    padding: "2px 7px", borderRadius: "20px",
                  }}>{count}</span>
                )}
              </div>
            ))}
          </nav>

          {/* User */}
          <div style={{ padding: "14px 16px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "30px", height: "30px", background: "#E52727", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "12px", color: "#fff" }}>UD</span>
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.85)", lineHeight: 1.3 }}>User</div>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", lineHeight: 1.3 }}>user@acme.io</div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* gap */}
      <div style={{ width: "12px", flexShrink: 0 }} />

      {/* ── Main ──────────────────────────────────────────────────────────────── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: "#ffffff" }}>

        {/* Top bar */}
        <div style={{
          background: "#ffffff", borderBottom: "1px solid rgba(30,30,30,0.07)",
          padding: "0 28px", height: "52px",
          display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <ChevronLeft size={14} color="rgba(30,30,30,0.4)" />
            <span style={{ fontSize: "13px", color: "rgba(30,30,30,0.38)" }}>Sprint:</span>
            <span style={{ fontSize: "13px", fontWeight: 600, color: "#29A5FF" }}>Test Plan</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#F5F5F3", border: "1px solid rgba(30,30,30,0.08)", borderRadius: "8px", padding: "7px 13px" }}>
            <Search size={13} color="rgba(30,30,30,0.35)" strokeWidth={2} />
            <span style={{ fontSize: "12.5px", color: "rgba(30,30,30,0.3)" }}>Search…</span>
          </div>
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px" }}>

          {/* Title */}
          <div style={{ marginBottom: "20px" }}>
            <Heading level="step" as="h1" style={{ fontSize: "24px", letterSpacing: "-0.02em", color: "#1E1E1E" }}>
              Acme HyperCheckout
            </Heading>
          </div>

          {/* Step bar */}
          <StepBar />

          {/* Two-column grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "16px", alignItems: "start" }}>

            {/* ── Left ── */}
            <div>
              <Card tint="white" radius="lg" padding="0" style={{ border: "1px solid rgba(30,30,30,0.07)", overflow: "hidden" }}>

                {/* Panel header */}
                <div style={{ padding: "20px 24px 16px" }}>
                  <Heading level="step" as="h2" style={{ fontSize: "18px", letterSpacing: "-0.01em", color: "#1E1E1E", marginBottom: "4px" }}>
                    Test Planning
                  </Heading>
                  <BodyText opacity={0.45} style={{ fontSize: "13px", lineHeight: 1.6 }}>
                    Set priority for testpert to focus on, customise devices and manage team members
                  </BodyText>
                </div>

                {/* Sub-nav tabs */}
                <div style={{ display: "flex", gap: "0", borderBottom: "1px solid rgba(30,30,30,0.07)", padding: "0 16px" }}>
                  {[
                    { id: "features", label: "Features",         Icon: ListChecks },
                    { id: "focus",    label: "Test Focus Areas",  Icon: Target     },
                  ].map(({ id, label, Icon: TabIcon }) => {
                    const isActive = activeTab === id;
                    return (
                      <button
                        key={id}
                        onClick={() => setActiveTab(id as "features" | "focus")}
                        style={{
                          display: "flex", alignItems: "center", gap: "7px",
                          padding: "10px 14px",
                          fontSize: "13px", fontWeight: isActive ? 600 : 400,
                          color: isActive ? "#29A5FF" : "rgba(30,30,30,0.45)",
                          background: "none", border: "none",
                          borderBottom: isActive ? "2px solid #29A5FF" : "2px solid transparent",
                          marginBottom: "-1px",
                          cursor: "pointer",
                          fontFamily: "var(--font-inter), Inter, sans-serif",
                        }}
                      >
                        <TabIcon size={14} strokeWidth={isActive ? 2.2 : 1.8} />
                        {label}
                      </button>
                    );
                  })}
                </div>

                {/* Feature accordion */}
                <div>
                  {FEATURES.map((feature, i) => {
                    const isOpen = !collapsed[i];
                    return (
                      <div
                        key={feature.title}
                        style={{ borderBottom: i < FEATURES.length - 1 ? "1px solid rgba(30,30,30,0.05)" : "none" }}
                      >
                        {/* Row header */}
                        <div
                          style={{
                            display: "flex", alignItems: "center", justifyContent: "space-between",
                            padding: "14px 24px",
                            cursor: "pointer",
                          }}
                          onClick={() => toggleRow(i)}
                        >
                          <span style={{ fontSize: "14px", fontWeight: 500, color: "#1E1E1E" }}>
                            {feature.title}
                          </span>
                          <button style={{ background: "none", border: "none", cursor: "pointer", display: "flex", color: "rgba(30,30,30,0.4)", padding: "2px" }}>
                            {isOpen
                              ? <Minus size={16} strokeWidth={2} />
                              : <Plus size={16} strokeWidth={2} />
                            }
                          </button>
                        </div>

                        {/* Tags (expanded) */}
                        {isOpen && feature.tags.length > 0 && (
                          <div style={{ padding: "0 24px 14px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                            {feature.tags.map(tag => (
                              <Tag key={tag} label={tag} />
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </Card>

              {/* Actions */}
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", paddingTop: "14px" }}>
                <Button variant="outline" onClick={() => {}}>
                  <ChevronLeft size={15} style={{ marginRight: "-4px" }} />
                  Back
                </Button>
                <Button variant="primary" onClick={() => {}}>
                  Next
                  <ChevronRight size={15} style={{ marginLeft: "-4px" }} />
                </Button>
              </div>
            </div>

            {/* ── Right: Values panel ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

              {/* Values header */}
              <div style={{ paddingLeft: "4px" }}>
                <Heading level="step" as="h3" style={{ fontSize: "16px", color: "#1E1E1E", letterSpacing: "-0.01em" }}>
                  Values
                </Heading>
              </div>

              {/* Value cards */}
              {VALUE_CARDS.map(({ icon, iconBg, title, tags }) => (
                <Card key={title} tint="white" radius="md" padding="16px" style={{ border: "1px solid rgba(30,30,30,0.07)" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <div style={{ width: "38px", height: "38px", background: iconBg, borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      {icon}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "14px", color: "#1E1E1E", marginBottom: "8px" }}>
                        {title}
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                        {tags.map(tag => (
                          <Tag key={tag} label={tag} color="#0077B6" bg="rgba(41,165,255,0.07)" border="rgba(41,165,255,0.18)" />
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}

              {/* Focus Area */}
              <Card tint="white" radius="md" padding="16px" style={{ border: "1px solid rgba(30,30,30,0.07)" }}>
                {/* Section label */}
                <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "15px", color: "#1E1E1E", marginBottom: "12px" }}>
                  Focus Area
                </div>

                {/* Gauge + label */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                  {/* Simple SVG gauge */}
                  <div style={{ width: "44px", height: "44px", flexShrink: 0 }}>
                    <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="22" cy="22" r="18" stroke="#F0F0F0" strokeWidth="4" />
                      <path d="M 4 22 A 18 18 0 0 1 22 4" stroke="#E52727" strokeWidth="4" strokeLinecap="round" />
                      <path d="M 22 4 A 18 18 0 0 1 40 22" stroke="#FFA840" strokeWidth="4" strokeLinecap="round" />
                      <path d="M 40 22 A 18 18 0 0 1 22 40" stroke="#29A5FF" strokeWidth="4" strokeLinecap="round" />
                      <circle cx="22" cy="22" r="5" fill="#1E1E1E" />
                      <line x1="22" y1="22" x2="10" y2="12" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "15px", color: "#1E1E1E" }}>
                    Minimal
                  </div>
                </div>

                {/* Focus tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {FOCUS_TAGS.map(tag => (
                    <Tag key={tag} label={tag} color="#29A5FF" bg="rgba(41,165,255,0.06)" border="rgba(41,165,255,0.15)" />
                  ))}
                </div>
              </Card>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
