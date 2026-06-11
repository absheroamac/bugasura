"use client";

import { useState } from "react";
import { X, ListChecks, ChevronDown, Bot } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const STEPS = [
  "Open the web browser.",
  "Navigate to 'https://www.linkedin.com'.",
  "Click 'Jobs' tab and search 'Data Analyst Bengaluru'.",
  "Apply experience filter (0-2 years).",
  "Verify relevant job listings appear.",
  "Check 'Apply' options and company logos load.",
];

const TABS = ["Summary", "Flow"];

const IMAGES = Array.from({ length: 8 });

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TestCaseDetailPage() {
  const [activeTab, setActiveTab] = useState("Summary");

  return (
    <div style={{
      minHeight: "100vh", background: "#ffffff",
      fontFamily: "var(--font-inter), Inter, sans-serif",
    }}>
      {/* Header */}
      <div style={{
        position: "relative",
        background: "linear-gradient(135deg, #EAF6FF 0%, #F4FBF0 100%)",
        borderBottom: "1px solid rgba(30,30,30,0.06)",
        padding: "24px 32px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
          <span style={{
            fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 700,
            color: "#ffffff", background: "#29A5FF", borderRadius: "8px", padding: "6px 14px",
          }}>191</span>
          <span style={{
            fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", fontWeight: 700,
            color: "#16A34A", background: "rgba(22,163,74,0.12)", borderRadius: "8px", padding: "6px 16px", letterSpacing: "0.04em",
          }}>PASS</span>

          <div style={{ flex: 1 }} />

          <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.45)" }}>
            Browser Agent on Tue, Apr 14, 2026 12:03 PM
          </span>
          <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(229,39,39,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Bot size={17} color="#E52727" strokeWidth={2} />
          </div>
          <button aria-label="Close" style={{ background: "none", border: "none", cursor: "pointer", display: "flex" }}>
            <X size={20} color="rgba(30,30,30,0.45)" strokeWidth={2} />
          </button>
        </div>

        <h1 style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "26px", color: "#1E1E1E", margin: 0 }}>
          Searching jobs on LinkedIn
        </h1>
      </div>

      {/* Body */}
      <div style={{ display: "grid", gridTemplateColumns: "minmax(360px, 460px) 1fr", gap: "32px", padding: "28px 32px 60px" }}>

        {/* Left: Test Steps */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <ListChecks size={18} color="#1E1E1E" strokeWidth={2} />
            <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "18px", color: "#1E1E1E" }}>Test Steps</span>
          </div>

          <div style={{ position: "relative" }}>
            {STEPS.map((step, i) => (
              <div key={i} style={{ display: "flex", gap: "16px", marginBottom: i < STEPS.length - 1 ? "0" : "0" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{
                    width: "30px", height: "30px", borderRadius: "50%",
                    border: "2px solid #16A34A", background: "#ffffff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 700, color: "#16A34A",
                    flexShrink: 0,
                  }}>{i + 1}</div>
                  {i < STEPS.length - 1 && (
                    <div style={{ width: "2px", flex: 1, background: "#16A34A", minHeight: "30px" }} />
                  )}
                </div>
                <div style={{
                  flex: 1, marginBottom: "16px",
                  background: "#ffffff", border: "1px solid rgba(30,30,30,0.08)", borderRadius: "10px",
                  padding: "16px 18px",
                  fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "14.5px", color: "#1E1E1E",
                }}>{step}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Summary / Flow */}
        <div>
          {/* Tabs */}
          <div style={{ display: "flex", alignItems: "center", background: "#F5F5F3", borderRadius: "10px", padding: "4px", marginBottom: "16px" }}>
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  flex: 1, fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px",
                  fontWeight: 600, color: activeTab === tab ? "#1E1E1E" : "rgba(30,30,30,0.4)",
                  background: activeTab === tab ? "#ffffff" : "transparent",
                  border: "none", borderRadius: "8px", padding: "10px 0", cursor: "pointer",
                  boxShadow: activeTab === tab ? "0 1px 4px rgba(0,0,0,0.06)" : "none",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Screenshot preview */}
          <div style={{
            border: "1px solid rgba(30,30,30,0.08)", borderRadius: "12px", overflow: "hidden",
            marginBottom: "20px", background: "#fff",
          }}>
            <div style={{ padding: "14px", background: "#FAFAF8" }}>
              {/* fake browser chrome */}
              <div style={{ background: "#ffffff", border: "1px solid rgba(30,30,30,0.08)", borderRadius: "8px", padding: "10px 14px", display: "flex", alignItems: "center", gap: "16px", marginBottom: "10px" }}>
                <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 800, fontSize: "13px", color: "#0A66C2" }}>Linked<span style={{color:"#0A66C2"}}>in</span></span>
                <div style={{ flex: 1, display: "flex", gap: "8px" }}>
                  <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", color: "rgba(30,30,30,0.4)", background: "#F5F5F3", borderRadius: "4px", padding: "4px 10px" }}>Data Analyst</span>
                  <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", color: "rgba(30,30,30,0.4)", background: "#F5F5F3", borderRadius: "4px", padding: "4px 10px" }}>Bengaluru</span>
                </div>
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 600, color: "#29A5FF" }}>Sign in</span>
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700, color: "#fff", background: "#29A5FF", borderRadius: "16px", padding: "4px 12px" }}>Join now</span>
              </div>
              <div style={{ display: "flex", gap: "8px", marginBottom: "10px" }}>
                {["25 miles (40 km)", "Experience level", "Any time", "Company", "Job type", "Location"].map(f => (
                  <span key={f} style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "10.5px", fontWeight: 600, color: "#16A34A", background: "rgba(22,163,74,0.08)", borderRadius: "16px", padding: "5px 10px", whiteSpace: "nowrap" as const }}>{f} ▾</span>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {/* Job list */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ background: "#EAF6FF", border: "1px solid rgba(41,165,255,0.2)", borderRadius: "8px", padding: "8px 10px" }}>
                    <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700, color: "#1E1E1E" }}>Data Analyst</div>
                    <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "10px", color: "rgba(30,30,30,0.45)" }}>Curefit · Bengaluru, Karnataka, India</div>
                    <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "9.5px", color: "#16A34A", marginTop: "2px" }}>● Actively Hiring · 1 week ago</div>
                  </div>
                  {["Infosys", "Wipro", "RNP Paribas"].map((c, i) => (
                    <div key={c} style={{ background: "#ffffff", border: "1px solid rgba(30,30,30,0.06)", borderRadius: "8px", padding: "8px 10px" }}>
                      <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700, color: "#1E1E1E" }}>{i === 1 ? "Healthcare_Data Analyst_Q1" : "Data Analyst"}</div>
                      <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "10px", color: "rgba(30,30,30,0.45)" }}>{c} · Bengaluru East, Karnataka, India</div>
                      <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "9.5px", color: "#16A34A", marginTop: "2px" }}>● Actively Hiring · 2 days ago</div>
                    </div>
                  ))}
                </div>

                {/* Job detail */}
                <div style={{ background: "#ffffff", border: "1px solid rgba(30,30,30,0.06)", borderRadius: "8px", padding: "10px 12px" }}>
                  <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", fontWeight: 700, color: "#1E1E1E", marginBottom: "2px" }}>Data Analyst</div>
                  <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "10px", color: "rgba(30,30,30,0.45)", marginBottom: "8px" }}>Curefit · Bengaluru, Karnataka, India · 1 week ago · Over 200 applicants</div>
                  <div style={{ display: "flex", gap: "8px", marginBottom: "10px" }}>
                    <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700, color: "#fff", background: "#29A5FF", borderRadius: "16px", padding: "5px 14px" }}>Apply</span>
                    <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700, color: "#1E1E1E", border: "1px solid rgba(30,30,30,0.2)", borderRadius: "16px", padding: "5px 14px" }}>Save</span>
                  </div>
                  <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "10px", color: "rgba(30,30,30,0.5)", lineHeight: 1.6 }}>
                    • Write and fine-tune SQL queries to pull data from multiple sources<br/>
                    • Build and maintain reports and dashboards
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginTop: "10px" }}>
                    <div>
                      <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "9.5px", color: "rgba(30,30,30,0.4)" }}>Seniority level</div>
                      <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 600, color: "#1E1E1E" }}>Not Applicable</div>
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "9.5px", color: "rgba(30,30,30,0.4)" }}>Employment type</div>
                      <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 600, color: "#1E1E1E" }}>Full-time</div>
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "9.5px", color: "rgba(30,30,30,0.4)" }}>Job function</div>
                      <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 600, color: "#1E1E1E" }}>Information Technology</div>
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "9.5px", color: "rgba(30,30,30,0.4)" }}>Industries</div>
                      <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 600, color: "#1E1E1E" }}>Wellness and Fitness Services</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
            <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "16px", color: "#1E1E1E" }}>Images (8)</span>
            <ChevronDown size={16} color="rgba(30,30,30,0.4)" style={{ transform: "rotate(180deg)" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "10px", marginBottom: "20px" }}>
            {IMAGES.map((_, i) => (
              <div key={i} style={{
                aspectRatio: "4/3", borderRadius: "8px",
                border: "1px solid rgba(30,30,30,0.08)",
                background: i === 2 ? "#52525B" : "#FAFAF8",
              }} />
            ))}
          </div>

          {/* Other */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px", cursor: "pointer" }}>
            <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "16px", color: "#1E1E1E" }}>Other (3)</span>
            <ChevronDown size={16} color="rgba(30,30,30,0.4)" />
          </div>

          {/* Device/System Details */}
          <div style={{ background: "#EFEFFC", borderRadius: "14px", padding: "20px 24px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px", cursor: "pointer" }}>
              <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "18px", color: "#1E1E1E" }}>Device/System Details</span>
              <ChevronDown size={18} color="rgba(30,30,30,0.4)" />
            </div>

            <div style={{ marginBottom: "16px" }}>
              <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", fontWeight: 600, color: "rgba(30,30,30,0.5)", marginBottom: "6px" }}>Operating System</div>
              <div style={{ background: "#ffffff", borderRadius: "8px", padding: "11px 14px", fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", color: "#1E1E1E" }}>Windows</div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
              <div>
                <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", fontWeight: 600, color: "rgba(30,30,30,0.5)", marginBottom: "6px" }}>Browser</div>
                <div style={{ background: "#ffffff", borderRadius: "8px", padding: "11px 14px", fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", color: "#1E1E1E" }}>Chrome</div>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", fontWeight: 600, color: "rgba(30,30,30,0.5)", marginBottom: "6px" }}>Browser Version</div>
                <div style={{ background: "#ffffff", borderRadius: "8px", padding: "11px 14px", fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", color: "#1E1E1E" }}>84.1</div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div>
                <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", fontWeight: 600, color: "rgba(30,30,30,0.5)", marginBottom: "6px" }}>Resolution</div>
                <div style={{ background: "#ffffff", borderRadius: "8px", padding: "11px 14px", display: "flex", alignItems: "center", gap: "10px", fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", color: "rgba(30,30,30,0.4)" }}>
                  Width <span style={{ color: "rgba(30,30,30,0.25)" }}>×</span> Height
                </div>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", fontWeight: 600, color: "rgba(30,30,30,0.5)", marginBottom: "6px" }}>Network</div>
                <div style={{ background: "#ffffff", borderRadius: "8px", padding: "11px 14px", fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", color: "#1E1E1E" }}>WiFi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
