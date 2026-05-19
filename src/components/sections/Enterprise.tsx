import Image from "next/image";
import Link from "next/link";

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
        className="flex flex-col items-center"
        style={{
          backgroundColor: "#fff",
          borderRadius: "24px",
          padding: "48px 64px 44px",
        }}
      >
        {/* Badges row */}
        <div className="flex items-start justify-between w-full mb-12">
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
              <p
                className="text-center font-semibold"
                style={{
                  fontFamily: "'Clash Grotesk', sans-serif",
                  fontSize: "17px",
                  lineHeight: 1.35,
                  color: "var(--dark)",
                  whiteSpace: "pre-line",
                }}
              >
                {badge.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <Link
          href="/enterprise"
          className="font-semibold uppercase border transition-opacity hover:opacity-75"
          style={{
            fontFamily: "'Clash Grotesk', sans-serif",
            fontSize: "13px",
            letterSpacing: "0.08em",
            color: "var(--red)",
            borderColor: "var(--red)",
            borderRadius: "8px",
            padding: "12px 28px",
          }}
        >
          Enterprise Overview
        </Link>
      </div>
    </section>
  );
}
