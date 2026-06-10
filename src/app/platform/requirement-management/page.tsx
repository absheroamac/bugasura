import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SolutionsHero from "@/components/sections/solutions/SolutionsHero";
import SolutionsFeatureRow from "@/components/sections/solutions/SolutionsFeatureRow";
import FeaturesPlatformFlow from "@/components/sections/features/FeaturesPlatformFlow";
import SolutionsTestimonial from "@/components/sections/solutions/SolutionsTestimonial";
import DashboardEmbed from "@/components/ui/DashboardEmbed";

export const metadata = {
  title: "Requirements Management — Bugasura",
  description: "Capture structured requirements, trace them to test cases, and know instantly when a change puts coverage at risk. No more traceability matrices updated manually.",
};

export default function RequirementsPage() {
  return (
    <main className="flex flex-col gap-2">
      <Navbar />

      <SolutionsHero
        headline={<>Requirements that stay connected downstream.</>}
        body="Capture structured requirements, trace them to test cases, and know instantly when a change puts coverage at risk. No more traceability matrices updated manually at the end of a sprint."
        darkText={true}
        illustration="/illustrations/requirements.png"
        illustrationPortrait={true}
        heroBg="#FFA840"
        primaryLabel="Start for free"
        primaryHref="https://my.bugasura.io?go=sign_up"
        secondaryLabel="See it in action"
        secondaryHref="https://calendly.com/get-bugasura/45min"
        featureCards={[
          { title: "Structured capture",       body: "User stories, epics, PRDs — organised and AI-indexed from day one." },
          { title: "Dependency mapping",       body: "Understand which requirements depend on each other before tests are written." },
          { title: "End-to-end traceability",  body: "From requirement → test case → defect — all linked, never broken." },
          { title: "Change impact alerts",     body: "Requirement changes automatically flag the test cases that need revisiting." },
        ]}
      />

      <SolutionsFeatureRow
        label="Capture"
        labelColor="#AC1515"
        heading="Capture requirements the way your team actually writes them."
        body="User stories, acceptance criteria, business rules, technical specs — structured in one place with AI-assisted enrichment that adds context your team didn't know to write down."
        items={[
          "User story and epic structuring with acceptance criteria",
          "Business impact tagging — high / medium / low per requirement",
          "AI-generated context enrichment from your knowledge base",
          "Version history — know what changed and when",
        ]}
        bg="#FDD9C8"
        checkColor="#AC1515"
        imageLeft={false}
        imageSlot={<DashboardEmbed src="/dashboard-preview/plan" />}
      />

      <SolutionsFeatureRow
        label="Traceability"
        labelColor="#C47200"
        heading="Trace from requirement to test to defect — automatically."
        body="The traceability matrix used to be a spreadsheet updated by someone the night before a release. In Bugasura, traceability is live — every test case links to the requirement it covers, every defect links to the test that caught it."
        items={[
          "Live traceability matrix — no manual updates",
          "Requirement coverage percentage per sprint",
          "Defect-to-requirement linkage for root cause clarity",
          "Exportable traceability report for audit and sign-off",
        ]}
        bg="#FFDAA8"
        checkColor="#C47200"
        imageLeft={true}
        imageSlot={<DashboardEmbed src="/dashboard-preview" />}
      />

      <SolutionsFeatureRow
        label="Manage Test Data"
        labelColor="#0077B6"
        heading="Test data that's structured, versioned, and always in sync with your requirements."
        body="Test data management in most QA tools is an afterthought — a folder of CSV files no one trusts. In Bugasura, test data is a first-class entity linked to the requirements it supports. When a requirement changes, the test data sets that cover it are flagged for review automatically."
        items={[
          "Test data sets linked directly to requirements and test cases",
          "Version control — know which data set was used in which test run",
          "Environment-specific data sets: dev / staging / production variants",
          "Change impact alerts when linked requirements are updated",
        ]}
        bg="#B2D9EC"
        checkColor="#0077B6"
        imageLeft={false}
        imageSlot={<DashboardEmbed src="/dashboard-preview" />}
      />

      <SolutionsFeatureRow
        label="User Journey Workflow"
        labelColor="#555555"
        heading="Map requirements to end-to-end user journeys — not just individual stories."
        body="User stories describe individual actions. User journeys describe what a real customer actually does across your product. Bugasura lets you map requirements to complete journeys — so your test strategy covers the flow a user actually takes, not just the endpoint they arrive at."
        items={[
          "Journey builder — map multi-step user flows from linked requirements",
          "Journey-to-requirement traceability — every step covered",
          "Identify coverage gaps across the full flow, not just per story",
          "Journey templates reusable across product areas and sprints",
        ]}
        bg="#DCDCDC"
        checkColor="#555555"
        imageLeft={true}
        imageSlot={<DashboardEmbed src="/dashboard-preview/plan" />}
      />

      <FeaturesPlatformFlow
        description="Requirements captured here inform the Refine layer's risk surface map — so test case generation is always driven by what your product actually needs to do, not by what's easiest to test."
        image="/platform-flow/Context-Active.png"
      />

      <SolutionsTestimonial
        testimonials={[
          {
            quote: "We used to have a traceability spreadsheet that was always two sprints behind. Now our requirements, tests, and defects are connected in real time. The coverage gap alerts alone saved us from shipping broken features twice last quarter.",
            name: "Suresh R.",
            role: "QA Manager",
            company: "FinTech startup",
          },
          {
            quote: "The moment a requirement changes, we know exactly which test cases are affected. What used to be a two-hour manual exercise is now instant. Our QA lead actually trusts the traceability data now.",
            name: "Meera T.",
            role: "VP Product",
            company: "Cloudbase",
          },
          {
            quote: "Linking requirements to test cases at creation time sounds simple, but it changes everything downstream. Your test strategy is grounded from the start — not reverse-engineered at the end of the sprint.",
            name: "Karthik N.",
            role: "Engineering Manager",
            company: "Prism Health",
          },
        ]}
      />

      <Footer cta={{
        heading: <>Requirements connected to your  whole QA system.</>,
        body: "Free for unlimited users and projects. No setup, no import friction.",
        primaryLabel: "Start for free",
        primaryHref: "https://my.bugasura.io?go=sign_up",
        secondaryLabel: "Book a demo",
        secondaryHref: "https://calendly.com/get-bugasura/45min",
      }} />
    </main>
  );
}
