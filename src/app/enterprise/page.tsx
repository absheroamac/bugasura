import Image from "next/image";
import { Globe, ShieldCheck, Database, HardDrive, Target, Server, WifiOff, Brain, RefreshCw, Building2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import styles from "./page.module.css";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden style={{ flexShrink: 0, marginTop: 1 }}>
      <circle cx="8" cy="8" r="8" fill={color} fillOpacity="0.12" />
      <path d="M4.5 8l2.5 2.5 4.5-5" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function EnterprisePage() {
  return (
    <div className={styles.canvas}>

      <Navbar />

      {/* ══════════════════════════════════════════════════════════════════
          HERO — Dark panel
      ══════════════════════════════════════════════════════════════════ */}
      <div className={styles.panelWrap}>
        <section className={styles.heroPanel}>
          <div className={styles.heroInner}>
            {/* Left — headline + CTAs */}
            <Reveal className={styles.heroText} delay={120}>
              <span className={styles.eyebrow}>Enterprise</span>
              <h1 className={styles.heroH1}>
                Agentic QA at<br />enterprise<br />
                <em className={styles.heroEm}>scale.</em>
              </h1>
              <p className={styles.heroSub}>
                Bugasura for enterprise teams — with the deployment options, compliance certifications, and security posture your procurement and infosec teams need to say yes.
              </p>
              <div className={styles.heroCtas}>
                <a href="#conference" className={`${styles.btn} ${styles.btnPrimary}`}>
                  Book a demo <ArrowIcon />
                </a>
                <a href="#security" className={`${styles.btn} ${styles.btnOutlined}`}>
                  Security overview
                </a>
              </div>
            </Reveal>

            {/* Right — 2×2 compliance cards */}
            <RevealStagger className={styles.complianceGrid} baseDelay={200} step={80}>
              <div className={`${styles.complianceCard} ${styles.complianceCardHighlight}`}>
                <div className={`${styles.ccBadge} ${styles.ccBadgeSoc}`}>
                  <Image src="/SSO Type 2 logo.png" alt="SOC 2 Type II" width={44} height={44} style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
                <div className={styles.ccTitle}>SOC 2 Type II certified</div>
                <div className={styles.ccDesc}>Full audit report available under NDA for procurement and infosec review.</div>
              </div>
              <div className={styles.complianceCard}>
                <div className={`${styles.ccBadge} ${styles.ccBadgeData}`}>
                  <Image src="/Data residency & sovereignty.png" alt="Data residency" width={44} height={44} style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
                <div className={styles.ccTitle}>Data residency — India &amp; Singapore</div>
                <div className={styles.ccDesc}>Choose your hosting region. Data never crosses outside your selected boundary.</div>
              </div>
              <div className={styles.complianceCard}>
                <div className={`${styles.ccBadge} ${styles.ccBadgeSso}`}>
                  <Image src="/SAML logo.png" alt="SSO & SAML" width={44} height={44} style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
                <div className={styles.ccTitle}>SSO &amp; SAML supported</div>
                <div className={styles.ccDesc}>Okta, Azure AD, Google Workspace, and custom SAML providers out of the box.</div>
              </div>
              <div className={styles.complianceCard}>
                <div className={`${styles.ccBadge} ${styles.ccBadgePrem}`}>
                  <Image src="/On-premises deployment.png" alt="On-premises deployment" width={44} height={44} style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
                <div className={styles.ccTitle}>On-premises deployment</div>
                <div className={styles.ccDesc}>Run Bugasura entirely within your infrastructure. Full air-gap option available.</div>
              </div>
            </RevealStagger>
          </div>
        </section>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          TRUST RAIL
      ══════════════════════════════════════════════════════════════════ */}
      <div className={styles.trustRail}>
        <div className={styles.trustInner}>
          {[
            { color: "#FFA840", label: "SOC 2 Type II certified" },
            { color: "#29A5FF", label: "India & Singapore data hosting" },
            { color: "#8B7DD8", label: "SSO · SAML · MFA" },
            { color: "#E52727", label: "On-premises available" },
            { color: "#C9963A", label: "Private AI — your data stays yours" },
          ].map(({ color, label }) => (
            <div key={label} className={styles.trustItem}>
              <div className={styles.trustDot} style={{ background: color }} />
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          WHO IT'S FOR — Personas
      ══════════════════════════════════════════════════════════════════ */}
      <div className={styles.panelWrap}>
        <section className={styles.personasPanel}>

          <Reveal className={styles.personasHeader}>
            <div className={styles.personasHeaderLeft}>
              <span className={styles.eyebrow}>Who it&apos;s for</span>
              <h2 className={styles.personasH2}>
                Three teams need<br />to say yes.
              </h2>
            </div>
            <p className={styles.personasDesc}>
              Enterprise procurement isn&apos;t one conversation. Here&apos;s what Bugasura covers for each stakeholder in your organisation.
            </p>
          </Reveal>

          <RevealStagger className={styles.personasGrid} step={90}>

            {/* CTO / VP Eng */}
            <div className={styles.personaCard}>
              <span className={styles.personaNum}>01</span>
              <span className={`${styles.personaRole} ${styles.roleRed}`}>CTO · VP Engineering · Head of QA</span>
              <h3 className={styles.personaTitle}>We need QA that keeps pace with AI development.</h3>
              <p className={styles.personaDesc}>
                Your team ships faster with AI co-pilots. Your QA infrastructure hasn&apos;t changed. Bugasura closes that gap — with a platform that builds context over time rather than starting from scratch every sprint.
              </p>
              <div className={styles.personaConcerns}>
                {[
                  ["var(--red)", "Platform intelligence that compounds — smarter after every sprint"],
                  ["var(--red)", "Eagle Eye gives strategic quality visibility, not just dashboards"],
                  ["var(--red)", "MCP integration puts quality context into Claude and Cursor"],
                  ["var(--red)", "Testpert AI layer for expert-level test strategy decisions at scale"],
                ].map(([color, text]) => (
                  <div key={text} className={styles.personaConcern}>
                    <CheckIcon color={color} />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* IT / InfoSec */}
            <div className={styles.personaCard}>
              <span className={styles.personaNum}>02</span>
              <span className={`${styles.personaRole} ${styles.roleBlue}`}>IT · InfoSec · Security Lead</span>
              <h3 className={styles.personaTitle}>We need to know exactly where our data lives.</h3>
              <p className={styles.personaDesc}>
                No surprises on data residency, no ambiguity on AI data processing. Bugasura&apos;s enterprise tier is built to answer infosec questions before they&apos;re asked — with documentation, not promises.
              </p>
              <div className={styles.personaConcerns}>
                {[
                  ["#29A5FF", "Data hosted in India or Singapore — your choice, documented"],
                  ["#29A5FF", "Private AI mode — test data never trains any external model"],
                  ["#29A5FF", "On-premises deployment available for full air-gap requirements"],
                  ["#29A5FF", "SOC 2 Type II audit report available under NDA"],
                ].map(([color, text]) => (
                  <div key={text} className={styles.personaConcern}>
                    <CheckIcon color={color} />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Procurement */}
            <div className={styles.personaCard}>
              <span className={styles.personaNum}>03</span>
              <span className={`${styles.personaRole} ${styles.roleGold}`}>Procurement · Finance · Legal</span>
              <h3 className={styles.personaTitle}>We need the commercial and compliance documentation.</h3>
              <p className={styles.personaDesc}>
                Custom pricing scoped to your actual deployment. DPA, MSA, and BAA available. No standard packages that don&apos;t fit — we scope together and put it in writing.
              </p>
              <div className={styles.personaConcerns}>
                {[
                  ["#C9963A", "Custom commercial terms — no take-it-or-leave-it per-seat pricing"],
                  ["#C9963A", "DPA, MSA, and BAA available on request"],
                  ["#C9963A", "SOC 2 report, security questionnaire support, infosec review"],
                  ["#C9963A", "Dedicated success manager from contract through rollout"],
                ].map(([color, text]) => (
                  <div key={text} className={styles.personaConcern}>
                    <CheckIcon color={color} />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

          </RevealStagger>
        </section>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          DEPLOYMENT OPTIONS — Dark panel
      ══════════════════════════════════════════════════════════════════ */}
      <div className={styles.panelWrap}>
        <section className={styles.deployPanel}>

          <Reveal className={styles.deployHeader}>
            <div className={styles.deployHeaderLeft}>
              <span className={styles.eyebrow}>Deployment</span>
              <h2 className={styles.deployH2}>
                Deploy the way your<br />infrastructure demands.
              </h2>
            </div>
            <p className={styles.deployDesc}>
              Two deployment paths. Both are enterprise-ready. Choose based on your data residency requirements and IT policy.
            </p>
          </Reveal>

          <RevealStagger className={styles.deployGrid} step={120}>

            {/* Cloud */}
            <div className={`${styles.deployCard} ${styles.deployCloud}`}>
              <span className={`${styles.deployTag} ${styles.tagCloud}`}>Cloud — Managed</span>
              <h3 className={styles.deployTitle}>Bugasura Cloud</h3>
              <p className={styles.deployCardDesc}>
                Fully managed cloud deployment. Bugasura handles infrastructure, upgrades, and uptime. Your data stays within your chosen region — no cross-border transfer.
              </p>
              <div className={styles.deploySpecs}>
                {[
                  { Icon: Globe,        label: "Regions",        value: "India (Mumbai) · Singapore — choose at signup" },
                  { Icon: ShieldCheck,  label: "Uptime SLA",     value: "99.9% uptime SLA with enterprise support tier" },
                  { Icon: Database,     label: "Data isolation", value: "Dedicated database and storage per enterprise tenant" },
                  { Icon: HardDrive,    label: "Backups",        value: "Daily encrypted backups with 30-day retention" },
                  { Icon: Target,       label: "Ideal for",      value: "Teams that need compliance without infrastructure overhead" },
                ].map(({ Icon, label, value }) => (
                  <div key={label} className={styles.deploySpec}>
                    <Icon className={styles.specIcon} strokeWidth={1.5} />
                    <span className={styles.specLabel}>{label}</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* On-Prem */}
            <div className={`${styles.deployCard} ${styles.deployPrem}`}>
              <span className={`${styles.deployTag} ${styles.tagPrem}`}>On-Premises</span>
              <h3 className={styles.deployTitle}>Bugasura On-Prem</h3>
              <p className={styles.deployCardDesc}>
                Full deployment within your infrastructure. Your hardware, your network, your data. Zero dependency on Bugasura&apos;s cloud infrastructure after deployment.
              </p>
              <div className={styles.deploySpecs}>
                {[
                  { Icon: Server,     label: "Infrastructure", value: "Kubernetes-based deployment on your hardware or private cloud" },
                  { Icon: WifiOff,    label: "Air-gap",        value: "Full air-gap option available — no outbound internet required" },
                  { Icon: Brain,      label: "AI processing",  value: "Testpert AI runs on your infrastructure — no data leaves your network" },
                  { Icon: RefreshCw,  label: "Updates",        value: "Managed update delivery with your change management process" },
                  { Icon: Building2,  label: "Ideal for",      value: "Regulated industries, government, defence, and high-security environments" },
                ].map(({ Icon, label, value }) => (
                  <div key={label} className={styles.deploySpec}>
                    <Icon className={styles.specIcon} strokeWidth={1.5} />
                    <span className={styles.specLabel}>{label}</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>

          </RevealStagger>
        </section>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          SECURITY — Bento grid
      ══════════════════════════════════════════════════════════════════ */}
      <div className={styles.panelWrap} id="security">
        <section className={styles.securityPanel}>
          <div className={styles.securityInner}>

            <div className={styles.securityLeft}>
              <span className={styles.eyebrow}>Security</span>
              <h2 className={styles.securityH2}>
                Documentation,<br />not just claims.
              </h2>
              <p className={styles.securityDesc}>
                We know infosec teams need documentation, not a marketing page. Here&apos;s what&apos;s available — ask us for anything not listed here.
              </p>
              <a href="#" className={styles.securityDocLink}>
                Download security overview PDF
              </a>
            </div>

            <RevealStagger className={styles.securityBento} step={70}>
              {/* SOC 2 — spans full width */}
              <div className={styles.securityItem}>
                <div className={styles.siLogoWrap}>
                  <Image src="/SSO Type 2 logo.png" alt="SOC 2 Type II" width={80} height={80} style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
                <div className={styles.siBody}>
                  <div className={styles.siTitle}>SOC 2 Type II certification</div>
                  <div className={styles.siDesc}>Full audit report available under NDA. Covers security, availability, processing integrity, confidentiality, and privacy trust service criteria.</div>
                </div>
              </div>
              {/* Data Residency */}
              <div className={styles.securityItem}>
                <div className={styles.siLogoWrap}>
                  <Image src="/Data residency & sovereignty.png" alt="Data residency & sovereignty" width={80} height={80} style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
                <div className={styles.siTitle}>Data residency &amp; sovereignty</div>
                <div className={styles.siDesc}>India (Mumbai) and Singapore hosting. Data processing agreements available. Your data does not leave the selected region.</div>
              </div>
              {/* SSO */}
              <div className={styles.securityItem}>
                <div className={styles.siLogoWrap}>
                  <Image src="/SAML logo.png" alt="SAML SSO" width={80} height={80} style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
                <div className={styles.siTitle}>Identity &amp; access management</div>
                <div className={styles.siDesc}>SSO via Okta, Azure AD, Google Workspace, and custom SAML. MFA enforced. Role-based access controls across all modules.</div>
              </div>
              {/* Private AI */}
              <div className={styles.securityItem}>
                <div className={styles.siLogoWrap}>
                  <Image src="/Private AI Processing Icon-1.png" alt="Private AI Processing" width={80} height={80} style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
                <div className={styles.siTitle}>Private AI processing</div>
                <div className={styles.siDesc}>All Testpert AI runs within your deployment. Your requirements, test data, and defect history never leave your environment or train any external model.</div>
              </div>
              {/* Pen Test */}
              <div className={styles.securityItem}>
                <div className={styles.siLogoWrap}>
                  <Image src="/Penetration testing.png" alt="Penetration testing" width={80} height={80} style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
                <div className={styles.siTitle}>Penetration testing</div>
                <div className={styles.siDesc}>Annual third-party penetration tests. Results and remediation documentation available on request for infosec review.</div>
              </div>
            </RevealStagger>

          </div>
        </section>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          PROCESS — Card layout with progress dots
      ══════════════════════════════════════════════════════════════════ */}
      <div className={styles.panelWrap}>
        <section className={styles.processPanel}>
          <Reveal className={styles.processHeader}>
            <span className={styles.eyebrow}>How it works</span>
            <h2 className={styles.processH2}>What happens when you reach out.</h2>
            <p className={styles.processSub}>
              No surprise commitments. No 6-month procurement cycles. We scope fast and get you running.
            </p>
          </Reveal>

          <RevealStagger className={styles.processSteps} step={80}>
            {[
              {
                cardClass: styles.stepCard1,
                dotColor: "#FFA840",
                activeIndex: 0,
                label: "30 min",
                title: "Discovery call",
                tags: ["30-min call", "Team size", "Requirements", "Compliance needs"],
              },
              {
                cardClass: styles.stepCard2,
                dotColor: "#E52727",
                activeIndex: 1,
                label: "2–3 days",
                title: "Scoping & proposal",
                tags: ["Deployment scope", "Custom proposal", "Commercial terms"],
              },
              {
                cardClass: styles.stepCard3,
                dotColor: "#29A5FF",
                activeIndex: 2,
                label: "Parallel",
                title: "Security review",
                tags: ["SOC 2 report", "DPA & MSA", "Infosec review"],
              },
              {
                cardClass: styles.stepCard4,
                dotColor: "#C9963A",
                activeIndex: 3,
                label: "2–4 weeks",
                title: "Deployment & onboarding",
                tags: ["Team onboarding", "Integrations", "Success manager"],
              },
            ].map(({ cardClass, dotColor, activeIndex, label, title, tags }) => (
              <div key={title} className={`${styles.processStep} ${cardClass}`}>

                {/* Progress dots */}
                <div className={styles.stepProgress}>
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className={styles.stepDotWrap}>
                      <div
                        className={`${styles.stepDot} ${i === activeIndex ? styles.stepDotActive : ""}`}
                        style={i === activeIndex ? { background: dotColor } : undefined}
                      />
                      {i === activeIndex && (
                        <span className={styles.stepDotLabel}>{label}</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Title */}
                <h3 className={styles.stepTitle}>{title}</h3>

                {/* Activity tags */}
                <div className={styles.stepTags}>
                  {tags.map((tag) => (
                    <span key={tag} className={styles.stepTag}>{tag}</span>
                  ))}
                </div>

              </div>
            ))}
          </RevealStagger>
        </section>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          CONFERENCE — Salmon panel + booking card
      ══════════════════════════════════════════════════════════════════ */}
      <div className={styles.panelWrap} id="conference">
        <section className={styles.conferencePanel}>
          <div className={styles.conferenceInner}>

            <div className={styles.confLeft}>
              <span className={styles.eyebrow}>July Conference</span>
              <h2 className={styles.confH2}>
                Talk to us in person<br />at the conference.
              </h2>
              <p className={styles.confDesc}>
                Our team will be at the conference in July. If you&apos;re evaluating Bugasura for your engineering organisation, book 30 minutes with us — we&apos;d rather have that conversation in person than over email.
              </p>
              <div className={styles.confCtas}>
                <a href="#" className={`${styles.btn} ${styles.btnPrimary}`}>
                  Book a meeting slot <ArrowIcon />
                </a>
                <a href="#" className={`${styles.btn} ${styles.btnOutlinedDark}`}>
                  enterprise@bugasura.io
                </a>
              </div>
            </div>

            <div className={styles.confCard}>
              <div className={styles.confEventTag}>
                <span className={styles.confEventDot} />
                Live slots · July 2026
              </div>
              <h3 className={styles.confCardTitle}>30-minute enterprise conversations.</h3>
              <p className={styles.confCardDesc}>
                Bring your deployment questions, compliance requirements, or your QA challenges. No demo script — just a real conversation about whether Bugasura is the right fit.
              </p>

              <div className={styles.meetingSlots}>
                {[
                  { time: "Day 1 · 10:00 – 11:00 AM", status: "slotOpen", label: "Slots available" },
                  { time: "Day 1 · 2:00 – 4:00 PM",   status: "slotFew",  label: "2 slots left" },
                  { time: "Day 2 · 11:00 AM – 1:00 PM", status: "slotOpen", label: "Slots available" },
                  { time: "Day 2 · 3:00 – 5:00 PM",   status: "slotFull", label: "Full" },
                ].map(({ time, status, label }) => (
                  <div key={time} className={styles.meetingSlot}>
                    <span className={styles.slotTime}>{time}</span>
                    <span className={`${styles.slotStatus} ${styles[status as keyof typeof styles]}`}>{label}</span>
                  </div>
                ))}
              </div>

              <a href="#" className={styles.confBookBtn}>
                Reserve your slot <ArrowIcon />
              </a>
            </div>

          </div>
        </section>
      </div>

      <Footer cta={{
        heading: <>Ready to talk about</>,
        subheading: <>enterprise deployment?</>,
        body: "Tell us your team size, deployment requirements, and what you're trying to solve. We'll come back with a scoped proposal within 2–3 days.",
        primaryLabel: "Book a demo",
        primaryHref: "#",
        secondaryLabel: "Download security overview",
        secondaryHref: "#",
      }} />

    </div>
  );
}
