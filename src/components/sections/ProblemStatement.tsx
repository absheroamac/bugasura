"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heading, BodyText } from "@/components/ui";

const stats = [
  { value: "50,000+", label: "Engineers worldwide" },
  { value: "25+",     label: "Integrations" },
  { value: "#1",      label: "on Product Hunt" },
];

export default function ProblemStatement() {
  return (
    <div style={{ backgroundColor: "var(--cream)" }}>

      {/* ── Stats row ── */}
      <div className="flex items-center justify-evenly" style={{ margin: "0", padding: "80px 0 32px" }}>
        {stats.map((stat) => (
          <div key={stat.value} className="flex flex-col items-center text-center px-2">
            <Heading
              level="subsection"
              as="p"
              color="var(--dark)"
              style={{
                fontSize: "clamp(24px, 4.5vw, 60px)",
                lineHeight: 1.05,
              }}
            >
              {stat.value}
            </Heading>
            <BodyText
              color="var(--dark)"
              opacity={0.8}
              className="mt-1"
              style={{ fontWeight: 600, fontSize: "clamp(11px, 1.2vw, 14px)" }}
            >
              {stat.label}
            </BodyText>
          </div>
        ))}
      </div>

      {/* ── Orange problem card — no overflow-hidden so illustration bleeds out ── */}
      <div
        className="rounded-[32px]"
        style={{ backgroundColor: "var(--orange)" }}
      >
        {/* Exclamation mark — bell-shake loop */}
        <div className="flex justify-center pt-12">
          <motion.div
            style={{ display: "inline-flex", transformOrigin: "top center" }}
            animate={{
              rotate:  [0, -14, 14, -11, 11, -7, 7, -3, 3, 0, 0, 0, 0, 0, 0],
              scaleX:  [1,  1,   1,   1,  1,  1,  1,  1,  1, 1, 1, 1, 1, 1, 1],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0,
              times: [0, 0.04, 0.08, 0.12, 0.16, 0.20, 0.25, 0.29, 0.33, 0.37, 0.50, 0.65, 0.80, 0.92, 1],
            }}
          >
            <Image src="/section2/exclamation-mark.svg" alt="" width={36} height={56} aria-hidden />
          </motion.div>
        </div>

        {/* Headline */}
        <Heading
          level="section"
          as="h2"
          color="var(--dark)"
          className="text-center mx-auto mt-8 px-6"
          style={{
            fontSize: "clamp(40px, 4.5vw, 68px)",
            lineHeight: 1.02,
            maxWidth: "1000px",
          }}
        >
          AI accelerates development.
          <br />
          Nothing accelerates quality.
        </Heading>

        {/* Body */}
        <BodyText
          color="var(--dark)"
          opacity={0.8}
          maxWidth="560px"
          className="text-center mx-auto mt-6 px-6 pb-[320px]"
        >
          AI co-pilots write features in hours. Test suites still run on sprint timelines.
          That mismatch isn&apos;t just a process problem — it&apos;s compounding quality debt
          that surfaces in production, in customer complaints, and in the features you
          didn&apos;t dare ship.
        </BodyText>
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
