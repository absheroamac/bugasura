"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Zap, FileText, DollarSign, MousePointer, BarChart3 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LogoScroller from "@/components/sections/LogoScroller";
import Testimonials from "@/components/sections/Testimonials";
import { Heading, BodyText, Button } from "@/components/ui";

/* ─── Combined comparison data ─── */

const comparisonRows = [
  { label: "Cost",              jira: "Expensive — $12.48/user/month after 10 users",          bugasura: "Fully free — all features, unlimited users, forever" },
  { label: "Setup",             jira: "Time-consuming, complex configuration",                  bugasura: "Quick setup with pre-configured projects" },
  { label: "Ease of use",       jira: "Steep learning curve, overwhelming for new users",       bugasura: "Intuitive interface — easy to learn and use from day one" },
  { label: "AI integration",    jira: "Limited or no AI-powered features",                      bugasura: "Built-in AI for smart issue tracking, categorisation and descriptions" },
  { label: "Bug reporting",     jira: "Manual input or third-party integrations required",      bugasura: "Integrated reporters for annotations, screen capture, session replay and console errors" },
  { label: "Performance",       jira: "Slows down with large number of issues",                 bugasura: "Optimised for high performance — even with many issues" },
  { label: "Customization",     jira: "Complex, can lead to overcomplicated workflows",         bugasura: "Balanced options — maintaining simplicity and flexibility" },
  { label: "Mobile experience", jira: "Limited functionality in mobile app",                    bugasura: "Fully responsive design across all devices" },
  { label: "Collaboration",     jira: "Basic features, often requires add-ons",                 bugasura: "Integrated real-time collaboration tools built in" },
  { label: "Dashboards",        jira: "Manual query writing needed to create dashboards",       bugasura: "Automatic dashboards from usage of tracker and reporter" },
];

type FeatureRow = { label: string; bugasura: boolean; jira: boolean };
const featureRows: FeatureRow[] = [
  { label: "Create, edit and delete issues",            bugasura: true,  jira: true  },
  { label: "Customizable issue fields",                 bugasura: true,  jira: true  },
  { label: "Create, update and delete projects",        bugasura: true,  jira: true  },
  { label: "Pin, unpin, archive projects",              bugasura: true,  jira: false },
  { label: "Duplicate projects",                        bugasura: true,  jira: true  },
  { label: "Duplicate or transfer issues",              bugasura: true,  jira: false },
  { label: "Customizable workflow control",             bugasura: true,  jira: true  },
  { label: "Sort and filter by severity, tags",         bugasura: true,  jira: true  },
  { label: "Generate visual bug reports",               bugasura: true,  jira: false },
  { label: "Customizable access controls",              bugasura: true,  jira: true  },
  { label: "Detect duplicate issues (AI)",              bugasura: true,  jira: false },
  { label: "AI suggestions for similar issues",         bugasura: true,  jira: false },
  { label: "Link related issues",                       bugasura: true,  jira: true  },
  { label: "Map issues to sprints",                     bugasura: true,  jira: true  },
  { label: "Screen annotation via reporter",            bugasura: true,  jira: false },
  { label: "Chrome reporter",                           bugasura: true,  jira: false },
  { label: "Android reporter",                          bugasura: true,  jira: false },
  { label: "Integration with GitHub",                   bugasura: true,  jira: true  },
  { label: "Integration with Slack",                    bugasura: true,  jira: true  },
  { label: "Integration with Zendesk",                  bugasura: true,  jira: false },
  { label: "Integration with Asana",                    bugasura: true,  jira: false },
  { label: "Integration with ClickUp",                  bugasura: true,  jira: false },
  { label: "Integration with Glitchtip",                bugasura: true,  jira: false },
  { label: "Email notifications",                       bugasura: true,  jira: true  },
  { label: "Export to CSV",                             bugasura: true,  jira: true  },
  { label: "Comment on issues",                         bugasura: true,  jira: true  },
];


