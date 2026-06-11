"use client";

import { useState } from "react";
import {
  Eye, TrendingUp, BookOpen, FileText, TestTube,
  Zap, Database, Bug, Settings, Trash2,
  ChevronRight, CheckCircle2, Search,
  Play, BarChart2, Plus, Minus, MessageCircle,
  Target, Building,
  Cylinder, NotebookPen, GitBranch,
  LayoutList, Diamond,
} from "lucide-react";
import Heading from "@/components/ui/Heading";

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { label: "Eagle Eye",      Icon: Eye,       count: null, active: false },
  { label: "Revenue Flows",  Icon: TrendingUp, count: null, active: false },
  { label: "Knowledge Base", Icon: BookOpen,   count: 10,   active: false },
  { label: "Requirements",   Icon: FileText,   count: 26,   active: false },
  { label: "Test Repo",      Icon: TestTube,   count: 350,  active: false },
  { label: "Sprints",        Icon: Zap,        count: 6,    active: true  },
  { label: "Test Data",      Icon: Database,   count: null, active: false },
  { label: "Issues",         Icon: Bug,        count: 141,  active: false },
  { label: "Settings",       Icon: Settings,   count: null, active: false },
  { label: "Trash",          Icon: Trash2,     count: null, active: false },
];

type StepStatus = "completed" | "active" | "upcoming";
interface Step { label: string; status: StepStatus; Icon: React.ElementType }

const STEPS: Step[] = [
  { label: "Sprint",   status: "completed", Icon: CheckCircle2 },
  { label: "Refine",   status: "active",    Icon: Target },
  { label: "Plan",     status: "completed", Icon: CheckCircle2 },
  { label: "Enrich",   status: "completed", Icon: CheckCircle2 },
  { label: "Coverage", status: "completed", Icon: CheckCircle2 },
  { label: "Generate", status: "completed", Icon: CheckCircle2 },
  { label: "Tests",    status: "upcoming",  Icon: FileText },
  { label: "Runs",     status: "upcoming",  Icon: Play },
  { label: "Reports",  status: "upcoming",  Icon: BarChart2 },
];

const SOURCE_ITEMS = [
  { label: "Stories, Epics, Features", count: 2, active: true },
  { label: "Sprint PRDs",              count: 2, active: false },
  { label: "Designs",                  count: 0, active: false },
  { label: "Production",               count: 0, active: false },
];

interface SourceCard {
  label: string;
  bg: string;
  iconEl: React.ReactNode;
  badge?: string;
  badgeBg?: string;
  connected?: boolean;
}

