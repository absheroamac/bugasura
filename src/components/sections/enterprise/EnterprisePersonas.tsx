import Image from "next/image";
import { Heading, BodyText, Card, Eyebrow } from "@/components/ui";

function CheckIcon({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden style={{ flexShrink: 0, marginTop: "2px" }}>
      <circle cx="8" cy="8" r="8" fill={color} fillOpacity="0.12" />
      <path d="M4.5 8l2.5 2.5 4.5-5" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const personas = [
  {
    illustration: "/enterprise/three-teams/01.png",
    role: "CTO · VP Engineering · Head of QA",
    roleColor: "#E52727",
    roleBg: "rgba(229,39,39,0.08)",
    roleBorder: "rgba(229,39,39,0.18)",
    title: "We need QA that keeps pace with AI development.",
    body: "Your team ships faster with AI co-pilots. Your QA infrastructure hasn't changed. Bugasura closes that gap — with a platform that builds context over time, not from scratch every sprint.",
    checks: [
      "Platform intelligence that compounds sprint over sprint",
      "MCP server puts quality context into Claude and Cursor",
      "Testpert AI for expert-level test strategy at scale",
      "Eagle Eye for strategic quality visibility across releases",
    ],
    checkColor: "#E52727",
  },
  {
    illustration: "/enterprise/three-teams/02.png",
    role: "IT · InfoSec · Security Lead",
    roleColor: "#29A5FF",
    roleBg: "rgba(41,165,255,0.08)",
    roleBorder: "rgba(41,165,255,0.18)",
    title: "We need to know exactly where our data lives.",
    body: "No surprises on data residency, no ambiguity on AI processing. Bugasura's enterprise tier is built to answer infosec questions before they're asked — with documentation, not promises.",
    checks: [
      "Data hosted in India or Singapore — documented, not assumed",
      "Private AI mode — test data never trains any external model",
      "On-premises deployment for full air-gap requirements",
      "SOC 2 Type II audit report available under NDA",
    ],
    checkColor: "#29A5FF",
  },
  {
    illustration: "/enterprise/three-teams/03.png",
    role: "Procurement · Finance · Legal",
    roleColor: "#C9963A",
    roleBg: "rgba(201,150,58,0.08)",
    roleBorder: "rgba(201,150,58,0.18)",
    title: "We need the commercial and compliance documentation.",
    body: "Custom pricing scoped to your actual deployment. DPA, MSA, and BAA available. No standard packages that don't fit your model — we scope together and put it in writing.",
    checks: [
      "Custom commercial terms — no per-seat take-it-or-leave-it",
      "DPA, MSA, and BAA available on request",
      "SOC 2 report and infosec questionnaire support",
      "Dedicated success manager from contract through rollout",
    ],
    checkColor: "#C9963A",
  },
];

export default function EnterprisePersonas() {
  return (
    <section
      className="rounded-[32px]"
      style={{ backgroundColor: "var(--cream)", padding: "80px clamp(24px, 6vw, 80px)" }}
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-16 mb-12">
        <div className="flex-shrink-0">
          <Heading
            level="section"
            as="h2"
            color="var(--dark)"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.0, letterSpacing: "-0.025em" }}
          >
            Three teams need<br />to say yes.
          </Heading>
        </div>
        <BodyText
          color="rgba(30,30,30,0.55)"
          style={{ fontSize: "16px", lineHeight: 1.75, maxWidth: "420px" }}
        >
          Enterprise procurement isn&apos;t one conversation. Here&apos;s what Bugasura covers for each stakeholder in your organisation.
        </BodyText>
      </div>

      {/* Persona cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {personas.map((p, i) => (
          <Card key={p.role} tint="white" radius="xl" padding="40px" style={{ display: "flex", flexDirection: "column", border: "1px solid rgba(30,30,30,0.07)" }}>

            {/* Role eyebrow */}
            <div style={{ marginBottom: "16px" }}>
              <Eyebrow variant="badge" color={p.roleColor} style={{ fontSize: "14px" }}>
                {p.role}
              </Eyebrow>
            </div>

            {/* Title */}
            <Heading
              level="subsection"
              as="h3"
              color="var(--dark)"
              style={{ fontSize: "clamp(24px, 3vw, 32px)", lineHeight: 1.0, marginBottom: "14px" }}
            >
              {p.title}
            </Heading>

            {/* Body */}
            <BodyText
              color="rgba(30,30,30,0.55)"
              style={{ fontSize: "14px", lineHeight: 1.7, marginBottom: "24px" }}
            >
              {p.body}
            </BodyText>

            {/* Divider */}
            <div style={{ height: "1px", background: "rgba(30,30,30,0.08)", marginBottom: "20px" }} />

            {/* Checklist */}
            <div className="flex flex-col gap-3 mb-6">
              {p.checks.map((c) => (
                <div key={c} className="flex items-start gap-2">
                  <CheckIcon color={p.checkColor} />
                  <BodyText
                    color="rgba(30,30,30,0.75)"
                    style={{ fontSize: "13px", fontWeight: 500, lineHeight: 1.5 }}
                  >
                    {c}
                  </BodyText>
                </div>
              ))}
            </div>

            {/* Illustration — pull out to card edges, 8px gap all around */}
            {i < 2 ? (
              <div style={{ flex: 1, margin: "0 -40px -40px -40px", padding: "0 8px 8px 8px", lineHeight: 0, minHeight: "200px" }}>
                <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: "0 0 24px 24px", overflow: "hidden" }}>
                  <Image
                    src={p.illustration}
                    alt=""
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    aria-hidden
                  />
                </div>
              </div>
            ) : (
              <div style={{ margin: "0 -40px -40px -40px", padding: "0 8px 8px 8px", lineHeight: 0 }}>
                <Image
                  src={p.illustration}
                  alt=""
                  width={400}
                  height={200}
                  className="w-full rounded-b-[24px]"
                  style={{ display: "block", height: "auto" }}
                  aria-hidden
                />
              </div>
            )}

          </Card>
        ))}
      </div>
    </section>
  );
}
