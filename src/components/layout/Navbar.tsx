"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollRef } from "@/components/layout/ScrollProvider";
import Button from "@/components/ui/Button";

/* ─── Dropdown content ─────────────────────────────────────── */

type DropdownKey = "Platform" | "Solutions" | "Asuras" | "Resources";

const dropdownData: Record<DropdownKey, {
  heading: string;
  headingHref: string;
  arrow: boolean;
  cols: 2 | 3;
  links: { label: string; desc: string; href: string }[];
  illustration: string;
  illustrationAspect: number; // width/height ratio for sizing
}> = {
  Platform: {
    heading: "Platform Overview",
    headingHref: "/platform",
    arrow: true,
    cols: 3,
    links: [
      { label: "Test Management",  desc: "Plan, run, and report test cycles",           href: "#" },
      { label: "Requirement Mgmt", desc: "Requirements traced to tests and defects",     href: "#" },
      { label: "Eagle Eye",        desc: "Quality health for engineering leaders",       href: "#" },
      { label: "Bug Tracker",      desc: "Capture, triage, and close issues",           href: "#" },
      { label: "Knowledge Base",   desc: "Docs your whole QA process draws from",       href: "#" },
      { label: "Integration & MCP",desc: "Jira, GitHub, Claude, and more",             href: "#" },
    ],
    illustration: "/navbar/dropdown/illustration.png",
    illustrationAspect: 2.12,
  },
  Solutions: {
    heading: "Solutions",
    headingHref: "#",
    arrow: false,
    cols: 2,
    links: [
      { label: "Engineering Teams",    desc: "Fewer bugs reaching production",                href: "#" },
      { label: "QA Teams",             desc: "Your entire testing workflow, one place",       href: "#" },
      { label: "Enterprise",           desc: "On-prem, SOC 2, SSO, private AI",              href: "#" },
      { label: "Engineering Leaders",  desc: "Coverage, risk, and quality at a glance",      href: "#" },
    ],
    illustration: "/navbar/dropdown/solutions.png",
    illustrationAspect: 2.12,
  },
  Asuras: {
    heading: "Asuras",
    headingHref: "#",
    arrow: false,
    cols: 3,
    links: [
      { label: "World of Asuras",    desc: "All AI testing agents, one place",     href: "/asuras" },
      { label: "Browser Asura",      desc: "Autonomous web testing agent",         href: "#" },
      { label: "API Asura",          desc: "Contract and regression testing",      href: "#" },
      { label: "Duplicate Bug Asura",desc: "Keeps your backlog clean",             href: "#" },
      { label: "Mobile Asura",       desc: "iOS and Android testing agent",        href: "#" },
      { label: "Build an Asura",     desc: "Create your own agent",               href: "#" },
    ],
    illustration: "/navbar/dropdown/asuras.png",
    illustrationAspect: 2.36,
  },
  Resources: {
    heading: "Resources",
    headingHref: "#",
    arrow: false,
    cols: 3,
    links: [
      { label: "Docs & API",  desc: "Integration guides and API reference",     href: "#" },
      { label: "Blog",        desc: "Testing strategy and product updates",      href: "#" },
      { label: "Changelog",   desc: "What shipped in every release",            href: "#" },
      { label: "Community",   desc: "50,000+ Bugasura users",                   href: "#" },
      { label: "Security",    desc: "Compliance, data residency, trust",        href: "#" },
    ],
    illustration: "/navbar/dropdown/illustration.png",
    illustrationAspect: 2.12,
  },
};

const navLinks: { label: string; href: string; dropdown: boolean; badge: string | null }[] = [
  { label: "Platform",  href: "#", dropdown: true,  badge: null },
  { label: "Solutions", href: "#", dropdown: true,  badge: null },
  { label: "Asuras",   href: "#", dropdown: true,  badge: "Agents" },
  { label: "Pricing",  href: "/pricing", dropdown: false, badge: null },
  { label: "Resources",href: "#", dropdown: true,  badge: null },
];

