"use client";

import {
  Eye, TrendingUp, BookOpen, FileText, TestTube,
  Zap, Database, Bug, Settings, Trash2,
  ChevronRight, Search, MessageCircle,
  CheckCircle2, Play, BarChart2, Plus, Info, RefreshCw,
  ExternalLink, PauseCircle,
} from "lucide-react";
import Heading from "@/components/ui/Heading";

const NAV_ITEMS = [
  { label: "Eagle Eye",      Icon: Eye,       count: null, active: false },
  { label: "Revenue Flows",  Icon: TrendingUp, count: null, active: false },
  { label: "Knowledge Base", Icon: BookOpen,   count: 10,   active: false },
  { label: "Requirements",   Icon: FileText,   count: 26,   active: false },
  { label: "Test Repo",      Icon: TestTube,   count: 350,  active: false },
  { label: "Sprints",        Icon: Zap,        count: 6,    active: true  },
  { label: "Test Data",      Icon: Database,   count: null, active: false },
  { label: "Issues",         Icon: Bug,        count: 141,  active: false },
  { label: "Settings",       Icon: Settings,   count: null, active: false },
  { label: "Trash",          Icon: Trash2,     count: null, active: false },
];

type StepStatus = "completed" | "active" | "upcoming";
interface Step { label: string; status: StepStatus; Icon: React.ElementType }
const STEPS: Step[] = [
  { label: "Sprint",   status: "completed", Icon: CheckCircle2 },
  { label: "Refine",   status: "completed", Icon: CheckCircle2 },
  { label: "Plan",     status: "completed", Icon: CheckCircle2 },
  { label: "Enrich",   status: "completed", Icon: CheckCircle2 },
  { label: "Coverage", status: "completed", Icon: CheckCircle2 },
  { label: "Generate", status: "active",    Icon: Plus },
  { label: "Tests",    status: "upcoming",  Icon: FileText },
  { label: "Runs",     status: "upcoming",  Icon: Play },
  { label: "Reports",  status: "upcoming",  Icon: BarChart2 },
];

const TEST_CASES = [
  { category: "YourApp_HyperCheckout",                   desc: "Business Critical Flows",            pause: false },
  { category: "Unified_Checkout_Experience",              desc: "Support for multiple payment methods", pause: false },
  { category: "Authentication_and_Convenience_Features",  desc: "Auto OTP Read",                      pause: true  },
  { category: "Authentication_and_Convenience_Features",  desc: "1 Click Card Checkout",              pause: false },
  { category: "Transaction_Resilience",                   desc: "Auto Retry Engine",                  pause: false },
  { category: "Checkout_Experience_Customization",        desc: "No Code Design Studio",              pause: false },
  { category: "Payment_Routing_and_Orchestration",        desc: "Dynamic Payment Routing",            pause: false },
];

const LOGS = [
  { msg: "Syed Rehman has started generating the test cases.", time: "6th Apr, 2026\n06:49AM" },
  { msg: "Generating Test Cases...",                           time: "6th Apr, 2026\n06:50PM" },
  { msg: "Generating test cases for Business Critical Flows",  time: "6th Apr, 2026\n06:51PM" },
  { msg: "Generating test cases for Auto Retry Engine",        time: "6th Apr, 2026\n06:51PM" },
  { msg: "Generating test cases for Support for multiple payment methods", time: "6th Apr, 2026\n06:51PM" },
  { msg: "Generating test cases for Platform Integrations",   time: "6th Apr, 2026\n06:51PM" },
  { msg: "Generating test cases for Order Status API",         time: "6th Apr, 2026\n06:51PM" },
  { msg: "Generating test cases for Auto OTP Read",            time: "6th Apr, 2026\n06:51PM" },
  { msg: "Generating test cases for 1 Click Card Checkout",   time: "6th Apr, 2026\n06:51PM" },
  { msg: "Generating test cases for Dynamic Payment Routing",  time: "6th Apr, 2026\n06:51PM" },
  { msg: "Generating test cases for No Code Design Studio",    time: "6th Apr, 2026\n06:51PM" },
  { msg: "Generating test cases for Create Order API",         time: "6th Apr, 2026\n06:51PM" },
];

