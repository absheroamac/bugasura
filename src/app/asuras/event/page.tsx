"use client";

import { useState } from "react";
import { Trophy, Gift, Star, Check, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Heading, BodyText, Button } from "@/components/ui";

/* ─── Replace with your deployed Google Apps Script Web App URL ─── */
const GOOGLE_SCRIPT_URL = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";

const steps = [
  {
    num: "01",
    title: "Register for early access",
    body: "Fill the form below with your name, email, mobile, company and role. Takes under a minute.",
    tag: null,
  },
  {
    num: "02",
    title: "Choose your Asura",
    body: "Tell us which bug-hunting demon you'd want summoned first — regression, security, performance, API or UI. It shapes what we build next.",
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
    body: "Get your photo at the booth mask cutout. Post it on Instagram, LinkedIn or X with #WorldOfAsuras and tag @Bugasura.",
    tag: null,
  },
  {
    num: "05",
    title: "Winners announced at close",
    body: "Best posts and a lucky draw from every valid entry are picked at the end of the event. Winners are announced live at the booth.",
    tag: null,
  },
];

const prizes = [
  {
    rank: "Best post · Grand boon",
    name: "The Sovereign Asura",
    desc: "₹15,000 voucher + a founding-member badge on the Marketplace + a 1:1 onboarding session when it launches.",
    highlight: true,
    Icon: Trophy,
  },
  {
    rank: "Runner-up",
    name: "The Warrior Asura",
    desc: "₹7,500 voucher + early-access Marketplace credits.",
    highlight: false,
    Icon: Star,
  },
  {
    rank: "Lucky draw · all entries",
    name: "The Wanderer’s Boon",
    desc: "Bugasura merch pack + guaranteed early-access invite when the Marketplace opens.",
    highlight: false,
    Icon: Gift,
  },
];

const asuraOptions = [
  "Vega — the Regression Hunter",
  "Kali — the Chaos Tester",
  "Indra — the Performance Sentinel",
  "Nikumbha — the Security Breaker",
  "Shesha — the API Slitherer",
  "Mahisha — the UI Shapeshifter",
];

const roleOptions = [
  "QA Engineer / Tester",
  "SDET",
  "Developer",
  "Product Manager",
  "Engineering / QA Lead",
  "Founder / CXO",
  "Other",
];

