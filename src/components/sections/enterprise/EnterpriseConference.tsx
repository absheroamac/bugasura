import { Heading, BodyText, Button } from "@/components/ui";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// July 2026 starts on Wednesday (index 2)
const CALENDAR = [
  null, null, 1,  2,  3,  4,  5,
  6,    7,    8,  9,  10, 11, 12,
  13,   14,   15, 16, 17, 18, 19,
  20,   21,   22, 23, 24, 25, 26,
  27,   28,   29, 30, 31, null, null,
];

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
            Talk to us in person<br />at the conference.
          </Heading>
          <BodyText
            color="rgba(30,30,30,0.6)"
            style={{ fontSize: "16px", lineHeight: 1.75, maxWidth: "420px", marginBottom: "36px" }}
          >
            Our team will be at the conference in July. If you&apos;re evaluating Bugasura for your engineering organisation, book 30 minutes with us — we&apos;d rather have that conversation in person than over email.
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
            July Conference
          </p>

          {/* Title */}
          <Heading level="subsection" as="h3" color="var(--dark)" style={{ fontSize: "24px", lineHeight: 1.15, marginBottom: "10px" }}>
            Book a meeting at the event.
          </Heading>

          {/* Body */}
          <BodyText color="rgba(30,30,30,0.55)" style={{ fontSize: "14px", lineHeight: 1.65, marginBottom: "24px" }}>
            We have limited booth slots across both conference days. Pick a time that works and we&apos;ll be there — no back-and-forth needed.
          </BodyText>

          {/* Slot rows */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
            {[
              { label: "Jul 15 · 10:00 – 11:00 AM", badge: "Slots available", badgeBg: "rgba(62,207,142,0.12)", badgeBorder: "1px solid rgba(62,207,142,0.3)", badgeColor: "#1D9E75" },
              { label: "Jul 15 · 2:00 – 4:00 PM",   badge: "2 slots left",    badgeBg: "rgba(201,150,58,0.12)", badgeBorder: "1px solid rgba(201,150,58,0.3)", badgeColor: "#A87820" },
              { label: "Jul 16 · 11:00 AM – 1:00 PM", badge: "Slots available", badgeBg: "rgba(62,207,142,0.12)", badgeBorder: "1px solid rgba(62,207,142,0.3)", badgeColor: "#1D9E75" },
              { label: "Jul 16 · 3:00 – 5:00 PM",   badge: "Full",           badgeBg: "rgba(30,30,30,0.06)", badgeBorder: "1px solid rgba(30,30,30,0.1)", badgeColor: "rgba(30,30,30,0.4)" },
            ].map(({ label, badge, badgeBg, badgeBorder, badgeColor }) => (
              <div
                key={label}
                className="flex items-center justify-between"
                style={{
                  background: "rgba(30,30,30,0.04)",
                  borderRadius: "12px",
                  padding: "14px 16px",
                  border: "1px solid rgba(30,30,30,0.07)",
                }}
              >
                <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: "14px", fontWeight: 500, color: "var(--dark)" }}>
                  {label}
                </span>
                <span style={{ padding: "4px 12px", borderRadius: "999px", background: badgeBg, border: badgeBorder, fontFamily: "'Clash Grotesk', sans-serif", fontSize: "12px", fontWeight: 600, color: badgeColor, flexShrink: 0 }}>
                  {badge}
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
            Reserve your slot →
          </Button>
        </div>
      </div>
    </section>
  );
}
