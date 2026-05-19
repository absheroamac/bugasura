"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { src: "/hero/Logos/logoipsum-414 (1) 1.png", alt: "Customer logo" },
  { src: "/hero/Logos/logoipsum-414 (1) 2.png", alt: "Customer logo" },
  { src: "/hero/Logos/logoipsum-414 (1) 3.png", alt: "Customer logo" },
  { src: "/hero/Logos/logoipsum-414 (1) 4.png", alt: "Customer logo" },
  { src: "/hero/Logos/logoipsum-418 1.png",     alt: "Customer logo" },
  { src: "/hero/Logos/logoipsum-426 1.png",     alt: "Customer logo" },
  { src: "/hero/Logos/logoipsum-426 2.png",     alt: "Customer logo" },
  { src: "/hero/Logos/logoipsum-426 3.png",     alt: "Customer logo" },
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
            style={{ filter: "brightness(0) opacity(0.55)" }}
          />
        ))}
      </motion.div>
    </div>
  );
}
