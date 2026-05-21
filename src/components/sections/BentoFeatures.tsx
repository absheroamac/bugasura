"use client";

import Image from "next/image";
import { Button, Heading, BodyText } from "@/components/ui";

export default function BentoFeatures() {
  return (
    <section style={{ backgroundColor: "var(--cream)" }} className="px-4 py-8 md:px-20 md:py-12">
      <div className="flex flex-col md:flex-row gap-5 md:gap-8 md:min-h-[640px]">

        {/* ── Left: large dark card — image fills whole card ── */}
        <div
          className="relative flex flex-col justify-between rounded-[28px] overflow-hidden md:flex-shrink-0 md:w-[52%]"
          style={{ padding: "32px" }}
        >
          {/* Full-card background image */}
          <Image
            src="/section4/card1-bg.png"
            alt="Testpert in action"
            fill
            className="object-cover object-center"
            loading="lazy"
          />
          {/* Dark overlay so text stays readable */}
          <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(160deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.15) 100%)" }} />

          {/* Text content */}
          <div className="relative z-10">
            <Heading
              level="bento"
              as="h2"
              color="#ffffff"
              className="mb-4"
              style={{
                fontSize: "clamp(32px, 3.2vw, 52px)",
                lineHeight: 1.08,
              }}
            >
              Your best QA mind,
              <br />at scale.
            </Heading>
            <BodyText color="rgba(255,255,255,0.8)" maxWidth="340px">
              Testpert isn&apos;t an automation tool. It&apos;s an AI that thinks like your most
              experienced tester — asking clarifying questions, mapping risk across
              user journeys, and generating tests that reflect real expert judgment.
              Not a shortcut. An amplifier.
            </BodyText>
          </div>

          {/* CTA */}
          <div className="relative z-10 mt-8">
            <Button href="#" variant="white">
              See what Testpert can do
            </Button>
          </div>
        </div>

        {/* ── Right: two stacked cards ── */}
        <div className="flex flex-col gap-5 md:gap-8 flex-1">

          {/* Top — blue */}
          <div
            className="relative flex flex-col justify-between rounded-[28px] overflow-hidden flex-1"
            style={{ backgroundColor: "#C5DFF0", padding: "32px" }}
          >
            <div>
              <Heading
                level="bento"
                as="h2"
                color="var(--dark)"
                className="mb-4"
                style={{
                  fontSize: "clamp(26px, 2.6vw, 42px)",
                  lineHeight: 1.1,
                }}
              >
                Decision-maker
                <br />visibility into quality.
              </Heading>
              <BodyText color="rgba(30,30,30,0.8)" maxWidth="360px">
                Engineering leaders need signal, not dashboards full of test counts.
                Eagle Eye surfaces what&apos;s breaking, what it&apos;s costing, and where quality
                risk is concentrated — in a view built for strategic decisions, not just daily standups.
              </BodyText>
            </div>
            <div className="mt-8">
              <Button href="#" variant="dark">
                See Eagle Eye
              </Button>
            </div>
          </div>

          {/* Bottom — orange */}
          <div
            className="relative flex flex-col justify-between rounded-[28px] overflow-hidden flex-1"
            style={{ backgroundColor: "#FFDAA8", padding: "32px" }}
          >
            <div>
              <Heading
                level="bento"
                as="h2"
                color="var(--dark)"
                className="mb-4"
                style={{
                  fontSize: "clamp(26px, 2.6vw, 42px)",
                  lineHeight: 1.1,
                }}
              >
                QA where developers
                <br />actually work.
              </Heading>
              <BodyText color="rgba(30,30,30,0.8)" maxWidth="360px">
                Bugasura&apos;s MCP server connects directly to Claude and Cursor. Your
                developers get quality context, test coverage signals, and defect history
                right inside their coding environment. No context switching. No separate
                tools. No excuses for skipping tests.
              </BodyText>
            </div>
            <div className="mt-8">
              <Button href="#" variant="dark">
                View All Integrations
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
