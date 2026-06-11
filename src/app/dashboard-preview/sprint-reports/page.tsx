"use client";

import {
  Eye, TrendingUp, BookOpen, FileText, TestTube,
  Zap, Database, Bug, Settings, Trash2,
  ChevronRight, ChevronLeft, ChevronDown, Search,
  Bug as BugIcon, CheckCircle2, XCircle, Ban,
  Settings2, BarChart2, ClipboardList, FileText as FileIcon,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { label: "Eagle Eye",      Icon: Eye,        count: null, active: false },
  { label: "Revenue Flows",  Icon: TrendingUp, count: null, active: false },
  { label: "Knowledge Base", Icon: BookOpen,   count: 10,   active: false },
  { label: "Requirements",   Icon: FileText,   count: 26,   active: false },
  { label: "Test Repo",      Icon: TestTube,   count: 350,  active: false },
  { label: "Sprints",        Icon: Zap,        count: 6,    active: true  },
  { label: "Test Data",      Icon: Database,   count: 2,    active: false },
  { label: "Issues",         Icon: Bug,        count: 141,  active: false },
  { label: "Settings",       Icon: Settings,   count: null, active: false },
  { label: "Trash",          Icon: Trash2,     count: null, active: false },
];

const STEPS = [
  { label: "Sprint", done: true },
  { label: "Refine", done: true },
  { label: "Plan", done: true },
  { label: "Enrich", done: true },
  { label: "Coverage", done: true },
  { label: "Generate", done: true },
  { label: "Tests", done: false, current: false },
  { label: "Runs", done: false, current: false, icon: "play" },
  { label: "Reports", done: false, current: true, icon: "report" },
];

const TABS = ["Insights", "Execution", "Business", "Product", "Engineering", "Traceability Matrix"];

const STAT_CARDS = [
  { label: "TESTS EXECUTED", value: "120", color: "#29A5FF", bg: "rgba(41,165,255,0.1)", Icon: BugIcon },
  { label: "TESTS PASSED",   value: "76",  color: "#16A34A", bg: "rgba(22,163,74,0.1)",  Icon: CheckCircle2 },
  { label: "TESTS FAILED",   value: "44",  color: "#E52727", bg: "rgba(229,39,39,0.1)",  Icon: XCircle },
  { label: "TOTAL BLOCKERS", value: "12",  color: "#FFA840", bg: "rgba(255,168,64,0.12)", Icon: Ban },
];

const FEATURE_COLS = [
  "Business Critical Fl…", "Authentication", "Authorization", "Privacy",
  "Security Holes", "Pci Dss Compliance", "Data Integrity", "Error Handling", "API",
];

type Cell = "go" | "nogo" | "";

interface FeatureRow { name: string; cells: Cell[] }

