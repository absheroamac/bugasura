"use client";

import {
  Eye, TrendingUp, BookOpen, FileText, TestTube,
  Zap, Database, Bug, Settings, Trash2, Search,
  ChevronUp, MessageCircle,
  Settings2, BarChart2, ClipboardList, FileText as FileIcon,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { label: "Eagle Eye",      Icon: Eye,        count: null, active: true  },
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

const PAYMENT_METHODS = [
  "Unified Payments Interface (UPI)",
  "Net Banking",
  "Wallet Payments",
  "Card Payments",
  "Cash on Delivery (COD)",
  "Direct Bank Transfers",
];

const VIEWS = ["CXO View", "Project Manager", "Engineering Manager", "Developer"];

const AVATARS = [
  { initials: "RK", color: "#FFA840" },
  { initials: "SM", color: "#29A5FF" },
  { initials: "PD", color: "#16A34A" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function EagleEyePage() {
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
      <div style={{ flex: 1, position: "relative", display: "flex", flexDirection: "column", overflow: "hidden", background: "#ffffff" }}>

        {/* Top-right collaborators */}
        <div style={{
          position: "absolute", top: "20px", right: "28px", zIndex: 5,
          display: "flex", alignItems: "center",
        }}>
          {AVATARS.map((a, i) => (
            <div key={a.initials} style={{
              width: "32px", height: "32px", borderRadius: "50%", background: a.color,
              border: "2px solid #ffffff", display: "flex", alignItems: "center", justifyContent: "center",
              marginLeft: i === 0 ? 0 : "-8px",
              fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "11px", color: "#fff",
            }}>{a.initials}</div>
          ))}
          <div style={{
            width: "32px", height: "32px", borderRadius: "50%", background: "rgba(30,30,30,0.06)",
            border: "2px solid #ffffff", display: "flex", alignItems: "center", justifyContent: "center",
            marginLeft: "-8px",
            fontFamily: "var(--font-inter), Inter, sans-serif", fontWeight: 700, fontSize: "11px", color: "rgba(30,30,30,0.5)",
          }}>+3</div>
        </div>

        {/* Scrollable content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "28px 80px 40px" }}>

          {/* Title */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "28px" }}>
            <h1 style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "22px", color: "#1E1E1E", margin: 0 }}>
              Acme Health
            </h1>
            <span style={{
              fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700,
              color: "#7C3AED", background: "rgba(124,58,237,0.1)", borderRadius: "20px", padding: "3px 12px",
            }}>
              CXO View
            </span>
          </div>

          {/* Cards grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px", maxWidth: "1080px", margin: "0 auto" }}>
            {PAYMENT_METHODS.map(method => (
              <div key={method} style={{
                background: "#ffffff", border: "1px solid rgba(30,30,30,0.07)", borderRadius: "16px",
                padding: "20px", height: "260px", position: "relative", overflow: "hidden",
              }}>
                <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "15px", color: "#1E1E1E" }}>{method}</span>

                {/* decorative dot grid */}
                <div style={{
                  position: "absolute", bottom: "16px", right: "16px",
                  display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: "6px",
                }}>
                  {Array.from({ length: 40 }).map((_, i) => (
                    <div key={i} style={{
                      width: "8px", height: "8px", borderRadius: "2px",
                      background: i % 3 === 0 ? "rgba(30,30,30,0.06)" : "rgba(30,30,30,0.025)",
                    }} />
                  ))}
                </div>

                {/* decorative curve */}
                <svg style={{ position: "absolute", bottom: "0", left: "0", width: "120px", height: "60px" }} viewBox="0 0 120 60" fill="none">
                  <path d="M0 10 C 30 10, 30 50, 60 50 S 100 50, 120 30" stroke="rgba(30,30,30,0.08)" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll-to-top control */}
        <div style={{
          position: "absolute", top: "20px", right: "28px", marginTop: "44px",
        }} />

        {/* Vertical view ruler */}
        <div style={{
          position: "absolute", top: "60px", right: "20px", bottom: "20px",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between",
          width: "28px",
        }}>
          <button aria-label="Scroll up" style={{
            width: "28px", height: "28px", borderRadius: "50%", background: "#29A5FF", border: "none",
            display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
            boxShadow: "0 4px 10px rgba(41,165,255,0.35)",
          }}>
            <ChevronUp size={15} color="#fff" strokeWidth={2.5} />
          </button>

          <div style={{ flex: 1, display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "1px", height: "100%", background: "rgba(30,30,30,0.08)" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
              {VIEWS.map(v => (
                <span key={v} style={{
                  fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "10.5px", fontWeight: 600,
                  color: "rgba(30,30,30,0.35)", letterSpacing: "0.04em",
                  writingMode: "vertical-rl" as const, transform: "rotate(180deg)", whiteSpace: "nowrap" as const,
                }}>{v}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Chat FAB */}
        <button aria-label="Open chat" style={{
          position: "absolute", bottom: "24px", right: "24px",
          width: "48px", height: "48px", borderRadius: "50%", background: "#29A5FF", border: "none",
          display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
          boxShadow: "0 8px 20px rgba(41,165,255,0.35)",
        }}>
          <MessageCircle size={20} color="#fff" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
