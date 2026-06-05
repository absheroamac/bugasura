import { Heading, BodyText } from "@/components/ui";

interface Highlight {
  code: string;
  codeColor: string;
  codeBg: string;
  title: string;
  body: string;
}

interface FeaturesHighlightsProps {
  highlights: Highlight[];
  bg?: string;
}

export default function FeaturesHighlights({ highlights, bg = "#ffffff" }: FeaturesHighlightsProps) {
  return (
    <section
      className="rounded-[32px]"
      style={{ backgroundColor: bg, padding: "80px clamp(24px, 6vw, 80px)" }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {highlights.map((h) => (
          <div
            key={h.code}
            style={{
              background: bg === "#ffffff" ? "#FFF6E2" : "#ffffff",
              borderRadius: "24px",
              padding: "32px",
              border: "1px solid rgba(30,30,30,0.07)",
            }}
          >
            <span style={{
              display: "inline-block",
              fontFamily: "'Clash Grotesk', sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: h.codeColor,
              background: h.codeBg,
              borderRadius: "6px",
              padding: "3px 8px",
              marginBottom: "20px",
            }}>
              {h.code}
            </span>
            <Heading
              level="subsection"
              as="h3"
              color="var(--dark)"
              style={{ fontSize: "20px", lineHeight: 1.2, marginBottom: "10px" }}
            >
              {h.title}
            </Heading>
            <BodyText color="rgba(30,30,30,0.6)" style={{ fontSize: "14px", lineHeight: 1.7 }}>
              {h.body}
            </BodyText>
          </div>
        ))}
      </div>
    </section>
  );
}
