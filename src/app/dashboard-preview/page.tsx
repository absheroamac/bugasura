"use client";

import {
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Search,
  Settings,
  Trash2,
  Database,
  ExternalLink,
  Info,
  Eye,
  Zap,
  BookOpen,
  FileText,
  Bug,
  TrendingUp,
  TestTube,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import BodyText from "@/components/ui/BodyText";
import Eyebrow from "@/components/ui/Eyebrow";

// ─── Data ─────────────────────────────────────────────────────────────────────

type StepStatus = "completed" | "active" | "upcoming";
interface Step { label: string; status: StepStatus }

const STEPS: Step[] = [
  { label: "Sprint",   status: "completed" },
  { label: "Refine",   status: "completed" },
  { label: "Plan",     status: "completed" },
  { label: "Enrich",   status: "completed" },
  { label: "Coverage", status: "completed" },
  { label: "Generate", status: "active"    },
  { label: "Tests",    status: "upcoming"  },
  { label: "Runs",     status: "upcoming"  },
  { label: "Reports",  status: "upcoming"  },
];

interface TestCase { category: string; description: string }
const TEST_CASES: TestCase[] = [
  { category: "Acme_HyperCheckout",                   description: "Business Critical Flows" },
  { category: "Unified_Checkout_Experience",             description: "Support for multiple payment methods" },
  { category: "Authentication_and_Convenience_Features", description: "Auto OTP Read" },
  { category: "Authentication_and_Convenience_Features", description: "1 Click Card Checkout" },
  { category: "Transaction_Resilience",                  description: "Auto Retry Engine" },
  { category: "Checkout_Experience_Customization",       description: "No Code Design Studio" },
  { category: "Payment_Routing_and_Orchestration",       description: "Dynamic Payment Routing" },
];

interface LogEntry { message: string; time: string }
const LOGS: LogEntry[] = [
  { message: "Syed Rehman has started generating the test cases.",                  time: "6th Apr, 2026 · 06:49 AM" },
  { message: "Generating Test Cases…",                                              time: "6th Apr, 2026 · 06:50 PM" },
  { message: "Generating test cases for Business Critical Flows",                   time: "6th Apr, 2026 · 06:51 PM" },
  { message: "Generating test cases for Auto Retry Engine",                         time: "6th Apr, 2026 · 06:51 PM" },
  { message: "Generating test cases for Support for multiple payment methods",      time: "6th Apr, 2026 · 06:51 PM" },
  { message: "Generating test cases for Platform Integrations",                     time: "6th Apr, 2026 · 06:51 PM" },
  { message: "Generating test cases for Order Status API",                          time: "6th Apr, 2026 · 06:51 PM" },
  { message: "Generating test cases for Auto OTP Read",                             time: "6th Apr, 2026 · 06:51 PM" },
  { message: "Generating test cases for 1 Click Card Checkout",                     time: "6th Apr, 2026 · 06:51 PM" },
  { message: "Generating test cases for Dynamic Payment Routing",                   time: "6th Apr, 2026 · 06:51 PM" },
  { message: "Generating test cases for No Code Design Studio",                     time: "6th Apr, 2026 · 06:51 PM" },
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
            {/* Pill */}
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
                <Zap size={12} color="#ffffff" strokeWidth={2.5} />
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
            {/* Connector */}
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

function StatusBadge({ label, color, bg, borderColor }: { label: string; color: string; bg: string; borderColor: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "5px", background: bg, border: `1px solid ${borderColor}`, padding: "4px 12px", borderRadius: "20px" }}>
      <CheckCircle2 size={12} color={color} strokeWidth={2.5} />
      <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", fontWeight: 600, color }}>{label}</span>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DashboardPreviewPage() {
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
              Generate Test Cases
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
          <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "16px", alignItems: "start" }}>

            {/* ── Left column ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>

              {/* Generate card */}
              <Card tint="white" radius="lg" padding="22px" style={{ border: "1px solid rgba(30,30,30,0.07)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                  <Zap size={15} color="#29A5FF" strokeWidth={2.2} />
                  <Eyebrow variant="badge" color="#29A5FF" style={{ marginBottom: 0 }}>
                    Generate Test Cases
                  </Eyebrow>
                </div>
                <BodyText opacity={0.45} style={{ fontSize: "13px", marginTop: "6px", lineHeight: 1.6 }}>
                  Testpert generates test cases, letting you track their progress and view results.
                </BodyText>

                {/* Progress status */}
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  marginTop: "18px",
                  padding: "11px 16px",
                  background: "rgba(22,163,74,0.05)",
                  borderRadius: "12px",
                  border: "1px solid rgba(22,163,74,0.14)",
                }}>
                  <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "14px", color: "#1E1E1E" }}>
                    Testpert Progress
                  </span>
                  <StatusBadge
                    label="Completed"
                    color="#16a34a"
                    bg="rgba(22,163,74,0.1)"
                    borderColor="rgba(22,163,74,0.2)"
                  />
                </div>
              </Card>

              {/* Test case list */}
              <Card tint="white" radius="lg" padding="0" style={{ border: "1px solid rgba(30,30,30,0.07)", overflow: "hidden" }}>
                {/* List header */}
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "12px 20px",
                  borderBottom: "1px solid rgba(30,30,30,0.06)",
                  background: "rgba(30,30,30,0.02)",
                }}>
                  <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11.5px", fontWeight: 600, color: "rgba(30,30,30,0.4)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    Test Cases
                  </span>
                  <span style={{
                    fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 600,
                    background: "rgba(41,165,255,0.1)",
                    color: "#29A5FF",
                    padding: "2px 8px",
                    borderRadius: "20px",
                  }}>
                    {TEST_CASES.length}
                  </span>
                </div>

                {TEST_CASES.map((tc, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "13px 20px",
                      borderBottom: i < TEST_CASES.length - 1 ? "1px solid rgba(30,30,30,0.05)" : "none",
                      gap: "12px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", flex: 1, minWidth: 0 }}>
                      <CheckCircle2
                        size={15}
                        color="#16a34a"
                        strokeWidth={2}
                        style={{ flexShrink: 0, marginTop: "1px" }}
                      />
                      <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "#1E1E1E", lineHeight: 1.5, margin: 0 }}>
                        <span style={{ fontWeight: 600 }}>{tc.category}</span>
                        <span style={{ color: "rgba(30,30,30,0.45)" }}>: {tc.description}</span>
                      </p>
                    </div>

                    <button style={{
                      display: "flex", alignItems: "center", gap: "5px",
                      fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", fontWeight: 600,
                      color: "#29A5FF",
                      background: "rgba(41,165,255,0.08)",
                      border: "1px solid rgba(41,165,255,0.18)",
                      borderRadius: "8px",
                      padding: "5px 13px",
                      cursor: "pointer",
                      flexShrink: 0,
                      whiteSpace: "nowrap" as const,
                    }}>
                      <ExternalLink size={11} strokeWidth={2.5} />
                      View
                    </button>
                  </div>
                ))}
              </Card>

              {/* Back / Next */}
              <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "10px", paddingTop: "4px" }}>
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

            {/* ── Right column: Logs ── */}
            <Card
              tint="#EDF7FC"
              radius="lg"
              padding="0"
              style={{
                position: "sticky",
                top: "0",
                overflow: "hidden",
                border: "1px solid rgba(41,165,255,0.12)",
              }}
            >
              {/* Log header */}
              <div style={{
                padding: "14px 18px",
                borderBottom: "1px solid rgba(41,165,255,0.1)",
                display: "flex", alignItems: "center", gap: "8px",
              }}>
                <FileText size={14} color="#0077B6" strokeWidth={2} />
                <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "14px", color: "#1E1E1E" }}>
                  Logs
                </span>
              </div>

              {/* Log entries */}
              <div style={{ overflowY: "auto", maxHeight: "440px", padding: "4px 0" }}>
                {LOGS.map((log, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "10px 18px",
                      borderBottom: i < LOGS.length - 1 ? "1px solid rgba(41,165,255,0.08)" : "none",
                    }}
                  >
                    <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                      <Info
                        size={12}
                        color="#0077B6"
                        strokeWidth={2}
                        style={{ flexShrink: 0, marginTop: "3px" }}
                      />
                      <div>
                        <p style={{
                          fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px",
                          color: "#1E1E1E", lineHeight: 1.5, margin: "0 0 3px",
                        }}>
                          {log.message}
                        </p>
                        <p style={{
                          fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "10.5px",
                          color: "rgba(30,30,30,0.4)", margin: 0,
                        }}>
                          {log.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
}
