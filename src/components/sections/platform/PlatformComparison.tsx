import Image from "next/image";

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
    <section className="rounded-[32px]" style={{ padding: "96px 80px" }}>
      {/* Headline */}
      <h2
        className="font-semibold text-center"
        style={{
          fontFamily: "'Clash Grotesk', sans-serif",
          fontSize: "clamp(36px, 5vw, 64px)",
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          color: "#1A0A00",
          maxWidth: "820px",
          margin: "0 auto",
        }}
      >
        Point solutions don&apos;t share context.
        <br />
        Bugasura does.
      </h2>

      {/* Sub-copy */}
      <p
        className="text-center mx-auto mt-6"
        style={{
          fontSize: "14px",
          lineHeight: 1.65,
          color: "rgba(20,10,0,0.55)",
          maxWidth: "480px",
        }}
      >
        The problem with stitching together five tools isn&apos;t the integrations.
        It&apos;s that each tool operates in isolation — none of them build collective
        intelligence over time.
      </p>

      {/* Two-column comparison — full width */}
      <div className="grid grid-cols-2 gap-10 mt-14">

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
          <h3
            className="font-semibold mt-8"
            style={{
              fontFamily: "'Clash Grotesk', sans-serif",
              fontSize: "clamp(22px, 2.2vw, 32px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "#1A0A00",
            }}
          >
            The Stitched<br />Together Stack
          </h3>

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
                    fontSize: "13px",
                    color: "rgba(20,10,0,0.35)",
                    fontWeight: 600,
                    lineHeight: 1.6,
                    marginTop: "1px",
                  }}
                >
                  ✕
                </span>
                <span
                  style={{
                    fontSize: "13.5px",
                    lineHeight: 1.6,
                    color: "rgba(20,10,0,0.6)",
                  }}
                >
                  {point}
                </span>
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
          <h3
            className="font-semibold mt-8"
            style={{
              fontFamily: "'Clash Grotesk', sans-serif",
              fontSize: "clamp(22px, 2.2vw, 32px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "#E52727",
            }}
          >
            The Bugasura<br />Platform
          </h3>

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
                    fontSize: "13px",
                    color: "#E52727",
                    fontWeight: 600,
                    lineHeight: 1.6,
                    marginTop: "1px",
                  }}
                >
                  ✓
                </span>
                <span
                  style={{
                    fontSize: "13.5px",
                    lineHeight: 1.6,
                    color: "#1A0A00",
                    fontWeight: 600,
                  }}
                >
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
