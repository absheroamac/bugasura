import { Heading, BodyText } from "@/components/ui";

interface Layer {
  number: string;
  label: string;
  title: string;
  desc: string;
  category: string;
}

interface SolutionsPlatformLayersProps {
  intro: string;
  contextNote: string;
  layers: Layer[];
}

const LABEL_COLORS = ["#AC1515", "#C47200", "#0077B6", "#555555"];

export default function SolutionsPlatformLayers({ intro, contextNote, layers }: SolutionsPlatformLayersProps) {
  return (
    <section
      className="rounded-[32px]"
      style={{ backgroundColor: "#FFF6E2", padding: "80px clamp(24px, 6vw, 80px)" }}
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-16 mb-12">
        <div className="flex-shrink-0" style={{ maxWidth: "480px" }}>
          <Heading
            level="section"
            as="h2"
            color="var(--dark)"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.025em" }}
          >
            {intro}
          </Heading>
        </div>
        <BodyText
          color="rgba(30,30,30,0.5)"
          style={{ fontSize: "16px", lineHeight: 1.75, maxWidth: "420px" }}
        >
          {contextNote}
        </BodyText>
      </div>

      {/* Layer cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {layers.map((layer, i) => (
          <div
            key={layer.title}
            style={{
              background: "#ffffff",
              border: "1px solid rgba(30,30,30,0.07)",
              borderRadius: "24px",
              padding: "36px",
            }}
          >
            <span style={{
              display: "block",
              fontFamily: "'Clash Grotesk', sans-serif",
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "0.06em",
              color: LABEL_COLORS[i],
              marginBottom: "10px",
            }}>
              {layer.label}
            </span>

            <Heading
              level="subsection"
              as="h3"
              color="var(--dark)"
              style={{ fontSize: "24px", lineHeight: 1.15, marginBottom: "10px" }}
            >
              {layer.title}
            </Heading>
            <BodyText color="rgba(30,30,30,0.6)" style={{ fontSize: "15px", lineHeight: 1.7 }}>
              {layer.desc}
            </BodyText>
          </div>
        ))}
      </div>
    </section>
  );
}
