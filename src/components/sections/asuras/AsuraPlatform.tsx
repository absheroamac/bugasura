"use client";

import React from "react";
import { Heading, BodyText, Card } from "@/components/ui";

const steps: { title: React.ReactNode; body: string }[] = [
  {
    title: <>Platform learns{" "}<br className="hidden lg:block" />your product</>,
    body: "Context, Refine, and Generate layers build the shared intelligence — requirements, past defects, risk mapping.",
  },
  {
    title: <>You attach an Asura{" "}<br className="hidden lg:block" />to your project</>,
    body: "No configuration from scratch. The Asura inherits your platform context and knows what to prioritise immediately.",
  },
  {
    title: <>It runs, reports,{" "}<br className="hidden lg:block" />and escalates</>,
    body: "Test results flow back to Bugasura. Issues auto-escalate to your backlog. Eagle Eye surfaces the executive view.",
  },
];

export default function AsuraPlatform() {
  return (
    <section
      className="rounded-[32px] px-4 py-10 lg:px-16 lg:py-20"
      style={{ backgroundColor: "#FFF6E2" }}
    >
      {/* ── Top: copy left / diagram right ── */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16 mb-10 lg:mb-16">

        {/* Left — copy */}
        <div className="lg:flex-shrink-0 lg:w-[40%]">
          <Heading
            level="hero"
            as="h2"
            color="var(--dark)"
            style={{ fontSize: "clamp(36px, 4.5vw, 68px)", lineHeight: 1.0, letterSpacing: "-0.03em" }}
          >
            Platform intelligence.{" "}
            <br className="hidden lg:block" />
            Agent execution.
          </Heading>
          <BodyText
            color="var(--dark)"
            className="mt-6"
            style={{ fontSize: "16px", lineHeight: 1.65, maxWidth: "400px", opacity: 0.75 }}
          >
            Asuras aren&apos;t standalone tools. They&apos;re execution-layer agents that run on
            top of Bugasura&apos;s full platform — inheriting everything the platform knows
            about your product before they test a single thing.
          </BodyText>
        </div>

        {/* Right — infographic image */}
        <div className="flex flex-1 items-center justify-center mt-8 lg:mt-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/asuras/section3-infographic.svg"
            alt="Platform intelligence flows into every Asura"
            style={{ width: "clamp(240px, 75%, 100%)", height: "auto", display: "block" }}
          />
        </div>
      </div>

      {/* ── Bottom: 3 feature cards ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {steps.map((s, i) => (
          <Card key={i} tint="white" radius="md" padding="24px" className="lg:!p-8">
            <Heading
              level="step"
              as="h3"
              color="var(--dark)"
              style={{ fontSize: "28px", lineHeight: 1.2, marginBottom: "12px" }}
            >
              {s.title}
            </Heading>
            <BodyText
              color="var(--dark)"
              style={{ fontSize: "15px", lineHeight: 1.65, opacity: 0.75 }}
            >
              {s.body}
            </BodyText>
          </Card>
        ))}
      </div>
    </section>
  );
}
