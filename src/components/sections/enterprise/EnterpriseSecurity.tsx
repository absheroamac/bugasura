import Image from "next/image";
import { Heading, BodyText, Button } from "@/components/ui";
import { Globe, KeyRound, Cpu, ShieldAlert, BadgeCheck } from "lucide-react";

const CARD_BG = "#FFDAA8";
const RADIUS = "24px";
const GAP = "16px";

const iconBox: React.CSSProperties = {
  width: "64px",
  height: "64px",
  borderRadius: "14px",
  background: "rgba(255,255,255,0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "20px",
  flexShrink: 0,
};

export default function EnterpriseSecurity() {
  return (
    <section
      id="security"
      className="rounded-[32px]"
      style={{ backgroundColor: "var(--cream)", padding: "80px clamp(24px, 6vw, 80px)" }}
    >
      {/* Header — centered */}
      <div style={{ textAlign: "center", maxWidth: "580px", margin: "0 auto 48px" }}>
        <Heading
          level="section"
          as="h2"
          color="var(--dark)"
          style={{
            fontSize: "clamp(32px, 4vw, 52px)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            marginBottom: "14px",
          }}
        >
          Documentation,<br />not just claims.
        </Heading>
        <BodyText
          color="rgba(30,30,30,0.55)"
          style={{ fontSize: "15px", lineHeight: 1.7 }}
        >
          Infosec teams need documentation, not a marketing page. Here&apos;s what&apos;s available — ask us for anything not listed.
        </BodyText>
      </div>

      {/* Bento grid — CSS grid with row spanning */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "auto auto", gap: GAP }}>

        {/* Data residency — spans both rows on the left */}
        <div
          style={{
            gridColumn: "1",
            gridRow: "1 / 3",
            borderRadius: RADIUS,
            overflow: "hidden",
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Full background image */}
          <Image
            src="/enterprise/card1-bg-v4.png"
            alt=""
            aria-hidden
            fill
            style={{ objectFit: "cover", objectPosition: "bottom" }}
          />
          {/* Content overlay */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              flex: 1,
            }}
          >
            <div style={{ ...iconBox, background: "rgba(255,255,255,0.1)" }}>
              <Globe size={28} strokeWidth={1.6} color="#ffffff" />
            </div>
            <Heading level="subsection" as="h3" color="#ffffff" style={{ fontSize: "28px", lineHeight: 1.2, marginBottom: "10px" }}>
              Data residency &amp; sovereignty
            </Heading>
            <BodyText color="rgba(255,255,255,0.75)" style={{ fontSize: "14px", lineHeight: 1.65 }}>
              India (Mumbai) and Singapore hosting. Data processing agreements available. Your data does not leave the selected region.
            </BodyText>
          </div>
        </div>

        {/* Row 1 right — Identity & Private AI side by side */}
        <div style={{ gridColumn: "2", gridRow: "1", display: "grid", gridTemplateColumns: "1fr 1fr", gap: GAP }}>

          {/* Identity & access management */}
          <div style={{ background: CARD_BG, borderRadius: RADIUS, padding: "28px", display: "flex", flexDirection: "column" }}>
            <div style={iconBox}>
              <KeyRound size={28} strokeWidth={1.6} color="#1A1A1A" />
            </div>
            <Heading level="subsection" as="h3" color="var(--dark)" style={{ fontSize: "28px", lineHeight: 1.2, marginBottom: "10px" }}>
              Identity &amp; access management
            </Heading>
            <BodyText color="rgba(30,30,30,0.65)" style={{ fontSize: "13px", lineHeight: 1.65 }}>
              SSO via Okta, Azure AD, Google Workspace, and custom SAML. MFA enforced. Role-based access controls across all modules.
            </BodyText>
          </div>

          {/* Private AI processing */}
          <div style={{ background: "#B2D9EC", borderRadius: RADIUS, padding: "28px", display: "flex", flexDirection: "column" }}>
            <div style={iconBox}>
              <Cpu size={28} strokeWidth={1.6} color="#1A1A1A" />
            </div>
            <Heading level="subsection" as="h3" color="var(--dark)" style={{ fontSize: "28px", lineHeight: 1.2, marginBottom: "10px" }}>
              Private AI processing
            </Heading>
            <BodyText color="rgba(30,30,30,0.65)" style={{ fontSize: "13px", lineHeight: 1.65 }}>
              All Testpert AI runs within your deployment. Your requirements, test data, and defect history never leave your environment or train any external model.
            </BodyText>
          </div>

        </div>

        {/* Row 2 right — Penetration testing */}
        <div style={{ gridColumn: "2", gridRow: "2", background: "#FDD9C8", borderRadius: RADIUS, padding: "28px 32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={iconBox}>
            <ShieldAlert size={28} strokeWidth={1.6} color="#1A1A1A" />
          </div>
          <Heading level="subsection" as="h3" color="var(--dark)" style={{ fontSize: "28px", lineHeight: 1.2, marginBottom: "10px" }}>
            Penetration testing
          </Heading>
          <BodyText color="rgba(30,30,30,0.65)" style={{ fontSize: "14px", lineHeight: 1.65 }}>
            Annual third-party penetration tests. Results and remediation documentation available on request for infosec review.
          </BodyText>
        </div>

      </div>

      {/* SOC 2 — full width below grid */}
      <div
        style={{
          marginTop: GAP,
          background: "#DCDCDC",
          borderRadius: RADIUS,
          padding: "28px 32px",
          display: "flex",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <div style={{ ...iconBox, marginBottom: 0 }}>
          <BadgeCheck size={28} strokeWidth={1.6} color="#1A1A1A" />
        </div>
        <div style={{ flex: 1 }}>
          <Heading level="subsection" as="h3" color="var(--dark)" style={{ fontSize: "28px", lineHeight: 1.2, marginBottom: "8px" }}>
            SOC 2 Type II certification
          </Heading>
          <BodyText color="rgba(30,30,30,0.65)" style={{ fontSize: "14px", lineHeight: 1.65, maxWidth: "70%" }}>
            Full audit report available under NDA. Covers security, availability, processing integrity, confidentiality, and privacy trust service criteria.
          </BodyText>
        </div>
        <Button href="#" variant="outline" style={{ flexShrink: 0 }}>
          Download security overview
        </Button>
      </div>
    </section>
  );
}
