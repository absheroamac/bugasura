"use client";

import { useState } from "react";
import {
  Eye, TrendingUp, BookOpen, FileText, TestTube,
  Zap, Database, Bug, Settings, Trash2,
  Search, Plus, ChevronDown, ChevronRight,
  Folder, SlidersHorizontal, ArrowUpDown, Sparkles, Zap as Bolt,
  FolderOpen,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { label: "Eagle Eye",      Icon: Eye,        count: null, active: false },
  { label: "Revenue Flows",  Icon: TrendingUp, count: null, active: false },
  { label: "Knowledge Base", Icon: BookOpen,   count: 10,   active: false },
  { label: "Requirements",   Icon: FileText,   count: 26,   active: true  },
  { label: "Test Repo",      Icon: TestTube,   count: 350,  active: false },
  { label: "Sprints",        Icon: Zap,        count: 6,    active: false },
  { label: "Test Data",      Icon: Database,   count: 2,    active: false },
  { label: "Issues",         Icon: Bug,        count: 141,  active: false },
  { label: "Settings",       Icon: Settings,   count: null, active: false },
  { label: "Trash",          Icon: Trash2,     count: null, active: false },
];

const FOLDERS = [
  "Offline Capability",
  "Triggers for Offline Token",
  "Expiration and Validity",
  "Security Measures and Encryption",
  "Eligibility Criteria for Offers",
  "Supported Payment Methods",
  "Compliance with Standards",
  "Error Handling",
  "Performance",
  "Security",
  "Payment Processing",
  "User Authentication",
  "Unified Checkout Experience",
  "Auto OTP Read",
  "1-Click Card Checkout",
  "Auto Retry Engine",
  "Native Payment Experience",
  "Robust Payment Routing",
  "PCI-DSS Compliance",
];

interface ReqRow { id: string; title: string; count: number; children?: { id: string; title: string }[]; expanded?: boolean }

