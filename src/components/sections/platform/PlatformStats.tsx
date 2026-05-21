import Image from "next/image";
import { Heading, BodyText } from "@/components/ui";

const stats = [
  {
    value: "200+",
    label: "Daily active teams running on Bugasura across teams",
  },
  {
    value: "50K+",
    label: "Engineers on Bugasura across 50+ countries",
  },
  {
    value: "#1",
    label: "Engineer-first quality tool on Product Hunt — twice",
  },
];

export default function PlatformStats() {
  return (
    <section className="rounded-[32px] overflow-hidden">
      {/* Stats row — sits above the city image */}
      <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-between gap-8 px-4 py-10 lg:px-20 lg:py-14">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left" style={{ maxWidth: "260px" }}>
            <Heading
              level="subsection"
              as="p"
              color="#1A0A00"
              style={{
                fontSize: "clamp(24px, 3vw, 40px)",
                lineHeight: 1.0,
              }}
            >
              {stat.value}
            </Heading>
            <BodyText
              color="rgba(20,10,0,0.8)"
              maxWidth="200px"
              className="mt-2"
              style={{ fontSize: "13px", lineHeight: 1.55 }}
            >
              {stat.label}
            </BodyText>
          </div>
        ))}
      </div>

      {/* Bugasura Everywhere illustration — full width below stats */}
      <Image
        src="/platform/bugasura-everywhere.png"
        alt="Bugasura — teams worldwide"
        width={1440}
        height={560}
        className="w-full h-auto block"
        loading="lazy"
      />
    </section>
  );
}
