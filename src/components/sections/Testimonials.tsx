"use client";

import { useEffect, useRef, useState } from "react";
import { Heading, BodyText } from "@/components/ui";

const testimonials = [
  {
    quote: "Throughout my career as a tester finding the right tool for tracking bugs has been a challenge. However when I first used Bugasura, I knew this was it. I had to no longer worry about managing the bug tracker and I could finally worry less about managing bugs.",
    name: "Brijesh Deb",
    role: "Chief Enablement Officer, The Test Chat",
    avatar: "/testimonials/brijesh.jpg",
    initials: "BD",
    offset: true,
  },
  {
    quote: "Pradeep and team are super passionate about Quality and it shows in their product! Bugasura is easy to use and solves the needless back and forth between design and engineering — absolute must have for fast-moving teams!",
    name: "Roshan Cariappa",
    role: "Co-Founder, Upskillist",
    avatar: "/testimonials/roshan.jpg",
    initials: "RC",
    offset: false,
  },
  {
    quote: "Super easy to customize as an admin. I am a startup tech lead and I don't want to spend a lot of time customizing my bug tracker. I loved the simple signup with Bugasura and decided to get it on board.",
    name: "Akshay Dalvi",
    role: "Crafting Tomorrow's Tech: A Developer",
    avatar: "/testimonials/akshay.jpg",
    initials: "AD",
    offset: true,
  },
  {
    quote: "One of the simplest, user-friendly and smooth tool I have used so far! Very easy to track of raised bugs and collaborate with team :)",
    name: "Kopila Pariyar",
    role: "Senior Quality Engineer",
    avatar: "/testimonials/kopila.jpg",
    initials: "KP",
    offset: false,
  },
  {
    quote: "😊 One of the things I love about Bugasura is its speed. It's fast to load, fast to search, and fast to update. This means that I can quickly find the information I need to resolve issues, and I can do it without wasting time waiting for the system to catch up.",
    name: "Naveen AutomationLabs",
    role: "Founder, Naveen Automation Labs",
    avatar: "/testimonials/naveen.jpg",
    initials: "NA",
    offset: true,
  },
  {
    quote: "I have been using Bugasura for a year + now. I love the new features that come in frequently. They are modern and futuristic than typical.",
    name: "Elango R",
    role: "Junior Software Engineer",
    avatar: "/testimonials/elango.jpg",
    initials: "ER",
    offset: false,
  },
  {
    quote: "Interesting product; I absolutely love the landing page, and the free forever pricing is great for small teams. The UI/UX is very clean and simple to use. All the best guys",
    name: "Rithvik Podduturi",
    role: "Notabletools.com",
    avatar: "/testimonials/rithvik.jpg",
    initials: "RP",
    offset: true,
  },
  {
    quote: "Have been a bugasura user from a very long time. Love the simple, fast and easy to use interface. Perfect for developers like me who wants to spend more time on coding and less on tools. Either it is about managing a ticket or github integration....",
    name: "Mohammed Irfan",
    role: "Tech Enthusiast",
    avatar: "/testimonials/irfan.jpg",
    initials: "MI",
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
                <div className="relative flex-shrink-0" style={{ width: "40px", height: "40px" }}>
                  {/* Initials fallback — always rendered underneath */}
                  <div
                    className="absolute inset-0 rounded-full flex items-center justify-center text-white font-semibold"
                    style={{ backgroundColor: "#B56B6B", fontSize: "13px", fontFamily: "'Clash Grotesk', sans-serif" }}
                  >
                    {card.initials}
                  </div>
                  {/* Photo sits on top; hides itself on error to reveal initials */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.avatar}
                    alt={card.name}
                    className="absolute inset-0 rounded-full object-cover w-full h-full"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                </div>
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
