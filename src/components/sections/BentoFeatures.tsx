"use client";

import Image from "next/image";
import { Button, Heading, BodyText } from "@/components/ui";

export default function BentoFeatures() {
  return (
    <section style={{ backgroundColor: "var(--cream)" }} className="px-4 py-8 lg:px-20 lg:py-12">
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 lg:min-h-[640px]">

        {/* ── Left: large dark card — image fills whole card ── */}
        <div
          className="relative flex flex-col justify-between rounded-[28px] overflow-hidden lg:flex-shrink-0 lg:w-[52%]"
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
              Your best QA mind,{" "}
              <br className="hidden lg:block" />at scale.
            </Heading>
            <BodyText color="rgba(255,255,255,0.8)" maxWidth="480px">
              Testpert isn&apos;t an automation tool. It&apos;s an AI that thinks like your most
              experienced tester — asking clarifying questions, mapping risk across
              user journeys, and generating tests that reflect real expert judgment.
              Not a shortcut. An amplifier.
            </BodyText>
          </div>

          {/* CTA */}
          <div className="relative z-10 mt-8">
            <Button href="https://bugasura.io/testpert" target="_blank" rel="noopener noreferrer" variant="white" className="w-full lg:w-auto justify-center">
              <span className="lg:hidden">What Testpert can do</span>
              <span className="hidden lg:inline">See what Testpert can do</span>
            </Button>
          </div>
        </div>

        {/* ── Right: two stacked cards ── */}
        <div className="flex flex-col gap-5 lg:gap-8 flex-1">

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
                Decision-maker{" "}
                <br className="hidden lg:block" />visibility into quality.
              </Heading>
              <BodyText color="rgba(30,30,30,0.8)" maxWidth="480px">
                Engineering leaders need signal, not dashboards full of test counts.
                Eagle Eye surfaces what&apos;s breaking, what it&apos;s costing, and where quality
                risk is concentrated — in a view built for strategic decisions, not just daily standups.
              </BodyText>
            </div>
            <div className="mt-8">
              <Button href="https://bugasura.io/user-journey" target="_blank" rel="noopener noreferrer" variant="dark" className="w-full lg:w-auto justify-center">
                <span className="lg:hidden">Eagle Eye</span>
                <span className="hidden lg:inline">See Eagle Eye</span>
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
                QA where developers{" "}
                <br className="hidden lg:block" />actually work.
              </Heading>
              <BodyText color="rgba(30,30,30,0.8)" maxWidth="480px">
                Bugasura&apos;s MCP server connects directly to Claude and Cursor. Your
                developers get quality context, test coverage signals, and defect history
                right inside their coding environment. No context switching. No separate
                tools. No excuses for skipping tests.
              </BodyText>
            </div>
            <div className="mt-8">
              <Button href="https://bugasura.io/integrations" target="_blank" rel="noopener noreferrer" variant="dark" className="w-full lg:w-auto justify-center">
                View All Integrations
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
