"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LogoScroller from "@/components/sections/LogoScroller";
import { Heading, BodyText, Button } from "@/components/ui";
import { hub } from "@/lib/comparisons/hub";

const SIGNUP = "https://my.bugasura.io?go=sign_up";
const toolHref: Record<string, string> = {
  Bugasura: "/testrail-alternative",
  TestRail: "/testrail-alternative",
  Xray: "/xray-alternative",
  Zephyr: "/zephyr-alternative",
  Qase: "/qase-alternative",
  qTest: "/qtest-alternative",
  PractiTest: "/practitest-alternative",
};
const cardBg = ["#B2D9EC", "#FFDAA8", "#DCDCDC", "#FDD9C8", "#B2D9EC", "#FFDAA8"];
const font = "'Clash Grotesk', sans-serif";

export default function HubTemplate() {
  // table header order from the doc: Bugasura first, then the six competitors
  const cols = hub.tools;

  return (
    <main className="flex flex-col gap-2">
      <style>{`
        .hub-row { display: grid; grid-template-columns: 150px repeat(7, 150px); }
        .hub-label { position: sticky; left: 0; box-shadow: 2px 0 6px -2px rgba(0,0,0,0.06); }
        .hub-table { min-width: 1200px; }
        @media (min-width: 1280px) {
          .hub-row { grid-template-columns: 15% repeat(7, 1fr); }
          .hub-label { position: static; box-shadow: none; }
          .hub-table { min-width: 0; }
        }
        .faq-item summary { list-style: none; cursor: pointer; }
        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-item[open] .faq-plus { transform: rotate(45deg); }
        .faq-plus { transition: transform 0.2s; }
        .faq-item summary:focus-visible { outline: 2px solid #E52727; outline-offset: 4px; border-radius: 12px; }
        .hub-link { transition: opacity 0.15s; }
        .hub-link:hover { opacity: 0.7; }
        .hub-link:focus-visible { outline: 2px solid #E52727; outline-offset: 3px; border-radius: 6px; }
      `}</style>
      <Navbar />

      {/* HERO */}
      <section className="rounded-[32px] overflow-hidden" style={{ background: "linear-gradient(160deg, #0077C2 0%, #29A5FF 60%, #4DB8FF 100%)" }}>
        <div className="flex flex-col lg:flex-row lg:items-center px-8 lg:px-20 pt-20 lg:pt-28 pb-12 lg:pb-20 gap-10">
          <div className="flex-1 flex flex-col items-start">
            <Heading level="hero" as="h1" color="#ffffff" style={{ fontSize: "clamp(40px, 5vw, 76px)", lineHeight: 1.0, letterSpacing: "-0.025em", marginBottom: "24px" }}>
              {hub.h1}
            </Heading>
            <BodyText color="rgba(255,255,255,0.88)" style={{ fontSize: "17px", lineHeight: 1.7, maxWidth: "620px", marginBottom: "16px" }}>{hub.intro}</BodyText>
            <BodyText color="rgba(255,255,255,0.7)" style={{ fontSize: "13px", lineHeight: 1.6, maxWidth: "620px", marginBottom: "32px" }}>{hub.reviewed}</BodyText>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button href={SIGNUP} variant="white" className="justify-center sm:justify-start">Start Free</Button>
              <Button href="#compare" variant="outline-light" className="justify-center sm:justify-start">See in Action</Button>
            </div>
          </div>
          <div className="hidden lg:flex flex-shrink-0 items-center justify-center" style={{ width: "clamp(340px, 38vw, 560px)" }}>
            <Image
              src="/Comparison/hub.png"
              alt="Bugasura mascot puzzling over a stack of test management tool tiles: PractiTest, qTest, Qase, Jira, Zephyr, Xray and TestRail"
              width={560}
              height={448}
              className="object-contain object-bottom w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      <LogoScroller bg="#FFF6E2" logoSet="black" logoOpacity={0.6} />

      {/* SHORT ANSWER */}
      <section className="rounded-[32px]" style={{ backgroundColor: "#FFF6E2", padding: "clamp(48px, 8vw, 80px) clamp(24px, 6vw, 80px)" }}>
        <Heading level="section" as="h2" color="#1E1E1E" style={{ fontSize: "clamp(32px, 4.6vw, 60px)", lineHeight: 1.02, letterSpacing: "-0.025em", marginBottom: "40px" }}>
          The short answer
        </Heading>
        {/* Bugasura featured */}
        <div
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-12"
          style={{ background: "#1E1E1E", borderRadius: 24, padding: "clamp(28px, 4vw, 44px)" }}
        >
          <div style={{ maxWidth: 760 }}>
            <p style={{ fontFamily: font, fontWeight: 600, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 12 }}>
              Our answer
            </p>
            <Heading level="subsection" as="h3" color="#ffffff" style={{ fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: 1.05, marginBottom: 14 }}>
              {hub.verdicts[0].tool}
            </Heading>
            <BodyText color="rgba(255,255,255,0.92)" style={{ fontSize: "clamp(16px, 1.4vw, 19px)", lineHeight: 1.65 }}>
              {hub.verdicts[0].text.charAt(0).toUpperCase() + hub.verdicts[0].text.slice(1)}
            </BodyText>
          </div>
          <div className="flex-shrink-0">
            <Button href={SIGNUP} variant="white">Start Free</Button>
          </div>
        </div>

        {/* The other six */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4" style={{ listStyle: "none", padding: 0 }}>
          {hub.verdicts.slice(1).map((v, i) => (
            <li
              key={v.tool}
              style={{ background: cardBg[i % cardBg.length], borderRadius: 24, padding: "28px", display: "flex", flexDirection: "column" }}
            >
              <Heading level="subsection" as="h3" color="#1E1E1E" style={{ fontSize: "clamp(22px, 2vw, 26px)", lineHeight: 1.1, marginBottom: 12 }}>{v.tool}</Heading>
              <BodyText color="rgba(30,30,30,0.78)" style={{ fontSize: "15px", lineHeight: 1.65, marginBottom: 20, flex: 1 }}>
                {v.text.charAt(0).toUpperCase() + v.text.slice(1)}
              </BodyText>
              <Link href={toolHref[v.tool]} className="hub-link inline-flex items-center gap-2 self-start" style={{ fontFamily: font, fontWeight: 600, fontSize: 14, color: "#1E1E1E", textDecoration: "underline", textUnderlineOffset: 4 }}>
                Full comparison <ArrowRight size={16} aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
        <div style={{ background: "#FFA840", borderRadius: 24, padding: "32px", marginTop: 16 }}>
          <p style={{ fontFamily: font, fontWeight: 700, fontSize: 20, color: "#1E1E1E", marginBottom: 10 }}>{hub.missHeading}</p>
          <BodyText color="rgba(30,30,30,0.8)" style={{ fontSize: "15px", lineHeight: 1.7, maxWidth: 820 }}>{hub.miss}</BodyText>
        </div>
      </section>

      {/* ALL SEVEN COMPARED */}
      <section id="compare" className="rounded-[32px] px-6 lg:px-12 py-16 lg:py-24" style={{ backgroundColor: "#FFF6E2", scrollMarginTop: "var(--nav-height, 88px)" }}>
        <Heading level="section" as="h2" color="#1E1E1E" className="text-center" style={{ fontSize: "clamp(30px, 4.6vw, 60px)", lineHeight: 1.05, letterSpacing: "-0.025em", marginBottom: "48px" }}>
          All seven, compared
        </Heading>
        <div className="overflow-x-auto -mx-4 lg:mx-0">
          <div className="hub-table" style={{ border: "1px solid rgba(30,30,30,0.08)", borderRadius: 20, overflow: "clip" }}>
            <div className="hub-row">
              <div className="hub-label" style={{ zIndex: 2, background: "#fff", borderBottom: "1px solid rgba(30,30,30,0.08)", padding: "18px 16px" }} />
              {cols.map((t) => (
                <div key={t} style={{ padding: "18px 14px", background: t === "Bugasura" ? "rgba(229,39,39,0.09)" : "rgba(30,30,30,0.03)", borderBottom: "1px solid rgba(30,30,30,0.08)", borderLeft: "1px solid rgba(30,30,30,0.08)", display: "flex", alignItems: "center" }}>
                  {t === "Bugasura" ? (
                    <Image src="/bugasura-logo.png" alt="Bugasura" width={100} height={24} style={{ height: 20, width: "auto" }} />
                  ) : (
                    <Link href={toolHref[t]} className="hub-link" style={{ fontFamily: font, fontWeight: 700, fontSize: 15, color: "#1E1E1E", textDecoration: "none" }}>{t}</Link>
                  )}
                </div>
              ))}
            </div>
            {hub.rows.map((r, i) => {
              const zebra = i % 2 === 0 ? "#ffffff" : "#fafafa";
              return (
                <div key={r[0]} className="hub-row" style={{ background: zebra }}>
                  <div className="hub-label" style={{ zIndex: 1, background: zebra, padding: "16px", borderTop: "1px solid rgba(30,30,30,0.06)" }}>
                    <p style={{ fontFamily: font, fontWeight: 600, fontSize: 13, color: "#1E1E1E" }}>{r[0]}</p>
                  </div>
                  {r.slice(1).map((c, j) => (
                    <div key={j} style={{ padding: "16px 14px", borderTop: "1px solid rgba(30,30,30,0.06)", borderLeft: "1px solid rgba(30,30,30,0.06)", background: j === 0 ? (i % 2 === 0 ? "rgba(229,39,39,0.04)" : "rgba(229,39,39,0.06)") : undefined }}>
                      <BodyText color={j === 0 ? "#1E1E1E" : "rgba(30,30,30,0.72)"} style={{ fontSize: "13px", lineHeight: 1.5, fontWeight: j === 0 ? 600 : 400 }}>{c}</BodyText>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <Button href={SIGNUP} variant="primary">Don&apos;t book a demo. Just try it FREE.</Button>
        </div>
      </section>

      {/* ONE LINE EACH */}
      <section className="rounded-[32px]" style={{ backgroundColor: "#FFA840", padding: "clamp(48px, 8vw, 80px) clamp(24px, 6vw, 80px)" }}>
        <Heading level="section" as="h2" color="#1E1E1E" style={{ fontSize: "clamp(32px, 4.6vw, 60px)", lineHeight: 1.02, letterSpacing: "-0.025em", marginBottom: "40px" }}>
          The seven, in one line each
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {hub.oneLine.map((o, i) => (
            <div key={o.tool} className={i === 0 ? "md:col-span-2" : ""} style={{ background: cardBg[i % cardBg.length], borderRadius: 24, padding: "32px", display: "flex", flexDirection: "column" }}>
              <Heading level="subsection" as="h3" color="#1E1E1E" style={{ fontSize: "clamp(22px, 2.4vw, 30px)", lineHeight: 1.1, marginBottom: 12 }}>{o.tool}</Heading>
              <BodyText color="rgba(30,30,30,0.78)" style={{ fontSize: "15px", lineHeight: 1.7, marginBottom: 20, flex: 1 }}>{o.text}</BodyText>
              <Link href={toolHref[o.tool]} className="hub-link inline-flex items-center gap-2 self-start" style={{ fontFamily: font, fontWeight: 600, fontSize: 14, color: "#1E1E1E", textDecoration: "underline", textUnderlineOffset: 4 }}>
                {o.cta} <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="rounded-[32px]" style={{ backgroundColor: "#FFF6E2", padding: "clamp(48px, 8vw, 80px) clamp(24px, 6vw, 80px)" }}>
        <Heading level="section" as="h2" color="#1E1E1E" className="text-center" style={{ fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.025em", maxWidth: 800, margin: "0 auto 48px" }}>
          Questions people actually ask
        </Heading>
        <div className="flex flex-col gap-3 mx-auto" style={{ maxWidth: 860 }}>
          {hub.faqs.map((f, i) => (
            <details key={f.q} className="faq-item" open={i === 0} style={{ background: "#fff", borderRadius: 20, padding: "22px 28px", border: "1px solid rgba(30,30,30,0.07)" }}>
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
        heading: <>{hub.closingHeading}</>,
        subheading: <>test management.</>,
        body: hub.closing,
        primaryLabel: "Start Free",
        primaryHref: SIGNUP,
        secondaryLabel: "See All Features",
        secondaryHref: "/features",
      }} />
    </main>
  );
}
