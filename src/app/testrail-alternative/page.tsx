import type { Metadata } from "next";
import ComparisonTemplate from "@/components/sections/comparison/ComparisonTemplate";
import { testrail } from "@/lib/comparisons/testrail";

export const metadata: Metadata = {
  title: testrail.metaTitle,
  description: testrail.metaDescription,
  alternates: { canonical: `/${testrail.slug}` },
};

export default function Page() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: testrail.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <ComparisonTemplate data={testrail} />
    </>
  );
}
