"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Heading, BodyText } from "@/components/ui";

const CTA_BG = "#6D0103";

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

type CtaConfig = {
  heading: React.ReactNode;
  subheading?: React.ReactNode;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

const defaultCta: CtaConfig = {
  heading: <><span style={{ display: "block" }}>Your competitors are</span><span style={{ display: "block" }}>shipping with AI.</span></>,
  subheading: <>Are you testing with it?</>,
  body: "Join 50,000+ engineers using Bugasura to match the speed of AI-built software.",
  primaryLabel: "Start Free",
  primaryHref: "/signup",
  secondaryLabel: "See in Action",
  secondaryHref: "/demo",
};

export default function Footer({ cta }: { cta?: CtaConfig }) {
  const c = cta ?? defaultCta;
  return (
    <footer
      className="rounded-[32px] overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #510405, #E1090A)" }}
    >
      {/* ── CTA section ── */}
      <div
        className="rounded-[28px] m-3 flex flex-col md:flex-row md:items-center md:justify-between px-6 md:px-12 pt-10 md:pt-12 pb-8 md:pb-10 gap-6 md:gap-8"
        style={{ backgroundColor: CTA_BG }}
      >
        {/* Left: copy + buttons */}
        <div className="flex flex-col md:max-w-[620px]">
          <Heading
            level="section"
            as="h2"
            color="#ffffff"
            style={{
              fontSize: "clamp(32px, 3.8vw, 56px)",
              lineHeight: 1.05,
            }}
          >
            {c.heading}
          </Heading>
          {c.subheading && (
            <Heading
              level="section"
              as="h2"
              color="rgba(255,255,255,0.5)"
              className="mt-2"
              style={{
                fontSize: "clamp(28px, 3.4vw, 50px)",
                lineHeight: 1.05,
              }}
            >
              {c.subheading}
            </Heading>
          )}
          <BodyText
            color="rgba(255,255,255,0.55)"
            maxWidth="360px"
            className="mt-5"
            style={{ fontSize: "14px", lineHeight: 1.65 }}
          >
            {c.body}
          </BodyText>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <Button href={c.primaryHref} variant="white">
              {c.primaryLabel}
            </Button>
            <Button href={c.secondaryHref} variant="outline-light">
              {c.secondaryLabel}
            </Button>
          </div>
        </div>

        {/* Right: character */}
        <div className="hidden md:block flex-shrink-0" style={{ width: "clamp(240px, 32vw, 420px)" }}>
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
      <div className="grid grid-cols-2 md:flex md:justify-between px-6 md:px-12 py-8 md:py-10 gap-8">
        {footerNav.map((col) => (
          <div key={col.heading} className="flex flex-col gap-3">
            <Heading
              level="card"
              as="p"
              color="#ffffff"
              className="mb-1"
              style={{ fontSize: "14px" }}
            >
              {col.heading}
            </Heading>
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

        {/* Copyright — right-aligned on desktop, hidden in grid on mobile */}
        <div className="hidden md:flex items-end">
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", whiteSpace: "nowrap" }}>
            © 2026 Moolya Software Testing Pvt. Ltd.
          </p>
        </div>
      </div>

      {/* Copyright — mobile only, below nav grid */}
      <p className="md:hidden px-6 pb-2 text-left" style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>
        © 2026 Moolya Software Testing Pvt. Ltd.
      </p>

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
