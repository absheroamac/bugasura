import type { Metadata } from "next";
import ComparisonTemplate from "@/components/sections/comparison/ComparisonTemplate";
import { xray } from "@/lib/comparisons/xray";

export const metadata: Metadata = {
  title: xray.metaTitle,
  description: xray.metaDescription,
  alternates: { canonical: `/${xray.slug}` },
};

export default function Page() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: xray.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <ComparisonTemplate data={xray} />
    </>
  );
}
