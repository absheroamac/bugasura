import Image from "next/image";
import { Heading, BodyText } from "@/components/ui";

const leftPoints = [
  "Test cases disconnected from requirements — linked manually if at all",
  "Defect history in Jira, test history in TestRail — no shared context",
  "Every sprint starts from scratch — no learning from previous cycles",
  "Coverage decisions made by gut feel — no risk data to inform them",
  "Developers context-switch between tools — quality friction increases",
];

const rightPoints = [
  "Requirements, tests, and defects connected automatically, across every sprint",
  "Defect history informs risk mapping — informs test generation — one system",
  "Platform intelligence compounds — sprint 10 is smarter than sprint 1",
  "Coverage driven by risk data, not guesswork or line coverage metrics",
  "MCP puts quality context directly into Claude and Cursor",
];

export default function PlatformComparison() {
  return (
    <section className="rounded-[32px] px-4 py-12 lg:px-20 lg:py-24">
      {/* Headline */}
      <Heading
        level="section"
        as="h2"
        color="#1A0A00"
        className="text-center"
        style={{
          fontSize: "clamp(28px, 5vw, 64px)",
          lineHeight: 1.05,
          margin: "0 auto",
        }}
      >
        <span className="lg:block">Point solutions don&apos;t share context.{" "}</span>
        <span className="lg:block">Bugasura does.</span>
      </Heading>

      {/* Sub-copy */}
      <BodyText
        color="rgba(20,10,0,0.8)"
        maxWidth="480px"
        className="text-center mx-auto mt-6"
        style={{ fontSize: "16px", lineHeight: 1.65 }}
      >
        The problem with stitching together five tools isn&apos;t the integrations.
        It&apos;s that each tool operates in isolation — none of them build collective
        intelligence over time.
      </BodyText>

      {/* Two-column comparison — full width */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mt-10 lg:mt-14">

        {/* ── Left: Stitched Together Stack ── */}
        <div className="flex flex-col">
          {/* Image card — full width */}
          <div className="rounded-3xl overflow-hidden w-full">
            <Image
              src="/platform/comparison-left.png"
              alt="Five disconnected tools"
              width={680}
              height={420}
              className="w-full h-auto block"
            />
          </div>

          {/* Title */}
          <Heading
            level="subsection"
            as="h3"
            color="#1A0A00"
            className="mt-8"
            style={{
              fontSize: "clamp(22px, 2.2vw, 32px)",
              lineHeight: 1.1,
            }}
          >
            The Stitched<br />Together Stack
          </Heading>

          {/* Points with dividers */}
          <ul className="mt-6">
            {leftPoints.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-4 py-4"
                style={{ borderTop: "1px solid rgba(20,10,0,0.1)" }}
              >
                <span
                  className="flex-shrink-0"
                  style={{
                    fontSize: "16px",
                    color: "rgba(20,10,0,0.35)",
                    fontWeight: 600,
                    lineHeight: 1.6,
                    marginTop: "1px",
                  }}
                >
                  ✕
                </span>
                <BodyText
                  as="span"
                  color="rgba(20,10,0,0.6)"
                  style={{ fontSize: "16px" }}
                >
                  {point}
                </BodyText>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Right: Bugasura Platform ── */}
        <div className="flex flex-col">
          {/* Image card — full width */}
          <div className="rounded-3xl overflow-hidden w-full">
            <Image
              src="/platform/comparison-right.png"
              alt="Bugasura platform — unified intelligence"
              width={680}
              height={420}
              className="w-full h-auto block"
            />
          </div>

          {/* Title */}
          <Heading
            level="subsection"
            as="h3"
            color="#E52727"
            className="mt-8"
            style={{
              fontSize: "clamp(22px, 2.2vw, 32px)",
              lineHeight: 1.1,
            }}
          >
            The Bugasura<br />Platform
          </Heading>

          {/* Points with dividers */}
          <ul className="mt-6">
            {rightPoints.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-4 py-4"
                style={{ borderTop: "1px solid rgba(20,10,0,0.1)" }}
              >
                <span
                  className="flex-shrink-0"
                  style={{
                    fontSize: "16px",
                    color: "#E52727",
                    fontWeight: 600,
                    lineHeight: 1.6,
                    marginTop: "1px",
                  }}
                >
                  ✓
                </span>
                <BodyText
                  as="span"
                  color="#1A0A00"
                  style={{ fontSize: "16px", fontWeight: 600 }}
                >
                  {point}
                </BodyText>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
