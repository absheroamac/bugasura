import Image from "next/image";
import Link from "next/link";

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
          <h2
            className="font-semibold"
            style={{
              fontFamily: "'Clash Grotesk', sans-serif",
              fontSize: "clamp(36px, 4vw, 56px)",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "#1A0A00",
            }}
          >
            <span style={{ whiteSpace: "nowrap" }}>Enterprise-ready.</span>
            <br />
            Security-first.
          </h2>

          <p
            className="mt-5"
            style={{
              fontSize: "14px",
              lineHeight: 1.65,
              color: "rgba(20,10,0,0.55)",
              maxWidth: "340px",
            }}
          >
            Bugasura meets the bar for large engineering organisations —
            data isolation, compliance certification, and deployment
            options that work for procurement teams.
          </p>

          <Link
            href="/enterprise"
            className="inline-block mt-8 px-6 py-3 rounded-lg font-semibold uppercase transition-opacity hover:opacity-80"
            style={{
              border: "2px solid #E52727",
              color: "#E52727",
              fontSize: "12px",
              letterSpacing: "0.08em",
            }}
          >
            Full Enterprise Overview
          </Link>
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
              <span
                className="font-semibold"
                style={{
                  fontFamily: "'Clash Grotesk', sans-serif",
                  fontSize: "14px",
                  color: "#1A0A00",
                  lineHeight: 1.35,
                  whiteSpace: "pre-line",
                }}
              >
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
