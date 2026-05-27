import Image from "next/image";
import { ShieldCheck, Globe, BadgeCheck, Server } from "lucide-react";
import { Button, Heading, BodyText } from "@/components/ui";

const badges = [
  {
    Icon: ShieldCheck,
    iconColor: "#29A5FF",
    label: "SOC 2 Type II certified",
  },
  {
    Icon: Globe,
    iconColor: "#6B7280",
    label: "Data hosted in India & Singapore",
  },
  {
    Icon: BadgeCheck,
    iconColor: "#F0A030",
    label: "SSO & SAML supported",
  },
  {
    Icon: Server,
    iconColor: "#6B7280",
    label: "On-prem available",
  },
];

export default function EnterpriseHero() {
  return (
    <section
      className="rounded-[32px] overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0077C2 0%, #29A5FF 60%, #4DB8FF 100%)" }}
    >
      {/* ── Top: copy left + illustration right ── */}
      <div className="flex flex-col lg:flex-row lg:items-end gap-0 px-8 lg:px-20 pt-20 lg:pt-28">

        {/* Left: copy */}
        <div className="flex-1 flex flex-col items-start pb-12 lg:pb-20">
          <Heading
            level="hero"
            as="h1"
            color="#ffffff"
            style={{
              fontSize: "clamp(44px, 5.5vw, 84px)",
              lineHeight: 1.0,
              letterSpacing: "-0.025em",
              marginBottom: "24px",
            }}
          >
            QA infrastructure<br />
            your enterprise<br />
            <em style={{ fontStyle: "normal", color: "#ffffff" }}>can ship with.</em>
          </Heading>

          <BodyText
            color="rgba(255,255,255,0.75)"
            style={{ fontSize: "17px", lineHeight: 1.75, maxWidth: "460px", marginBottom: "40px" }}
          >
            Deployment options, compliance certifications, and the security posture your procurement and infosec teams need to say yes — without slowing your engineering team down.
          </BodyText>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button
              href="https://calendly.com/get-bugasura/45min"
              target="_blank"
              rel="noopener noreferrer"
              variant="white"
              className="justify-center sm:justify-start"
            >
              Book a demo
            </Button>
            <Button
              href="#security"
              variant="outline-light"
              className="justify-center sm:justify-start"
            >
              Security overview
            </Button>
          </div>
        </div>

        {/* Right: illustration */}
        <div
          className="hidden lg:flex flex-shrink-0 items-end justify-center"
          style={{ width: "576px", marginTop: "-120px" }}
        >
          <Image
            src="/enterprise/enterprise_hero.png"
            alt="Enterprise platform illustration"
            width={576}
            height={504}
            className="object-contain object-bottom w-full"
            priority
          />
        </div>

      </div>

      {/* ── Bottom: 4 compliance cards ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 px-8 lg:px-20 pb-8 lg:pb-10">
        {badges.map(({ Icon, iconColor, label }) => (
          <div
            key={label}
            className="flex items-center gap-4"
            style={{
              background: "#FFF6E2",
              borderRadius: "16px",
              padding: "12px 16px",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background: `${iconColor}14`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Icon size={22} strokeWidth={1.6} color={iconColor} />
            </div>
            <p
              style={{
                fontFamily: "'Clash Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                color: "#1A1A1A",
                lineHeight: 1.3,
              }}
            >
              {label}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