const SOURCE_CARDS: SourceCard[] = [
  {
    label: "JIRA",
    bg: "#E8F0FE",
    iconEl: <Diamond size={28} color="#0052CC" fill="#0052CC" strokeWidth={0} />,
  },
  {
    label: "Upload Docs",
    bg: "#FFF3E8",
    iconEl: (
      <div style={{ position: "relative" }}>
        <FileText size={28} color="#E65C00" strokeWidth={1.5} />
        <div style={{ position: "absolute", top: -6, right: -6, background: "#22C55E", borderRadius: "3px", padding: "1px 4px", fontSize: "7px", fontWeight: 700, color: "#fff", fontFamily: "sans-serif" }}>✓</div>
      </div>
    ),
    connected: true,
  },
  {
    label: "API Docs",
    bg: "#E8F5E9",
    iconEl: (
      <div style={{ position: "relative" }}>
        <div style={{ width: 28, height: 28, background: "#1B8B34", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontFamily: "monospace", fontWeight: 700, fontSize: "9px", color: "#fff" }}>API</span>
        </div>
        <div style={{ position: "absolute", top: -5, right: -5, width: 13, height: 13, background: "#22C55E", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <CheckCircle2 size={9} color="#fff" strokeWidth={3} />
        </div>
      </div>
    ),
    connected: true,
  },
  {
    label: "Architecture",
    bg: "#F3F4F6",
    iconEl: <Building size={26} color="#374151" strokeWidth={1.5} />,
  },
  {
    label: "DB Schema",
    bg: "#E8F4FD",
    iconEl: <Cylinder size={26} color="#1A73E8" strokeWidth={1.5} />,
  },
  {
    label: "Meeting Notes",
    bg: "#F3E8FF",
    iconEl: <NotebookPen size={26} color="#7C3AED" strokeWidth={1.5} />,
  },
  {
    label: "Google Docs",
    bg: "#E8F0FE",
    iconEl: <FileText size={26} color="#1A73E8" strokeWidth={1.5} />,
  },
  {
    label: "User Flow",
    bg: "#FFF8E8",
    iconEl: <GitBranch size={26} color="#B45309" strokeWidth={1.5} />,
  },
  {
    label: "Add Custom",
    bg: "#F9FAFB",
    iconEl: <Plus size={26} color="rgba(30,30,30,0.3)" strokeWidth={1.5} />,
    badge: undefined,
  },
  {
    label: "Asana",
    bg: "#FFF0F0",
    iconEl: (
      <div style={{ display: "flex", gap: 2 }}>
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#F06A6A" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#F06A6A", marginTop: 6 }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#F06A6A" }} />
      </div>
    ),
  },
  {
    label: "Zoho",
    bg: "#F0FFF4",
    iconEl: (
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
        {["#E52727", "#22C55E", "#22C55E", "#FFA840"].map((c, i) => (
          <div key={i} style={{ width: 10, height: 10, borderRadius: "2px", background: c }} />
        ))}
      </div>
    ),
  },
];

const KB_SECTIONS = [
  {
    label: "Files",
    count: 1,
    iconBg: "#FFF3E8",
    iconColor: "#E65C00",
    files: ["YourApp HyperCheckout Feature Requirement Document.docx"],
  },
  {
    label: "API Docs",
    count: 1,
    iconBg: "#E8F5E9",
    iconColor: "#1B8B34",
    files: ["Create Order API Endpoint Details.docx"],
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SprintRefinePage() {
  const [kbOpen, setKbOpen] = useState<Record<string, boolean>>({ Files: true, "API Docs": true });

  return (
    <div style={{
      display: "flex", height: "100vh", background: "#F2EFE8",
      fontFamily: "var(--font-inter), Inter, sans-serif", overflow: "hidden",
    }}>
      {/* ── Sidebar ─────────────────────────────────────────────────────────── */}
      <div style={{ padding: "12px 0 12px 12px", flexShrink: 0 }}>
      <aside style={{
        width: "232px", height: "100%", background: "#1E1E1E",
        display: "flex", flexDirection: "column", overflowY: "auto",
        borderRadius: "16px",
      }}>
        {/* Client logo */}
        <div style={{ padding: "20px 16px 16px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "36px", height: "36px", background: "#29A5FF", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
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
            <div key={label} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "8px 12px", marginBottom: "2px", borderRadius: "10px", cursor: "pointer",
              background: active ? "rgba(229,39,39,0.14)" : "transparent",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                <Icon size={15} color={active ? "#E52727" : "rgba(255,255,255,0.38)"} strokeWidth={active ? 2.2 : 1.8} />
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: active ? 600 : 400, color: active ? "#ffffff" : "rgba(255,255,255,0.52)" }}>{label}</span>
              </div>
              {count !== null && (
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 600, color: active ? "#E52727" : "rgba(255,255,255,0.25)", background: active ? "rgba(229,39,39,0.18)" : "rgba(255,255,255,0.06)", padding: "2px 7px", borderRadius: "20px" }}>{count}</span>
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
              <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.85)", lineHeight: 1.3 }}>User</div>
              <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.35)", lineHeight: 1.3 }}>user@acme.io</div>
            </div>
          </div>
        </div>
      </aside>
      </div>

      <div style={{ width: "12px", flexShrink: 0 }} />

      {/* ── Main area ────────────────────────────────────────────────────────── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: "#ffffff" }}>

        {/* Top bar */}
        <div style={{
          background: "#ffffff", borderBottom: "1px solid rgba(30,30,30,0.07)",
          padding: "0 28px", height: "52px",
          display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.38)", cursor: "pointer" }}>Sprint</span>
            <ChevronRight size={13} color="rgba(30,30,30,0.25)" />
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#29A5FF" }}>Refine Context</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#F5F5F3", border: "1px solid rgba(30,30,30,0.08)", borderRadius: "8px", padding: "7px 13px" }}>
            <Search size={13} color="rgba(30,30,30,0.35)" strokeWidth={2} />
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", color: "rgba(30,30,30,0.3)" }}>Search…</span>
          </div>
        </div>

        {/* Inner scrollable */}
        <div style={{ flex: 1, overflowY: "auto", padding: "20px 28px 24px" }}>

          {/* Page title */}
          <Heading level="step" as="h1" style={{ fontSize: "24px", letterSpacing: "-0.02em", color: "#1E1E1E", marginBottom: "16px" }}>
            Acme HyperCheckout
          </Heading>

          {/* Step bar */}
          <div style={{
            background: "#ffffff", borderRadius: "12px",
            border: "1px solid rgba(30,30,30,0.07)",
            padding: "12px 20px", marginBottom: "20px",
            display: "flex", alignItems: "center",
          }}>
            {STEPS.map((step, i) => (
              <div key={step.label} style={{ display: "flex", alignItems: "center", flex: i < STEPS.length - 1 ? 1 : "none" }}>
                <div style={{
                  display: "flex", alignItems: "center", gap: "6px",
                  padding: "5px 13px", borderRadius: "20px", flexShrink: 0,
                  background:
                    step.status === "active"    ? "#29A5FF" :
                    step.status === "completed" ? "rgba(22,163,74,0.08)" :
                    "rgba(30,30,30,0.03)",
                  border:
                    step.status === "active"    ? "1px solid #29A5FF" :
                    step.status === "completed" ? "1px solid rgba(22,163,74,0.18)" :
                    "1px solid rgba(30,30,30,0.08)",
                }}>
                  {step.status === "completed" && (
                    <CheckCircle2 size={12} color="#16a34a" strokeWidth={2.5} />
                  )}
                  {step.status === "active" && (
                    <step.Icon size={12} color="#ffffff" strokeWidth={2.5} />
                  )}
                  {step.status === "upcoming" && (
                    <step.Icon size={12} color="rgba(30,30,30,0.35)" strokeWidth={1.8} />
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
                    flex: 1, height: "1.5px", minWidth: "4px",
                    background: step.status === "completed"
                      ? "rgba(22,163,74,0.2)"
                      : "rgba(30,30,30,0.08)",
                  }} />
                )}
              </div>
            ))}
          </div>

          {/* Two column layout */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "16px", alignItems: "start" }}>

            {/* ── Left: Add Requirements ── */}
            <div style={{
              background: "#ffffff", borderRadius: "12px",
              border: "1px solid rgba(30,30,30,0.07)",
              padding: "24px",
            }}>
              <h2 style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "17px", color: "#1E1E1E", margin: "0 0 8px" }}>
                Add Requirements for YourApp HyperCheckout
              </h2>
              <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.45)", margin: "0 0 22px", lineHeight: 1.6 }}>
                Upload all the documents or connect TestPert to all the sources of requirements for your project. TestPert will analyse these to build your test strategy, plan and cases.
              </p>

              <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "14px", color: "#1E1E1E", margin: "0 0 14px" }}>Sources</p>

              <div style={{ display: "flex", gap: "20px" }}>
                {/* Source list */}
                <div style={{ width: "170px", flexShrink: 0 }}>
                  {SOURCE_ITEMS.map(item => (
                    <div key={item.label} style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "8px 10px", marginBottom: "4px", borderRadius: "8px",
                      background: item.active ? "rgba(41,165,255,0.06)" : "transparent",
                      cursor: "pointer",
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                        <LayoutList size={13} color={item.active ? "#29A5FF" : "rgba(30,30,30,0.35)"} strokeWidth={1.8} />
                        <span style={{
                          fontFamily: "var(--font-inter), Inter, sans-serif",
                          fontSize: "12.5px", fontWeight: item.active ? 600 : 400,
                          color: item.active ? "#29A5FF" : "rgba(30,30,30,0.55)",
                        }}>{item.label}</span>
                      </div>
                      {item.count > 0 && (
                        <span style={{
                          display: "flex", alignItems: "center", gap: "3px",
                          fontFamily: "var(--font-inter), Inter, sans-serif",
                          fontSize: "11px", fontWeight: 600,
                          color: "#16a34a",
                        }}>
                          <CheckCircle2 size={11} color="#16a34a" strokeWidth={2.5} />
                          {item.count}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Source cards grid */}
                <div style={{
                  flex: 1,
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "10px",
                }}>
                  {SOURCE_CARDS.map((card, i) => (
                    <div
                      key={i}
                      style={{
                        background: "#ffffff",
                        border: "1px solid rgba(30,30,30,0.09)",
                        borderRadius: "10px",
                        padding: "14px 10px",
                        display: "flex", flexDirection: "column",
                        alignItems: "center", gap: "8px",
                        cursor: "pointer",
                        transition: "border-color 0.15s, box-shadow 0.15s",
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(41,165,255,0.4)";
                        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 10px rgba(41,165,255,0.07)";
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(30,30,30,0.09)";
                        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                      }}
                    >
                      <div style={{
                        width: "48px", height: "48px", borderRadius: "10px",
                        background: card.bg,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        position: "relative",
                      }}>
                        {card.iconEl}
                      </div>
                      <span style={{
                        fontFamily: "var(--font-inter), Inter, sans-serif",
                        fontSize: "11.5px", fontWeight: 500, textAlign: "center",
                        color: card.label === "Add Custom" ? "rgba(30,30,30,0.4)" : "#1E1E1E",
                      }}>{card.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right: Knowledge Base Summary ── */}
            <div style={{
              background: "#ffffff", borderRadius: "12px",
              border: "1px solid rgba(30,30,30,0.07)",
              padding: "24px",
            }}>
              <h2 style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "16px", color: "#1E1E1E", margin: "0 0 8px", textAlign: "center" }}>
                Knowledge Base Summary
              </h2>
              <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", color: "rgba(30,30,30,0.45)", margin: "0 0 20px", lineHeight: 1.6, textAlign: "center" }}>
                We have summarised your knowledge base from the sources you had added. You can customise it as required.
              </p>

              {KB_SECTIONS.map(section => (
                <div key={section.label} style={{ marginBottom: "12px", border: "1px solid rgba(30,30,30,0.08)", borderRadius: "10px", overflow: "hidden" }}>
                  {/* Section header */}
                  <button
                    onClick={() => setKbOpen(o => ({ ...o, [section.label]: !o[section.label] }))}
                    style={{
                      width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "12px 14px", background: "none", border: "none", cursor: "pointer",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{
                        width: "28px", height: "28px", borderRadius: "6px",
                        background: section.iconBg, display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <FileText size={15} color={section.iconColor} strokeWidth={1.8} />
                      </div>
                      <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "14px", color: "#1E1E1E" }}>
                        {section.label} ({section.count})
                      </span>
                    </div>
                    <Minus size={16} color="rgba(30,30,30,0.35)" strokeWidth={2} />
                  </button>

                  {/* Files */}
                  {kbOpen[section.label] && (
                    <div style={{ padding: "0 14px 12px" }}>
                      {section.files.map((file, i) => (
                        <div key={i} style={{
                          display: "flex", alignItems: "flex-start", gap: "8px",
                          padding: "6px 0",
                        }}>
                          <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", color: "rgba(30,30,30,0.4)", fontWeight: 600, minWidth: "14px" }}>
                            {i + 1}.
                          </span>
                          <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", color: "#1E1E1E", lineHeight: 1.5 }}>
                            {file}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Footer nav */}
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "20px" }}>
            <button style={{
              fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", fontWeight: 600,
              color: "#1E1E1E", background: "#ffffff",
              border: "1.5px solid rgba(30,30,30,0.15)",
              borderRadius: "8px", padding: "9px 28px", cursor: "pointer",
            }}>
              Back
            </button>
            <button style={{
              fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", fontWeight: 600,
              color: "#ffffff", background: "#29A5FF",
              border: "none", borderRadius: "8px", padding: "9px 28px", cursor: "pointer",
            }}>
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Chat FAB */}
      <div style={{
        position: "fixed", bottom: "24px", right: "24px",
        width: "48px", height: "48px", borderRadius: "50%",
        background: "#29A5FF",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 4px 16px rgba(41,165,255,0.35)", cursor: "pointer",
        zIndex: 50,
      }}>
        <MessageCircle size={22} color="#ffffff" strokeWidth={2} fill="#ffffff" />
      </div>
    </div>
  );
}
