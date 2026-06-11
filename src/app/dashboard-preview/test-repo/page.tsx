"use client";

import { useState } from "react";
import {
  Eye, TrendingUp, BookOpen, FileText, TestTube,
  Zap, Database, Bug, Settings, Trash2,
  Search, Plus, Star, ChevronDown, ChevronRight,
  Folder, SlidersHorizontal, ArrowUpDown, List, LayoutGrid, Download,
  Sparkles, FolderOpen,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { label: "Eagle Eye",      Icon: Eye,        count: null, active: false },
  { label: "Revenue Flows",  Icon: TrendingUp, count: null, active: false },
  { label: "Knowledge Base", Icon: BookOpen,   count: 10,   active: false },
  { label: "Requirements",   Icon: FileText,   count: 26,   active: false },
  { label: "Test Repo",      Icon: TestTube,   count: 350,  active: true  },
  { label: "Sprints",        Icon: Zap,        count: 6,    active: false },
  { label: "Test Data",      Icon: Database,   count: 2,    active: false },
  { label: "Issues",         Icon: Bug,        count: 141,  active: false },
  { label: "Settings",       Icon: Settings,   count: null, active: false },
  { label: "Trash",          Icon: Trash2,     count: null, active: false },
];

const TABS = ["Test Repo", "Suites", "Reports"];

const FOLDERS = [
  "Transaction Resilience",
  "Authentication and Convenience Features",
  "Unified Checkout Experience",
  "Order API Lifecycle",
  "Acme HyperCheckout",
  "Payment Routing and Orchestration",
  "API User Flow",
  "Create Order API",
  "Order Status API",
  "Compliance and Security",
  "Checkout Experience Customization",
  "Order Update API",
  "Browser Agent",
  "Product Search",
  "Shopping Cart",
  "Hotel Search",
  "Property Search",
  "Restaurant Search",
];

