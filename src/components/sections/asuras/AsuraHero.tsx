"use client";

import Image from "next/image";
import { Button, Heading, BodyText, Card } from "@/components/ui";

const featureCards = [
  {
    title: "Named",
    body: "Every Asura has a name and a domain. Browser Asura doesn't try to test APIs. It knows what it is — and it's excellent at it.",
  },
  {
    title: "Context-aware",
    body: "Every Asura runs on Bugasura's platform layer — inheriting your requirements, defect history, and product context before running a single test.",
  },
  {
    title: "Deployable",
    body: "No framework setup. No test scaffolding. Attach an Asura to your Bugasura project and it's live — connected to your context and ready to hunt.",
  },
];

export default function AsuraHero() {
  return (
    <section
      className="rounded-[32px] overflow-hidden relative"
      style={{
        background: "linear-gradient(to bottom, #3D0000, #C00808)",
      }}
    >
      {/* ── Top: copy left / illustration right ── */}
      <div
        className="flex items-end gap-0"
        style={{ paddingTop: "120px" }}
      >
        {/* Left — copy */}
        <div className="flex flex-col flex-shrink-0 pb-16" style={{ maxWidth: "480px", paddingLeft: "64px", paddingRight: "48px" }}>
          <Heading
            level="hero"
            as="h1"
            color="#ffffff"
            style={{
              fontSize: "clamp(56px, 6.5vw, 96px)",
              lineHeight: 1.0,
            }}
          >
            World of
            <br />
            Asuras
          </Heading>

          <BodyText
            color="rgba(255,255,255,0.75)"
            className="mt-6"
            style={{ fontSize: "16px", lineHeight: 1.65 }}
          >
            Specialized QA agents. Each with a name, a purpose, and
            the platform intelligence to know what matters. Not generic.
            Not interchangeable. Built for one job — and very good at it.
          </BodyText>

          <div className="flex items-center gap-4 mt-8">
            <Button href="/signup" variant="white">
              Start Free
            </Button>
            <Button href="/demo" variant="outline-light">
              Book a Demo
            </Button>
          </div>
        </div>

        {/* Right — illustration flush to right edge, no padding */}
        <div className="flex-1 rounded-tl-[28px] overflow-hidden" style={{ minWidth: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/asuras/hero-illustration.png"
            alt="World of Asuras — specialized QA agents on the Bugasura train"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </div>

      {/* ── Bottom: feature cards ── */}
      <div className="grid grid-cols-3 gap-4 px-16 pb-14 pt-10">
        {featureCards.map((card) => (
          <Card
            key={card.title}
            tint="white"
            radius="lg"
            padding="32px"
            style={{ backgroundColor: "var(--cream)" }}
          >
            <Heading
              level="step"
              as="h3"
              color="var(--dark)"
              style={{ fontSize: "28px", lineHeight: 1.15, marginBottom: "12px" }}
            >
              {card.title}
            </Heading>
            <BodyText
              color="var(--dark)"
              style={{ fontSize: "15px", lineHeight: 1.65 }}
            >
              {card.body}
            </BodyText>
          </Card>
        ))}
      </div>
    </section>
  );
}
