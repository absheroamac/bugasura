"use client";

import { Download, Settings, Minus, Maximize2, Circle, Pause, FileText, Menu } from "lucide-react";

export default function ReportersHeroPage() {
  return (
    <section style={{
      position: "relative",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #FDD9C8 0%, #FFF6E2 35%, #B2D9EC 100%)",
      fontFamily: "var(--font-inter), Inter, sans-serif",
      overflow: "hidden",
      padding: "80px 60px",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* Avatar */}
      <div style={{ position: "absolute", top: "32px", right: "60px" }}>
        <div style={{
          width: "60px", height: "60px", borderRadius: "50%",
          background: "#C9C2F2", border: "3px solid #ffffff",
          boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "20px", color: "#5B5BD6",
        }}>R</div>
      </div>

      {/* Heading */}
      <div style={{ textAlign: "center", maxWidth: "920px", margin: "20px auto 0" }}>
        <h1 style={{
          fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600,
          fontSize: "52px", lineHeight: 1.15, color: "#1E1E1E", margin: "0 0 20px",
        }}>
          Take the Guesswork out of{" "}
          <span style={{ position: "relative", display: "inline" }}>
            “steps to reproduce”
          </span>
          <br />
          with <span style={{ fontWeight: 700 }}>Bugasura Bug Reporters</span>
        </h1>
        <p style={{
          fontFamily: "var(--font-inter), Inter, sans-serif", fontWeight: 400,
          fontSize: "17px", lineHeight: 1.6, color: "rgba(30,30,30,0.6)",
          margin: 0, maxWidth: "680px", marginInline: "auto",
        }}>
          Say hello to clarity! Bugasura issue reporters allow you to capture bugs contextually
          and collaborate better with developers.
        </p>
      </div>

      {/* Content row */}
      <div style={{
        flex: 1, display: "flex", alignItems: "center", justifyContent: "space-between",
        marginTop: "60px", gap: "40px", flexWrap: "wrap" as const,
      }}>

        {/* Download / inspector card */}
        <div style={{
          width: "360px", background: "#1E1E1E", borderRadius: "14px", overflow: "hidden",
          boxShadow: "0 12px 40px rgba(0,0,0,0.18)",
        }}>
          {/* title bar */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            background: "#E52727", padding: "10px 16px",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "20px", height: "20px", borderRadius: "5px", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Download size={12} color="#E52727" strokeWidth={2.5} />
              </div>
              <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "13px", color: "#ffffff" }}>Download</span>
              <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "10px", fontWeight: 700, color: "#E52727", background: "#ffffff", borderRadius: "4px", padding: "2px 8px" }}>LINK</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Minus size={13} color="#ffffff" strokeWidth={2.5} />
              <Maximize2 size={12} color="#ffffff" strokeWidth={2.5} />
            </div>
          </div>

          {/* tabs */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px 0" }}>
            <div style={{ display: "flex", gap: "20px" }}>
              {["SUMMARY", "HIERARCHY", "CODE"].map((t, i) => (
                <span key={t} style={{
                  fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.06em",
                  color: i === 0 ? "#ffffff" : "rgba(255,255,255,0.35)",
                  paddingBottom: "10px",
                  borderBottom: i === 0 ? "2px solid #29A5FF" : "2px solid transparent",
                }}>{t}</span>
              ))}
            </div>
            <Settings size={15} color="rgba(255,255,255,0.35)" strokeWidth={2} />
          </div>

          {/* dimensions */}
          <div style={{ padding: "18px 16px 22px" }}>
            <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", fontWeight: 700, color: "#29A5FF", marginBottom: "12px" }}>Dimensions</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              <div>
                <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>X: 228dp</div>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>Width: 490dp</div>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>Y: 308px</div>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>Height: 380px</div>
              </div>
            </div>
          </div>
        </div>

        {/* Severity card */}
        <div style={{
          width: "360px", background: "#ffffff", borderRadius: "16px", padding: "28px 28px 24px",
          boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
        }}>
          <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "22px", color: "#1E1E1E", marginBottom: "20px" }}>
            Severity <span style={{ color: "#E52727" }}>*</span>
          </div>

          <div style={{ position: "relative", height: "8px", borderRadius: "4px", marginBottom: "16px" }}>
            <div style={{ position: "absolute", inset: 0, borderRadius: "4px", background: "linear-gradient(90deg, #FFDAA8 0%, #FFA840 35%, #E52727 100%)" }} />
            <div style={{
              position: "absolute", left: "82%", top: "50%", transform: "translate(-50%, -50%)",
              width: "22px", height: "22px", borderRadius: "50%", background: "#E52727",
              border: "3px solid #ffffff", boxShadow: "0 2px 8px rgba(229,39,39,0.4)",
            }} />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {["LOW", "MEDIUM", "HIGH", "CRITICAL"].map((s, i) => (
              <span key={s} style={{
                fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", fontWeight: 700, letterSpacing: "0.04em",
                color: i === 3 ? "#E52727" : "rgba(30,30,30,0.45)",
              }}>{s}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Recorder bar */}
      <div style={{
        position: "absolute", bottom: "32px", left: "60px",
        display: "flex", alignItems: "center", gap: "10px",
      }}>
        <div style={{
          display: "flex", alignItems: "center", gap: "10px",
          background: "#1E1E1E", borderRadius: "10px", padding: "10px 16px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
        }}>
          <div style={{ width: "22px", height: "22px", borderRadius: "6px", background: "#E52727", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Circle size={10} color="#fff" fill="#fff" />
          </div>
          <Circle size={9} color="#E52727" fill="#E52727" />
          <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#ffffff" }}>1:05</span>
          <Pause size={15} color="rgba(255,255,255,0.6)" strokeWidth={2} />
          <span style={{ width: "1px", height: "18px", background: "rgba(255,255,255,0.15)" }} />
          <FileText size={14} color="#ffffff" strokeWidth={2} />
          <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#ffffff" }}>Report</span>
        </div>
        <div style={{
          width: "44px", height: "44px", borderRadius: "10px", background: "#1E1E1E",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
        }}>
          <Menu size={18} color="#ffffff" strokeWidth={2} />
        </div>
      </div>
    </section>
  );
}
