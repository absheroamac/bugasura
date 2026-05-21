import Image from "next/image";
import { Button, Heading } from "@/components/ui";

const badges = [
  {
    icon: "/enterprise/soc2.svg",
    label: "SOC 2 Type II\ncertified",
  },
  {
    icon: "/enterprise/data-hosted.svg",
    label: "Data hosted in India\n& Singapore",
  },
  {
    icon: "/enterprise/sso.svg",
    label: "SSO & SAML\nsupported",
  },
  {
    icon: "/enterprise/on-prem.svg",
    label: "On-prem\navailable",
  },
];

export default function Enterprise() {
  return (
    <section
      style={{
        backgroundColor: "var(--cream)",
        paddingTop: "32px",
        paddingBottom: "32px",
      }}
    >
      <div
        className="flex flex-col items-center px-6 py-10 md:px-16 md:py-12"
        style={{
          backgroundColor: "#fff",
          borderRadius: "24px",
        }}
      >
        {/* Badges row */}
        <div className="flex flex-wrap md:flex-nowrap items-start justify-center md:justify-between w-full gap-8 mb-10 md:mb-12">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex flex-col items-center gap-3 flex-1"
            >
              <Image
                src={badge.icon}
                alt={badge.label.replace("\n", " ")}
                width={44}
                height={44}
                className="block"
              />
              <Heading
                level="step"
                as="p"
                color="var(--dark)"
                className="text-center"
                style={{
                  fontSize: "17px",
                  lineHeight: 1.35,
                  whiteSpace: "pre-line",
                }}
              >
                {badge.label}
              </Heading>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <Button href="/enterprise" variant="outline">
          Enterprise Overview
        </Button>
      </div>
    </section>
  );
}
