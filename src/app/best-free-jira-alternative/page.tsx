"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, X, ChevronDown, ChevronUp, Zap, FileText, DollarSign, MousePointer, BarChart3, Smartphone, Users, LayoutDashboard } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LogoScroller from "@/components/sections/LogoScroller";
import { Heading, BodyText, Button, Eyebrow } from "@/components/ui";

/* ─── data ─── */

const comparisonRows = [
  { feature: "Pricing",                        bugasura: "Unlimited Free",  jira: "10 users free, then $12.48/user/month", text: true },
  { feature: "Create, edit and delete issues", bugasura: true,  jira: true  },
  { feature: "Pin, unpin, archive projects",   bugasura: true,  jira: false },
  { feature: "Device & environment info",      bugasura: true,  jira: false },
  { feature: "Voice note and recording",       bugasura: true,  jira: false },
  { feature: "BugasuraAI for descriptions",    bugasura: true,  jira: false },
  { feature: "Detect duplicate issues",        bugasura: true,  jira: false },
  { feature: "Screen-wise annotation",         bugasura: true,  jira: false },
  { feature: "Console logs capture",           bugasura: true,  jira: false },
  { feature: "Chrome reporter",                bugasura: true,  jira: false },
  { feature: "Web widget",                     bugasura: true,  jira: false },
  { feature: "Android reporter",               bugasura: true,  jira: false },
  { feature: "Session replay",                 bugasura: true,  jira: false },
  { feature: "Integration with Asana",         bugasura: true,  jira: false },
  { feature: "Integration with Glitchtip",     bugasura: true,  jira: false },
];

const INITIAL_ROWS = 7;

const parameters = [
  { Icon: DollarSign,      label: "Cost",             jira: "Expensive for larger teams",       bugasura: "Fully free — all features, unlimited users"  },
  { Icon: MousePointer,    label: "Setup",            jira: "Time-consuming, complex config",    bugasura: "Quick setup with pre-configuration"           },
  { Icon: Zap,             label: "Ease of use",      jira: "Steep learning curve",             bugasura: "Intuitive, no onboarding needed"              },
  { Icon: FileText,        label: "AI integration",   jira: "Limited AI features",              bugasura: "Built-in AI for smart tracking"               },
  { Icon: BarChart3,       label: "Bug reporting",    jira: "Manual input required",            bugasura: "Integrated reporters with annotations"        },
  { Icon: Smartphone,      label: "Mobile",           jira: "Limited mobile functionality",     bugasura: "Fully responsive design"                      },
  { Icon: Users,           label: "Collaboration",    jira: "Basic collaboration tools",        bugasura: "Real-time collaboration built in"             },
  { Icon: LayoutDashboard, label: "Dashboards",       jira: "Manual dashboard creation",        bugasura: "Automatic dashboards out of the box"          },
];

const reviews = [
  { quote: "JIRA is a project management tool that has slowly metastasised into a full-time job.", tag: "Engineering Manager" },
  { quote: "Every new team member spends 3 days just learning how to file a ticket correctly.", tag: "QA Lead" },
  { quote: "The fact that basic features cost extra is genuinely insulting.", tag: "CTO, Series B startup" },
];

