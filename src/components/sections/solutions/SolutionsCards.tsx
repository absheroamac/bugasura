import Image from "next/image";
import { Heading, BodyText, Eyebrow } from "@/components/ui";

interface Card {
  title: string;
  body: string;
  image?: string;
  eyebrow?: string;
  eyebrowColor?: string;
}

interface SolutionsCardsProps {
  heading: string;
  intro: string;
  cards: Card[];
  bg?: string;
}

export default function SolutionsCards({ heading, intro, cards, bg = "#ffffff" }: SolutionsCardsProps) {
  return (
    <section
      className="rounded-[32px]"
      style={{ backgroundColor: bg, padding: "80px clamp(24px, 6vw, 80px)" }}
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-16 mb-12">
        <div className="flex-shrink-0" style={{ maxWidth: "560px" }}>
          <Heading
            level="section"
            as="h2"
            color="var(--dark)"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.025em" }}
          >
            {heading}
          </Heading>
        </div>
        <BodyText
          color="rgba(30,30,30,0.8)"
          style={{ fontSize: "16px", lineHeight: 1.75, maxWidth: "380px" }}
        >
          {intro}
        </BodyText>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {cards.map((card, i) => (
          <div
            key={card.title}
            style={{
              background: bg === "#ffffff" ? "var(--cream)" : "#ffffff",
              borderRadius: "24px",
              padding: "36px",
              border: "1px solid rgba(30,30,30,0.07)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {card.eyebrow ? (
              <div style={{ marginBottom: "16px" }}>
                <Eyebrow variant="badge" color={card.eyebrowColor ?? "#E52727"} style={{ fontSize: "14px" }}>
                  {card.eyebrow}
                </Eyebrow>
              </div>
            ) : (
              <span style={{
                display: "block",
                fontFamily: "'Clash Grotesk', sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.06em",
                color: "rgba(30,30,30,0.25)",
                marginBottom: "20px",
              }}>
                {String(i + 1).padStart(2, "0")}
              </span>
            )}
            <Heading
              level="subsection"
              as="h3"
              color="var(--dark)"
              style={{ fontSize: "24px", lineHeight: 1.15, marginBottom: "14px" }}
            >
              {card.title}
            </Heading>
            <BodyText color="rgba(30,30,30,0.8)" style={{ fontSize: "15px", lineHeight: 1.7 }}>
              {card.body}
            </BodyText>
            {card.image && (
              <div style={{ margin: "24px -36px -36px -36px", padding: "0 8px 8px 8px", lineHeight: 0, marginTop: "auto", paddingTop: "24px" }}>
                <div style={{ position: "relative", width: "100%", borderRadius: "0 0 18px 18px", overflow: "hidden" }}>
                  <Image
                    src={card.image}
                    alt=""
                    width={600}
                    height={300}
                    className="w-full h-auto"
                    style={{ display: "block" }}
                    aria-hidden
                    loading="lazy"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
