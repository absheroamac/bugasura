import Image from "next/image";
import { Button, Heading, BodyText } from "@/components/ui";

const badges = [
  { src: "/enterprise/soc2.svg",        label: "SOC 2 Type II\ncertified" },
  { src: "/enterprise/data-hosted.svg", label: "Data hosted in India\n& Singapore" },
  { src: "/enterprise/sso.svg",         label: "SSO & SAML\nsupported" },
  { src: "/enterprise/on-prem.svg",     label: "On-prem\navailable" },
];

export default function PlatformEnterprise() {
  return (
    <section
      className="rounded-[32px]"
      style={{
        backgroundColor: "#ffffff",
        padding: "80px 80px",
      }}
    >
      <div className="flex items-center justify-between gap-16">
        {/* Left — copy */}
        <div style={{ maxWidth: "400px", flexShrink: 0 }}>
          <Heading
            level="section"
            as="h2"
            color="#1A0A00"
            style={{
              fontSize: "clamp(36px, 4vw, 56px)",
              lineHeight: 1.05,
            }}
          >
            <span style={{ whiteSpace: "nowrap" }}>Enterprise-ready.</span>
            <br />
            Security-first.
          </Heading>

          <BodyText
            color="rgba(20,10,0,0.8)"
            maxWidth="340px"
            className="mt-5"
            style={{ lineHeight: 1.65, fontSize: "14px" }}
          >
            Bugasura meets the bar for large engineering organisations —
            data isolation, compliance certification, and deployment
            options that work for procurement teams.
          </BodyText>

          <div className="mt-8">
            <Button href="/enterprise" variant="outline">
              Full Enterprise Overview
            </Button>
          </div>
        </div>

        {/* Right — 2×2 badge grid */}
        <div
          className="grid grid-cols-2 gap-x-16 gap-y-10 flex-1"
          style={{ maxWidth: "480px" }}
        >
          {badges.map((badge) => (
            <div key={badge.label} className="flex flex-col items-center text-center gap-3">
              <Image
                src={badge.src}
                alt={badge.label.replace("\n", " ")}
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <Heading
                level="step"
                as="p"
                color="#1A0A00"
                style={{
                  fontSize: "14px",
                  lineHeight: 1.35,
                  whiteSpace: "pre-line",
                }}
              >
                {badge.label}
              </Heading>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
