import React from "react";
import Image from "next/image";
import { Heading, BodyText, Button } from "@/components/ui";

function CheckItem({ text, color }: { text: string; color: string }) {
  return (
    <div className="flex items-start gap-3">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden style={{ flexShrink: 0, marginTop: "2px" }}>
        <circle cx="10" cy="10" r="10" fill={color} fillOpacity="0.12" />
        <path d="M5.5 10l3 3 6-7" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <BodyText color="rgba(30,30,30,0.7)" style={{ fontSize: "15px", lineHeight: 1.65 }}>
        {text}
      </BodyText>
    </div>
  );
}

interface SolutionsFeatureRowProps {
  label: string;
  labelColor: string;
  heading: string;
  body: string;
  items: string[];
  ctaLabel?: string;
  ctaHref?: string;
  bg?: string;
  checkColor?: string;
  imageLeft?: boolean;
  imageSlot?: React.ReactNode;
  itemsSlot?: React.ReactNode;
  screenshot?: string;
}

export default function SolutionsFeatureRow({
  label,
  labelColor,
  heading,
  body,
  items,
  ctaLabel,
  ctaHref,
  bg = "#ffffff",
  checkColor,
  imageLeft = false,
  imageSlot,
  itemsSlot,
  screenshot,
}: SolutionsFeatureRowProps) {
  const resolvedCheckColor = checkColor || labelColor;
  const placeholderBg = "rgba(255,255,255,0.5)";
  const placeholderBorder = "rgba(255,255,255,0.4)";

  const copyBlock = (
    <div className="flex-1">
      <span style={{
        display: "block",
        fontFamily: "'Clash Grotesk', sans-serif",
        fontSize: "20px",
        fontWeight: 600,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: labelColor,
        marginBottom: "16px",
      }}>
        {label}
      </span>

      <Heading
        level="section"
        as="h2"
        color="var(--dark)"
        style={{ fontSize: "clamp(28px, 3.5vw, 48px)", lineHeight: 1.05, letterSpacing: "-0.025em", marginBottom: "20px" }}
      >
        {heading}
      </Heading>

      <BodyText
        color="rgba(30,30,30,0.6)"
        style={{ fontSize: "16px", lineHeight: 1.75, marginBottom: "32px" }}
      >
        {body}
      </BodyText>

      {itemsSlot ? (
        <div className="mb-10">{itemsSlot}</div>
      ) : (
        <div className="flex flex-col gap-4 mb-10">
          {items.map((item) => (
            <CheckItem key={item} text={item} color={resolvedCheckColor} />
          ))}
        </div>
      )}

      {ctaLabel && ctaHref && (
        <Button href={ctaHref} variant="outline">
          {ctaLabel}
        </Button>
      )}
    </div>
  );

  const screenshotBlock = screenshot ? (
    <div
      className="w-full rounded-3xl overflow-hidden relative"
      style={{ aspectRatio: "5 / 4", backgroundColor: "rgba(255,255,255,0.6)", border: "1.5px solid rgba(255,255,255,0.85)" }}
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ top: "24px", left: "24px", borderTopLeftRadius: "16px" }}
      >
        <Image
          src={screenshot}
          alt=""
          fill
          className="object-cover object-left-top"
          loading="lazy"
        />
      </div>
    </div>
  ) : null;

  const imageBlock = imageSlot ? (
    <div
      className="hidden lg:flex flex-shrink-0"
      style={{ width: "45%", alignSelf: "stretch", minHeight: "360px", overflow: "hidden" }}
    >
      {imageSlot}
    </div>
  ) : screenshotBlock ? (
    <div
      className="hidden lg:flex flex-shrink-0 items-end"
      style={{ width: "45%", alignSelf: "stretch", minHeight: "360px" }}
    >
      {screenshotBlock}
    </div>
  ) : (
    <div
      className="hidden lg:block flex-shrink-0"
      style={{
        width: "45%",
        alignSelf: "stretch",
        minHeight: "360px",
        borderRadius: "24px",
        background: placeholderBg,
        border: `1px solid ${placeholderBorder}`,
      }}
    />
  );

  return (
    <section
      className="rounded-[32px]"
      style={{ backgroundColor: bg, padding: "clamp(48px, 8vw, 80px) clamp(24px, 6vw, 80px)", overflowX: "hidden" }}
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
        {imageLeft ? imageBlock : copyBlock}
        {imageLeft ? copyBlock : imageBlock}
      </div>
    </section>
  );
}
