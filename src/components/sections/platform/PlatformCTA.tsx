import Image from "next/image";
import { Button, Heading, BodyText } from "@/components/ui";

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
          <Heading
            level="section"
            as="h2"
            color="#ffffff"
            style={{
              fontSize: "clamp(32px, 4vw, 56px)",
              lineHeight: 1.05,
            }}
          >
            Your competitors are<br />shipping with AI.{" "}
            <span style={{ color: "rgba(255,255,255,0.35)" }}>
              Are you testing with it?
            </span>
          </Heading>

          <BodyText
            color="rgba(255,255,255,0.5)"
            maxWidth="360px"
            className="mt-4"
            style={{ fontSize: "13.5px" }}
          >
            Join 50,000+ engineers using Bugasura to match the speed of
            AI-built software.
          </BodyText>

          <div className="flex items-center gap-4 mt-8">
            <Button href="/signup" variant="white">
              Start Free
            </Button>
            <Button href="/demo" variant="outline-light">
              See in Action
            </Button>
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
        <Heading
          level="section"
          as="h2"
          color="#ffffff"
          style={{
            fontSize: "clamp(36px, 5vw, 72px)",
            lineHeight: 1.02,
            maxWidth: "700px",
          }}
        >
          See how the platform fits your team&apos;s workflow.
        </Heading>

        <BodyText
          color="rgba(255,255,255,0.5)"
          maxWidth="400px"
          className="mt-5"
          style={{ fontSize: "14px" }}
        >
          Start on the free tier and explore all four layers — or talk to us
          about what you&apos;re trying to solve.
        </BodyText>

        <div className="flex items-center gap-4 mt-8">
          <Button href="/signup" variant="white">
            Start Free
          </Button>
          <Button href="/demo" variant="outline-light">
            Book a Platform Walkthrough
          </Button>
        </div>
      </section>
    </div>
  );
}
