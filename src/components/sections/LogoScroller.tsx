"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { src: "/logos/white/Group 1.png",                         alt: "Customer logo" },
  { src: "/logos/white/Group 2.png",                         alt: "Customer logo" },
  { src: "/logos/white/Group 3.png",                         alt: "Customer logo" },
  { src: "/logos/white/Group 4.png",                         alt: "Customer logo" },
  { src: "/logos/white/image 1.png",                         alt: "Customer logo" },
  { src: "/logos/white/image 2.png",                         alt: "Customer logo" },
  { src: "/logos/white/image 4.png",                         alt: "Customer logo" },
  { src: "/logos/white/image 5.png",                         alt: "Customer logo" },
  { src: "/logos/white/image 6.png",                         alt: "Customer logo" },
  { src: "/logos/white/image 7.png",                         alt: "Customer logo" },
  { src: "/logos/white/image 8.png",                         alt: "Customer logo" },
  { src: "/logos/white/image 9.png",                         alt: "Customer logo" },
  { src: "/logos/white/image 10.png",                        alt: "Customer logo" },
  { src: "/logos/white/image 13.png",                        alt: "Customer logo" },
  { src: "/logos/white/images_copy-removebg-preview 1.png",  alt: "Customer logo" },
];

interface LogoScrollerProps {
  /** Background colour / gradient of the strip */
  bg?: string;
  /** Opacity for each logo image (0–1) */
  logoOpacity?: number;
  className?: string;
}

export default function LogoScroller({
  bg = "linear-gradient(160deg, #0077C2 0%, #29A5FF 60%, #4DB8FF 100%)",
  logoOpacity = 0.55,
  className = "",
}: LogoScrollerProps) {
  return (
    <div
      className={`rounded-[32px] py-7 overflow-hidden ${className}`}
      style={{ background: bg }}
    >
      <div
        className="overflow-hidden"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          maskImage:       "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <motion.div
          className="flex items-center gap-14"
          style={{ width: "max-content" }}
          animate={{ x: ["0px", "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <Image
              key={i}
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={38}
              className="object-contain flex-shrink-0"
              style={{ opacity: logoOpacity }}
              loading="lazy"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
