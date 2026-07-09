"use client";

import { useState, useEffect } from "react";
import { Check, ArrowRight, X, ChevronRight, ChevronLeft, Monitor, BookOpen, Gift } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Heading, BodyText, Button } from "@/components/ui";
import LogoScroller from "@/components/sections/LogoScroller";

/* ─── Replace with your deployed Google Apps Script Web App URL ─── */
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwYaaKN3iv9BSaH7Pnx-Eb2JqhK4FrKfy1KmB06TtWWyRZlNenE9V-srLM-Yyt1a2Lb9Q/exec";

const steps = [
  {
    num: "01",
    title: "Register for the contest",
    body: "Fill the form below with your name, email, mobile, company and role. Takes under a minute.",
    tag: null,
  },
  {
    num: "02",
    title: "Choose your Asura",
    body: "Tell us which Asura you'd want summoned first — Browser, API, Duplicate, or Mobile. It shapes what we build next.",
    tag: null,
  },
  {
    num: "03",
    title: "Receive your seal",
    body: "The moment you register, you'll see your Asura and your personal hashtag on screen — that's your entry seal for the contest.",
    tag: "Instant on submit",
  },
  {
    num: "04",
    title: "Strike a pose, post it",
    body: "Click a picture with the Bugasura Asura cutout at Booth B2, post it on LinkedIn, Instagram, or any social media channel, tag Bugasura, and use #WorldOfAsuras.",
    tag: null,
  },
  {
    num: "05",
    title: "Winners announced at close",
    body: "Winners will be selected from valid entries based on maximum likes and reach on their posts. Top 10 entries will win prizes from the total prize pool worth ₹25,000. Winners will be announced after verification by the Bugasura team.",
    tag: null,
  },
];


