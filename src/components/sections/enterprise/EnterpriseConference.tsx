import { Heading, BodyText, Button } from "@/components/ui";

export default function EnterpriseConference() {
  return (
    <section
      className="rounded-[32px]"
      style={{ backgroundColor: "#FDD9C8", padding: "80px clamp(24px, 6vw, 80px)" }}
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

        {/* ── Left: copy ── */}
        <div className="flex-1">
          <Heading
            level="section"
            as="h2"
            color="var(--dark)"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.025em", marginBottom: "18px" }}
          >
            Talk to our team directly.
          </Heading>
          <BodyText
            color="rgba(30,30,30,0.8)"
            style={{ fontSize: "16px", lineHeight: 1.75, maxWidth: "420px", marginBottom: "36px" }}
          >
            If you&apos;re evaluating Bugasura for your engineering organisation, book 30 minutes with us — we&apos;d rather have that conversation directly than over email.
          </BodyText>
          <Button
            href="https://calendly.com/get-bugasura/45min"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            Get in touch
          </Button>
        </div>

        {/* ── Right: slot list card ── */}
        <div
          className="w-full lg:flex-shrink-0"
          style={{
            background: "#ffffff",
            borderRadius: "24px",
            padding: "32px",
            maxWidth: "480px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
          }}
        >
          {/* Eyebrow */}
          <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: "16px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#E52727", marginBottom: "20px" }}>
            Book a call
          </p>

          {/* Title */}
          <Heading level="subsection" as="h3" color="var(--dark)" style={{ fontSize: "24px", lineHeight: 1.15, marginBottom: "10px" }}>
            A 30-minute conversation, on your schedule.
          </Heading>

          {/* Body */}
          <BodyText color="rgba(30,30,30,0.8)" style={{ fontSize: "14px", lineHeight: 1.65, marginBottom: "24px" }}>
            Pick a time that works for you and we&apos;ll walk through your team&apos;s setup, answer questions, and show you how Bugasura fits in — no back-and-forth needed.
          </BodyText>

          {/* What we'll cover */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
            {[
              "Your team's current QA workflow and tooling",
              "Where Bugasura fits — and where it doesn't",
              "Pricing, deployment options, and rollout timeline",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center"
                style={{
                  background: "rgba(30,30,30,0.04)",
                  borderRadius: "12px",
                  padding: "14px 16px",
                  border: "1px solid rgba(30,30,30,0.07)",
                }}
              >
                <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: "14px", fontWeight: 500, color: "var(--dark)" }}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Reserve CTA */}
          <Button
            href="https://calendly.com/get-bugasura/45min"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="w-full justify-center"
          >
            Schedule a call →
          </Button>
        </div>
      </div>
    </section>
  );
}
