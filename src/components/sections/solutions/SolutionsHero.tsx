import Image from "next/image";
import { type LucideIcon } from "lucide-react";
import { Heading, BodyText, Button } from "@/components/ui";

interface TrustBadge {
  Icon: LucideIcon;
  iconColor: string;
  label: string;
}

interface FeatureCard {
  title: string;
  body: string;
}

interface SolutionsHeroProps {
  headline: React.ReactNode;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  trustBadges?: TrustBadge[];
  featureCards?: FeatureCard[];
  heroBg?: string;
  darkText?: boolean;
  illustration?: string;
  illustrationPortrait?: boolean;
}

export default function SolutionsHero({
  headline,
  body,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  trustBadges,
  featureCards,
  heroBg = "linear-gradient(160deg, #0077C2 0%, #29A5FF 60%, #4DB8FF 100%)",
  darkText = false,
  illustration,
}: SolutionsHeroProps) {
  const headingColor = darkText ? "#1A0A00" : "#ffffff";
  const bodyColor    = darkText ? "rgba(20,10,0,0.8)" : "rgba(255,255,255,0.75)";
  const primaryVariant   = darkText ? "primary" : "white";
  const secondaryVariant = darkText ? "outline" : "outline-light";
  const cardBg = darkText ? "var(--cream)" : "#ffffff";
  return (
    <section
      className="rounded-[32px] overflow-hidden"
      style={{ background: heroBg }}
    >
      {/* Top: copy left + image placeholder right */}
      <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12 px-8 lg:px-20 pt-20 lg:pt-28">

        {/* Left: copy */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left pb-12 lg:pb-20">
          <Heading
            level="hero"
            as="h1"
            color={headingColor}
            style={{ fontSize: "clamp(44px, 5.5vw, 84px)", lineHeight: 1.0, letterSpacing: "-0.025em", marginBottom: "24px" }}
          >
            {headline}
          </Heading>

          <BodyText
            color={bodyColor}
            style={{ fontSize: "17px", lineHeight: 1.75, maxWidth: "480px", marginBottom: "40px" }}
          >
            {body}
          </BodyText>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button
              href={primaryHref}
              target={primaryHref.startsWith("http") ? "_blank" : undefined}
              rel={primaryHref.startsWith("http") ? "noopener noreferrer" : undefined}
              variant={primaryVariant}
              className="justify-center sm:justify-start"
            >
              {primaryLabel}
            </Button>
            <Button
              href={secondaryHref}
              target={secondaryHref.startsWith("http") ? "_blank" : undefined}
              rel={secondaryHref.startsWith("http") ? "noopener noreferrer" : undefined}
              variant={secondaryVariant}
              className="justify-center sm:justify-start"
            >
              {secondaryLabel}
            </Button>
          </div>
        </div>

        {/* Right: illustration */}
        {illustration && (
          <div className="hidden lg:flex flex-shrink-0 items-start" style={{ width: "45%" }}>
            <Image
              src={illustration}
              alt=""
              width={1518}
              height={1425}
              style={{ width: "100%", height: "auto" }}
              sizes="45vw"
              priority
            />
          </div>
        )}

      </div>

      {/* Bottom: feature cards or trust badges */}
      {featureCards && featureCards.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 px-8 lg:px-20 pb-8 lg:pb-10">
          {featureCards.map((card) => (
            <div
              key={card.title}
              style={{ background: cardBg, borderRadius: "20px", padding: "24px 28px" }}
            >
              <Heading level="subsection" as="h3" color="var(--dark)" style={{ fontSize: "24px", lineHeight: 1.15, marginBottom: "14px" }}>
                {card.title}
              </Heading>
              <BodyText color="rgba(30,30,30,0.8)" style={{ fontSize: "15px", lineHeight: 1.7 }}>
                {card.body}
              </BodyText>
            </div>
          ))}
        </div>
      ) : trustBadges && trustBadges.length > 0 ? (
        <div className={`grid grid-cols-1 gap-3 px-8 lg:px-20 pb-8 lg:pb-10 ${
          trustBadges.length === 2 ? "sm:grid-cols-2" :
          trustBadges.length === 3 ? "sm:grid-cols-3" :
          trustBadges.length === 5 ? "sm:grid-cols-3 lg:grid-cols-5" :
          "sm:grid-cols-2 lg:grid-cols-4"
        }`}>
          {trustBadges.map(({ Icon, iconColor, label }) => (
            <div
              key={label}
              className="flex items-center gap-4"
              style={{ background: "#FFF6E2", borderRadius: "16px", padding: "12px 16px" }}
            >
              <div style={{
                width: "44px", height: "44px", borderRadius: "12px",
                background: `${iconColor}18`,
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <Icon size={22} strokeWidth={1.6} color={iconColor} />
              </div>
              <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "14px", color: "#1A1A1A", lineHeight: 1.3 }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}