const jiraQuotes = [
  { text: "Yeah, the Jira web app is ass slow. Thankfully all I need to do with Jira is read the ticket and maybe reply with some comments. All the workflow, tagging, and a billion required fields bullshit I punt off to my project manager to do." },
  { text: "Jira is a tire fire. It should be condemned and officially designated a superfund site. My goddamn ticket tracker shouldn't spin up my fans when I try to do something as austere as access the backlog, but, as we all know, it's impossible to display tickets without 21 MB of JavaScript and 164 HTTP requests. Yes, those are real numbers." },
  { text: "Jira is too complicated and companies like to add their own extensions to it making it even more complicated — it's not meant for devs but for project managers, and project managers like to make the devs do their job in that horrific tool." },
  { text: "We use JIRA. I hate it. It would absolutely not work well for helpdesk tickets. I use it for infosec projects and it works ok but I would rather use literally anything else." },
  { text: "Leave it to fucking Atlassian to come up with the dumbest, most bullshit idea imaginable — letting every damn person in a project edit each other's comments — and then have the nerve to force customers to shell out more money for a paid plan just to disable this god-awful 'feature.' What a fucking scam." },
  { text: "Every time I open Jira I feel like I need a roadmap just to file a bug. The interface is a monument to complexity for complexity's sake. It's what happens when you design software for the person buying it, not the person using it." },
  { text: "Jira has 47 ways to do everything and a correct way to do nothing. The backlog is a black hole. Sprints are a liturgy. And somehow, after all these years, attaching a file still feels like an accomplishment." },
];

