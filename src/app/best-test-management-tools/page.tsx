import type { Metadata } from "next";
import HubTemplate from "@/components/sections/comparison/HubTemplate";
import { hub } from "@/lib/comparisons/hub";

export const metadata: Metadata = {
  title: hub.metaTitle,
  description: hub.metaDescription,
  alternates: { canonical: `/${hub.slug}` },
};

export default function Page() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hub.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <HubTemplate />
    </>
  );
}