function CheckIcon({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden style={{ flexShrink: 0, marginTop: "2px" }}>
      <circle cx="8" cy="8" r="8" fill={color} fillOpacity="0.12" />
      <path d="M4.5 8l2.5 2.5 4.5-5" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function JiraAlternativePage() {
  const [showAll, setShowAll] = useState(false);
  const visibleRows = showAll ? comparisonRows : comparisonRows.slice(0, INITIAL_ROWS);

  const iconBox: React.CSSProperties = {
    width: "44px", height: "44px", borderRadius: "12px",
    background: "rgba(229,39,39,0.08)",
    display: "flex", alignItems: "center", justifyContent: "center",
    marginBottom: "14px", flexShrink: 0,
  };

  return (
    <main className="flex flex-col gap-2">
      <Navbar />

      {/* ── HERO — text left / image right ── */}
      <section
        className="rounded-[32px] overflow-hidden"
        style={{ background: "linear-gradient(160deg, #C01212 0%, #E52727 55%, #FF4F4F 100%)" }}
      >
        {/* Top: copy left + illustration right */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-0 px-8 lg:px-20 pt-20 lg:pt-28">

          {/* Left: copy */}
          <div className="flex-1 flex flex-col items-start pb-12 lg:pb-20">
            <Eyebrow variant="badge" color="rgba(255,255,255,0.7)" style={{ marginBottom: "20px", border: "1px solid rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.1)" }}>
              Free Forever · Unlimited Users
            </Eyebrow>

            <Heading
              level="hero"
              as="h1"
              color="#ffffff"
              style={{ fontSize: "clamp(44px, 5.5vw, 84px)", lineHeight: 1.0, letterSpacing: "-0.025em", marginBottom: "24px" }}
            >
              The Bug Tracker<br />
              That JIRA<br />
              <em style={{ fontStyle: "normal", color: "rgba(255,255,255,0.75)" }}>Could Not Build.</em>
            </Heading>

            <BodyText
              color="rgba(255,255,255,0.8)"
              style={{ fontSize: "17px", lineHeight: 1.75, maxWidth: "460px", marginBottom: "40px" }}
            >
              Speed, simplicity, and full context — everything your team needs to report, track, and squash bugs. No per-seat pricing. No bloat. Just better bug tracking from day one.
            </BodyText>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button href="https://my.bugasura.io?go=sign_up" variant="white" className="justify-center sm:justify-start">
                Get Bugasura for FREE
              </Button>
              <Button href="#comparison" variant="outline-light" className="justify-center sm:justify-start">
                See the comparison
              </Button>
            </div>
          </div>

          {/* Right: illustration */}
          <div
            className="hidden lg:flex flex-shrink-0 items-end justify-center"
            style={{ width: "520px", marginTop: "-80px" }}
          >
            <Image
              src="/hero/asura-hero-illustration.png"
              alt="Bugasura vs JIRA illustration"
              width={520}
              height={480}
              className="object-contain object-bottom w-full"
              priority
            />
          </div>
        </div>

        {/* Bottom: 4 badge cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 px-8 lg:px-20 pb-8 lg:pb-10">
          {[
            { label: "50,000+ users",         desc: "Developers, testers, and PMs across 25+ countries" },
            { label: "Unlimited free",         desc: "Every feature, unlimited users — no credit card required" },
            { label: "SOC 2 Type II",          desc: "Independently audited security, availability, and privacy" },
            { label: "Setup in minutes",       desc: "Pre-configured projects, zero onboarding friction" },
          ].map(({ label, desc }) => (
            <div key={label} style={{ background: "#FFF6E2", borderRadius: "20px", padding: "20px" }}>
              <Heading level="card" as="h3" color="#1E1E1E" style={{ fontSize: "clamp(16px, 1.5vw, 20px)", marginBottom: "8px" }}>{label}</Heading>
              <BodyText color="rgba(30,30,30,0.6)" style={{ fontSize: "13px", lineHeight: 1.6 }}>{desc}</BodyText>
            </div>
          ))}
        </div>
      </section>

      {/* ── LOGO STRIP ── */}
      <LogoScroller bg="#FFF6E2" logoSet="black" logoOpacity={0.6} />

      {/* ── WHY BUGASURA — bento grid ── */}
      <section
        className="rounded-[32px]"
        style={{ backgroundColor: "#FFA840", padding: "80px clamp(24px, 6vw, 80px)" }}
      >
        {/* Split header: title left, body right */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-16 mb-12">
          <div className="flex-shrink-0">
            <Heading
              level="section"
              as="h2"
              color="#1E1E1E"
              style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.0, letterSpacing: "-0.025em" }}
            >
              Five reasons<br />Bugasura wins.
            </Heading>
          </div>
          <BodyText
            color="rgba(0,0,0,0.65)"
            style={{ fontSize: "16px", lineHeight: 1.75, maxWidth: "400px" }}
          >
            JIRA was built for project management. Bugasura was built for testing. Here&apos;s what that difference actually looks like.
          </BodyText>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          {/* Large card — AI tracking */}
          <div
            className="lg:col-span-2"
            style={{ background: "#FDD9C8", borderRadius: "24px", padding: "36px", display: "flex", flexDirection: "column" }}
          >
            <div style={{ ...iconBox, background: "rgba(229,39,39,0.1)" }}>
              <Zap size={22} strokeWidth={1.6} color="#E52727" />
            </div>
            <Heading level="subsection" as="h3" color="#1E1E1E" style={{ fontSize: "clamp(24px, 3vw, 36px)", lineHeight: 1.1, marginBottom: "12px" }}>
              AI-Powered Issue Tracking
            </Heading>
            <BodyText color="rgba(30,30,30,0.75)" style={{ fontSize: "15px", lineHeight: 1.7 }}>
              Bugasura AI categorises, prioritises, and suggests resolutions automatically. Your team stops triaging and starts shipping.
            </BodyText>
            <div className="flex flex-col gap-3 mt-6">
              {["Smart categorisation on create", "AI-generated descriptions from screenshots", "Duplicate detection before it pollutes your backlog"].map(c => (
                <div key={c} className="flex items-start gap-2">
                  <CheckIcon color="#E52727" />
                  <BodyText color="rgba(30,30,30,0.8)" style={{ fontSize: "13px", lineHeight: 1.5 }}>{c}</BodyText>
                </div>
              ))}
            </div>
          </div>

          {/* Tall card — Free */}
          <div style={{ background: "#B2D9EC", borderRadius: "24px", padding: "36px", display: "flex", flexDirection: "column" }}>
            <div style={{ ...iconBox, background: "rgba(0,119,194,0.1)" }}>
              <DollarSign size={22} strokeWidth={1.6} color="#0077C2" />
            </div>
            <Heading level="subsection" as="h3" color="#1E1E1E" style={{ fontSize: "clamp(24px, 3vw, 36px)", lineHeight: 1.1, marginBottom: "12px" }}>
              Free. Forever. Unlimited.
            </Heading>
            <BodyText color="rgba(30,30,30,0.75)" style={{ fontSize: "15px", lineHeight: 1.7 }}>
              Every feature. Unlimited users. No credit card. JIRA charges per seat — we don&apos;t. Scale your team without touching a billing page.
            </BodyText>
          </div>

          {/* Small card — Contextual reporting */}
          <div style={{ background: "#FFDAA8", borderRadius: "24px", padding: "36px", display: "flex", flexDirection: "column" }}>
            <div style={{ ...iconBox, background: "rgba(255,168,64,0.2)" }}>
              <FileText size={22} strokeWidth={1.6} color="#CC7A00" />
            </div>
            <Heading level="subsection" as="h3" color="#1E1E1E" style={{ fontSize: "clamp(20px, 2.5vw, 28px)", lineHeight: 1.1, marginBottom: "12px" }}>
              Contextual Bug Reporting
            </Heading>
            <BodyText color="rgba(30,30,30,0.75)" style={{ fontSize: "14px", lineHeight: 1.65 }}>
              Screenshots, console logs, device info, and environment data — captured automatically, attached without manual work.
            </BodyText>
          </div>

          {/* Small card — Quick setup */}
          <div style={{ background: "#DCDCDC", borderRadius: "24px", padding: "36px", display: "flex", flexDirection: "column" }}>
            <div style={{ ...iconBox, background: "rgba(30,30,30,0.08)" }}>
              <MousePointer size={22} strokeWidth={1.6} color="#1E1E1E" />
            </div>
            <Heading level="subsection" as="h3" color="#1E1E1E" style={{ fontSize: "clamp(20px, 2.5vw, 28px)", lineHeight: 1.1, marginBottom: "12px" }}>
              Quick Setup
            </Heading>
            <BodyText color="rgba(30,30,30,0.75)" style={{ fontSize: "14px", lineHeight: 1.65 }}>
              Pre-configured projects and an intuitive interface. Your team is tracking bugs on day one — not day seven.
            </BodyText>
          </div>

          {/* Small card — Scale */}
          <div style={{ background: "#FDD9C8", borderRadius: "24px", padding: "36px", display: "flex", flexDirection: "column" }}>
            <div style={{ ...iconBox, background: "rgba(229,39,39,0.1)" }}>
              <BarChart3 size={22} strokeWidth={1.6} color="#E52727" />
            </div>
            <Heading level="subsection" as="h3" color="#1E1E1E" style={{ fontSize: "clamp(20px, 2.5vw, 28px)", lineHeight: 1.1, marginBottom: "12px" }}>
              Built to Scale
            </Heading>
            <BodyText color="rgba(30,30,30,0.75)" style={{ fontSize: "14px", lineHeight: 1.65 }}>
              Handles large volumes without slowing down. Built by testers who actually push tools to their limits.
            </BodyText>
          </div>

        </div>

        <div className="flex justify-center mt-12">
          <Button href="https://my.bugasura.io?go=sign_up" variant="dark">Get Bugasura for FREE</Button>
        </div>
      </section>

      {/* ── ANONYMOUS REVIEWS ── */}
      <section
        className="rounded-[32px]"
        style={{ backgroundColor: "#FFF6E2", padding: "80px clamp(24px, 6vw, 80px)" }}
      >
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-16 mb-12">
          <div className="flex-shrink-0" style={{ maxWidth: "560px" }}>
            <Heading
              level="section"
              as="h2"
              color="#1E1E1E"
              style={{ fontSize: "clamp(32px, 4.5vw, 58px)", lineHeight: 1.05, letterSpacing: "-0.025em" }}
            >
              Why so many<br />teams want out.
            </Heading>
          </div>
          <BodyText color="rgba(30,30,30,0.65)" style={{ fontSize: "16px", lineHeight: 1.75, maxWidth: "380px" }}>
            Anonymous reviews from real teams, sourced from ifuckinghatejira.com. This is what people say when they think nobody&apos;s watching.
          </BodyText>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {reviews.map(({ quote, tag }) => (
            <div
              key={tag}
              style={{ background: "#ffffff", borderRadius: "20px", padding: "32px", border: "1px solid rgba(30,30,30,0.07)", display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <BodyText color="#1E1E1E" style={{ fontSize: "16px", lineHeight: 1.65, fontStyle: "italic", flex: 1 }}>
                &ldquo;{quote}&rdquo;
              </BodyText>
              <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "11px", color: "rgba(30,30,30,0.35)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                {tag}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button href="https://my.bugasura.io?go=sign_up" variant="primary">Explore AI issue tracker</Button>
        </div>
      </section>

      {/* ── FEATURE TABLE ── */}
      <section
        id="comparison"
        className="rounded-[32px]"
        style={{ backgroundColor: "#29A5FF", padding: "80px clamp(24px, 6vw, 80px)" }}
      >
        {/* Split header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-16 mb-12">
          <div className="flex-shrink-0">
            <Heading
              level="section"
              as="h2"
              color="#1E1E1E"
              style={{ fontSize: "clamp(32px, 4.5vw, 58px)", lineHeight: 1.05, letterSpacing: "-0.025em" }}
            >
              Feature by feature.<br />No spin.
            </Heading>
          </div>
          <BodyText color="rgba(0,0,0,0.6)" style={{ fontSize: "16px", lineHeight: 1.75, maxWidth: "380px" }}>
            A straight comparison of what Bugasura and JIRA actually give you.
          </BodyText>
        </div>

        <div style={{ background: "#fff", borderRadius: "20px", overflow: "hidden" }}>

          {/* Table header row */}
          <div className="grid grid-cols-3" style={{ background: "#1E1E1E", padding: "14px 24px" }}>
            <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "11px", color: "rgba(255,255,255,0.45)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Feature</p>
            <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "11px", color: "#E52727", letterSpacing: "0.08em", textTransform: "uppercase", textAlign: "center" }}>Bugasura</p>
            <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "11px", color: "rgba(255,255,255,0.45)", letterSpacing: "0.08em", textTransform: "uppercase", textAlign: "center" }}>JIRA</p>
          </div>

          {visibleRows.map((row, i) => (
            <div
              key={row.feature}
              className="grid grid-cols-3 items-center"
              style={{
                padding: "14px 24px",
                borderBottom: i < visibleRows.length - 1 ? "1px solid rgba(30,30,30,0.07)" : "none",
                background: i % 2 === 0 ? "#ffffff" : "#fafafa",
              }}
            >
              <BodyText color="#1E1E1E" style={{ fontSize: "14px", lineHeight: 1.4 }}>{row.feature}</BodyText>

              <div style={{ display: "flex", justifyContent: "center" }}>
                {(row as { text?: boolean }).text ? (
                  <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "13px", color: "#E52727", textAlign: "center" }}>{row.bugasura as string}</span>
                ) : (
                  row.bugasura
                    ? <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#E52727", display: "flex", alignItems: "center", justifyContent: "center" }}><Check size={13} color="#fff" strokeWidth={2.5} /></span>
                    : <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "rgba(30,30,30,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}><X size={13} color="rgba(30,30,30,0.25)" strokeWidth={2} /></span>
                )}
              </div>

              <div style={{ display: "flex", justifyContent: "center" }}>
                {(row as { text?: boolean }).text ? (
                  <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "12px", color: "rgba(30,30,30,0.45)", textAlign: "center" }}>{row.jira as string}</span>
                ) : (
                  row.jira
                    ? <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "rgba(30,30,30,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}><Check size={13} color="#1E1E1E" strokeWidth={2.5} /></span>
                    : <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "rgba(30,30,30,0.06)", display: "flex", alignItems: "center", justifyContent: "center" }}><X size={13} color="rgba(30,30,30,0.25)" strokeWidth={2} /></span>
                )}
              </div>
            </div>
          ))}

          <button
            onClick={() => setShowAll(v => !v)}
            className="w-full flex items-center justify-center gap-2 py-4"
            style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "14px", color: "#E52727", background: "#fafafa", border: "none", borderTop: "1px solid rgba(30,30,30,0.07)", cursor: "pointer" }}
          >
            {showAll ? <><ChevronUp size={16} /> Hide</> : <><ChevronDown size={16} /> See all {comparisonRows.length} features</>}
          </button>
        </div>
      </section>

      {/* ── PARAMETER COMPARISON — icon rows ── */}
      <section
        className="rounded-[32px]"
        style={{ backgroundColor: "#FFF6E2", padding: "80px clamp(24px, 6vw, 80px)" }}
      >
        {/* Split header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-16 mb-12">
          <div className="flex-shrink-0">
            <Heading
              level="section"
              as="h2"
              color="#1E1E1E"
              style={{ fontSize: "clamp(32px, 4.5vw, 58px)", lineHeight: 1.05, letterSpacing: "-0.025em" }}
            >
              Eight parameters.<br />One clear winner.
            </Heading>
          </div>
          <BodyText color="rgba(30,30,30,0.65)" style={{ fontSize: "16px", lineHeight: 1.75, maxWidth: "380px" }}>
            Stop spending thinking hours on manual, repetitive work. Here&apos;s how the two tools compare across the dimensions that actually matter.
          </BodyText>
        </div>

        {/* Column labels */}
        <div className="grid grid-cols-3 mb-2 px-5">
          <div />
          <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "11px", color: "rgba(30,30,30,0.35)", letterSpacing: "0.08em", textTransform: "uppercase", textAlign: "center" }}>JIRA</p>
          <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "11px", color: "#E52727", letterSpacing: "0.08em", textTransform: "uppercase", textAlign: "center" }}>Bugasura</p>
        </div>

        <div className="flex flex-col gap-2">
          {parameters.map(({ Icon, label, jira, bugasura }, i) => (
            <div
              key={label}
              className="grid grid-cols-3 items-center gap-4"
              style={{
                padding: "16px 20px",
                borderRadius: "14px",
                background: i % 2 === 0 ? "rgba(30,30,30,0.03)" : "transparent",
              }}
            >
              {/* Label + icon */}
              <div className="flex items-center gap-3">
                <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "rgba(229,39,39,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={18} strokeWidth={1.6} color="#E52727" />
                </div>
                <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "15px", color: "#1E1E1E" }}>{label}</p>
              </div>

              <BodyText color="rgba(30,30,30,0.4)" style={{ fontSize: "13px", lineHeight: 1.5, textAlign: "center" }}>{jira}</BodyText>
              <BodyText color="#1E1E1E" style={{ fontSize: "13px", lineHeight: 1.5, textAlign: "center" }}>{bugasura}</BodyText>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button href="https://my.bugasura.io?go=sign_up" variant="primary">Don&apos;t book a demo. Just try it FREE.</Button>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section
        className="rounded-[32px]"
        style={{ backgroundColor: "#1E1E1E", padding: "80px clamp(24px, 6vw, 80px)" }}
      >
        <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "11px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "32px" }}>
            Real people. Real switch.
          </p>
          <Heading
            level="section"
            as="h2"
            color="#ffffff"
            style={{ fontSize: "clamp(24px, 3.5vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "40px" }}
          >
            &ldquo;Bugasura has been a more breezy alternative to its competitors like Jira&hellip; As someone who&apos;s worked with both Jira and Bugasura, I&apos;d pick the latter at any given time.&rdquo;
          </Heading>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
            <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "16px", color: "#ffffff" }}>Shashank Koundinya</p>
            <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "11px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.06em", textTransform: "uppercase" }}>via Product Hunt</p>
          </div>
        </div>
      </section>

      {/* ── HELP RESOURCES ── */}
      <section
        className="rounded-[32px]"
        style={{ backgroundColor: "#FFF6E2", padding: "80px clamp(24px, 6vw, 80px)" }}
      >
        {/* Split header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-16 mb-12">
          <div className="flex-shrink-0">
            <Heading
              level="section"
              as="h2"
              color="#1E1E1E"
              style={{ fontSize: "clamp(32px, 4.5vw, 58px)", lineHeight: 1.05, letterSpacing: "-0.025em" }}
            >
              Need help getting<br />started?
            </Heading>
          </div>
          <BodyText color="rgba(30,30,30,0.65)" style={{ fontSize: "16px", lineHeight: 1.75, maxWidth: "380px" }}>
            From tutorials to full feature docs — everything you need to get your team tracking bugs in minutes.
          </BodyText>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { eyebrow: "Watch", title: "What is Bugasura?", body: "Overview of Bug Tracker, Reporter, and Integrations — 8 minutes.", href: "https://www.youtube.com/watch?v=bugasura" },
            { eyebrow: "Read",  title: "Release Notes",     body: "Product release notes and support documents.",                    href: "/resources/release-notes" },
            { eyebrow: "Explore", title: "Bug Reporters",   body: "Discover our suite of bug reporters for web, mobile, and API.",   href: "/features/bug-reporters" },
            { eyebrow: "See All", title: "Every Feature",   body: "The full feature list — from issue tracking to AI agents.",       href: "/features" },
          ].map(r => (
            <a key={r.title} href={r.href} style={{ textDecoration: "none" }}>
              <div
                style={{ background: "#ffffff", borderRadius: "20px", padding: "28px", border: "1px solid rgba(30,30,30,0.07)", height: "100%", display: "flex", flexDirection: "column", transition: "box-shadow 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.09)")}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
              >
                <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "11px", color: "#E52727", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>{r.eyebrow}</p>
                <Heading level="step" as="h3" color="#1E1E1E" style={{ fontSize: "20px", marginBottom: "10px", lineHeight: 1.2 }}>{r.title}</Heading>
                <BodyText color="rgba(30,30,30,0.6)" style={{ fontSize: "14px", lineHeight: 1.6 }}>{r.body}</BodyText>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <Footer cta={{
        heading: <>Time to level up</>,
        subheading: <>your bug tracking.</>,
        body: "Free forever. Unlimited users. No credit card. Better bug tracking from day one.",
        primaryLabel: "Get Started Free",
        primaryHref: "https://my.bugasura.io?go=sign_up",
        secondaryLabel: "See All Features",
        secondaryHref: "/features",
      }} />
    </main>
  );
}
