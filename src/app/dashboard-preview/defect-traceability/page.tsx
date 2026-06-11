"use client";

import {
  Eye, TrendingUp, BookOpen, FileText, TestTube,
  Zap, Database, Bug, Settings, Trash2,
  Search, ChevronRight, Bug as BugIcon, ClipboardList,
  ArrowRight, Sparkles, RefreshCw, History, Gauge,
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
  { label: "Issues",         Icon: Bug,        count: 141,  active: true  },
  { label: "Settings",       Icon: Settings,   count: null, active: false },
  { label: "Trash",          Icon: Trash2,     count: null, active: false },
];

const FEATURES = [
  { Icon: ArrowRight,  title: "Defect → Test Case → Requirement chain", sub: "Automatic, not manual" },
  { Icon: RefreshCw,   title: "Recurring defect pattern detection",     sub: "Per requirement area" },
  { Icon: History,     title: "Defect history feeds the Context layer", sub: "Used for future sprints" },
  { Icon: Gauge,       title: "Eagle Eye integration",                  sub: "Defect trends in the exec quality view" },
];

interface Chain { bug: string; bugTitle: string; severity: "CRITICAL" | "HIGH" | "MEDIUM"; test: string; testTitle: string; req: string; reqTitle: string; recurring?: number }

const CHAINS: Chain[] = [
  { bug: "BUG142", bugTitle: "Refund not triggered after partial cancellation", severity: "CRITICAL", test: "TES268", testTitle: "Partial Refund Handling in Acme", req: "REQ70", reqTitle: "Partial Refund Handling in Acme", recurring: 3 },
  { bug: "BUG138", bugTitle: "OTP autofill fails on slow network", severity: "HIGH", test: "TES261", testTitle: "Auto Detect and Populate OTP", req: "REQ40", reqTitle: "Auto OTP Read", recurring: 5 },
  { bug: "BUG129", bugTitle: "Routing fallback ignores merchant priority", severity: "HIGH", test: "TES184", testTitle: "Dynamic payment routing", req: "REQ61", reqTitle: "Payment Routing and Compliance" },
  { bug: "BUG121", bugTitle: "Saved card checkout shows stale balance", severity: "MEDIUM", test: "TES192", testTitle: "1-Click Card Checkout flow", req: "REQ42", reqTitle: "1 Click Card Checkout" },
  { bug: "BUG118", bugTitle: "Compliance log missing PCI field on retry", severity: "CRITICAL", test: "TES175", testTitle: "PCI-DSS retry compliance check", req: "REQ64", reqTitle: "PCI-DSS Compliance", recurring: 2 },
];

