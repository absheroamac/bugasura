import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Heading, BodyText } from "@/components/ui";

interface RelevantLink {
  title: string;
  desc: string;
  href: string;
}

interface SolutionsAlsoRelevantProps {
  links: RelevantLink[];
}

export default function SolutionsAlsoRelevant({ links }: SolutionsAlsoRelevantProps) {
  return (
    <section
      className="rounded-[32px]"
      style={{ backgroundColor: "var(--cream)", padding: "80px clamp(24px, 6vw, 80px)" }}
    >
      <Heading
        level="subsection"
        as="h2"
        color="rgba(30,30,30,0.4)"
        style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "28px" }}
      >
        Also relevant
      </Heading>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {links.map(({ title, desc, href }) => (
          <Link
            key={title}
            href={href}
            style={{
              display: "flex",
              flexDirection: "column",
              background: "#ffffff",
              borderRadius: "20px",
              padding: "28px 32px",
              border: "1px solid rgba(30,30,30,0.07)",
              textDecoration: "none",
              transition: "box-shadow 0.15s ease",
            }}
            className="hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <Heading level="subsection" as="h3" color="var(--dark)" style={{ fontSize: "18px", lineHeight: 1.25 }}>
                {title}
              </Heading>
              <ArrowRight size={18} color="rgba(30,30,30,0.3)" style={{ flexShrink: 0, marginTop: "2px" }} />
            </div>
            <BodyText color="rgba(30,30,30,0.8)" style={{ fontSize: "14px", lineHeight: 1.65 }}>
              {desc}
            </BodyText>
          </Link>
        ))}
      </div>
    </section>
  );
}
