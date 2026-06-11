"use client";

import { useState } from "react";
import {
  Eye, TrendingUp, BookOpen, FileText, TestTube,
  Zap, Database, Bug, Settings, Trash2,
  Search, ChevronRight, ChevronLeft, ChevronDown,
  ClipboardList, BarChart2, SlidersHorizontal, ArrowUpDown,
  Folder, Bot, XCircle, CircleSlash, Loader2, CheckCircle2,
  Globe, Settings2, FileText as FileIcon,
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

const TABS = ["Execution", "Issues", "Coverage", "Reports"];

const STAT_CARDS = [
  { label: "OVERALL TEST CASES", value: 20, color: "#29A5FF", bg: "rgba(41,165,255,0.1)", Icon: ClipboardList },
  { label: "TO BE STARTED",      value: 9,  color: "#16A34A", bg: "rgba(22,163,74,0.08)", Icon: Globe },
  { label: "BLOCKED",            value: 3,  color: "#E52727", bg: "rgba(229,39,39,0.08)", Icon: CircleSlash },
  { label: "IN PROGRESS",        value: 2,  color: "#FFA840", bg: "rgba(255,168,64,0.1)", Icon: Loader2 },
  { label: "COMPLETED",          value: 6,  color: "#1E1E1E", bg: "rgba(30,30,30,0.05)",  Icon: CheckCircle2 },
];

interface Row {
  id: string;
  severity: "HIGH" | "MEDIUM" | "LOW" | "CRITICAL";
  title: string;
  issues?: number;
  status?: "NEW" | "COMPLETED" | "IN PROGRESS";
  assignedAgent?: boolean;
}

const ROWS: Row[] = [
  { id: "TES185", severity: "HIGH",   title: "Searching vacation rentals on Airbnb", status: "NEW" },
  { id: "TES194", severity: "HIGH",   title: "Searching latest news on Times of India", issues: 1, status: "COMPLETED", assignedAgent: true },
  { id: "TES193", severity: "MEDIUM", title: "Searching movies and shows on Netflix", issues: 1, status: "COMPLETED", assignedAgent: true },
  { id: "TES192", severity: "MEDIUM", title: "Searching songs and playlists on Spotify", status: "COMPLETED", assignedAgent: true },
  { id: "TES191", severity: "HIGH",   title: "Searching jobs on LinkedIn", status: "COMPLETED", assignedAgent: true },
  { id: "TES190", severity: "MEDIUM", title: "Searching subreddits and posts on Reddit", status: "IN PROGRESS" },
  { id: "TES189", severity: "MEDIUM", title: "Searching an article on Wikipedia", status: "NEW" },
];

const SEVERITY_COLORS: Record<Row["severity"], { color: string; bg: string }> = {
  CRITICAL: { color: "#E52727", bg: "rgba(229,39,39,0.08)" },
  HIGH:     { color: "#FFA840", bg: "rgba(255,168,64,0.1)" },
  MEDIUM:   { color: "#16A39A", bg: "rgba(22,163,154,0.08)" },
  LOW:      { color: "#29A5FF", bg: "rgba(41,165,255,0.08)" },
};

const STATUS_COLORS: Record<NonNullable<Row["status"]>, { color: string; bg: string }> = {
  NEW:          { color: "#16A34A", bg: "rgba(22,163,74,0.08)" },
  COMPLETED:    { color: "#29A5FF", bg: "rgba(41,165,255,0.08)" },
  "IN PROGRESS":{ color: "#FFA840", bg: "rgba(255,168,64,0.1)" },
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SprintExecutionPage() {
  const [activeTab, setActiveTab] = useState("Execution");

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
                <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "15px", color: "#fff" }}>J</span>
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
          <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.45)" }}>Sprint: Test Runs</span>
          <ChevronRight size={13} color="rgba(30,30,30,0.25)" />
          <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#29A5FF" }}>Execution</span>
        </div>

        {/* Scrollable content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "20px 28px 24px" }}>

          {/* Title */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <h1 style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "26px", color: "#1E1E1E", margin: 0 }}>
              Browser Agent Sprint
            </h1>
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "16px", color: "rgba(30,30,30,0.3)" }}>/</span>
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "16px", fontWeight: 600, color: "rgba(30,30,30,0.5)" }}>1st Run</span>
            <ChevronDown size={16} color="rgba(30,30,30,0.35)" />
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px", borderBottom: "1px solid rgba(30,30,30,0.07)", marginBottom: "20px" }}>
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontSize: "13.5px",
                  fontWeight: activeTab === tab ? 600 : 400,
                  color: activeTab === tab ? "#29A5FF" : "rgba(30,30,30,0.45)",
                  background: "none", border: "none",
                  borderBottom: activeTab === tab ? "2px solid #29A5FF" : "2px solid transparent",
                  padding: "0 14px 12px", cursor: "pointer", marginBottom: "-1px",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Summary cards row */}
          <div style={{ display: "flex", alignItems: "stretch", gap: "12px", marginBottom: "16px" }}>
            <button aria-label="Previous" style={{ width: "32px", flexShrink: 0, background: "#ffffff", border: "1px solid rgba(30,30,30,0.08)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <ChevronLeft size={15} color="rgba(30,30,30,0.4)" />
            </button>

            {/* Total test cases donut card */}
            <div style={{ flex: 1, display: "flex", alignItems: "center", gap: "16px", background: "#ffffff", border: "1px solid rgba(30,30,30,0.07)", borderRadius: "14px", padding: "16px 20px" }}>
              <div style={{ position: "relative", width: "64px", height: "64px", flexShrink: 0 }}>
                <svg width="64" height="64" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="26" fill="none" stroke="rgba(22,163,74,0.15)" strokeWidth="10" />
                  <circle cx="32" cy="32" r="26" fill="none" stroke="#16A34A" strokeWidth="10"
                    strokeDasharray={`${(6/14) * 2 * Math.PI * 26} ${2 * Math.PI * 26}`}
                    strokeLinecap="round" transform="rotate(-90 32 32)" />
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "15px", color: "#1E1E1E", marginBottom: "8px" }}>Total Test Case Across Teams</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", color: "rgba(30,30,30,0.5)" }}>
                    <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#16A34A", display: "inline-block" }} /> Opened <span style={{ marginLeft: "auto", fontWeight: 700, color: "#1E1E1E" }}>14</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", color: "rgba(30,30,30,0.5)" }}>
                    <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "rgba(22,163,74,0.25)", display: "inline-block" }} /> Completed <span style={{ marginLeft: "auto", fontWeight: 700, color: "#1E1E1E" }}>6</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Browser Agent card */}
            <div style={{ flex: 1, background: "#ffffff", border: "1px solid rgba(30,30,30,0.07)", borderRadius: "14px", padding: "16px 20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(229,39,39,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Bot size={20} color="#E52727" strokeWidth={1.8} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "15px", color: "#1E1E1E" }}>Browser Agent</div>
                  <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", color: "rgba(30,30,30,0.45)" }}>Test Cases: 9</div>
                </div>
              </div>
              <div style={{ height: "6px", borderRadius: "4px", background: "rgba(30,30,30,0.06)", marginBottom: "8px", overflow: "hidden" }}>
                <div style={{ width: "100%", height: "100%", background: "#29A5FF" }} />
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", color: "rgba(30,30,30,0.5)" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}><span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#29A5FF", display: "inline-block" }} /> Opened <b style={{ color: "#1E1E1E" }}>0</b></span>
                <span>Completed <b style={{ color: "#1E1E1E" }}>9</b></span>
              </div>
            </div>

            {/* Syed card */}
            <div style={{ flex: 1, background: "#ffffff", border: "1px solid rgba(30,30,30,0.07)", borderRadius: "14px", padding: "16px 20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#E0DFFF", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                  <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "14px", color: "#5B5BD6" }}>S</span>
                </div>
                <div>
                  <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "15px", color: "#1E1E1E" }}>Syed</div>
                  <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", color: "rgba(30,30,30,0.45)" }}>Test Cases: 2</div>
                </div>
              </div>
              <div style={{ height: "6px", borderRadius: "4px", background: "rgba(30,30,30,0.06)", marginBottom: "8px", overflow: "hidden" }}>
                <div style={{ width: "0%", height: "100%", background: "#29A5FF" }} />
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", color: "rgba(30,30,30,0.5)" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}><span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#29A5FF", display: "inline-block" }} /> Opened <b style={{ color: "#1E1E1E" }}>2</b></span>
                <span>Completed <b style={{ color: "#1E1E1E" }}>0</b></span>
              </div>
            </div>

            {/* Faded next card peek */}
            <div style={{ flex: 1, background: "#F7F7F5", border: "1px solid rgba(30,30,30,0.05)", borderRadius: "14px", padding: "16px 20px", opacity: 0.5 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(30,30,30,0.08)" }} />
                <div style={{ flex: 1 }}>
                  <div style={{ width: "70%", height: "10px", borderRadius: "4px", background: "rgba(30,30,30,0.08)", marginBottom: "8px" }} />
                  <div style={{ width: "40%", height: "8px", borderRadius: "4px", background: "rgba(30,30,30,0.06)" }} />
                </div>
              </div>
            </div>

            <button aria-label="Next" style={{ width: "32px", flexShrink: 0, background: "#ffffff", border: "1px solid rgba(30,30,30,0.08)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <ChevronRight size={15} color="#29A5FF" />
            </button>
          </div>

          {/* Stat strip */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "12px", marginBottom: "16px" }}>
            {STAT_CARDS.map(({ label, value, color, bg, Icon }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "12px", background: "#ffffff", border: "1px solid rgba(30,30,30,0.07)", borderRadius: "12px", padding: "14px 16px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={17} color={color} strokeWidth={2} />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.04em", color: "rgba(30,30,30,0.4)", marginBottom: "2px" }}>{label}</div>
                  <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "20px", color }}>{value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Toolbar */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <div style={{ flex: 1, display: "flex", alignItems: "center", gap: "8px", background: "#F5F5F3", border: "1px solid rgba(30,30,30,0.08)", borderRadius: "24px", padding: "9px 16px" }}>
              <Search size={14} color="rgba(30,30,30,0.35)" strokeWidth={2} />
              <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.3)" }}>Search</span>
            </div>
            <button style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#1E1E1E", background: "#ffffff", border: "1px solid rgba(30,30,30,0.1)", borderRadius: "8px", padding: "9px 16px", cursor: "pointer" }}>
              <SlidersHorizontal size={14} strokeWidth={2} /> Filter <ChevronDown size={14} strokeWidth={2} />
            </button>
            <button style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#1E1E1E", background: "#ffffff", border: "1px solid rgba(30,30,30,0.1)", borderRadius: "8px", padding: "9px 16px", cursor: "pointer" }}>
              <ArrowUpDown size={14} strokeWidth={2} /> Sort <ChevronDown size={14} strokeWidth={2} />
            </button>
          </div>

          {/* Folders + table */}
          <div style={{ display: "flex", gap: "0", border: "1px solid rgba(30,30,30,0.07)", borderRadius: "14px", overflow: "hidden" }}>
            {/* Folder rail */}
            <div style={{ width: "36px", flexShrink: 0, borderRight: "1px solid rgba(30,30,30,0.06)", background: "#FAFAF8", display: "flex", flexDirection: "column", alignItems: "center", padding: "14px 0", gap: "10px" }}>
              <ChevronRight size={13} color="rgba(30,30,30,0.3)" />
              <span style={{
                writingMode: "vertical-rl" as const, transform: "rotate(180deg)",
                fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", fontWeight: 600, color: "rgba(30,30,30,0.4)", letterSpacing: "0.04em",
              }}>Folders</span>
            </div>

            <div style={{ flex: 1 }}>
              {/* All header */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "16px 20px", borderBottom: "1px solid rgba(30,30,30,0.06)" }}>
                <Folder size={16} color="rgba(30,30,30,0.4)" strokeWidth={1.8} />
                <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "17px", color: "#1E1E1E" }}>All</span>
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.4)" }}>20</span>
              </div>

              {ROWS.map((row, i) => (
                <div key={row.id} style={{
                  display: "flex", alignItems: "center", gap: "16px",
                  padding: "16px 20px",
                  borderBottom: i < ROWS.length - 1 ? "1px solid rgba(30,30,30,0.05)" : "none",
                }}>
                  <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "rgba(30,30,30,0.4)", flexShrink: 0, width: "62px" }}>{row.id}</span>
                  <span style={{
                    fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700,
                    color: SEVERITY_COLORS[row.severity].color, background: SEVERITY_COLORS[row.severity].bg,
                    padding: "4px 10px", borderRadius: "20px", flexShrink: 0, width: "70px", textAlign: "center" as const,
                  }}>{row.severity}</span>
                  <span style={{
                    fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", color: "#1E1E1E",
                    whiteSpace: "nowrap" as const, overflow: "hidden", textOverflow: "ellipsis", flex: 1,
                  }}>{row.title}</span>

                  {row.issues && (
                    <span style={{ display: "flex", alignItems: "center", gap: "4px", fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700, color: "#E52727", background: "rgba(229,39,39,0.08)", borderRadius: "20px", padding: "4px 8px", flexShrink: 0 }}>
                      <XCircle size={11} strokeWidth={2.4} /> {row.issues}
                    </span>
                  )}

                  {row.status && (
                    <span style={{
                      fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700,
                      color: STATUS_COLORS[row.status].color, background: STATUS_COLORS[row.status].bg,
                      padding: "4px 10px", borderRadius: "20px", flexShrink: 0, width: "92px", textAlign: "center" as const,
                    }}>{row.status}</span>
                  )}

                  {row.assignedAgent ? (
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", flexShrink: 0 }}>
                      <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(22,163,74,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <CheckCircle2 size={13} color="#16A34A" strokeWidth={2.4} />
                      </div>
                      <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(229,39,39,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Bot size={13} color="#E52727" strokeWidth={2} />
                      </div>
                    </div>
                  ) : row.status === "IN PROGRESS" ? (
                    <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(91,91,214,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "11px", color: "#5B5BD6" }}>S</span>
                    </div>
                  ) : (
                    <div style={{ width: "24px", flexShrink: 0 }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
