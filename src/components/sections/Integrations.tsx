"use client";

import Image from "next/image";
import { Heading, BodyText } from "@/components/ui";

export default function Integrations() {
  return (
    <section
      className="relative"
      style={{ backgroundColor: "var(--cream)", paddingTop: "72px", overflow: "hidden", minHeight: "800px" }}
    >
      {/* ── Left fire — half cropped off left edge ── */}
      <div
        className="absolute bottom-0 pointer-events-none z-0"
        style={{ height: "69vh", width: "auto", left: 0, transform: "translateX(-50%)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/section6/left-fire.svg"
          alt=""
          aria-hidden
          style={{ height: "100%", width: "auto", display: "block" }}
        />
      </div>

      {/* ── Right fire — half cropped off right edge ── */}
      <div
        className="absolute bottom-0 pointer-events-none z-0"
        style={{ height: "69vh", width: "auto", right: 0, transform: "translateX(50%)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/section6/right-fire.svg"
          alt=""
          aria-hidden
          style={{ height: "100%", width: "auto", display: "block" }}
        />
      </div>

      {/* ── Centre content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">

        {/* Headline */}
        <Heading
          level="section"
          as="h2"
          color="var(--dark)"
          style={{
            fontSize: "clamp(32px, 5vw, 68px)",
            lineHeight: 1.02,
          }}
        >
          Built for how modern{" "}
          <br className="hidden lg:block" />teams actually work.
        </Heading>

        {/* Sub-copy */}
        <BodyText
          color="rgba(30,30,30,0.8)"
          maxWidth="340px"
          className="mt-5"
        >
          Connects with your AI coding tools, project trackers,
          and CI/CD pipelines out of the box.
        </BodyText>

        {/* Asura illustration */}
        <div className="mt-8" style={{ width: "clamp(340px, 90vw, 720px)" }}>
          <Image
            src="/section6/asura.png"
            alt="Bugasura Asura holding integration logos"
            width={720}
            height={720}
            className="w-full h-auto block"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
