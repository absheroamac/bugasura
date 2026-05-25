"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { src: "/logos/black/Cloudnix 3.png",         alt: "Cloudnix" },
  { src: "/logos/black/breeze-brain 3.png",      alt: "Breeze Brain" },
  { src: "/logos/black/datzsoft 3.png",          alt: "Datzsoft" },
  { src: "/logos/black/elevate 3.png",           alt: "Elevate" },
  { src: "/logos/black/gnarus-solutions 3.png",  alt: "Gnarus Solutions" },
  { src: "/logos/black/karlo 3.png",             alt: "Karlo" },
  { src: "/logos/black/mitra 3.png",             alt: "Mitra" },
  { src: "/logos/black/nihon-edutech 3.png",     alt: "Nihon Edutech" },
  { src: "/logos/black/q-burst 3.png",           alt: "Q-Burst" },
  { src: "/logos/black/techstas 3.png",          alt: "Techstas" },
  { src: "/logos/black/Vector.png",              alt: "Customer logo" },
  { src: "/logos/black/Vector-1.png",            alt: "Customer logo" },
];

export default function PlatformLogoCarousel() {
  return (
    <div
      className="overflow-hidden py-6"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <motion.div
        className="flex items-center gap-16"
        style={{ width: "max-content" }}
        animate={{ x: ["0px", "-50%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <Image
            key={i}
            src={logo.src}
            alt={logo.alt}
            width={120}
            height={38}
            className="object-contain flex-shrink-0"
            style={{ opacity: 0.7 }}
          />
        ))}
      </motion.div>
    </div>
  );
}
