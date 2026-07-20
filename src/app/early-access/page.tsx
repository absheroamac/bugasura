"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Heading, BodyText } from "@/components/ui";
import Navbar from "@/components/layout/Navbar";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwYaaKN3iv9BSaH7Pnx-Eb2JqhK4FrKfy1KmB06TtWWyRZlNenE9V-srLM-Yyt1a2Lb9Q/exec";

const roleOptions = [
  "Exploratory Tester", "SDET", "Developer", "Product Manager",
  "Engineering / QA Lead", "Founder / CXO", "Other",
];

const COUNTRY_CODES = [
  { code: "+91",  flag: "🇮🇳" }, { code: "+1",   flag: "🇺🇸" },
  { code: "+44",  flag: "🇬🇧" }, { code: "+61",  flag: "🇦🇺" },
  { code: "+65",  flag: "🇸🇬" }, { code: "+971", flag: "🇦🇪" },
  { code: "+49",  flag: "🇩🇪" }, { code: "+33",  flag: "🇫🇷" },
  { code: "+81",  flag: "🇯🇵" }, { code: "+82",  flag: "🇰🇷" },
  { code: "+86",  flag: "🇨🇳" }, { code: "+55",  flag: "🇧🇷" },
  { code: "+52",  flag: "🇲🇽" }, { code: "+1",   flag: "🇨🇦" },
  { code: "+31",  flag: "🇳🇱" }, { code: "+46",  flag: "🇸🇪" },
  { code: "+92",  flag: "🇵🇰" }, { code: "+880", flag: "🇧🇩" },
  { code: "+94",  flag: "🇱🇰" }, { code: "+977", flag: "🇳🇵" },
  { code: "+60",  flag: "🇲🇾" }, { code: "+66",  flag: "🇹🇭" },
  { code: "+63",  flag: "🇵🇭" }, { code: "+62",  flag: "🇮🇩" },
];

const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
const isValidMobile = (v: string) => /^\d{7,15}$/.test(v.replace(/[\s\-()]/g, ""));

function getISTTimestamp() {
  return new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata", year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
  });
}

function randomPosition() {
  return Math.floor(Math.random() * 400) + 700;
}

function PhoneInput({ value, countryCode, onValueChange, onCountryChange, onBlur, style }: {
  value: string; countryCode: string;
  onValueChange: (v: string) => void; onCountryChange: (v: string) => void;
  onBlur?: () => void; style?: React.CSSProperties;
}) {
  const [isCustom, setIsCustom] = useState(false);
  const [customCode, setCustomCode] = useState("");

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      {isCustom ? (
        <input
          type="text" placeholder="+00" value={customCode}
          onChange={e => { setCustomCode(e.target.value); onCountryChange(e.target.value); }}
          style={{ ...style, width: "80px", flexShrink: 0 }}
        />
      ) : (
        <select
          value={countryCode}
          onChange={e => {
            if (e.target.value === "custom") { setIsCustom(true); setCustomCode(""); onCountryChange(""); }
            else onCountryChange(e.target.value);
          }}
          style={{ ...style, width: "100px", flexShrink: 0, paddingLeft: "8px" }}
        >
          {COUNTRY_CODES.map((c, i) => (
            <option key={i} value={c.code}>{c.flag} {c.code}</option>
          ))}
          <option value="custom">Other</option>
        </select>
      )}
      <input
        type="tel" placeholder="98765 43210" value={value}
        onChange={e => onValueChange(e.target.value)}
        onBlur={onBlur}
        style={{ ...style, flex: 1 }}
      />
    </div>
  );
}

