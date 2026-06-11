"use client";

import {
  Eye, TrendingUp, BookOpen, FileText, TestTube,
  Zap, Database, Bug, Settings, Trash2,
  Search, ChevronRight, ChevronLeft, CheckCircle2, Play,
  ClipboardList, BarChart2, ArrowUpDown, List, LayoutGrid, Plus,
  MoreVertical, Settings2, FileText as FileIcon, User, Maximize2,
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
  { label: "Sprint",   done: true },
  { label: "Refine",   done: true },
  { label: "Plan",     done: true },
  { label: "Enrich",   done: true },
  { label: "Coverage", done: true },
  { label: "Generate", done: true },
];

interface Run { title: string; sub: string; runs: number; files: number }
interface Column { title: string; count: number; color: string; runs: Run[] }

const COLUMNS: Column[] = [
  {
    title: "Scheduled", count: 168, color: "#FFA840",
    runs: [
      { title: "New April Run 05 June 202…", sub: "New April Run", runs: 12, files: 276 },
      { title: "Demo Run 28th Apr 05 Jun…", sub: "Demo Run 28th Apr", runs: 2, files: 2 },
      { title: "Demo Run 9th may 04 Jun…", sub: "Demo Run 9th may", runs: 5, files: 7 },
      { title: "April Run 04 June 2026 16:…", sub: "April Run", runs: 14, files: 276 },
    ],
  },
  {
    title: "In Progress", count: 2, color: "#29A5FF",
    runs: [
      { title: "API Critical Tests", sub: "API Critical Tests", runs: 4, files: 6 },
      { title: "Authorization Tests", sub: "Authorization Tests", runs: 0, files: 22 },
    ],
  },
  {
    title: "Completed", count: 1, color: "#16A34A",
    runs: [
      { title: "Demo 27th May", sub: "Demo 27th May", runs: 0, files: 7 },
    ],
  },
  {
    title: "Cancelled", count: 0, color: "rgba(30,30,30,0.2)",
    runs: [],
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SprintRunsPage() {
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
          <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.45)" }}>Sprint:</span>
          <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#29A5FF" }}>Test Runs</span>
        </div>

        {/* Scrollable content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "20px 28px 24px" }}>

          <h1 style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "26px", color: "#1E1E1E", margin: "0 0 16px" }}>
            Acme HyperCheckout
          </h1>

          {/* Step bar */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "#F5F5F3", border: "1px solid rgba(30,30,30,0.06)", borderRadius: "10px", padding: "12px 18px", marginBottom: "24px", flexWrap: "wrap" as const }}>
            {STEPS.map((s) => (
              <div key={s.label} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <CheckCircle2 size={15} color="#16A34A" strokeWidth={2} />
                  <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 500, color: "rgba(30,30,30,0.5)" }}>{s.label}</span>
                </div>
                <ChevronRight size={13} color="rgba(30,30,30,0.2)" />
              </div>
            ))}
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <FileText size={15} color="rgba(30,30,30,0.4)" strokeWidth={1.8} />
              <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 500, color: "rgba(30,30,30,0.5)" }}>Tests</span>
            </div>
            <span style={{ width: "1px", height: "16px", background: "rgba(30,30,30,0.1)" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Play size={15} color="#29A5FF" strokeWidth={2} fill="#29A5FF" />
              <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#29A5FF" }}>Runs</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <BarChart2 size={15} color="rgba(30,30,30,0.4)" strokeWidth={1.8} />
              <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 500, color: "rgba(30,30,30,0.5)" }}>Reports</span>
            </div>
          </div>

          {/* Runs header */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>
            <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "20px", color: "#1E1E1E" }}>Runs</span>
            <div style={{ flex: 1, display: "flex", alignItems: "center", gap: "8px", background: "#F5F5F3", border: "1px solid rgba(30,30,30,0.08)", borderRadius: "24px", padding: "9px 16px", maxWidth: "420px" }}>
              <Search size={14} color="rgba(30,30,30,0.35)" strokeWidth={2} />
              <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.3)" }}>Search</span>
            </div>
            <div style={{ flex: 1 }} />
            <button style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#1E1E1E", background: "#ffffff", border: "1px solid rgba(30,30,30,0.1)", borderRadius: "8px", padding: "9px 16px", cursor: "pointer" }}>
              <ArrowUpDown size={14} strokeWidth={2} /> Sort <ChevronRight size={13} style={{ transform: "rotate(90deg)" }} />
            </button>
            <div style={{ display: "flex", alignItems: "center", background: "#ffffff", border: "1px solid rgba(30,30,30,0.1)", borderRadius: "8px", overflow: "hidden" }}>
              <div style={{ padding: "9px 12px", display: "flex" }}>
                <List size={15} color="rgba(30,30,30,0.4)" strokeWidth={2} />
              </div>
              <div style={{ padding: "9px 12px", background: "rgba(41,165,255,0.1)", display: "flex", borderLeft: "1px solid rgba(30,30,30,0.08)" }}>
                <LayoutGrid size={15} color="#29A5FF" strokeWidth={2} />
              </div>
            </div>
            <button style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#ffffff", background: "#29A5FF", border: "none", borderRadius: "8px", padding: "9px 18px", cursor: "pointer" }}>
              <Plus size={14} strokeWidth={2.5} /> Create Run
            </button>
          </div>

          {/* Kanban columns */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(260px, 1fr))", gap: "16px" }}>
            {COLUMNS.map(col => (
              <div key={col.title} style={{ background: "#F7F7F5", borderRadius: "14px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ height: "4px", background: col.color }} />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "15px", color: "#1E1E1E" }}>{col.title}</span>
                    <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "rgba(30,30,30,0.35)" }}>{col.count}</span>
                  </div>
                  <Maximize2 size={13} color="rgba(30,30,30,0.3)" strokeWidth={2} />
                </div>

                <div style={{ padding: "0 12px 12px", display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
                  {col.runs.map(run => (
                    <div key={run.title} style={{ background: "#ffffff", border: "1px solid rgba(30,30,30,0.06)", borderRadius: "10px", padding: "14px" }}>
                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "8px" }}>
                        <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "14.5px", color: "#1E1E1E", whiteSpace: "nowrap" as const, overflow: "hidden", textOverflow: "ellipsis", maxWidth: "85%" }}>{run.title}</span>
                        <MoreVertical size={14} color="rgba(30,30,30,0.3)" strokeWidth={2} />
                      </div>
                      <span style={{ display: "inline-block", fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", color: "rgba(30,30,30,0.45)", background: "#F5F5F3", borderRadius: "6px", padding: "3px 8px", marginBottom: "16px" }}>{run.sub}</span>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                            <Settings size={12} color="rgba(30,30,30,0.35)" strokeWidth={2} />
                            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", color: "rgba(30,30,30,0.45)" }}>{run.runs}</span>
                          </div>
                          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                            <FileText size={12} color="rgba(30,30,30,0.35)" strokeWidth={2} />
                            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", color: "rgba(30,30,30,0.45)" }}>{run.files}</span>
                          </div>
                        </div>
                        <div style={{ width: "26px", height: "26px", borderRadius: "50%", background: "rgba(41,165,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <User size={13} color="#29A5FF" strokeWidth={2} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
