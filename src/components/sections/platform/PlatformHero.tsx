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
      className="rounded-[32px] overflow-hidden"
      style={{
        backgroundColor: "#F0A030",
        paddingTop: "138px",
      }}
    >
      {/* ── Top row: heading left / layers illustration right ── */}
      <div className="flex items-start justify-between px-16 gap-6">
        {/* Left — copy */}
        <div className="flex flex-col" style={{ paddingTop: "4px", flexShrink: 0 }}>
          <Heading
            level="hero"
            as="h1"
            color="#1A0A00"
            style={{
              fontSize: "clamp(56px, 7vw, 96px)",
              lineHeight: 1.0,
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ display: "block" }}>The Bugasura</span>
            <span style={{ display: "block" }}>Platform</span>
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
          <div className="flex items-center gap-4 mt-8">
            <Button href="/signup" variant="primary">
              Start Free
            </Button>
            <Button href="/demo" variant="outline">
              Book a Demo
            </Button>
          </div>
        </div>

        {/* Right — layers diagram (slightly smaller than before) */}
        <div
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

      {/* ── Bottom: full-width illustration with white cards overlaid ── */}
      <div className="relative" style={{ marginTop: "-100px" }}>
        {/* Factory illustration — full bleed */}
        <Image
          src="/platform/illustration.png"
          alt="Bugasura platform — context, refine, generate, execute in action"
          width={1440}
          height={640}
          className="w-full h-auto block"
          priority
        />

        {/* White cards — float over the factory scene */}
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            left: "32px",
            right: "32px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
        >
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl"
              style={{
                backgroundColor: "var(--cream)",
                padding: "24px 28px",
              }}
            >
              <Heading
                level="step"
                as="h3"
                color="#1A0A00"
                style={{
                  fontSize: "32px",
                  lineHeight: 1.2,
                  marginBottom: "10px",
                }}
              >
                {card.title}
              </Heading>
              <BodyText
                color="rgba(20,10,0,0.8)"
                style={{ fontSize: "16px" }}
              >
                {card.desc}
              </BodyText>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
