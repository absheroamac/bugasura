"use client";

import Image from "next/image";

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
        <h2
          className="font-semibold"
          style={{
            fontSize: "clamp(40px, 5vw, 68px)",
            letterSpacing: "-0.025em",
            lineHeight: 1.02,
            color: "var(--dark)",
            whiteSpace: "nowrap",
          }}
        >
          Built for how modern
          <br />teams actually work.
        </h2>

        {/* Sub-copy */}
        <p
          className="mt-5"
          style={{
            fontSize: "15px",
            lineHeight: 1.6,
            color: "rgba(30,30,30,0.55)",
            maxWidth: "340px",
          }}
        >
          Connects with your AI coding tools, project trackers,
          and CI/CD pipelines out of the box.
        </p>

        {/* Asura illustration */}
        <div className="mt-8" style={{ width: "clamp(380px, 56vw, 720px)" }}>
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
