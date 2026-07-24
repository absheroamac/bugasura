"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Heading, BodyText } from "@/components/ui";
import Navbar from "@/components/layout/Navbar";


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
  const [position, setPosition] = useState(randomPosition);
  const [displayPosition, setDisplayPosition] = useState(randomPosition);
  const [, setShareToken] = useState("");
  const [bumped, setBumped] = useState(false);
  const [copied, setCopied] = useState(false);
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [linkedinError, setLinkedinError] = useState("");
  const [submittingBump, setSubmittingBump] = useState(false);
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
    try {
      const res = await fetch("/internal/api/v1/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: data.name, email: data.email, mobile: fullMobile, company: data.company, role: data.role }),
      });
      const json = await res.json();
      if (json.position) { setPosition(json.position); setDisplayPosition(json.position); }
      if (json.share_token) setShareToken(json.share_token);
      if (json.bumps === 100) setBumped(true);
    } catch {
      // fallback — still show success even if API fails
    }
    setSubmitting(false);
    setDone(true);
  };

  const animatePosition = (from: number, to: number) => {
    const duration = 1500;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayPosition(Math.round(from - (from - to) * eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const handleBumpSubmit = async () => {
    if (!linkedinUrl.trim()) { setLinkedinError("Please paste your LinkedIn post URL"); return; }
    setLinkedinError("");
    setSubmittingBump(true);
    try {
      const res = await fetch("/internal/api/v1/waitlist/share", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email, linkedin_post_url: linkedinUrl.trim() }),
      });
      const json = await res.json();
      if (!res.ok) { setLinkedinError(json.error || "Something went wrong"); setSubmittingBump(false); return; }
      if (json.effective_position) {
        animatePosition(position, json.effective_position);
        setPosition(json.effective_position);
      }
      setBumped(true);
    } catch {
      setLinkedinError("Something went wrong, please try again");
    }
    setSubmittingBump(false);
  };

  const handleShare = () => {
    handleCopy();
    window.open(linkedInUrl, "_blank");
  };

  const caption = `I'm #${position} in line to build my own QA Agent in the World of Asuras. Are you behind me? bugasura.io/asuras`;
  const sharePageUrl = `https://bugasura.io/share?name=${encodeURIComponent((data.name || "YOU").toUpperCase())}&position=${position}`;
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(sharePageUrl)}`;

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
            <div className="px-4 sm:px-8" style={{ paddingTop: "24px", textAlign: "center" }}>
              <BodyText color="rgba(30,30,30,0.6)" style={{ fontSize: "14px", marginBottom: "6px" }}>
                Congrats! you&apos;re on the list
              </BodyText>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
                <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "48px", color: "var(--red)", lineHeight: 1, transition: "color 0.2s" }}>
                  #{displayPosition}
                </span>
                <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: "18px", color: "var(--dark)", fontWeight: 600, textAlign: "left", lineHeight: 1.3 }}>
                  in the World<br />of Asuras
                </span>
              </div>
            </div>

            {/* Share card — with download button */}
            <div className="px-4 sm:px-8" style={{ paddingTop: "20px" }}>
              <div style={{ position: "relative", borderRadius: "16px", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/internal/api/v1/og?name=${encodeURIComponent((data.name || "YOU").toUpperCase())}&position=${position}`}
                  alt="Share card"
                  style={{ width: "100%", display: "block" }}
                />
                {/* Download button — top right */}
                <a
                  href={`/internal/api/v1/og?name=${encodeURIComponent((data.name || "YOU").toUpperCase())}&position=${position}`}
                  download={`bugasura-${position}.png`}
                  style={{
                    position: "absolute", top: "10px", right: "10px",
                    background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)",
                    borderRadius: "8px", padding: "7px 10px",
                    display: "flex", alignItems: "center", gap: "6px",
                    color: "#ffffff", textDecoration: "none",
                    fontFamily: "'Clash Grotesk', sans-serif", fontSize: "12px", fontWeight: 600,
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Download
                </a>
              </div>
            </div>

            {/* Steps + share flow */}
            <div className="px-4 sm:px-8" style={{ paddingTop: "20px", paddingBottom: "28px" }}>
              {/* Step 1: Copy & post */}
              {[
                { n: "1", title: "Copy caption & download image", desc: "Use the caption below and save your personalised Asura card above." },
                { n: "2", title: "Post on LinkedIn", desc: "Share the image with the caption on LinkedIn." },
                { n: "3", title: "Paste your post link below & submit", desc: "Once you've posted, paste the URL of your LinkedIn post and hit Submit to jump the queue." },
              ].map(({ n, title, desc }) => (
                <div key={n} style={{ display: "flex", gap: "14px", marginBottom: "14px" }}>
                  <div style={{
                    flexShrink: 0, width: "28px", height: "28px", borderRadius: "50%",
                    border: "2px solid var(--red)", color: "var(--red)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "13px",
                  }}>{n}</div>
                  <div>
                    <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "15px", color: "var(--dark)", marginBottom: "3px" }}>{title}</div>
                    <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: "14px", color: "rgba(30,30,30,0.55)", lineHeight: 1.5 }}>{desc}</div>
                  </div>
                </div>
              ))}

              {/* Caption copy row */}
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

              {/* Share on LinkedIn button */}
              <button
                onClick={handleShare}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  width: "100%", padding: "14px 24px", borderRadius: "12px",
                  background: "#0A66C2", color: "#ffffff", border: "none", cursor: "pointer",
                  fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "13px",
                  letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "16px", gap: "8px",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                Share on LinkedIn
              </button>

              {/* LinkedIn post URL input + submit */}
              {!bumped ? (
                <div>
                  <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: "13px", fontWeight: 600, color: "var(--dark)", marginBottom: "8px" }}>
                    After posting, paste your LinkedIn post URL here:
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "4px" }}>
                    <input
                      type="url"
                      placeholder="https://www.linkedin.com/posts/..."
                      value={linkedinUrl}
                      onChange={e => { setLinkedinUrl(e.target.value); setLinkedinError(""); }}
                      style={{
                        flex: 1, padding: "12px 14px", borderRadius: "10px",
                        border: `1px solid ${linkedinError ? "var(--red)" : "rgba(30,30,30,0.15)"}`,
                        background: "#ffffff", fontFamily: "'Clash Grotesk', sans-serif",
                        fontSize: "14px", color: "#1E1E1E", outline: "none",
                      }}
                    />
                    <button
                      onClick={handleBumpSubmit}
                      disabled={submittingBump || !linkedinUrl.trim().match(/linkedin\.com/)}
                      style={{
                        padding: "12px 20px", borderRadius: "10px",
                        background: submittingBump || !linkedinUrl.trim().match(/linkedin\.com/)
                          ? "rgba(229,39,39,0.35)"
                          : "var(--red)",
                        color: "#ffffff", border: "none",
                        cursor: submittingBump || !linkedinUrl.trim().match(/linkedin\.com/) ? "not-allowed" : "pointer",
                        fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "13px",
                        whiteSpace: "nowrap", transition: "background 0.2s",
                      }}
                    >
                      {submittingBump ? "Submitting…" : "Submit & Jump"}
                    </button>
                  </div>
                  {linkedinError && (
                    <p style={{ color: "var(--red)", fontSize: "12px", margin: "4px 0 0", fontFamily: "'Clash Grotesk', sans-serif" }}>{linkedinError}</p>
                  )}
                </div>
              ) : (
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                  padding: "14px", borderRadius: "12px", background: "rgba(229,39,39,0.08)",
                  border: "1px solid rgba(229,39,39,0.2)",
                }}>
                  <Check size={16} color="var(--red)" strokeWidth={2.5} />
                  <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "14px", color: "var(--red)" }}>
                    You&apos;re bumped up — we&apos;ll verify your post!
                  </span>
                </div>
              )}

              <div style={{ textAlign: "center", marginTop: "16px" }}>
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
          {/* Left — banner (hidden on mobile) */}
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
            .beta-banner { display: none !important; }
          }
        `}</style>
      </div>
    </>
  );
}
