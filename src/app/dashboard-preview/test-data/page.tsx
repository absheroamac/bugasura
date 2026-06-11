"use client";

import { useState } from "react";
import {
  Eye, TrendingUp, BookOpen, FileText, TestTube,
  Zap, Database, Bug, Settings, Trash2,
  ChevronRight, ChevronLeft, ChevronUp, ChevronDown, Search, Plus, X,
  Paperclip, FileJson, Pencil, Star,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { label: "Eagle Eye",      Icon: Eye,        count: null, active: false },
  { label: "Revenue Flows",  Icon: TrendingUp, count: null, active: false },
  { label: "Knowledge Base", Icon: BookOpen,   count: 10,   active: false },
  { label: "Requirements",   Icon: FileText,   count: 26,   active: false },
  { label: "Test Repo",      Icon: TestTube,   count: 350,  active: false },
  { label: "Sprints",        Icon: Zap,        count: 6,    active: false },
  { label: "Test Data",      Icon: Database,   count: null, active: true  },
  { label: "Issues",         Icon: Bug,        count: 141,  active: false },
  { label: "Settings",       Icon: Settings,   count: null, active: false },
  { label: "Trash",          Icon: Trash2,     count: null, active: false },
];

const ENVIRONMENTS = ["Globals", "UAT", "QA"];

