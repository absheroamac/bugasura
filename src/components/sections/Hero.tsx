"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const trustLogos = [
  { src: "/hero/Logos/logoipsum-414 (1) 1.png", alt: "Customer logo" },
  { src: "/hero/Logos/logoipsum-414 (1) 2.png", alt: "Customer logo" },
  { src: "/hero/Logos/logoipsum-414 (1) 3.png", alt: "Customer logo" },
  { src: "/hero/Logos/logoipsum-414 (1) 4.png", alt: "Customer logo" },
  { src: "/hero/Logos/logoipsum-418 1.png",     alt: "Customer logo" },
  { src: "/hero/Logos/logoipsum-426 1.png",     alt: "Customer logo" },
  { src: "/hero/Logos/logoipsum-426 2.png",     alt: "Customer logo" },
  { src: "/hero/Logos/logoipsum-426 3.png",     alt: "Customer logo" },
];

export default function Hero() {
  return (
    <section
      className="relative pt-[67px] rounded-[32px]"
      style={{ backgroundColor: "var(--red)" }}
    >
      {/* ── Jungle background ── */}
      <div className="absolute inset-0 z-0 rounded-[32px] overflow-hidden">
        <Image
          src="/hero/Background.png"
          alt=""
          fill
          className="object-cover object-bottom"
          priority
          aria-hidden
        />
      </div>

      {/* ── Decorative swirls ── */}
      <motion.div
        className="absolute left-8 z-10 pointer-events-none hidden lg:block"
        style={{ top: "42%" }}
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.8 }}
      >
        <Image src="/hero/circle_left.png" alt="" width={150} height={150} aria-hidden />
      </motion.div>
      <motion.div
        className="absolute right-8 z-10 pointer-events-none hidden lg:block"
        style={{ top: "42%" }}
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.8 }}
      >
        <Image src="/hero/circles_righty.png" alt="" width={150} height={150} aria-hidden />
      </motion.div>

      {/* ── Centre-aligned content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-12">

        {/* Headline */}
        <motion.h1
          className="font-semibold text-white"
          style={{
            fontSize: "clamp(56px, 7vw, 96px)",
            letterSpacing: "-0.03em",
            lineHeight: 1.0,
          }}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          Agentic QA for
          <br />
          the AI Era
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="font-semibold text-white mt-6"
          style={{ fontSize: "15px", lineHeight: 1.6, opacity: 0.85, maxWidth: "520px" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
        >
          AI ships code in hours. QA still takes days.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex items-center gap-4 mt-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.3 }}
        >
          <Link
            href="/signup"
            className="px-6 py-3 rounded-lg font-semibold uppercase transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "#fff",
              color: "var(--red-dark)",
              letterSpacing: "0.06em",
              fontSize: "13px",
            }}
          >
            Start Free
          </Link>
          <Link
            href="/demo"
            className="px-6 py-3 rounded-lg font-semibold uppercase border-2 border-white/80 transition-opacity hover:opacity-80"
            style={{ color: "#fff", letterSpacing: "0.06em", fontSize: "13px" }}
          >
            See in Action
          </Link>
        </motion.div>

        {/* ── Logo marquee ── */}
        <motion.div
          className="w-full mt-12 overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.div
            className="flex items-center gap-14"
            style={{ width: "max-content" }}
            animate={{ x: ["0px", "-50%"] }}
            transition={{ duration: 28, ease: "linear", repeat: Infinity }}
          >
            {[...trustLogos, ...trustLogos].map((logo, i) => (
              <Image
                key={i}
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={38}
                className="object-contain opacity-55 flex-shrink-0"
              />
            ))}
          </motion.div>
        </motion.div>

        {/* ── Asura mouth — centred, large ── */}
        <motion.div
          className="relative z-10 mt-10 mb-[-56px]"
          style={{ width: "clamp(420px, 72vw, 960px)" }}
          initial={{ opacity: 0, y: 60, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/hero/hero asset.png"
            alt="Asura — Bugasura mascot"
            width={960}
            height={480}
            className="w-full h-auto"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
