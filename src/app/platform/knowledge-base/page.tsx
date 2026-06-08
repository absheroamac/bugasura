import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SolutionsHero from "@/components/sections/solutions/SolutionsHero";
import SolutionsFeatureRow from "@/components/sections/solutions/SolutionsFeatureRow";
import FeaturesPlatformFlow from "@/components/sections/features/FeaturesPlatformFlow";
import SolutionsTestimonial from "@/components/sections/solutions/SolutionsTestimonial";
import DashboardEmbed from "@/components/ui/DashboardEmbed";

export const metadata = {
  title: "Knowledge Base — Bugasura",
  description: "The AI-indexed context layer that every test decision, risk map, and agent run draws from — so nothing gets tested without understanding what it's supposed to do.",
};

export default function KnowledgeBasePage() {
  return (
    <main className="flex flex-col gap-2">
      <Navbar />

      <SolutionsHero
        headline={<>The shared brain your QA process runs on.</>}
        body="Not a documentation tool. The AI-indexed context layer that every test decision, risk map, and agent run draws from — so nothing gets tested without understanding what it's supposed to do."
        darkText={true}
        illustration="/illustrations/knowledge-base.png"
        heroBg="#FFA840"
        primaryLabel="Start for free"
        primaryHref="https://my.bugasura.io?go=sign_up"
        secondaryLabel="See it in action"
        secondaryHref="https://calendly.com/get-bugasura/45min"
        featureCards={[
          { title: "Document ingestion",      body: "PRDs, SOPs, onboarding guides, API docs — all indexed and searchable." },
          { title: "AI-indexed search",       body: "Search by meaning, not just keywords. Find the right context fast." },
          { title: "Structured organisation", body: "Product, tech, and business knowledge in separate, navigable spaces." },
          { title: "Always current",          body: "Update a doc and everything that references it gets flagged automatically." },
        ]}
      />

      <SolutionsFeatureRow
        label="Ingest"
        labelColor="#AC1515"
        heading="Ingest the documentation your QA team actually needs to read."
        body="Product specs, API documentation, onboarding guides, architecture notes, historical bug reports — upload once and Bugasura builds a searchable, AI-indexed context layer that every other platform module can draw from."
        items={[
          "Upload PDFs, Markdown, Notion exports, Confluence pages",
          "AI-powered semantic indexing — not just keyword search",
          "Separate spaces for product, engineering, and business context",
          "Version tracking — know when a doc was last updated",
        ]}
        bg="#FDD9C8"
        checkColor="#AC1515"
        imageLeft={false}
        imageSlot={<DashboardEmbed src="/dashboard-preview/plan" />}
      />

      <SolutionsFeatureRow
        label="Context Flow"
        labelColor="#C47200"
        heading="Context that flows into every test decision downstream."
        body="When Testpert maps risk or Bugasura generates test cases, it doesn't start from a blank slate — it draws on the Knowledge Base to understand what the product is supposed to do, who uses it, and what's gone wrong before."
        items={[
          "Referenced automatically by the Refine and Generate layers",
          "Asuras inherit product context before running any tests",
          "Surfaces relevant docs during test case creation",
          "Keeps QA context consistent across team members and sprints",
        ]}
        bg="#FFDAA8"
        checkColor="#C47200"
        imageLeft={true}
      />

      <SolutionsFeatureRow
        label="Team Knowledge"
        labelColor="#0077B6"
        heading="The whole team's QA knowledge, in one place that stays current."
        body="Senior QA engineers carry institutional knowledge in their heads. The Knowledge Base externalises it — so when someone leaves, onboards, or your team scales, the quality of your test decisions doesn't change."
        items={[
          "Collaborative editing with attribution and history",
          "Stale content alerts when referenced docs fall out of date",
          "Team-wide visibility — no knowledge silos per tester",
          "Shareable context links for cross-team coordination",
        ]}
        bg="#B2D9EC"
        checkColor="#0077B6"
        imageLeft={false}
        imageSlot={<DashboardEmbed src="/dashboard-preview" />}
      />

      <FeaturesPlatformFlow
        description="Knowledge Base and Requirements together form the full Context layer. Together they give every downstream module — Testpert, test generation, Asuras — the product understanding they need to make good decisions."
        image="/platform-flow/Context-Active.png"
      />

      <SolutionsTestimonial
        testimonials={[
          {
            quote: "Every new QA hire used to spend their first two weeks trying to understand the product by reading Confluence and asking people. Now they ask the Knowledge Base. Onboarding time dropped by more than half.",
            name: "Meera P.",
            role: "Head of QA",
            company: "SaaS platform",
          },
          {
            quote: "The Knowledge Base is what makes everything else in Bugasura feel intelligent. The test cases it generates actually reflect our product because it understands our product.",
            name: "Anand S.",
            role: "QA Lead",
            company: "Finstack",
          },
          {
            quote: "We had a senior tester leave and normally that would've set us back months. The Knowledge Base had captured enough of her context that the rest of the team barely skipped a beat.",
            name: "Riya V.",
            role: "Engineering Manager",
            company: "Orion Software",
          },
        ]}
      />

      <Footer cta={{
        heading: <>Build the context layer  your QA runs on.</>,
        body: "Free for unlimited users. Start ingesting docs in minutes.",
        primaryLabel: "Start for free",
        primaryHref: "https://my.bugasura.io?go=sign_up",
        secondaryLabel: "Book a demo",
        secondaryHref: "https://calendly.com/get-bugasura/45min",
      }} />
    </main>
  );
}
