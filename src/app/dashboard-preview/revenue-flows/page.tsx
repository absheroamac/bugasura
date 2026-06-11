"use client";

import { useState } from "react";
import {
  Eye, TrendingUp, BookOpen, FileText, TestTube,
  Zap, Database, Bug, Settings, Trash2,
  CheckCircle2, AlertTriangle, Plus, Minus, ChevronLeft,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { label: "Eagle Eye",      Icon: Eye,        count: null, active: false },
  { label: "Revenue Flows",  Icon: TrendingUp, count: null, active: true  },
  { label: "Knowledge Base", Icon: BookOpen,   count: 10,   active: false },
  { label: "Requirements",   Icon: FileText,   count: 26,   active: false },
  { label: "Test Repo",      Icon: TestTube,   count: 350,  active: false },
  { label: "Sprints",        Icon: Zap,        count: 6,    active: false },
  { label: "Test Data",      Icon: Database,   count: 2,    active: false },
  { label: "Issues",         Icon: Bug,        count: 141,  active: false },
  { label: "Settings",       Icon: Settings,   count: null, active: false },
  { label: "Trash",          Icon: Trash2,     count: null, active: false },
];

const FLOWS = [
  { name: "Untitled", impact: null, status: "ok", active: false },
  { name: "Streamline Multi-Payment Checkout", impact: "$$$", status: "warn", active: true },
  { name: "Streamlined Secure Checkout with Auto OTP", impact: "$", status: "warn", active: false },
];

interface FlowNode { id: string; label: string; tag?: string; tagColor?: string; col: number; row: number; tone: "white" | "red" | "orange" }

const NODES: FlowNode[] = [
  { id: "n1", label: "User initiates checkout", tag: "$$$ START", tagColor: "#16A34A", col: 0, row: 0, tone: "white" },
  { id: "n2", label: "User selects payment method", tag: "$", tagColor: "#E52727", col: 1, row: 0, tone: "red" },
  { id: "n3", label: "Payment method processing", tag: "$", tagColor: "#E52727", col: 2, row: 0, tone: "red" },
  { id: "n4", label: "Successful transaction", tag: "$", tagColor: "#FFA840", col: 3, row: 0, tone: "orange" },

  { id: "n5", label: "Dynamic payment routing", tag: "$", tagColor: "#999", col: 0, row: 1, tone: "white" },
  { id: "n6", label: "User retries with another method", tag: "$", tagColor: "#E52727", col: 1, row: 1, tone: "red" },
  { id: "n7", label: "User notified of failure", tag: "$", tagColor: "#E52727", col: 2, row: 1, tone: "red" },
  { id: "n8", label: "Transaction failed", tag: "$", tagColor: "#E52727", col: 3, row: 1, tone: "red" },

  { id: "n9", label: "Payment submitted", tag: "$", tagColor: "#999", col: 0, row: 2, tone: "white" },
  { id: "n10", label: "Payment gateway selection", tag: "END", tagColor: "#E52727", col: 1, row: 2, tone: "red" },
];

const TONE_STYLES: Record<FlowNode["tone"], { bg: string; border: string }> = {
  white:  { bg: "#ffffff", border: "rgba(30,30,30,0.1)" },
  red:    { bg: "rgba(229,39,39,0.06)", border: "rgba(229,39,39,0.18)" },
  orange: { bg: "rgba(255,168,64,0.1)", border: "rgba(255,168,64,0.3)" },
};

const COL_W = 270;
const ROW_H = 130;
const NODE_W = 220;
const NODE_H = 60;

