import Image from "next/image";
import { Button } from "@/components/ui";

const badges = [
  {
    icon: "/enterprise/soc2.svg",
    label: "SOC 2 Type II\ncertified",
  },
  {
    icon: "/enterprise/iso27001.svg",
    label: "ISO/IEC 27001\ncertified",
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
        className="flex flex-col items-center px-6 py-10 lg:px-16 lg:py-12"
        style={{
          backgroundColor: "#fff",
          borderRadius: "24px",
        }}
      >
        {/* Badges row */}
        <div className="grid grid-cols-2 lg:flex lg:flex-nowrap items-start justify-center lg:justify-center w-full gap-8 lg:gap-14 xl:gap-20 mb-10 lg:mb-12">
          {badges.map((badge, i) => (
            <div
              key={badge.label}
              className={`flex flex-col items-center gap-3${i === badges.length - 1 ? " col-span-2 lg:col-span-1" : ""}`}
            >
              <Image
                src={badge.icon}
                alt={badge.label.replace("\n", " ")}
                width={44}
                height={44}
                className="block"
              />
              <p
                className="text-center text-[17px] lg:text-[18px]"
                style={{
                  fontFamily: "'Clash Grotesk', sans-serif",
                  fontWeight: 600,
                  lineHeight: 1.35,
                  whiteSpace: "pre-line",
                  color: "var(--dark)",
                }}
              >
                {badge.label}
              </p>
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
