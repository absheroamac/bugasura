"use client";

import Image from "next/image";
import Link from "next/link";

const CTA_BG   = "#6D0103";
const BTN_COLOR = "#6D0103";

const footerNav = [
  {
    heading: "Platform",
    links: [
      { label: "Platform Overview",  href: "#" },
      { label: "Test Management",    href: "#" },
      { label: "Bug Tracker",        href: "#" },
      { label: "Requirement Mgmt",   href: "#" },
      { label: "Knowledge Base",     href: "#" },
      { label: "Eagle Eye",          href: "#" },
      { label: "Integration & MCP",  href: "#" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Engineering Teams",   href: "#" },
      { label: "QA Teams",            href: "#" },
      { label: "Engineering Leaders", href: "#" },
      { label: "Enterprise",          href: "#" },
    ],
  },
  {
    heading: "Asuras",
    links: [
      { label: "World of Asuras",    href: "#" },
      { label: "Browser Asura",      href: "#" },
      { label: "API Asura",          href: "#" },
      { label: "Duplicate Bugasura", href: "#" },
      { label: "Mobile Asura",       href: "#" },
      { label: "Build an Asura",     href: "#", muted: true },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Docs & API",  href: "#" },
      { label: "Blog",        href: "#" },
      { label: "Changelog",   href: "#" },
      { label: "Community",   href: "#" },
      { label: "Security",    href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="rounded-[32px] overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #510405, #E1090A)" }}
    >
      {/* ── CTA section ── */}
      <div
        className="rounded-[28px] m-3 flex items-center justify-between px-12 pt-12 pb-10 gap-8"
        style={{ backgroundColor: CTA_BG }}
      >
        {/* Left: copy + buttons */}
        <div className="flex flex-col max-w-[520px]">
          <h2
            className="font-semibold text-white"
            style={{ fontSize: "clamp(32px, 3.8vw, 56px)", letterSpacing: "-0.025em", lineHeight: 1.05 }}
          >
            Your competitors are
            <br />shipping with AI.
          </h2>
          <h2
            className="font-semibold mt-2"
            style={{ fontSize: "clamp(28px, 3.4vw, 50px)", letterSpacing: "-0.025em", lineHeight: 1.05, color: "rgba(255,255,255,0.5)" }}
          >
            Are you testing with it?
          </h2>
          <p
            className="mt-5"
            style={{ fontSize: "14px", lineHeight: 1.65, color: "rgba(255,255,255,0.55)", maxWidth: "320px" }}
          >
            Join 50,000+ engineers using Bugasura to match
            the speed of AI-built software.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-8">
            <Link
              href="/signup"
              className="px-7 py-3.5 rounded-lg font-semibold uppercase transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#fff", color: BTN_COLOR, fontSize: "13px", letterSpacing: "0.06em" }}
            >
              Start Free
            </Link>
            <Link
              href="/demo"
              className="px-7 py-3.5 rounded-lg font-semibold uppercase border-2 border-white/70 transition-opacity hover:opacity-75"
              style={{ color: "#fff", fontSize: "13px", letterSpacing: "0.06em" }}
            >
              See in Action
            </Link>
          </div>
        </div>

        {/* Right: character */}
        <div className="flex-shrink-0" style={{ width: "clamp(240px, 32vw, 420px)" }}>
          <Image
            src="/footer/character.png"
            alt="Bugasura character"
            width={420}
            height={420}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>

      {/* ── Footer nav ── */}
      <div className="flex justify-between px-12 py-10 gap-8">
        {footerNav.map((col) => (
          <div key={col.heading} className="flex flex-col gap-3">
            <p
              className="font-semibold mb-1"
              style={{ fontSize: "14px", color: "#fff", fontFamily: "'Clash Grotesk', sans-serif" }}
            >
              {col.heading}
            </p>
            {col.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-opacity hover:opacity-80"
                style={{
                  fontSize: "13px",
                  lineHeight: 1.5,
                  color: link.muted ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.6)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}

        {/* Copyright — right-aligned */}
        <div className="flex items-end">
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", whiteSpace: "nowrap" }}>
            © 2026 Moolya Software Testing Pvt. Ltd.
          </p>
        </div>
      </div>

      {/* ── Big "Bugasura" wordmark — fills full width, 32px padding sides + bottom ── */}
      <div style={{ paddingLeft: "32px", paddingRight: "32px", paddingBottom: "32px", lineHeight: 0.82 }}>
        <p
          className="font-semibold select-none"
          style={{
            fontFamily: "'Clash Grotesk', sans-serif",
            fontSize: "21.7vw",
            letterSpacing: "-0.03em",
            lineHeight: 0.82,
            color: "#fff",
            display: "block",
            width: "100%",
            whiteSpace: "nowrap",
          }}
        >
          Bugasura
        </p>
      </div>
    </footer>
  );
}