function pos(node: FlowNode) {
  return { x: node.col * COL_W, y: node.row * ROW_H };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RevenueFlowsPage() {
  const [zoom, setZoom] = useState(80);

  const byId: Record<string, FlowNode> = Object.fromEntries(NODES.map(n => [n.id, n]));

  // connections: [from, to, kind]
  const edges: [string, string][] = [
    ["n1", "n2"], ["n2", "n3"], ["n3", "n4"],
    ["n4", "n8"], ["n8", "n7"], ["n7", "n6"], ["n6", "n5"],
    ["n5", "n9"], ["n9", "n10"],
  ];

  const totalW = 4 * COL_W;
  const totalH = 3 * ROW_H;

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
              <Eye size={13} color="rgba(255,255,255,0.3)" strokeWidth={2} style={{ display: "none" }} />
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
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: "#ffffff", position: "relative" }}>

        {/* Header / banner */}
        <div style={{
          position: "relative",
          background: "linear-gradient(135deg, #ffffff 40%, #EAF6FF 100%)",
          borderBottom: "1px solid rgba(30,30,30,0.06)",
          padding: "24px 28px",
          flexShrink: 0,
          overflow: "hidden",
        }}>
          <h1 style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "24px", color: "#1E1E1E", margin: "0 0 6px" }}>
            Revenue Flows
          </h1>
          <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", color: "rgba(30,30,30,0.45)", margin: 0, maxWidth: "520px" }}>
            Visualize your top 10 business critical flows and understand revenue impact in seconds
          </p>

          {/* Decorative shapes */}
          <div style={{ position: "absolute", top: "20px", right: "40px", display: "flex", alignItems: "center", gap: "8px", pointerEvents: "none" }}>
            <div style={{ background: "#ffffff", border: "1px solid rgba(30,30,30,0.08)", borderRadius: "8px", padding: "8px 14px", boxShadow: "0 4px 16px rgba(0,0,0,0.05)" }}>
              <div style={{ width: "60px", height: "5px", borderRadius: "3px", background: "rgba(41,165,255,0.25)", marginBottom: "5px" }} />
              <div style={{ width: "40px", height: "5px", borderRadius: "3px", background: "rgba(30,30,30,0.08)" }} />
            </div>
            <div style={{ width: "30px", height: "30px", borderRadius: "8px", background: "rgba(41,165,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <TrendingUp size={14} color="#29A5FF" />
            </div>
            <div style={{ width: "30px", height: "30px", borderRadius: "8px", background: "rgba(255,168,64,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <AlertTriangle size={14} color="#FFA840" />
            </div>
          </div>
        </div>

        {/* Body */}
        <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>

          {/* Flow list */}
          <div style={{ width: "260px", flexShrink: 0, borderRight: "1px solid rgba(30,30,30,0.06)", overflowY: "auto", padding: "16px" }}>
            {FLOWS.map(f => (
              <div key={f.name} style={{
                display: "flex", alignItems: "flex-start", gap: "10px",
                padding: "12px 12px", borderRadius: "10px", marginBottom: "4px", cursor: "pointer",
                background: f.active ? "rgba(41,165,255,0.08)" : "transparent",
              }}>
                {f.status === "ok"
                  ? <CheckCircle2 size={15} color="#16A34A" style={{ marginTop: "2px", flexShrink: 0 }} />
                  : <AlertTriangle size={15} color="#E52727" style={{ marginTop: "2px", flexShrink: 0 }} />
                }
                <div>
                  <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: f.active ? 600 : 500, color: "#1E1E1E", lineHeight: 1.4 }}>
                    {f.name}
                  </div>
                  {f.impact && (
                    <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700, color: "rgba(30,30,30,0.35)" }}>{f.impact}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Diagram */}
          <div style={{ flex: 1, position: "relative", overflow: "auto", background: "#FAFAF8" }}>
            {/* dotted bg */}
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: "radial-gradient(rgba(30,30,30,0.06) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }} />

            {/* Flow title bar */}
            <div style={{ position: "sticky", top: 0, left: 0, zIndex: 2, padding: "20px 24px 0" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", background: "#ffffff", border: "1px solid rgba(30,30,30,0.08)", borderRadius: "10px", padding: "12px 20px", boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}>
                <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "16px", color: "#1E1E1E" }}>Streamline Multi-Payment Checkout</span>
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 700, color: "rgba(30,30,30,0.35)" }}>$$$</span>
              </div>
            </div>

            {/* Diagram canvas */}
            <div style={{
              position: "relative",
              transform: `scale(${zoom / 100})`,
              transformOrigin: "top left",
              width: `${totalW + 100}px`,
              height: `${totalH + 100}px`,
              padding: "40px 40px 80px",
            }}>
              <svg width={totalW + 100} height={totalH + 100} style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
                {edges.map(([from, to], i) => {
                  const a = byId[from], b = byId[to];
                  const pa = pos(a), pb = pos(b);
                  let x1, y1, x2, y2;
                  if (a.row === b.row) {
                    // horizontal
                    if (pa.x < pb.x) {
                      x1 = pa.x + NODE_W + 40; y1 = pa.y + NODE_H / 2 + 40;
                      x2 = pb.x + 40; y2 = pb.y + NODE_H / 2 + 40;
                    } else {
                      x1 = pa.x + 40; y1 = pa.y + NODE_H / 2 + 40;
                      x2 = pb.x + NODE_W + 40; y2 = pb.y + NODE_H / 2 + 40;
                    }
                  } else {
                    // vertical
                    x1 = pa.x + NODE_W / 2 + 40; y1 = pa.y + NODE_H + 40;
                    x2 = pb.x + NODE_W / 2 + 40; y2 = pb.y + 40;
                  }
                  return (
                    <g key={i}>
                      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(30,30,30,0.25)" strokeWidth={1.5} markerEnd="url(#arrow)" />
                    </g>
                  );
                })}
                {/* special connector: n4 down to n8 */}
                <line x1={pos(byId.n4).x + NODE_W / 2 + 40} y1={pos(byId.n4).y + NODE_H + 40} x2={pos(byId.n8).x + NODE_W / 2 + 40} y2={pos(byId.n8).y + 40} stroke="rgba(30,30,30,0.25)" strokeWidth={1.5} markerEnd="url(#arrow)" />
                <defs>
                  <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L6,3 z" fill="rgba(30,30,30,0.35)" />
                  </marker>
                </defs>
              </svg>

              {NODES.map(n => {
                const p = pos(n);
                const tone = TONE_STYLES[n.tone];
                return (
                  <div key={n.id} style={{
                    position: "absolute", left: p.x + 40, top: p.y + 40,
                    width: NODE_W, height: NODE_H,
                    background: tone.bg, border: `1px solid ${tone.border}`,
                    borderRadius: "10px", padding: "10px 14px",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
                  }}>
                    <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#1E1E1E", lineHeight: 1.3 }}>{n.label}</span>
                    {n.tag && (
                      <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "10px", fontWeight: 700, color: n.tagColor, whiteSpace: "nowrap", marginLeft: "8px" }}>{n.tag}</span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Collaborators */}
            <div style={{ position: "absolute", top: "20px", right: "24px", display: "flex", alignItems: "center" }}>
              {["#29A5FF", "#E52727", "#FFA840"].map((c, i) => (
                <div key={i} style={{
                  width: "28px", height: "28px", borderRadius: "50%", background: c,
                  border: "2px solid #ffffff", marginLeft: i === 0 ? 0 : "-8px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "10px", fontWeight: 700, color: "#fff",
                }}>{["AK","RJ",""][i] || ""}</div>
              ))}
              <div style={{
                width: "28px", height: "28px", borderRadius: "50%", background: "rgba(30,30,30,0.08)",
                border: "2px solid #ffffff", marginLeft: "-8px",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "10px", fontWeight: 700, color: "#1E1E1E",
              }}>+3</div>
            </div>

            {/* Zoom controls */}
            <div style={{
              position: "sticky", bottom: "20px", left: "100%", transform: "translateX(-100%)",
              display: "flex", alignItems: "center", gap: "10px",
              background: "#ffffff", border: "1px solid rgba(30,30,30,0.08)", borderRadius: "24px",
              padding: "8px 14px", boxShadow: "0 4px 16px rgba(0,0,0,0.06)", width: "fit-content",
              marginLeft: "auto", marginRight: "20px", marginBottom: "20px",
            }}>
              <button onClick={() => setZoom(z => Math.max(40, z - 10))} style={{ background: "none", border: "none", cursor: "pointer", display: "flex" }}>
                <Minus size={14} color="rgba(30,30,30,0.5)" strokeWidth={2} />
              </button>
              <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", fontWeight: 600, color: "#1E1E1E", width: "32px", textAlign: "center" }}>{zoom}%</span>
              <button onClick={() => setZoom(z => Math.min(150, z + 10))} style={{ background: "none", border: "none", cursor: "pointer", display: "flex" }}>
                <Plus size={14} color="rgba(30,30,30,0.5)" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>

        {/* collapse handle */}
        <button aria-label="Collapse panel" style={{
          position: "absolute", top: "50%", right: 0, transform: "translateY(-50%)",
          width: "24px", height: "48px", background: "#ffffff",
          border: "1px solid rgba(30,30,30,0.08)", borderRadius: "8px 0 0 8px",
          display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
        }}>
          <ChevronLeft size={14} color="rgba(30,30,30,0.4)" />
        </button>
      </div>
    </div>
  );
}
