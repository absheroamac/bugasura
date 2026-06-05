import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SolutionsHero from "@/components/sections/solutions/SolutionsHero";
import SolutionsFeatureRow from "@/components/sections/solutions/SolutionsFeatureRow";
import FeaturesPlatformFlow from "@/components/sections/features/FeaturesPlatformFlow";
import SolutionsTestimonial from "@/components/sections/solutions/SolutionsTestimonial";

export const metadata = {
  title: "Test Management — Bugasura",
  description: "Plan test cycles, track coverage, and manage execution — in a system that already knows your requirements and risk surface. Not a standalone tool. The execution layer of a connected platform.",
};

export default function TestManagementPage() {
  return (
    <main className="flex flex-col gap-2">
      <Navbar />

      <SolutionsHero
        headline={<>Test management built for teams that ship with AI.</>}
        body="Plan test cycles, track coverage, and manage execution — in a system that already knows your requirements and risk surface. Not a standalone tool. The execution layer of a connected platform."
        darkText={true}
        illustration="/illustrations/test-management.png"
        heroBg="#FFA840"
        primaryLabel="Start for free"
        primaryHref="https://my.bugasura.io?go=sign_up"
        secondaryLabel="Book a demo"
        secondaryHref="https://calendly.com/get-bugasura/45min"
        featureCards={[
          { title: "Sprint-aligned plans",      body: "Test plans structured around your sprint cycle — generated, not written from scratch." },
          { title: "AI test case generation",   body: "Cases generated from your requirements and risk map, not from templates." },
          { title: "Test run tracking",         body: "Pass, fail, blocked — tracked per run with linked defects and notes." },
          { title: "Coverage visibility",       body: "Know your risk-weighted coverage — not just line coverage that looks good in reports." },
        ]}
      />

      <SolutionsFeatureRow
        label="Test Case Generation"
        labelColor="#AC1515"
        heading="Test cases generated from context — not written from scratch every sprint."
        body="Bugasura generates test cases from your requirements, knowledge base, and risk surface map. A senior QA lead reviews and approves. The result is coverage that reflects actual product risk, not the path of least resistance."
        items={[
          "AI-generated test cases from ingested product context",
          "Risk-weighted prioritisation — high-impact cases surface first",
          "Edge case and negative scenario generation",
          "Human expert review before any case is finalised",
        ]}
        bg="#FDD9C8"
        checkColor="#AC1515"
        imageLeft={false}
      />

      <SolutionsFeatureRow
        label="Sprint Planning"
        labelColor="#C47200"
        heading="Sprint-aligned test plans without the Sunday night scramble."
        body="Your sprint scope defines your test scope. Bugasura generates a structured test plan alongside your development sprint — so QA starts with a plan on Monday, not a question mark."
        items={[
          "Auto-generated sprint test plans from linked requirements",
          "Manual, automated, and Asura-run test types in one plan",
          "Test assignment across team members with status tracking",
          "Rollover handling — unrun cases carry to the next sprint correctly",
        ]}
        bg="#FFDAA8"
        checkColor="#C47200"
        imageLeft={true}
      />

      <SolutionsFeatureRow
        label="Coverage Tracking"
        labelColor="#0077B6"
        heading="Coverage that means something to engineering leadership."
        body="Percentage coverage of test cases run is a vanity metric. Bugasura tracks coverage against the risk surface — so when your Head of QA says &ldquo;we&apos;re 80% covered,&rdquo; it means 80% of the high-impact scenarios have been tested, not 80% of lines."
        items={[
          "Risk-weighted coverage score per sprint",
          "Coverage gaps mapped back to specific requirements",
          "Eagle Eye integration — exec-level quality health view",
          "Trend tracking across sprints — is quality improving?",
        ]}
        bg="#B2D9EC"
        checkColor="#0077B6"
        imageLeft={false}
      />

      <FeaturesPlatformFlow
        description="Test Management sits at the Generate layer — it receives the risk surface from Testpert and hands off test plans to the Execute layer. Test results feed back into the Context layer, making every subsequent sprint smarter."
        image="/platform-flow/Generate-Active.png"
      />

      <SolutionsTestimonial
        testimonials={[
          {
            quote: "We went from spending 3 hours writing test cases for each sprint to reviewing AI-generated cases in 40 minutes. The quality actually went up because Bugasura catches edge cases our team would have missed under time pressure.",
            name: "Arjun K.",
            role: "Senior QA Engineer",
            company: "CloudNix",
          },
          {
            quote: "Having the test plan generated automatically from our sprint requirements means QA is never playing catch-up. We start every sprint with a plan that's already aligned to what's being built.",
            name: "Sana R.",
            role: "QA Lead",
            company: "Meridian Tech",
          },
          {
            quote: "Risk-weighted coverage changed how we report to leadership. We stopped talking about test counts and started talking about which product risks are covered. That's a much more useful conversation.",
            name: "Vikram P.",
            role: "Head of QA",
            company: "Fenix Systems",
          },
        ]}
      />

      <Footer cta={{
        heading: <>Test management that knows{<br />}what you&apos;re building.</>,
        body: "Free for unlimited users, unlimited test cases, unlimited sprints.",
        primaryLabel: "Start for free",
        primaryHref: "https://my.bugasura.io?go=sign_up",
        secondaryLabel: "Book a demo",
        secondaryHref: "https://calendly.com/get-bugasura/45min",
      }} />
    </main>
  );
}
