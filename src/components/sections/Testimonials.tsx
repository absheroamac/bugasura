"use client";

import { useEffect, useRef, useState } from "react";
import { Heading, BodyText } from "@/components/ui";

const testimonials = [
  {
    quote: "Bugasura changed how our team thinks about coverage. We went from running tests to making test decisions. That's a fundamentally different mindset shift.",
    name: "Kiran R.",
    role: "QA Lead, TechX",
    offset: true,
  },
  {
    quote: "The MCP integration means our developers get quality feedback directly in Cursor. We shipped a full regression suite without anyone leaving their editor.",
    name: "Kiran R.",
    role: "QA Lead, TechX",
    offset: false,
  },
  {
    quote: "Eagle Eye gave our CTO actual visibility into quality risk — not a dashboard of test pass rates. That changes how engineering priorities get set.",
    name: "Kiran R.",
    role: "QA Lead, TechX",
    offset: true,
  },
  {
    quote: "Bugasura changed how our team thinks about coverage. We went from running tests to making test decisions. That's a fundamentally different mindset shift.",
    name: "Kiran R.",
    role: "QA Lead, TechX",
    offset: false,
  },
];

// Duplicate for infinite scroll
const allCards = [...testimonials, ...testimonials];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const rafRef = useRef<number>();
  const isPausedRef = useRef(false);
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, pos: 0 });
  const [, forceRender] = useState(0); // eslint-disable-line @typescript-eslint/no-unused-vars

  useEffect(() => {
    const speed = 0.6;

    const tick = () => {
      const track = trackRef.current;
      if (track && !isPausedRef.current && !isDragging.current) {
        posRef.current += speed;
        const half = track.scrollWidth / 2;
        if (posRef.current >= half) posRef.current = 0;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragStart.current = { x: e.clientX, pos: posRef.current };
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const dx = dragStart.current.x - e.clientX;
    const track = trackRef.current;
    if (!track) return;
    const half = track.scrollWidth / 2;
    posRef.current = ((dragStart.current.pos + dx) % half + half) % half;
    track.style.transform = `translateX(-${posRef.current}px)`;
  };

  const handleMouseUp = () => { isDragging.current = false; };

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    dragStart.current = { x: e.touches[0].clientX, pos: posRef.current };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const dx = dragStart.current.x - e.touches[0].clientX;
    const track = trackRef.current;
    if (!track) return;
    const half = track.scrollWidth / 2;
    posRef.current = ((dragStart.current.pos + dx) % half + half) % half;
    track.style.transform = `translateX(-${posRef.current}px)`;
  };

  const handleTouchEnd = () => { isDragging.current = false; };

  const scrollBy = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const half = track.scrollWidth / 2;
    const target = ((posRef.current + dir * 325) % half + half) % half;
    const start = posRef.current;
    const distance = target - start;
    const duration = 500;
    const startTime = performance.now();

    isPausedRef.current = true;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-in-out cubic
      const ease = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      posRef.current = start + distance * ease;
      track.style.transform = `translateX(-${posRef.current}px)`;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        posRef.current = target;
        isPausedRef.current = false;
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <section style={{ backgroundColor: "var(--cream)" }} className="py-20 -mt-32 lg:mt-0">

      {/* ── Headline ── */}
      <div className="text-center px-6 mb-16">
        <Heading
          level="section"
          as="h2"
          color="var(--dark)"
          style={{
            fontSize: "clamp(36px, 4.5vw, 68px)",
            lineHeight: 1.02,
          }}
        >
          Trusted by teams
          <br />shipping serious software.
        </Heading>
        <BodyText
          color="rgba(30,30,30,0.8)"
          maxWidth="380px"
          className="mt-5 mx-auto"
          style={{ fontSize: "15px" }}
        >
          50,000+ engineers across 25 countries rely on Bugasura to keep
          quality at the pace of development.
        </BodyText>
      </div>

      {/* ── Carousel ── */}
      <div
        className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
        onMouseEnter={() => { isPausedRef.current = true; }}
        onMouseLeave={() => { isPausedRef.current = false; isDragging.current = false; }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          ref={trackRef}
          className="flex items-start gap-5 px-10 will-change-transform"
          style={{ width: "max-content" }}
        >
          {allCards.map((card, i) => (
            <div
              key={i}
              className="rounded-[20px] flex flex-col justify-between"
              style={{
                backgroundColor: "#fff",
                width: "300px",
                padding: "28px",
                marginTop: card.offset ? "48px" : "0px",
                flexShrink: 0,
                boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
              }}
            >
              {/* Quote mark */}
              <div>
                <span
                  className="font-semibold block mb-3"
                  style={{ fontSize: "44px", lineHeight: 1, color: "var(--dark)", fontFamily: "Georgia, serif" }}
                >
                  &ldquo;
                </span>
                <BodyText color="rgba(30,30,30,0.8)" style={{ fontSize: "15px", lineHeight: 1.65 }}>
                  {card.quote}
                </BodyText>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 mt-6">
                <div
                  className="rounded-full flex-shrink-0"
                  style={{ width: "40px", height: "40px", backgroundColor: "#B56B6B" }}
                />
                <div>
                  <p className="font-semibold" style={{ fontSize: "14px", color: "var(--dark)", fontFamily: "'Clash Grotesk', sans-serif" }}>
                    {card.name}
                  </p>
                  <p style={{ fontSize: "13px", color: "rgba(30,30,30,0.8)" }}>
                    {card.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Navigation buttons ── */}
      <div className="flex justify-center gap-3 mt-10">
        <button
          onClick={() => scrollBy(-1)}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-70"
          style={{ backgroundColor: "var(--dark)", color: "#fff" }}
          aria-label="Previous"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          onClick={() => scrollBy(1)}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-70"
          style={{ backgroundColor: "var(--dark)", color: "#fff" }}
          aria-label="Next"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4L10 8L6 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
}
