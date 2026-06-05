import { Heading, BodyText } from "@/components/ui";

const TIERS = [
  {
    label: "Free",
    labelColor: "#CC7A00",
    name: "Built-in Asuras",
    desc: "Browser Asura, API Asura, Duplicate Bug Asura — all included on free tier",
    limit: "Unlimited",
    limitColor: "#CC7A00",
    active: false,
    muted: false,
  },
  {
    label: "Custom",
    labelColor: "#0077C2",
    name: "Production-scale execution",
    desc: "Priority execution queue, SLA guarantees, custom Asura development support",
    limit: "Unlimited",
    limitColor: "#0077C2",
    active: true,
    muted: false,
  },
  {
    label: "Soon",
    labelColor: "rgba(30,30,30,0.35)",
    name: "Marketplace Asuras",
    desc: "Third-party agents from the World of Asuras — creator-set pricing, per-use",
    limit: "Coming Q3",
    limitColor: "rgba(30,30,30,0.35)",
    active: false,
    muted: true,
  },
];

export default function PricingAsura() {
  return (
    <section
      className="rounded-[32px]"
      style={{ background: "linear-gradient(135deg, #0077C2 0%, #29A5FF 100%)", padding: "80px clamp(24px, 6vw, 80px)" }}
    >
      {/* Header — centered */}
      <div style={{ textAlign: "center", maxWidth: "580px", margin: "0 auto 48px" }}>
        <span
          style={{
            display: "block",
            fontFamily: "'Clash Grotesk', sans-serif",
            fontSize: "16px",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.6)",
            marginBottom: "16px",
          }}
        >
          Asuras
        </span>
        <Heading
          level="section"
          as="h2"
          color="#ffffff"
          style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.025em", marginBottom: "18px" }}
        >
          How Asura agents are priced.
        </Heading>
        <BodyText
          color="rgba(255,255,255,0.7)"
          style={{ fontSize: "16px", lineHeight: 1.75 }}
        >
          Asuras are free to run — no monthly caps on the free tier. As the Asura marketplace grows, individual agents may carry creator pricing — you only pay for the agents you use.
        </BodyText>
      </div>

      {/* 3 tier cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-3">
        {TIERS.map(({ label, labelColor, name, desc, limit, limitColor, muted }) => (
          <div
            key={name}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              background: "#FFF6E2",
              borderRadius: "18px",
              padding: "24px 28px",
              opacity: muted ? 0.8 : 1,
            }}
          >
            {/* Label + limit row */}
            <div className="flex items-center justify-between">
              <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: labelColor }}>
                {label}
              </span>
              <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: "13px", fontWeight: 700, color: limitColor }}>
                {limit}
              </span>
            </div>

            {/* Divider */}
            <div style={{ height: "1px", background: "rgba(30,30,30,0.1)" }} />

            {/* Name + desc */}
            <div>
              <Heading level="subsection" as="h3" color="var(--dark)" style={{ fontSize: "28px", lineHeight: 1.2, marginBottom: "8px" }}>
                {name}
              </Heading>
              <BodyText color="rgba(30,30,30,0.55)" style={{ fontSize: "14px", lineHeight: 1.65 }}>
                {desc}
              </BodyText>
            </div>
          </div>
        ))}
      </div>

      {/* Note — full width below */}
      <div
        style={{
          background: "#FFF6E2",
          borderRadius: "18px",
          padding: "20px 28px",
        }}
      >
        <BodyText color="rgba(30,30,30,0.6)" style={{ fontSize: "14px", lineHeight: 1.7 }}>
          <strong style={{ color: "#1A1A1A" }}>Asura runs are unlimited on the free tier.</strong> The only limit is 50 GB storage — which is more than enough for most teams. Marketplace Asuras from third-party creators may carry their own pricing when they launch.
        </BodyText>
      </div>

    </section>
  );
}
