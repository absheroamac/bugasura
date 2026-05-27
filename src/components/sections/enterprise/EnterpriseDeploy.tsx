import { Globe, ShieldCheck, Database, HardDrive, Target, Server, WifiOff, Brain, RefreshCw, Building2 } from "lucide-react";
import { Heading, BodyText } from "@/components/ui";

const cloudSpecs = [
  { Icon: Globe,       label: "Regions",        value: "India (Mumbai) · Singapore — choose at signup" },
  { Icon: ShieldCheck, label: "Uptime SLA",      value: "99.9% uptime SLA with enterprise support tier" },
  { Icon: Database,    label: "Data isolation",  value: "Dedicated database and storage per tenant" },
  { Icon: HardDrive,   label: "Backups",         value: "Daily encrypted backups, 30-day retention" },
  { Icon: Target,      label: "Ideal for",       value: "Teams that need compliance without infra overhead" },
];

const premSpecs = [
  { Icon: Server,      label: "Infrastructure", value: "Kubernetes-based on your hardware or private cloud" },
  { Icon: WifiOff,     label: "Air-gap",        value: "Full air-gap — no outbound internet required" },
  { Icon: Brain,       label: "AI processing",  value: "Testpert AI runs on your infra — data never leaves" },
  { Icon: RefreshCw,   label: "Updates",        value: "Managed delivery aligned to your change process" },
  { Icon: Building2,   label: "Ideal for",      value: "Regulated industries, government, high-security environments" },
];

export default function EnterpriseDeploy() {
  return (
    <section
      className="rounded-[32px]"
      style={{ backgroundColor: "#ffffff", padding: "80px clamp(24px, 6vw, 80px)" }}
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-16 mb-12">
        <div className="flex-shrink-0">
          <Heading
            level="section"
            as="h2"
            color="var(--dark)"
            style={{ fontSize: "clamp(32px, 4.5vw, 58px)", lineHeight: 1.05, letterSpacing: "-0.025em" }}
          >
            Deploy the way your<br />infrastructure demands.
          </Heading>
        </div>
        <BodyText
          color="rgba(30,30,30,0.5)"
          style={{ fontSize: "16px", lineHeight: 1.75, maxWidth: "380px" }}
        >
          Two paths. Both enterprise-ready. Choose based on your data residency requirements and IT policy.
        </BodyText>
      </div>

      {/* Deployment cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        {/* Cloud */}
        <div
          style={{
            background: "#FFDAA8",
            border: "none",
            borderRadius: "24px",
            padding: "36px",
          }}
        >
          <span
            style={{
              display: "block",
              fontFamily: "'Clash Grotesk', sans-serif",
              fontSize: "24px",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#CC7A00",
              marginBottom: "8px",
            }}
          >
            Cloud — Managed
          </span>
          <Heading
            level="subsection"
            as="h3"
            color="var(--dark)"
            style={{ fontSize: "48px", marginBottom: "12px" }}
          >
            Bugasura Cloud
          </Heading>
          <BodyText
            color="#1A1A1A"
            style={{ fontSize: "16px", lineHeight: 1.7, marginBottom: "28px" }}
          >
            Fully managed. Bugasura handles infrastructure, upgrades, and uptime. Your data stays within your chosen region — no cross-border transfer.
          </BodyText>

          <div style={{ height: "1px", background: "rgba(30,30,30,0.1)", marginBottom: "24px" }} />

          <div className="flex flex-col gap-4">
            {cloudSpecs.map(({ Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <div style={{ width: "40px", height: "40px", borderRadius: "13px", background: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={19} strokeWidth={1.5} color="#CC7A00" />
                </div>
                <div>
                  <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#1A1A1A", display: "block", marginBottom: "2px" }}>
                    {label}
                  </span>
                  <span style={{ fontSize: "16px", color: "#1A1A1A", lineHeight: 1.5 }}>
                    {value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* On-prem */}
        <div
          style={{
            background: "#B2D9EC",
            border: "none",
            borderRadius: "24px",
            padding: "36px",
          }}
        >
          <span
            style={{
              display: "block",
              fontFamily: "'Clash Grotesk', sans-serif",
              fontSize: "24px",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#0077C2",
              marginBottom: "8px",
            }}
          >
            On-Premises
          </span>
          <Heading
            level="subsection"
            as="h3"
            color="var(--dark)"
            style={{ fontSize: "48px", marginBottom: "12px" }}
          >
            Bugasura On-Prem
          </Heading>
          <BodyText
            color="#1A1A1A"
            style={{ fontSize: "16px", lineHeight: 1.7, marginBottom: "28px" }}
          >
            Full deployment within your infrastructure. Your hardware, your network, your data. Zero dependency on Bugasura&apos;s cloud after deployment.
          </BodyText>

          <div style={{ height: "1px", background: "rgba(30,30,30,0.1)", marginBottom: "24px" }} />

          <div className="flex flex-col gap-4">
            {premSpecs.map(({ Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <div style={{ width: "40px", height: "40px", borderRadius: "13px", background: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={19} strokeWidth={1.5} color="#0077C2" />
                </div>
                <div>
                  <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#1A1A1A", display: "block", marginBottom: "2px" }}>
                    {label}
                  </span>
                  <span style={{ fontSize: "16px", color: "#1A1A1A", lineHeight: 1.5 }}>
                    {value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
