"use client";

import {
  Eye, TrendingUp, BookOpen, FileText, TestTube,
  Zap, Database, Bug, Settings, Trash2, Search,
  ChevronRight, ChevronLeft, Sparkles, Terminal,
  MessageSquareCode, ListChecks, PlusSquare, ServerCog, Copy, Check,
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

const CLIENTS = [
  { name: "Claude Desktop", color: "#FFA840", bg: "rgba(255,168,64,0.1)", status: "Connected" },
  { name: "Cursor",         color: "#29A5FF", bg: "rgba(41,165,255,0.1)", status: "Connected" },
  { name: "VS Code",        color: "#16A34A", bg: "rgba(22,163,74,0.08)", status: "Available" },
  { name: "Windsurf",       color: "#7C3AED", bg: "rgba(124,58,237,0.1)", status: "Available" },
];

const FEATURES = [
  {
    title: "Natural Language Queries",
    desc: "Ask about open bugs, coverage and requirement status.",
    Icon: MessageSquareCode,
    color: "#29A5FF",
    bg: "rgba(41,165,255,0.08)",
  },
  {
    title: "Pre-push Risk Check",
    desc: "Know before you push if a change touches a fragile module.",
    Icon: ListChecks,
    color: "#FFA840",
    bg: "rgba(255,168,64,0.1)",
  },
  {
    title: "Create & Update Issues",
    desc: "File and edit Bugasura issues without leaving your editor.",
    Icon: PlusSquare,
    color: "#16A34A",
    bg: "rgba(22,163,74,0.08)",
  },
  {
    title: "Self-hosted Option",
    desc: "Air-gapped, enterprise-ready MCP deployment.",
    Icon: ServerCog,
    color: "#E52727",
    bg: "rgba(229,39,39,0.08)",
  },
];

const SAMPLE_QUERIES = [
  "What open bugs touch the payment routing module?",
  "Show test coverage for the OTP detection flow",
  "Is REQ23 fully covered by passing tests?",
  "Create a bug: settlement report shows wrong currency on COD orders",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function McpServerPage() {
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
          <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.45)" }}>Settings</span>
          <ChevronRight size={13} color="rgba(30,30,30,0.25)" />
          <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#29A5FF" }}>MCP Server</span>
        </div>

        {/* Scrollable content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "20px 28px 24px" }}>

          {/* Header */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "18px", gap: "20px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                <div style={{ width: "30px", height: "30px", borderRadius: "9px", background: "rgba(124,58,237,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Terminal size={15} color="#7C3AED" strokeWidth={2} />
                </div>
                <h1 style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "24px", color: "#1E1E1E", margin: 0 }}>
                  MCP Server
                </h1>
              </div>
              <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", lineHeight: 1.5, color: "rgba(30,30,30,0.5)", margin: 0, maxWidth: "600px" }}>
                Query defects, coverage and requirements without leaving your editor.
              </p>
            </div>
            <button style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0, fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#fff", background: "#29A5FF", border: "none", borderRadius: "8px", padding: "10px 18px", cursor: "pointer" }}>
              <Sparkles size={14} strokeWidth={2} /> Connect a client
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

          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "16px", marginBottom: "16px" }}>

            {/* Connected clients */}
            <div style={{ background: "#ffffff", border: "1px solid rgba(30,30,30,0.07)", borderRadius: "14px", padding: "20px" }}>
              <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "16px", color: "#1E1E1E", marginBottom: "16px", display: "block" }}>Editor Clients</span>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {CLIENTS.map(c => (
                  <div key={c.name} style={{
                    display: "flex", alignItems: "center", gap: "12px",
                    border: "1px solid rgba(30,30,30,0.07)", borderRadius: "12px", padding: "14px",
                  }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: c.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Terminal size={17} color={c.color} strokeWidth={2} />
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "13.5px", color: "#1E1E1E" }}>{c.name}</div>
                      <div style={{
                        fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 600,
                        color: c.status === "Connected" ? "#16A34A" : "rgba(30,30,30,0.4)", marginTop: "2px",
                        display: "flex", alignItems: "center", gap: "5px",
                      }}>
                        {c.status === "Connected" && <Check size={11} strokeWidth={3} />}
                        {c.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Connection snippet */}
              <div style={{ marginTop: "16px" }}>
                <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.04em", color: "rgba(30,30,30,0.4)", marginBottom: "8px" }}>MCP ENDPOINT</div>
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px",
                  background: "#1E1E1E", borderRadius: "8px", padding: "12px 14px",
                }}>
                  <code style={{ fontFamily: "monospace", fontSize: "12.5px", color: "rgba(255,255,255,0.85)" }}>
                    mcp.bugasura.io/acme-hypercheckout
                  </code>
                  <Copy size={14} color="rgba(255,255,255,0.4)" strokeWidth={2} style={{ cursor: "pointer", flexShrink: 0 }} />
                </div>
              </div>
            </div>

            {/* Sample queries */}
            <div style={{ background: "#ffffff", border: "1px solid rgba(30,30,30,0.07)", borderRadius: "14px", padding: "20px" }}>
              <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "16px", color: "#1E1E1E", marginBottom: "4px", display: "block" }}>Try Asking</span>
              <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", color: "rgba(30,30,30,0.45)", margin: "0 0 12px" }}>
                Right from Claude Desktop or Cursor.
              </p>
              {SAMPLE_QUERIES.map((q, i) => (
                <div key={q} style={{
                  display: "flex", alignItems: "flex-start", gap: "10px",
                  padding: "10px 0",
                  borderBottom: i < SAMPLE_QUERIES.length - 1 ? "1px solid rgba(30,30,30,0.05)" : "none",
                }}>
                  <MessageSquareCode size={15} color="#29A5FF" strokeWidth={2} style={{ marginTop: "2px", flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", lineHeight: 1.5, color: "#1E1E1E" }}>{q}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Self-hosted banner */}
          <div style={{
            display: "flex", alignItems: "center", gap: "12px",
            background: "rgba(229,39,39,0.05)", border: "1px solid rgba(229,39,39,0.15)",
            borderRadius: "12px", padding: "16px 20px",
          }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(229,39,39,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <ServerCog size={17} color="#E52727" strokeWidth={2} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "14px", color: "#1E1E1E", marginBottom: "2px" }}>Self-hosted MCP</div>
              <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", color: "rgba(30,30,30,0.5)" }}>
                Air-gapped deployment for enterprise environments.
              </div>
            </div>
            <button style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#1E1E1E", background: "#ffffff", border: "1px solid rgba(30,30,30,0.1)", borderRadius: "8px", padding: "9px 16px", cursor: "pointer", flexShrink: 0 }}>
              View docs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
