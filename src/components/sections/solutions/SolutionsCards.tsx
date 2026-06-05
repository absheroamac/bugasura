import { Heading, BodyText } from "@/components/ui";

interface Card {
  title: string;
  body: string;
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
      <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-16 mb-12">
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
          color="rgba(30,30,30,0.5)"
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
            }}
          >
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
            <Heading
              level="subsection"
              as="h3"
              color="var(--dark)"
              style={{ fontSize: "24px", lineHeight: 1.15, marginBottom: "14px" }}
            >
              {card.title}
            </Heading>
            <BodyText color="rgba(30,30,30,0.6)" style={{ fontSize: "15px", lineHeight: 1.7 }}>
              {card.body}
            </BodyText>
          </div>
        ))}
      </div>
    </section>
  );
}