const ROWS: ReqRow[] = [
  { id: "REQ68", title: "Refund Initiation", count: 2, expanded: true, children: [
    { id: "REQ69", title: "Full Refund Initiation for Successful Transactions" },
    { id: "REQ70", title: "Partial Refund Handling in Acme" },
  ]},
  { id: "REQ71", title: "API Testing", count: 1 },
  { id: "REQ55", title: "Checkout Convenience Features", count: 3 },
  { id: "REQ59", title: "No-Code Design Studio", count: 1 },
  { id: "REQ61", title: "Payment Routing and Compliance", count: 2 },
  { id: "REQ64", title: "Order Management APIs", count: 3 },
  { id: "REQ53", title: "Unified Checkout Experience", count: 1 },
  { id: "REQ37", title: "Unified Checkout Experience", count: 2 },
  { id: "REQ40", title: "Auto OTP Read", count: 1 },
  { id: "REQ42", title: "1 Click Card Checkout", count: 1 },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RequirementsPage() {
  const [open, setOpen] = useState<Record<string, boolean>>({ REQ68: true });

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
            {[Sparkles, Plus, ChevronDown, Bolt].map((Ic, i) => (
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
          display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.38)" }}>Project</span>
            <ChevronRight size={13} color="rgba(30,30,30,0.25)" />
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#29A5FF" }}>Requirements</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#F5F5F3", border: "1px solid rgba(30,30,30,0.08)", borderRadius: "8px", padding: "7px 13px" }}>
            <Search size={13} color="rgba(30,30,30,0.35)" strokeWidth={2} />
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", color: "rgba(30,30,30,0.3)" }}>Search…</span>
          </div>
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
              Requirements management need not be hard
            </h1>
            <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", color: "rgba(30,30,30,0.45)", margin: 0, maxWidth: "520px" }}>
              Manage every requirement, auto-map to test cases and bugs using AI
            </p>

            {/* Decorative card */}
            <div style={{ position: "absolute", top: "18px", right: "28px", display: "flex", alignItems: "flex-start", gap: "10px", pointerEvents: "none" }}>
              <Sparkles size={14} color="#FFA840" style={{ marginTop: "2px" }} />
              <div style={{ background: "#ffffff", border: "1px solid rgba(30,30,30,0.1)", borderRadius: "10px", padding: "8px 14px", boxShadow: "0 4px 16px rgba(0,0,0,0.06)", display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700, color: "rgba(30,30,30,0.4)" }}>REQ31</span>
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11.5px", color: "#1E1E1E" }}>Fallback mechanism activation when all gateways are down</span>
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "10px", fontWeight: 700, color: "#16A34A", background: "rgba(22,163,74,0.1)", padding: "2px 8px", borderRadius: "20px" }}>3</span>
              </div>
              <Sparkles size={12} color="#E52727" style={{ marginTop: "2px" }} />
            </div>
            <div style={{ position: "absolute", bottom: "16px", right: "70px", width: "44px", height: "36px", background: "#29A5FF", borderRadius: "8px 8px 8px 2px", pointerEvents: "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Folder size={16} color="#fff" strokeWidth={2} />
            </div>
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
          </div>

          {/* Two-column: folder tree + requirements list */}
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

            {/* Requirements list */}
            <div style={{ background: "#ffffff", borderRadius: "14px", border: "1px solid rgba(30,30,30,0.07)", overflow: "hidden" }}>
              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderBottom: "1px solid rgba(30,30,30,0.06)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <input type="checkbox" style={{ width: "16px", height: "16px" }} />
                  <Folder size={16} color="rgba(30,30,30,0.4)" strokeWidth={1.8} />
                  <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "17px", color: "#1E1E1E" }}>All</span>
                  <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.4)" }}>102</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <button style={{ display: "flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#ffffff", background: "#29A5FF", border: "none", borderRadius: "8px", padding: "9px 16px", cursor: "pointer" }}>
                    <Plus size={14} strokeWidth={2.5} /> Add Requirement
                  </button>
                  <button aria-label="More options" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#ffffff", border: "1px solid rgba(30,30,30,0.1)", borderRadius: "8px", padding: "9px 10px", cursor: "pointer" }}>
                    <ChevronDown size={14} color="rgba(30,30,30,0.4)" strokeWidth={2} />
                  </button>
                </div>
              </div>

              {/* Rows */}
              {ROWS.map((row, i) => {
                const isOpen = open[row.id] ?? row.expanded;
                return (
                  <div key={row.id}>
                    <div style={{
                      display: "flex", alignItems: "center", gap: "12px",
                      padding: "16px 20px",
                      borderBottom: (i < ROWS.length - 1 || (isOpen && row.children)) ? "1px solid rgba(30,30,30,0.05)" : "none",
                    }}>
                      {row.children ? (
                        <button onClick={() => setOpen(o => ({ ...o, [row.id]: !isOpen }))} style={{ background: "none", border: "none", cursor: "pointer", display: "flex" }}>
                          <ChevronDown size={14} color="rgba(30,30,30,0.4)" style={{ transform: isOpen ? "none" : "rotate(-90deg)" }} />
                        </button>
                      ) : (
                        <ChevronRight size={14} color="rgba(30,30,30,0.25)" />
                      )}
                      <Bolt size={14} color="rgba(30,30,30,0.3)" strokeWidth={1.8} />
                      <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "rgba(30,30,30,0.4)", flexShrink: 0, width: "60px" }}>{row.id}</span>
                      <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", color: "#1E1E1E", flex: 1 }}>{row.title}</span>
                      <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", fontWeight: 600, color: "rgba(30,30,30,0.4)", background: "#F5F5F3", borderRadius: "20px", padding: "3px 10px" }}>{row.count}</span>
                    </div>

                    {isOpen && row.children?.map((child, j) => (
                      <div key={child.id} style={{
                        display: "flex", alignItems: "center", gap: "12px",
                        padding: "14px 20px 14px 56px", background: "#FAFAF8",
                        borderBottom: (j < row.children!.length - 1 || i < ROWS.length - 1) ? "1px solid rgba(30,30,30,0.05)" : "none",
                      }}>
                        <Bolt size={13} color="rgba(30,30,30,0.3)" strokeWidth={1.8} />
                        <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", fontWeight: 600, color: "rgba(30,30,30,0.4)", flexShrink: 0, width: "60px" }}>{child.id}</span>
                        <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "#1E1E1E", flex: 1 }}>{child.title}</span>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