export default function AsuraEventPage() {
  const [form, setForm] = useState({ name: "", email: "", mobile: "", company: "", role: "", asura: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [selectedAsura, setSelectedAsura] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (e.target.name === "asura") setSelectedAsura(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.mobile || !form.company || !form.role || !form.asura) {
      setError(true);
      return;
    }
    setError(false);
    setSubmitting(true);

    const data = { ...form, timestamp: new Date().toISOString() };

    try {
      const existing = JSON.parse(localStorage.getItem("worldOfAsurasEntries") || "[]");
      existing.push(data);
      localStorage.setItem("worldOfAsurasEntries", JSON.stringify(existing));
    } catch {}

    if (GOOGLE_SCRIPT_URL && !GOOGLE_SCRIPT_URL.includes("PASTE_YOUR")) {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).catch(() => {});
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
        className="rounded-[32px] overflow-hidden"
        style={{ background: "linear-gradient(160deg, #3D0000 0%, #C00808 60%, #E52727 100%)" }}
      >
        <div className="flex flex-col items-center text-center px-6 lg:px-20 pt-20 lg:pt-28 pb-4">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 mb-6"
            style={{
              background: "rgba(255,255,255,0.12)",
              borderRadius: "100px",
              padding: "8px 18px",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <span style={{ fontSize: "12px", fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, color: "#FFF6E2", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Live at the booth · scan → summon → win
            </span>
          </div>

          <Heading
            level="hero"
            as="h1"
            color="#ffffff"
            style={{ fontSize: "clamp(44px, 6vw, 92px)", lineHeight: 1.0, letterSpacing: "-0.03em", maxWidth: "16ch", marginBottom: "24px" }}
          >
            Welcome to the World of Asuras
          </Heading>

          <BodyText
            color="rgba(255,255,255,0.8)"
            style={{ fontSize: "18px", lineHeight: 1.7, maxWidth: "52ch", marginBottom: "40px" }}
          >
            Bugasura&apos;s AI agent marketplace is coming. Register for early access, choose the Asura you want summoned first, and join the contest happening right here at the booth.
          </BodyText>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
            <Button href="#register" variant="white">Register for early access</Button>
            <Button href="#contest" variant="outline-light">See the contest</Button>
          </div>
        </div>

        {/* Stat strip */}
        <div className="grid grid-cols-3 gap-3 px-6 lg:px-20 pb-8 lg:pb-10">
          {[
            { stat: "#WorldOfAsuras", label: "Official hashtag" },
            { stat: "Free", label: "Marketplace early access" },
            { stat: "Today only", label: "Booth contest window" },
          ].map(({ stat, label }) => (
            <div key={label} className="flex flex-col" style={{ background: "#FFF6E2", borderRadius: "20px", padding: "20px" }}>
              <Heading level="card" as="p" color="#1A1A1A" style={{ fontSize: "clamp(14px, 1.8vw, 22px)", marginBottom: "6px" }}>{stat}</Heading>
              <BodyText color="rgba(30,30,30,0.55)" style={{ fontSize: "12px", lineHeight: 1.5 }}>{label}</BodyText>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT IS THIS ── */}
      <section
        id="intro"
        className="rounded-[32px] px-6 lg:px-20 py-16 lg:py-24"
        style={{ backgroundColor: "#FFF6E2" }}
      >
        <div className="max-w-[1080px] mx-auto">
          <BodyText color="#0077C2" style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "16px" }}>
            What is this, exactly
          </BodyText>
          <Heading
            level="section"
            as="h2"
            color="var(--dark)"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.025em", maxWidth: "18ch", marginBottom: "20px" }}
          >
            A marketplace of AI agents built for QA — each one an Asura
          </Heading>
          <BodyText color="rgba(30,30,30,0.65)" style={{ fontSize: "17px", lineHeight: 1.75, maxWidth: "60ch", marginBottom: "48px" }}>
            Every Asura is a specialised AI agent — one hunts regressions, one breaks your security, one shapeshifts across your UI. The Bugasura Agent Marketplace lets you summon the right one for the job instead of building test coverage by hand. It&apos;s launching soon, and everyone who registers here gets in before the public.
          </BodyText>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {[
              {
                title: "The Marketplace",
                body: "A growing library of purpose-built AI testing agents you can deploy into your Bugasura workspace — for regression, performance, security, API, and UI testing. Built on the same Asura AI that already powers Bugasura today.",
              },
              {
                title: "Early Access",
                body: "Registrants here are first in line when the Marketplace opens: first to create custom agents, first to shape what gets built, first members of the founding tester community.",
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                className="flex flex-col"
                style={{ background: "#ffffff", borderRadius: "24px", padding: "32px", border: "1px solid rgba(30,30,30,0.08)" }}
              >
                <Heading level="step" as="h3" color="var(--dark)" style={{ fontSize: "22px", marginBottom: "12px" }}>{title}</Heading>
                <BodyText color="rgba(30,30,30,0.65)" style={{ fontSize: "15px", lineHeight: 1.7 }}>{body}</BodyText>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTEST STEPS ── */}
      <section
        id="contest"
        className="rounded-[32px] px-6 lg:px-20 py-16 lg:py-24"
        style={{ background: "linear-gradient(160deg, #0077C2 0%, #29A5FF 60%, #4DB8FF 100%)" }}
      >
        <div className="max-w-[1080px] mx-auto">
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
          <BodyText color="rgba(255,255,255,0.75)" style={{ fontSize: "17px", lineHeight: 1.75, maxWidth: "52ch", marginBottom: "48px" }}>
            Everything below happens right here, at this booth, in about two minutes.
          </BodyText>

          <div className="flex flex-col">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="flex gap-6 lg:gap-10 py-7"
                style={{ borderTop: "1px solid rgba(255,255,255,0.2)", borderBottom: i === steps.length - 1 ? "1px solid rgba(255,255,255,0.2)" : undefined }}
              >
                <Heading
                  level="subsection"
                  as="p"
                  color="rgba(255,255,255,0.35)"
                  style={{ fontSize: "clamp(28px, 3.5vw, 48px)", lineHeight: 1, flexShrink: 0, width: "60px", letterSpacing: "-0.02em" }}
                >
                  {step.num}
                </Heading>
                <div>
                  <Heading level="step" as="h3" color="#ffffff" style={{ fontSize: "clamp(18px, 2vw, 24px)", marginBottom: "8px" }}>
                    {step.title}
                  </Heading>
                  <BodyText color="rgba(255,255,255,0.75)" style={{ fontSize: "15px", lineHeight: 1.7, maxWidth: "56ch" }}>
                    {step.body}
                  </BodyText>
                  {step.tag && (
                    <div
                      className="inline-flex items-center gap-1.5 mt-3"
                      style={{
                        background: "rgba(255,255,255,0.15)",
                        border: "1px solid rgba(255,255,255,0.3)",
                        borderRadius: "100px",
                        padding: "4px 12px",
                      }}
                    >
                      <Check size={12} color="rgba(255,255,255,0.9)" strokeWidth={2.5} />
                      <span style={{ fontSize: "11px", fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, color: "rgba(255,255,255,0.9)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                        {step.tag}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRIZES ── */}
      <section
        id="prizes"
        className="rounded-[32px] px-6 lg:px-20 py-16 lg:py-24"
        style={{ backgroundColor: "var(--dark)" }}
      >
        <div className="max-w-[1080px] mx-auto">
          <BodyText color="rgba(255,166,0,0.8)" style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "16px" }}>
            Boons for the bold
          </BodyText>
          <Heading
            level="section"
            as="h2"
            color="#ffffff"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.025em", marginBottom: "48px" }}
          >
            What you can win
          </Heading>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
            {prizes.map(({ rank, name, desc, highlight, Icon }) => (
              <div
                key={name}
                className="flex flex-col"
                style={{
                  background: highlight ? "linear-gradient(160deg, #3D0000, #1A0000)" : "rgba(255,255,255,0.05)",
                  borderRadius: "24px",
                  padding: "32px",
                  border: highlight ? "1px solid rgba(255,166,0,0.5)" : "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div
                  style={{ width: "44px", height: "44px", borderRadius: "12px", background: highlight ? "rgba(255,166,0,0.15)" : "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}
                >
                  <Icon size={22} strokeWidth={1.6} color={highlight ? "#FFA640" : "rgba(255,255,255,0.6)"} />
                </div>
                <BodyText color={highlight ? "rgba(255,166,0,0.8)" : "rgba(255,255,255,0.4)"} style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "10px" }}>
                  {rank}
                </BodyText>
                <Heading level="step" as="h3" color={highlight ? "#FFA640" : "#ffffff"} style={{ fontSize: "clamp(22px, 2.5vw, 28px)", marginBottom: "12px" }}>
                  {name}
                </Heading>
                <BodyText color="rgba(255,255,255,0.55)" style={{ fontSize: "14px", lineHeight: 1.7 }}>
                  {desc}
                </BodyText>
              </div>
            ))}
          </div>

          <div
            className="flex items-start gap-4 px-6 py-5"
            style={{ background: "rgba(255,255,255,0.05)", borderRadius: "16px", borderLeft: "3px solid #FFA640" }}
          >
            <BodyText color="rgba(255,255,255,0.55)" style={{ fontSize: "14px", lineHeight: 1.7 }}>
              Everyone who registers — win or not — gets early access to the Bugasura Agent Marketplace ahead of public launch.
            </BodyText>
          </div>
        </div>
      </section>

      {/* ── HASHTAG STRIP ── */}
      <section
        className="rounded-[32px] px-6 lg:px-20 py-14 lg:py-20 text-center"
        style={{ backgroundColor: "#FFF6E2" }}
      >
        <BodyText color="#0077C2" style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "16px" }}>
          Your entry seal
        </BodyText>
        <div
          className="inline-flex items-center gap-3 mx-auto mb-6"
          style={{
            border: "2px solid rgba(229,39,39,0.4)",
            borderRadius: "100px",
            padding: "14px 32px",
          }}
        >
          <Heading level="subsection" as="p" color="var(--red)" style={{ fontSize: "clamp(24px, 4vw, 44px)", letterSpacing: "-0.02em" }}>
            #WorldOfAsuras
          </Heading>
        </div>
        <BodyText color="rgba(30,30,30,0.6)" style={{ fontSize: "16px", lineHeight: 1.7, maxWidth: "44ch", margin: "0 auto" }}>
          Tag <strong style={{ color: "var(--dark)" }}>@Bugasura</strong> and use this hashtag on your post — that&apos;s what makes your entry count toward the contest.
        </BodyText>
      </section>

      {/* ── REGISTER FORM ── */}
      <section
        id="register"
        className="rounded-[32px] px-6 lg:px-20 py-16 lg:py-24"
        style={{ background: "linear-gradient(160deg, #0077C2 0%, #29A5FF 60%, #4DB8FF 100%)" }}
      >
        <div className="max-w-[640px] mx-auto">

          {submitted ? (
            /* ── Success state ── */
            <div
              className="flex flex-col items-center text-center"
              style={{ background: "#FFF6E2", borderRadius: "28px", padding: "48px 32px" }}
            >
              <div
                style={{ width: "72px", height: "72px", borderRadius: "20px", background: "rgba(229,39,39,0.12)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}
              >
                <Check size={32} color="var(--red)" strokeWidth={2} />
              </div>
              <Heading level="step" as="h2" color="var(--dark)" style={{ fontSize: "clamp(24px, 3vw, 36px)", marginBottom: "10px" }}>
                You&apos;ve entered the World of Asuras
              </Heading>
              <BodyText color="#0077C2" style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px" }}>
                Your Asura · {selectedAsura}
              </BodyText>
              <BodyText color="rgba(30,30,30,0.6)" style={{ fontSize: "15px", lineHeight: 1.7, maxWidth: "38ch", marginBottom: "28px" }}>
                Get your photo at the booth mask cutout, then post it using the hashtag below and tag <strong>@Bugasura</strong> to enter the contest.
              </BodyText>

              <div
                className="flex items-center justify-between gap-4 w-full mb-6"
                style={{ background: "rgba(30,30,30,0.06)", border: "1px dashed rgba(30,30,30,0.2)", borderRadius: "16px", padding: "16px 20px" }}
              >
                <Heading level="card" as="p" color="var(--dark)" style={{ fontSize: "clamp(18px, 2.5vw, 26px)" }}>#WorldOfAsuras</Heading>
                <button
                  onClick={() => { navigator.clipboard.writeText("#WorldOfAsuras"); }}
                  style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "12px", color: "#0077C2", background: "rgba(0,119,194,0.1)", border: "1px solid rgba(0,119,194,0.3)", borderRadius: "100px", padding: "6px 14px", cursor: "pointer", letterSpacing: "0.05em" }}
                >
                  Copy
                </button>
              </div>

              <div className="flex gap-3 flex-wrap justify-center mb-6">
                <a
                  href={`https://twitter.com/intent/tweet?text=${shareText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "13px", color: "var(--dark)", background: "rgba(30,30,30,0.08)", border: "1px solid rgba(30,30,30,0.12)", borderRadius: "100px", padding: "10px 20px", textDecoration: "none" }}
                >
                  Share on X
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://bugasura.io/asuras/event")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "13px", color: "var(--dark)", background: "rgba(30,30,30,0.08)", border: "1px solid rgba(30,30,30,0.12)", borderRadius: "100px", padding: "10px 20px", textDecoration: "none" }}
                >
                  Share on LinkedIn
                </a>
              </div>

              <button
                onClick={() => setSubmitted(false)}
                style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.45)", background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}
              >
                Submit another entry
              </button>
            </div>
          ) : (
            /* ── Form ── */
            <div style={{ background: "#FFF6E2", borderRadius: "28px", padding: "44px 36px" }}>
              <div className="text-center mb-8">
                <BodyText color="#0077C2" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "10px" }}>
                  Step 01 of 05
                </BodyText>
                <Heading level="step" as="h2" color="var(--dark)" style={{ fontSize: "clamp(24px, 3vw, 36px)", marginBottom: "8px" }}>
                  Register for early access
                </Heading>
                <BodyText color="rgba(30,30,30,0.55)" style={{ fontSize: "14px", lineHeight: 1.65 }}>
                  You&apos;ll get your Asura and your hashtag the second you submit.
                </BodyText>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                {/* Name */}
                <div className="mb-4">
                  <label style={labelStyle}>Full name</label>
                  <input name="name" type="text" placeholder="Ada Lovelace" value={form.name} onChange={handleChange} style={inputStyle} />
                </div>

                {/* Email + Mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label style={labelStyle}>Email</label>
                    <input name="email" type="email" placeholder="ada@company.com" value={form.email} onChange={handleChange} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Mobile number</label>
                    <input name="mobile" type="tel" placeholder="+91 98765 43210" value={form.mobile} onChange={handleChange} style={inputStyle} />
                  </div>
                </div>

                {/* Company + Role */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label style={labelStyle}>Company</label>
                    <input name="company" type="text" placeholder="Where you work" value={form.company} onChange={handleChange} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Your role</label>
                    <select name="role" value={form.role} onChange={handleChange} style={inputStyle}>
                      <option value="" disabled>Select one</option>
                      {roleOptions.map(r => <option key={r}>{r}</option>)}
                    </select>
                  </div>
                </div>

                {/* Asura pick */}
                <div className="mb-6">
                  <label style={labelStyle}>Which Asura would you like to see first?</label>
                  <select name="asura" value={form.asura} onChange={handleChange} style={inputStyle}>
                    <option value="" disabled>Choose your Asura</option>
                    {asuraOptions.map(a => <option key={a}>{a}</option>)}
                  </select>
                </div>

                {error && (
                  <BodyText color="var(--red)" style={{ fontSize: "13px", marginBottom: "16px" }}>
                    Please fill in every field before summoning your Asura.
                  </BodyText>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2"
                  style={{
                    fontFamily: "'Clash Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: "15px",
                    letterSpacing: "0.02em",
                    padding: "16px 24px",
                    borderRadius: "12px",
                    background: submitting ? "rgba(229,39,39,0.5)" : "var(--red)",
                    color: "#ffffff",
                    border: "none",
                    cursor: submitting ? "wait" : "pointer",
                    transition: "opacity 0.2s",
                  }}
                >
                  {submitting ? "Summoning…" : "Summon my Asura"}
                  {!submitting && <ArrowRight size={16} strokeWidth={2.5} />}
                </button>

                <BodyText color="rgba(30,30,30,0.4)" style={{ fontSize: "12px", textAlign: "center", marginTop: "14px", lineHeight: 1.6 }}>
                  By registering you agree to be contacted about early access to the Bugasura Agent Marketplace.
                </BodyText>
              </form>
            </div>
          )}
        </div>
      </section>

      <Footer cta={{
        heading: <>
          <span className="lg:block">Your Asura is</span>
          <span className="lg:block">waiting.</span>
        </>,
        body: "Start on Bugasura's free tier — and access the first Asuras as they launch to early users.",
        primaryLabel: "Start for Free",
        primaryHref: "https://my.bugasura.io?go=sign_up",
        secondaryLabel: "Explore Asuras",
        secondaryHref: "/asuras",
      }} />
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
