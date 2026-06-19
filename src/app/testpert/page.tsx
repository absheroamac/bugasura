import React from "react";
import Image from "next/image";
import { Brain, Target, Cpu, Layers, ListChecks, TrendingUp, MessageSquare, Zap, Users } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SolutionsPlatformLayers from "@/components/sections/solutions/SolutionsPlatformLayers";
import SolutionsTestimonial from "@/components/sections/solutions/SolutionsTestimonial";
import { Heading, BodyText, Button, Card, Eyebrow } from "@/components/ui";

export const metadata = {
  title: "Testpert — AI-Powered Expert Testing | Bugasura",
  description: "Testpert is your test expert's extension — it thinks, questions, and strategizes like your best QA mind would. Not a point & shoot. A DSLR with an expert behind it.",
};

// ── Feature bento card styles ─────────────────────────────────────────────────

const iconBox: React.CSSProperties = {
  width: "64px",
  height: "64px",
  borderRadius: "14px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "20px",
  flexShrink: 0,
};

// ── Page ─────────────────────────────────────────────────────────────────────

export default function TestpertPage() {
  return (
    <main className="flex flex-col gap-2">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="rounded-[32px] overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0077C2 0%, #29A5FF 60%, #4DB8FF 100%)" }}
      >
        <div className="flex flex-col lg:flex-row lg:items-start gap-0 px-8 lg:px-20 pt-20 lg:pt-28">

          {/* Left: copy */}
          <div className="flex-1 flex flex-col items-start pb-12 lg:pb-20">
            <Heading
              level="hero"
              as="h1"
              color="#ffffff"
              style={{ fontSize: "clamp(44px, 5.5vw, 84px)", lineHeight: 1.0, letterSpacing: "-0.025em", marginBottom: "24px" }}
            >
              The world&apos;s last<br />
              AI testing tool.
            </Heading>
            <BodyText
              color="rgba(255,255,255,0.85)"
              style={{ fontSize: "17px", lineHeight: 1.75, maxWidth: "460px", marginBottom: "44px" }}
            >
              Testpert is your test expert&apos;s extension — it thinks, questions, and strategizes like your best QA mind would. Not automation. Expert amplification.
            </BodyText>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button
                href="https://calendly.com/get-bugasura/45min"
                target="_blank"
                rel="noopener noreferrer"
                variant="white"
                className="justify-center sm:justify-start"
              >
                Book a demo
              </Button>
              <Button
                href="https://my.bugasura.io?go=sign_up"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline-light"
                className="justify-center sm:justify-start"
              >
                Start for free
              </Button>
            </div>
          </div>

          {/* Right: illustration */}
          <div
            className="hidden lg:flex flex-shrink-0 items-end justify-center"
            style={{ width: "45%", alignSelf: "flex-end" }}
          >
            <Image
              src="/illustrations/testpert-hero.png"
              alt=""
              width={760}
              height={507}
              style={{ width: "100%", height: "auto", display: "block" }}
              sizes="45vw"
              priority
            />
          </div>
        </div>

        {/* Badge bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 px-8 lg:px-20 pb-8 lg:pb-10">
          {[
            { Icon: Brain,    iconColor: "#29A5FF", label: "Expert-in-the-loop" },
            { Icon: Target,   iconColor: "#F0A030", label: "Context-driven testing" },
            { Icon: TrendingUp, iconColor: "#E52727", label: "Risk-based coverage" },
            { Icon: Cpu,      iconColor: "#6B7280", label: "Private AI processing" },
          ].map(({ Icon, iconColor, label }) => (
            <div key={label} className="flex items-center gap-3" style={{ background: "#FFF6E2", borderRadius: "16px", padding: "12px 16px" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: `${iconColor}14`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon size={22} strokeWidth={1.6} color={iconColor} />
              </div>
              <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "14px", color: "#1A1A1A", lineHeight: 1.3, margin: 0 }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Comparison — Not a point & shoot ─────────────────────────────── */}
      <section className="rounded-[32px] px-4 py-12 lg:px-20 lg:py-24">
        {/* Heading */}
        <Heading
          level="section"
          as="h2"
          color="#1A0A00"
          className="text-center"
          style={{ fontSize: "clamp(28px, 5vw, 64px)", lineHeight: 1.05, margin: "0 auto" }}
        >
          Not a point &amp; shoot. A DSLR — with an expert behind it.
        </Heading>
        <BodyText
          color="rgba(20,10,0,0.8)"
          maxWidth="480px"
          className="text-center mx-auto mt-6"
          style={{ fontSize: "16px", lineHeight: 1.65 }}
        >
          The expert human in the loop matters. Testpert puts the intelligence back in the hands of your best testers — amplified by AI.
        </BodyText>

        {/* Two-column comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mt-10 lg:mt-14">

          {/* Left — Other AI tools */}
          <div className="flex flex-col" style={{ border: "1.5px solid rgba(30,30,30,0.15)", borderRadius: "24px", padding: "32px" }}>
            <div className="text-center lg:text-left" style={{ marginBottom: "8px" }}>
              <Heading level="subsection" as="h3" color="var(--dark)" style={{ fontSize: "clamp(22px, 3vw, 38px)", lineHeight: 1.1 }}>
                Other AI testing tools
              </Heading>
            </div>
            <ul className="mt-6">
              {[
                "No understanding of product context or business risk",
                "Generates tests from scripts, not from knowledge",
                "Replaces your testers — no expert review before execution",
                "Coverage gaps invisible until something breaks in production",
                "Every sprint starts from scratch — no intelligence compounds",
              ].map((point) => (
                <li key={point} className="flex items-start gap-4 py-4" style={{ borderTop: "1px solid rgba(20,10,0,0.1)" }}>
                  <span className="flex-shrink-0" style={{ fontSize: "16px", color: "rgba(20,10,0,0.35)", fontWeight: 600, lineHeight: 1.6, marginTop: "1px" }}>✕</span>
                  <BodyText as="span" color="rgba(20,10,0,0.6)" className="text-[16px] lg:text-[18px]">{point}</BodyText>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Testpert */}
          <div className="flex flex-col" style={{ border: "1.5px solid #0077C2", borderRadius: "24px", padding: "32px" }}>
            <div className="text-center lg:text-left" style={{ marginBottom: "8px" }}>
              <Heading level="subsection" as="h3" color="#0077C2" style={{ fontSize: "clamp(22px, 3vw, 38px)", lineHeight: 1.1 }}>
                Testpert
              </Heading>
            </div>
            <ul className="mt-6">
              {[
                "Ingests your full product context before writing a single test",
                "Asks expert questions to surface risk and clarify ambiguity",
                "Expert-in-the-loop — humans approve, AI executes at scale",
                "Risk-based prioritisation against business and user impact",
                "Platform intelligence compounds — smarter every sprint",
              ].map((point) => (
                <li key={point} className="flex items-start gap-4 py-4" style={{ borderTop: "1px solid rgba(0,119,194,0.15)" }}>
                  <span className="flex-shrink-0" style={{ fontSize: "16px", color: "#0077C2", fontWeight: 600, lineHeight: 1.6, marginTop: "1px" }}>✓</span>
                  <BodyText as="span" color="#1A0A00" className="text-[16px] lg:text-[18px]" style={{ fontWeight: 600 }}>{point}</BodyText>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ── What makes Testpert different — EnterprisePersonas pattern ─── */}
      <section className="rounded-[32px]" style={{ backgroundColor: "var(--cream)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-16 mb-12">
          <div className="flex-shrink-0">
            <Heading level="section" as="h2" color="var(--dark)" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.0, letterSpacing: "-0.025em" }}>
              What makes Testpert<br />different.
            </Heading>
          </div>
          <BodyText color="rgba(30,30,30,0.8)" style={{ fontSize: "16px", lineHeight: 1.75, maxWidth: "420px" }}>
            Most AI testing tools replace your testers. Testpert amplifies them — bringing the expert judgment your best QA lead has, to every sprint.
          </BodyText>
        </div>

        {/* Cards — EnterprisePersonas pattern */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {[
            {
              illustration: "/illustrations/qa-teams.png",
              role: "Expert Q&A Engine",
              roleColor: "#E52727",
              title: "Expert questions before the first test.",
              body: "Testpert interrogates your requirements the way a senior QA lead would — mapping risk, clarifying ambiguity, identifying edge cases before a single test is written.",
              checks: [
                "Interrogates requirements like a senior QA lead",
                "Maps risk across user journeys and critical flows",
                "Surfaces ambiguity and edge cases before sprint starts",
                "Coverage strategy grounded in what actually matters",
              ],
            },
            {
              illustration: "/illustrations/knowledge-base.png",
              role: "Context-Driven Coverage",
              roleColor: "#0077C2",
              title: "Coverage from context, not scripts.",
              body: "Tests are generated from your actual product knowledge base — requirements, defect history, user flows — not a blank slate. Coverage reflects what actually matters.",
              checks: [
                "Ingests knowledge base, requirements, and defect history",
                "Tests generated from your actual product context",
                "Historical defect patterns inform coverage priorities",
                "Every sprint builds on intelligence from the last",
              ],
            },
            {
              illustration: "/illustrations/engineering-leaders.png",
              role: "Expert-in-the-Loop",
              roleColor: "#C47200",
              title: "Human expertise amplified, not replaced.",
              body: "Expert-in-the-loop mode keeps your senior QA lead in the decision chair. Testpert prepares. Humans approve. The best judgment of both, applied at AI speed.",
              checks: [
                "Expert-in-the-loop approval for every test plan",
                "Testpert prepares — your best tester decides",
                "Senior QA judgment applied at AI speed and scale",
                "Works alongside your team, not instead of it",
              ],
            },
          ].map((p) => (
            <Card key={p.role} tint="white" radius="xl" padding="40px" style={{ display: "flex", flexDirection: "column", border: "1px solid rgba(30,30,30,0.07)" }}>
              <div style={{ marginBottom: "16px" }}>
                <Eyebrow variant="badge" color={p.roleColor} style={{ fontSize: "14px" }}>{p.role}</Eyebrow>
              </div>
              <Heading level="subsection" as="h3" color="var(--dark)" style={{ fontSize: "clamp(24px, 3vw, 32px)", lineHeight: 1.0, marginBottom: "14px" }}>
                {p.title}
              </Heading>
              <BodyText color="rgba(30,30,30,0.8)" style={{ fontSize: "14px", lineHeight: 1.7, marginBottom: "24px" }}>
                {p.body}
              </BodyText>
              <div style={{ height: "1px", background: "rgba(30,30,30,0.08)", marginBottom: "20px" }} />
              <div className="flex flex-col gap-3 mb-6">
                {p.checks.map((c) => (
                  <div key={c} className="flex items-start gap-2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden style={{ flexShrink: 0, marginTop: "2px" }}>
                      <circle cx="8" cy="8" r="8" fill={p.roleColor} fillOpacity="0.12" />
                      <path d="M4.5 8l2.5 2.5 4.5-5" stroke={p.roleColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <BodyText color="rgba(30,30,30,0.8)" style={{ fontSize: "13px", fontWeight: 500, lineHeight: 1.5 }}>{c}</BodyText>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ── How Testpert works — 4 steps ─────────────────────────────────── */}
      <SolutionsPlatformLayers
        intro="How Testpert works."
        contextNote="Four stages that mirror how your best tester thinks — from understanding context to executing with expert approval at every step."
        layers={[
          {
            number: "01",
            label: "01 Understand",
            title: "Context & Requirements",
            desc: "Testpert ingests your product knowledge base, requirements, and defect history — building the context your best tester would spend days absorbing.",
            category: "Foundation",
          },
          {
            number: "02",
            label: "02 Question",
            title: "Expert Q&A Engine",
            desc: "Asks the clarifying questions your most experienced tester would ask — surfacing risk, ambiguity, and missing coverage before any test is written.",
            category: "Discovery",
          },
          {
            number: "03",
            label: "03 Strategise",
            title: "Risk Surface Mapping",
            desc: "Maps coverage priorities against business impact, user journeys, and historical defect patterns — so you test what matters most, not just what's easiest.",
            category: "Strategy",
          },
          {
            number: "04",
            label: "04 Execute",
            title: "Expert-in-Loop Review",
            desc: "Generates expert-quality test cases queued for human approval before execution. Testpert prepares, your expert decides, AI executes at scale.",
            category: "Execution",
          },
        ]}
      />

      {/* ── Feature grid ─────────────────────────────────────────────────── */}
      <section
        className="rounded-[32px]"
        style={{ backgroundColor: "#FFF6E2", padding: "clamp(56px, 6vw, 88px) clamp(28px, 6vw, 80px)" }}
      >
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-16 mb-12">
          <div className="flex-shrink-0" style={{ maxWidth: "560px" }}>
            <Heading
              level="section"
              as="h2"
              color="var(--dark)"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.025em" }}
            >
              Everything your best QA mind would bring — at AI scale.
            </Heading>
          </div>
          <BodyText color="rgba(30,30,30,0.75)" style={{ fontSize: "16px", lineHeight: 1.75, maxWidth: "380px" }}>
            Six capabilities that mirror how an expert tester thinks, plans, and executes — now available on every sprint.
          </BodyText>
        </div>

        {/* 3×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { bg: "#2B2B2B",  iconBg: "rgba(255,255,255,0.1)",  Icon: TrendingUp,   iconColor: "#ffffff", titleColor: "#ffffff",     bodyColor: "rgba(255,255,255,0.75)", title: "Risk-Based Prioritisation",       body: "Coverage decisions mapped against business impact, user journey criticality, and historical defect patterns. You always know which tests matter most — and why." },
            { bg: "#FFDAA8",  iconBg: "rgba(255,255,255,0.4)",  Icon: Layers,       iconColor: "#1A1A1A", titleColor: "var(--dark)", bodyColor: "rgba(30,30,30,0.8)",      title: "Context-Driven Test Strategy",    body: "Tests generated from your product knowledge base — not a blank slate. Every test case reflects what's actually in scope." },
            { bg: "#B2D9EC",  iconBg: "rgba(255,255,255,0.4)",  Icon: MessageSquare,iconColor: "#1A1A1A", titleColor: "var(--dark)", bodyColor: "rgba(30,30,30,0.8)",      title: "AI-Powered Question Engine",      body: "Interrogates requirements like a senior QA lead — surfacing risk, ambiguity, and missing edge cases before a test is written." },
            { bg: "#FDD9C8",  iconBg: "rgba(255,255,255,0.4)",  Icon: Zap,          iconColor: "#1A1A1A", titleColor: "var(--dark)", bodyColor: "rgba(30,30,30,0.8)",      title: "Adaptive Test Planning",          body: "Plans evolve as your product does — Testpert adjusts coverage when requirements shift, new defects emerge, or scope changes." },
            { bg: "#DCDCDC",  iconBg: "rgba(255,255,255,0.4)",  Icon: ListChecks,   iconColor: "#1A1A1A", titleColor: "var(--dark)", bodyColor: "rgba(30,30,30,0.8)",      title: "One-Click Test Cases",            body: "Expert-quality test cases generated from your context and strategy — ready for review and execution without manual authoring." },
            { bg: "#FFF6E2",  iconBg: "rgba(0,0,0,0.06)",       Icon: Users,        iconColor: "#1A1A1A", titleColor: "var(--dark)", bodyColor: "rgba(30,30,30,0.8)",      title: "Shared Language for All Teams",   body: "QA, product, and engineering all see the same test strategy, coverage picture, and risk surface. No translation layer." },
          ].map(({ bg, iconBg, Icon, iconColor, titleColor, bodyColor, title, body }) => (
            <div key={title} style={{ background: bg, borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", border: bg === "#FFF6E2" ? "1px solid rgba(30,30,30,0.1)" : "none" }}>
              <div style={{ ...iconBox, background: iconBg }}>
                <Icon size={28} strokeWidth={1.6} color={iconColor} />
              </div>
              <Heading level="subsection" as="h3" color={titleColor} style={{ fontSize: "clamp(18px, 2vw, 24px)", lineHeight: 1.2, marginBottom: "10px" }}>
                {title}
              </Heading>
              <BodyText color={bodyColor} style={{ fontSize: "13px", lineHeight: 1.65 }}>
                {body}
              </BodyText>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <SolutionsTestimonial
        testimonials={[
          {
            quote: "Testpert mimics our best tester on the team who understands business and customer. It asks the questions we'd ask in sprint planning — before anyone has written a test.",
            name: "QA Lead",
            role: "QA Lead",
            company: "Shoppers Stop",
          },
          {
            quote: "Testpert helps me map requirement to test to quality to revenue. For the first time I can see exactly what's been validated against what we promised — before we ship.",
            name: "Product Manager",
            role: "Product Manager",
            company: "Facilio",
          },
          {
            quote: "The expert-in-the-loop model is the right call. AI prepares the coverage, our best tester signs off. We get the speed of automation without losing the judgment that matters.",
            name: "VP Engineering",
            role: "VP Engineering",
            company: "Meridian Labs",
          },
        ]}
      />

      <Footer cta={{
        heading: <>Ready to see Testpert in action?</>,
        body: "Book a 30-minute demo — we'll walk through how Testpert maps your product context and generates expert-quality test strategy from your requirements.",
        primaryLabel: "Book a demo",
        primaryHref: "https://calendly.com/get-bugasura/45min",
        secondaryLabel: "Start for free",
        secondaryHref: "https://my.bugasura.io?go=sign_up",
      }} />
    </main>
  );
}
