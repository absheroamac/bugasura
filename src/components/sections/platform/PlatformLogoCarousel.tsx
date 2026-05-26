"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { src: "/logos/black/Group 5.png",                          alt: "Customer logo" },
  { src: "/logos/black/Group 6.png",                          alt: "Customer logo" },
  { src: "/logos/black/Group 7.png",                          alt: "Customer logo" },
  { src: "/logos/black/Group 8.png",                          alt: "Customer logo" },
  { src: "/logos/black/image 14.png",                         alt: "Customer logo" },
  { src: "/logos/black/image 15.png",                         alt: "Customer logo" },
  { src: "/logos/black/image 16.png",                         alt: "Customer logo" },
  { src: "/logos/black/image 17.png",                         alt: "Customer logo" },
  { src: "/logos/black/image 18.png",                         alt: "Customer logo" },
  { src: "/logos/black/image 19.png",                         alt: "Customer logo" },
  { src: "/logos/black/image 20.png",                         alt: "Customer logo" },
  { src: "/logos/black/image 21.png",                         alt: "Customer logo" },
  { src: "/logos/black/image 22.png",                         alt: "Customer logo" },
  { src: "/logos/black/image 23.png",                         alt: "Customer logo" },
  { src: "/logos/black/images_copy-removebg-preview 2.png",   alt: "Customer logo" },
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
