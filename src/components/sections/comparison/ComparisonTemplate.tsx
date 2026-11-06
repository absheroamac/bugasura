"use client";

import { useState } from "react";
import Image from "next/image";
import { Layers, Bug, Camera, Gauge, Users, Plus } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LogoScroller from "@/components/sections/LogoScroller";
import Testimonials from "@/components/sections/Testimonials";
import { Heading, BodyText, Button } from "@/components/ui";
import type { ComparisonData } from "@/lib/comparisons/types";

const SIGNUP = "https://my.bugasura.io?go=sign_up";
const reasonIcons = [Layers, Bug, Camera, Gauge, Users];
const reasonStyles = [
  { bg: "#FDD9C8", accent: "#E52727", tint: "rgba(229,39,39,0.1)" },
  { bg: "#B2D9EC", accent: "#0077C2", tint: "rgba(0,119,194,0.1)" },
  { bg: "#FFDAA8", accent: "#CC7A00", tint: "rgba(255,168,64,0.2)" },
  { bg: "#DCDCDC", accent: "#1E1E1E", tint: "rgba(30,30,30,0.08)" },
  { bg: "#FDD9C8", accent: "#E52727", tint: "rgba(229,39,39,0.1)" },
];

export default function ComparisonTemplate({ data }: { data: ComparisonData }) {
  const c = data.competitor;
  const [painIdx, setPainIdx] = useState(0);

  return (
    <main className="flex flex-col gap-2">
      <style>{`
        .cmp-row { display: grid; grid-template-columns: 150px 240px 240px; }
        .cmp-label { position: sticky; left: 0; box-shadow: 2px 0 6px -2px rgba(0,0,0,0.06); }
        .cmp-table { min-width: 630px; }
        @media (min-width: 1024px) {
          .cmp-row { grid-template-columns: 26% 1fr 1fr; }
          .cmp-label { position: static; box-shadow: none; }
          .cmp-table { min-width: 0; }
        }
        .faq-item summary { list-style: none; cursor: pointer; }
        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-item[open] .faq-plus { transform: rotate(45deg); }
        .faq-plus { transition: transform 0.2s; }
        .faq-item summary:focus-visible { outline: 2px solid #E52727; outline-offset: 4px; border-radius: 12px; }
      `}</style>
      <Navbar />

      {/* HERO */}
      <section className="rounded-[32px] overflow-hidden" style={{ background: "linear-gradient(160deg, #0077C2 0%, #29A5FF 60%, #4DB8FF 100%)" }}>
        <div className="flex flex-col lg:flex-row lg:items-center gap-0 px-8 lg:px-20 pt-20 lg:pt-28 pb-12 lg:pb-20">
          <div className="flex-1 flex flex-col items-start">
            <Heading level="hero" as="h1" color="#ffffff" style={{ fontSize: "clamp(40px, 5vw, 76px)", lineHeight: 1.0, letterSpacing: "-0.025em", marginBottom: "24px" }}>
              {data.hero.line1}<br />
              {data.hero.line2}<br />
              <em style={{ fontStyle: "normal", color: "rgba(255,255,255,0.75)" }}>{data.hero.line3}</em>
            </Heading>
            <BodyText color="rgba(255,255,255,0.85)" style={{ fontSize: "16px", lineHeight: 1.75, maxWidth: "560px", marginBottom: "36px" }}>
              {data.hero.body}
            </BodyText>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button href={SIGNUP} variant="white" className="justify-center sm:justify-start">Start Free</Button>
              <Button href="#comparison" variant="outline-light" className="justify-center sm:justify-start">See in Action</Button>
            </div>
          </div>

          {/* Right: illustration (falls back to a versus card until hero art is supplied) */}
          {data.heroImage ? (
            <div className="hidden lg:flex flex-shrink-0 items-center justify-center" style={{ width: "576px" }}>
              <Image src={data.heroImage} alt={`Bugasura vs ${c} illustration`} width={576} height={422} className="object-contain object-bottom w-full" priority />
            </div>
          ) : (
            <div className="hidden lg:flex flex-shrink-0 items-center justify-center" style={{ width: "460px" }}>
              <div style={{ background: "#FFF6E2", borderRadius: "28px", padding: "40px 32px" }} className="flex items-center justify-center gap-5 w-full">
                <Image src="/bugasura-logo.avif" alt="Bugasura" width={150} height={28} style={{ height: "28px", width: "auto" }} priority />
                <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(30,30,30,0.45)" }}>vs</span>
                <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "28px", color: "#1E1E1E", letterSpacing: "-0.02em" }}>{c}</span>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 px-8 lg:px-20 pb-8 lg:pb-10">
          {[
            { label: "50,000+ users", desc: "Developers, testers, and PMs across 25+ countries" },
            { label: "Unlimited free", desc: "Every feature, unlimited users — no credit card required" },
            { label: "SOC 2 Type II", desc: "Independently audited security, availability, and privacy" },
            { label: "Setup in minutes", desc: "Pre-configured projects, zero onboarding friction" },
          ].map(({ label, desc }) => (
            <div key={label} style={{ background: "#FFF6E2", borderRadius: "20px", padding: "20px" }}>
              <Heading level="card" as="h3" color="#1E1E1E" style={{ fontSize: "clamp(16px, 1.5vw, 20px)", marginBottom: "8px" }}>{label}</Heading>
              <BodyText color="rgba(30,30,30,0.6)" style={{ fontSize: "13px", lineHeight: 1.6 }}>{desc}</BodyText>
            </div>
          ))}
        </div>
      </section>

      <LogoScroller bg="#FFF6E2" logoSet="black" logoOpacity={0.6} />

      {/* PAIN POINTS — paper note rotator */}
      <section style={{ padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ textAlign: "center", maxWidth: "820px", margin: "0 auto 16px" }}>
          <Heading level="section" as="h2" color="#1E1E1E" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            {data.painHeading}
          </Heading>
        </div>
        {data.painIntro ? (
          <BodyText color="rgba(30,30,30,0.65)" className="text-center mx-auto" style={{ fontSize: "16px", lineHeight: 1.65, maxWidth: "520px", marginBottom: "48px" }}>
            {data.painIntro}
          </BodyText>
        ) : (
          <div style={{ height: 32 }} />
        )}

        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div
            style={{
              backgroundImage: "url('/paper-bg.avif')",
              backgroundSize: "100% 100%",
              backgroundColor: "transparent",
              padding: "clamp(32px, 6vw, 60px) clamp(24px, 6vw, 64px) clamp(24px, 4vw, 32px)",
              display: "flex",
              flexDirection: "column",
              minHeight: "360px",
            }}
          >
            <div style={{ height: "1px", background: "rgba(30,30,30,0.15)", marginBottom: "32px" }} />
            <div style={{ flex: 1 }} aria-live="polite">
              <p style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: "clamp(26px, 2.8vw, 36px)", lineHeight: 1.2, color: "#1E1E1E", marginBottom: "14px" }}>
                {data.pains[painIdx].title}
              </p>
              <p style={{ fontFamily: "'Caveat', cursive", fontSize: "clamp(22px, 2.2vw, 28px)", lineHeight: 1.4, color: "#1E1E1E" }}>
                {data.pains[painIdx].body}
              </p>
            </div>
            <div style={{ height: "1px", background: "rgba(30,30,30,0.15)", marginTop: "32px", marginBottom: "20px" }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "12px" }}>
              <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(30,30,30,0.45)" }}>
                {painIdx + 1} / {data.pains.length}
              </span>
              <button
                onClick={() => setPainIdx((i) => (i + 1) % data.pains.length)}
                style={{ background: "#1E1E1E", border: "none", cursor: "pointer", fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "13px", color: "#ffffff", padding: "10px 20px", borderRadius: "100px" }}
              >
                Another complaint →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CHARACTER */}
      <div className="w-full flex justify-center" style={{ marginTop: -32 }}>
        <div className="rounded-[24px] overflow-hidden" style={{ maxWidth: 580 }}>
          <Image src="/bugasura-product.avif" alt="Bugasura mascot lounging on a rug" width={1455} height={1081} className="w-full h-auto" loading="lazy" />
        </div>
      </div>

      {/* WHY BUGASURA — bento */}
      <section className="rounded-[32px]" style={{ backgroundColor: "#FFA840", padding: "clamp(48px, 8vw, 80px) clamp(24px, 6vw, 80px)" }}>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-16 mb-12">
          <Heading level="section" as="h2" color="#1E1E1E" style={{ fontSize: "clamp(32px, 4.6vw, 60px)", lineHeight: 1.02, letterSpacing: "-0.025em" }}>
            {data.whyHeading[0]}<br />{data.whyHeading[1]}
          </Heading>
          <BodyText color="rgba(0,0,0,0.65)" style={{ fontSize: "16px", lineHeight: 1.75, maxWidth: "400px" }}>{data.whyIntro}</BodyText>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {data.reasons.map((r, i) => {
            const Icon = reasonIcons[i];
            const s = reasonStyles[i];
            const big = i === 0;
            return (
              <div key={r.title} className={big ? "lg:col-span-2" : ""} style={{ background: s.bg, borderRadius: "24px", padding: "36px", display: "flex", flexDirection: "column" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: s.tint, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14, flexShrink: 0 }}>
                  <Icon size={22} strokeWidth={1.6} color={s.accent} aria-hidden />
                </div>
                <Heading level="subsection" as="h3" color="#1E1E1E" style={{ fontSize: big ? "clamp(24px, 3vw, 36px)" : "clamp(20px, 2.2vw, 26px)", lineHeight: 1.1, marginBottom: 12 }}>{r.title}</Heading>
                <BodyText color="rgba(30,30,30,0.75)" style={{ fontSize: big ? "15px" : "14px", lineHeight: 1.7 }}>{r.body}</BodyText>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-12">
          <Button href={SIGNUP} variant="dark">Get Bugasura for FREE</Button>
        </div>
      </section>

      <Testimonials />

      {/* COMPARISON TABLE */}
      <section id="comparison" className="rounded-[32px] px-6 lg:px-20 py-16 lg:py-24" style={{ backgroundColor: "#FFF6E2", scrollMarginTop: "var(--nav-height, 88px)" }}>
        <Heading level="section" as="h2" color="#1E1E1E" className="text-center" style={{ fontSize: "clamp(30px, 4.6vw, 60px)", lineHeight: 1.05, letterSpacing: "-0.025em", margin: "0 auto" }}>
          <span className="lg:block">{data.tableHeading[0]}</span>{" "}
          <span className="lg:block">{data.tableHeading[1]}</span>
        </Heading>
        <BodyText color="rgba(30,30,30,0.65)" className="text-center mx-auto mt-6" style={{ fontSize: "16px", lineHeight: 1.65, maxWidth: "480px" }}>{data.tableIntro}</BodyText>

        <div className="mt-12 lg:mt-16 overflow-x-auto -mx-4 lg:mx-0">
          <div className="cmp-table" style={{ border: "1px solid rgba(30,30,30,0.08)", borderRadius: "20px", overflow: "clip" }}>
            <div className="cmp-row">
              <div className="cmp-label" style={{ zIndex: 2, padding: "20px 24px", background: "#ffffff", borderBottom: "1px solid rgba(30,30,30,0.08)" }} />
              <div style={{ padding: "20px 24px", background: "rgba(229,39,39,0.07)", borderBottom: "1px solid rgba(229,39,39,0.12)", borderLeft: "1px solid rgba(229,39,39,0.12)" }}>
                <Image src="/bugasura-logo.avif" alt="Bugasura" width={120} height={22} style={{ height: "22px", width: "auto", display: "block" }} />
              </div>
              <div style={{ padding: "20px 24px", background: "rgba(30,30,30,0.03)", borderBottom: "1px solid rgba(30,30,30,0.08)", borderLeft: "1px solid rgba(30,30,30,0.08)", display: "flex", alignItems: "center" }}>
                <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "18px", color: "#1E1E1E" }}>{data.competitorLabel ?? c}</span>
              </div>
            </div>

            {data.rows.map((row, i) => {
              const zebra = i % 2 === 0 ? "#ffffff" : "#fafafa";
              return (
                <div key={row.label} className="cmp-row" style={{ background: zebra }}>
                  <div className="cmp-label" style={{ zIndex: 1, padding: "18px 24px", borderTop: "1px solid rgba(30,30,30,0.06)", background: zebra }}>
                    <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "14px", color: "#1E1E1E" }}>{row.label}</p>
                  </div>
                  <div style={{ padding: "18px 24px", borderTop: "1px solid rgba(229,39,39,0.08)", borderLeft: "1px solid rgba(229,39,39,0.1)", background: i % 2 === 0 ? "rgba(229,39,39,0.03)" : "rgba(229,39,39,0.05)" }}>
                    <div className="flex items-start gap-2">
                      <span style={{ width: 18, height: 18, borderRadius: "50%", background: "#E52727", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden><path d="M2 5l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                      <BodyText color="#1E1E1E" style={{ fontSize: "14px", lineHeight: 1.5, fontWeight: 600 }}>{row.bugasura}</BodyText>
                    </div>
                  </div>
                  <div style={{ padding: "18px 24px", borderTop: "1px solid rgba(30,30,30,0.06)", borderLeft: "1px solid rgba(30,30,30,0.06)" }}>
                    <BodyText color="rgba(30,30,30,0.7)" style={{ fontSize: "14px", lineHeight: 1.5 }}>{row.competitor}</BodyText>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <p className="text-center mt-5" style={{ fontSize: 12, color: "rgba(30,30,30,0.5)" }}>{data.tableNote}</p>

        <div className="flex justify-center mt-12">
          <Button href={SIGNUP} variant="primary">Don&apos;t book a demo. Just try it FREE.</Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="rounded-[32px]" style={{ backgroundColor: "#FFF6E2", padding: "clamp(48px, 8vw, 80px) clamp(24px, 6vw, 80px)" }}>
        <Heading level="section" as="h2" color="#1E1E1E" className="text-center" style={{ fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.025em", maxWidth: 800, margin: "0 auto 48px" }}>
          {data.faqHeading}
        </Heading>
        <div className="flex flex-col gap-3 mx-auto" style={{ maxWidth: 860 }}>
          {data.faqs.map((f, i) => (
            <details key={f.q} className="faq-item" open={i === 0} style={{ background: "#ffffff", borderRadius: 20, padding: "22px 28px", border: "1px solid rgba(30,30,30,0.07)" }}>
              <summary className="flex items-center justify-between gap-4">
                <Heading level="step" as="h3" color="#1E1E1E" style={{ fontSize: "clamp(17px, 1.6vw, 20px)", lineHeight: 1.3 }}>{f.q}</Heading>
                <Plus className="faq-plus flex-shrink-0" size={22} strokeWidth={1.8} color="#E52727" aria-hidden />
              </summary>
              <BodyText color="rgba(30,30,30,0.72)" style={{ fontSize: "15px", lineHeight: 1.75, marginTop: 14 }}>{f.a}</BodyText>
            </details>
          ))}
        </div>
      </section>

      <Footer cta={{
        heading: <>Time to level up</>,
        subheading: <>your test management.</>,
        body: "Free forever. Unlimited users. No credit card. Requirements, tests and bugs in one platform.",
        primaryLabel: "Get Started Free",
        primaryHref: SIGNUP,
        secondaryLabel: "See All Features",
        secondaryHref: "/features",
      }} />
    </main>
  );
}
