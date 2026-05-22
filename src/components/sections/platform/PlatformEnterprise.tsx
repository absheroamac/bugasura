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
      className="rounded-[32px] px-4 py-10 lg:px-20 lg:py-20"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        {/* Left — copy */}
        <div className="lg:flex-shrink-0 lg:max-w-[400px]">
          <Heading
            level="section"
            as="h2"
            color="#1A0A00"
            style={{
              fontSize: "clamp(32px, 4vw, 56px)",
              lineHeight: 1.05,
            }}
          >
            <span className="lg:whitespace-nowrap">Enterprise-ready.</span>
            {" "}<br className="hidden lg:block" />
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
            <Button href="/enterprise" variant="outline" className="w-full lg:w-auto justify-center">
              Full Enterprise Overview
            </Button>
          </div>
        </div>

        {/* Right — 2×2 badge grid */}
        <div
          className="grid grid-cols-2 gap-x-10 gap-y-8 lg:gap-x-16 lg:gap-y-10 mt-10 lg:mt-0 lg:flex-1"
          style={{ maxWidth: "480px" }}
        >
          {badges.map((badge) => (
            <div key={badge.label} className="flex flex-col items-center text-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={badge.src}
                alt={badge.label.replace("\n", " ")}
                className="w-10 h-10 lg:w-[45px] lg:h-[45px]"
              />
              <p
                style={{
                  fontFamily: "'Clash Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: 1.35,
                  whiteSpace: "pre-line",
                  color: "#1A0A00",
                }}
              >
                {badge.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
