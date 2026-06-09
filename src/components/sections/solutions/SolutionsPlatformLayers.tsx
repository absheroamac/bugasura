import { ArrowRight } from "lucide-react";
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
      style={{ background: "linear-gradient(160deg, #0077C2 0%, #29A5FF 60%, #4DB8FF 100%)", padding: "80px clamp(24px, 6vw, 80px)" }}
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-16 mb-12">
        <div className="flex-shrink-0" style={{ maxWidth: "480px" }}>
          <Heading
            level="section"
            as="h2"
            color="#ffffff"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.025em" }}
          >
            {intro}
          </Heading>
        </div>
        <BodyText
          color="rgba(255,255,255,0.8)"
          style={{ fontSize: "16px", lineHeight: 1.75, maxWidth: "420px" }}
        >
          {contextNote}
        </BodyText>
      </div>

      {/* Layer cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {layers.map((layer, i) => (
          <div key={layer.title} className="relative">
            <div
              style={{
                background: "#FFF6E2",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: "24px",
                padding: "36px",
                height: "100%",
              }}
            >
              <span style={{
                display: "block",
                fontFamily: "'Clash Grotesk', sans-serif",
                fontSize: "20px",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: LABEL_COLORS[i],
                marginBottom: "16px",
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
              <BodyText color="rgba(30,30,30,0.8)" style={{ fontSize: "15px", lineHeight: 1.7 }}>
                {layer.desc}
              </BodyText>
            </div>

            {/* Connector arrow to the next layer */}
            {i < layers.length - 1 && (
              <div
                className="hidden lg:flex"
                aria-hidden
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "calc(100% + 8px)",
                  transform: "translate(-50%, -50%)",
                  width: "32px",
                  height: "32px",
                  borderRadius: "999px",
                  background: "#ffffff",
                  border: "1px solid rgba(255,255,255,0.3)",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                  flexShrink: 0,
                }}
              >
                <ArrowRight size={16} color="rgba(30,30,30,0.5)" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
