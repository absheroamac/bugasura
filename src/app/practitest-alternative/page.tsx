import type { Metadata } from "next";
import ComparisonTemplate from "@/components/sections/comparison/ComparisonTemplate";
import { practitest } from "@/lib/comparisons/practitest";

export const metadata: Metadata = {
  title: practitest.metaTitle,
  description: practitest.metaDescription,
  alternates: { canonical: `/${practitest.slug}` },
};

export default function Page() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: practitest.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <ComparisonTemplate data={practitest} />
    </>
  );
}