interface Variable { key: string; value: string; default?: boolean; checked?: boolean; editable?: boolean }
const VARIABLES: Variable[] = [
  { key: "baseUrl",        value: "https://acme.io/",          default: true },
  { key: "apiBaseUrl",     value: "https://payments.acme.in",   default: true },
  { key: "x-merchantid",   value: "x-merchantid" },
  { key: "x-routing-id",   value: "customer_1122" },
  { key: "customer_phone", value: "9988665522" },
  { key: "customer_email", value: "customer@gmail.com" },
  { key: "order_id",       value: "14183944763", checked: true, editable: true },
  { key: "Authorization",  value: "QTA0QTNDRFFFRODg1Og==" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TestDataPage() {
  const [activeEnv, setActiveEnv] = useState("Globals");
  const [variablesOpen, setVariablesOpen] = useState(true);
  const [filesOpen, setFilesOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

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
            {[Star, Plus, ChevronUp, Zap].map((Ic, i) => (
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

        {/* Top bar */}
        <div style={{
          background: "#ffffff", borderBottom: "1px solid rgba(30,30,30,0.07)",
          padding: "0 28px", height: "52px",
          display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.38)", cursor: "pointer" }}>Project</span>
            <ChevronRight size={13} color="rgba(30,30,30,0.25)" />
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#29A5FF" }}>Test Data</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#F5F5F3", border: "1px solid rgba(30,30,30,0.08)", borderRadius: "8px", padding: "7px 13px" }}>
            <Search size={13} color="rgba(30,30,30,0.35)" strokeWidth={2} />
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", color: "rgba(30,30,30,0.3)" }}>Search…</span>
          </div>
        </div>

        {/* Scrollable content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "20px 28px 24px" }}>

          {/* Banner */}
          {bannerVisible && (
            <div style={{
              position: "relative",
              background: "linear-gradient(135deg, #EAF6FF 0%, #ffffff 65%)",
              border: "1px solid rgba(41,165,255,0.12)",
              borderRadius: "16px",
              padding: "22px 28px",
              marginBottom: "20px",
              overflow: "hidden",
            }}>
              <button
                onClick={() => setBannerVisible(false)}
                aria-label="Dismiss banner"
                style={{ position: "absolute", top: "16px", right: "16px", background: "none", border: "none", cursor: "pointer", padding: "4px", display: "flex" }}
              >
                <X size={16} color="rgba(30,30,30,0.35)" strokeWidth={2} />
              </button>

              <h1 style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "22px", color: "#1E1E1E", margin: "0 0 4px" }}>
                Test Data — One Place, Zero Rework
              </h1>
              <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", color: "rgba(30,30,30,0.45)", margin: 0, maxWidth: "520px" }}>
                Create once, reuse always. Centralised test data for faster QA and seamless team sync.
              </p>

              {/* Decorative icons */}
              <div style={{ position: "absolute", top: "20px", right: "70px", display: "flex", alignItems: "flex-start", gap: "10px", pointerEvents: "none" }}>
                <Star size={14} color="#FFA840" fill="#FFA840" style={{ marginTop: "2px" }} />
                <div style={{ width: "56px", height: "70px", background: "#22C55E", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", transform: "rotate(-6deg)" }}>
                  <Paperclip size={26} color="#ffffff" strokeWidth={1.8} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "10px" }}>
                  <div style={{ background: "#ffffff", border: "1px solid rgba(30,30,30,0.1)", borderRadius: "8px", padding: "5px 10px", display: "flex", alignItems: "center", gap: "5px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
                    <FileJson size={12} color="#FFA840" strokeWidth={2} />
                    <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "10.5px", fontWeight: 600, color: "rgba(30,30,30,0.55)" }}>JSON</span>
                  </div>
                  <div style={{ background: "#ffffff", border: "1px solid rgba(30,30,30,0.1)", borderRadius: "8px", padding: "5px 10px", display: "flex", alignItems: "center", gap: "5px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
                    <FileText size={12} color="#29A5FF" strokeWidth={2} />
                    <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "10.5px", fontWeight: 600, color: "rgba(30,30,30,0.55)" }}>TXT</span>
                  </div>
                </div>
                <Star size={10} color="#E52727" fill="#E52727" style={{ marginTop: "30px" }} />
              </div>
            </div>
          )}

          {/* Two-column layout */}
          <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: "16px", alignItems: "start" }}>

            {/* ── Environments panel ── */}
            <div style={{ background: "#ffffff", borderRadius: "14px", border: "1px solid rgba(30,30,30,0.07)", padding: "18px", position: "relative" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
                <h2 style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "17px", color: "#1E1E1E", margin: 0 }}>Environments</h2>
                <button aria-label="Add environment" style={{ width: "26px", height: "26px", borderRadius: "8px", border: "1px solid rgba(30,30,30,0.1)", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                  <Plus size={14} color="rgba(30,30,30,0.5)" strokeWidth={2} />
                </button>
              </div>
              {ENVIRONMENTS.map(env => (
                <div
                  key={env}
                  onClick={() => setActiveEnv(env)}
                  style={{
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    fontSize: "13.5px",
                    fontWeight: env === activeEnv ? 600 : 400,
                    color: env === activeEnv ? "#29A5FF" : "#1E1E1E",
                    background: env === activeEnv ? "rgba(41,165,255,0.08)" : "transparent",
                    border: env === activeEnv ? "1px solid rgba(41,165,255,0.18)" : "1px solid transparent",
                    borderRadius: "8px",
                    padding: "10px 12px",
                    marginBottom: "4px",
                    cursor: "pointer",
                  }}
                >
                  {env}
                </div>
              ))}

              {/* Collapse handle */}
              <div style={{ position: "absolute", top: "20px", right: "-10px", width: "20px", height: "20px", borderRadius: "50%", background: "#ffffff", border: "1px solid rgba(30,30,30,0.1)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                <ChevronLeft size={11} color="rgba(30,30,30,0.4)" strokeWidth={2} />
              </div>
            </div>

            {/* ── Right: Globals content ── */}
            <div>
              <h2 style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "20px", color: "#1E1E1E", margin: "0 0 14px" }}>{activeEnv}</h2>

              {/* Variables card */}
              <div style={{ background: "#ffffff", borderRadius: "14px", border: "1px solid rgba(30,30,30,0.07)", overflow: "hidden", marginBottom: "16px" }}>
                <button
                  onClick={() => setVariablesOpen(o => !o)}
                  style={{ width: "100%", display: "flex", alignItems: "center", gap: "8px", padding: "16px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                >
                  {variablesOpen ? <ChevronUp size={16} color="rgba(30,30,30,0.4)" strokeWidth={2} /> : <ChevronDown size={16} color="rgba(30,30,30,0.4)" strokeWidth={2} />}
                  <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "16px", color: "#1E1E1E" }}>Variables</span>
                </button>

                {variablesOpen && (
                  <div>
                    {/* Table header */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: "10px 20px", borderTop: "1px solid rgba(30,30,30,0.06)", background: "rgba(30,30,30,0.02)" }}>
                      <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", fontWeight: 600, color: "rgba(30,30,30,0.45)" }}>Variable</span>
                      <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", fontWeight: 600, color: "rgba(30,30,30,0.45)" }}>Value</span>
                    </div>

                    {VARIABLES.map((v) => (
                      <div key={v.key} style={{
                        display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center",
                        padding: "13px 20px",
                        borderBottom: "1px solid rgba(30,30,30,0.05)",
                        background: v.checked ? "rgba(41,165,255,0.04)" : "transparent",
                        gap: "12px",
                      }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          {v.checked !== undefined && (
                            <div style={{
                              width: "16px", height: "16px", borderRadius: "4px", flexShrink: 0,
                              background: v.checked ? "#29A5FF" : "#ffffff",
                              border: v.checked ? "none" : "1px solid rgba(30,30,30,0.2)",
                              display: "flex", alignItems: "center", justifyContent: "center",
                            }}>
                              {v.checked && <span style={{ color: "#fff", fontSize: "10px", fontWeight: 700, lineHeight: 1 }}>✓</span>}
                            </div>
                          )}
                          <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", fontWeight: 600, color: "#1E1E1E" }}>{v.key}</span>
                          {v.default && (
                            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "10.5px", fontWeight: 600, color: "rgba(30,30,30,0.5)", background: "rgba(30,30,30,0.06)", padding: "2px 8px", borderRadius: "20px" }}>Default</span>
                          )}
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
                          <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", color: "#1E1E1E", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" as const }}>{v.value}</span>
                          {v.editable && (
                            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
                              <Pencil size={14} color="rgba(30,30,30,0.35)" strokeWidth={1.8} style={{ cursor: "pointer" }} />
                              <Trash2 size={14} color="rgba(30,30,30,0.35)" strokeWidth={1.8} style={{ cursor: "pointer" }} />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}

                    {/* New variable row */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: "13px 20px", gap: "12px" }}>
                      <input
                        placeholder="Enter variable name"
                        style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", color: "rgba(30,30,30,0.35)", border: "none", outline: "none", background: "transparent" }}
                      />
                      <input
                        placeholder="Enter value"
                        style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", color: "rgba(30,30,30,0.35)", border: "none", outline: "none", background: "transparent" }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Test Files card */}
              <div style={{ background: "#ffffff", borderRadius: "14px", border: "1px solid rgba(30,30,30,0.07)", overflow: "hidden" }}>
                <button
                  onClick={() => setFilesOpen(o => !o)}
                  style={{ width: "100%", display: "flex", alignItems: "center", gap: "8px", padding: "16px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                >
                  {filesOpen ? <ChevronUp size={16} color="rgba(30,30,30,0.4)" strokeWidth={2} /> : <ChevronDown size={16} color="rgba(30,30,30,0.4)" strokeWidth={2} />}
                  <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "16px", color: "#1E1E1E" }}>Test Files</span>
                </button>
                {filesOpen && (
                  <div style={{ padding: "0 20px 20px" }}>
                    <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.45)", margin: 0 }}>
                      No test files uploaded yet.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
