import type { Metadata } from "next";
import ComparisonTemplate from "@/components/sections/comparison/ComparisonTemplate";
import { zephyr } from "@/lib/comparisons/zephyr";

export const metadata: Metadata = {
  title: zephyr.metaTitle,
  description: zephyr.metaDescription,
  alternates: { canonical: `/${zephyr.slug}` },
};

export default function Page() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: zephyr.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <ComparisonTemplate data={zephyr} />
    </>
  );
}
