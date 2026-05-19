"use client";

import Image from "next/image";
import Link from "next/link";

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
        <div className="flex flex-col" style={{ maxWidth: "500px", paddingTop: "4px", flexShrink: 0 }}>
          <h1
            className="font-semibold"
            style={{
              fontFamily: "'Clash Grotesk', sans-serif",
              fontSize: "clamp(42px, 4.5vw, 68px)",
              letterSpacing: "-0.03em",
              lineHeight: 1.02,
              color: "#1A0A00",
            }}
          >
            The Bugasura Platform
          </h1>

          <p
            className="mt-5"
            style={{
              fontSize: "15px",
              lineHeight: 1.65,
              color: "rgba(20,10,0,0.65)",
              maxWidth: "400px",
            }}
          >
            Four interconnected layers. One intelligence loop. Quality that gets
            smarter with every sprint — because every layer feeds the next.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-4 mt-8">
            <Link
              href="/signup"
              className="px-6 py-3 rounded-lg font-semibold uppercase transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "#E52727",
                color: "#fff",
                fontSize: "13px",
                letterSpacing: "0.06em",
              }}
            >
              Start Free
            </Link>
            <Link
              href="/demo"
              className="px-6 py-3 rounded-lg font-semibold uppercase border-2 transition-opacity hover:opacity-75"
              style={{
                borderColor: "rgba(0,0,0,0.4)",
                color: "#1A0A00",
                fontSize: "13px",
                letterSpacing: "0.06em",
              }}
            >
              Book a Demo
            </Link>
          </div>
        </div>

        {/* Right — layers diagram (slightly smaller than before) */}
        <div
          style={{
            width: "clamp(200px, 28vw, 380px)",
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
                backgroundColor: "#ffffff",
                padding: "24px 28px",
              }}
            >
              <p
                className="font-semibold"
                style={{
                  fontFamily: "'Clash Grotesk', sans-serif",
                  fontSize: "18px",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  color: "#1A0A00",
                  marginBottom: "10px",
                }}
              >
                {card.title}
              </p>
              <p
                style={{
                  fontSize: "13.5px",
                  lineHeight: 1.6,
                  color: "rgba(20,10,0,0.6)",
                }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
