"use client";

import Image from "next/image";
import { Button, Heading, BodyText } from "@/components/ui";

const agents = [
  {
    name: "Browser Asura",
    icon: "/asuras/icon-browser.png",
    body: "Tests your web application end-to-end. Navigates, clicks, asserts, and reports — powered by Bugasura's platform context so it knows what matters, not just what's in the DOM.",
  },
  {
    name: "API Asura",
    icon: "/asuras/icon-api.png",
    body: "Validates your API contracts, edge cases, and error states. Integrates with your CI pipeline and escalates to Bugasura issues automatically when something breaks.",
  },
  {
    name: "Duplicate Asura",
    icon: "/asuras/icon-duplicate.png",
    body: "Monitors incoming bug reports in real-time. Detects duplicates before they clutter your backlog. Notifies your team via Slack. Never files the same bug twice.",
  },
  {
    name: "Mobile Asura",
    icon: "/asuras/icon-mobile.png",
    body: "Tests your web application end-to-end. Navigates, clicks, asserts, and reports — powered by Bugasura's platform context.",
  },
];

export default function AsuraAgents() {
  return (
    <div className="relative" style={{ backgroundColor: "var(--cream)" }}>
      <section
        className="relative rounded-[28px]"
        style={{ backgroundColor: "#29A5FF", overflow: "visible" }}
      >
        {/* ── Header row ── */}
        <div className="flex flex-col lg:flex-row items-start lg:justify-between px-4 lg:px-10 pt-8 lg:pt-12 pb-6 lg:pb-10 gap-4 lg:gap-12">
          <Heading
            level="section"
            as="h2"
            color="var(--dark)"
            className="text-center lg:text-left w-full lg:w-auto"
            style={{
              fontSize: "clamp(36px, 4.5vw, 68px)",
              lineHeight: 1.02,
              flexShrink: 0,
            }}
          >
            Meet your Specialised{" "}<br className="hidden lg:block" />QA Agents.
          </Heading>
          <BodyText
            color="rgba(10,10,10,0.8)"
            maxWidth="340px"
            style={{ paddingTop: "8px" }}
          >
            In the age of AI development, you need agents built to test it.
            Asuras are specialized testing agents — each built for a specific
            job, deployable without writing a framework from scratch.
          </BodyText>
        </div>

        {/* ── Agent cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 lg:px-10">
          {agents.map((agent, i) => (
            <div
              key={i}
              className="rounded-[20px] flex flex-col gap-4 p-6"
              style={{ backgroundColor: "#fff" }}
            >
              {/* Icon + badge row */}
              <div className="flex items-start justify-between">
                <div
                  className="rounded-xl flex-shrink-0 flex items-center justify-center"
                  style={{ width: "56px", height: "56px", backgroundColor: "#E0E0E0", padding: "8px" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={agent.icon} alt={agent.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                </div>
                <span
                  className="font-semibold rounded-full px-3 py-1"
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.04em",
                    backgroundColor: "#fff",
                    color: "var(--dark)",
                    border: "1.5px solid #8B1A1A",
                    fontFamily: "'Clash Grotesk', sans-serif",
                  }}
                >
                  Early access
                </span>
              </div>

              {/* Title */}
              <Heading
                level="step"
                as="h3"
                color="var(--dark)"
                style={{ fontSize: "24px", lineHeight: 1.15 }}
              >
                {agent.name}
              </Heading>

              {/* Body */}
              <BodyText color="rgba(30,30,30,0.8)" style={{ fontSize: "14px" }}>
                {agent.body}
              </BodyText>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="flex justify-center px-4 lg:px-0 py-10">
          <Button href="#" variant="white" className="w-full lg:w-auto justify-center">
            Explore the world of Asuras
          </Button>
        </div>

        {/* Spacer so train has room to overflow below — desktop only */}
        <div className="hidden lg:block" style={{ paddingBottom: "180px" }} />
      </section>

      {/* ── Train illustration — overflows below the blue section — desktop only ── */}
      <div className="hidden lg:block relative z-10 pointer-events-none" style={{ marginTop: "calc(-320px)" }}>
        <Image
          src="/section5/train.png"
          alt="Asura agents on a train"
          width={1400}
          height={500}
          className="w-full h-auto"
          loading="lazy"
          style={{ pointerEvents: "none" }}
        />
      </div>
    </div>
  );
}
