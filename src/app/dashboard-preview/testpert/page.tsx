"use client";

import {
  Eye, TrendingUp, BookOpen, FileText, TestTube,
  Zap, Database, Bug, Settings, Trash2, Search,
  ChevronRight, ChevronLeft, Sparkles, MessageCircle,
  Target, UserCheck, ShieldCheck, Lock, ArrowRight,
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

const FEATURES = [
  {
    title: "Expert Q&A Engine",
    desc: "Risk discovery questions before sprint planning.",
    Icon: MessageCircle,
    color: "#29A5FF",
    bg: "rgba(41,165,255,0.08)",
  },
  {
    title: "Risk Surface Mapping",
    desc: "Risk mapped against business and user impact.",
    Icon: Target,
    color: "#FFA840",
    bg: "rgba(255,168,64,0.1)",
  },
  {
    title: "Expert-in-the-Loop",
    desc: "AI prepares, your QA lead approves.",
    Icon: UserCheck,
    color: "#16A34A",
    bg: "rgba(22,163,74,0.08)",
  },
  {
    title: "Private AI Processing",
    desc: "Your product data stays in your environment.",
    Icon: Lock,
    color: "#E52727",
    bg: "rgba(229,39,39,0.08)",
  },
];

const QA_QUEUE = [
  { q: "Does the new refund flow change the chargeback liability path for COD orders?", impact: "HIGH", color: "#E52727", bg: "rgba(229,39,39,0.08)" },
  { q: "Are partial OTP failures retried with the same payment session or a new one?", impact: "HIGH", color: "#E52727", bg: "rgba(229,39,39,0.08)" },
  { q: "Does multi-currency rounding affect settlement reconciliation reports?", impact: "MEDIUM", color: "#FFA840", bg: "rgba(255,168,64,0.1)" },
  { q: "Is the new wallet top-up limit enforced consistently across Android and iOS?", impact: "MEDIUM", color: "#FFA840", bg: "rgba(255,168,64,0.1)" },
  { q: "Can a cancelled order still trigger a webhook to the merchant's CRM?", impact: "LOW", color: "#29A5FF", bg: "rgba(41,165,255,0.08)" },
];

const RISK_MAP = [
  { area: "Checkout & Payments", business: 92, user: 88 },
  { area: "Order Lifecycle",     business: 78, user: 65 },
  { area: "Auth & OTP",          business: 70, user: 80 },
  { area: "Refunds & Disputes",  business: 85, user: 60 },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TestpertPage() {
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
          <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#29A5FF" }}>Testpert</span>
        </div>

        {/* Scrollable content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "20px 28px 24px" }}>

          {/* Header */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "18px", gap: "20px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                <div style={{ width: "30px", height: "30px", borderRadius: "9px", background: "rgba(41,165,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Sparkles size={15} color="#29A5FF" strokeWidth={2} />
                </div>
                <h1 style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "24px", color: "#1E1E1E", margin: 0 }}>
                  Testpert
                </h1>
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.04em", color: "#7C3AED", background: "rgba(124,58,237,0.1)", borderRadius: "20px", padding: "3px 10px" }}>
                  CUSTOM / ENTERPRISE ADD-ON
                </span>
              </div>
              <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", lineHeight: 1.5, color: "rgba(30,30,30,0.5)", margin: 0, maxWidth: "600px" }}>
                AI test strategy at the level of your most experienced QA lead — risk vs. business impact, hidden coverage gaps, expert in the loop.
              </p>
            </div>
            <button style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0, fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#fff", background: "#29A5FF", border: "none", borderRadius: "8px", padding: "10px 18px", cursor: "pointer" }}>
              Talk to Testpert <ArrowRight size={14} strokeWidth={2} />
            </button>
          </div>

          {/* Feature cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", marginBottom: "20px" }}>
            {FEATURES.map(({ title, desc, Icon, color, bg }) => (
              <div key={title} style={{ background: "#ffffff", border: "1px solid rgba(30,30,30,0.07)", borderRadius: "14px", padding: "18px" }}>
                <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
                  <Icon size={18} color={color} strokeWidth={2} />
                </div>
                <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "14.5px", color: "#1E1E1E", marginBottom: "6px" }}>{title}</div>
                <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", lineHeight: 1.55, color: "rgba(30,30,30,0.5)" }}>{desc}</div>
              </div>
            ))}
          </div>

          {/* Q&A queue + Risk map */}
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "16px", marginBottom: "16px" }}>

            {/* Q&A queue */}
            <div style={{ background: "#ffffff", border: "1px solid rgba(30,30,30,0.07)", borderRadius: "14px", padding: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
                <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "16px", color: "#1E1E1E" }}>Risk Discovery Q&A — Before Sprint Planning</span>
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700, color: "#29A5FF", background: "rgba(41,165,255,0.08)", borderRadius: "20px", padding: "3px 10px" }}>5 open</span>
              </div>
              <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", color: "rgba(30,30,30,0.45)", margin: "0 0 12px" }}>
                For your QA lead to answer before sprint planning.
              </p>
              {QA_QUEUE.map((item, i) => (
                <div key={item.q} style={{
                  display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px",
                  padding: "12px 0",
                  borderBottom: i < QA_QUEUE.length - 1 ? "1px solid rgba(30,30,30,0.05)" : "none",
                }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <MessageCircle size={15} color="rgba(30,30,30,0.3)" strokeWidth={2} style={{ marginTop: "2px", flexShrink: 0 }} />
                    <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", lineHeight: 1.5, color: "#1E1E1E" }}>{item.q}</span>
                  </div>
                  <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.04em", color: item.color, background: item.bg, borderRadius: "20px", padding: "3px 10px", flexShrink: 0 }}>{item.impact}</span>
                </div>
              ))}
            </div>

            {/* Risk surface map */}
            <div style={{ background: "#ffffff", border: "1px solid rgba(30,30,30,0.07)", borderRadius: "14px", padding: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                <Target size={16} color="#FFA840" strokeWidth={2} />
                <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "16px", color: "#1E1E1E" }}>Risk Surface Map</span>
              </div>
              <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", color: "rgba(30,30,30,0.45)", margin: "0 0 16px" }}>
                Business vs. user impact, by area.
              </p>
              {RISK_MAP.map(r => (
                <div key={r.area} style={{ marginBottom: "16px" }}>
                  <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#1E1E1E", marginBottom: "6px" }}>{r.area}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                    <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "10.5px", fontWeight: 700, color: "rgba(30,30,30,0.35)", width: "56px" }}>BUSINESS</span>
                    <div style={{ flex: 1, height: "6px", borderRadius: "3px", background: "rgba(30,30,30,0.05)", overflow: "hidden" }}>
                      <div style={{ width: `${r.business}%`, height: "100%", background: "#29A5FF", borderRadius: "3px" }} />
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "10.5px", fontWeight: 700, color: "rgba(30,30,30,0.35)", width: "56px" }}>USER</span>
                    <div style={{ flex: 1, height: "6px", borderRadius: "3px", background: "rgba(30,30,30,0.05)", overflow: "hidden" }}>
                      <div style={{ width: `${r.user}%`, height: "100%", background: "#FFA840", borderRadius: "3px" }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expert-in-the-loop + Private AI banner */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div style={{
              display: "flex", alignItems: "center", gap: "12px",
              background: "rgba(22,163,74,0.06)", border: "1px solid rgba(22,163,74,0.15)",
              borderRadius: "12px", padding: "16px 20px",
            }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(22,163,74,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <UserCheck size={17} color="#16A34A" strokeWidth={2} />
              </div>
              <div>
                <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "14px", color: "#1E1E1E", marginBottom: "2px" }}>Expert-in-the-loop mode</div>
                <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", color: "rgba(30,30,30,0.5)" }}>
                  AI prepares, QA lead approves before it runs.
                </div>
              </div>
            </div>
            <div style={{
              display: "flex", alignItems: "center", gap: "12px",
              background: "rgba(229,39,39,0.05)", border: "1px solid rgba(229,39,39,0.15)",
              borderRadius: "12px", padding: "16px 20px",
            }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(229,39,39,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <ShieldCheck size={17} color="#E52727" strokeWidth={2} />
              </div>
              <div>
                <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "14px", color: "#1E1E1E", marginBottom: "2px" }}>Private AI processing</div>
                <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", color: "rgba(30,30,30,0.5)" }}>
                  Your data never leaves your environment.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
