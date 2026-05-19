"use client";

import Image from "next/image";
import Link from "next/link";

export default function BentoFeatures() {
  return (
    <section style={{ backgroundColor: "var(--cream)" }} className="px-10 py-12">
      <div className="flex gap-8" style={{ minHeight: "640px" }}>

        {/* ── Left: large dark card — image fills whole card ── */}
        <div
          className="relative flex flex-col justify-between rounded-[28px] overflow-hidden flex-shrink-0"
          style={{ width: "52%", padding: "40px" }}
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
            <h2
              className="font-semibold text-white mb-4"
              style={{ fontSize: "clamp(32px, 3.2vw, 52px)", letterSpacing: "-0.02em", lineHeight: 1.08 }}
            >
              Your best QA mind,
              <br />at scale.
            </h2>
            <p style={{ fontSize: "15px", lineHeight: 1.6, color: "rgba(255,255,255,0.6)", maxWidth: "340px" }}>
              Testpert isn&apos;t an automation tool. It&apos;s an AI that thinks like your most
              experienced tester — asking clarifying questions, mapping risk across
              user journeys, and generating tests that reflect real expert judgment.
              Not a shortcut. An amplifier.
            </p>
          </div>

          {/* CTA */}
          <div className="relative z-10 mt-8">
            <Link
              href="#"
              className="inline-flex items-center font-semibold uppercase rounded-lg px-5 py-3 transition-opacity hover:opacity-90"
              style={{ fontSize: "12px", letterSpacing: "0.08em", backgroundColor: "#fff", color: "var(--red)" }}
            >
              See what Testpert can do
            </Link>
          </div>
        </div>

        {/* ── Right: two stacked cards ── */}
        <div className="flex flex-col gap-8 flex-1">

          {/* Top — blue */}
          <div
            className="relative flex flex-col justify-between rounded-[28px] overflow-hidden flex-1"
            style={{ backgroundColor: "#C5DFF0", padding: "40px" }}
          >
            <div>
              <h2
                className="font-semibold mb-4"
                style={{ fontSize: "clamp(26px, 2.6vw, 42px)", letterSpacing: "-0.02em", lineHeight: 1.1, color: "var(--dark)" }}
              >
                Decision-maker
                <br />visibility into quality.
              </h2>
              <p style={{ fontSize: "15px", lineHeight: 1.6, color: "rgba(30,30,30,0.65)", maxWidth: "360px" }}>
                Engineering leaders need signal, not dashboards full of test counts.
                Eagle Eye surfaces what&apos;s breaking, what it&apos;s costing, and where quality
                risk is concentrated — in a view built for strategic decisions, not just daily standups.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="#"
                className="inline-flex items-center font-semibold uppercase rounded-lg px-5 py-3 transition-opacity hover:opacity-80"
                style={{ fontSize: "12px", letterSpacing: "0.08em", backgroundColor: "var(--dark)", color: "#fff" }}
              >
                See Eagle Eye
              </Link>
            </div>
          </div>

          {/* Bottom — orange */}
          <div
            className="relative flex flex-col justify-between rounded-[28px] overflow-hidden flex-1"
            style={{ backgroundColor: "#FFDAA8", padding: "40px" }}
          >
            <div>
              <h2
                className="font-semibold mb-4"
                style={{ fontSize: "clamp(26px, 2.6vw, 42px)", letterSpacing: "-0.02em", lineHeight: 1.1, color: "var(--dark)" }}
              >
                QA where developers
                <br />actually work.
              </h2>
              <p style={{ fontSize: "15px", lineHeight: 1.6, color: "rgba(30,30,30,0.65)", maxWidth: "360px" }}>
                Bugasura&apos;s MCP server connects directly to Claude and Cursor. Your
                developers get quality context, test coverage signals, and defect history
                right inside their coding environment. No context switching. No separate
                tools. No excuses for skipping tests.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="#"
                className="inline-flex items-center font-semibold uppercase rounded-lg px-5 py-3 transition-opacity hover:opacity-80"
                style={{ fontSize: "12px", letterSpacing: "0.08em", backgroundColor: "var(--dark)", color: "#fff" }}
              >
                View All Integrations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
