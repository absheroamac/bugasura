"use client";

import { useState } from "react";
import {
  CheckCircle2,
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
  Target,
  LayoutList,
  Minus,
  DollarSign,
  User,
  Code2,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";

// ─── Data ─────────────────────────────────────────────────────────────────────

type StepStatus = "completed" | "active" | "upcoming";
interface Step { label: string; status: StepStatus }

const STEPS: Step[] = [
  { label: "Sprint",   status: "completed" },
  { label: "Refine",   status: "completed" },
  { label: "Plan",     status: "active"    },
  { label: "Enrich",   status: "upcoming"  },
  { label: "Coverage", status: "upcoming"  },
  { label: "Generate", status: "upcoming"  },
  { label: "Tests",    status: "upcoming"  },
  { label: "Runs",     status: "upcoming"  },
  { label: "Reports",  status: "upcoming"  },
];

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

const FEATURES = [
  { name: "Unified Checkout Experience",         tags: ["Support for multiple payment methods"] },
  { name: "Authentication and Convenience Features", tags: ["Auto OTP Read", "1 Click Card Checkout"] },
  { name: "Transaction Resilience",              tags: ["Auto Retry Engine"] },
  { name: "Checkout Experience Customization",   tags: ["No Code Design Studio"] },
  { name: "Payment Routing and Orchestration",   tags: ["Dynamic Payment Routing", "Platform Integrations"] },
  { name: "Order API Lifecycle",                 tags: [] },
];

const VALUES = [
  {
    label: "Business Value",
    iconBg: "#FFA840",
    Icon: DollarSign,
    tags: [{ label: "PCI Dss Compliance" }],
  },
  {
    label: "User Value",
    iconBg: "#FFA840",
    Icon: User,
    tags: [{ label: "Privacy" }],
  },
  {
    label: "Technical Value",
    iconBg: "#1B8B34",
    Icon: Code2,
    tags: [
      { label: "Authentication" },
      { label: "Authorization" },
      { label: "Security Holes" },
      { label: "Data Integrity" },
      { label: "Error Handling" },
    ],
  },
];

const FOCUS_TAGS = ["Authentication", "Authorization", "Privacy", "Security Holes", "PCI Dss Compliance", "Data Integrity", "Error Handling"];

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
              {step.status === "completed" && (
                <CheckCircle2 size={12} color="#16a34a" strokeWidth={2.5} />
              )}
              {step.status === "active" && (
                <Target size={12} color="#ffffff" strokeWidth={2.5} />
              )}
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
                background: step.status === "completed"
                  ? "rgba(22,163,74,0.25)"
                  : "rgba(30,30,30,0.08)",
              }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SprintPlanPage() {
  const [activeTab, setActiveTab] = useState("Features");

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: "#F2EFE8",
        fontFamily: "var(--font-inter), Inter, sans-serif",
        overflow: "hidden",
      }}
    >
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
        {/* Client logo */}
        <div style={{ padding: "20px 16px 16px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: "36px", height: "36px",
              background: "#29A5FF",
              borderRadius: "10px",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "15px", color: "#fff" }}>J</span>
            </div>
            <div>
              <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "15px", color: "#ffffff", lineHeight: 1.2 }}>Acme</div>
              <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.35)", marginTop: "1px" }}>Workspace</div>
            </div>
          </div>
        </div>

        {/* Search */}
        <div style={{ padding: "12px 16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.06)", borderRadius: "8px", padding: "8px 12px" }}>
            <Search size={13} color="rgba(255,255,255,0.3)" strokeWidth={2} />
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", color: "rgba(255,255,255,0.28)" }}>Search…</span>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ padding: "4px 8px", flex: 1 }}>
          {NAV_ITEMS.map(({ label, Icon, count, active }) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 12px",
                marginBottom: "2px",
                borderRadius: "10px",
                cursor: "pointer",
                background: active ? "rgba(229,39,39,0.14)" : "transparent",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                <Icon
                  size={15}
                  color={active ? "#E52727" : "rgba(255,255,255,0.38)"}
                  strokeWidth={active ? 2.2 : 1.8}
                />
                <span style={{
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontSize: "13px",
                  fontWeight: active ? 600 : 400,
                  color: active ? "#ffffff" : "rgba(255,255,255,0.52)",
                }}>
                  {label}
                </span>
              </div>
              {count !== null && (
                <span style={{
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: active ? "#E52727" : "rgba(255,255,255,0.25)",
                  background: active ? "rgba(229,39,39,0.18)" : "rgba(255,255,255,0.06)",
                  padding: "2px 7px",
                  borderRadius: "20px",
                }}>
                  {count}
                </span>
              )}
            </div>
          ))}
        </nav>

        {/* User */}
        <div style={{ padding: "14px 16px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: "30px", height: "30px",
              background: "#E52727",
              borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "12px", color: "#fff" }}>UD</span>
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.85)", lineHeight: 1.3 }}>User</div>
              <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.35)", lineHeight: 1.3 }}>user@acme.io</div>
            </div>
          </div>
        </div>
      </aside>
      </div>

      {/* gap between sidebar and content */}
      <div style={{ width: "12px", flexShrink: 0 }} />

      {/* ── Main area ────────────────────────────────────────────────────────── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: "#ffffff" }}>

        {/* Top bar */}
        <div style={{
          background: "#ffffff",
          borderBottom: "1px solid rgba(30,30,30,0.07)",
          padding: "0 28px",
          height: "52px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
        }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.38)", cursor: "pointer" }}>
              Sprint
            </span>
            <ChevronRight size={13} color="rgba(30,30,30,0.25)" />
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#29A5FF" }}>
              Test Plan
            </span>
          </div>
          {/* Search */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#F5F5F3", border: "1px solid rgba(30,30,30,0.08)", borderRadius: "8px", padding: "7px 13px" }}>
            <Search size={13} color="rgba(30,30,30,0.35)" strokeWidth={2} />
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", color: "rgba(30,30,30,0.3)" }}>Search…</span>
          </div>
        </div>

        {/* Scrollable content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px" }}>

          {/* Page title */}
          <div style={{ marginBottom: "20px" }}>
            <Heading level="step" as="h1" style={{ fontSize: "24px", letterSpacing: "-0.02em", color: "#1E1E1E" }}>
              Acme HyperCheckout
            </Heading>
          </div>

          {/* Step progress bar */}
          <StepBar />

          {/* Two-column layout */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "16px", alignItems: "start" }}>

            {/* ── Left column: Test Planning ── */}
            <Card tint="white" radius="lg" padding="0" style={{ border: "1px solid rgba(30,30,30,0.07)", overflow: "hidden" }}>
              <div style={{ padding: "22px 24px 16px" }}>
                <Heading level="step" as="h2" style={{ fontSize: "18px", color: "#1E1E1E", marginBottom: "6px" }}>
                  Test Planning
                </Heading>
                <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.45)", margin: "0 0 16px", lineHeight: 1.6 }}>
                  Set priority for testpert to focus on, customise devices and manage team members
                </p>
                {/* Tabs */}
                <div style={{ display: "flex", gap: "0", borderBottom: "1px solid rgba(30,30,30,0.08)" }}>
                  {["Features", "Test Focus Areas"].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      style={{
                        fontFamily: "var(--font-inter), Inter, sans-serif",
                        fontSize: "13px",
                        fontWeight: activeTab === tab ? 600 : 400,
                        color: activeTab === tab ? "#29A5FF" : "rgba(30,30,30,0.45)",
                        background: "none",
                        border: "none",
                        borderBottom: activeTab === tab ? "2px solid #29A5FF" : "2px solid transparent",
                        padding: "8px 14px",
                        cursor: "pointer",
                        marginBottom: "-1px",
                        display: "flex", alignItems: "center", gap: "7px",
                      }}
                    >
                      {tab === "Features" ? <Target size={13} strokeWidth={2} /> : <LayoutList size={13} strokeWidth={2} />}
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Feature list */}
              <div style={{ padding: "0 24px 20px" }}>
                {FEATURES.map((f, i) => (
                  <div key={i} style={{ padding: "14px 0", borderBottom: i < FEATURES.length - 1 ? "1px solid rgba(30,30,30,0.06)" : "none" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: f.tags.length > 0 ? "8px" : 0 }}>
                      <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "14px", fontWeight: 600, color: "#1E1E1E" }}>{f.name}</span>
                      <Minus size={16} color="rgba(30,30,30,0.3)" strokeWidth={2} />
                    </div>
                    {f.tags.length > 0 && (
                      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" as const }}>
                        {f.tags.map(tag => (
                          <span key={tag} style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", fontWeight: 500, color: "rgba(30,30,30,0.6)", background: "rgba(30,30,30,0.05)", border: "1px solid rgba(30,30,30,0.1)", padding: "3px 10px", borderRadius: "6px" }}>{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            {/* ── Right column: Values + Focus Area ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {/* Values */}
              <Card tint="white" radius="lg" padding="20px" style={{ border: "1px solid rgba(30,30,30,0.07)" }}>
                <Heading level="step" as="h3" style={{ fontSize: "16px", color: "#1E1E1E", marginBottom: "16px" }}>
                  Values
                </Heading>
                {VALUES.map((v, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "12px 0", borderBottom: i < VALUES.length - 1 ? "1px solid rgba(30,30,30,0.06)" : "none" }}>
                    <div style={{ width: 36, height: 36, borderRadius: v.Icon === Code2 ? "8px" : "50%", background: v.iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <v.Icon size={18} color="#fff" strokeWidth={2} />
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "13.5px", color: "#1E1E1E", marginBottom: "8px" }}>{v.label}</div>
                      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" as const }}>
                        {v.tags.map(tag => (
                          <span key={tag.label} style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11.5px", fontWeight: 500, color: "#FFA840", background: "rgba(255,168,64,0.1)", padding: "3px 9px", borderRadius: "6px" }}>{tag.label}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </Card>

              {/* Focus Area */}
              <Card tint="white" radius="lg" padding="20px" style={{ border: "1px solid rgba(30,30,30,0.07)" }}>
                <Heading level="step" as="h3" style={{ fontSize: "16px", color: "#1E1E1E", marginBottom: "14px" }}>
                  Focus Area
                </Heading>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                  <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "conic-gradient(#22C55E 0% 33%, #FFA840 33% 66%, #E52727 66% 100%)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#fff" }} />
                  </div>
                  <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "15px", color: "#1E1E1E" }}>Minimal</span>
                </div>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" as const }}>
                  {FOCUS_TAGS.map(tag => (
                    <span key={tag} style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11.5px", fontWeight: 500, color: "#29A5FF", padding: "3px 9px", borderRadius: "6px" }}>{tag}</span>
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