const SEVERITY_COLORS: Record<Chain["severity"], { color: string; bg: string }> = {
  CRITICAL: { color: "#E52727", bg: "rgba(229,39,39,0.08)" },
  HIGH:     { color: "#FFA840", bg: "rgba(255,168,64,0.1)" },
  MEDIUM:   { color: "#16A39A", bg: "rgba(22,163,154,0.08)" },
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DefectTraceabilityPage() {
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
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.38)" }}>Issues</span>
            <ChevronRight size={13} color="rgba(30,30,30,0.25)" />
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#29A5FF" }}>Defect Traceability</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#F5F5F3", border: "1px solid rgba(30,30,30,0.08)", borderRadius: "8px", padding: "7px 13px" }}>
            <Search size={13} color="rgba(30,30,30,0.35)" strokeWidth={2} />
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", color: "rgba(30,30,30,0.3)" }}>Search…</span>
          </div>
        </div>

        {/* Scrollable content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "20px 28px 24px" }}>

          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "18px" }}>
            <div>
              <h1 style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "24px", color: "#1E1E1E", margin: "0 0 4px" }}>
                Defect Traceability
              </h1>
              <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.45)", margin: 0 }}>
                Every defect linked to the requirement it violates and the test case that caught it.
              </p>
            </div>
            <button style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#1E1E1E", background: "#ffffff", border: "1px solid rgba(30,30,30,0.1)", borderRadius: "8px", padding: "9px 16px", cursor: "pointer" }}>
              <Sparkles size={14} color="#FFA840" strokeWidth={2} /> Eagle Eye trends
            </button>
          </div>

          {/* Stat strip */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", marginBottom: "16px" }}>
            {[
              { label: "TRACED DEFECTS", value: "141", color: "#1E1E1E", bg: "rgba(30,30,30,0.05)", Icon: BugIcon },
              { label: "REQUIREMENTS IMPACTED", value: "38", color: "#29A5FF", bg: "rgba(41,165,255,0.1)", Icon: FileText },
              { label: "RECURRING AREAS", value: "12", color: "#FFA840", bg: "rgba(255,168,64,0.1)", Icon: RefreshCw },
              { label: "FED TO CONTEXT LAYER", value: "9", color: "#16A34A", bg: "rgba(22,163,74,0.08)", Icon: History },
            ].map(({ label, value, color, bg, Icon }) => (
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

          {/* Feature strip */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", marginBottom: "20px" }}>
            {FEATURES.map(({ Icon, title, sub }) => (
              <div key={title} style={{ display: "flex", alignItems: "flex-start", gap: "12px", background: "#ffffff", border: "1px solid rgba(30,30,30,0.07)", borderRadius: "12px", padding: "16px" }}>
                <div style={{ width: "34px", height: "34px", borderRadius: "10px", background: "rgba(255,168,64,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={16} color="#FFA840" strokeWidth={2} />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#1E1E1E", lineHeight: 1.4, marginBottom: "2px" }}>{title}</div>
                  <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", color: "rgba(30,30,30,0.45)" }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Traceability chains */}
          <div style={{ background: "#ffffff", borderRadius: "14px", border: "1px solid rgba(30,30,30,0.07)", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderBottom: "1px solid rgba(30,30,30,0.06)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <ClipboardList size={16} color="rgba(30,30,30,0.4)" strokeWidth={1.8} />
                <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "17px", color: "#1E1E1E" }}>Traceability Chains</span>
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.4)" }}>{CHAINS.length}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.04em", color: "rgba(30,30,30,0.35)" }}>BUG</span>
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.04em", color: "rgba(30,30,30,0.35)" }}>TEST CASE</span>
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.04em", color: "rgba(30,30,30,0.35)" }}>REQUIREMENT</span>
              </div>
            </div>

            {CHAINS.map((c, i) => (
              <div key={c.bug} style={{
                display: "grid", gridTemplateColumns: "1.4fr 1.2fr 1.2fr", gap: "16px",
                alignItems: "center", padding: "16px 20px",
                borderBottom: i < CHAINS.length - 1 ? "1px solid rgba(30,30,30,0.05)" : "none",
              }}>
                {/* Bug */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <div style={{ width: "30px", height: "30px", borderRadius: "8px", background: "rgba(229,39,39,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <BugIcon size={15} color="#E52727" strokeWidth={2} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "2px" }}>
                      <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", fontWeight: 700, color: "rgba(30,30,30,0.4)" }}>{c.bug}</span>
                      <span style={{
                        fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "10px", fontWeight: 700,
                        color: SEVERITY_COLORS[c.severity].color, background: SEVERITY_COLORS[c.severity].bg,
                        padding: "2px 8px", borderRadius: "20px",
                      }}>{c.severity}</span>
                      {c.recurring && (
                        <span style={{ display: "flex", alignItems: "center", gap: "4px", fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "10px", fontWeight: 700, color: "#C9711F", background: "rgba(255,168,64,0.12)", padding: "2px 8px", borderRadius: "20px" }}>
                          <RefreshCw size={9} strokeWidth={2.4} /> {c.recurring}x
                        </span>
                      )}
                    </div>
                    <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "#1E1E1E", lineHeight: 1.4, whiteSpace: "nowrap" as const, overflow: "hidden", textOverflow: "ellipsis" }}>{c.bugTitle}</div>
                  </div>
                </div>

                <ArrowRight size={14} color="rgba(30,30,30,0.2)" style={{ justifySelf: "start", marginLeft: "-8px" }} />

                {/* Test case */}
                <div style={{ minWidth: 0 }}>
                  <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", fontWeight: 700, color: "#29A5FF" }}>{c.test}</span>
                  <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "#1E1E1E", lineHeight: 1.4, whiteSpace: "nowrap" as const, overflow: "hidden", textOverflow: "ellipsis", marginTop: "2px" }}>{c.testTitle}</div>
                </div>

                {/* Requirement */}
                <div style={{ minWidth: 0, display: "flex", alignItems: "center", gap: "10px", justifyContent: "space-between" }}>
                  <div style={{ minWidth: 0 }}>
                    <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", fontWeight: 700, color: "#16A34A" }}>{c.req}</span>
                    <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "#1E1E1E", lineHeight: 1.4, whiteSpace: "nowrap" as const, overflow: "hidden", textOverflow: "ellipsis", marginTop: "2px" }}>{c.reqTitle}</div>
                  </div>
                  <ChevronRight size={14} color="rgba(30,30,30,0.25)" style={{ flexShrink: 0 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
