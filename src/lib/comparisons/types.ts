import type { ReactNode } from "react";

export type ComparisonData = {
  slug: string;
  competitor: string;
  /** Table column header, defaults to competitor */
  competitorLabel?: string;
  metaTitle: string;
  metaDescription: string;
  heroImage?: string;
  hero: { line1: string; line2: string; line3: string; body: string };
  whyHeading: [string, string];
  whyIntro: string;
  reasons: { title: string; body: string }[];
  painHeading: string;
  painIntro?: string;
  pains: { title: string; body: string }[];
  tableHeading: [string, string];
  tableIntro: string;
  rows: { label: string; bugasura: string; competitor: string }[];
  tableNote: string;
  faqHeading: string;
  faqs: { q: string; a: string }[];
  footerCta?: { heading: ReactNode };
};
