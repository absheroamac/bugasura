import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import styles from "./page.module.css";
import { Infinity, BadgeDollarSign } from "lucide-react";
import { PricingTabs } from "./PricingTabs";
import { FaqAccordion } from "./FaqAccordion";

/* ─── Icons ──────────────────────────────────────────────────────────────── */
function BrainIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden>
      <path d="M9.5 2a5.5 5.5 0 0 1 5.5 5.5V20H9.5a5.5 5.5 0 0 1 0-11H4a2 2 0 0 1 0-4h5.5A5.5 5.5 0 0 1 9.5 2z"/>
    </svg>
  );
}
function MapIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden>
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
      <line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/>
    </svg>
  );
}
function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden>
      <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
    </svg>
  );
}
function LockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden>
      <rect x="3" y="11" width="18" height="11" rx="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function PricingPage() {
  return (
    <div className={styles.canvas}>

      <Navbar />

      {/* ── Hero Panel ── */}
      <section className={styles.heroPanel}>
        <div className={styles.heroInner}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              No credit card. No catch. No expiry.
            </div>

            <h1 className={styles.heroH1}>
              Most teams pay<br />
              <em className={styles.heroEm}>nothing.</em> Ever.
            </h1>

            <p className={styles.heroSub}>
              Bugasura is free for unlimited users and unlimited projects — not a trial, not a limited tier. Just free.
            </p>
            <p className={styles.heroNote}>
              Custom pricing only when you need on-prem deployment, Testpert AI, or enterprise-scale Asura execution.
            </p>

            <div className={styles.statBar}>
              {[
                { Icon: Infinity,         label: "Users" },
                { Icon: Infinity,         label: "Projects" },
                { Icon: Infinity,         label: "Bug reports" },
                { Icon: Infinity,         label: "Test cases" },
                { Icon: BadgeDollarSign,  label: "Forever free" },
              ].map(({ Icon, label }) => (
                <div key={label} className={styles.statItem}>
                  <Icon className={styles.statIcon} strokeWidth={1.6} />
                  <span className={styles.statLabel}>{label}</span>
                </div>
              ))}
            </div>
          </div>
      </section>

      {/* ── Plan Cards Panel ── */}
      <div className={styles.panelWrap}>
        <section className={styles.plansPanel}>
          <PricingTabs />
        </section>
      </div>

      {/* ── Testpert Panel (Dark) ── */}
      <div className={styles.panelWrap}>
        <section className={styles.testpertPanel}>

          {/* ── Header: heading left, description right ── */}
          <div className={styles.testpertHeader}>
            <div>
              <span className={styles.testpertTag}>Add-on · Testpert</span>
              <h2 className={styles.testpertH2}>What Testpert adds to the platform.</h2>
            </div>
            <div className={styles.testpertRight}>
              <p className={styles.testpertBody}>
                The free platform is genuinely powerful. Testpert is for teams where AI-expert-level QA intelligence isn&apos;t optional — where test strategy decisions have real revenue consequences.
              </p>
              <a href="https://bugasura.io/testpert" target="_blank" rel="noopener noreferrer" className={styles.testpertLink}>Read more about Testpert →</a>
            </div>
          </div>

          {/* ── 4-col card grid ── */}
          <div className={styles.testpertCards}>
            {[
              { Icon: BrainIcon, title: "Expert Q&A engine",        body: "Testpert asks the clarifying questions a senior QA lead would ask before sprint planning — mapping hidden risks and coverage gaps before a test is written." },
              { Icon: MapIcon,   title: "Risk surface mapping",      body: "Combines requirements, defect history, and business context to build a prioritised risk map — so coverage decisions are made against impact, not guesswork." },
              { Icon: UserIcon,  title: "Expert-in-the-loop mode",  body: "Your senior testers stay in control. Testpert surfaces AI-generated analysis, but humans approve before anything is generated downstream." },
              { Icon: LockIcon,  title: "Private AI processing",     body: "All Testpert AI processing runs in your isolated environment. Your test strategies, requirements, and defect data never leave your infrastructure." },
            ].map(({ Icon, title, body }) => (
              <div key={title} className={styles.testpertCard}>
                <div className={styles.testpertCardTop}>
                  <div className={styles.testpertIconBox}><Icon /></div>
                </div>
                <h4 className={styles.testpertCardTitle}>{title}</h4>
                <p className={styles.testpertCardBody}>{body}</p>
              </div>
            ))}
          </div>

        </section>
      </div>

      {/* ── Asura Pricing Panel (Blue) ── */}
      <div className={styles.panelWrap}>
        <section className={styles.asuraPanel}>
          <div className={styles.asuraInner}>
            <div className={styles.asuraLeft}>
              <span className={styles.asuraEyebrow}>Asuras</span>
              <h2 className={styles.asuraH2}>How Asura agents are priced.</h2>
              <p className={styles.asuraBody}>
                Asuras are free to run — no monthly caps on the free tier. As the Asura marketplace grows, individual agents may carry creator pricing — you only pay for the agents you use.
              </p>
            </div>
            <div className={styles.asuraRight}>
              <div className={styles.asuraTiers}>
                <div className={styles.asuraTier}>
                  <span className={`${styles.asuraBadge} ${styles.asuraBadgeFree}`}>Free</span>
                  <div>
                    <div className={styles.asuraTierName}>Built-in Asuras</div>
                    <div className={styles.asuraTierDesc}>Browser Asura, API Asura, Duplicate Bug Asura — all included on free tier</div>
                  </div>
                  <span className={styles.asuraTierLimit}>Unlimited</span>
                </div>
                <div className={`${styles.asuraTier} ${styles.asuraTierActive}`}>
                  <span className={`${styles.asuraBadge} ${styles.asuraBadgeCustom}`}>Custom</span>
                  <div>
                    <div className={styles.asuraTierName}>Production-scale execution</div>
                    <div className={styles.asuraTierDesc}>Priority execution queue, SLA guarantees, custom Asura development support</div>
                  </div>
                  <span className={`${styles.asuraTierLimit} ${styles.asuraTierLimitRed}`}>Unlimited</span>
                </div>
                <div className={`${styles.asuraTier} ${styles.asuraTierMuted}`}>
                  <span className={`${styles.asuraBadge} ${styles.asuraBadgeSoon}`}>Soon</span>
                  <div>
                    <div className={styles.asuraTierName}>Marketplace Asuras</div>
                    <div className={styles.asuraTierDesc}>Third-party agents from the World of Asuras — creator-set pricing, per-use</div>
                  </div>
                  <span className={styles.asuraTierLimit}>Coming Q3</span>
                </div>
              </div>
              <div className={styles.asuraNoteBox}>
                <strong>Asura runs are unlimited on the free tier.</strong> The only limit is 50 GB storage — which is more than enough for most teams. Marketplace Asuras from third-party creators may carry their own pricing when they launch.
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── FAQ Panel ── */}
      <div className={styles.panelWrap}>
        <section className={styles.faqPanel}>
          <div className={styles.faqInner}>
            <div className={styles.faqHeader}>
              <h2 className={styles.faqH2}>Common questions.</h2>
              <p className={styles.faqSubtitle}>If something&apos;s not covered here, just ask us.</p>
            </div>
            <FaqAccordion />
          </div>
        </section>
      </div>


      <Footer cta={{
        heading: <>Start free. Stay free.<br />Scale when you&apos;re ready.</>,
        body: "No card. No trial. No expiry. Just the full Bugasura platform — free, for your whole team.",
        primaryLabel: "Start for Free",
        primaryHref: "#",
        secondaryLabel: "Talk to us about Custom",
        secondaryHref: "#",
      }} />

    </div>
  );
}
