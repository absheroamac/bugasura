import Image from "next/image";
import { Heading, BodyText } from "@/components/ui";

interface FeaturesPlatformFlowProps {
  description: string;
  image: string; // path relative to /public, e.g. "/platform-flow/Context-Active.png"
}

export default function FeaturesPlatformFlow({ description, image }: FeaturesPlatformFlowProps) {
  return (
    <section
      className="rounded-[32px]"
      style={{ backgroundColor: "#1A1A1A", padding: "clamp(40px, 7vw, 64px) clamp(24px, 6vw, 80px)" }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">

        {/* Left: platform flow image */}
        <div
          className="w-full lg:flex-shrink-0"
          style={{
            width: "100%",
            maxWidth: "640px",
            aspectRatio: "16 / 9",
            borderRadius: "20px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src={image}
            alt="Platform flow diagram"
            fill
            style={{ objectFit: "contain" }}
            sizes="520px"
          />
        </div>

        {/* Right: label + description */}
        <div style={{ maxWidth: "380px" }}>
          <Heading
            level="section"
            as="h2"
            color="#ffffff"
            style={{ fontSize: "clamp(32px, 3.5vw, 48px)", lineHeight: 1.05, letterSpacing: "-0.025em", marginBottom: "24px" }}
          >
            Platform Flow
          </Heading>
          <BodyText
            color="rgba(255,255,255,0.6)"
            style={{ fontSize: "17px", lineHeight: 1.75 }}
          >
            {description}
          </BodyText>
        </div>

      </div>
    </section>
  );
}
