"use client";

import { useState } from "react";
import {
  Eye, TrendingUp, BookOpen, FileText, TestTube,
  Zap, Database, Bug, Settings, Trash2, Search,
  ChevronDown, ChevronUp, FolderOpen,
  Plus, ChevronRight, MessageCircle,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { label: "Eagle Eye",      Icon: Eye,       count: null, active: false },
  { label: "Revenue Flows",  Icon: TrendingUp, count: null, active: false },
  { label: "Knowledge Base", Icon: BookOpen,   count: 10,   active: true  },
  { label: "Requirements",   Icon: FileText,   count: 26,   active: false },
  { label: "Test Repo",      Icon: TestTube,   count: 350,  active: false },
  { label: "Sprints",        Icon: Zap,        count: 6,    active: false },
  { label: "Test Data",      Icon: Database,   count: null, active: false },
  { label: "Issues",         Icon: Bug,        count: 141,  active: false },
  { label: "Settings",       Icon: Settings,   count: null, active: false },
  { label: "Trash",          Icon: Trash2,     count: null, active: false },
];

interface SourceItem { label: string; icon: string; active?: boolean }
interface SourceGroup { name: string; icon: React.ElementType; items: SourceItem[]; open: boolean }

const SOURCES: SourceGroup[] = [
  {
    name: "Requirements", icon: FileText, open: true,
    items: [
      { label: "Upload Docs",    icon: "📄", active: true },
      { label: "Architecture",   icon: "🏗️" },
      { label: "User Flow",      icon: "🔀" },
      { label: "DB Schema",      icon: "🗄️" },
      { label: "Meeting notes",  icon: "📋" },
      { label: "API Docs",       icon: "🔗" },
      { label: "Custom Files",   icon: "📁" },
    ],
  },
  { name: "Project Management", icon: FolderOpen, open: false, items: [] },
  { name: "Designs",            icon: FolderOpen, open: false, items: [] },
];

