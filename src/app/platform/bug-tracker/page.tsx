import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SolutionsHero from "@/components/sections/solutions/SolutionsHero";
import SolutionsFeatureRow from "@/components/sections/solutions/SolutionsFeatureRow";
import FeaturesPlatformFlow from "@/components/sections/features/FeaturesPlatformFlow";
import SolutionsTestimonial from "@/components/sections/solutions/SolutionsTestimonial";

export const metadata = {
  title: "Bug Tracker — Bugasura",
  description: "Not just a place to log issues. An AI-enriched tracker that auto-deduplicates, contextualises defects against your requirements, and gives engineering exactly what they need to fix fast.",
};

export default function BugTrackerPage() {
  return (
    <main className="flex flex-col gap-2">
      <Navbar />

      <SolutionsHero
        headline={<>Capture, triage, and close bugs — with AI in the loop.</>}
        body="Not just a place to log issues. An AI-enriched tracker that auto-deduplicates, contextualises defects against your requirements, and gives engineering exactly what they need to fix fast."
        darkText={true}
        illustration="/illustrations/bug-tracker.png"
        heroBg="#FFA840"
        primaryLabel="Start for free"
        primaryHref="https://my.bugasura.io?go=sign_up"
        secondaryLabel="Book a demo"
        secondaryHref="https://calendly.com/get-bugasura/45min"
        featureCards={[
          { title: "AI-enriched capture",  body: "Log bugs faster — AI generates context, tags, and reproduction steps." },
          { title: "Duplicate detection",  body: "Semantic dedup catches the same bug filed twice under different names." },
          { title: "Rich attachments",     body: "Screenshots, videos, voice notes, and network logs — all attached in one click." },
          { title: "Unlimited tracking",   body: "Unlimited users, unlimited bugs, unlimited projects. Free forever." },
        ]}
      />

      <SolutionsFeatureRow
        label="AI-Enriched Bug Capture"
        labelColor="#AC1515"
        heading="Log a bug in seconds. With context that actually helps engineering fix it."
        body="Upload a screenshot or describe the issue, and Bugasura generates the reproduction steps, severity, environment details, and linked requirements automatically. Engineering gets a bug report that's worth reading, not a one-liner they have to chase down."
        items={[
          "AI-generated reproduction steps from screenshot or description",
          "Auto-tagging by severity, component, and affected requirement",
          "Upload context documents to generate richer issue descriptions",
          "Voice recording attachment — describe bugs verbally",
        ]}
        bg="#FDD9C8"
        checkColor="#AC1515"
        imageLeft={false}
      />

      <SolutionsFeatureRow
        label="Duplicate Detection"
        labelColor="#C47200"
        heading="Never file the same bug twice — or spend time figuring out if you did."
        body="The Duplicate Bug Asura monitors every incoming report and flags semantic duplicates in real time — not just exact matches, but the same underlying issue described differently by different reporters. Your backlog stays clean without manual triage overhead."
        items={[
          "Semantic duplicate detection with confidence scoring",
          "Instant Slack notification with link to original issue",
          "Auto-merge suggestion with one-click confirmation",
          "Backlog health score — track dedup improvement over time",
        ]}
        bg="#FFDAA8"
        checkColor="#C47200"
        imageLeft={true}
      />

      <SolutionsFeatureRow
        label="Defect Traceability"
        labelColor="#0077B6"
        heading="Bugs that link back to requirements — not just to a sprint."
        body="Every defect is connected to the requirement it violates and the test case that caught it. When the same area of the product keeps producing bugs, the pattern is visible — and so is the conversation with product about whether the requirement was ever correct."
        items={[
          "Defect → test case → requirement chain — automatic, not manual",
          "Recurring defect pattern detection per requirement area",
          "Defect history feeds back into the Context layer for future sprints",
          "Eagle Eye integration — defect trends in the exec quality view",
        ]}
        bg="#B2D9EC"
        checkColor="#0077B6"
        imageLeft={false}
      />

      <FeaturesPlatformFlow
        description="Defects captured here close the intelligence loop — they flow back into the Context layer as defect history, making the next sprint's risk mapping and test generation more accurate than the last."
        image="/platform-flow/Execute-Active.png"
      />

      <SolutionsTestimonial
        testimonials={[
          {
            quote: "Our testers used to spend 20 minutes writing a single bug report. With Bugasura's AI enrichment, it takes 3 minutes and the report is better.",
            name: "Vikram P.",
            role: "Engineering Lead",
            company: "QBurst",
          },
          {
            quote: "The duplicate detection alone cleaned up our backlog by 30%. We had hundreds of duplicate issues we didn't even know about — the Duplicate Bug Asura found them all in the first week.",
            name: "Tanvi S.",
            role: "QA Manager",
            company: "Hyperloop Labs",
          },
          {
            quote: "Linking defects back to the requirements they violate changed how we have conversations with product. Now when the same area keeps breaking, we can point to the requirement and ask the right question.",
            name: "Rohan M.",
            role: "Senior QA Engineer",
            company: "Zenica",
          },
        ]}
      />

      <Footer cta={{
        heading: <>The bug tracker your whole{<br />}team will actually use.</>,
        body: "Free forever. Unlimited bugs, unlimited users, unlimited projects.",
        primaryLabel: "Start for free",
        primaryHref: "https://my.bugasura.io?go=sign_up",
        secondaryLabel: "Book a demo",
        secondaryHref: "https://calendly.com/get-bugasura/45min",
      }} />
    </main>
  );
}
