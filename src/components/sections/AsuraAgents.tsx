"use client";

import Image from "next/image";
import Link from "next/link";

const agents = [
  {
    name: "Browser Asura",
    body: "Tests your web application end-to-end. Navigates, clicks, asserts, and reports — powered by Bugasura's platform context so it knows what matters, not just what's in the DOM.",
  },
  {
    name: "API Asura",
    body: "Validates your API contracts, edge cases, and error states. Integrates with your CI pipeline and escalates to Bugasura issues automatically when something breaks.",
  },
  {
    name: "Duplicate Asura",
    body: "Monitors incoming bug reports in real-time. Detects duplicates before they clutter your backlog. Notifies your team via Slack. Never files the same bug twice.",
  },
  {
    name: "Browser Asura",
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
        <div className="flex items-start justify-between px-10 pt-12 pb-10 gap-12">
          <h2
            className="font-semibold flex-shrink-0"
            style={{
              fontSize: "clamp(36px, 4.5vw, 68px)",
              letterSpacing: "-0.025em",
              lineHeight: 1.02,
              color: "var(--dark)",
              maxWidth: "480px",
            }}
          >
            Meet your specialized
            <br />QA agents.
          </h2>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.6,
              color: "rgba(10,10,10,0.7)",
              maxWidth: "340px",
              paddingTop: "8px",
            }}
          >
            In the age of AI development, you need agents built to test it.
            Asuras are specialized testing agents — each built for a specific
            job, deployable without writing a framework from scratch.
          </p>
        </div>

        {/* ── Agent cards ── */}
        <div className="grid grid-cols-4 gap-4 px-10">
          {agents.map((agent, i) => (
            <div
              key={i}
              className="rounded-[20px] flex flex-col gap-4 p-6"
              style={{ backgroundColor: "#fff" }}
            >
              {/* Icon + badge row */}
              <div className="flex items-center justify-between">
                <Image
                  src="/section5/asura-icon.png"
                  alt="Asura"
                  width={48}
                  height={48}
                  className="rounded-xl"
                />
                <span
                  className="font-semibold rounded-full px-3 py-1"
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.04em",
                    backgroundColor: "#F0F0F0",
                    color: "rgba(30,30,30,0.55)",
                    fontFamily: "'Clash Grotesk', sans-serif",
                  }}
                >
                  Early access
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-semibold"
                style={{ fontSize: "22px", letterSpacing: "-0.01em", lineHeight: 1.15, color: "var(--dark)" }}
              >
                {agent.name}
              </h3>

              {/* Body */}
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "rgba(30,30,30,0.6)" }}>
                {agent.body}
              </p>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="flex justify-center py-10">
          <Link
            href="#"
            className="inline-flex items-center font-semibold uppercase rounded-lg px-6 py-3 transition-opacity hover:opacity-90"
            style={{
              fontSize: "12px",
              letterSpacing: "0.08em",
              backgroundColor: "#fff",
              color: "var(--red)",
            }}
          >
            Explore the world of Asuras
          </Link>
        </div>

        {/* Spacer so train has room to overflow below */}
        <div style={{ paddingBottom: "180px" }} />
      </section>

      {/* ── Train illustration — overflows below the blue section ── */}
      <div className="relative z-10" style={{ marginTop: "calc(-320px)" }}>
        <Image
          src="/section5/train.png"
          alt="Asura agents on a train"
          width={1400}
          height={500}
          className="w-full h-auto"
          loading="lazy"
        />
      </div>
    </div>
  );
}
