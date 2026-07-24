"use client";

import { useState, useEffect } from "react";
import { Check, ArrowRight, X } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Heading, BodyText, Button } from "@/components/ui";
import LogoScroller from "@/components/sections/LogoScroller";

/* ─── Replace with your deployed Google Apps Script Web App URL ─── */
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwYaaKN3iv9BSaH7Pnx-Eb2JqhK4FrKfy1KmB06TtWWyRZlNenE9V-srLM-Yyt1a2Lb9Q/exec";

function getISTTimestamp() {
  return new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
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
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [data, setData] = useState({ name: "", email: "", mobile: "", mobileCountry: "+91", company: "", role: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!data.name) errs.name = "Name is required";
    if (!data.email) errs.email = "Email is required";
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
        className="relative w-full max-w-[540px] flex flex-col"
        style={{ background: "#FFF6E2", borderRadius: "28px", overflow: "hidden", maxHeight: "90vh" }}
      >
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
            <div className="flex flex-col items-center text-center py-8">
              <div style={{ width: "64px", height: "64px", borderRadius: "20px", background: "rgba(229,39,39,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                <Check size={28} color="var(--red)" strokeWidth={2.5} />
              </div>
              <Heading level="step" as="h2" color="var(--dark)" style={{ fontSize: "28px", marginBottom: "12px" }}>You&apos;re on the list.</Heading>
              <BodyText color="rgba(30,30,30,0.6)" style={{ fontSize: "15px", lineHeight: 1.7, maxWidth: "36ch", marginBottom: "28px" }}>
                We&apos;ll reach out before the Bugasura Agent Marketplace opens. Your input will directly shape what we build.
              </BodyText>
              <button onClick={onClose} style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.45)", background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}>
                Close
              </button>
            </div>
          ) : (
            <>
              <Heading level="step" as="h2" color="var(--dark)" style={{ fontSize: "clamp(20px, 3vw, 26px)", marginBottom: "6px", lineHeight: 1.2 }}>
                Register for early access.
              </Heading>
              <BodyText color="rgba(30,30,30,0.55)" style={{ fontSize: "14px", lineHeight: 1.6, marginBottom: "24px" }}>
                We&apos;ll keep you in the loop before the Marketplace opens.
              </BodyText>
              <form onSubmit={handleSubmit} noValidate>
                <input placeholder="Your name" value={data.name} onChange={e => { setData(p => ({ ...p, name: e.target.value })); setErrors(p => ({ ...p, name: "" })); }} style={{ ...inputStyle, borderColor: errors.name ? "var(--red)" : undefined }} />
                {errors.name && <p style={{ color: "var(--red)", fontSize: "12px", marginTop: "-8px", marginBottom: "12px" }}>{errors.name}</p>}
                <input placeholder="Work email" type="email" value={data.email} onChange={e => { setData(p => ({ ...p, email: e.target.value })); setErrors(p => ({ ...p, email: "" })); }} onBlur={() => { if (data.email && !isValidEmail(data.email)) setErrors(p => ({ ...p, email: "Enter a valid email address" })); }} style={{ ...inputStyle, borderColor: errors.email ? "var(--red)" : undefined }} />
                {errors.email && <p style={{ color: "var(--red)", fontSize: "12px", marginTop: "-8px", marginBottom: "12px" }}>{errors.email}</p>}
                <PhoneInput
                  value={data.mobile}
                  countryCode={data.mobileCountry}
                  onValueChange={v => { setData(p => ({ ...p, mobile: v })); setErrors(p => ({ ...p, mobile: "" })); }}
                  onCountryChange={v => setData(p => ({ ...p, mobileCountry: v }))}
                  onBlur={() => { if (data.mobile && !isValidMobile(data.mobile)) setErrors(p => ({ ...p, mobile: "Enter a valid mobile number" })); }}
                  style={{ ...inputStyle, borderColor: errors.mobile ? "var(--red)" : undefined }}
                />
                {errors.mobile && <p style={{ color: "var(--red)", fontSize: "12px", marginTop: "-8px", marginBottom: "12px" }}>{errors.mobile}</p>}
                <input placeholder="Company" value={data.company} onChange={e => setData(p => ({ ...p, company: e.target.value }))} style={{ ...inputStyle }} />
                <select value={data.role} onChange={e => { setData(p => ({ ...p, role: e.target.value })); setErrors(p => ({ ...p, role: "" })); }} style={{ ...inputStyle, marginBottom: 0, borderColor: errors.role ? "var(--red)" : undefined }}>
                  <option value="" disabled>Your role</option>
                  {roleOptions.map(r => <option key={r}>{r}</option>)}
                </select>
                {errors.role && <p style={{ color: "var(--red)", fontSize: "12px", marginTop: "4px", marginBottom: "12px" }}>{errors.role}</p>}
                <button type="submit" disabled={submitting} className="w-full flex items-center justify-center gap-2 mt-5" style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "15px", padding: "16px 24px", borderRadius: "12px", background: submitting ? "rgba(229,39,39,0.5)" : "var(--red)", color: "#ffffff", border: "none", cursor: submitting ? "wait" : "pointer" }}>
                  {submitting ? "Submitting…" : "Get early access"}
                  {!submitting && <ArrowRight size={16} strokeWidth={2.5} />}
                </button>
              </form>

            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AsuraEventPage() {
  const [betaOpen, setBetaOpen] = useState(false);

  return (
    <main className="flex flex-col gap-2">
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="rounded-[32px] relative overflow-hidden"
        style={{ backgroundColor: "var(--red)" }}
      >
        {/* Background image clipped inside its own rounded wrapper */}
        <div className="absolute inset-0 rounded-[32px] overflow-hidden" style={{ zIndex: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hero/Background.png" alt="" aria-hidden style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "bottom" }} />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center px-6 lg:px-20 pt-20 lg:pt-28" style={{ paddingBottom: 0 }}>

          <Heading
            level="hero"
            as="h1"
            color="#ffffff"
            className="mt-8 lg:mt-0"
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

          <div className="flex justify-center mb-6 w-full sm:w-auto">
            <Button href="/early-access" variant="white" className="justify-center">Register for early access</Button>
          </div>


        </div>

        {/* Train illustration — transparent PNG, no blue background */}
        <div className="relative z-10 w-[130%] -ml-[15%] lg:w-full lg:ml-0 px-0 lg:px-8 mt-4 lg:-mt-[100px]" style={{ marginBottom: "-2px", pointerEvents: "none" }}>
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
        className="rounded-[32px] px-6 lg:px-20 py-16 lg:py-24 overflow-hidden"
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
            A marketplace of AI agents built for QA, each one an Asura
          </Heading>
          <BodyText color="rgba(0,0,0,0.7)" style={{ fontSize: "17px", lineHeight: 1.75, maxWidth: "60ch", margin: "0 auto 48px" }}>
            Every Asura is a specialised AI agent. One hunts regressions, one breaks your security, one shapeshifts across your UI. The Bugasura Agent Marketplace lets you summon the right one for the job instead of building test coverage by hand. It&apos;s launching soon, and everyone who registers here gets in before the public.
          </BodyText>

          {/* Asura pods illustration */}
          <div className="pods-wrap" style={{ marginBottom: "48px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/asura-pods.png" alt="Asuras in pods — the Bugasura Agent Marketplace" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
          <style>{`.pods-wrap img { transform: scale(1); } @media (max-width: 1023px) { .pods-wrap img { transform: scale(1.4); transform-origin: center center; } }`}</style>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-left">
            {[
              {
                title: "The Marketplace",
                body: "A growing library of purpose-built AI testing agents you can deploy into your Bugasura workspace, for regression, performance, security, API, and UI testing. Built on the same Asura AI that already powers Bugasura today.",
              },
              {
                title: "Early Access",
                body: "Registrants here are first in line when the Marketplace opens: first to create custom agents, first to shape what gets built, first members of the founding tester community.",
              },
              {
                title: "Your Asura, Your Rules",
                body: "Pick the Asura you want summoned first: Browser, API, Duplicate Bug, or Mobile. Your vote shapes which agents get prioritised when the Marketplace launches.",
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
            <Button href="/early-access" variant="dark">Register for Early Access</Button>
          </div>
        </div>
      </section>


      <Footer cta={{
        heading: <>
          <span className="lg:block">Your Asura is </span>
          <span className="lg:block">waiting.</span>
        </>,
        body: "Start on Bugasura's free tier and access the first Asuras as they launch to early users.",
        primaryLabel: "Start for Free",
        primaryHref: "https://my.bugasura.io?go=sign_up",
        secondaryLabel: "Explore Asuras",
        secondaryHref: "/asuras",
      }} />
      {betaOpen && <BetaModal onClose={() => setBetaOpen(false)} />}
    </main>
  );
}

