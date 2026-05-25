"use client";

import { useState } from "react";
import Image from "next/image";
import { Infinity } from "lucide-react";
import styles from "./page.module.css";

function CheckIcon({ color = "#C94040" }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="8" fill={color} fillOpacity="0.15" />
      <path d="M4.5 8l2.5 2.5 4.5-5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PricingTabs() {
  const [active, setActive] = useState<"free" | "custom">("free");

  return (
    <>
      {/* ── Tab switcher — mobile only ── */}
      <div className={styles.planTabs}>
        <button
          className={`${styles.planTab} ${active === "free" ? styles.planTabActive : ""}`}
          onClick={() => setActive("free")}
        >
          Free
        </button>
        <button
          className={`${styles.planTab} ${active === "custom" ? styles.planTabActive : ""}`}
          onClick={() => setActive("custom")}
        >
          Custom
        </button>
      </div>

      {/* ── Plans grid ── */}
      <div className={styles.plansGrid}>

        {/* FREE */}
        <div
          className={`${styles.planCard} ${styles.planFree} ${active !== "free" ? styles.planTabHidden : ""}`}
        >
          <div className={styles.planCardTop}>
            <div className={styles.planCardTopLeft}>
              <span className={`${styles.planTier} ${styles.planTierFree}`}>Free — Forever</span>
              <div className={styles.planPrice}>
                <span className={`${styles.planPriceNum} ${styles.planPriceGreen}`}>$0</span>
                <span className={styles.planPriceNote}>forever, for everyone</span>
              </div>
              <p className={styles.planTagline}>&ldquo;The full platform. No seat limits. No feature gates. No expiry date on being free.&rdquo;</p>
              <a href="#" className={`${styles.btn} ${styles.btnPrimary}`}>
                <span className={styles.btnStack}>
                  <span>Start for free <ArrowIcon /></span>
                  <span className={styles.btnSub}>No card needed</span>
                </span>
              </a>
            </div>
            <div className={styles.planCardTopRight}>
              <Image src="/asuras-free-pricing.png" alt="" width={300} height={300} className={styles.planMascot} />
            </div>
          </div>

          <div className={styles.planDivider} />
          <span className={styles.planSectionLabel}>What&apos;s included</span>

          <div className={styles.chips}>
            {["Users", "Projects", "Bug reports", "Test cases", "Integrations"].map((c) => (
              <span key={c} className={`${styles.chip} ${styles.chipGreen}`}>
                <Infinity width={13} height={13} strokeWidth={2} aria-hidden />
                {c}
              </span>
            ))}
          </div>

          <ul className={styles.featureList}>
            {[
              ["Test Management", "plan, run, and track test cycles across sprints"],
              ["AI Issue Tracker", "AI-enriched bug capture, triage, and deduplication"],
              ["Requirements Management", "link requirements to tests, track coverage changes"],
              ["Knowledge Base", "ingest docs, requirements, and product context"],
              ["Eagle Eye", "quality health visibility for engineering leadership"],
              ["MCP Server", "quality context inside Claude and Cursor"],
              ["Chrome Reporter + Web Widget", "capture bugs from anywhere"],
              ["Integrations", "GitHub, Jira, Asana, Slack, ClickUp, and more"],
            ].map(([title, desc]) => (
              <li key={title} className={styles.featureItem}>
                <CheckIcon color="#1D9E75" />
                <span><strong>{title}</strong> — {desc}</span>
              </li>
            ))}
          </ul>

          <div className={styles.planDivider} />
          <span className={styles.planSectionLabel}>Asura agents — free tier</span>

          <div className={styles.asuraMeter}>
            <div className={styles.asuraMeterTop}>
              <span>Monthly Asura runs</span>
              <strong>100 runs / month</strong>
            </div>
            <div className={styles.meterTrack}>
              <div className={styles.meterFill} />
            </div>
            <p className={styles.asuraMeterNote}>
              Access Browser Asura, API Asura, and Duplicate Bug Asura — up to 100 automated test runs per month. Enough to experience the agents in production.
            </p>
          </div>
        </div>

        {/* CUSTOM */}
        <div
          className={`${styles.planCard} ${styles.planCustom} ${active !== "custom" ? styles.planTabHidden : ""}`}
        >
          <div className={styles.planCardTop}>
            <div className={styles.planCardTopLeft}>
              <span className={`${styles.planTier} ${styles.planTierCustom}`}>Custom — Enterprise &amp; Scale</span>
              <div className={styles.planPrice}>
                <span className={`${styles.planPriceNum} ${styles.planPriceCustom}`} style={{ fontSize: "48px" }}>Custom</span>
              </div>
              <p className={styles.planTagline}>&ldquo;For teams running Bugasura at scale, on-prem, or with Testpert AI capabilities built in.&rdquo;</p>
              <a href="#" className={`${styles.btn} ${styles.btnOutlined}`}>
                Talk to us about Custom <ArrowIcon />
              </a>
            </div>
            <div className={styles.planCardTopRight}>
              <Image src="/asuras-enterprise-pricing.png" alt="" width={300} height={300} className={styles.planMascot} />
            </div>
          </div>

          <div className={styles.planDivider} />
          <span className={styles.planSectionLabel}>Everything in free, plus</span>

          <ul className={styles.featureList}>
            {[
              ["Testpert AI layer", "advanced Q&A engine, expert-in-the-loop mode, risk surface mapping"],
              ["Unlimited Asura runs", "production-scale execution with priority queue"],
              ["On-premises deployment", "your infrastructure, your data residency"],
              ["SOC 2 Type II", "certified security for procurement teams"],
              ["SSO & SAML", "enterprise identity management"],
              ["Data isolation", "dedicated infrastructure, India & Singapore hosting"],
              ["Private AI mode", "your data never trains any model"],
              ["Dedicated success manager", "onboarding, QBRs, and ongoing support"],
            ].map(([title, desc]) => (
              <li key={title} className={styles.featureItem}>
                <CheckIcon color="#E6A817" />
                <span><strong>{title}</strong> — {desc}</span>
              </li>
            ))}
          </ul>

          <div className={styles.planDivider} />
          <span className={styles.planSectionLabel}>Typical custom deployments</span>

          <ul className={styles.deployList}>
            {[
              "Teams of 50+ engineers who need compliance documentation for procurement",
              "Organisations in regulated industries requiring data residency guarantees",
              "Engineering teams running high-volume Asura automation at production scale",
              "Companies that want Testpert's advanced AI capabilities for their QA team",
            ].map((item) => (
              <li key={item} className={styles.deployItem}>
                <span className={styles.deployArrow}>→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </>
  );
}
