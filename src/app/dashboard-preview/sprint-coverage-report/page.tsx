"use client";

import {
  Eye, TrendingUp, BookOpen, FileText, TestTube,
  Zap, Database, Bug, Settings, Trash2,
  Search, ChevronRight, ChevronLeft, ChevronDown,
  Info, CheckCircle2, XCircle, Bug as BugIcon, FileSearch,
  Eye as EyeIcon, Plus, Download, BarChart2, ClipboardList,
  Settings2, FileText as FileIcon,
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

const SEVERITY = [
  { label: "CRITICAL", value: 2, max: 6, color: "#E52727" },
  { label: "HIGH",     value: 4, max: 6, color: "#FFA840" },
  { label: "MEDIUM",   value: 0, max: 6, color: "rgba(30,30,30,0.15)" },
  { label: "LOW",      value: 0, max: 6, color: "rgba(30,30,30,0.15)" },
];

const TAGS = [
  { label: "Functional", active: false },
  { label: "Performance", active: false },
  { label: "UI", active: true, value: "14%" },
  { label: "UX", active: false },
  { label: "Security", active: false },
  { label: "Crash", active: false },
  { label: "ANR", active: false },
  { label: "Intermittent", active: false },
  { label: "Others", active: true, value: "86%" },
];

interface Row { id: string; issue: string; modified?: string; cols: ("eye" | "not" | "pass" | "plus")[] }

const ROWS: Row[] = [
  { id: "TES175", issue: "Passed on 14th Apr 2026 11:56:41 AM", cols: ["eye", "not", "not"] },
  { id: "TES183", issue: "Passed on 13th May 2026 4:30:29 PM", cols: ["not", "eye", "not"] },
  { id: "TES184", issue: "Departure date 10 Apr 2026 cannot be reached or selected because the previous-…", modified: "Last Modified: 19th May 2026 8:12:46 AM", cols: ["eye", "not", "not"], },
  { id: "TES190", issue: "Passed on 27th May 2026 4:25:15 PM", cols: ["not", "not", "eye"] },
  { id: "TES191", issue: "Passed on 14th Apr 2026 12:03:48 PM", cols: ["pass", "pass", "not"] },
  { id: "TES192", issue: "Passed on 14th Apr 2026 11:58:26 AM", cols: ["eye", "not", "not"] },
  { id: "TES193", issue: "Search field not present on logged-out Netflix homepage, preventing search.", modified: "Last Modified: 14th Apr 2026 11:59:52 AM", cols: ["eye", "not", "not"] },
];

const COLUMNS = [
  { name: "Browser Agent", sub: "Linux Ubuntu 24.04.3 LTS::Chrome v1…" },
  { name: "Amit", sub: "macOS 10.15.7::Chrome v147" },
  { name: "Amit", sub: "macOS 10.15.7::Chrome v148" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SprintCoverageReportPage() {
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
          <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#29A5FF" }}>Coverage</span>
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
              <span
                key={tab}
                style={{
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontSize: "13.5px",
                  fontWeight: tab === "Coverage" ? 600 : 400,
                  color: tab === "Coverage" ? "#29A5FF" : "rgba(30,30,30,0.45)",
                  borderBottom: tab === "Coverage" ? "2px solid #29A5FF" : "2px solid transparent",
                  padding: "0 14px 12px", cursor: "pointer", marginBottom: "-1px",
                }}
              >
                {tab}
              </span>
            ))}
          </div>

          {/* Top cards row */}
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr 1fr", gap: "16px", marginBottom: "20px" }}>

            {/* Test Cases card */}
            <div style={{ background: "#ffffff", border: "1px solid rgba(30,30,30,0.07)", borderRadius: "14px", padding: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "20px" }}>
                <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "16px", color: "#1E1E1E" }}>Test Cases</span>
                <Info size={14} color="rgba(30,30,30,0.3)" strokeWidth={2} />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "32px", marginBottom: "20px" }}>
                <div>
                  <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.04em", color: "rgba(30,30,30,0.4)", marginBottom: "4px" }}>TEST CASES</div>
                  <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "26px", color: "#1E1E1E" }}>9</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "rgba(22,163,74,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <CheckCircle2 size={22} color="#16A34A" strokeWidth={2} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.04em", color: "#16A34A", marginBottom: "2px" }}>PASSED</div>
                    <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "20px", color: "#1E1E1E" }}>5</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "rgba(229,39,39,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <XCircle size={22} color="#E52727" strokeWidth={2} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.04em", color: "#E52727", marginBottom: "2px" }}>FAILED</div>
                    <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "20px", color: "#1E1E1E" }}>4</div>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "32px", borderTop: "1px solid rgba(30,30,30,0.06)", paddingTop: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "rgba(229,39,39,0.06)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <BugIcon size={20} color="#E52727" strokeWidth={2} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.04em", color: "rgba(30,30,30,0.4)", marginBottom: "2px" }}>BUGS</div>
                    <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "20px", color: "#1E1E1E" }}>6</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "rgba(30,30,30,0.04)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <FileSearch size={20} color="rgba(30,30,30,0.35)" strokeWidth={2} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.04em", color: "rgba(30,30,30,0.4)", marginBottom: "2px" }}>NOTES</div>
                    <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "20px", color: "rgba(30,30,30,0.35)" }}>0</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Severity card */}
            <div style={{ background: "#ffffff", border: "1px solid rgba(30,30,30,0.07)", borderRadius: "14px", padding: "20px" }}>
              <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "16px", color: "#1E1E1E", marginBottom: "20px" }}>Severity</div>
              {SEVERITY.map(s => (
                <div key={s.label} style={{ marginBottom: "18px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
                    <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.04em", color: s.value > 0 ? s.color : "rgba(30,30,30,0.3)" }}>{s.label}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ flex: 1, height: "8px", borderRadius: "4px", background: "rgba(30,30,30,0.05)", overflow: "hidden" }}>
                      <div style={{ width: `${(s.value / s.max) * 100}%`, height: "100%", background: s.color, borderRadius: "4px" }} />
                    </div>
                    <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", fontWeight: 600, color: "rgba(30,30,30,0.4)", width: "14px", textAlign: "right" as const }}>{s.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Tags Used card */}
            <div style={{ background: "#ffffff", border: "1px solid rgba(30,30,30,0.07)", borderRadius: "14px", padding: "20px" }}>
              <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "16px", color: "#1E1E1E", marginBottom: "16px" }}>Tags Used</div>
              <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <div style={{ position: "relative", width: "110px", height: "110px", flexShrink: 0 }}>
                  <svg width="110" height="110" viewBox="0 0 110 110">
                    <circle cx="55" cy="55" r="44" fill="none" stroke="rgba(30,30,30,0.08)" strokeWidth="16" />
                    <circle cx="55" cy="55" r="44" fill="none" stroke="#FFA840" strokeWidth="16"
                      strokeDasharray={`${0.14 * 2 * Math.PI * 44} ${2 * Math.PI * 44}`}
                      strokeLinecap="round" transform="rotate(-90 55 55)" />
                  </svg>
                  <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", color: "rgba(30,30,30,0.4)" }}>Total Tags</span>
                    <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "20px", color: "#1E1E1E" }}>22</span>
                  </div>
                  <span style={{ position: "absolute", top: "10px", right: "8px", fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "10px", fontWeight: 700, color: "#FFA840" }}>14%</span>
                  <span style={{ position: "absolute", bottom: "10px", left: "0", fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "10px", fontWeight: 700, color: "rgba(30,30,30,0.35)" }}>86%</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 16px" }}>
                  {TAGS.map(t => (
                    <div key={t.label} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span style={{
                        width: "8px", height: "8px", borderRadius: "2px", display: "inline-block",
                        background: t.label === "UI" ? "#FFA840" : t.label === "Others" ? "rgba(30,30,30,0.2)" : "rgba(30,30,30,0.08)",
                      }} />
                      <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", color: t.active ? "#1E1E1E" : "rgba(30,30,30,0.35)", fontWeight: t.active ? 600 : 400 }}>{t.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Test Coverage table */}
          <div style={{ background: "#ffffff", border: "1px solid rgba(30,30,30,0.07)", borderRadius: "14px", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px" }}>
              <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "18px", color: "#1E1E1E" }}>Test Coverage</span>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#F5F5F3", border: "1px solid rgba(30,30,30,0.08)", borderRadius: "8px", padding: "9px 14px", width: "260px" }}>
                  <Search size={14} color="rgba(30,30,30,0.35)" strokeWidth={2} />
                  <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.3)" }}>Enter the keywords</span>
                </div>
                <button style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#fff", background: "#29A5FF", border: "none", borderRadius: "8px", padding: "9px 22px", cursor: "pointer" }}>Search</button>
                <button aria-label="Download" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#ffffff", border: "1px solid rgba(30,30,30,0.1)", borderRadius: "8px", padding: "9px", cursor: "pointer" }}>
                  <Download size={15} color="rgba(30,30,30,0.4)" strokeWidth={2} />
                </button>
              </div>
            </div>

            {/* Table header */}
            <div style={{ display: "grid", gridTemplateColumns: "100px 1fr 200px 200px 200px", gap: "12px", padding: "0 20px 14px", borderBottom: "1px solid rgba(30,30,30,0.06)" }}>
              <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.04em", color: "rgba(30,30,30,0.4)" }}>TEST CASES</span>
              <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.04em", color: "rgba(30,30,30,0.4)" }}>ISSUES</span>
              {COLUMNS.map(c => (
                <div key={c.name + c.sub} style={{ textAlign: "center" as const }}>
                  <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "13px", color: "#1E1E1E" }}>{c.name}</div>
                  <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "10.5px", color: "rgba(30,30,30,0.4)" }}>{c.sub}</div>
                </div>
              ))}
            </div>

            {/* Rows */}
            {ROWS.map((row, i) => (
              <div key={row.id} style={{
                display: "grid", gridTemplateColumns: "100px 1fr 200px 200px 200px", gap: "12px",
                alignItems: "center", padding: "16px 20px",
                borderBottom: i < ROWS.length - 1 ? "1px solid rgba(30,30,30,0.05)" : "none",
              }}>
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#29A5FF" }}>{row.id}</span>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    {row.modified
                      ? <BugIcon size={13} color="#E52727" strokeWidth={2} style={{ flexShrink: 0 }} />
                      : <CheckCircle2 size={13} color="#16A34A" strokeWidth={2} style={{ flexShrink: 0 }} />
                    }
                    <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "#1E1E1E", whiteSpace: "nowrap" as const, overflow: "hidden", textOverflow: "ellipsis" }}>{row.issue}</span>
                  </div>
                  {row.modified && (
                    <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", color: "rgba(30,30,30,0.35)", marginTop: "2px" }}>{row.modified}</div>
                  )}
                </div>
                {row.cols.map((c, j) => (
                  <div key={j} style={{ display: "flex", justifyContent: "center" }}>
                    {c === "eye" && <EyeIcon size={16} color="#29A5FF" strokeWidth={2} style={{ cursor: "pointer" }} />}
                    {c === "not" && <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", color: "rgba(30,30,30,0.3)" }}>Not Tested</span>}
                    {c === "pass" && <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700, color: "#16A34A", background: "rgba(22,163,74,0.1)", borderRadius: "20px", padding: "4px 14px" }}>Pass</span>}
                    {c === "plus" && <Plus size={14} color="rgba(30,30,30,0.3)" />}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
