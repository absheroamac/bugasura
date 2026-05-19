import Image from "next/image";
import Link from "next/link";

export default function PlatformCTA() {
  return (
    <div className="flex flex-col gap-2">
      {/* ── Banner 1: Competitors / mascot ── */}
      <section
        className="rounded-[32px] overflow-hidden flex items-center justify-between"
        style={{
          backgroundColor: "#6B0F0F",
          padding: "64px 80px",
          minHeight: "240px",
        }}
      >
        {/* Left — copy */}
        <div style={{ maxWidth: "560px" }}>
          <h2
            className="font-semibold"
            style={{
              fontFamily: "'Clash Grotesk', sans-serif",
              fontSize: "clamp(32px, 4vw, 56px)",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "#ffffff",
            }}
          >
            Your competitors are shipping with AI.{" "}
            <span style={{ color: "rgba(255,255,255,0.35)" }}>
              Are you testing with it?
            </span>
          </h2>

          <p
            className="mt-4"
            style={{
              fontSize: "13.5px",
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.5)",
              maxWidth: "360px",
            }}
          >
            Join 50,000+ engineers using Bugasura to match the speed of
            AI-built software.
          </p>

          <div className="flex items-center gap-4 mt-8">
            <Link
              href="/signup"
              className="px-6 py-3 rounded-lg font-semibold uppercase transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "#ffffff",
                color: "#1A0A00",
                fontSize: "12px",
                letterSpacing: "0.08em",
              }}
            >
              Start Free
            </Link>
            <Link
              href="/demo"
              className="px-6 py-3 rounded-lg font-semibold uppercase border-2 transition-opacity hover:opacity-75"
              style={{
                borderColor: "rgba(255,255,255,0.35)",
                color: "#ffffff",
                fontSize: "12px",
                letterSpacing: "0.08em",
              }}
            >
              See in Action
            </Link>
          </div>
        </div>

        {/* Right — mascot */}
        <div style={{ flexShrink: 0, width: "clamp(180px, 18vw, 280px)" }}>
          <Image
            src="/section6/asura.png"
            alt="Bugasura mascot"
            width={280}
            height={280}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* ── Banner 2: Platform walkthrough ── */}
      <section
        className="rounded-[32px]"
        style={{
          backgroundColor: "#6B0F0F",
          padding: "72px 80px",
        }}
      >
        <h2
          className="font-semibold"
          style={{
            fontFamily: "'Clash Grotesk', sans-serif",
            fontSize: "clamp(36px, 5vw, 72px)",
            letterSpacing: "-0.03em",
            lineHeight: 1.02,
            color: "#ffffff",
            maxWidth: "700px",
          }}
        >
          See how the platform fits your team&apos;s workflow.
        </h2>

        <p
          className="mt-5"
          style={{
            fontSize: "14px",
            lineHeight: 1.65,
            color: "rgba(255,255,255,0.5)",
            maxWidth: "400px",
          }}
        >
          Start on the free tier and explore all four layers — or talk to us
          about what you&apos;re trying to solve.
        </p>

        <div className="flex items-center gap-4 mt-8">
          <Link
            href="/signup"
            className="px-6 py-3 rounded-lg font-semibold uppercase transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "#ffffff",
              color: "#1A0A00",
              fontSize: "12px",
              letterSpacing: "0.08em",
            }}
          >
            Start Free
          </Link>
          <Link
            href="/demo"
            className="px-6 py-3 rounded-lg font-semibold uppercase border-2 transition-opacity hover:opacity-75"
            style={{
              borderColor: "rgba(255,255,255,0.35)",
              color: "#ffffff",
              fontSize: "12px",
              letterSpacing: "0.08em",
            }}
          >
            Book a Platform Walkthrough
          </Link>
        </div>
      </section>
    </div>
  );
}