const GO_NO_GO_ROWS: FeatureRow[] = [
  { name: "Order Update …",    cells: ["", "", "", "", "", "", "", "", "go"] },
  { name: "Compliance a…",     cells: ["", "go", "go", "nogo", "go", "go", "", "go", ""] },
  { name: "Checkout Exp…",     cells: ["", "go", "go", "go", "go", "", "", "", ""] },
  { name: "Order API Life…",   cells: ["", "go", "go", "go", "", "go", "go", "nogo", ""] },
  { name: "Order Status …",    cells: ["", "", "", "", "", "", "", "", "nogo"] },
  { name: "Acme Hyper…",       cells: ["nogo", "", "", "", "", "", "", "", ""] },
  { name: "Authenticatio…",    cells: ["", "nogo", "", "nogo", "go", "nogo", "nogo", "", ""] },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SprintReportsPage() {
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
          <div style={{ padding: "20px 16px 16px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "36px", height: "36px", background: "#29A5FF", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "15px", color: "#fff" }}>A</span>
              </div>
              <div>
                <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "15px", color: "#ffffff", lineHeight: 1.2 }}>Acme</div>
                <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.35)", marginTop: "1px" }}>Workspace</div>
              </div>
            </div>
          </div>

          <div style={{ padding: "12px 16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.06)", borderRadius: "8px", padding: "8px 12px" }}>
              <Search size={13} color="rgba(255,255,255,0.3)" strokeWidth={2} />
              <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", color: "rgba(255,255,255,0.28)" }}>Search…</span>
            </div>
          </div>

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

          <div style={{ padding: "10px 16px", borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", gap: "14px" }}>
            {[Settings2, FileIcon, BarChart2, ClipboardList].map((Ic, i) => (
              <Ic key={i} size={16} color="rgba(255,255,255,0.28)" strokeWidth={1.6} style={{ cursor: "pointer" }} />
            ))}
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.28)" }}>+8</span>
          </div>

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
          display: "flex", alignItems: "center", gap: "6px", flexShrink: 0,
        }}>
          <ChevronLeft size={14} color="rgba(30,30,30,0.35)" strokeWidth={2} />
          <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.45)" }}>Sprint:</span>
          <ChevronRight size={13} color="rgba(30,30,30,0.25)" />
          <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#29A5FF" }}>Reports</span>
        </div>

        {/* Scrollable content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "20px 28px 24px" }}>

          {/* Title */}
          <h1 style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "26px", color: "#1E1E1E", margin: "0 0 16px" }}>
            Acme HyperCheckout
          </h1>

          {/* Pipeline */}
          <div style={{
            display: "flex", alignItems: "center", flexWrap: "wrap" as const, gap: "8px",
            background: "#ffffff", border: "1px solid rgba(30,30,30,0.07)", borderRadius: "12px",
            padding: "12px 18px", marginBottom: "16px",
          }}>
            {STEPS.map((step, i) => (
              <div key={step.label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  {step.done ? (
                    <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: "#16A34A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <CheckCircle2 size={11} color="#fff" strokeWidth={3} />
                    </div>
                  ) : step.icon === "play" ? (
                    <div style={{ width: "16px", height: "16px", borderRadius: "50%", border: "1.5px solid rgba(30,30,30,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <div style={{ width: 0, height: 0, borderTop: "3px solid transparent", borderBottom: "3px solid transparent", borderLeft: "4px solid rgba(30,30,30,0.35)", marginLeft: "1px" }} />
                    </div>
                  ) : (
                    <FileText size={14} color={step.current ? "#29A5FF" : "rgba(30,30,30,0.3)"} strokeWidth={2} />
                  )}
                  <span style={{
                    fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px",
                    fontWeight: step.current ? 700 : 400,
                    color: step.current ? "#29A5FF" : step.done ? "#1E1E1E" : "rgba(30,30,30,0.4)",
                  }}>{step.label}</span>
                </div>
                {i < STEPS.length - 1 && <ChevronRight size={13} color="rgba(30,30,30,0.2)" />}
              </div>
            ))}
          </div>

          {/* Tabs row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(30,30,30,0.07)", marginBottom: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              {TABS.map(tab => (
                <span
                  key={tab}
                  style={{
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    fontSize: "13.5px",
                    fontWeight: tab === "Insights" ? 600 : 400,
                    color: tab === "Insights" ? "#29A5FF" : "rgba(30,30,30,0.45)",
                    borderBottom: tab === "Insights" ? "2px solid #29A5FF" : "2px solid transparent",
                    padding: "0 14px 12px", cursor: "pointer", marginBottom: "-1px", whiteSpace: "nowrap" as const,
                  }}
                >
                  {tab}
                </span>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", border: "1px solid rgba(30,30,30,0.1)", borderRadius: "8px", padding: "8px 14px", marginBottom: "10px", cursor: "pointer" }}>
              <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#1E1E1E" }}>All Runs</span>
              <ChevronDown size={14} color="rgba(30,30,30,0.4)" />
            </div>
          </div>

          {/* Stat cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "24px" }}>
            {STAT_CARDS.map(({ label, value, color, bg, Icon }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "16px", background: "#ffffff", border: "1px solid rgba(30,30,30,0.07)", borderRadius: "14px", padding: "20px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={22} color={color} strokeWidth={2} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "26px", color: "#1E1E1E", lineHeight: 1.2 }}>{value}</div>
                  <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.04em", color: "rgba(30,30,30,0.4)", marginTop: "2px" }}>{label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Overall Go No-Go */}
          <div style={{ background: "#ffffff", border: "1px solid rgba(30,30,30,0.07)", borderRadius: "14px", padding: "20px", marginBottom: "24px" }}>
            <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "17px", color: "#1E1E1E", marginBottom: "4px" }}>Overall Go No-Go</div>
            <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", color: "rgba(30,30,30,0.45)", marginBottom: "16px" }}>
              No Go Criteria - If total failures are more than 50% of executed tests it will be termed as No Go
            </div>

            <div style={{ overflowX: "auto" }}>
              <div style={{ minWidth: "920px" }}>
                {/* Header */}
                <div style={{ display: "grid", gridTemplateColumns: `160px repeat(${FEATURE_COLS.length}, 1fr)`, gap: "8px", paddingBottom: "12px", borderBottom: "1px solid rgba(30,30,30,0.06)" }}>
                  <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.04em", color: "rgba(30,30,30,0.4)" }}>FEATURES/TAGS</span>
                  {FEATURE_COLS.map(c => (
                    <span key={c} style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11.5px", fontWeight: 600, color: "rgba(30,30,30,0.5)", textAlign: "center" as const }}>{c}</span>
                  ))}
                </div>
                {/* Rows */}
                {GO_NO_GO_ROWS.map((row, i) => (
                  <div key={row.name} style={{
                    display: "grid", gridTemplateColumns: `160px repeat(${FEATURE_COLS.length}, 1fr)`, gap: "8px",
                    alignItems: "center", padding: "10px 0",
                    borderBottom: i < GO_NO_GO_ROWS.length - 1 ? "1px solid rgba(30,30,30,0.05)" : "none",
                  }}>
                    <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "#1E1E1E" }}>{row.name}</span>
                    {row.cells.map((cell, j) => (
                      <div key={j} style={{ display: "flex", justifyContent: "center" }}>
                        {cell === "go" && (
                          <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700, color: "#16A34A", background: "rgba(22,163,74,0.1)", borderRadius: "6px", padding: "5px 14px", width: "100%", textAlign: "center" as const }}>Go</span>
                        )}
                        {cell === "nogo" && (
                          <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700, color: "#E52727", background: "rgba(229,39,39,0.08)", borderRadius: "6px", padding: "5px 14px", width: "100%", textAlign: "center" as const }}>No Go</span>
                        )}
                        {cell === "" && (
                          <div style={{ width: "100%", height: "24px", borderRadius: "6px", background: "rgba(30,30,30,0.03)" }} />
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom analysis cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div style={{ background: "#ffffff", border: "1px solid rgba(30,30,30,0.07)", borderRadius: "14px", padding: "20px", minHeight: "180px" }}>
              <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "17px", color: "#1E1E1E", marginBottom: "16px" }}>Tech Risk Analysis</div>
              <div style={{ height: "120px", borderRadius: "10px", background: "linear-gradient(135deg, rgba(41,165,255,0.06) 0%, rgba(255,168,64,0.06) 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", color: "rgba(30,30,30,0.35)" }}>AI-generated risk breakdown</span>
              </div>
            </div>
            <div style={{ background: "#ffffff", border: "1px solid rgba(30,30,30,0.07)", borderRadius: "14px", padding: "20px", minHeight: "180px" }}>
              <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "17px", color: "#1E1E1E", marginBottom: "16px" }}>Critical Metrics Analysis</div>
              <div style={{ height: "120px", borderRadius: "10px", background: "linear-gradient(135deg, rgba(229,39,39,0.05) 0%, rgba(22,163,74,0.06) 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", color: "rgba(30,30,30,0.35)" }}>Pass/fail trend across critical metrics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
