"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Heading, BodyText } from "@/components/ui";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwYaaKN3iv9BSaH7Pnx-Eb2JqhK4FrKfy1KmB06TtWWyRZlNenE9V-srLM-Yyt1a2Lb9Q/exec";

const roleOptions = [
  "Exploratory Tester",
  "SDET",
  "Developer",
  "Product Manager",
  "Engineering / QA Lead",
  "Founder / CXO",
  "Other",
];

const COUNTRY_CODES = [
  { code: "+91",  flag: "🇮🇳", label: "India" },
  { code: "+1",   flag: "🇺🇸", label: "United States" },
  { code: "+44",  flag: "🇬🇧", label: "United Kingdom" },
  { code: "+61",  flag: "🇦🇺", label: "Australia" },
  { code: "+65",  flag: "🇸🇬", label: "Singapore" },
  { code: "+971", flag: "🇦🇪", label: "UAE" },
  { code: "+49",  flag: "🇩🇪", label: "Germany" },
  { code: "+33",  flag: "🇫🇷", label: "France" },
  { code: "+81",  flag: "🇯🇵", label: "Japan" },
  { code: "+82",  flag: "🇰🇷", label: "South Korea" },
  { code: "+86",  flag: "🇨🇳", label: "China" },
  { code: "+55",  flag: "🇧🇷", label: "Brazil" },
  { code: "+52",  flag: "🇲🇽", label: "Mexico" },
  { code: "+1",   flag: "🇨🇦", label: "Canada" },
  { code: "+31",  flag: "🇳🇱", label: "Netherlands" },
  { code: "+46",  flag: "🇸🇪", label: "Sweden" },
  { code: "+92",  flag: "🇵🇰", label: "Pakistan" },
  { code: "+880", flag: "🇧🇩", label: "Bangladesh" },
  { code: "+94",  flag: "🇱🇰", label: "Sri Lanka" },
  { code: "+977", flag: "🇳🇵", label: "Nepal" },
  { code: "+60",  flag: "🇲🇾", label: "Malaysia" },
  { code: "+66",  flag: "🇹🇭", label: "Thailand" },
  { code: "+63",  flag: "🇵🇭", label: "Philippines" },
  { code: "+62",  flag: "🇮🇩", label: "Indonesia" },
];

const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
const isValidMobile = (v: string) => /^\d{7,15}$/.test(v.replace(/[\s\-()]/g, ""));

function getISTTimestamp() {
  return new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
  });
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

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/beta-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 16px",
      }}
    >
      {/* Logo top-left */}
      <a
        href="/"
        style={{
          position: "fixed", top: "24px", left: "28px", zIndex: 10,
          display: "flex", alignItems: "center", gap: "8px", textDecoration: "none",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/logo.svg" alt="Bugasura" height={32} style={{ height: "32px" }} onError={e => { (e.target as HTMLImageElement).style.display = "none"; }} />
      </a>

      {/* Card */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          maxWidth: "900px",
          borderRadius: "28px",
          overflow: "hidden",
          boxShadow: "0 32px 80px rgba(0,0,0,0.45)",
          minHeight: "560px",
        }}
        className="beta-card"
      >
        {/* Left — banner image */}
        <div
          className="beta-banner"
          style={{
            flex: "0 0 360px",
            position: "relative",
            overflow: "hidden",
            display: "flex",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={done ? "/beta-success.png" : "/beta-banner.png"}
            alt="World of Asuras"
            style={{
              width: "100%",
              height: "100%",
              objectFit: done ? "contain" : "cover",
              objectPosition: "center",
              transition: "opacity 0.4s",
              background: done ? "#E52727" : "transparent",
              padding: done ? "32px" : "0",
            }}
          />
        </div>

        {/* Right — form */}
        <div
          style={{
            flex: 1,
            background: "#FFF6E2",
            padding: "44px 40px 40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            overflowY: "auto",
          }}
        >
          {done ? (
            <div className="flex flex-col items-center text-center py-4">
              <div
                style={{
                  width: "64px", height: "64px", borderRadius: "20px",
                  background: "rgba(229,39,39,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <Check size={28} color="var(--red)" strokeWidth={2.5} />
              </div>
              <Heading level="step" as="h2" color="var(--dark)" style={{ fontSize: "28px", marginBottom: "12px" }}>
                You&apos;re on the list.
              </Heading>
              <BodyText color="rgba(30,30,30,0.6)" style={{ fontSize: "15px", lineHeight: 1.7, maxWidth: "36ch" }}>
                We&apos;ll reach out before the Bugasura Agent Marketplace opens. Your input will directly shape what we build.
              </BodyText>
              <a
                href="/"
                style={{
                  marginTop: "28px",
                  fontFamily: "'Clash Grotesk', sans-serif", fontSize: "13px",
                  color: "rgba(30,30,30,0.45)", textDecoration: "underline",
                }}
              >
                Back to home
              </a>
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 700px) {
          .beta-card { flex-direction: column !important; }
          .beta-banner { flex: 0 0 240px !important; width: 100% !important; }
        }
      `}</style>
    </div>
  );
}
