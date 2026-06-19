import React from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SecurityTabs from "@/components/sections/security/SecurityTabs";
import { Heading, BodyText, Button } from "@/components/ui";
import { Shield, Server, Lock, Database, HardDrive, Activity, BadgeCheck, Eye, Crown, Settings2, UserCheck, Users } from "lucide-react";

export const metadata = {
  title: "Security — Bugasura",
  description: "Security is one of the core design principles of the Bugasura platform. Security is handled at various stages in the stack to ensure redundancy in checks.",
};

// ── Inline slot components reusing the design vocabulary ─────────────────────


const ROLE_ICONS: Record<string, React.ReactNode> = {
  "Owner":        <Crown       size={28} strokeWidth={1.6} color="#1A1A1A" />,
  "Admins":       <Settings2   size={28} strokeWidth={1.6} color="#1A1A1A" />,
  "Normal Users": <Users       size={28} strokeWidth={1.6} color="#1A1A1A" />,
  "Guests":       <UserCheck   size={28} strokeWidth={1.6} color="#1A1A1A" />,
};

function RoleCard({ role, body }: { role: string; body: string }) {
  return (
    <div style={{ background: "rgba(255,255,255,0.55)", borderRadius: "24px", padding: "28px", border: "1px solid rgba(255,255,255,0.8)", display: "flex", flexDirection: "column" }}>
      <div style={{ width: "64px", height: "64px", borderRadius: "14px", background: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
        {ROLE_ICONS[role]}
      </div>
      <Heading level="subsection" as="h3" color="var(--dark)" style={{ fontSize: "clamp(20px, 2.5vw, 28px)", lineHeight: 1.2, marginBottom: "10px" }}>
        {role}
      </Heading>
      <BodyText color="rgba(30,30,30,0.8)" style={{ fontSize: "13px", lineHeight: 1.65 }}>
        {body}
      </BodyText>
    </div>
  );
}

function BackupTable() {
  return (
    <div style={{ overflowX: "auto", borderRadius: "16px", border: "1px solid rgba(196,114,0,0.2)" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "rgba(196,114,0,0.18)" }}>
            {["Frequency", "Location", "Type", "Retention", "Restore"].map((h) => (
              <th key={h} style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "12px", color: "#C47200", textTransform: "uppercase", letterSpacing: "0.07em", padding: "12px 16px", textAlign: "left", borderBottom: "1px solid rgba(196,114,0,0.2)" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            { freq: "Daily",        loc: "AWS Singapore",          type: "Disk Snapshot",   retention: "7 days",  restore: "10 mins"  },
            { freq: "Every 6 hrs",  loc: "DigitalOcean Bangalore", type: "DB & Codebase",   retention: "4 days",  restore: "2 hours"  },
            { freq: "Weekly",       loc: "AWS Singapore",          type: "AMI",             retention: "1 month", restore: "20 mins"  },
          ].map((row, i) => (
            <tr key={i} style={{ background: "rgba(255,255,255,0.35)" }}>
              {[row.freq, row.loc, row.type, row.retention, row.restore].map((val, j) => (
                <td key={j} style={{ fontFamily: j === 0 ? "'Clash Grotesk', sans-serif" : "Inter, sans-serif", fontSize: "14px", fontWeight: j === 0 ? 700 : 400, color: j === 0 ? "#1A0A00" : "rgba(26,10,0,0.7)", padding: "12px 16px", borderBottom: i < 2 ? "1px solid rgba(196,114,0,0.1)" : "none" }}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function SecurityPage() {
  return (
    <main className="flex flex-col gap-2">
      <Navbar />

      {/* ── Hero ── */}
      <section
        className="rounded-[32px] overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0077C2 0%, #29A5FF 60%, #4DB8FF 100%)" }}
      >
        <div className="flex flex-col lg:flex-row lg:items-start gap-0 px-8 lg:px-20 pt-20 lg:pt-28">
          <div className="flex-1 flex flex-col items-start pb-12 lg:pb-20">
            <Heading
              level="hero"
              as="h1"
              color="#ffffff"
              style={{ fontSize: "clamp(44px, 5.5vw, 84px)", lineHeight: 1.0, letterSpacing: "-0.025em", marginBottom: "24px" }}
            >
              Built secure.<br />From the ground up.
            </Heading>
            <BodyText
              color="rgba(255,255,255,0.85)"
              style={{ fontSize: "17px", lineHeight: 1.75, maxWidth: "460px", marginBottom: "44px" }}
            >
              Security is one of the core design principles of the Bugasura platform. Handled at every stage of the stack — infrastructure, server, code, data, and access — to ensure redundancy in every check.
            </BodyText>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button href="https://my.bugasura.io?go=sign_up" target="_blank" rel="noopener noreferrer" variant="white" className="justify-center sm:justify-start">
                Start for free
              </Button>
              <Button href="mailto:security@bugasura.io" variant="outline-light" className="justify-center sm:justify-start">
                Contact security team
              </Button>
            </div>
          </div>

          <div className="hidden lg:flex flex-shrink-0 items-center justify-center" style={{ width: "45%", alignSelf: "flex-end" }}>
            <Image
              src="/illustrations/security-hero.png"
              alt=""
              width={760}
              height={507}
              style={{ width: "100%", height: "auto", display: "block" }}
              sizes="45vw"
              priority
            />
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 px-8 lg:px-20 pb-8 lg:pb-10">
          {[
            { Icon: Shield,    label: "SOC 2 Type II Compliant",  desc: "Independently audited by an AICPA-licensed firm. Covers security, availability, processing integrity, confidentiality, and privacy." },
            { Icon: Server,    label: "AWS Global Infrastructure", desc: "Built on AWS with multi-region redundancy, 24/7 monitoring, and world-class uptime SLAs." },
            { Icon: Lock,      label: "End-to-End Encryption",     desc: "All data encrypted in transit with TLS and at rest with AES-256. No plaintext storage." },
            { Icon: HardDrive, label: "Multi-Tier Backup Policy",  desc: "Daily, 6-hourly, and weekly backups across two providers and two geographic regions." },
          ].map(({ Icon, label, desc }) => (
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

      {/* ── SOC 2 — centered header + bento ── */}
      <section className="rounded-[32px]" style={{ backgroundColor: "#FFF6E2", padding: "clamp(56px, 6vw, 88px) clamp(28px, 6vw, 80px)" }}>
        {/* Centered header */}
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto", marginBottom: "48px" }}>
          <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#AC1515", marginBottom: "16px" }}>SOC 2 Type II</p>
          <Heading level="section" as="h2" color="#1A0A00" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", marginBottom: "16px" }}>
            Independent assurance across all five Trust Service Criteria.
          </Heading>
          <BodyText color="rgba(26,10,0,0.7)" style={{ fontSize: "17px", lineHeight: 1.75 }}>
            Bugasura has successfully completed a SOC 2 Type II examination conducted by an independent auditor licensed by the AICPA — covering Security, Availability, Processing Integrity, Confidentiality, and Privacy.
          </BodyText>
        </div>

        {/* Bento grid — 1 tall left + 2x2 right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* Left — dark, spans 2 rows */}
          <div className="lg:row-span-2" style={{ background: "#2B2B2B", borderRadius: "24px", padding: "32px", display: "flex", flexDirection: "column" }}>
            <div style={{ width: "64px", height: "64px", borderRadius: "14px", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <Shield size={28} strokeWidth={1.6} color="#ffffff" />
            </div>
            <Heading level="subsection" as="h3" color="#ffffff" style={{ fontSize: "clamp(20px, 2.5vw, 28px)", lineHeight: 1.2, marginBottom: "10px" }}>
              Independent Assurance
            </Heading>
            <BodyText color="rgba(255,255,255,0.75)" style={{ fontSize: "14px", lineHeight: 1.65 }}>
              The SOC 2 Type II report provides independent assurance that Bugasura&apos;s controls are not only well-designed but have been verified to operate effectively over a sustained period of time.
            </BodyText>
          </div>

          {/* Right top — two cards side by side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div style={{ background: "#FFDAA8", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "14px", background: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                <BadgeCheck size={28} strokeWidth={1.6} color="#1A1A1A" />
              </div>
              <Heading level="subsection" as="h3" color="var(--dark)" style={{ fontSize: "clamp(20px, 2.5vw, 28px)", lineHeight: 1.2, marginBottom: "10px" }}>
                Comprehensive Coverage
              </Heading>
              <BodyText color="rgba(30,30,30,0.8)" style={{ fontSize: "13px", lineHeight: 1.65 }}>
                Covers infrastructure security, access controls, system operations, change management, risk mitigation, and vendor management.
              </BodyText>
            </div>

            <div style={{ background: "#B2D9EC", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "14px", background: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                <Database size={28} strokeWidth={1.6} color="#1A1A1A" />
              </div>
              <Heading level="subsection" as="h3" color="var(--dark)" style={{ fontSize: "clamp(20px, 2.5vw, 28px)", lineHeight: 1.2, marginBottom: "10px" }}>
                Data Protection & Privacy
              </Heading>
              <BodyText color="rgba(30,30,30,0.8)" style={{ fontSize: "13px", lineHeight: 1.65 }}>
                Encryption controls, data classification policies, retention procedures, and role-based access ensure customer data is handled securely.
              </BodyText>
            </div>
          </div>

          {/* Right bottom — two cards side by side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div style={{ background: "#FDD9C8", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "14px", background: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                <HardDrive size={28} strokeWidth={1.6} color="#1A1A1A" />
              </div>
              <Heading level="subsection" as="h3" color="var(--dark)" style={{ fontSize: "clamp(20px, 2.5vw, 28px)", lineHeight: 1.2, marginBottom: "10px" }}>
                Business Continuity & DR
              </Heading>
              <BodyText color="rgba(30,30,30,0.8)" style={{ fontSize: "13px", lineHeight: 1.65 }}>
                A formal BC/DR plan with defined RTO/RPO objectives, automated backups, and regular restoration testing to ensure service continuity.
              </BodyText>
            </div>

            <div style={{ background: "#DCDCDC", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "14px", background: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                <Eye size={28} strokeWidth={1.6} color="#1A1A1A" />
              </div>
              <Heading level="subsection" as="h3" color="var(--dark)" style={{ fontSize: "clamp(20px, 2.5vw, 28px)", lineHeight: 1.2, marginBottom: "10px" }}>
                Ongoing Monitoring
              </Heading>
              <BodyText color="rgba(30,30,30,0.8)" style={{ fontSize: "13px", lineHeight: 1.65 }}>
                Continuous monitoring, vulnerability management, and structured incident response covering triage, remediation, and root cause analysis.
              </BodyText>
            </div>
          </div>
        </div>

        {/* NDA banner */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6" style={{ marginTop: "16px", background: "#DCDCDC", borderRadius: "24px", padding: "28px 32px" }}>
          <div style={{ width: "64px", height: "64px", borderRadius: "14px", background: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <BadgeCheck size={28} strokeWidth={1.6} color="#1A1A1A" />
          </div>
          <div style={{ flex: 1 }}>
            <Heading level="subsection" as="h3" color="var(--dark)" style={{ fontSize: "clamp(20px, 2.5vw, 28px)", lineHeight: 1.2, marginBottom: "8px" }}>
              SOC 2 Type II certification
            </Heading>
            <BodyText color="rgba(30,30,30,0.8)" style={{ fontSize: "14px", lineHeight: 1.65 }}>
              Full audit report available under NDA. Covers security, availability, processing integrity, confidentiality, and privacy trust service criteria.
            </BodyText>
          </div>
          <div className="sm:flex-shrink-0">
            <Button href="mailto:security@bugasura.io" variant="dark">Request Report</Button>
          </div>
        </div>
      </section>

      {/* ── Infrastructure / Server / Code Security — tabbed ── */}
      <SecurityTabs />

      {/* ── Data & Access Control ── */}
      <section className="rounded-[32px]" style={{ backgroundColor: "#FDD9C8", padding: "clamp(48px, 8vw, 80px) clamp(24px, 6vw, 80px)" }}>
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 48px" }}>
          <span style={{ display: "block", fontFamily: "'Clash Grotesk', sans-serif", fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#AC1515", marginBottom: "16px" }}>
            Data Security &amp; Access Control
          </span>
          <Heading level="section" as="h2" color="var(--dark)" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", lineHeight: 1.05, letterSpacing: "-0.025em", marginBottom: "20px" }}>
            Multi-tenancy with logical data isolation and role-based access.
          </Heading>
          <BodyText color="rgba(30,30,30,0.8)" style={{ fontSize: "16px", lineHeight: 1.75 }}>
            Bugasura is built on a multi-tenancy architecture. Every customer&apos;s data is separated with a unique team ID stored in the backend — linked to user login and impossible to override. No customer has access to another customer&apos;s data.
          </BodyText>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { role: "Owner",        body: "Complete super-user access across the team. One owner per team — manages all licences." },
            { role: "Admins",       body: "Can manage users, projects, integrations, and custom settings. Access to all projects." },
            { role: "Normal Users", body: "Day-to-day access across assigned projects. Cannot modify settings impacting other members." },
            { role: "Guests",       body: "Limited access for external parties. Public projects and their own issues only — no access to internal or other guests’ data." },
          ].map((item) => <RoleCard key={item.role} {...item} />)}
        </div>
      </section>

      {/* ── Backup & Uptime ── */}
      <section className="rounded-[32px]" style={{ backgroundColor: "#FFDAA8", padding: "clamp(48px, 8vw, 80px) clamp(24px, 6vw, 80px)", overflowX: "hidden" }}>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Left — copy */}
          <div className="flex-1">
            <span style={{ display: "block", fontFamily: "'Clash Grotesk', sans-serif", fontSize: "20px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#C47200", marginBottom: "16px" }}>
              Backup &amp; Uptime
            </span>
            <Heading level="section" as="h2" color="var(--dark)" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", lineHeight: 1.05, letterSpacing: "-0.025em", marginBottom: "20px" }}>
              Multi-tier, multi-location backups with fast restore times.
            </Heading>
            <BodyText color="rgba(30,30,30,0.8)" style={{ fontSize: "16px", lineHeight: 1.75 }}>
              Bugasura employs a multi-tier, multi-location backup policy across two infrastructure providers and two geographic regions — ensuring full recovery even in the case of complete AWS regional downtime.
            </BodyText>
          </div>

          {/* Right — table + bullets */}
          <div className="flex-1 flex flex-col gap-4 w-full" style={{ minWidth: 0, maxWidth: "100%", overflow: "hidden" }}>
            <BackupTable />
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { Icon: HardDrive, text: "Offsite backups run on DigitalOcean Bangalore — separate provider and region from daily AWS snapshots" },
                { Icon: Activity,  text: "Continuous uptime monitoring alerts the team immediately on any service degradation" },
                { Icon: Server,    text: "Vertically scalable in under 10 minutes — scale up or down without architectural changes" },
              ].map(({ Icon, text }) => (
                <div key={text} style={{ display: "flex", alignItems: "flex-start", gap: "10px", minWidth: 0 }}>
                  <div style={{ background: "rgba(196,114,0,0.12)", borderRadius: "8px", padding: "6px", flexShrink: 0 }}>
                    <Icon size={15} color="#C47200" strokeWidth={2} />
                  </div>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", lineHeight: 1.65, color: "rgba(26,10,0,0.7)", margin: 0, minWidth: 0, wordBreak: "break-word" }}>{text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer cta={{
        heading: <>Questions about our security posture?</>,
        body: "Reach out to our security team or request the SOC 2 Type II report under NDA.",
        primaryLabel: "Contact Security Team",
        primaryHref: "mailto:security@bugasura.io",
        secondaryLabel: "Start for free",
        secondaryHref: "https://my.bugasura.io?go=sign_up",
      }} />
    </main>
  );
}
