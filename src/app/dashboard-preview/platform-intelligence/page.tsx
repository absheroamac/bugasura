"use client";

import {
  Eye, TrendingUp, BookOpen, FileText, TestTube,
  Zap, Database, Bug, Settings, Trash2, Search,
  ChevronRight, ChevronLeft, Sparkles, History,
  AlertTriangle, ShieldAlert, Layers,
  Settings2, BarChart2, ClipboardList, FileText as FileIcon,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { label: "Eagle Eye",      Icon: Eye,        count: null, active: false },
  { label: "Revenue Flows",  Icon: TrendingUp, count: null, active: false },
  { label: "Knowledge Base", Icon: BookOpen,   count: 10,   active: false },
  { label: "Requirements",   Icon: FileText,   count: 26,   active: false },
  { label: "Test Repo",      Icon: TestTube,   count: 350,  active: false },
  { label: "Sprints",        Icon: Zap,        count: 6,    active: false },
  { label: "Test Data",      Icon: Database,   count: 2,    active: false },
  { label: "Issues",         Icon: Bug,        count: 141,  active: false },
  { label: "Settings",       Icon: Settings,   count: null, active: false },
  { label: "Trash",          Icon: Trash2,     count: null, active: false },
];

const STAT_CARDS = [
  { label: "DEFECT PATTERNS TRACKED", value: "47", color: "#E52727", bg: "rgba(229,39,39,0.08)", Icon: History },
  { label: "RISK AREAS MONITORED",    value: "18", color: "#29A5FF", bg: "rgba(41,165,255,0.1)", Icon: ShieldAlert },
  { label: "COVERAGE DEBT ITEMS",     value: "9",  color: "#FFA840", bg: "rgba(255,168,64,0.1)", Icon: Layers },
  { label: "REGRESSION FLAGS",        value: "5",  color: "#16A34A", bg: "rgba(22,163,74,0.08)", Icon: AlertTriangle },
];

const SPRINT_TREND = [22, 30, 35, 41, 48, 54, 61, 68, 74, 81];

const RISK_AREAS = [
  { area: "Order API Lifecycle",         trend: "+12%", level: "HIGH",   color: "#E52727", bg: "rgba(229,39,39,0.08)" },
  { area: "Authentication & OTP",        trend: "+6%",  level: "MEDIUM", color: "#FFA840", bg: "rgba(255,168,64,0.1)" },
  { area: "Payment Routing",             trend: "+3%",  level: "MEDIUM", color: "#FFA840", bg: "rgba(255,168,64,0.1)" },
  { area: "Checkout Experience",         trend: "-4%",  level: "LOW",    color: "#16A34A", bg: "rgba(22,163,74,0.08)" },
  { area: "Compliance & Security",       trend: "+9%",  level: "HIGH",   color: "#E52727", bg: "rgba(229,39,39,0.08)" },
];

