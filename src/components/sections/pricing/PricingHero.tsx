import Image from "next/image";
import { BadgeDollarSign } from "lucide-react";
import { Heading, BodyText, Button } from "@/components/ui";

const stats = [
  { glyph: "∞", label: "Users" },
  { glyph: "∞", label: "Projects" },
  { glyph: "∞", label: "Bug reports" },
  { glyph: "∞", label: "Test cases" },
  { Icon: BadgeDollarSign, label: "Forever free" },
];

export default function PricingHero() {
  return (
    <section
      className="rounded-[32px] overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0077C2 0%, #29A5FF 60%, #4DB8FF 100%)" }}
    >
      {/* ── Top: copy left + image placeholder right ── */}
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
            Most teams pay<br />
            <em style={{ fontStyle: "normal", color: "#ffffff" }}>nothing.</em> Ever.
          </Heading>

          <BodyText
            color="rgba(255,255,255,0.8)"
            style={{ fontSize: "17px", lineHeight: 1.75, maxWidth: "460px", marginBottom: "44px" }}
          >
            Bugasura is free for unlimited users and unlimited projects — not a trial, not a limited tier. Just free. Custom pricing only when you need on-prem deployment, Testpert AI, or enterprise-scale Asura execution.
          </BodyText>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button
              href="https://my.bugasura.io?go=sign_up"
              target="_blank"
              rel="noopener noreferrer"
              variant="white"
              className="justify-center sm:justify-start"
            >
              Start for free
            </Button>
            <Button
              href="https://calendly.com/get-bugasura/45min"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline-light"
              className="justify-center sm:justify-start"
            >
              Talk to us about Custom
            </Button>
          </div>
        </div>

        {/* Right: illustration */}
        <div
          className="hidden lg:flex flex-shrink-0 items-center justify-center"
          style={{ width: "45%", alignSelf: "center" }}
        >
          <Image
            src="/illustrations/pricing.png"
            alt=""
            width={760}
            height={507}
            style={{ width: "100%", height: "auto", display: "block" }}
            sizes="45vw"
            priority
          />
        </div>

      </div>

      {/* ── Bottom: stat bar ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 px-8 lg:px-20 pb-8 lg:pb-10">
        {stats.map(({ Icon, glyph, label }) => (
          <div
            key={label}
            className="flex items-center gap-3"
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
                background: "rgba(41,165,255,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {glyph ? (
                <svg width="22" height="22" viewBox="0 0 256 256" fill="#29A5FF" aria-hidden>
                  <path d="M248,128a56,56,0,0,1-95.6,39.6l-.33-.35L92.12,99.55a40,40,0,1,0,0,56.9l8.52-9.62a8,8,0,1,1,12,10.61l-8.69,9.81-.33.35a56,56,0,1,1,0-79.2l.33.35,59.95,67.7a40,40,0,1,0,0-56.9l-8.52,9.62a8,8,0,1,1-12-10.61l8.69-9.81.33-.35A56,56,0,0,1,248,128Z" />
                </svg>
              ) : Icon ? (
                <Icon size={22} strokeWidth={1.6} color="#29A5FF" />
              ) : null}
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
