"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "50,000+", label: "Engineers worldwide" },
  { value: "25+",     label: "Integrations" },
  { value: "#1",      label: "on Product Hunt" },
];

export default function ProblemStatement() {
  return (
    <div style={{ backgroundColor: "var(--cream)" }}>

      {/* ── Stats row ── */}
      <div className="flex items-center justify-between py-10 px-8">
        {stats.map((stat) => (
          <div key={stat.value} className="flex flex-col items-center text-center">
            <span
              className="font-semibold"
              style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: "clamp(40px, 4.5vw, 60px)", letterSpacing: "-0.02em", lineHeight: 1.05, color: "var(--dark)" }}
            >
              {stat.value}
            </span>
            <span
              className="font-semibold mt-1"
              style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: "14px", color: "var(--dark)", opacity: 0.45 }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* ── Orange problem card — no overflow-hidden so illustration bleeds out ── */}
      <div
        className="rounded-[32px]"
        style={{ backgroundColor: "var(--orange)" }}
      >
        {/* Exclamation mark */}
        <div className="flex justify-center pt-12">
          <Image src="/section2/exclamation-mark.svg" alt="" width={36} height={56} aria-hidden />
        </div>

        {/* Headline */}
        <h2
          className="font-semibold text-center mx-auto mt-8 px-6"
          style={{
            fontSize: "clamp(40px, 4.5vw, 68px)",
            letterSpacing: "-0.025em",
            lineHeight: 1.02,
            color: "var(--dark)",
            maxWidth: "1000px",
          }}
        >
          AI accelerates development.
          <br />
          Nothing accelerates quality.
        </h2>

        {/* Body */}
        <p
          className="text-center mx-auto mt-6 px-6 pb-[320px]"
          style={{
            fontSize: "15px",
            lineHeight: 1.6,
            color: "var(--dark)",
            opacity: 0.6,
            maxWidth: "560px",
          }}
        >
          AI co-pilots write features in hours. Test suites still run on sprint timelines.
          That mismatch isn&apos;t just a process problem — it&apos;s compounding quality debt
          that surfaces in production, in customer complaints, and in the features you
          didn&apos;t dare ship.
        </p>
      </div>

      {/* ── Illustration: outside card, pulled up so top ~30% overlaps orange bottom ── */}
      <motion.div
        className="relative z-10"
        style={{ marginTop: "calc(-8vw - 220px)" }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/section2/illustration1.png"
          alt="AI ships fast while QA falls behind"
          width={1400}
          height={700}
          className="w-full h-auto"
          loading="lazy"
        />
      </motion.div>

      {/* ── Character — fully on cream, tucked up under the illustration ── */}
      <div
        className="flex flex-col items-center pb-16"
        style={{ marginTop: "-4vw", marginBottom: "48px" }}
      >
        <div
          className="mb-2 font-semibold"
          style={{ fontSize: "14px", color: "var(--dark)", opacity: 0.65, fontStyle: "italic" }}
        >
          Snail fail!
        </div>
        <Image
          src="/section2/illustration2.png"
          alt="Bugasura mascot looking unimpressed"
          width={280}
          height={220}
          className="w-[clamp(320px,40vw,520px)] h-auto"
          style={{ marginTop: "-48px" }}
          loading="lazy"
        />
      </div>

    </div>
  );
}