const COVERAGE_DEBT = [
  { area: "Refund & Cancellation Flows", sprints: 6, color: "#E52727" },
  { area: "Multi-currency Checkout",     sprints: 4, color: "#FFA840" },
  { area: "Wallet Top-up Edge Cases",    sprints: 3, color: "#FFA840" },
  { area: "API Rate-limit Handling",     sprints: 2, color: "#29A5FF" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PlatformIntelligencePage() {
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
          <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.45)" }}>Platform</span>
          <ChevronRight size={13} color="rgba(30,30,30,0.25)" />
          <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#29A5FF" }}>Intelligence</span>
        </div>

        {/* Scrollable content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "20px 28px 24px" }}>

          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "18px" }}>
            <div>
              <h1 style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "24px", color: "#1E1E1E", margin: "0 0 4px" }}>
                Platform Intelligence
              </h1>
              <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.45)", margin: 0, maxWidth: "620px" }}>
                A platform that gets smarter every sprint. Defect patterns, coverage gaps and high-risk areas are tracked longitudinally — by sprint 10, your QA is materially better than sprint 1, without adding headcount.
              </p>
            </div>
            <button style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0, fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#1E1E1E", background: "#ffffff", border: "1px solid rgba(30,30,30,0.1)", borderRadius: "8px", padding: "9px 16px", cursor: "pointer" }}>
              <Sparkles size={14} color="#FFA840" strokeWidth={2} /> Sprint-over-sprint report
            </button>
          </div>

          {/* Stat strip */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", marginBottom: "16px" }}>
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

          {/* Trend + Risk surface */}
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "16px", marginBottom: "16px" }}>

            {/* QA Maturity trend */}
            <div style={{ background: "#ffffff", border: "1px solid rgba(30,30,30,0.07)", borderRadius: "14px", padding: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "16px", color: "#1E1E1E" }}>QA Maturity Score</span>
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700, color: "#16A34A", background: "rgba(22,163,74,0.1)", borderRadius: "20px", padding: "3px 10px" }}>+59% since Sprint 1</span>
              </div>

              <div style={{ display: "flex", alignItems: "flex-end", gap: "10px", height: "140px" }}>
                {SPRINT_TREND.map((v, i) => (
                  <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%" }}>
                    <div style={{
                      width: "100%", borderRadius: "6px 6px 0 0",
                      height: `${v}%`,
                      background: i === SPRINT_TREND.length - 1 ? "#29A5FF" : "rgba(41,165,255,0.18)",
                    }} />
                    <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "10.5px", color: "rgba(30,30,30,0.35)", marginTop: "8px" }}>S{i + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Risk surface */}
            <div style={{ background: "#ffffff", border: "1px solid rgba(30,30,30,0.07)", borderRadius: "14px", padding: "20px" }}>
              <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "16px", color: "#1E1E1E", marginBottom: "16px", display: "block" }}>Evolving Risk Surface</span>
              {RISK_AREAS.map((r, i) => (
                <div key={r.area} style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "10px 0",
                  borderBottom: i < RISK_AREAS.length - 1 ? "1px solid rgba(30,30,30,0.05)" : "none",
                }}>
                  <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "#1E1E1E" }}>{r.area}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", fontWeight: 600, color: r.trend.startsWith("-") ? "#16A34A" : "#E52727" }}>{r.trend}</span>
                    <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.04em", color: r.color, background: r.bg, borderRadius: "20px", padding: "3px 10px", minWidth: "62px", textAlign: "center" as const }}>{r.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coverage debt + Regression risk */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>

            {/* Coverage debt */}
            <div style={{ background: "#ffffff", border: "1px solid rgba(30,30,30,0.07)", borderRadius: "14px", padding: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                <Layers size={16} color="#FFA840" strokeWidth={2} />
                <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "16px", color: "#1E1E1E" }}>Coverage Debt</span>
              </div>
              <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", color: "rgba(30,30,30,0.45)", margin: "0 0 16px" }}>
                Areas consistently undertested across recent sprints.
              </p>
              {COVERAGE_DEBT.map((d, i) => (
                <div key={d.area} style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "10px 0",
                  borderBottom: i < COVERAGE_DEBT.length - 1 ? "1px solid rgba(30,30,30,0.05)" : "none",
                }}>
                  <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "#1E1E1E" }}>{d.area}</span>
                  <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.04em", color: d.color, background: `${d.color}14`, borderRadius: "20px", padding: "3px 10px" }}>
                    {d.sprints} sprints
                  </span>
                </div>
              ))}
            </div>

            {/* Regression risk */}
            <div style={{ background: "#ffffff", border: "1px solid rgba(30,30,30,0.07)", borderRadius: "14px", padding: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                <AlertTriangle size={16} color="#E52727" strokeWidth={2} />
                <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "16px", color: "#1E1E1E" }}>Regression Risk — Next Release</span>
              </div>
              <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", color: "rgba(30,30,30,0.45)", margin: "0 0 16px" }}>
                Flagged automatically before release based on cumulative defect history.
              </p>
              <div style={{
                display: "flex", alignItems: "center", gap: "12px",
                background: "rgba(229,39,39,0.06)", border: "1px solid rgba(229,39,39,0.15)",
                borderRadius: "12px", padding: "14px 16px",
              }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(229,39,39,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <ShieldAlert size={17} color="#E52727" strokeWidth={2} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "14px", color: "#1E1E1E", marginBottom: "2px" }}>5 areas flagged for regression risk</div>
                  <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", color: "rgba(30,30,30,0.5)" }}>
                    Order API Lifecycle, Authentication & OTP and 3 others show recurring defect patterns from prior sprints.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
