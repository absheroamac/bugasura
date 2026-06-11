"use client";

import {
  Eye, TrendingUp, BookOpen, FileText, TestTube,
  Zap, Database, Bug, Settings, Trash2,
  Search, ChevronRight, ArrowRight, Bot,
  Sparkles, FileSearch, Users, RefreshCw,
  FileText as FileIcon, Globe, MessageSquare, Layers,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { label: "Eagle Eye",      Icon: Eye,        count: null, active: false },
  { label: "Revenue Flows",  Icon: TrendingUp, count: null, active: false },
  { label: "Knowledge Base", Icon: BookOpen,   count: 10,   active: true  },
  { label: "Requirements",   Icon: FileText,   count: 26,   active: false },
  { label: "Test Repo",      Icon: TestTube,   count: 350,  active: false },
  { label: "Sprints",        Icon: Zap,        count: 6,    active: false },
  { label: "Test Data",      Icon: Database,   count: 2,    active: false },
  { label: "Issues",         Icon: Bug,        count: 141,  active: false },
  { label: "Settings",       Icon: Settings,   count: null, active: false },
  { label: "Trash",          Icon: Trash2,     count: null, active: false },
];

const SOURCES = [
  { Icon: FileIcon,      label: "PRDs & Specs",      count: 18 },
  { Icon: Globe,         label: "API Docs",          count: 24 },
  { Icon: MessageSquare, label: "Support Tickets",   count: 142 },
  { Icon: Layers,        label: "Past Sprint Notes", count: 31 },
];

const LAYERS = [
  { name: "Refine",   sub: "Sprint scoping & context grounding", color: "#29A5FF" },
  { name: "Generate", sub: "Test case generation",               color: "#E52727" },
  { name: "Asuras",   sub: "Autonomous test execution agents",   color: "#FFA840" },
];

