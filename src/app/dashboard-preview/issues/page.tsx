"use client";

import { useState } from "react";
import {
  Eye, TrendingUp, BookOpen, FileText, TestTube,
  Zap, Database, Bug, Settings, Trash2, Search,
  Plus, X, Info, MessageCircle, Mail,
  ChevronRight, CheckCircle,
  ArrowUp, Bookmark, Tag, List, LayoutGrid as GridIcon,
  Download, UserCircle,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { label: "Eagle Eye",      Icon: Eye,       count: null, active: false },
  { label: "Revenue Flows",  Icon: TrendingUp, count: null, active: false },
  { label: "Knowledge Base", Icon: BookOpen,   count: 10,   active: false },
  { label: "Requirements",   Icon: FileText,   count: 26,   active: false },
  { label: "Test Repo",      Icon: TestTube,   count: 350,  active: false },
  { label: "Sprints",        Icon: Zap,        count: 6,    active: false },
  { label: "Test Data",      Icon: Database,   count: null, active: false },
  { label: "Issues",         Icon: Bug,        count: 141,  active: true  },
  { label: "Settings",       Icon: Settings,   count: null, active: false },
  { label: "Trash",          Icon: Trash2,     count: null, active: false },
];

type Severity = "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";

interface Issue {
  id: string;
  severity: Severity;
  title: string;
  tags: string[];
  meta: string;
  status: string;
  comments: string;
}

const ISSUES: Issue[] = [
  {
    id: "ISS-146", severity: "CRITICAL",
    title: "OTP not being received on mobile devices.",
    tags: ["BUG", "mobile"],
    meta: "Added on 3rd Jun 2026 by Browser Agent",
    status: "New", comments: "2/2",
  },
  {
    id: "ISS-145", severity: "HIGH",
    title: "Mobile verification code delivery failure.",
    tags: ["BUG", "sms"],
    meta: "Added on 2nd Jun 2026 by Browser Agent",
    status: "New", comments: "3/3",
  },
  {
    id: "ISS-144", severity: "CRITICAL",
    title: "Authentication blocked due to missing OTP endpoint.",
    tags: ["BUG", "auth"],
    meta: "Added on 2nd Jun 2026 by Browser Agent",
    status: "New", comments: "2/2",
  },
  {
    id: "ISS-143", severity: "CRITICAL",
    title: "API authentication is blocked as the current environment only supports browser UI interactions.",
    tags: ["BUG", "environment"],
    meta: "Added on 2nd Jun 2026 by Browser Agent",
    status: "New", comments: "2/2",
  },
  {
    id: "ISS-142", severity: "CRITICAL",
    title: "Authentication cannot proceed without API endpoint and method details.",
    tags: ["BUG", "network"],
    meta: "Added on 1st Jun 2026 by Browser Agent",
    status: "New", comments: "2/2",
  },
];

const SEVERITY_STYLES: Record<Severity, { color: string; bg: string }> = {
  CRITICAL: { color: "#E52727", bg: "rgba(229,39,39,0.08)" },
  HIGH:     { color: "#FFA840", bg: "rgba(255,168,64,0.08)" },
  MEDIUM:   { color: "#29A5FF", bg: "rgba(41,165,255,0.08)" },
  LOW:      { color: "#22C55E", bg: "rgba(34,197,94,0.08)" },
};

// ─── Modal ────────────────────────────────────────────────────────────────────

