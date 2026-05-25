"use client";

import { useState } from "react";
import styles from "./page.module.css";

const FAQS = [
  {
    q: "Is the free tier really unlimited — no catch?",
    a: "Yes. Unlimited users, unlimited projects, unlimited bug reports and test cases. No seat limits, no feature gates on the core platform. The only limits are on Asura automated test runs (100/month) and Testpert AI capabilities, which are part of our Custom tier. We want teams using Bugasura — not counting seats.",
  },
  {
    q: "When would I need Custom pricing?",
    a: "When you need on-premises deployment, SOC 2 documentation for your procurement team, Testpert's advanced AI layer, unlimited Asura execution, data residency guarantees, or a dedicated success manager for onboarding. Talk to us and we'll scope it together.",
  },
  {
    q: "What exactly is Testpert, and do I need it?",
    a: "Testpert is the advanced AI intelligence layer — expert Q&A engine, risk surface mapping, and expert-in-the-loop review mode. Most teams on the free tier don't need it. You'll know you need Testpert when your QA team makes strategic coverage decisions with direct revenue impact.",
  },
  {
    q: "How do Asura run limits work on the free tier?",
    a: 'You get 100 automated test runs per month across all Asuras combined. A "run" is one full Asura execution — a Browser Asura end-to-end test, an API Asura contract validation, or a Duplicate Bug Asura monitoring cycle. 100 runs is enough to evaluate the agents meaningfully.',
  },
  {
    q: "Can I migrate from another tool without losing data?",
    a: "Yes. Bugasura has import support for Jira, TestRail, and most common formats. For enterprise migrations with large datasets, our success team handles the migration as part of Custom onboarding. Reach out before you start and we'll scope the right path.",
  },
  {
    q: "Where is data hosted? What about compliance?",
    a: "Cloud hosting uses servers in India and Singapore. Custom plans support data residency selection and on-premises deployment. Bugasura is SOC 2 Type II certified. Full security and compliance documentation is available for procurement teams under NDA.",
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