export default function EarlyAccessPage() {
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [position] = useState(randomPosition);
  const [copied, setCopied] = useState(false);
  const [data, setData] = useState({
    name: "", email: "", mobile: "", mobileCountry: "+91", company: "", role: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "14px 16px", borderRadius: "12px",
    border: "1px solid rgba(30,30,30,0.15)", background: "#ffffff",
    fontFamily: "'Clash Grotesk', sans-serif", fontSize: "15px", color: "#1E1E1E",
    outline: "none", marginBottom: "12px",
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!data.name.trim()) errs.name = "Name is required";
    if (!data.email.trim()) errs.email = "Email is required";
    else if (!isValidEmail(data.email)) errs.email = "Enter a valid email address";
    if (!data.role) errs.role = "Please select your role";
    if (data.mobile && !isValidMobile(data.mobile)) errs.mobile = "Enter a valid mobile number";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSubmitting(true);
    const fullMobile = data.mobile ? `${data.mobileCountry} ${data.mobile}` : "";
    const payload = { ...data, mobile: fullMobile, timestamp: getISTTimestamp(), type: "beta_signup" };
    const params = new URLSearchParams(payload as Record<string, string>);
    fetch(`${GOOGLE_SCRIPT_URL}?${params.toString()}`, { method: "GET", mode: "no-cors" }).catch(() => {});
    setSubmitting(false);
    setDone(true);
  };

  const caption = `I'm #${position} in line to build my own QA Agent in the World of Asuras. Are you behind me? bugasura.io/asuras`;
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://bugasura.io/asuras")}&summary=${encodeURIComponent(caption)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(caption).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const pageBg: React.CSSProperties = {
    minHeight: "100vh",
    backgroundImage: "url('/beta-bg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center top",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  /* ─── Success screen ─── */
  if (done) {
    return (
      <>
        <Navbar />
        <div style={{ ...pageBg, padding: "160px 16px 60px" }}>
          <div style={{
            width: "100%", maxWidth: "580px",
            borderRadius: "28px", overflow: "visible",
            boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
            background: "#FFF6E2",
            position: "relative",
          }}>
            {/* Celebration image — overflows above the card */}
            <div style={{ background: "#F5A623", borderRadius: "28px 28px 0 0", display: "flex", justifyContent: "center", paddingTop: "16px", overflow: "visible", position: "relative" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/beta-success.png" alt="Congrats" style={{ width: "300px", display: "block", marginTop: "-30px", position: "relative", zIndex: 2 }} />
            </div>

            {/* Position */}
            <div style={{ padding: "24px 32px 0", textAlign: "center" }}>
              <BodyText color="rgba(30,30,30,0.6)" style={{ fontSize: "14px", marginBottom: "6px" }}>
                Congrats! you&apos;re on the list
              </BodyText>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
                <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "48px", color: "var(--red)", lineHeight: 1 }}>
                  #{position}
                </span>
                <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: "18px", color: "var(--dark)", fontWeight: 600 }}>
                  in the World of Asuras
                </span>
              </div>
            </div>

            {/* Share card */}
            <div style={{ padding: "20px 32px 0" }}>
              <div style={{ position: "relative", borderRadius: "16px", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/beta-share-card.png" alt="Share card" style={{ width: "100%", display: "block" }} />
                {/* Name + number overlay on the sign */}
                <div style={{
                  position: "absolute", top: "52%", left: "8%", width: "30%",
                  textAlign: "center", transform: "translateY(-50%)",
                }}>
                  <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(9px, 2.2vw, 14px)", color: "#1E1E1E", lineHeight: 1.2 }}>
                    {data.name || "You"}
                  </div>
                  <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(12px, 2.8vw, 20px)", color: "var(--red)", lineHeight: 1.1 }}>
                    #{position}
                  </div>
                </div>
                {/* Caption overlay on right */}
                <div style={{
                  position: "absolute", top: "55%", left: "52%", right: "4%",
                  transform: "translateY(-50%)",
                }}>
                  <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: "clamp(7px, 1.6vw, 11px)", color: "#ffffff", lineHeight: 1.5, margin: 0 }}>
                    I&apos;m{" "}
                    <span style={{ color: "#FFD700", fontWeight: 700 }}>#{position}</span>{" "}
                    in line<br />to build my own QA Agent.<br />Are you behind me?
                  </p>
                </div>
              </div>
            </div>

            {/* Caption + buttons */}
            <div style={{ padding: "16px 32px 28px" }}>
              <div style={{
                display: "flex", alignItems: "center", gap: "10px",
                background: "#ffffff", border: "1px solid rgba(30,30,30,0.15)",
                borderRadius: "12px", padding: "12px 16px", marginBottom: "12px",
              }}>
                <span style={{ flex: 1, fontFamily: "'Clash Grotesk', sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.5)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {caption}
                </span>
                <button onClick={handleCopy} style={{ background: "none", border: "none", cursor: "pointer", flexShrink: 0, padding: "2px" }}>
                  {copied
                    ? <Check size={16} color="var(--red)" strokeWidth={2.5} />
                    : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "rgba(30,30,30,0.4)" }}>
                        <rect x="9" y="9" width="13" height="13" rx="2"/>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                      </svg>
                    )
                  }
                </button>
              </div>

              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  width: "100%", padding: "16px 24px", borderRadius: "12px",
                  background: "var(--red)", color: "#ffffff", textDecoration: "none",
                  fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "13px",
                  letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "12px",
                }}
              >
                Share on LinkedIn &amp; Jump to #{position - 1}
              </a>

              <div style={{ textAlign: "center" }}>
                <a href="/" style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.4)", textDecoration: "none" }}>
                  Skip, I&apos;ll wait my turn
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  /* ─── Form screen ─── */
  return (
    <>
      <Navbar />
      <div style={{ ...pageBg, padding: "24px 16px" }}>
        <div
          className="beta-card"
          style={{
            display: "flex", flexDirection: "row", width: "100%", maxWidth: "1060px",
            borderRadius: "28px", overflow: "hidden",
            boxShadow: "0 32px 80px rgba(0,0,0,0.45)", minHeight: "560px",
          }}
        >
          {/* Left — banner */}
          <div className="beta-banner" style={{ flex: "0 0 460px", overflow: "hidden", display: "flex" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/beta-banner.png" alt="World of Asuras" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>

          {/* Right — form */}
          <div style={{
            flex: 1, background: "#FFF6E2", padding: "44px 40px 40px",
            display: "flex", flexDirection: "column", justifyContent: "center", overflowY: "auto",
          }}>
            <Heading level="step" as="h1" color="var(--dark)" style={{ fontSize: "clamp(22px, 3vw, 28px)", marginBottom: "6px", lineHeight: 1.2 }}>
              Register for early access.
            </Heading>
            <BodyText color="rgba(30,30,30,0.55)" style={{ fontSize: "14px", lineHeight: 1.6, marginBottom: "28px" }}>
              We&apos;ll keep you in the loop before the Marketplace opens.
            </BodyText>

            <form onSubmit={handleSubmit} noValidate>
              <input
                placeholder="Your name" value={data.name}
                onChange={e => { setData(p => ({ ...p, name: e.target.value })); setErrors(p => ({ ...p, name: "" })); }}
                style={{ ...inputStyle, borderColor: errors.name ? "var(--red)" : undefined }}
              />
              {errors.name && <p style={{ color: "var(--red)", fontSize: "12px", marginTop: "-8px", marginBottom: "12px" }}>{errors.name}</p>}

              <input
                placeholder="Work email" type="email" value={data.email}
                onChange={e => { setData(p => ({ ...p, email: e.target.value })); setErrors(p => ({ ...p, email: "" })); }}
                onBlur={() => { if (data.email && !isValidEmail(data.email)) setErrors(p => ({ ...p, email: "Enter a valid email address" })); }}
                style={{ ...inputStyle, borderColor: errors.email ? "var(--red)" : undefined }}
              />
              {errors.email && <p style={{ color: "var(--red)", fontSize: "12px", marginTop: "-8px", marginBottom: "12px" }}>{errors.email}</p>}

              <PhoneInput
                value={data.mobile} countryCode={data.mobileCountry}
                onValueChange={v => { setData(p => ({ ...p, mobile: v })); setErrors(p => ({ ...p, mobile: "" })); }}
                onCountryChange={v => setData(p => ({ ...p, mobileCountry: v }))}
                onBlur={() => { if (data.mobile && !isValidMobile(data.mobile)) setErrors(p => ({ ...p, mobile: "Enter a valid mobile number" })); }}
                style={{ ...inputStyle, borderColor: errors.mobile ? "var(--red)" : undefined }}
              />
              {errors.mobile && <p style={{ color: "var(--red)", fontSize: "12px", marginTop: "-8px", marginBottom: "12px" }}>{errors.mobile}</p>}

              <input
                placeholder="Company" value={data.company}
                onChange={e => setData(p => ({ ...p, company: e.target.value }))}
                style={inputStyle}
              />

              <select
                value={data.role}
                onChange={e => { setData(p => ({ ...p, role: e.target.value })); setErrors(p => ({ ...p, role: "" })); }}
                style={{ ...inputStyle, marginBottom: 0, borderColor: errors.role ? "var(--red)" : undefined }}
              >
                <option value="" disabled>Your role</option>
                {roleOptions.map(r => <option key={r}>{r}</option>)}
              </select>
              {errors.role && <p style={{ color: "var(--red)", fontSize: "12px", marginTop: "4px", marginBottom: "12px" }}>{errors.role}</p>}

              <button
                type="submit" disabled={submitting}
                className="w-full flex items-center justify-center gap-2 mt-5"
                style={{
                  fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600,
                  fontSize: "15px", padding: "16px 24px", borderRadius: "12px",
                  background: submitting ? "rgba(229,39,39,0.5)" : "var(--red)",
                  color: "#ffffff", border: "none", cursor: submitting ? "wait" : "pointer",
                }}
              >
                {submitting ? "Submitting…" : "Get early access"}
                {!submitting && <ArrowRight size={16} strokeWidth={2.5} />}
              </button>
            </form>
          </div>
        </div>

        <style>{`
          @media (max-width: 700px) {
            .beta-card { flex-direction: column !important; }
            .beta-banner { flex: 0 0 240px !important; width: 100% !important; }
          }
        `}</style>
      </div>
    </>
  );
}
