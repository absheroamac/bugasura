"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button, Heading, BodyText } from "@/components/ui";

const trustLogos = [
  { src: "/logos/white/Cloudnix 2.png",          alt: "Cloudnix" },
  { src: "/logos/white/breeze-brain 2.png",       alt: "Breeze Brain" },
  { src: "/logos/white/datzsoft 2.png",           alt: "Datzsoft" },
  { src: "/logos/white/elevate 2.png",            alt: "Elevate" },
  { src: "/logos/white/gnarus-solutions 2.png",   alt: "Gnarus Solutions" },
  { src: "/logos/white/karlo 2.png",              alt: "Karlo" },
  { src: "/logos/white/mitra 2.png",              alt: "Mitra" },
  { src: "/logos/white/nihon-edutech 2.png",      alt: "Nihon Edutech" },
  { src: "/logos/white/q-burst 2.png",            alt: "Q-Burst" },
  { src: "/logos/white/techstas 2.png",           alt: "Techstas" },
  { src: "/logos/white/Vector.png",               alt: "Customer logo" },
  { src: "/logos/white/Vector-1.png",             alt: "Customer logo" },
];

type FloatingLogo = { src: string; left?: string; right?: string; top: string; size: number; driftX: number; bobY: number; delay: number };

// Logos floating around the mouth
// Positions are % of the full-width logos stage
// driftX: positive = drift right (towards centre), negative = drift left (towards centre)
const floatingLogos: FloatingLogo[] = [
  // ── Left side ──
  { src: "/hero/logo1.png",  left: "3%",  top: "4%",  size: 52, driftX:  22, bobY: -8,  delay: 0.0 },
  { src: "/hero/logo2.png",  left: "13%", top: "30%", size: 48, driftX:  16, bobY:  7,  delay: 0.5 },
  { src: "/hero/logo3.png",  left: "2%",  top: "54%", size: 52, driftX:  20, bobY: -9,  delay: 1.0 },
  { src: "/hero/logo4.png",  left: "12%", top: "72%", size: 46, driftX:  16, bobY:  6,  delay: 0.3 },
  { src: "/hero/logo5.png",  left: "2%",  top: "88%", size: 48, driftX:  18, bobY: -7,  delay: 0.8 },
  // ── Right side ──
  { src: "/hero/logo6.png",  right: "3%",  top: "4%",  size: 52, driftX: -22, bobY:  8,  delay: 0.2 },
  { src: "/hero/logo7.png",  right: "13%", top: "28%", size: 46, driftX: -16, bobY: -7,  delay: 0.7 },
  { src: "/hero/logo8.png",  right: "2%",  top: "52%", size: 52, driftX: -20, bobY:  9,  delay: 0.1 },
  { src: "/hero/logo9.png",  right: "13%", top: "70%", size: 48, driftX: -16, bobY: -6,  delay: 0.6 },
  { src: "/hero/logo10.png", right: "2%",  top: "86%", size: 46, driftX: -18, bobY:  7,  delay: 1.1 },
];

export default function Hero() {
  return (
    <section
      className="relative pt-[67px] rounded-b-[32px]"
      style={{ backgroundColor: "var(--red)" }}
    >
      {/* ── Jungle background ── */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-b-[32px]">
        <Image
          src="/hero/Background.png"
          alt=""
          fill
          className="object-cover object-bottom"
          priority
          aria-hidden
        />
      </div>

      {/* ── Centre-aligned content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-12">

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <Heading
            level="hero"
            as="h1"
            color="#ffffff"
            style={{
              fontSize: "clamp(56px, 7vw, 96px)",
              lineHeight: 1.0,
            }}
          >
            Agentic QA for{" "}
            <br className="hidden lg:block" />
            the AI Era
          </Heading>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-6"
        >
          <BodyText
            size="lg"
            color="#ffffff"
            opacity={1}
            maxWidth="520px"
          >
            AI ships code in hours. QA still takes days.
          </BodyText>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex items-center gap-4 mt-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.3 }}
        >
          <Button href="/signup" variant="white">
            Start Free
          </Button>
          <Button href="/demo" variant="outline-light">
            See in Action
          </Button>
        </motion.div>

        {/* ── Logo marquee ── */}
        <motion.div
          className="w-full mt-12 overflow-hidden"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            maskImage:       "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
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

        {/* ── Mouth + floating logos ── */}
        {/* Outer stage: full width, height locked to mouth aspect ratio so logos always fit */}
        {/* mouth aspect = 480/1040 = 0.4615 · stage width ≈ 100% · height = width × 0.4615 */}
        <motion.div
          className="relative w-full mt-10 mb-[-56px]"
          style={{ height: "clamp(220px, 29vw, 420px)" }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Mouth — absolutely centred inside the stage */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/hero/asura-mouth.png"
              alt="Asura — Bugasura mascot"
              width={1040}
              height={480}
              className="h-full w-auto relative z-10"
              priority
            />
          </div>

          {/* Floating logos — positioned over the full stage */}
          {floatingLogos.map((logo, i) => (
            <motion.div
              key={i}
              className="absolute z-20 pointer-events-none"
              style={{
                left:   logo.left,
                right:  logo.right,
                top:    logo.top,
                width:  logo.size,
                height: logo.size,
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 1, 1],
                x: [0, logo.driftX * 0.5, logo.driftX, logo.driftX * 0.5, 0],
                y: [0, logo.bobY, 0, logo.bobY * 0.5, 0],
              }}
              transition={{
                opacity: { duration: 0.6, delay: logo.delay + 0.4 },
                x: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: logo.delay },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: logo.delay },
              }}
            >
              <Image
                src={logo.src}
                alt="Integration logo"
                width={logo.size}
                height={logo.size}
                className="w-full h-full object-contain drop-shadow-lg"
                priority
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