const FEATURES = [
  { Icon: ArrowRight,      title: "Referenced automatically by Refine and Generate", sub: "No manual lookup needed" },
  { Icon: Bot,             title: "Asuras inherit product context", sub: "Before running any tests" },
  { Icon: FileSearch,      title: "Surfaces relevant docs during test case creation", sub: "Linked inline as references" },
  { Icon: Users,           title: "Keeps QA context consistent", sub: "Across team members and sprints" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContextFlowPage() {
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
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.38)" }}>Knowledge Base</span>
            <ChevronRight size={13} color="rgba(30,30,30,0.25)" />
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#29A5FF" }}>Context Flow</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#F5F5F3", border: "1px solid rgba(30,30,30,0.08)", borderRadius: "8px", padding: "7px 13px" }}>
            <Search size={13} color="rgba(30,30,30,0.35)" strokeWidth={2} />
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", color: "rgba(30,30,30,0.3)" }}>Search…</span>
          </div>
        </div>

        {/* Scrollable content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "20px 28px 28px" }}>

          {/* Header */}
          <div style={{ marginBottom: "20px" }}>
            <h1 style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "24px", color: "#1E1E1E", margin: "0 0 4px" }}>
              Context Flow
            </h1>
            <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", color: "rgba(30,30,30,0.45)", margin: 0, maxWidth: "640px" }}>
              Context that flows into every test decision downstream. When Testpert maps risk or Bugasura
              generates test cases, it draws on the Knowledge Base to understand what the product is
              supposed to do, who uses it, and what&apos;s gone wrong before.
            </p>
          </div>

          {/* Flow diagram */}
          <div style={{ background: "#ffffff", border: "1px solid rgba(30,30,30,0.07)", borderRadius: "16px", padding: "28px", marginBottom: "20px" }}>
            <div style={{ display: "flex", alignItems: "stretch", gap: "0" }}>

              {/* Knowledge Base node */}
              <div style={{ flex: "0 0 220px" }}>
                <div style={{ background: "rgba(41,165,255,0.06)", border: "1px solid rgba(41,165,255,0.18)", borderRadius: "14px", padding: "18px", height: "100%" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#29A5FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <BookOpen size={18} color="#fff" strokeWidth={2} />
                    </div>
                    <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "16px", color: "#1E1E1E" }}>Knowledge Base</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {SOURCES.map(({ Icon, label, count }) => (
                      <div key={label} style={{ display: "flex", alignItems: "center", gap: "8px", background: "#ffffff", borderRadius: "8px", padding: "8px 10px", border: "1px solid rgba(30,30,30,0.05)" }}>
                        <Icon size={14} color="#29A5FF" strokeWidth={2} />
                        <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", color: "#1E1E1E", flex: 1 }}>{label}</span>
                        <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700, color: "rgba(30,30,30,0.35)" }}>{count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connector */}
              <div style={{ flex: "0 0 60px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "100%", height: "2px", background: "linear-gradient(90deg, rgba(41,165,255,0.4), rgba(229,39,39,0.4))", position: "relative" }}>
                  <ArrowRight size={18} color="rgba(229,39,39,0.5)" style={{ position: "absolute", right: "-4px", top: "-9px" }} />
                </div>
              </div>

              {/* Layers */}
              <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
                {LAYERS.map((layer, i) => (
                  <div key={layer.name} style={{ position: "relative" }}>
                    <div style={{ background: "#ffffff", border: `1px solid ${layer.color}33`, borderRadius: "14px", padding: "18px", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" as const }}>
                      <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: `${layer.color}1A`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
                        {i === 0 && <FileSearch size={19} color={layer.color} strokeWidth={2} />}
                        {i === 1 && <Sparkles size={19} color={layer.color} strokeWidth={2} />}
                        {i === 2 && <Bot size={19} color={layer.color} strokeWidth={2} />}
                      </div>
                      <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "15px", color: "#1E1E1E", marginBottom: "4px" }}>{layer.name}</div>
                      <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11.5px", color: "rgba(30,30,30,0.45)", lineHeight: 1.4 }}>{layer.sub}</div>
                    </div>
                    {i < LAYERS.length - 1 && (
                      <ArrowRight size={14} color="rgba(30,30,30,0.2)" style={{ position: "absolute", right: "-22px", top: "50%", transform: "translateY(-50%)", zIndex: 1 }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", marginBottom: "20px" }}>
            {FEATURES.map(({ Icon, title, sub }) => (
              <div key={title} style={{ display: "flex", flexDirection: "column", gap: "12px", background: "#ffffff", border: "1px solid rgba(30,30,30,0.07)", borderRadius: "14px", padding: "18px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(41,165,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={17} color="#29A5FF" strokeWidth={2} />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", fontWeight: 600, color: "#1E1E1E", lineHeight: 1.4, marginBottom: "4px" }}>{title}</div>
                  <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", color: "rgba(30,30,30,0.45)", lineHeight: 1.5 }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent activity */}
          <div style={{ background: "#ffffff", border: "1px solid rgba(30,30,30,0.07)", borderRadius: "14px", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "16px 20px", borderBottom: "1px solid rgba(30,30,30,0.06)" }}>
              <RefreshCw size={15} color="rgba(30,30,30,0.4)" strokeWidth={1.8} />
              <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "16px", color: "#1E1E1E" }}>Recently Referenced</span>
            </div>
            {[
              { doc: "Refund Policy v3.2.pdf", layer: "Refine", used: "Sprint: Browser Agent", time: "2h ago" },
              { doc: "Auto OTP API Spec", layer: "Generate", used: "TES261 — OTP autofill", time: "5h ago" },
              { doc: "Support Ticket #4821 — routing fallback", layer: "Asuras", used: "Payment Routing run", time: "1d ago" },
              { doc: "Q1 Sprint Retrospective Notes", layer: "Refine", used: "Sprint: Checkout Resilience", time: "2d ago" },
            ].map((row, i, arr) => (
              <div key={row.doc} style={{
                display: "flex", alignItems: "center", gap: "16px", padding: "14px 20px",
                borderBottom: i < arr.length - 1 ? "1px solid rgba(30,30,30,0.05)" : "none",
              }}>
                <FileIcon size={15} color="rgba(30,30,30,0.35)" strokeWidth={1.8} />
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", color: "#1E1E1E", flex: 1 }}>{row.doc}</span>
                <span style={{
                  fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700,
                  color: row.layer === "Refine" ? "#29A5FF" : row.layer === "Generate" ? "#E52727" : "#FFA840",
                  background: row.layer === "Refine" ? "rgba(41,165,255,0.08)" : row.layer === "Generate" ? "rgba(229,39,39,0.08)" : "rgba(255,168,64,0.1)",
                  padding: "4px 10px", borderRadius: "20px", flexShrink: 0,
                }}>{row.layer}</span>
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", color: "rgba(30,30,30,0.45)", width: "220px", flexShrink: 0 }}>{row.used}</span>
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", color: "rgba(30,30,30,0.35)", flexShrink: 0 }}>{row.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
