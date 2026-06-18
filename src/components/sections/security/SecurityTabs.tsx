"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Server, Shield, Code2 } from "lucide-react";
import { Heading, BodyText } from "@/components/ui";

const TABS = [
  {
    id: "infra",
    label: "Infrastructure Security",
    labelColor: "#C47200",
    bg: "#FFDAA8",
    tabBg: "#FFD080",
    pillBg: "#FFECC0",
    Icon: Server,
    heading: "World-class AWS infrastructure with layered access controls.",
    body: "The entire Bugasura stack runs on AWS — a secure global platform with fine-grained identity and access controls combined with continuous monitoring. Servers are hosted in a world-class data centre protected by biometric locks and 24-hour surveillance.",
    items: [
      "AWS Shield — always-on DDoS detection across EC2, CDN, and DNS services",
      "AWS Network Firewall — only HTTPS (443), HTTP (80), and a hardened SSH port are open. All others closed.",
      "IAM Identity Management — one user holds full console access, all others scoped to specific services only",
      "Continuous security patch updates applied to the entire infrastructure stack",
    ],
  },
  {
    id: "server",
    label: "Server Security",
    labelColor: "#0077B6",
    bg: "#B2D9EC",
    tabBg: "#8FCCE8",
    pillBg: "#D0ECF8",
    Icon: Shield,
    heading: "Multiple layers of protection at the server level.",
    body: "At the server level, Bugasura employs various mechanisms to ensure data security and privacy — from real-time threat detection to hardened SSH configuration.",
    items: [
      "UFW Firewall — in addition to AWS Network Firewall, restricts all ports except HTTPS and SSH",
      "Fail2ban — throttles and bans IPs making repeated access attempts within a defined time window",
      "Freshclam Antivirus — continuously scans for any virus or malware uploaded from the frontend",
      "OpenSSH Hardening — non-standard port, one non-root user, protocol 2 only, no password logins",
      "Security Login — only private-public key logins permitted. Root logins disabled. Standard users removed.",
    ],
  },
  {
    id: "code",
    label: "Code Security",
    labelColor: "#444444",
    bg: "#DCDCDC",
    tabBg: "#C8C8C8",
    pillBg: "#E8E8E8",
    Icon: Code2,
    heading: "Validation at every layer before data touches the database.",
    body: "All user-uploaded files and user-supplied data are treated as potential injection points and validated through multiple independent layers before any data is stored.",
    items: [
      "User files checked for type, size, and special characters — then scanned by AV and moved to CDN",
      "JS level: input validated for correct data type and length before reaching the server",
      "Model level: independent re-validation of data type, length, and custom rules",
      "DB level: all queries prepared before execution — preventing SQL injection",
      "Session data stored server-side only — never read from the frontend, preventing URL hijacking",
      "Exhaustive code review on every push — security checks on all incoming data are a primary criterion",
    ],
  },
];

export default function SecurityTabs() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <section className="rounded-[32px]" style={{ backgroundColor: "#FFF6E2", padding: "clamp(48px, 6vw, 80px) clamp(28px, 6vw, 80px)" }}>

      {/* ── Tab bar — matches AsuraShowcase pill pattern ── */}
      <div className="flex justify-center" style={{ marginBottom: "-28px", position: "relative", zIndex: 2, overflow: "hidden" }}>
        <div
          style={{
            backgroundColor: tab.pillBg,
            borderRadius: "24px",
            padding: "6px",
            maxWidth: "100%",
            overflowX: "auto",
            scrollbarWidth: "none",
          }}
        >
          <div className="flex gap-[6px]" style={{ borderRadius: "18px" }}>
            {TABS.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className="flex items-center gap-2"
                style={{
                  padding: "10px 20px",
                  borderRadius: "18px",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'Clash Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: "15px",
                  backgroundColor: active === i ? t.labelColor : "rgba(0,0,0,0.10)",
                  color: active === i ? "#ffffff" : "rgba(30,30,30,0.75)",
                  transition: "background-color 0.2s ease, color 0.2s ease",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                <t.Icon size={16} strokeWidth={2} />
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Content panel ── */}
      <div
        style={{
          backgroundColor: tab.bg,
          borderRadius: "28px",
          padding: "clamp(52px, 5vw, 72px) clamp(28px, 5vw, 64px) clamp(40px, 4vw, 60px)",
          position: "relative",
          zIndex: 1,
          transition: "background-color 0.2s ease",
        }}
      >
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

          {/* Left — copy */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab.id + "-copy"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", color: tab.labelColor, marginBottom: "16px" }}>
                  {tab.label}
                </p>
                <Heading level="section" as="h2" color="#1A0A00" style={{ fontSize: "clamp(26px, 3vw, 42px)", lineHeight: 1.1, marginBottom: "18px" }}>
                  {tab.heading}
                </Heading>
                <BodyText color="rgba(26,10,0,0.72)" style={{ fontSize: "17px", lineHeight: 1.75 }}>
                  {tab.body}
                </BodyText>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right — checklist */}
          <div className="flex-1 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.ul
                key={tab.id + "-items"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22, ease: "easeOut", delay: 0.06 }}
                style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}
              >
                {tab.items.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <CheckCircle2 size={18} color={tab.labelColor} strokeWidth={2.2} style={{ flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", lineHeight: 1.65, color: "rgba(26,10,0,0.75)" }}>{item}</span>
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
