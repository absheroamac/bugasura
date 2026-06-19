"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Heading, BodyText } from "@/components/ui";

const CTA_BG = "#6D0103";

type FooterLink = { label: string; href: string; external?: boolean; disabled?: boolean; muted?: boolean };

const footerNav: { heading: string; links: FooterLink[] }[] = [
  {
    heading: "Platform",
    links: [
      { label: "Platform Overview",  href: "/platform" },
      { label: "Testpert",           href: "/testpert" },
      { label: "Test Management",    href: "https://bugasura.io/test-management",           external: true },
      { label: "Bug Tracker",        href: "https://bugasura.io/ai-issue-tracker",          external: true },
      { label: "Requirement Mgmt",   href: "https://bugasura.io/requirements-management",   external: true },
      { label: "Knowledge Base",     href: "https://bugasura.io/knowledge-base",            external: true },
      { label: "Integration & MCP",  href: "https://bugasura.io/mcp-server",               external: true },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Engineering Teams",   href: "/solutions/engineering-teams" },
      { label: "QA Teams",            href: "/solutions/qa-teams" },
      { label: "Engineering Leaders", href: "https://bugasura.io/user-journey", external: true },
      { label: "Enterprise",          href: "/enterprise" },
    ],
  },
  {
    heading: "Asuras",
    links: [
      { label: "World of Asuras",    href: "/asuras" },
      { label: "Browser Asura",      href: "/asuras#asuras" },
      { label: "API Asura",          href: "/asuras#asuras" },
      { label: "Duplicate Bug Asura", href: "/asuras#asuras" },
      { label: "Mobile Asura",       href: "/asuras#asuras" },
      { label: "Platform Intelligence", href: "/asuras#platform" },
      { label: "Build an Asura",     href: "/asuras#build" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Docs & API",  href: "https://bugasura.io/api/#overview",                                                                                         external: true },
      { label: "Blog",        href: "https://bugasura.io/blog/",                                                                                                        external: true },
      { label: "Changelog",   href: "https://bugasura.io/release-notes/",                                                                                               external: true },
      { label: "Community",   href: "https://join.slack.com/t/bugasuraspaces/shared_invite/zt-1zgsj1cxt-zjGy08DwWP2KhnvIJqdq_Q", external: true },
      { label: "Security",    href: "/security" },
    ],
  },
  {
    heading: "Pricing",
    links: [
      { label: "Free Plan",       href: "/pricing" },
      { label: "Custom / Enterprise", href: "/pricing" },
      { label: "Testpert Add-on", href: "/pricing" },
      { label: "Talk to Us",      href: "https://calendly.com/get-bugasura/45min", external: true },
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
  heading: <>
    <span className="lg:block">Your competitors are{" "}</span>
    <span className="lg:block">shipping with AI.</span>
  </>,
  subheading: <>Are you testing with it?</>,
  body: "Join 50,000+ engineers using Bugasura to match the speed of AI-built software.",
  primaryLabel: "Start Free",
  primaryHref: "https://my.bugasura.io?go=sign_up",
  secondaryLabel: "See in Action",
  secondaryHref: "https://calendly.com/get-bugasura/45min",
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
        className="rounded-[28px] m-3 flex flex-col lg:flex-row lg:items-center lg:justify-between px-6 lg:px-12 pt-10 lg:pt-12 pb-8 lg:pb-10 gap-6 lg:gap-8"
        style={{ backgroundColor: CTA_BG }}
      >
        {/* Left: copy + buttons */}
        <div className="flex flex-col lg:max-w-[680px]">
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
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3 mt-8">
            <Button href={c.primaryHref} variant="white" className="w-full lg:w-auto justify-center" target="_blank" rel="noopener noreferrer">
              {c.primaryLabel}
            </Button>
            <Button href={c.secondaryHref} variant="outline-light" className="w-full lg:w-auto justify-center" target="_blank" rel="noopener noreferrer">
              {c.secondaryLabel}
            </Button>
          </div>
        </div>

        {/* Right: character */}
        <div className="hidden lg:block flex-shrink-0" style={{ width: "clamp(240px, 32vw, 420px)" }}>
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
      <div className="grid grid-cols-2 lg:flex lg:justify-start px-6 lg:px-12 py-8 lg:py-10 gap-8 lg:gap-[72px]">
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
            {col.links.map((link) =>
              link.disabled ? (
                <span
                  key={link.label}
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.5,
                    color: "rgba(255,255,255,0.25)",
                    cursor: "default",
                  }}
                >
                  {link.label}
                </span>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="transition-opacity hover:opacity-80"
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.5,
                    color: link.muted ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.6)",
                  }}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        ))}

        {/* Copyright — right-aligned on desktop, hidden in grid on mobile */}
        <div className="hidden lg:flex items-end ml-auto">
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", whiteSpace: "nowrap" }}>
            © 2026 Moolya Software Testing Pvt. Ltd.
          </p>
        </div>
      </div>

      {/* Copyright — mobile only, below nav grid */}
      <p className="lg:hidden px-6 pb-2 text-left" style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>
        © 2026 Moolya Software Testing Pvt. Ltd.
      </p>

      {/* ── Big "Bugasura" wordmark illustration — fills full width ── */}
      <div className="px-4 lg:px-8 pb-6">
        <Image
          src="/footer/footer-wordmark.png"
          alt="Bugasura"
          width={1400}
          height={280}
          className="w-full h-auto select-none"
          style={{ display: "block" }}
          loading="lazy"
        />
      </div>
    </footer>
  );
}