interface DocFile { name: string; addedBy: string; date: string; type: "docx" | "txt" | "pdf" }
const FILES: DocFile[] = [
  { name: "OTP Detection and Auto-Population.docx", addedBy: "Syed", date: "28th Apr, 2026 1:04 pm",  type: "docx" },
  { name: "YourApp_product_hypercheckout_202407311251372.txt", addedBy: "Syed", date: "7th Apr, 2026 3:49 pm", type: "txt" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function FileTypeIcon({ type }: { type: DocFile["type"] }) {
  const colors: Record<string, { bg: string; color: string; label: string }> = {
    docx: { bg: "#EAF1FB", color: "#1A73E8", label: "W" },
    txt:  { bg: "#F3F4F6", color: "#6B7280", label: "T" },
    pdf:  { bg: "#FEE2E2", color: "#E52727", label: "P" },
  };
  const c = colors[type];
  return (
    <div style={{
      width: "40px", height: "40px", borderRadius: "8px",
      background: c.bg, display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0, border: "1px solid rgba(30,30,30,0.06)",
    }}>
      <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "14px", color: c.color }}>{c.label}</span>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function KnowledgeBasePage() {
  const [groups, setGroups] = useState(SOURCES);
  const [activeItem, setActiveItem] = useState("Upload Docs");

  function toggleGroup(name: string) {
    setGroups(g => g.map(group => group.name === name ? { ...group, open: !group.open } : group));
  }

  return (
    <div style={{
      display: "flex", height: "100vh", background: "#F2EFE8",
      fontFamily: "var(--font-inter), Inter, sans-serif", overflow: "hidden",
    }}>

      {/* ── Sidebar ─────────────────────────────────────────────────────────── */}
      <div style={{ padding: "12px 0 12px 12px", flexShrink: 0 }}>
      <aside style={{ width: "232px", height: "100%", background: "#1E1E1E", display: "flex", flexDirection: "column", overflowY: "auto", borderRadius: "16px" }}>
        {/* Client logo */}
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
            <div key={label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 12px", marginBottom: "2px", borderRadius: "10px", cursor: "pointer", background: active ? "rgba(229,39,39,0.14)" : "transparent" }}>
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

        {/* Top bar */}
        <div style={{ background: "#ffffff", borderBottom: "1px solid rgba(30,30,30,0.07)", padding: "0 28px", height: "52px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.38)", cursor: "pointer" }}>Sprint</span>
            <ChevronRight size={13} color="rgba(30,30,30,0.25)" />
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#29A5FF" }}>Knowledge Base</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#F5F5F3", border: "1px solid rgba(30,30,30,0.08)", borderRadius: "8px", padding: "7px 13px" }}>
            <Search size={13} color="rgba(30,30,30,0.35)" strokeWidth={2} />
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", color: "rgba(30,30,30,0.3)" }}>Search…</span>
          </div>
        </div>

        {/* Content area */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: "#F7F8FA" }}>

        {/* Header card */}
        <div style={{
          background: "#ffffff",
          margin: "12px 12px 0",
          borderRadius: "12px",
          padding: "24px 28px",
          flexShrink: 0,
          position: "relative",
          overflow: "hidden",
          border: "1px solid rgba(30,30,30,0.06)",
        }}>
          <h1 style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "22px", color: "#1E1E1E", margin: "0 0 6px" }}>
            Knowledge Base
          </h1>
          <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.45)", margin: 0 }}>
            Create a common shared understanding
          </p>

          {/* Decorative docs illustration */}
          <div style={{ position: "absolute", right: "40px", top: "50%", transform: "translateY(-50%)", display: "flex", alignItems: "center", gap: "12px", pointerEvents: "none" }}>
            {/* Doc cards */}
            {[
              { bg: "#EAF1FB", color: "#1A73E8", rotate: "-8deg", top: "0" },
              { bg: "#FEF9C3", color: "#B45309", rotate: "4deg",  top: "-10px" },
              { bg: "#EDE9FE", color: "#5B21B6", rotate: "-4deg", top: "4px" },
              { bg: "#F3F4F6", color: "#374151", rotate: "6deg",  top: "-4px" },
              { bg: "#FEF3C7", color: "#92400E", rotate: "-2deg", top: "8px" },
            ].map((d, i) => (
              <div key={i} style={{
                width: "44px", height: "54px",
                background: d.bg, borderRadius: "6px",
                border: `1px solid ${d.color}22`,
                transform: `rotate(${d.rotate})`,
                marginTop: d.top,
                display: "flex", flexDirection: "column", padding: "6px",
                gap: "4px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}>
                {[80, 60, 70].map((w, j) => (
                  <div key={j} style={{ height: "3px", background: `${d.color}44`, borderRadius: "2px", width: `${w}%` }} />
                ))}
              </div>
            ))}
            {/* Sparkles */}
            <div style={{ position: "absolute", top: "-20px", right: "-20px", display: "flex", gap: "8px" }}>
              <Star size={14} color="#FFA840" fill="#FFA840" />
              <Plus size={12} color="#29A5FF" />
            </div>
          </div>
        </div>

        {/* Two-panel content */}
        <div style={{ flex: 1, display: "flex", gap: "0", overflow: "hidden", margin: "12px" }}>

          {/* Sources sidebar */}
          <div style={{
            width: "240px", flexShrink: 0,
            background: "#ffffff",
            borderRadius: "12px",
            border: "1px solid rgba(30,30,30,0.06)",
            overflowY: "auto",
            marginRight: "12px",
          }}>
            <div style={{ padding: "14px 16px 8px", borderBottom: "1px solid rgba(30,30,30,0.06)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                <FolderOpen size={14} color="rgba(30,30,30,0.4)" strokeWidth={1.8} />
                <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "13px", color: "#1E1E1E" }}>Sources</span>
              </div>
            </div>
            <div style={{ padding: "8px 0" }}>
              {groups.map(group => (
                <div key={group.name}>
                  {/* Group header */}
                  <button
                    onClick={() => toggleGroup(group.name)}
                    style={{
                      width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "8px 16px", background: "none", border: "none", cursor: "pointer",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                      <FolderOpen size={13} color="rgba(30,30,30,0.4)" strokeWidth={1.8} />
                      <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 500, color: "rgba(30,30,30,0.65)" }}>
                        {group.name}
                      </span>
                    </div>
                    {group.open
                      ? <ChevronUp size={13} color="rgba(30,30,30,0.4)" />
                      : <ChevronDown size={13} color="rgba(30,30,30,0.4)" />
                    }
                  </button>

                  {/* Items */}
                  {group.open && group.items.map(item => (
                    <button
                      key={item.label}
                      onClick={() => setActiveItem(item.label)}
                      style={{
                        width: "100%", display: "flex", alignItems: "center", gap: "8px",
                        padding: "7px 16px 7px 32px",
                        background: (activeItem === item.label) ? "rgba(41,165,255,0.08)" : "none",
                        border: "none", cursor: "pointer",
                      }}
                    >
                      <span style={{ fontSize: "13px" }}>{item.icon}</span>
                      <span style={{
                        fontFamily: "var(--font-inter), Inter, sans-serif",
                        fontSize: "13px",
                        fontWeight: (activeItem === item.label) ? 600 : 400,
                        color: (activeItem === item.label) ? "#29A5FF" : "rgba(30,30,30,0.6)",
                      }}>
                        {item.label}
                      </span>
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* File list panel */}
          <div style={{
            flex: 1, background: "#ffffff",
            borderRadius: "12px",
            border: "1px solid rgba(30,30,30,0.06)",
            display: "flex", flexDirection: "column",
            overflow: "hidden",
          }}>
            {/* Panel header */}
            <div style={{
              padding: "14px 20px",
              borderBottom: "1px solid rgba(30,30,30,0.06)",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              flexShrink: 0,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <FolderOpen size={14} color="rgba(30,30,30,0.4)" strokeWidth={1.8} />
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", color: "rgba(30,30,30,0.5)" }}>
                  Requirements
                </span>
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", color: "rgba(30,30,30,0.3)" }}>/</span>
                <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "14px", color: "#1E1E1E" }}>
                  Upload Docs({FILES.length})
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <button style={{
                  display: "flex", alignItems: "center", gap: "6px",
                  fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", fontWeight: 600,
                  color: "#ffffff", background: "#29A5FF",
                  border: "none", borderRadius: "8px 0 0 8px",
                  padding: "8px 16px", cursor: "pointer",
                }}>
                  <Plus size={14} strokeWidth={2.5} />
                  Add
                </button>
                <button style={{
                  display: "flex", alignItems: "center",
                  background: "#1A90E8", border: "none",
                  borderRadius: "0 8px 8px 0", borderLeft: "1px solid rgba(255,255,255,0.2)",
                  padding: "8px 10px", cursor: "pointer",
                }}>
                  <ChevronDown size={13} color="#ffffff" strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* Files */}
            <div style={{ flex: 1, overflowY: "auto", padding: "12px 16px" }}>
              {FILES.map((file, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: "14px",
                  padding: "14px 12px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  marginBottom: "4px",
                  transition: "background 0.12s",
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = "rgba(30,30,30,0.03)"}
                  onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = "transparent"}
                >
                  <FileTypeIcon type={file.type} />
                  <div>
                    <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", fontWeight: 500, color: "#1E1E1E", marginBottom: "3px" }}>
                      {file.name}
                    </div>
                    <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11.5px", color: "rgba(30,30,30,0.4)" }}>
                      Added by {file.addedBy} on {file.date}
                    </div>
                  </div>
                </div>
              ))}

              {/* Create Document CTA */}
              <button style={{
                display: "flex", alignItems: "center", gap: "8px",
                width: "100%", marginTop: "12px",
                padding: "16px 12px",
                background: "rgba(41,165,255,0.04)",
                border: "1px dashed rgba(41,165,255,0.25)",
                borderRadius: "8px",
                cursor: "pointer",
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: "13.5px", fontWeight: 500,
                color: "#29A5FF",
              }}>
                <Plus size={15} strokeWidth={2.5} />
                Create Document
              </button>
            </div>
          </div>
        </div>

        {/* Chat FAB */}
        <div style={{
          position: "fixed", bottom: "24px", right: "24px",
          width: "48px", height: "48px", borderRadius: "50%",
          background: "#29A5FF",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 16px rgba(41,165,255,0.35)", cursor: "pointer",
          zIndex: 50,
        }}>
          <MessageCircle size={22} color="#ffffff" strokeWidth={2} fill="#ffffff" />
        </div>
        </div>
      </div>
    </div>
  );
}

function Star({ size, color, fill, style }: { size: number; color: string; fill?: string; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill ?? "none"} stroke={color} strokeWidth={2} style={style}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
