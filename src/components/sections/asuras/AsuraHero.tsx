"use client";

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
      style={{ background: "linear-gradient(to bottom, #3D0000, #C00808)" }}
    >
      {/* ── Top: copy left / illustration right ── */}
      <div className="flex flex-col lg:flex-row lg:items-end pt-20 lg:pt-[120px]">
        {/* Left — copy */}
        <div
          className="flex flex-col flex-shrink-0 px-4 pb-8 lg:pb-16 text-center lg:text-left items-center lg:items-start"
          style={{ maxWidth: "100%", paddingLeft: undefined, paddingRight: undefined }}
        >
          <div className="lg:pl-16 lg:pr-12 w-full">
            <Heading
              level="hero"
              as="h1"
              color="#ffffff"
              style={{ fontSize: "clamp(48px, 6.5vw, 96px)", lineHeight: 1.0 }}
            >
              World of{" "}
              <br className="hidden lg:block" />
              Asuras
            </Heading>

            <BodyText
              color="rgba(255,255,255,0.75)"
              className="mt-6 mx-auto lg:mx-0"
              style={{ fontSize: "16px", lineHeight: 1.65, maxWidth: "400px" }}
            >
              Specialized QA agents. Each with a name, a purpose, and
              the platform intelligence to know what matters. Not generic.
              Not interchangeable. Built for one job — and very good at it.
            </BodyText>

            <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3 mt-8 w-full lg:w-auto">
              <Button href="/signup" variant="white" className="w-full lg:w-auto justify-center">
                Start Free
              </Button>
              <Button href="/demo" variant="outline-light" className="w-full lg:w-auto justify-center">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Right — illustration (desktop only) */}
        <div className="hidden lg:flex flex-1 rounded-tl-[28px] overflow-hidden" style={{ minWidth: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/asuras/hero-illustration.png"
            alt="World of Asuras — specialized QA agents on the Bugasura train"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </div>

      {/* ── Bottom: feature cards ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-4 lg:px-16 pb-8 lg:pb-14 pt-6 lg:pt-10">
        {featureCards.map((card) => (
          <Card
            key={card.title}
            tint="white"
            radius="lg"
            padding="24px"
            style={{ backgroundColor: "var(--cream)" }}
          >
            <Heading
              level="step"
              as="h3"
              color="var(--dark)"
              style={{ fontSize: "clamp(20px, 2vw, 28px)", lineHeight: 1.15, marginBottom: "12px" }}
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
