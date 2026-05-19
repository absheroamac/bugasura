import Image from "next/image";

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
      <div
        className="flex items-start justify-between"
        style={{ padding: "56px 80px 48px" }}
      >
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col" style={{ maxWidth: "260px" }}>
            <span
              className="font-semibold"
              style={{
                fontFamily: "'Clash Grotesk', sans-serif",
                fontSize: "clamp(24px, 3vw, 40px)",
                letterSpacing: "-0.03em",
                lineHeight: 1.0,
                color: "#1A0A00",
              }}
            >
              {stat.value}
            </span>
            <span
              className="mt-2"
              style={{
                fontSize: "13px",
                lineHeight: 1.55,
                color: "rgba(20,10,0,0.55)",
                maxWidth: "200px",
              }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* City illustration — full width below stats */}
      <Image
        src="/platform/city.png"
        alt="Bugasura city — teams worldwide"
        width={1440}
        height={560}
        className="w-full h-auto block"
        loading="lazy"
      />
    </section>
  );
}
