import { Brain, Map, UserCheck, Lock } from "lucide-react";
import { Heading, BodyText, Button } from "@/components/ui";

const CARDS = [
  {
    Icon: Brain,
    title: "Expert Q&A engine",
    body: "Testpert asks the clarifying questions a senior QA lead would ask before sprint planning — mapping hidden risks and coverage gaps before a test is written.",
  },
  {
    Icon: Map,
    title: "Risk surface mapping",
    body: "Combines requirements, defect history, and business context to build a prioritised risk map — so coverage decisions are made against impact, not guesswork.",
  },
  {
    Icon: UserCheck,
    title: "Expert-in-the-loop mode",
    body: "Your senior testers stay in control. Testpert surfaces AI-generated analysis, but humans approve before anything is generated downstream.",
  },
  {
    Icon: Lock,
    title: "Private AI processing",
    body: "All Testpert AI processing runs in your isolated environment. Your test strategies, requirements, and defect data never leave your infrastructure.",
  },
];

export default function PricingTestpert() {
  return (
    <section
      className="rounded-[32px]"
      style={{ backgroundColor: "#1A1A1A", padding: "80px clamp(24px, 6vw, 80px)" }}
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-16 mb-12">
        <div className="flex-shrink-0">
          <span
            style={{
              display: "block",
              fontFamily: "'Clash Grotesk', sans-serif",
              fontSize: "16px",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#29A5FF",
              marginBottom: "16px",
            }}
          >
            Add-on · Testpert
          </span>
          <Heading
            level="section"
            as="h2"
            color="#ffffff"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.025em" }}
          >
            What Testpert adds<br />to the platform.
          </Heading>
        </div>
        <div style={{ maxWidth: "400px" }}>
          <BodyText
            color="rgba(255,255,255,0.5)"
            style={{ fontSize: "16px", lineHeight: 1.75, marginBottom: "20px" }}
          >
            The free platform is genuinely powerful. Testpert is for teams where AI-expert-level QA intelligence isn&apos;t optional — where test strategy decisions have real revenue consequences.
          </BodyText>
          <Button
            href="https://bugasura.io/testpert"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline-light"
          >
            Read more about Testpert →
          </Button>
        </div>
      </div>

      {/* 4-col card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CARDS.map(({ Icon, title, body }) => (
          <div
            key={title}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "28px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                background: "rgba(41,165,255,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
                flexShrink: 0,
              }}
            >
              <Icon size={22} strokeWidth={1.6} color="#29A5FF" />
            </div>
            <Heading level="subsection" as="h3" color="#ffffff" style={{ fontSize: "18px", lineHeight: 1.25, marginBottom: "10px" }}>
              {title}
            </Heading>
            <BodyText color="rgba(255,255,255,0.5)" style={{ fontSize: "14px", lineHeight: 1.65 }}>
              {body}
            </BodyText>
          </div>
        ))}
      </div>
    </section>
  );
}
