"use client";

import Image from "next/image";
import { Button, Heading, BodyText } from "@/components/ui";

const cards = [
  {
    title: "Context compounds over time",
    desc: "Every sprint you run on Bugasura makes the next one smarter — because context, defect patterns, and risk data accumulate across layers.",
  },
  {
    title: "Not tools. A system.",
    desc: "Each layer feeds the next. The Knowledge Base informs Testpert. Testpert informs test generation. Generated tests run as Asuras. Results feed back to Eagle Eye.",
  },
  {
    title: "One source of quality truth.",
    desc: "Requirements, test cases, defects, coverage, and risk — connected in a single platform instead of scattered across five tools.",
  },
];

export default function PlatformHero() {
  return (
    <section
      className="rounded-[32px] overflow-hidden pt-20 lg:pt-[138px]"
      style={{ backgroundColor: "#F0A030" }}
    >
      {/* ── Top row: heading left / layers illustration right ── */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between px-4 lg:px-16 gap-6">
        {/* Left — copy */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left" style={{ paddingTop: "4px" }}>
          <Heading
            level="hero"
            as="h1"
            color="#1A0A00"
            style={{
              fontSize: "clamp(40px, 7vw, 96px)",
              lineHeight: 1.0,
            }}
          >
            <span className="lg:block">The Bugasura</span>{" "}
            <span className="lg:block">Platform</span>
          </Heading>

          <BodyText
            color="#1A0A00"
            maxWidth="400px"
            className="mt-5"
            style={{ fontSize: "16px", lineHeight: 1.65, opacity: 1 }}
          >
            Four interconnected layers. One intelligence loop. Quality that gets
            smarter with every sprint — because every layer feeds the next.
          </BodyText>

          {/* CTAs */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3 mt-8 w-full lg:w-auto">
            <Button href="https://my.bugasura.io?go=sign_up" target="_blank" rel="noopener noreferrer" variant="primary" className="w-full lg:w-auto justify-center">
              Start Free
            </Button>
            <Button href="https://calendly.com/get-bugasura/45min" target="_blank" rel="noopener noreferrer" variant="outline" className="w-full lg:w-auto justify-center">
              Book a Demo
            </Button>
          </div>
        </div>

        {/* Right — layers diagram (desktop only) */}
        <div
          className="hidden lg:block"
          style={{
            width: "clamp(320px, 42vw, 580px)",
            flexShrink: 0,
            marginTop: "-40px",
          }}
        >
          <Image
            src="/platform/layers.png"
            alt="Bugasura platform layers diagram"
            width={580}
            height={720}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* ── Bottom: full-width illustration with white cards overlaid (desktop) ── */}
      <div className="relative lg:-mt-[340px] mt-6">
        {/* Factory illustration — full bleed */}
        <Image
          src="/platform/illustration.png"
          alt="Bugasura platform — context, refine, generate, execute in action"
          width={1440}
          height={640}
          className="w-full h-auto block"
          priority
        />

        {/* White cards — float over factory scene (desktop only) */}
        <div
          className="hidden lg:grid"
          style={{
            position: "absolute",
            bottom: "5%",
            left: "32px",
            right: "32px",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
        >
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl"
              style={{ backgroundColor: "var(--cream)", padding: "24px 28px" }}
            >
              <Heading level="step" as="h3" color="#1A0A00" style={{ fontSize: "32px", lineHeight: 1.2, marginBottom: "10px" }}>
                {card.title}
              </Heading>
              <BodyText color="rgba(20,10,0,0.8)" style={{ fontSize: "16px" }}>
                {card.desc}
              </BodyText>
            </div>
          ))}
        </div>
      </div>

      {/* Cards stacked below illustration (mobile only) */}
      <div className="flex flex-col gap-3 px-4 pb-6 pt-3 lg:hidden">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl"
            style={{ backgroundColor: "var(--cream)", padding: "20px 22px" }}
          >
            <Heading level="step" as="h3" color="#1A0A00" style={{ fontSize: "22px", lineHeight: 1.2, marginBottom: "8px" }}>
              {card.title}
            </Heading>
            <BodyText color="rgba(20,10,0,0.8)" style={{ fontSize: "14px" }}>
              {card.desc}
            </BodyText>
          </div>
        ))}
      </div>
    </section>
  );
}