export default function SprintGeneratePage() {
  return (
    <div style={{ display: "flex", height: "100vh", background: "#F2EFE8", fontFamily: "var(--font-inter), Inter, sans-serif", overflow: "hidden" }}>
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
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#29A5FF" }}>Generate Test Cases</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#F5F5F3", border: "1px solid rgba(30,30,30,0.08)", borderRadius: "8px", padding: "7px 13px" }}>
            <Search size={13} color="rgba(30,30,30,0.35)" strokeWidth={2} />
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", color: "rgba(30,30,30,0.3)" }}>Search…</span>
          </div>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "20px 28px 24px" }}>
          <Heading level="step" as="h1" style={{ fontSize: "24px", letterSpacing: "-0.02em", color: "#1E1E1E", marginBottom: "16px" }}>Acme HyperCheckout</Heading>

          {/* Step bar */}
          <div style={{ background: "#ffffff", borderRadius: "12px", border: "1px solid rgba(30,30,30,0.07)", padding: "12px 20px", marginBottom: "20px", display: "flex", alignItems: "center" }}>
            {STEPS.map((step, i) => (
              <div key={step.label} style={{ display: "flex", alignItems: "center", flex: i < STEPS.length - 1 ? 1 : "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "5px 13px", borderRadius: "20px", flexShrink: 0, background: step.status === "active" ? "#29A5FF" : step.status === "completed" ? "rgba(22,163,74,0.08)" : "rgba(30,30,30,0.03)", border: step.status === "active" ? "1px solid #29A5FF" : step.status === "completed" ? "1px solid rgba(22,163,74,0.18)" : "1px solid rgba(30,30,30,0.08)" }}>
                  {step.status === "completed" ? <CheckCircle2 size={12} color="#16a34a" strokeWidth={2.5} /> : <step.Icon size={12} color={step.status === "active" ? "#fff" : "rgba(30,30,30,0.35)"} strokeWidth={step.status === "active" ? 2.5 : 1.8} />}
                  <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11.5px", fontWeight: step.status === "upcoming" ? 400 : 600, color: step.status === "active" ? "#fff" : step.status === "completed" ? "#16a34a" : "rgba(30,30,30,0.38)" }}>{step.label}</span>
                </div>
                {i < STEPS.length - 1 && <div style={{ flex: 1, height: "1.5px", minWidth: "4px", background: step.status === "completed" ? "rgba(22,163,74,0.2)" : "rgba(30,30,30,0.08)" }} />}
              </div>
            ))}
          </div>

          {/* Two-column: test cases + logs */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "16px", alignItems: "start" }}>

            {/* Left: test cases */}
            <div style={{ background: "#ffffff", borderRadius: "12px", border: "1px solid rgba(30,30,30,0.07)", overflow: "hidden" }}>
              <div style={{ padding: "18px 22px 14px" }}>
                <h2 style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "17px", color: "#1E1E1E", margin: "0 0 5px" }}>Generate Test Cases</h2>
                <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.45)", margin: "0 0 14px" }}>Testpert generates test cases, letting you track their progress and view results.</p>
                {/* Progress row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(22,163,74,0.05)", border: "1px solid rgba(22,163,74,0.14)", borderRadius: "10px", padding: "11px 16px" }}>
                  <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "14px", color: "#1E1E1E" }}>Testpert Progress</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", background: "rgba(22,163,74,0.1)", border: "1px solid rgba(22,163,74,0.2)", padding: "4px 12px", borderRadius: "20px" }}>
                    <CheckCircle2 size={13} color="#16a34a" strokeWidth={2.5} />
                    <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", fontWeight: 600, color: "#16a34a" }}>Completed</span>
                  </div>
                </div>
              </div>

              {/* Case list */}
              {TEST_CASES.map((tc, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", padding: "13px 22px", borderTop: "1px solid rgba(30,30,30,0.05)", gap: "12px" }}>
                  <CheckCircle2 size={16} color="#16a34a" strokeWidth={2} style={{ flexShrink: 0 }} />
                  <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "#1E1E1E", lineHeight: 1.5, margin: 0, flex: 1 }}>
                    <span style={{ fontWeight: 600 }}>{tc.category}</span>
                    <span style={{ color: "rgba(30,30,30,0.45)" }}>: {tc.desc}</span>
                  </p>
                  {tc.pause && <PauseCircle size={16} color="rgba(30,30,30,0.25)" strokeWidth={1.8} style={{ flexShrink: 0 }} />}
                  <RefreshCw size={15} color="rgba(30,30,30,0.25)" strokeWidth={1.8} style={{ flexShrink: 0 }} />
                  <button style={{ display: "flex", alignItems: "center", gap: "5px", fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", fontWeight: 600, color: "#29A5FF", background: "rgba(41,165,255,0.08)", border: "1px solid rgba(41,165,255,0.18)", borderRadius: "8px", padding: "5px 13px", cursor: "pointer", flexShrink: 0 }}>
                    <ExternalLink size={11} strokeWidth={2.5} />
                    View
                  </button>
                </div>
              ))}
            </div>

            {/* Right: Logs */}
            <div style={{ background: "#EDF7FC", borderRadius: "12px", border: "1px solid rgba(41,165,255,0.12)", overflow: "hidden" }}>
              <div style={{ padding: "14px 18px", borderBottom: "1px solid rgba(41,165,255,0.1)", display: "flex", alignItems: "center", gap: "8px" }}>
                <FileText size={14} color="#0077B6" strokeWidth={2} />
                <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "14px", color: "#1E1E1E" }}>Logs</span>
              </div>
              <div style={{ overflowY: "auto", maxHeight: "500px" }}>
                {LOGS.map((log, i) => (
                  <div key={i} style={{ padding: "10px 18px", borderBottom: i < LOGS.length - 1 ? "1px solid rgba(41,165,255,0.08)" : "none", display: "flex", gap: "8px", alignItems: "flex-start" }}>
                    <Info size={12} color="#0077B6" strokeWidth={2} style={{ flexShrink: 0, marginTop: "3px" }} />
                    <div style={{ flex: 1 }}>
                      <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", color: "#1E1E1E", lineHeight: 1.5, margin: "0 0 3px" }}>{log.msg}</p>
                      <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "10.5px", color: "rgba(30,30,30,0.4)", margin: 0, whiteSpace: "pre-line" as const }}>{log.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "20px" }}>
            <button style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", fontWeight: 600, color: "#1E1E1E", background: "#ffffff", border: "1.5px solid rgba(30,30,30,0.15)", borderRadius: "8px", padding: "9px 28px", cursor: "pointer" }}>Back</button>
            <button style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", fontWeight: 600, color: "#ffffff", background: "#29A5FF", border: "none", borderRadius: "8px", padding: "9px 28px", cursor: "pointer" }}>Next</button>
          </div>
        </div>
      </div>

      <div style={{ position: "fixed", bottom: "24px", right: "24px", width: "48px", height: "48px", borderRadius: "50%", background: "#29A5FF", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 16px rgba(41,165,255,0.35)", cursor: "pointer", zIndex: 50 }}>
        <MessageCircle size={22} color="#ffffff" strokeWidth={2} fill="#ffffff" />
      </div>
    </div>
  );
}