/* ─── Component ─────────────────────────────────────────────── */

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey | null>(null);
  const [hidden, setHidden] = useState(false);
  const scrollRef = useScrollRef();
  const lastY = useRef(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();

  /* hide-on-scroll */
  useEffect(() => {
    const container = scrollRef?.current;
    if (!container) return;
    const handleScroll = () => {
      const y = container.scrollTop;
      setHidden(y > lastY.current && y > 80);
      lastY.current = y;
    };
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [scrollRef]);

  /* close dropdown when scrolled away */
  useEffect(() => {
    if (hidden) setActiveDropdown(null);
  }, [hidden]);

  const openDropdown = (key: DropdownKey) => {
    clearTimeout(closeTimer.current);
    setActiveDropdown(key);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const cancelClose = () => clearTimeout(closeTimer.current);

  const data = activeDropdown ? dropdownData[activeDropdown] : null;

  return (
    <motion.header
      className="fixed top-6 left-6 right-6 z-50 flex justify-center pointer-events-none"
      animate={{ y: hidden ? -160 : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative w-full max-w-[1400px] pointer-events-auto">

        {/* ── Navbar bar ── */}
        <div className="relative" style={{ height: "67px" }}>
          {/* 3-piece shape background */}
          <div className="absolute inset-0 flex items-stretch">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/hero/navbar/Left.svg"  alt="" aria-hidden width={56} height={67} style={{ display: "block", flexShrink: 0, marginRight: "-1px" }} />
            <div className="flex-1" style={{ backgroundColor: "var(--cream)" }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/hero/navbar/right.svg" alt="" aria-hidden width={56} height={67} style={{ display: "block", flexShrink: 0, marginLeft: "-1px" }} />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-between px-12">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0" onClick={() => setActiveDropdown(null)}>
              <Image src="/logo.png" alt="Bugasura" width={130} height={34} className="h-[34px] w-auto" priority />
            </Link>

            {/* Centre nav */}
            <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-0.5 px-2 py-1.5 rounded-xl">
              {navLinks.map((link) => {
                const isActive = activeDropdown === link.label;
                return (
                  <div
                    key={link.label}
                    onMouseEnter={() => link.dropdown ? openDropdown(link.label as DropdownKey) : scheduleClose()}
                    onMouseLeave={scheduleClose}
                    className="relative"
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg font-semibold transition-colors hover:bg-black/5 whitespace-nowrap"
                      style={{ fontSize: "14px", color: "var(--dark)", letterSpacing: "-0.01em" }}
                    >
                      {link.label}
                      {link.badge && (
                        <span
                          className="px-1.5 py-0.5 rounded-full font-semibold leading-none"
                          style={{ fontSize: "10px", background: "linear-gradient(90deg, var(--red), var(--orange))", color: "#fff", letterSpacing: "0.02em" }}
                        >
                          {link.badge}
                        </span>
                      )}
                      {link.dropdown && (
                        <motion.span
                          animate={{ rotate: isActive ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="inline-flex"
                        >
                          <ChevronDown size={13} strokeWidth={2.5} className="opacity-50" />
                        </motion.span>
                      )}
                    </Link>
                  </div>
                );
              })}
            </nav>

            {/* Right actions */}
            <div className="hidden md:flex items-center gap-3 flex-shrink-0">
              <Button href="/login" variant="outline" size="md">
                Log In
              </Button>
              <Button href="/signup" variant="primary" size="md">
                Start Free
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ── Desktop dropdown panel ── */}
        <AnimatePresence>
          {activeDropdown && data && (
            <motion.div
              key={activeDropdown}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={cancelClose}
              onMouseLeave={scheduleClose}
              className="hidden md:flex absolute gap-0 overflow-hidden"
              style={{
                top: "calc(67px + 8px)",
                left: "21px",
                right: "21px",
                backgroundColor: "var(--cream)",
                borderRadius: "20px",
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow: "0 12px 48px rgba(0,0,0,0.12)",
              }}
            >
              {/* Left — links */}
              <div className="flex-1 p-8">
                {/* Section heading */}
                {data.arrow ? (
                  <Link
                    href={data.headingHref}
                    className="inline-flex items-center gap-1.5 font-semibold mb-6 transition-colors"
                    style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: "15px", color: "var(--dark)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#E52727")}
                    onMouseLeave={e => (e.currentTarget.style.color = "")}
                  >
                    {data.heading}
                    <ArrowUpRight size={15} strokeWidth={2.5} />
                  </Link>
                ) : (
                  <span
                    className="inline-flex items-center gap-1.5 font-semibold mb-6"
                    style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: "15px", color: "var(--dark)" }}
                  >
                    {data.heading}
                  </span>
                )}

                {/* Link grid */}
                <div
                  className="grid gap-x-8 gap-y-5"
                  style={{ gridTemplateColumns: `repeat(${data.cols}, 1fr)` }}
                >
                  {data.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="flex flex-col gap-0.5"
                      onMouseEnter={e => { (e.currentTarget.children[0] as HTMLElement).style.color = "#E52727"; }}
                      onMouseLeave={e => { (e.currentTarget.children[0] as HTMLElement).style.color = ""; }}
                    >
                      <span
                        className="font-semibold transition-colors"
                        style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: "14px", color: "var(--dark)" }}
                      >
                        {link.label}
                      </span>
                      <span className="transition-colors" style={{ fontSize: "12.5px", lineHeight: 1.45, color: "rgba(30,30,30,0.8)" }}>
                        {link.desc}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right — illustration + CTA */}
              <div
                className="flex flex-col justify-between p-6 flex-shrink-0"
                style={{ width: "300px", borderRadius: "0 20px 20px 0" }}
              >
                {/* START FREE button */}
                <Button href="/signup" variant="primary" size="md" className="self-end">
                  Start Free
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </Button>

                {/* Illustration */}
                <div className="mt-4 flex-1 flex items-end">
                  <Image
                    src={data.illustration}
                    alt={activeDropdown}
                    width={560}
                    height={264}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Mobile nav ── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 flex flex-col gap-5 p-8 md:hidden shadow-lg"
              style={{ top: "calc(67px + 8px)", backgroundColor: "var(--cream)", borderRadius: "20px" }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-semibold text-lg"
                  style={{ color: "var(--dark)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button href="/signup" variant="primary" size="md" className="mt-2 w-full justify-center">
                Start Free
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.header>
  );
}