function JiraQuoteRotator() {
  const [idx, setIdx] = useState(0);
  useEffect(() => { setIdx(Math.floor(Math.random() * jiraQuotes.length)); }, []);
  const next = () => setIdx((i) => (i + 1) % jiraQuotes.length);
  return (
    <div style={{ maxWidth: "860px", margin: "0 auto", background: "transparent" }}>
      {/* Paper background card */}
      <div
        style={{
          backgroundImage: "url('/paper-bg.png')",
          backgroundSize: "100% 100%",
          backgroundColor: "transparent",
          padding: "clamp(32px, 6vw, 60px) clamp(24px, 6vw, 64px) clamp(24px, 4vw, 32px)",
          display: "flex",
          flexDirection: "column",
          minHeight: "320px",
        }}
      >
        <div style={{ height: "1px", background: "rgba(30,30,30,0.15)", marginBottom: "32px" }} />
        <p style={{ fontFamily: "'Caveat', cursive", fontSize: "clamp(22px, 2.2vw, 28px)", lineHeight: 1.4, color: "#1E1E1E", flex: 1 }}>
          {jiraQuotes[idx].text}
        </p>
        <div style={{ height: "1px", background: "rgba(30,30,30,0.15)", marginTop: "32px", marginBottom: "20px" }} />
        <div style={{ display: "flex", justifyContent: "flex-end", paddingBottom: "12px" }}>
          <button
            onClick={next}
            style={{ background: "#1E1E1E", border: "none", cursor: "pointer", fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "13px", color: "#ffffff", padding: "10px 20px", borderRadius: "100px" }}
          >
            Another opinion →
          </button>
        </div>
      </div>
      {/* Attribution */}
      <p style={{ textAlign: "center", marginTop: "20px", fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(30,30,30,0.35)" }}>
        Powered by{" "}
        <a href="https://www.ifuckinghatejira.com" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(30,30,30,0.5)", textDecoration: "none" }}>
          ifuckinghatejira.com
        </a>
      </p>
    </div>
  );
}

function CheckIcon({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden style={{ flexShrink: 0, marginTop: "2px" }}>
      <circle cx="8" cy="8" r="8" fill={color} fillOpacity="0.12" />
      <path d="M4.5 8l2.5 2.5 4.5-5" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function JiraAlternativePage() {
  const [showFeatures, setShowFeatures] = useState(false);
  const iconBox: React.CSSProperties = {
    width: "44px", height: "44px", borderRadius: "12px",
    background: "rgba(229,39,39,0.08)",
    display: "flex", alignItems: "center", justifyContent: "center",
    marginBottom: "14px", flexShrink: 0,
  };

  return (
    <main className="flex flex-col gap-2">
      <style>{`
        .cmp-row { display: grid; grid-template-columns: 132px 240px 240px; }
        .cmp-label { position: sticky; left: 0; box-shadow: 2px 0 6px -2px rgba(0,0,0,0.06); }
        .cmp-table { min-width: 612px; }
        @media (min-width: 1024px) {
          .cmp-row { grid-template-columns: 26% 1fr 1fr; }
          .cmp-label { position: static; box-shadow: none; }
          .cmp-table { min-width: 0; }
        }
      `}</style>
      <Navbar />

      {/* ── HERO — text left / image right ── */}
      <section
        className="rounded-[32px] overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0077C2 0%, #29A5FF 60%, #4DB8FF 100%)" }}
      >
        {/* Top: copy left + illustration right */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-0 px-8 lg:px-20 pt-20 lg:pt-28 pb-12 lg:pb-20">

          {/* Left: copy */}
          <div className="flex-1 flex flex-col items-start">
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
            className="hidden lg:flex flex-shrink-0 items-center justify-center"
            style={{ width: "576px" }}
          >
            <Image
              src="/jira-hero-img.png"
              alt="Bugasura vs JIRA illustration"
              width={576}
              height={504}
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

      {/* ── JIRA REVIEWS — ifuckinghatejira.com embed ── */}
      <section
        style={{ padding: "80px clamp(24px, 6vw, 80px)" }}
      >
        <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 48px" }}>
          <Heading
            level="section"
            as="h2"
            color="#1E1E1E"
            style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            Real people. Real frustration. Anonymous JIRA reviews.
          </Heading>
        </div>

        <JiraQuoteRotator />
      </section>

      {/* ── WHY BUGASURA — bento grid ── */}
      <section
        className="rounded-[32px]"
        style={{ backgroundColor: "#FFA840", padding: "80px clamp(24px, 6vw, 80px)", overflow: "clip" }}
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

      {/* ── TESTIMONIALS ── */}
      <Testimonials />

      {/* ── COMBINED COMPARISON ── */}
      <section
        id="comparison"
        className="rounded-[32px] px-6 lg:px-20 py-16 lg:py-24"
        style={{ backgroundColor: "#FFF6E2" }}
      >
        {/* Centred headline */}
        <Heading
          level="section"
          as="h2"
          color="#1E1E1E"
          className="text-center"
          style={{ fontSize: "clamp(32px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.025em", margin: "0 auto" }}
        >
          <span className="lg:block">Point tools don&apos;t share context.</span>
          <span className="lg:block">Bugasura does.</span>
        </Heading>

        <BodyText
          color="rgba(30,30,30,0.65)"
          className="text-center mx-auto mt-6"
          style={{ fontSize: "16px", lineHeight: 1.65, maxWidth: "480px" }}
        >
          A straight look at what JIRA gives you versus what Bugasura gives you — across the things that actually slow teams down.
        </BodyText>

        {/* Comparison table */}
        <div className="mt-12 lg:mt-16 overflow-x-auto -mx-4 lg:mx-0">
        <div className="cmp-table" style={{ border: "1px solid rgba(30,30,30,0.08)", borderRadius: "20px", overflow: "clip" }}>

          {/* Column headers */}
          <div className="cmp-row">
            <div className="cmp-label" style={{ zIndex: 2, padding: "20px 24px", background: "#ffffff", borderBottom: "1px solid rgba(30,30,30,0.08)" }} />
            <div style={{ padding: "20px 24px", background: "rgba(229,39,39,0.07)", borderBottom: "1px solid rgba(229,39,39,0.12)", borderLeft: "1px solid rgba(229,39,39,0.12)" }}>
              <Image src="/bugasura-logo.png" alt="Bugasura" width={120} height={22} style={{ height: "22px", width: "auto", display: "block" }} />
            </div>
            <div style={{ padding: "20px 24px", background: "rgba(30,30,30,0.03)", borderBottom: "1px solid rgba(30,30,30,0.08)", borderLeft: "1px solid rgba(30,30,30,0.08)" }}>
              <Image src="/jira-logo.png" alt="Jira" width={60} height={22} style={{ height: "22px", width: "auto", display: "block" }} />
            </div>
          </div>

          {/* Data rows */}
          {comparisonRows.map((row, i) => (
            <div key={i} className="cmp-row" style={{ background: i % 2 === 0 ? "#ffffff" : "#fafafa" }}>
              <div className="cmp-label" style={{ zIndex: 1, padding: "18px 24px", borderTop: "1px solid rgba(30,30,30,0.06)", background: i % 2 === 0 ? "#ffffff" : "#fafafa" }}>
                <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "14px", color: "#1E1E1E" }}>{row.label}</p>
              </div>
              <div style={{ padding: "18px 24px", borderTop: "1px solid rgba(229,39,39,0.08)", borderLeft: "1px solid rgba(229,39,39,0.1)", background: i % 2 === 0 ? "rgba(229,39,39,0.03)" : "rgba(229,39,39,0.05)" }}>
                <div className="flex items-center gap-2">
                  <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#E52727", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <BodyText color="#1E1E1E" style={{ fontSize: "14px", lineHeight: 1.5, fontWeight: 600 }}>{row.bugasura}</BodyText>
                </div>
              </div>
              <div style={{ padding: "18px 24px", borderTop: "1px solid rgba(30,30,30,0.06)", borderLeft: "1px solid rgba(30,30,30,0.06)" }}>
                <div className="flex items-center gap-2">
                  <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(30,30,30,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M3 3l4 4M7 3l-4 4" stroke="rgba(30,30,30,0.6)" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </span>
                  <BodyText color="rgba(30,30,30,0.7)" style={{ fontSize: "14px", lineHeight: 1.5 }}>{row.jira}</BodyText>
                </div>
              </div>
            </div>
          ))}

          {/* Toggle button */}
          <div style={{ borderTop: "1px solid rgba(30,30,30,0.08)", display: "flex", justifyContent: "center", padding: "20px 24px", background: "#fafafa" }}>
            <button
              onClick={() => setShowFeatures(v => !v)}
              style={{ display: "flex", alignItems: "center", gap: "8px", background: "none", border: "1px solid rgba(30,30,30,0.15)", borderRadius: "100px", padding: "10px 20px", cursor: "pointer", fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "13px", color: "#1E1E1E" }}
            >
              {showFeatures ? "Hide feature comparison" : "View full feature comparison"}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transition: "transform 0.2s", transform: showFeatures ? "rotate(180deg)" : "rotate(0deg)" }}>
                <path d="M3 5l4 4 4-4" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Feature checklist — collapsible */}
          {showFeatures && (
            <>
              <div className="cmp-row">
                <div className="cmp-label" style={{ zIndex: 1, padding: "16px 24px", background: "rgba(30,30,30,0.03)", borderTop: "2px solid rgba(30,30,30,0.08)" }}>
                  <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(30,30,30,0.4)" }}>Feature checklist</p>
                </div>
                <div style={{ padding: "16px 24px", background: "rgba(229,39,39,0.05)", borderTop: "2px solid rgba(229,39,39,0.15)", borderLeft: "1px solid rgba(229,39,39,0.12)" }} />
                <div style={{ padding: "16px 24px", background: "rgba(30,30,30,0.02)", borderTop: "2px solid rgba(30,30,30,0.08)", borderLeft: "1px solid rgba(30,30,30,0.08)" }} />
              </div>
              {featureRows.map((row, i) => (
                <div key={i} className="cmp-row" style={{ background: i % 2 === 0 ? "#ffffff" : "#fafafa" }}>
                  <div className="cmp-label" style={{ zIndex: 1, padding: "14px 24px", borderTop: "1px solid rgba(30,30,30,0.05)", background: i % 2 === 0 ? "#ffffff" : "#fafafa" }}>
                    <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "13px", color: "#1E1E1E" }}>{row.label}</p>
                  </div>
                  <div style={{ padding: "14px 24px", background: "rgba(229,39,39,0.05)", borderTop: "1px solid rgba(229,39,39,0.08)", borderLeft: "1px solid rgba(229,39,39,0.08)", display: "flex", alignItems: "center" }}>
                    {row.bugasura ? (
                      <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#E52727", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l2.5 2.5L9 1" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                    ) : (
                      <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: "rgba(30,30,30,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 1l6 6M7 1l-6 6" stroke="rgba(30,30,30,0.4)" strokeWidth="1.4" strokeLinecap="round"/></svg>
                      </span>
                    )}
                  </div>
                  <div style={{ padding: "14px 24px", background: "rgba(30,30,30,0.02)", borderTop: "1px solid rgba(30,30,30,0.05)", borderLeft: "1px solid rgba(30,30,30,0.05)", display: "flex", alignItems: "center" }}>
                    {row.jira ? (
                      <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#29A5FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l2.5 2.5L9 1" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                    ) : (
                      <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: "rgba(30,30,30,0.06)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 1l6 6M7 1l-6 6" stroke="rgba(30,30,30,0.35)" strokeWidth="1.4" strokeLinecap="round"/></svg>
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>{/* end inner rounded table */}
        </div>{/* end scroll wrapper */}

        <div className="flex justify-center mt-14">
          <Button href="https://my.bugasura.io?go=sign_up" variant="primary">Don&apos;t book a demo. Just try it FREE.</Button>
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