interface TestCase { id: string; severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW"; title: string }
const TEST_CASES: TestCase[] = [
  { id: "TES269", severity: "CRITICAL", title: "Auto Detect and Populate OTP stays inactive until consent is granted to honor Acme privacy choices." },
  { id: "TES268", severity: "HIGH",     title: "Auto Detect and Populate OTP moves to manual entry on unsupported devices or channels so Acme checkout can…" },
  { id: "TES267", severity: "HIGH",     title: "Auto Detect and Populate OTP blocks longer-than-supported codes to prevent parsing and validation issues in Acme." },
  { id: "TES266", severity: "HIGH",     title: "Auto Detect and Populate OTP blocks shorter-than-supported codes to avoid invalid Acme authentication attempts." },
  { id: "TES265", severity: "MEDIUM",   title: "Auto Detect and Populate OTP shows clear fill confirmation so users can continue Acme checkout with confidence." },
  { id: "TES264", severity: "MEDIUM",   title: "Auto Detect and Populate OTP accepts the longest supported code to preserve full Acme authentication coverage a…" },
  { id: "TES263", severity: "MEDIUM",   title: "Auto Detect and Populate OTP accepts the shortest supported code to keep Acme checkout inclusive of valid…" },
  { id: "TES262", severity: "HIGH",     title: "Auto Detect and Populate OTP ignores unsupported channels to keep Acme behavior predictable and secure." },
  { id: "TES261", severity: "CRITICAL", title: "Auto Detect and Populate OTP picks the latest code from multiple messages to keep Acme authentication accurate." },
  { id: "TES260", severity: "CRITICAL", title: "Auto Detect and Populate OTP captures a valid numeric SMS code to complete Acme authentication without manual…" },
];

const SEVERITY_COLORS: Record<TestCase["severity"], { color: string; bg: string }> = {
  CRITICAL: { color: "#E52727", bg: "rgba(229,39,39,0.08)" },
  HIGH:     { color: "#FFA840", bg: "rgba(255,168,64,0.1)" },
  MEDIUM:   { color: "#16A34A", bg: "rgba(22,163,74,0.08)" },
  LOW:      { color: "#29A5FF", bg: "rgba(41,165,255,0.08)" },
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TestRepoPage() {
  const [activeTab, setActiveTab] = useState("Test Repo");

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
          {/* Logo */}
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

          {/* Search */}
          <div style={{ padding: "12px 16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.06)", borderRadius: "8px", padding: "8px 12px" }}>
              <Search size={13} color="rgba(255,255,255,0.3)" strokeWidth={2} />
              <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", color: "rgba(255,255,255,0.28)" }}>Search…</span>
            </div>
          </div>

          {/* Nav */}
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

          {/* Bottom icons row */}
          <div style={{ padding: "10px 16px", borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", gap: "14px" }}>
            {[Star, Plus, ChevronDown, Zap].map((Ic, i) => (
              <Ic key={i} size={16} color="rgba(255,255,255,0.28)" strokeWidth={1.6} style={{ cursor: "pointer" }} />
            ))}
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.28)" }}>+8</span>
          </div>

          {/* User */}
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

        {/* Top tab bar */}
        <div style={{
          background: "#ffffff", borderBottom: "1px solid rgba(30,30,30,0.07)",
          padding: "0 28px", height: "52px",
          display: "flex", alignItems: "center", gap: "4px", flexShrink: 0,
        }}>
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
                padding: "16px 14px 14px", cursor: "pointer", marginBottom: "-1px",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Scrollable content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "20px 28px 24px" }}>

          {/* Banner */}
          <div style={{
            position: "relative",
            background: "linear-gradient(135deg, #EAF6FF 0%, #ffffff 65%)",
            border: "1px solid rgba(41,165,255,0.12)",
            borderRadius: "16px",
            padding: "22px 28px",
            marginBottom: "18px",
            overflow: "hidden",
          }}>
            <h1 style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "22px", color: "#1E1E1E", margin: "0 0 4px" }}>
              Test Repo
            </h1>
            <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", color: "rgba(30,30,30,0.45)", margin: 0, maxWidth: "520px" }}>
              Create once, reuse always. Centralised test repo for faster QA and seamless team sync.
            </p>

            {/* Decorative card */}
            <div style={{ position: "absolute", top: "18px", right: "28px", display: "flex", alignItems: "flex-start", gap: "10px", pointerEvents: "none" }}>
              <Sparkles size={14} color="#FFA840" style={{ marginTop: "2px" }} />
              <div style={{ background: "#ffffff", border: "1px solid rgba(30,30,30,0.1)", borderRadius: "10px", padding: "8px 14px", boxShadow: "0 4px 16px rgba(0,0,0,0.06)", display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700, color: "rgba(30,30,30,0.4)" }}>TC01</span>
                <Star size={11} color="#29A5FF" fill="#29A5FF" />
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "10px", fontWeight: 700, color: "#FFA840", background: "rgba(255,168,64,0.12)", padding: "2px 7px", borderRadius: "20px" }}>MEDIUM</span>
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11.5px", color: "#1E1E1E" }}>Fallback mechanism activation when all gateways are down</span>
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "10px", fontWeight: 700, color: "#16A34A", background: "rgba(22,163,74,0.1)", padding: "2px 8px", borderRadius: "20px" }}>Completed</span>
              </div>
              <Sparkles size={12} color="#E52727" style={{ marginTop: "2px" }} />
            </div>
            <div style={{ position: "absolute", bottom: "16px", right: "70px", width: "44px", height: "36px", background: "#29A5FF", borderRadius: "8px 8px 8px 2px", pointerEvents: "none" }} />
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
            <div style={{ display: "flex", alignItems: "center", background: "#ffffff", border: "1px solid rgba(30,30,30,0.1)", borderRadius: "8px", overflow: "hidden" }}>
              <div style={{ padding: "9px 12px", background: "rgba(41,165,255,0.1)", display: "flex" }}>
                <List size={15} color="#29A5FF" strokeWidth={2} />
              </div>
              <div style={{ padding: "9px 12px", display: "flex", borderLeft: "1px solid rgba(30,30,30,0.08)" }}>
                <LayoutGrid size={15} color="rgba(30,30,30,0.4)" strokeWidth={2} />
              </div>
            </div>
            <button aria-label="Download" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#ffffff", border: "1px solid rgba(30,30,30,0.1)", borderRadius: "8px", padding: "9px", cursor: "pointer" }}>
              <Download size={15} color="rgba(30,30,30,0.4)" strokeWidth={2} />
            </button>
          </div>

          {/* Two-column: folder tree + test cases */}
          <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: "16px", alignItems: "start" }}>

            {/* Folder tree */}
            <div style={{ background: "#ffffff", borderRadius: "14px", border: "1px solid rgba(30,30,30,0.07)", padding: "14px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 8px", marginBottom: "2px", borderRadius: "8px", background: "rgba(41,165,255,0.08)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <ChevronDown size={13} color="#29A5FF" strokeWidth={2.2} />
                  <FolderOpen size={14} color="#29A5FF" strokeWidth={1.8} />
                  <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", fontWeight: 600, color: "#29A5FF" }}>All</span>
                </div>
                <Plus size={14} color="#29A5FF" strokeWidth={2} />
              </div>
              <div style={{ maxHeight: "560px", overflowY: "auto", paddingLeft: "4px" }}>
                {FOLDERS.map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: "6px", padding: "7px 8px", borderRadius: "8px", cursor: "pointer" }}>
                    <ChevronRight size={12} color="rgba(30,30,30,0.3)" strokeWidth={2} />
                    <Folder size={14} color="rgba(30,30,30,0.35)" strokeWidth={1.8} />
                    <span style={{
                      fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "#1E1E1E",
                      whiteSpace: "nowrap" as const, overflow: "hidden", textOverflow: "ellipsis",
                    }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Test cases */}
            <div style={{ background: "#ffffff", borderRadius: "14px", border: "1px solid rgba(30,30,30,0.07)", overflow: "hidden" }}>
              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderBottom: "1px solid rgba(30,30,30,0.06)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Folder size={16} color="rgba(30,30,30,0.4)" strokeWidth={1.8} />
                  <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "17px", color: "#1E1E1E" }}>All</span>
                  <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.4)" }}>350</span>
                </div>
                <button style={{ display: "flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#ffffff", background: "#29A5FF", border: "none", borderRadius: "8px", padding: "9px 16px", cursor: "pointer" }}>
                  <Plus size={14} strokeWidth={2.5} /> Add Test Case <ChevronDown size={13} strokeWidth={2} />
                </button>
              </div>

              {/* Rows */}
              {TEST_CASES.map((tc, i) => (
                <div key={tc.id} style={{
                  display: "flex", alignItems: "center", gap: "16px",
                  padding: "16px 20px",
                  borderBottom: i < TEST_CASES.length - 1 ? "1px solid rgba(30,30,30,0.05)" : "none",
                }}>
                  <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "rgba(30,30,30,0.4)", flexShrink: 0, width: "56px" }}>{tc.id}</span>
                  <span style={{
                    fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700,
                    color: SEVERITY_COLORS[tc.severity].color, background: SEVERITY_COLORS[tc.severity].bg,
                    padding: "4px 10px", borderRadius: "20px", flexShrink: 0,
                  }}>{tc.severity}</span>
                  <span style={{
                    fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", color: "#1E1E1E",
                    whiteSpace: "nowrap" as const, overflow: "hidden", textOverflow: "ellipsis", flex: 1,
                  }}>{tc.title}</span>
                </div>
              ))}

              {/* Add test case footer */}
              <div style={{ padding: "16px 20px", background: "rgba(41,165,255,0.04)" }}>
                <button style={{ display: "flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#29A5FF", background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                  <Plus size={14} strokeWidth={2.5} /> Add Test Case
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