function AddIssueModal({ onClose }: { onClose: () => void }) {
  const [summary, setSummary] = useState("not receiving mobile otp");
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [aiOn, setAiOn] = useState(true);

  const description = `Detailed Description:-\nUsers are unable to receive the one-time password (OTP) on their mobile devices, which is required to complete authentication.\n\nSteps To Reproduce\n1. Initiate login or registration that requires OTP.\n2. Enter the phone number when prompted.\n3. Submit the form to request OTP.\n4. Wait for OTP to arrive via SMS.`;

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 100,
      background: "rgba(0,0,0,0.45)",
      display: "flex", alignItems: "center", justifyContent: "center",
    }} onClick={onClose}>
      <div
        style={{
          background: "#ffffff",
          borderRadius: "16px",
          width: "700px",
          maxHeight: "90vh",
          overflowY: "auto",
          boxShadow: "0 24px 64px rgba(0,0,0,0.18)",
          padding: "28px 28px 24px",
          position: "relative",
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "22px" }}>
          <h2 style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "20px", color: "#1E1E1E", margin: 0 }}>
            Add New Issue
          </h2>
          <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", borderRadius: "6px", display: "flex" }}>
            <X size={18} color="rgba(30,30,30,0.4)" strokeWidth={2} />
          </button>
        </div>

        {/* Body: two columns */}
        <div style={{ display: "flex", gap: "20px" }}>

          {/* Left column */}
          <div style={{ flex: 1, minWidth: 0 }}>

            {/* Summary row */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
              <label style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", fontWeight: 600, color: "#1E1E1E", display: "flex", alignItems: "center", gap: "4px" }}>
                Summary
                <span style={{ color: "#E52727" }}>*</span>
              </label>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                {/* Toggle */}
                <div
                  onClick={() => setAiOn(v => !v)}
                  style={{
                    width: "36px", height: "20px", borderRadius: "10px",
                    background: aiOn ? "#22C55E" : "rgba(30,30,30,0.15)",
                    position: "relative", cursor: "pointer", transition: "background 0.2s", flexShrink: 0,
                  }}
                >
                  <div style={{
                    position: "absolute", top: "2px",
                    left: aiOn ? "18px" : "2px",
                    width: "16px", height: "16px",
                    borderRadius: "50%", background: "#fff",
                    transition: "left 0.2s",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                  }} />
                </div>
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", fontWeight: 600, color: "#1E1E1E" }}>
                  Bugasura A.I.
                </span>
                <Info size={14} color="rgba(30,30,30,0.3)" strokeWidth={2} />
              </div>
            </div>

            {/* Summary input */}
            <input
              value={summary}
              onChange={e => setSummary(e.target.value)}
              style={{
                width: "100%", padding: "10px 14px",
                fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px",
                color: "#1E1E1E",
                background: "#ffffff",
                border: "1px solid rgba(30,30,30,0.15)",
                borderRadius: "8px",
                outline: "none",
                marginBottom: "10px",
                boxSizing: "border-box",
              }}
            />

            {/* AI Suggestions */}
            {showSuggestions && aiOn && (
              <div style={{
                background: "rgba(34,197,94,0.05)",
                border: "1px solid rgba(34,197,94,0.2)",
                borderRadius: "10px",
                padding: "12px 14px",
                marginBottom: "16px",
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                  <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", fontWeight: 700, color: "#15803D" }}>
                    Suggestions
                  </span>
                  <button onClick={() => setShowSuggestions(false)} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex" }}>
                    <X size={13} color="rgba(30,30,30,0.4)" strokeWidth={2} />
                  </button>
                </div>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" as const }}>
                  {[
                    "OTP not being received on mobile devices.",
                    "Mobile verification code delivery failure.",
                  ].map((s, i) => (
                    <button
                      key={i}
                      onClick={() => setSummary(s)}
                      style={{
                        display: "flex", alignItems: "center", gap: "6px",
                        fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px",
                        color: "#1E1E1E",
                        background: "#ffffff",
                        border: "1px solid rgba(30,30,30,0.12)",
                        borderRadius: "20px",
                        padding: "6px 12px",
                        cursor: "pointer",
                      }}
                    >
                      <span style={{ fontSize: "12px" }}>↗</span>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            <label style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", fontWeight: 600, color: "#1E1E1E", display: "block", marginBottom: "8px" }}>
              Description
            </label>
            <textarea
              defaultValue={description}
              rows={10}
              style={{
                width: "100%", padding: "14px",
                fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px",
                color: "#1E1E1E", lineHeight: "1.65",
                background: "rgba(34,197,94,0.04)",
                border: "1px solid rgba(34,197,94,0.18)",
                borderRadius: "10px",
                outline: "none", resize: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Right column */}
          <div style={{ width: "160px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            {/* Severity */}
            <div style={{
              display: "flex", alignItems: "center", gap: "9px",
              border: "1.5px solid rgba(229,39,39,0.3)",
              borderRadius: "10px", padding: "10px 14px",
              cursor: "pointer",
              background: "rgba(229,39,39,0.03)",
            }}>
              <div style={{ width: "16px", height: "16px", borderRadius: "50%", border: "2px solid #E52727", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#E52727" }} />
              </div>
              <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", fontWeight: 600, color: "#E52727" }}>Critical</span>
            </div>

            {/* Priority */}
            <div style={{
              display: "flex", alignItems: "center", gap: "9px",
              border: "1.5px solid rgba(30,30,30,0.12)",
              borderRadius: "10px", padding: "10px 14px",
              cursor: "pointer",
            }}>
              <ArrowUp size={16} color="#FFA840" strokeWidth={2.5} />
              <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", fontWeight: 600, color: "#1E1E1E" }}>P2</span>
            </div>

            {/* Tags */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              border: "1.5px solid rgba(30,30,30,0.12)",
              borderRadius: "10px", padding: "10px 14px",
              cursor: "pointer",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                <Tag size={14} color="rgba(30,30,30,0.4)" strokeWidth={2} />
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 500, color: "#29A5FF" }}>+Add Tags</span>
              </div>
              <span style={{
                fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700,
                color: "#29A5FF", background: "rgba(41,165,255,0.1)",
                padding: "1px 7px", borderRadius: "20px",
              }}>2</span>
            </div>

            {/* Status */}
            <div style={{
              display: "flex", alignItems: "center", gap: "9px",
              border: "1.5px solid rgba(30,30,30,0.12)",
              borderRadius: "10px", padding: "10px 14px",
              cursor: "pointer",
            }}>
              <Bookmark size={15} color="#22C55E" strokeWidth={2} />
              <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", fontWeight: 600, color: "#1E1E1E" }}>New</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "24px", paddingTop: "18px", borderTop: "1px solid rgba(30,30,30,0.07)" }}>
          <button
            onClick={onClose}
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", fontWeight: 600,
              color: "#1E1E1E", background: "#ffffff",
              border: "1.5px solid rgba(30,30,30,0.15)",
              borderRadius: "8px", padding: "9px 24px", cursor: "pointer",
            }}
          >
            Cancel
          </button>
          <button style={{
            fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", fontWeight: 600,
            color: "#ffffff", background: "#29A5FF",
            border: "none", borderRadius: "8px", padding: "9px 24px", cursor: "pointer",
          }}>
            Add Issue
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function IssuesPage() {
  const [modalOpen, setModalOpen] = useState(true);

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
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#29A5FF" }}>Issues</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#F5F5F3", border: "1px solid rgba(30,30,30,0.08)", borderRadius: "8px", padding: "7px 13px" }}>
            <Search size={13} color="rgba(30,30,30,0.35)" strokeWidth={2} />
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", color: "rgba(30,30,30,0.3)" }}>Search…</span>
          </div>
        </div>

        {/* Tabs */}
        <div style={{
          display: "flex", gap: "0", padding: "0 28px",
          borderBottom: "1px solid rgba(30,30,30,0.08)",
          flexShrink: 0,
        }}>
          {["Issues", "Reports", "Activity"].map(tab => {
            const active = tab === "Issues";
            return (
              <button key={tab} style={{
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: "14px", fontWeight: active ? 600 : 400,
                color: active ? "#29A5FF" : "rgba(30,30,30,0.45)",
                background: "none", border: "none",
                borderBottom: active ? "2px solid #29A5FF" : "2px solid transparent",
                padding: "14px 20px", cursor: "pointer", marginBottom: "-1px",
              }}>{tab}</button>
            );
          })}
        </div>

        {/* Hero banner */}
        <div style={{
          padding: "20px 28px 16px",
          borderBottom: "1px solid rgba(30,30,30,0.06)",
          flexShrink: 0,
          position: "relative",
          overflow: "hidden",
        }}>
          <h2 style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "20px", color: "#1E1E1E", margin: "0 0 4px" }}>
            The new way to close issues, faster.
          </h2>
          <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.45)", margin: 0 }}>
            Spend more time serving customers.
          </p>
          {/* Decorative top-right */}
          <div style={{ position: "absolute", top: "10px", right: "60px", display: "flex", alignItems: "flex-start", gap: "16px", pointerEvents: "none" }}>
            <Star size={14} color="#FFA840" fill="#FFA840" />
            <div style={{
              background: "#fff", border: "1px solid rgba(30,30,30,0.08)", borderRadius: "8px",
              padding: "8px 12px", boxShadow: "0 2px 10px rgba(0,0,0,0.06)", maxWidth: "200px",
            }}>
              <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", color: "rgba(30,30,30,0.5)", margin: "0 0 4px", lineHeight: 1.5 }}>
                User is unable to view the issues list after clicking on overview on using Sharable link
              </p>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "-8px" }}>
                {["#FFA840", "#29A5FF"].map((c, i) => (
                  <div key={i} style={{ width: "20px", height: "20px", borderRadius: "50%", background: c, border: "2px solid #fff", marginLeft: i > 0 ? "-6px" : 0 }} />
                ))}
              </div>
            </div>
            <Star size={10} color="#29A5FF" fill="#29A5FF" />
          </div>
          <button style={{ position: "absolute", top: "10px", right: "16px", background: "none", border: "none", cursor: "pointer" }}>
            <X size={15} color="rgba(30,30,30,0.3)" strokeWidth={2} />
          </button>
        </div>

        {/* All Issues header */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "16px 28px 12px",
          flexShrink: 0,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <h3 style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "20px", color: "#1E1E1E", margin: 0 }}>All Issues</h3>
            {/* Stats */}
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "18px", color: "#1E1E1E" }}>141</div>
                <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "10px", color: "rgba(30,30,30,0.4)", letterSpacing: "0.06em" }}>TOTAL</div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {/* Avatar stack */}
            <div style={{ display: "flex", alignItems: "center" }}>
              {["#FFA840", "#29A5FF", "#E52727"].map((c, i) => (
                <div key={i} style={{
                  width: "28px", height: "28px", borderRadius: "50%",
                  background: c, border: "2px solid #fff",
                  marginLeft: i > 0 ? "-8px" : 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "9px", color: "#fff" }}>
                    {["MS", "AM", "SL"][i]}
                  </span>
                </div>
              ))}
              <div style={{
                width: "28px", height: "28px", borderRadius: "50%",
                background: "rgba(30,30,30,0.08)", border: "2px solid #fff", marginLeft: "-8px",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontWeight: 600, fontSize: "9px", color: "rgba(30,30,30,0.5)" }}>+3</span>
              </div>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              style={{
                display: "flex", alignItems: "center", gap: "6px",
                fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", fontWeight: 600,
                color: "#ffffff", background: "#29A5FF",
                border: "none", borderRadius: "8px", padding: "8px 18px", cursor: "pointer",
              }}
            >
              <Plus size={15} strokeWidth={2.5} />
              Add Issue
            </button>
            <button style={{ background: "none", border: "none", cursor: "pointer", display: "flex" }}>
              <Mail size={17} color="rgba(30,30,30,0.4)" strokeWidth={1.8} />
            </button>
          </div>
        </div>

        {/* Stats row */}
        <div style={{ padding: "0 28px 12px", display: "flex", alignItems: "center", gap: "24px", flexShrink: 0 }}>
          {[
            { icon: <Bug size={16} color="#29A5FF" strokeWidth={2} />, value: "141", label: "TOTAL" },
            { icon: <CheckCircle size={16} color="#22C55E" strokeWidth={2} />, value: "0", label: "CLOSED" },
          ].map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {s.icon}
              <div>
                <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "16px", color: "#1E1E1E" }}>{s.value}</div>
                <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "9px", color: "rgba(30,30,30,0.4)", letterSpacing: "0.08em" }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Search + controls */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 28px 12px", flexShrink: 0 }}>
          <div style={{
            display: "flex", alignItems: "center", gap: "8px",
            background: "#F5F5F3", border: "1px solid rgba(30,30,30,0.08)",
            borderRadius: "8px", padding: "8px 14px", width: "220px",
          }}>
            <Search size={13} color="rgba(30,30,30,0.35)" strokeWidth={2} />
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.35)" }}>Search</span>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <List size={16} color="rgba(30,30,30,0.4)" strokeWidth={1.8} />
            <GridIcon size={16} color="rgba(30,30,30,0.4)" strokeWidth={1.8} />
            <Download size={16} color="rgba(30,30,30,0.4)" strokeWidth={1.8} />
          </div>
        </div>

        {/* Issue list */}
        <div style={{ flex: 1, overflowY: "auto", padding: "0 28px 24px" }}>
          {ISSUES.map((issue, i) => {
            const sev = SEVERITY_STYLES[issue.severity];
            return (
              <div key={i} style={{
                padding: "14px 0",
                borderBottom: "1px solid rgba(30,30,30,0.06)",
                display: "grid",
                gridTemplateColumns: "80px 80px 1fr auto 60px 60px",
                alignItems: "start",
                gap: "12px",
              }}>
                {/* ID */}
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", fontWeight: 600, color: "rgba(30,30,30,0.4)", paddingTop: "2px" }}>
                  {issue.id}
                </span>
                {/* Severity */}
                <span style={{
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontSize: "11px", fontWeight: 700,
                  color: sev.color, background: sev.bg,
                  padding: "3px 8px", borderRadius: "4px",
                  letterSpacing: "0.03em", alignSelf: "start",
                }}>
                  {issue.severity}
                </span>
                {/* Title + meta */}
                <div>
                  <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", fontWeight: 600, color: "#1E1E1E", marginBottom: "5px", lineHeight: 1.4 }}>
                    {issue.title}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" as const }}>
                    {issue.tags.map(tag => (
                      <span key={tag} style={{
                        fontFamily: "var(--font-inter), Inter, sans-serif",
                        fontSize: "11px", fontWeight: 500,
                        color: "rgba(30,30,30,0.5)",
                        background: "rgba(30,30,30,0.05)",
                        border: "1px solid rgba(30,30,30,0.08)",
                        padding: "2px 8px", borderRadius: "4px",
                      }}>{tag}</span>
                    ))}
                    <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", color: "rgba(30,30,30,0.35)" }}>
                      {issue.meta}
                    </span>
                  </div>
                </div>
                {/* Status */}
                <span style={{
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontSize: "12.5px", fontWeight: 600,
                  color: "#22C55E",
                }}>
                  {issue.status}
                </span>
                {/* Assign */}
                <UserCircle size={16} color="rgba(30,30,30,0.25)" strokeWidth={1.6} style={{ justifySelf: "center" }} />
                {/* Comments */}
                <div style={{ display: "flex", alignItems: "center", gap: "4px", justifySelf: "end" }}>
                  <MessageCircle size={13} color="rgba(30,30,30,0.3)" strokeWidth={1.8} />
                  <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11.5px", color: "rgba(30,30,30,0.4)" }}>{issue.comments}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && <AddIssueModal onClose={() => setModalOpen(false)} />}

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
  );
}

function Star({ size, color, fill, style }: { size: number; color: string; fill?: string; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill ?? "none"} stroke={color} strokeWidth={2} style={style}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