function AccordionStep({ step, isLast }: { step: typeof steps[0]; isLast: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        borderTop: "1px solid rgba(255,255,255,0.2)",
        borderBottom: isLast ? "1px solid rgba(255,255,255,0.2)" : undefined,
      }}
    >
      <button
        className="w-full flex items-center gap-6 lg:gap-10 py-6 text-left"
        onClick={() => setOpen(o => !o)}
      >
        <Heading
          level="subsection"
          as="p"
          color={open ? "#ffffff" : "rgba(255,255,255,0.5)"}
          style={{ fontSize: "clamp(16px, 2vw, 24px)", lineHeight: 1, flexShrink: 0, width: "40px", letterSpacing: "-0.02em", transition: "color 0.2s" }}
        >
          {step.num}
        </Heading>
        <Heading level="step" as="h3" color="#ffffff" style={{ fontSize: "clamp(17px, 2vw, 22px)", flex: 1, textAlign: "left" }}>
          {step.title}
        </Heading>
        <div
          style={{
            width: "28px", height: "28px", borderRadius: "50%",
            background: "rgba(255,255,255,0.15)", flexShrink: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "transform 0.2s",
            transform: open ? "rotate(45deg)" : "none",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1v10M1 6h10" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </div>
      </button>
      {open && (
        <div className="pb-6 pl-[64px] lg:pl-[80px]" style={{ marginTop: "-8px" }}>
          <BodyText color="#ffffff" style={{ fontSize: "17px", lineHeight: 1.75, maxWidth: "52ch" }}>
            {step.body}
          </BodyText>
          {step.tag && (
            <div
              className="inline-flex items-center gap-1.5 mt-3"
              style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "100px", padding: "4px 12px" }}
            >
              <Check size={12} color="rgba(255,255,255,0.9)" strokeWidth={2.5} />
              <span style={{ fontSize: "11px", fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, color: "rgba(255,255,255,0.9)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                {step.tag}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const asuraOptions = [
  "Browser Asura — Hunts bugs across every page, every flow, every state",
  "API Asura — Every contract. Every edge. Every regression",
  "Duplicate Asura — One bug, one ticket. Every time",
  "Mobile Asura — iOS and Android. Real devices. Real flows",
  "Other",
];

function getISTTimestamp() {
  return new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
}

const asuraImageMap: Record<string, string> = {
  "Browser Asura": "/asura-browser.png",
  "API Asura": "/asura-api.png",
  "Duplicate Asura": "/asura-duplicate.png",
  "Mobile Asura": "/asura-mobile.png",
};

function getAsuraImage(asuraOption: string): string {
  const key = Object.keys(asuraImageMap).find(k => asuraOption.startsWith(k));
  return key ? asuraImageMap[key] : "/asura-browser.png";
}

const roleOptions = [
  "Exploratory Tester",
  "SDET",
  "Developer",
  "Product Manager",
  "Engineering / QA Lead",
  "Founder / CXO",
  "Other",
];

/* ─── Beta Signup Modal ─── */
const betaSteps = [
  {
    id: "contact",
    question: "Let's start with the basics.",
    sub: "We'll use this to keep you in the loop.",
  },
  {
    id: "expectation",
    question: "What do you expect from the Bugasura Agent Marketplace?",
    sub: "Be as specific or as vague as you like.",
  },
  {
    id: "audience",
    question: "Are you planning to build agents for yourself, your team, your company, or others?",
    sub: "Pick the one that fits best.",
    options: ["Just myself", "My QA / engineering team", "My entire company", "External clients / customers", "Not sure yet"],
  },
  {
    id: "usecases",
    question: "What use cases would you like to solve using the marketplace?",
    sub: "Pick everything that applies.",
    options: ["Automated regression testing", "API testing", "Security & vulnerability scanning", "Performance testing", "Mobile app testing", "Duplicate bug detection", "Building custom AI test agents", "CI/CD integration", "Other"],
    multi: true,
  },
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
  { code: "+7",   flag: "🇷🇺", label: "Russia" },
  { code: "+55",  flag: "🇧🇷", label: "Brazil" },
  { code: "+52",  flag: "🇲🇽", label: "Mexico" },
  { code: "+1",   flag: "🇨🇦", label: "Canada" },
  { code: "+31",  flag: "🇳🇱", label: "Netherlands" },
  { code: "+46",  flag: "🇸🇪", label: "Sweden" },
  { code: "+47",  flag: "🇳🇴", label: "Norway" },
  { code: "+45",  flag: "🇩🇰", label: "Denmark" },
  { code: "+358", flag: "🇫🇮", label: "Finland" },
  { code: "+41",  flag: "🇨🇭", label: "Switzerland" },
  { code: "+43",  flag: "🇦🇹", label: "Austria" },
  { code: "+32",  flag: "🇧🇪", label: "Belgium" },
  { code: "+351", flag: "🇵🇹", label: "Portugal" },
  { code: "+34",  flag: "🇪🇸", label: "Spain" },
  { code: "+39",  flag: "🇮🇹", label: "Italy" },
  { code: "+48",  flag: "🇵🇱", label: "Poland" },
  { code: "+420", flag: "🇨🇿", label: "Czech Republic" },
  { code: "+36",  flag: "🇭🇺", label: "Hungary" },
  { code: "+40",  flag: "🇷🇴", label: "Romania" },
  { code: "+380", flag: "🇺🇦", label: "Ukraine" },
  { code: "+30",  flag: "🇬🇷", label: "Greece" },
  { code: "+90",  flag: "🇹🇷", label: "Turkey" },
  { code: "+972", flag: "🇮🇱", label: "Israel" },
  { code: "+966", flag: "🇸🇦", label: "Saudi Arabia" },
  { code: "+974", flag: "🇶🇦", label: "Qatar" },
  { code: "+965", flag: "🇰🇼", label: "Kuwait" },
  { code: "+973", flag: "🇧🇭", label: "Bahrain" },
  { code: "+968", flag: "🇴🇲", label: "Oman" },
  { code: "+20",  flag: "🇪🇬", label: "Egypt" },
  { code: "+27",  flag: "🇿🇦", label: "South Africa" },
  { code: "+234", flag: "🇳🇬", label: "Nigeria" },
  { code: "+254", flag: "🇰🇪", label: "Kenya" },
  { code: "+233", flag: "🇬🇭", label: "Ghana" },
  { code: "+92",  flag: "🇵🇰", label: "Pakistan" },
  { code: "+880", flag: "🇧🇩", label: "Bangladesh" },
  { code: "+94",  flag: "🇱🇰", label: "Sri Lanka" },
  { code: "+977", flag: "🇳🇵", label: "Nepal" },
  { code: "+960", flag: "🇲🇻", label: "Maldives" },
  { code: "+62",  flag: "🇮🇩", label: "Indonesia" },
  { code: "+60",  flag: "🇲🇾", label: "Malaysia" },
  { code: "+66",  flag: "🇹🇭", label: "Thailand" },
  { code: "+84",  flag: "🇻🇳", label: "Vietnam" },
  { code: "+63",  flag: "🇵🇭", label: "Philippines" },
  { code: "+64",  flag: "🇳🇿", label: "New Zealand" },
  { code: "+54",  flag: "🇦🇷", label: "Argentina" },
  { code: "+56",  flag: "🇨🇱", label: "Chile" },
  { code: "+57",  flag: "🇨🇴", label: "Colombia" },
  { code: "+51",  flag: "🇵🇪", label: "Peru" },
];

const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
const isValidMobile = (v: string) => /^\d{7,15}$/.test(v.replace(/[\s\-()]/g, ""));

function PhoneInput({ value, countryCode, onValueChange, onCountryChange, onBlur, style }: {
  value: string; countryCode: string;
  onValueChange: (v: string) => void; onCountryChange: (v: string) => void;
  onBlur?: () => void;
  style?: React.CSSProperties;
}) {
  const [isCustom, setIsCustom] = useState(false);
  const [customCode, setCustomCode] = useState("");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "custom") {
      setIsCustom(true);
      setCustomCode("");
      onCountryChange("");
    } else {
      setIsCustom(false);
      onCountryChange(e.target.value);
    }
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomCode(e.target.value);
    onCountryChange(e.target.value);
  };

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      {isCustom ? (
        <input
          type="text"
          placeholder="+00"
          value={customCode}
          onChange={handleCustomChange}
          style={{ ...style, width: "80px", flexShrink: 0 }}
        />
      ) : (
        <select
          value={countryCode}
          onChange={handleSelectChange}
          style={{ ...style, width: "100px", flexShrink: 0, paddingLeft: "8px", paddingRight: "4px" }}
        >
          {COUNTRY_CODES.map((c, i) => (
            <option key={i} value={c.code}>{c.flag} {c.code}</option>
          ))}
          <option value="custom">Other</option>
        </select>
      )}
      <input
        type="tel"
        placeholder="98765 43210"
        value={value}
        onChange={e => onValueChange(e.target.value)}
        onBlur={onBlur}
        style={{ ...style, flex: 1 }}
      />
    </div>
  );
}

function BetaModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [data, setData] = useState<Record<string, string | string[]>>({
    name: "", email: "", mobile: "", mobileCountry: "+91", company: "", role: "",
    expectation: "", audience: "", usecases: [],
  });
  const [contactErrors, setContactErrors] = useState<Record<string, string>>({});
  const [contestAsura, setContestAsura] = useState("");
  const [contestCustomAsura, setContestCustomAsura] = useState("");
  const [contestSubmitting, setContestSubmitting] = useState(false);
  const [contestDone, setContestDone] = useState(false);
  const [contestAsuraError, setContestAsuraError] = useState("");

  const resolvedContestAsura = contestAsura === "Other" ? contestCustomAsura : contestAsura;

  const handleContestSubmit = async () => {
    if (!contestAsura) { setContestAsuraError("Please choose your Asura"); return; }
    if (contestAsura === "Other" && !contestCustomAsura.trim()) { setContestAsuraError("Please describe your Asura"); return; }
    setContestAsuraError("");
    setContestSubmitting(true);
    const payload = {
      name: data.name as string, email: data.email as string,
      mobile: data.mobile ? `${data.mobileCountry} ${data.mobile}` : "",
      company: data.company as string, role: data.role as string,
      asura: resolvedContestAsura, timestamp: getISTTimestamp(), type: "contest_registration",
    };
    const params = new URLSearchParams(payload as Record<string, string>);
    fetch(`${GOOGLE_SCRIPT_URL}?${params.toString()}`, { method: "GET", mode: "no-cors" }).catch(() => {});
    setContestSubmitting(false);
    setContestDone(true);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const current = betaSteps[step];
  const total = betaSteps.length;
  const progress = ((step) / total) * 100;

  const toggle = (field: string, val: string) => {
    const arr = (data[field] as string[]) || [];
    setData(prev => ({ ...prev, [field]: arr.includes(val) ? arr.filter(v => v !== val) : [...arr, val] }));
  };

  const validateContact = () => {
    const errs: Record<string, string> = {};
    if (!data.name) errs.name = "Name is required";
    if (!data.email) errs.email = "Email is required";
    else if (!isValidEmail(data.email as string)) errs.email = "Enter a valid email address";
    if (!data.role) errs.role = "Please select your role";
    if (data.mobile && !isValidMobile(data.mobile as string)) errs.mobile = "Enter a valid mobile number";
    return errs;
  };

  const canNext = () => {
    if (current.id === "contact") {
      if (!data.name || !data.email || !data.role) return false;
      if (!isValidEmail(data.email as string)) return false;
      if (data.mobile && !isValidMobile(data.mobile as string)) return false;
      return true;
    }
    if (current.multi) return (data[current.id] as string[]).length > 0;
    if (current.options) return !!data[current.id];
    return !!(data[current.id] as string)?.trim();
  };

  const handleNext = () => {
    if (current.id === "contact") {
      const errs = validateContact();
      setContactErrors(errs);
      if (Object.keys(errs).length > 0) return;
    }
    if (step < total - 1) { setStep(s => s + 1); }
    else { handleSubmit(); }
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    const fullMobile = data.mobile ? `${data.mobileCountry} ${data.mobile}` : "";
    const payload = { ...data, mobile: fullMobile, usecases: (data.usecases as string[]).join(", "), timestamp: getISTTimestamp(), type: "beta_signup" };
    try {
      const existing = JSON.parse(localStorage.getItem("bugasuraBetaSignups") || "[]");
      existing.push(payload);
      localStorage.setItem("bugasuraBetaSignups", JSON.stringify(existing));
    } catch {}
    const params = new URLSearchParams(payload as Record<string, string>);
    fetch(`${GOOGLE_SCRIPT_URL}?${params.toString()}`, { method: "GET", mode: "no-cors" }).catch(() => {});
    setSubmitting(false);
    setDone(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "14px 16px", borderRadius: "12px",
    border: "1px solid rgba(30,30,30,0.15)", background: "#ffffff",
    fontFamily: "'Clash Grotesk', sans-serif", fontSize: "15px", color: "#1E1E1E",
    outline: "none", marginBottom: "12px",
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)" }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-[580px] flex flex-col"
        style={{ background: "#FFF6E2", borderRadius: "28px", overflow: "hidden", maxHeight: "90vh" }}
      >
        {/* Progress bar */}
        <div style={{ height: "4px", background: "rgba(30,30,30,0.08)" }}>
          <div style={{ height: "100%", width: `${done ? 100 : progress}%`, background: "var(--red)", transition: "width 0.4s ease" }} />
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 flex items-center justify-center"
          style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(30,30,30,0.08)", border: "none", cursor: "pointer" }}
        >
          <X size={16} color="#1E1E1E" />
        </button>

        <div className="flex flex-col overflow-y-auto" style={{ padding: "40px 40px 32px" }}>
          {done ? (
            /* ── Success ── */
            <div className="flex flex-col items-center text-center py-4">
              <div style={{ width: "64px", height: "64px", borderRadius: "20px", background: "rgba(229,39,39,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                <Check size={28} color="var(--red)" strokeWidth={2.5} />
              </div>
              <Heading level="step" as="h2" color="var(--dark)" style={{ fontSize: "28px", marginBottom: "12px" }}>You&apos;re on the list.</Heading>
              <BodyText color="rgba(30,30,30,0.6)" style={{ fontSize: "15px", lineHeight: 1.7, maxWidth: "36ch", marginBottom: "32px" }}>
                We&apos;ll reach out before the Bugasura Agent Marketplace opens. Your input will directly shape what we build.
              </BodyText>

              {contestDone ? (
                /* ── Contest success ── */
                <div className="w-full flex flex-col items-center" style={{ background: "rgba(229,39,39,0.06)", borderRadius: "20px", padding: "28px 24px" }}>
                  <div style={{ position: "relative", marginBottom: "16px" }}>
                    <img src={getAsuraImage(resolvedContestAsura)} alt={resolvedContestAsura} style={{ width: "120px", height: "120px", objectFit: "contain", filter: "drop-shadow(0 6px 16px rgba(229,39,39,0.25))" }} />
                    <div style={{ position: "absolute", bottom: "-6px", right: "-6px", width: "26px", height: "26px", borderRadius: "50%", background: "var(--red)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Check size={12} color="#fff" strokeWidth={3} />
                    </div>
                  </div>
                  <BodyText color="var(--red)" style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "8px" }}>
                    Contest entry submitted
                  </BodyText>
                  <Heading level="card" as="p" color="var(--dark)" style={{ fontSize: "18px", marginBottom: "8px" }}>
                    Your Asura · {resolvedContestAsura.split(" —")[0]}
                  </Heading>
                  <BodyText color="rgba(30,30,30,0.55)" style={{ fontSize: "13px", lineHeight: 1.6 }}>
                    Click a picture at Booth B2 and post with <strong>#WorldOfAsuras</strong> to enter.
                  </BodyText>
                </div>
              ) : (
                /* ── Contest opt-in ── */
                <div className="w-full text-left" style={{ borderTop: "1px solid rgba(30,30,30,0.1)", paddingTop: "24px" }}>
                  <BodyText color="var(--dark)" style={{ fontSize: "15px", fontWeight: 700, marginBottom: "4px" }}>Want to register for the Photo Booth contest?</BodyText>
                  <BodyText color="rgba(30,30,30,0.55)" style={{ fontSize: "13px", lineHeight: 1.6, marginBottom: "16px" }}>
                    Pick your Asura, post on social media, and win exciting prizes from a ₹25,000 prize pool.
                  </BodyText>
                  <select
                    value={contestAsura}
                    onChange={e => { setContestAsura(e.target.value); setContestAsuraError(""); }}
                    style={{ width: "100%", padding: "14px 16px", borderRadius: "12px", border: `1px solid ${contestAsuraError ? "var(--red)" : "rgba(30,30,30,0.15)"}`, background: "#ffffff", fontFamily: "'Clash Grotesk', sans-serif", fontSize: "15px", color: "#1E1E1E", outline: "none", marginBottom: "10px" }}
                  >
                    <option value="" disabled>Choose your Asura</option>
                    {asuraOptions.map(a => <option key={a}>{a}</option>)}
                  </select>
                  {contestAsura === "Other" && (
                    <input
                      type="text"
                      placeholder="Describe the Asura you'd want"
                      value={contestCustomAsura}
                      onChange={e => { setContestCustomAsura(e.target.value); setContestAsuraError(""); }}
                      style={{ width: "100%", padding: "14px 16px", borderRadius: "12px", border: "1px solid rgba(30,30,30,0.15)", background: "#ffffff", fontFamily: "'Clash Grotesk', sans-serif", fontSize: "15px", color: "#1E1E1E", outline: "none", marginBottom: "10px" }}
                    />
                  )}
                  {contestAsuraError && <p style={{ color: "var(--red)", fontSize: "12px", marginBottom: "10px" }}>{contestAsuraError}</p>}
                  <button
                    onClick={handleContestSubmit}
                    disabled={contestSubmitting}
                    className="w-full flex items-center justify-center gap-2"
                    style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "14px", padding: "14px 20px", borderRadius: "12px", background: contestSubmitting ? "rgba(229,39,39,0.5)" : "var(--red)", color: "#ffffff", border: "none", cursor: contestSubmitting ? "wait" : "pointer" }}
                  >
                    {contestSubmitting ? "Entering…" : "Enter the contest"}
                    {!contestSubmitting && <ArrowRight size={15} strokeWidth={2.5} />}
                  </button>
                  <button onClick={onClose} style={{ marginTop: "12px", width: "100%", fontFamily: "'Clash Grotesk', sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.4)", background: "none", border: "none", cursor: "pointer" }}>
                    No thanks, close
                  </button>
                </div>
              )}

              {contestDone && (
                <button onClick={onClose} style={{ marginTop: "20px", fontFamily: "'Clash Grotesk', sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.45)", background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}>
                  Close
                </button>
              )}
            </div>
          ) : (
            <>
              {/* Step counter */}
              <BodyText color="rgba(30,30,30,0.4)" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "20px" }}>
                {step + 1} / {total}
              </BodyText>

              {/* Question */}
              <Heading level="step" as="h2" color="var(--dark)" style={{ fontSize: "clamp(20px, 3vw, 26px)", marginBottom: "8px", lineHeight: 1.2 }}>
                {current.question}
              </Heading>
              {current.sub && (
                <BodyText color="rgba(30,30,30,0.55)" style={{ fontSize: "14px", lineHeight: 1.6, marginBottom: "24px" }}>
                  {current.sub}
                </BodyText>
              )}

              {/* ── Contact fields ── */}
              {current.id === "contact" && (
                <div>
                  <input placeholder="Your name" value={data.name as string} onChange={e => { setData(p => ({ ...p, name: e.target.value })); setContactErrors(p => ({ ...p, name: "" })); }} style={{ ...inputStyle, borderColor: contactErrors.name ? "var(--red)" : undefined }} />
                  {contactErrors.name && <p style={{ color: "var(--red)", fontSize: "12px", marginTop: "10px", marginBottom: "14px" }}>{contactErrors.name}</p>}
                  <input placeholder="Work email" type="email" value={data.email as string} onChange={e => { setData(p => ({ ...p, email: e.target.value })); setContactErrors(p => ({ ...p, email: "" })); }} onBlur={() => { if (data.email && !isValidEmail(data.email as string)) setContactErrors(p => ({ ...p, email: "Enter a valid email address" })); }} style={{ ...inputStyle, borderColor: contactErrors.email ? "var(--red)" : undefined }} />
                  {contactErrors.email && <p style={{ color: "var(--red)", fontSize: "12px", marginTop: "10px", marginBottom: "14px" }}>{contactErrors.email}</p>}
                  <PhoneInput
                    value={data.mobile as string}
                    countryCode={data.mobileCountry as string}
                    onValueChange={v => { setData(p => ({ ...p, mobile: v })); setContactErrors(p => ({ ...p, mobile: "" })); }}
                    onCountryChange={v => setData(p => ({ ...p, mobileCountry: v }))}
                    onBlur={() => { if (data.mobile && !isValidMobile(data.mobile as string)) setContactErrors(p => ({ ...p, mobile: "Enter a valid mobile number" })); }}
                    style={{ ...inputStyle, borderColor: contactErrors.mobile ? "var(--red)" : undefined }}
                  />
                  {contactErrors.mobile && <p style={{ color: "var(--red)", fontSize: "12px", marginTop: "10px", marginBottom: "14px" }}>{contactErrors.mobile}</p>}
                  <input placeholder="Company" value={data.company as string} onChange={e => setData(p => ({ ...p, company: e.target.value }))} style={{ ...inputStyle }} />
                  <select value={data.role as string} onChange={e => { setData(p => ({ ...p, role: e.target.value })); setContactErrors(p => ({ ...p, role: "" })); }} style={{ ...inputStyle, marginBottom: 0, borderColor: contactErrors.role ? "var(--red)" : undefined }}>
                    <option value="" disabled>Your role</option>
                    {["SDET", "Exploratory Tester", "Developer", "Product Manager", "Engineering / QA Lead", "Founder / CXO", "Other"].map(r => <option key={r}>{r}</option>)}
                  </select>
                  {contactErrors.role && <p style={{ color: "var(--red)", fontSize: "12px", marginTop: "4px" }}>{contactErrors.role}</p>}
                </div>
              )}

              {/* ── Option pills (single) ── */}
              {current.options && !current.multi && (
                <div className="flex flex-wrap gap-2">
                  {current.options.map(opt => (
                    <button
                      key={opt}
                      onClick={() => setData(p => ({ ...p, [current.id]: opt }))}
                      style={{
                        fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "13px",
                        padding: "10px 18px", borderRadius: "100px", cursor: "pointer",
                        border: data[current.id] === opt ? "2px solid var(--red)" : "1.5px solid rgba(30,30,30,0.15)",
                        background: data[current.id] === opt ? "rgba(229,39,39,0.08)" : "#ffffff",
                        color: data[current.id] === opt ? "var(--red)" : "#1E1E1E",
                        transition: "all 0.15s",
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}

              {/* ── Option pills (multi) ── */}
              {current.options && current.multi && (
                <div className="flex flex-wrap gap-2">
                  {current.options.map(opt => {
                    const selected = (data[current.id] as string[]).includes(opt);
                    return (
                      <button
                        key={opt}
                        onClick={() => toggle(current.id, opt)}
                        style={{
                          fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "13px",
                          padding: "10px 18px", borderRadius: "100px", cursor: "pointer",
                          border: selected ? "2px solid var(--red)" : "1.5px solid rgba(30,30,30,0.15)",
                          background: selected ? "rgba(229,39,39,0.08)" : "#ffffff",
                          color: selected ? "var(--red)" : "#1E1E1E",
                          transition: "all 0.15s",
                        }}
                      >
                        {selected && "✓ "}{opt}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* ── Free text ── */}
              {!current.options && current.id !== "contact" && (
                <textarea
                  placeholder="Type your answer here…"
                  rows={4}
                  value={data[current.id] as string}
                  onChange={e => setData(p => ({ ...p, [current.id]: e.target.value }))}
                  style={{ ...inputStyle, resize: "vertical", marginBottom: 0 }}
                />
              )}

              {/* ── Navigation ── */}
              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={() => setStep(s => s - 1)}
                  disabled={step === 0}
                  className="flex items-center gap-1"
                  style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "13px", color: step === 0 ? "rgba(30,30,30,0.25)" : "rgba(30,30,30,0.55)", background: "none", border: "none", cursor: step === 0 ? "default" : "pointer" }}
                >
                  <ChevronLeft size={16} /> Back
                </button>

                <button
                  onClick={handleNext}
                  disabled={!canNext() || submitting}
                  className="flex items-center gap-2"
                  style={{
                    fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "14px",
                    padding: "12px 24px", borderRadius: "12px", border: "none", cursor: canNext() ? "pointer" : "default",
                    background: canNext() ? "var(--red)" : "rgba(30,30,30,0.1)",
                    color: canNext() ? "#ffffff" : "rgba(30,30,30,0.3)",
                    transition: "all 0.2s",
                  }}
                >
                  {submitting ? "Submitting…" : step === total - 1 ? "Submit" : "Next"}
                  {!submitting && <ChevronRight size={16} />}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AsuraEventPage() {
  const [betaOpen, setBetaOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", mobile: "", mobileCountry: "+91", company: "", role: "", asura: "" });
  const [customAsura, setCustomAsura] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [, setError] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [selectedAsura, setSelectedAsura] = useState("");

  const resolvedAsura = form.asura === "Other" ? customAsura : form.asura;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (e.target.name === "asura") setSelectedAsura(e.target.value === "Other" ? customAsura : e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.name) errs.name = "Name is required";
    if (!form.email) errs.email = "Email is required";
    else if (!isValidEmail(form.email)) errs.email = "Enter a valid email address";
    if (!form.mobile) errs.mobile = "Mobile number is required";
    else if (!isValidMobile(form.mobile)) errs.mobile = "Enter a valid mobile number";
    if (!form.company) errs.company = "Company is required";
    if (!form.role) errs.role = "Please select your role";
    if (!form.asura) errs.asura = "Please choose your Asura";
    else if (form.asura === "Other" && !customAsura.trim()) errs.asura = "Please describe your Asura";
    setFieldErrors(errs);
    if (Object.keys(errs).length > 0) { setError(true); return; }
    setError(false);
    setSubmitting(true);
    if (form.asura === "Other") setSelectedAsura(customAsura);

    const data = { ...form, asura: resolvedAsura, mobile: `${form.mobileCountry} ${form.mobile}`, timestamp: getISTTimestamp(), type: "contest_registration" };

    try {
      const existing = JSON.parse(localStorage.getItem("worldOfAsurasEntries") || "[]");
      existing.push(data);
      localStorage.setItem("worldOfAsurasEntries", JSON.stringify(existing));
    } catch {}

    if (GOOGLE_SCRIPT_URL && !GOOGLE_SCRIPT_URL.includes("PASTE_YOUR")) {
      const params = new URLSearchParams(data as Record<string, string>);
      await fetch(`${GOOGLE_SCRIPT_URL}?${params.toString()}`, { method: "GET", mode: "no-cors" }).catch(() => {});
    }

    setSubmitting(false);
    setSubmitted(true);
  };

  const shareText = encodeURIComponent(`I just entered the World of Asuras at Bugasura's booth! My Asura: ${selectedAsura} #WorldOfAsuras @Bugasura`);

  return (
    <main className="flex flex-col gap-2">
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="rounded-[32px] relative"
        style={{ backgroundColor: "var(--red)" }}
      >
        {/* Background image clipped inside its own rounded wrapper */}
        <div className="absolute inset-0 rounded-[32px] overflow-hidden" style={{ zIndex: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hero/Background.png" alt="" aria-hidden style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "bottom" }} />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center px-6 lg:px-20 pt-20 lg:pt-28 pb-4">

          <BodyText color="rgba(255,255,255,0.8)" style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "0.02em", marginBottom: "8px" }}>TribeQonf · Bengaluru</BodyText>

          <Heading
            level="hero"
            as="h1"
            color="#ffffff"
            style={{ fontSize: "clamp(44px, 6vw, 92px)", lineHeight: 1.0, letterSpacing: "-0.03em", maxWidth: "16ch", marginBottom: "24px" }}
          >
            Welcome to the<br />World of Asuras
          </Heading>

          <BodyText
            color="rgba(255,255,255,0.8)"
            style={{ fontSize: "18px", lineHeight: 1.7, maxWidth: "52ch", marginBottom: "40px" }}
          >
            Bugasura&apos;s AI agent marketplace is coming. Register for early access, choose the Asura you want summoned first, and join the contest happening right here at the booth.
          </BodyText>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center mb-12 w-full sm:w-auto">
            <Button onClick={() => setBetaOpen(true)} variant="white" className="justify-center">Register for early access</Button>
            <Button onClick={() => document.getElementById('contest')?.scrollIntoView({ behavior: 'smooth' })} variant="outline-light" className="justify-center">Join the Contest</Button>
          </div>

          {/* ── Event brief cards ── */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4" style={{ paddingTop: "100px", overflow: "visible", position: "relative", zIndex: 10 }}>

            {/* Wide card — contest */}
            <div className="lg:col-span-2 text-left" style={{ background: "#FFF6E2", borderRadius: "24px", overflow: "visible", position: "relative", padding: "32px 32px 32px 32px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hero-card-asura.png"
                alt="Asura"
                className="hidden lg:block"
                style={{ position: "absolute", top: "-140px", left: "0", width: "300px", height: "calc(100% + 140px)", objectFit: "contain", objectPosition: "bottom center" }}
              />
              <div className="lg:pl-[278px]">
              <BodyText color="rgba(30,30,30,0.45)" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "10px" }}>Photo Contest</BodyText>
              <Heading level="step" as="h3" color="var(--dark)" style={{ marginBottom: "12px" }}>Prize pool worth ₹25,000</Heading>
              <BodyText color="rgba(30,30,30,0.7)" style={{ lineHeight: 1.65, marginBottom: "24px" }}>
                Click a picture with the Bugasura Asura cutout at Booth B2 · Post on LinkedIn, Instagram, or any social media · Tag <strong style={{ color: "var(--dark)" }}>@Bugasura</strong> · Use <strong style={{ color: "var(--dark)" }}>#WorldOfAsuras</strong>
              </BodyText>
              <Button onClick={() => document.getElementById('contest')?.scrollIntoView({ behavior: 'smooth' })} variant="primary">Participate</Button>
              </div>
            </div>

            {/* Narrow card — booth */}
            <div className="lg:col-span-1 flex flex-col justify-between text-left" style={{ background: "#F0A030", borderRadius: "24px", padding: "32px" }}>
              <div>
                <Heading level="step" as="h3" color="var(--dark)" style={{ marginBottom: "20px" }}>We&apos;re at Booth B2</Heading>
                <div>
                  {[
                    { icon: <Monitor size={16} />, text: "Live Bugasura demo" },
                    { icon: <BookOpen size={16} />, text: "Book signing with Pradeep" },
                    { icon: <Gift size={16} />, text: "Free goodies while stocks last" },
                  ].map(({ icon, text }) => (
                    <div key={text} className="flex items-center gap-2" style={{ marginBottom: "10px" }}>
                      <span style={{ color: "var(--dark)", flexShrink: 0 }}>{icon}</span>
                      <BodyText color="var(--dark)" style={{ fontWeight: 600 }}>{text}</BodyText>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-8" style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid rgba(30,30,30,0.15)" }}>
                <div>
                  <BodyText color="rgba(30,30,30,0.5)" style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "4px" }}>Event</BodyText>
                  <Heading level="step" as="p" color="var(--dark)" style={{ fontSize: "18px" }}>TribeQonf</Heading>
                </div>
                <div>
                  <BodyText color="rgba(30,30,30,0.5)" style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "4px" }}>Date</BodyText>
                  <Heading level="step" as="p" color="var(--dark)" style={{ fontSize: "18px" }}>Jul 10–11, 2026</Heading>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Train illustration — transparent PNG, no blue background */}
        <div className="relative z-10 w-full px-4 lg:px-8" style={{ marginBottom: "-2px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/section5/train.png"
            alt="World of Asuras — all agents on the Bugasura train"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </section>

      {/* ── LOGO STRIP ── */}
      <LogoScroller
        bg="#FFF6E2"
        logoSet="black"
        logoOpacity={0.6}
      />

      {/* ── WHAT IS THIS ── */}
      <section
        id="intro"
        className="rounded-[32px] px-6 lg:px-20 py-16 lg:py-24"
        style={{ backgroundColor: "#F0A030" }}
      >
        <div className="max-w-[1080px] mx-auto text-center">
          <BodyText color="rgba(0,0,0,0.6)" style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "16px" }}>
            What is this, exactly
          </BodyText>
          <Heading
            level="section"
            as="h2"
            color="#1E1E1E"
            style={{ fontSize: "clamp(48px, 5vw, 68px)", lineHeight: 1.0, letterSpacing: "-0.03em", marginBottom: "20px" }}
          >
            A marketplace of AI agents built for QA — each one an Asura
          </Heading>
          <BodyText color="rgba(0,0,0,0.7)" style={{ fontSize: "17px", lineHeight: 1.75, maxWidth: "60ch", margin: "0 auto 48px" }}>
            Every Asura is a specialised AI agent — one hunts regressions, one breaks your security, one shapeshifts across your UI. The Bugasura Agent Marketplace lets you summon the right one for the job instead of building test coverage by hand. It&apos;s launching soon, and everyone who registers here gets in before the public.
          </BodyText>

          {/* Asura pods illustration */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/asura-pods.png"
            alt="Asuras in pods — the Bugasura Agent Marketplace"
            style={{ width: "100%", height: "auto", display: "block", marginBottom: "48px" }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-left">
            {[
              {
                title: "The Marketplace",
                body: "A growing library of purpose-built AI testing agents you can deploy into your Bugasura workspace — for regression, performance, security, API, and UI testing. Built on the same Asura AI that already powers Bugasura today.",
              },
              {
                title: "Early Access",
                body: "Registrants here are first in line when the Marketplace opens: first to create custom agents, first to shape what gets built, first members of the founding tester community.",
              },
              {
                title: "Your Asura, Your Rules",
                body: "Pick the Asura you want summoned first — Browser, API, Duplicate Bug, or Mobile. Your vote shapes which agents get prioritised when the Marketplace launches.",
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                className="flex flex-col"
                style={{ background: "#FFF6E2", borderRadius: "24px", padding: "32px", border: "1px solid rgba(30,30,30,0.06)" }}
              >
                <Heading level="step" as="h3" color="var(--dark)" style={{ fontSize: "22px", marginBottom: "12px" }}>{title}</Heading>
                <BodyText color="rgba(30,30,30,0.65)" style={{ fontSize: "15px", lineHeight: 1.7 }}>{body}</BodyText>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button onClick={() => setBetaOpen(true)} variant="dark">Register for Early Access</Button>
          </div>
        </div>
      </section>

      {/* ── CONTEST STEPS ── */}
      <section
        id="contest"
        className="rounded-[32px] px-6 lg:px-20 py-16 lg:py-24 relative overflow-hidden"
        style={{ backgroundColor: "var(--red)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/hero/Background.png" alt="" aria-hidden
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "bottom", zIndex: 0 }} />
        {/* Bottom darkening gradient */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(30,0,0,0.75) 100%)", zIndex: 1 }} />
        <div className="relative z-10 max-w-[1200px] mx-auto">

          {/* Title graphic */}
          <div className="flex justify-center mb-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/event-title.svg"
              alt="World of Asuras Contest"
              className="w-full md:w-auto"
              style={{ width: "min(1400px, 200%)", maxWidth: "200%", height: "auto", display: "block" }}
            />
          </div>

          <div className="mt-6 md:-mt-[100px]">
          <BodyText color="rgba(255,255,255,0.75)" style={{ fontSize: "18px", lineHeight: 1.75, maxWidth: "60ch", margin: "0 auto 48px", textAlign: "center" }}>
            Click a picture with the Bugasura Asura cutout at Booth B2, post it on LinkedIn, Instagram, or any social media channel, tag <strong style={{ color: "#ffffff" }}>@Bugasura</strong>, and use <strong style={{ color: "#ffffff" }}>#WorldOfAsuras</strong> — top 10 entries based on likes and reach will win exciting prizes from a total prize pool worth ₹25,000.
          </BodyText>
          </div>

          {/* ── PRIZES ── */}
          <div id="prizes" className="mb-16 lg:mb-24">
            <div className="max-w-[1080px] mx-auto">
              <BodyText color="rgba(255,166,0,0.8)" style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "16px" }}>
                Boons for the bold
              </BodyText>
              <Heading
                level="section"
                as="h2"
                color="#ffffff"
                style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.025em", marginBottom: "16px" }}
              >
                What you can win
              </Heading>
              {/* Full-width horizontal prize card */}
              <style>{`
                @keyframes prize-glow {
                  0%, 100% { box-shadow: 0 0 24px 4px rgba(255,166,0,0.35), 0 0 60px 12px rgba(255,166,0,0.12); }
                  50% { box-shadow: 0 0 40px 10px rgba(255,166,0,0.55), 0 0 90px 24px rgba(255,166,0,0.22); }
                }
              `}</style>
              <div
                className="flex flex-col lg:flex-row mb-8"
                style={{
                  background: "#FFF6E2",
                  borderRadius: "24px",
                  border: "2px solid rgba(255,166,0,0.7)",
                  overflow: "visible",
                  animation: "prize-glow 2.8s ease-in-out infinite",
                  position: "relative",
                }}
              >
                {/* Left: text */}
                <div className="flex flex-col justify-center" style={{ padding: "48px 48px 48px 48px", flex: 1 }}>
                  <BodyText color="var(--red)" style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "16px" }}>
                    Prize Pool · 10 Winners
                  </BodyText>
                  <Heading level="section" as="h3" color="var(--dark)" style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.025em", marginBottom: "20px" }}>
                    Exciting tech gadgets worth ₹25,000
                  </Heading>
                  <BodyText color="rgba(30,30,30,0.65)" style={{ fontSize: "15px", lineHeight: 1.6, maxWidth: "42ch" }}>
                    Top 10 contest winners will win exciting prizes from a total prize pool worth ₹25,000. Winners selected based on likes and reach — announced after verification by the Bugasura team.
                  </BodyText>
                </div>
                {/* Right: illustration — overflows top */}
                <div className="lg:w-[340px] flex-shrink-0 mt-8 lg:mt-0" style={{ position: "relative", overflow: "visible", display: "flex", alignItems: "flex-end" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/prize-asura.png"
                    alt="Prize"
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      objectFit: "contain",
                      objectPosition: "bottom center",
                      marginTop: "-20%",
                    }}
                  />
                </div>
              </div>
              <BodyText color="#ffffff" style={{ fontSize: "18px", fontWeight: 700, lineHeight: 1.7, textAlign: "center", maxWidth: "60ch", margin: "0 auto" }}>
                Everyone who registers — win or not — gets early access to the Bugasura Agent Marketplace ahead of public launch.
              </BodyText>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

            {/* Left: heading + steps */}
            <div className="flex-1 flex flex-col">
              <BodyText color="rgba(255,255,255,0.7)" style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "16px" }}>
                The booth contest
              </BodyText>
              <Heading
                level="section"
                as="h2"
                color="#ffffff"
                style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.025em", marginBottom: "14px" }}
              >
                Five steps to enter the world
              </Heading>
              <BodyText color="rgba(255,255,255,0.75)" style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "40px" }}>
                Everything below happens right here, at this booth, in about two minutes.
              </BodyText>
              {steps.map((step, i) => (
                <AccordionStep
                  key={step.num}
                  step={step}
                  isLast={i === steps.length - 1}
                />
              ))}
            </div>

            {/* Right: form panel */}
            <div
              id="register"
              className="w-full lg:w-1/2 flex-shrink-0 lg:sticky lg:top-24"
            >
              {submitted ? (
                <div className="flex flex-col items-center text-center" style={{ background: "#FFF6E2", borderRadius: "28px", padding: "48px 32px" }}>
                  <div style={{ position: "relative", marginBottom: "24px" }}>
                    <img
                      src={getAsuraImage(selectedAsura)}
                      alt={selectedAsura}
                      style={{ width: "180px", height: "180px", objectFit: "contain", filter: "drop-shadow(0 8px 24px rgba(229,39,39,0.25))" }}
                    />
                    <div style={{ position: "absolute", bottom: "-8px", right: "-8px", width: "32px", height: "32px", borderRadius: "50%", background: "var(--red)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Check size={16} color="#fff" strokeWidth={3} />
                    </div>
                  </div>
                  <Heading level="step" as="h2" color="var(--dark)" style={{ fontSize: "clamp(24px, 3vw, 36px)", marginBottom: "10px" }}>
                    You&apos;ve entered the World of Asuras
                  </Heading>
                  <BodyText color="var(--red)" style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "16px" }}>
                    Your Asura · {selectedAsura.split(" —")[0]}
                  </BodyText>
                  <BodyText color="rgba(30,30,30,0.6)" style={{ fontSize: "15px", lineHeight: 1.7, maxWidth: "38ch", marginBottom: "28px" }}>
                    Click a picture with the Bugasura Asura cutout at Booth B2, post it on LinkedIn, Instagram, or any social media channel, tag <strong>@Bugasura</strong>, and use <strong>#WorldOfAsuras</strong> and to enter the contest.
                  </BodyText>
                  <div className="flex items-center justify-between gap-4 w-full mb-6" style={{ background: "rgba(30,30,30,0.06)", border: "1px dashed rgba(30,30,30,0.2)", borderRadius: "16px", padding: "16px 20px" }}>
                    <Heading level="card" as="p" color="var(--dark)" style={{ fontSize: "clamp(16px, 2vw, 22px)" }}>#WorldOfAsuras</Heading>
                    <button onClick={() => { navigator.clipboard.writeText("#WorldOfAsuras"); }} style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "12px", color: "#0077C2", background: "rgba(0,119,194,0.1)", border: "1px solid rgba(0,119,194,0.3)", borderRadius: "100px", padding: "6px 14px", cursor: "pointer", letterSpacing: "0.05em", flexShrink: 0 }}>Copy</button>
                  </div>
                  <div className="flex gap-3 flex-wrap justify-center mb-6">
                    <a href={`https://twitter.com/intent/tweet?text=${shareText}`} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "13px", color: "var(--dark)", background: "rgba(30,30,30,0.08)", border: "1px solid rgba(30,30,30,0.12)", borderRadius: "100px", padding: "10px 20px", textDecoration: "none" }}>Share on X</a>
                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://bugasura.io/asuras/event")}`} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "13px", color: "var(--dark)", background: "rgba(30,30,30,0.08)", border: "1px solid rgba(30,30,30,0.12)", borderRadius: "100px", padding: "10px 20px", textDecoration: "none" }}>Share on LinkedIn</a>
                  </div>
                  <button onClick={() => setSubmitted(false)} style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.45)", background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}>Submit another entry</button>
                </div>
              ) : (
                <div style={{ background: "#FFF6E2", borderRadius: "28px", padding: "44px 36px" }}>
                  <div className="text-center mb-8">
                    <Heading level="step" as="h2" color="var(--dark)" style={{ fontSize: "clamp(24px, 3vw, 36px)", marginBottom: "8px" }}>Register for the contest</Heading>
                    <BodyText color="rgba(30,30,30,0.55)" style={{ fontSize: "14px", lineHeight: 1.65 }}>You&apos;ll get your Asura and your entry seal the second you submit.</BodyText>
                  </div>
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-4">
                      <label style={labelStyle}>Full name</label>
                      <input name="name" type="text" placeholder="Ada Lovelace" value={form.name} onChange={e => { handleChange(e); setFieldErrors(p => ({ ...p, name: "" })); }} style={{ ...inputStyle, borderColor: fieldErrors.name ? "var(--red)" : undefined }} />
                      {fieldErrors.name && <p style={{ color: "var(--red)", fontSize: "12px", marginTop: "10px", marginBottom: "14px" }}>{fieldErrors.name}</p>}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label style={labelStyle}>Email</label>
                        <input name="email" type="email" placeholder="ada@company.com" value={form.email} onChange={e => { handleChange(e); setFieldErrors(p => ({ ...p, email: "" })); }} onBlur={() => { if (form.email && !isValidEmail(form.email)) setFieldErrors(p => ({ ...p, email: "Enter a valid email address" })); }} style={{ ...inputStyle, borderColor: fieldErrors.email ? "var(--red)" : undefined }} />
                        {fieldErrors.email && <p style={{ color: "var(--red)", fontSize: "12px", marginTop: "10px", marginBottom: "14px" }}>{fieldErrors.email}</p>}
                      </div>
                      <div>
                        <label style={labelStyle}>Mobile number</label>
                        <PhoneInput
                          value={form.mobile}
                          countryCode={form.mobileCountry}
                          onValueChange={v => { setForm(p => ({ ...p, mobile: v })); setFieldErrors(p => ({ ...p, mobile: "" })); }}
                          onCountryChange={v => setForm(p => ({ ...p, mobileCountry: v }))}
                          onBlur={() => { if (form.mobile && !isValidMobile(form.mobile)) setFieldErrors(p => ({ ...p, mobile: "Enter a valid mobile number" })); }}
                          style={{ ...inputStyle, borderColor: fieldErrors.mobile ? "var(--red)" : undefined }}
                        />
                        {fieldErrors.mobile && <p style={{ color: "var(--red)", fontSize: "12px", marginTop: "10px", marginBottom: "14px" }}>{fieldErrors.mobile}</p>}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label style={labelStyle}>Company</label>
                        <input name="company" type="text" placeholder="Where you work" value={form.company} onChange={e => { handleChange(e); setFieldErrors(p => ({ ...p, company: "" })); }} style={{ ...inputStyle, borderColor: fieldErrors.company ? "var(--red)" : undefined }} />
                        {fieldErrors.company && <p style={{ color: "var(--red)", fontSize: "12px", marginTop: "10px", marginBottom: "14px" }}>{fieldErrors.company}</p>}
                      </div>
                      <div>
                        <label style={labelStyle}>Your role</label>
                        <select name="role" value={form.role} onChange={e => { handleChange(e); setFieldErrors(p => ({ ...p, role: "" })); }} style={{ ...inputStyle, borderColor: fieldErrors.role ? "var(--red)" : undefined }}>
                          <option value="" disabled>Select one</option>
                          {roleOptions.map(r => <option key={r}>{r}</option>)}
                        </select>
                        {fieldErrors.role && <p style={{ color: "var(--red)", fontSize: "12px", marginTop: "10px", marginBottom: "14px" }}>{fieldErrors.role}</p>}
                      </div>
                    </div>
                    <div className="mb-6">
                      <label style={labelStyle}>Which Asura would you like to see first?</label>
                      <select name="asura" value={form.asura} onChange={e => { handleChange(e); setFieldErrors(p => ({ ...p, asura: "" })); }} style={{ ...inputStyle, borderColor: fieldErrors.asura ? "var(--red)" : undefined }}>
                        <option value="" disabled>Choose your Asura</option>
                        {asuraOptions.map(a => <option key={a}>{a}</option>)}
                      </select>
                      {form.asura === "Other" && (
                        <input
                          type="text"
                          placeholder="Describe the Asura you'd want"
                          value={customAsura}
                          onChange={e => { setCustomAsura(e.target.value); setFieldErrors(p => ({ ...p, asura: "" })); }}
                          style={{ ...inputStyle, marginTop: "8px" }}
                        />
                      )}
                      {fieldErrors.asura && <p style={{ color: "var(--red)", fontSize: "12px", marginTop: "10px", marginBottom: "14px" }}>{fieldErrors.asura}</p>}
                    </div>
                    <button type="submit" disabled={submitting} className="w-full flex items-center justify-center gap-2" style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "15px", letterSpacing: "0.02em", padding: "16px 24px", borderRadius: "12px", background: submitting ? "rgba(229,39,39,0.5)" : "var(--red)", color: "#ffffff", border: "none", cursor: submitting ? "wait" : "pointer", transition: "opacity 0.2s" }}>
                      {submitting ? "Summoning…" : "Summon my Asura"}
                      {!submitting && <ArrowRight size={16} strokeWidth={2.5} />}
                    </button>
                    <BodyText color="rgba(30,30,30,0.4)" style={{ fontSize: "12px", textAlign: "center", marginTop: "14px", lineHeight: 1.6 }}>By registering you agree to be contacted about early access to the Bugasura Agent Marketplace.</BodyText>
                  </form>
                </div>
              )}
            </div>

          </div>

          {/* ── HASHTAG STRIP ── */}
          <div className="mt-16 lg:mt-24 text-center">
            <BodyText color="rgba(255,255,255,0.7)" style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "16px" }}>
              Your entry seal
            </BodyText>
            <div
              className="inline-flex items-center gap-3 mx-auto mb-6"
              style={{
                border: "2px solid rgba(255,255,255,0.4)",
                borderRadius: "100px",
                padding: "14px 32px",
              }}
            >
              <Heading level="subsection" as="p" color="#ffffff" style={{ fontSize: "clamp(20px, 3.5vw, 38px)", letterSpacing: "-0.02em" }}>
                #WorldOfAsuras
              </Heading>
            </div>
            <BodyText color="rgba(255,255,255,0.7)" style={{ fontSize: "15px", lineHeight: 1.7, maxWidth: "44ch", margin: "0 auto" }}>
              Tag <strong style={{ color: "#ffffff" }}>@Bugasura</strong> and use these hashtags on your post — that&apos;s what makes your entry count toward the contest.
            </BodyText>
          </div>

        </div>
      </section>


      <Footer cta={{
        heading: <>
          <span className="lg:block">Your Asura is </span>
          <span className="lg:block">waiting.</span>
        </>,
        body: "Start on Bugasura's free tier — and access the first Asuras as they launch to early users.",
        primaryLabel: "Start for Free",
        primaryHref: "https://my.bugasura.io?go=sign_up",
        secondaryLabel: "Explore Asuras",
        secondaryHref: "/asuras",
      }} />
      {betaOpen && <BetaModal onClose={() => setBetaOpen(false)} />}
    </main>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "'Clash Grotesk', sans-serif",
  fontWeight: 700,
  fontSize: "11px",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#0077C2",
  marginBottom: "6px",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#ffffff",
  border: "1px solid rgba(30,30,30,0.15)",
  borderRadius: "10px",
  padding: "12px 14px",
  fontFamily: "'Clash Grotesk', sans-serif",
  fontSize: "15px",
  color: "var(--dark)",
  outline: "none",
  appearance: "none",
};
