"use client";

import { useState } from "react";
import styles from "./page.module.css";

const FAQS = [
  {
    q: "Is the free tier really unlimited — no catch?",
    a: "No catch. Unlimited users, unlimited projects, unlimited bug reports, unlimited test cases, unlimited Asura runs. The only limit is 50 GB storage, which is more than enough for most teams. The free tier is not a trial — it has no expiry date and no seat wall. The only reason to move to Custom is if you need on-premises deployment, Testpert AI, or enterprise compliance documentation.",
  },
  {
    q: "When would I need Custom pricing?",
    a: "Custom is for three scenarios: you need on-premises or private cloud deployment with data residency guarantees; your procurement team requires SOC 2 documentation, SSO/SAML, or a dedicated success manager; or your QA team needs Testpert's advanced AI layer for risk-driven test strategy. Most teams never hit any of these — and that's fine.",
  },
  {
    q: "What exactly is Testpert, and do I need it?",
    a: "Testpert is the AI intelligence layer that sits above the core platform. It runs an expert Q&A engine before sprint planning, builds a prioritised risk surface from your requirements and defect history, and keeps a human expert in the loop before anything is generated. Most teams on the free tier don't need it. You'll know you need Testpert when your QA team's coverage decisions have direct revenue consequences — and gut instinct isn't good enough anymore.",
  },
  {
    q: "Are Asura automated test runs really unlimited?",
    a: "Yes. Browser Asura, API Asura, and Duplicate Bug Asura all run without a monthly cap on the free tier. The only constraint is 50 GB storage. Production-scale execution with priority queue and SLA guarantees is part of Custom — but unlimited runs for standard usage are free, forever.",
  },
  {
    q: "Can I migrate from another tool without losing data?",
    a: "Yes. Bugasura has import support for Jira, TestRail, and most common formats. For enterprise migrations with large datasets, our success team handles the migration as part of Custom onboarding. Reach out before you start and we'll scope the right path.",
  },
  {
    q: "Where is data hosted? What about compliance?",
    a: "Cloud hosting runs on servers in India and Singapore. Custom plans support data residency selection, dedicated infrastructure, and on-premises deployment. Bugasura is SOC 2 Type II certified. Full security and compliance documentation is available for procurement teams under NDA.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={styles.faqGrid}>
      {FAQS.map(({ q, a }, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={q}
            className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}
          >
            <button
              className={styles.faqQ}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              {q}
              <span className={styles.faqChevron} aria-hidden>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
            <div className={styles.faqBody}>
              <div className={styles.faqBodyInner}>
                <div className={styles.faqA}>{a}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
