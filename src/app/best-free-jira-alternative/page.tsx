"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LogoScroller from "@/components/sections/LogoScroller";
import { Heading, BodyText, Button } from "@/components/ui";
import { Check, X, ChevronDown, ChevronUp } from "lucide-react";

/* ─── Comparison table data ─── */
const comparisonRows = [
  { feature: "Pricing", bugasura: "Unlimited Free", jira: "10 users FREE, then $12.48/user/month", bugasuraWins: true },
  { feature: "Create, edit and delete issues", bugasura: true, jira: true, bugasuraWins: false },
  { feature: "Pin, unpin, archive projects", bugasura: true, jira: false, bugasuraWins: true },
  { feature: "Displays device/environment info", bugasura: true, jira: false, bugasuraWins: true },
  { feature: "Voice note and recording", bugasura: true, jira: false, bugasuraWins: true },
  { feature: "BugasuraAI for descriptions", bugasura: true, jira: false, bugasuraWins: true },
  { feature: "Detect duplicate issues", bugasura: true, jira: false, bugasuraWins: true },
  { feature: "Screen-wise annotation", bugasura: true, jira: false, bugasuraWins: true },
  { feature: "Console logs", bugasura: true, jira: false, bugasuraWins: true },
  { feature: "Chrome reporter", bugasura: true, jira: false, bugasuraWins: true },
  { feature: "Web widget", bugasura: true, jira: false, bugasuraWins: true },
  { feature: "Android reporter", bugasura: true, jira: false, bugasuraWins: true },
  { feature: "Session replay", bugasura: true, jira: false, bugasuraWins: true },
  { feature: "Integration with Asana", bugasura: true, jira: false, bugasuraWins: true },
  { feature: "Integration with Glitchtip", bugasura: true, jira: false, bugasuraWins: true },
];

const INITIAL_ROWS = 7;

/* ─── Parameter comparison data ─── */
const parameters = [
  { label: "Cost", jira: "Expensive for larger teams", bugasura: "Fully free with all features" },
  { label: "Setup", jira: "Time-consuming and complex", bugasura: "Quick setup with pre-configuration" },
  { label: "Ease of Use", jira: "Steep learning curve", bugasura: "Intuitive and easy to learn" },
  { label: "AI Integration", jira: "Limited AI features", bugasura: "Built-in AI for smart tracking" },
  { label: "Bug Reporting", jira: "Manual input required", bugasura: "Integrated reporters with annotations" },
  { label: "Performance", jira: "Degrades with scale", bugasura: "Optimised for high performance" },
  { label: "Customisation", jira: "Complex workflows", bugasura: "Balanced and flexible options" },
  { label: "Mobile Experience", jira: "Limited mobile functionality", bugasura: "Fully responsive design" },
  { label: "Collaboration", jira: "Basic collaboration", bugasura: "Real-time collaboration tools" },
  { label: "Dashboards", jira: "Manual dashboard creation", bugasura: "Automatic dashboards" },
];

/* ─── Feature cards ─── */
const features = [
  {
    title: "AI-Powered Issue Tracking",
    body: "Automating categorisation, prioritisation, and solutions so your team ships faster and spends zero time on admin.",
    color: "#FDD9C8",
  },
  {
    title: "Contextual Bug Reporting",
    body: "Built-in automated bug capture with screenshots, console logs, device info — no manual input required.",
    color: "#FFDAA8",
  },
  {
    title: "Free. Forever. Unlimited.",
    body: "Every feature, unlimited users, no credit card. JIRA charges per seat. We don't.",
    color: "#B2D9EC",
  },
  {
    title: "Quick Setup",
    body: "Pre-configured projects, intuitive interface, zero onboarding friction. Your team is testing on day one.",
    color: "#DCDCDC",
  },
  {
    title: "Built to Scale",
    body: "Handles large volumes of issues without slowing down. Built by testers who actually push tools to their limits.",
    color: "#FDD9C8",
  },
];

/* ─── Help resources ─── */
const resources = [
  {
    eyebrow: "Watch",
    title: "What is Bugasura?",
    body: "Overview of Bug Tracker, Reporter, and Integrations — 8 minutes.",
    href: "https://www.youtube.com/watch?v=bugasura",
  },
  {
    eyebrow: "Read",
    title: "Release Notes",
    body: "Product release notes and support documents.",
    href: "/resources/release-notes",
  },
  {
    eyebrow: "Explore",
    title: "Bug Reporters",
    body: "Discover our suite of bug reporters for web, mobile, and API.",
    href: "/features/bug-reporters",
  },
  {
    eyebrow: "See All",
    title: "Every Feature",
    body: "The full feature list — from issue tracking to AI agents.",
    href: "/features",
  },
];

