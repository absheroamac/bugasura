import Image from "next/image";
import { Users, BadgeDollarSign, Puzzle, Bug } from "lucide-react";
import { Heading, BodyText, Button } from "@/components/ui";

const cards = [
  { Icon: Users,           label: "Unlimited users",      desc: "Every teammate on the same plan, no per-seat pricing, no surprises" },
  { Icon: Bug,             label: "Unlimited bug reports", desc: "Log as many issues as you need — no caps, no overages, ever" },
  { Icon: BadgeDollarSign, label: "Free forever",          desc: "Core Bugasura is free with no trial period or time limit" },
  { Icon: Puzzle,          label: "25+ integrations",      desc: "Connect Jira, GitHub, Slack, Linear and more out of the box" },
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

      {/* ── Bottom: 4 cream cards ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 px-8 lg:px-20 pb-8 lg:pb-10">
        {cards.map(({ Icon, label, desc }) => (
          <div key={label} className="flex flex-col" style={{ background: "#FFF6E2", borderRadius: "20px", padding: "20px" }}>
            <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(0,119,194,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px" }}>
              <Icon size={22} strokeWidth={1.6} color="#0077C2" />
            </div>
            <Heading level="card" as="h3" color="#1A1A1A" style={{ fontSize: "clamp(16px, 1.5vw, 20px)", marginBottom: "8px" }}>{label}</Heading>
            <BodyText color="rgba(30,30,30,0.6)" style={{ fontSize: "13px", lineHeight: 1.6 }}>{desc}</BodyText>
          </div>
        ))}
      </div>

    </section>
  );
}
