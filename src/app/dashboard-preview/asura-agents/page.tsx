"use client";

import {
  Eye, TrendingUp, BookOpen, FileText, TestTube,
  Zap, Database, Bug, Settings, Trash2, Search,
  ChevronRight, ChevronLeft, Globe, Webhook, Copy,
  Sparkles, ArrowRight, Settings2, BarChart2, ClipboardList, FileText as FileIcon,
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

const AGENTS = [
  {
    name: "Browser Asura",
    role: "End-to-end web flow testing",
    desc: "Drives real browsers through complete user journeys — checkout, onboarding, search — exactly the way a tester would, but at scale and on every build.",
    Icon: Globe,
    color: "#29A5FF",
    bg: "rgba(41,165,255,0.08)",
    stats: [
      { label: "FLOWS COVERED", value: "62" },
      { label: "RUNS THIS WEEK", value: "184" },
    ],
    status: "Active",
  },
  {
    name: "API Asura",
    role: "Contract & regression validation",
    desc: "Continuously validates request/response contracts against the spec, flags breaking changes, and re-runs regression suites on every deploy.",
    Icon: Webhook,
    color: "#16A34A",
    bg: "rgba(22,163,74,0.08)",
    stats: [
      { label: "ENDPOINTS WATCHED", value: "118" },
      { label: "CONTRACT BREAKS CAUGHT", value: "7" },
    ],
    status: "Active",
  },
  {
    name: "Duplicate Bug Asura",
    role: "Keeps your backlog clean automatically",
    desc: "Compares every new bug report against the existing backlog, links duplicates to the original, and stops noise before it reaches triage.",
    Icon: Copy,
    color: "#FFA840",
    bg: "rgba(255,168,64,0.1)",
    stats: [
      { label: "DUPLICATES MERGED", value: "39" },
      { label: "BACKLOG NOISE CUT", value: "24%" },
    ],
    status: "Active",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AsuraAgentsPage() {
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
          <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#29A5FF" }}>Asura Agents</span>
        </div>

        {/* Scrollable content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "20px 28px 24px" }}>

          {/* Header */}
          <div style={{ marginBottom: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
              <div style={{ width: "30px", height: "30px", borderRadius: "9px", background: "rgba(229,39,39,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Sparkles size={15} color="#E52727" strokeWidth={2} />
              </div>
              <h1 style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "26px", color: "#1E1E1E", margin: 0 }}>
                Asura Agents
              </h1>
            </div>
            <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", lineHeight: 1.6, color: "rgba(30,30,30,0.5)", margin: 0, maxWidth: "720px" }}>
              Agents that test while your team focuses on what needs human judgment. Asuras handle the systematic,
              repeatable execution — web flows, API contracts, backlog deduplication — so your testers can focus on
              the complex, ambiguous, exploratory work that still needs a human brain. The right work for the right intelligence.
            </p>
          </div>

          {/* Agent cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "20px" }}>
            {AGENTS.map(agent => (
              <div key={agent.name} style={{
                display: "flex", alignItems: "center", gap: "20px",
                background: "#ffffff", border: "1px solid rgba(30,30,30,0.07)", borderRadius: "14px", padding: "20px",
              }}>
                <div style={{ width: "52px", height: "52px", borderRadius: "12px", background: agent.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <agent.Icon size={24} color={agent.color} strokeWidth={2} />
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
                    <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "17px", color: "#1E1E1E" }}>{agent.name}</span>
                    <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.04em", color: "#16A34A", background: "rgba(22,163,74,0.1)", borderRadius: "20px", padding: "3px 10px" }}>
                      {agent.status}
                    </span>
                  </div>
                  <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", fontWeight: 600, color: agent.color, marginBottom: "6px" }}>{agent.role}</div>
                  <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", lineHeight: 1.6, color: "rgba(30,30,30,0.5)", margin: 0, maxWidth: "560px" }}>{agent.desc}</p>
                </div>

                <div style={{ display: "flex", gap: "24px", flexShrink: 0 }}>
                  {agent.stats.map(s => (
                    <div key={s.label}>
                      <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "22px", color: "#1E1E1E", textAlign: "right" as const }}>{s.value}</div>
                      <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.04em", color: "rgba(30,30,30,0.4)", textAlign: "right" as const, marginTop: "2px", whiteSpace: "nowrap" as const }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                <button style={{
                  display: "flex", alignItems: "center", gap: "6px", flexShrink: 0,
                  fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600,
                  color: "#1E1E1E", background: "#ffffff", border: "1px solid rgba(30,30,30,0.1)",
                  borderRadius: "8px", padding: "9px 16px", cursor: "pointer",
                }}>
                  Configure <ArrowRight size={14} strokeWidth={2} />
                </button>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div style={{
            display: "flex", alignItems: "center", gap: "12px",
            background: "rgba(41,165,255,0.06)", border: "1px solid rgba(41,165,255,0.15)",
            borderRadius: "12px", padding: "16px 20px",
          }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(41,165,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Sparkles size={17} color="#29A5FF" strokeWidth={2} />
            </div>
            <div>
              <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "14px", color: "#1E1E1E", marginBottom: "2px" }}>Shared platform context</div>
              <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", color: "rgba(30,30,30,0.5)" }}>
                All agents inherit platform context — not just selectors — so they understand requirements, prior runs and known issues across your project.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