export default function JiraAlternativePage() {
  const [showAll, setShowAll] = useState(false);

  const visibleRows = showAll ? comparisonRows : comparisonRows.slice(0, INITIAL_ROWS);

  return (
    <main className="flex flex-col gap-2">
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="rounded-[32px] relative overflow-hidden flex flex-col items-center text-center px-6 lg:px-20 pt-24 lg:pt-32 pb-16 lg:pb-24"
        style={{ backgroundColor: "#E52727" }}
      >
        <div className="absolute inset-0 rounded-[32px] overflow-hidden" style={{ zIndex: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hero/Background.png" alt="" aria-hidden style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "bottom", opacity: 0.4 }} />
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full"
            style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}
          >
            <span style={{ fontSize: "12px", fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, color: "#fff", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Free Forever · Unlimited Users
            </span>
          </div>

          <Heading
            level="hero"
            as="h1"
            color="#ffffff"
            style={{ fontSize: "clamp(44px, 7vw, 96px)", lineHeight: 1.0, letterSpacing: "-0.03em", maxWidth: "18ch", marginBottom: "24px" }}
          >
            The Bug Tracker That JIRA Could Not Build
          </Heading>

          <BodyText
            color="rgba(255,255,255,0.85)"
            style={{ fontSize: "clamp(16px, 1.5vw, 20px)", lineHeight: 1.7, maxWidth: "52ch", marginBottom: "40px" }}
          >
            Speed, simplicity, and full context — everything your team needs to report, track, and squash bugs in 2024. No per-seat pricing. No bloat. Just results.
          </BodyText>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="https://my.bugasura.io?go=sign_up" variant="white">Get Bugasura for FREE</Button>
            <Button href="#comparison" variant="outline-light">See the Comparison</Button>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF STRIP ── */}
      <section
        className="rounded-[32px] px-6 lg:px-20 py-6"
        style={{ backgroundColor: "#1E1E1E" }}
      >
        <p style={{ textAlign: "center", fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "clamp(13px, 1.2vw, 16px)", color: "rgba(255,255,255,0.55)", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: "0" }}>
          Used by <span style={{ color: "#ffffff" }}>50,000+ developers, testers, and product managers</span> to ship quality features in <span style={{ color: "#ffffff" }}>25+ countries</span>
        </p>
      </section>

      {/* ── LOGO STRIP ── */}
      <LogoScroller bg="#FFF6E2" logoSet="black" logoOpacity={0.6} />

      {/* ── WHY BUGASURA — 5 feature cards ── */}
      <section
        className="rounded-[32px] px-6 lg:px-20 py-16 lg:py-24"
        style={{ backgroundColor: "#FFA840" }}
      >
        <div className="max-w-[1080px] mx-auto">
          <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "12px", color: "rgba(0,0,0,0.55)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px" }}>
            Why Bugasura
          </p>
          <Heading
            level="section"
            as="h2"
            color="#1E1E1E"
            style={{ fontSize: "clamp(36px, 5vw, 68px)", lineHeight: 1.05, letterSpacing: "-0.025em", maxWidth: "20ch", marginBottom: "48px" }}
          >
            The best free JIRA alternative — here&apos;s why
          </Heading>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex flex-col"
                style={{ background: f.color, borderRadius: "20px", padding: "28px 28px 32px" }}
              >
                <Heading level="step" as="h3" color="#1E1E1E" style={{ fontSize: "clamp(20px, 2vw, 26px)", marginBottom: "12px", lineHeight: 1.2 }}>
                  {f.title}
                </Heading>
                <BodyText color="rgba(30,30,30,0.7)" style={{ fontSize: "15px", lineHeight: 1.65 }}>
                  {f.body}
                </BodyText>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button href="https://my.bugasura.io?go=sign_up" variant="dark">Get Bugasura for FREE</Button>
          </div>
        </div>
      </section>

      {/* ── ANONYMOUS REVIEWS ── */}
      <section
        className="rounded-[32px] px-6 lg:px-20 py-16 lg:py-24"
        style={{ backgroundColor: "#FFF6E2" }}
      >
        <div className="max-w-[1080px] mx-auto text-center">
          <Heading
            level="section"
            as="h2"
            color="#1E1E1E"
            style={{ fontSize: "clamp(32px, 4.5vw, 60px)", lineHeight: 1.05, letterSpacing: "-0.025em", marginBottom: "20px" }}
          >
            Want to know why so many technologists want to move away from JIRA?
          </Heading>
          <BodyText color="rgba(30,30,30,0.6)" style={{ fontSize: "17px", lineHeight: 1.7, maxWidth: "56ch", margin: "0 auto 48px" }}>
            Anonymous reviews from real teams, sourced from ifuckinghatejira.com. These aren&apos;t cherry-picked. This is what people say when they think nobody&apos;s watching.
          </BodyText>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-left">
            {[
              { quote: "JIRA is a project management tool that has slowly metastasised into a full-time job.", tag: "Engineering Manager" },
              { quote: "Every new team member spends 3 days just learning how to file a ticket correctly.", tag: "QA Lead" },
              { quote: "The fact that basic features cost extra is genuinely insulting.", tag: "CTO, Series B startup" },
            ].map(({ quote, tag }) => (
              <div
                key={quote}
                style={{ background: "#ffffff", borderRadius: "20px", padding: "28px 32px", border: "1px solid rgba(30,30,30,0.08)" }}
              >
                <BodyText color="#1E1E1E" style={{ fontSize: "16px", lineHeight: 1.65, marginBottom: "16px", fontStyle: "italic" }}>
                  &ldquo;{quote}&rdquo;
                </BodyText>
                <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "12px", color: "rgba(30,30,30,0.4)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  {tag}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button href="https://my.bugasura.io?go=sign_up" variant="primary">Explore AI issue tracker</Button>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section
        id="comparison"
        className="rounded-[32px] px-6 lg:px-20 py-16 lg:py-24"
        style={{ backgroundColor: "#29A5FF" }}
      >
        <div className="max-w-[1080px] mx-auto">
          <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "12px", color: "rgba(0,0,0,0.5)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px" }}>
            Feature by feature
          </p>
          <Heading
            level="section"
            as="h2"
            color="#1E1E1E"
            style={{ fontSize: "clamp(32px, 4.5vw, 60px)", lineHeight: 1.05, letterSpacing: "-0.025em", marginBottom: "48px", maxWidth: "24ch" }}
          >
            Jira vs Bugasura — the honest comparison
          </Heading>

          {/* Table */}
          <div style={{ background: "#fff", borderRadius: "20px", overflow: "hidden" }}>
            {/* Header row */}
            <div className="grid grid-cols-3" style={{ background: "#1E1E1E", padding: "16px 24px" }}>
              <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "12px", color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Feature</p>
              <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "12px", color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", textTransform: "uppercase", textAlign: "center" }}>Bugasura</p>
              <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "12px", color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", textTransform: "uppercase", textAlign: "center" }}>JIRA</p>
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

                {/* Bugasura cell */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {typeof row.bugasura === "boolean" ? (
                    row.bugasura
                      ? <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#E52727", display: "flex", alignItems: "center", justifyContent: "center" }}><Check size={13} color="#fff" strokeWidth={2.5} /></span>
                      : <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(30,30,30,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}><X size={13} color="rgba(30,30,30,0.3)" strokeWidth={2} /></span>
                  ) : (
                    <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "13px", color: "#E52727" }}>{row.bugasura}</span>
                  )}
                </div>

                {/* JIRA cell */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {typeof row.jira === "boolean" ? (
                    row.jira
                      ? <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(30,30,30,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}><Check size={13} color="#1E1E1E" strokeWidth={2.5} /></span>
                      : <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(30,30,30,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}><X size={13} color="rgba(30,30,30,0.3)" strokeWidth={2} /></span>
                  ) : (
                    <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "13px", color: "rgba(30,30,30,0.5)", textAlign: "center" }}>{row.jira}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Toggle */}
            <button
              onClick={() => setShowAll(v => !v)}
              className="w-full flex items-center justify-center gap-2 py-4"
              style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "14px", color: "#E52727", background: "#fafafa", border: "none", borderTop: "1px solid rgba(30,30,30,0.07)", cursor: "pointer", letterSpacing: "0.02em" }}
            >
              {showAll ? <><ChevronUp size={16} /> Hide</>  : <><ChevronDown size={16} /> See all {comparisonRows.length} features</>}
            </button>
          </div>
        </div>
      </section>

      {/* ── PARAMETER COMPARISON ── */}
      <section
        className="rounded-[32px] px-6 lg:px-20 py-16 lg:py-24"
        style={{ backgroundColor: "#FFF6E2" }}
      >
        <div className="max-w-[1080px] mx-auto">
          <Heading
            level="section"
            as="h2"
            color="#1E1E1E"
            style={{ fontSize: "clamp(32px, 4.5vw, 60px)", lineHeight: 1.05, letterSpacing: "-0.025em", marginBottom: "12px", maxWidth: "22ch" }}
          >
            Stop spending thinking hours on manual testing
          </Heading>
          <BodyText color="rgba(30,30,30,0.6)" style={{ fontSize: "17px", lineHeight: 1.7, maxWidth: "52ch", marginBottom: "48px" }}>
            Ten parameters. One clear winner.
          </BodyText>

          {/* Parameter grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2px" }}>
            {/* Column headers */}
            <div className="grid grid-cols-3" style={{ marginBottom: "8px" }}>
              <div />
              <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "12px", color: "rgba(30,30,30,0.4)", letterSpacing: "0.08em", textTransform: "uppercase", textAlign: "center" }}>JIRA</p>
              <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "12px", color: "#E52727", letterSpacing: "0.08em", textTransform: "uppercase", textAlign: "center" }}>Bugasura</p>
            </div>

            {parameters.map((p, i) => (
              <div
                key={p.label}
                className="grid grid-cols-3 items-center gap-3"
                style={{
                  padding: "16px 20px",
                  borderRadius: "12px",
                  background: i % 2 === 0 ? "rgba(30,30,30,0.03)" : "transparent",
                }}
              >
                <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "14px", color: "#1E1E1E" }}>{p.label}</p>
                <BodyText color="rgba(30,30,30,0.45)" style={{ fontSize: "13px", lineHeight: 1.5, textAlign: "center" }}>{p.jira}</BodyText>
                <BodyText color="#1E1E1E" style={{ fontSize: "13px", lineHeight: 1.5, textAlign: "center", fontWeight: 500 }}>{p.bugasura}</BodyText>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-12">
            <Button href="https://my.bugasura.io?go=sign_up" variant="primary">Don&apos;t book a demo. Just try it FREE</Button>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section
        className="rounded-[32px] px-6 lg:px-20 py-16 lg:py-24"
        style={{ backgroundColor: "#1E1E1E" }}
      >
        <div className="max-w-[900px] mx-auto text-center">
          <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "12px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "32px" }}>
            Real people. Real switch.
          </p>
          <Heading
            level="section"
            as="h2"
            color="#ffffff"
            style={{ fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: "32px" }}
          >
            &ldquo;Bugasura has been a more breezy alternative to its competitors like Jira&hellip; I&apos;d pick the latter at any given time.&rdquo;
          </Heading>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
            <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "16px", color: "#ffffff" }}>Shashank Koundinya</p>
            <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "12px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.06em", textTransform: "uppercase" }}>via Product Hunt</p>
          </div>
        </div>
      </section>

      {/* ── HELP RESOURCES ── */}
      <section
        className="rounded-[32px] px-6 lg:px-20 py-16 lg:py-24"
        style={{ backgroundColor: "#FFF6E2" }}
      >
        <div className="max-w-[1080px] mx-auto">
          <Heading
            level="section"
            as="h2"
            color="#1E1E1E"
            style={{ fontSize: "clamp(32px, 4.5vw, 60px)", lineHeight: 1.05, letterSpacing: "-0.025em", marginBottom: "48px", maxWidth: "22ch" }}
          >
            Need help understanding how to use Bugasura?
          </Heading>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {resources.map((r) => (
              <a
                key={r.title}
                href={r.href}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{ background: "#ffffff", borderRadius: "20px", padding: "28px", border: "1px solid rgba(30,30,30,0.07)", height: "100%", display: "flex", flexDirection: "column", transition: "box-shadow 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.10)")}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
                >
                  <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "11px", color: "#E52727", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>
                    {r.eyebrow}
                  </p>
                  <Heading level="step" as="h3" color="#1E1E1E" style={{ fontSize: "20px", marginBottom: "10px", lineHeight: 1.2 }}>
                    {r.title}
                  </Heading>
                  <BodyText color="rgba(30,30,30,0.6)" style={{ fontSize: "14px", lineHeight: 1.6 }}>
                    {r.body}
                  </BodyText>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <Footer cta={{
        heading: <>
          <span className="lg:block">Time to level up </span>
          <span className="lg:block">your bug tracking.</span>
        </>,
        body: "Free forever. Unlimited users. No credit card. Just better bug tracking from day one.",
        primaryLabel: "Get Started Free",
        primaryHref: "https://my.bugasura.io?go=sign_up",
        secondaryLabel: "See All Features",
        secondaryHref: "/features",
      }} />
    </main>
  );
}
