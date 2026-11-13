import type { Metadata } from "next";
import ComparisonTemplate from "@/components/sections/comparison/ComparisonTemplate";
import { qtest } from "@/lib/comparisons/qtest";

export const metadata: Metadata = {
  title: qtest.metaTitle,
  description: qtest.metaDescription,
  alternates: { canonical: `/${qtest.slug}` },
};

export default function Page() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qtest.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <ComparisonTemplate data={qtest} />
    </>
  );
}
