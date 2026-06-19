import { Users, Infinity, Star, Puzzle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SolutionsHero from "@/components/sections/solutions/SolutionsHero";
import SolutionsCards from "@/components/sections/solutions/SolutionsCards";
import SolutionsFeatureRow from "@/components/sections/solutions/SolutionsFeatureRow";
import SolutionsPlatformLayers from "@/components/sections/solutions/SolutionsPlatformLayers";
import SolutionsTestimonial from "@/components/sections/solutions/SolutionsTestimonial";
import DashboardEmbed from "@/components/ui/DashboardEmbed";
import PlatformLogoCarousel from "@/components/sections/platform/PlatformLogoCarousel";

export const metadata = {
  title: "Bugasura for QA Teams — Deeper coverage, sharper risk decisions",
  description: "AI-assisted development is raising the bar for what quality means. Bugasura gives your QA team the intelligence and agents to raise their game with it.",
};

export default function QATeamsPage() {
  return (
    <main className="flex flex-col gap-2">
      <Navbar />

      <SolutionsHero
        headline={<>Two moves ahead in the post-AI world.</>}
        body="AI-assisted development is raising the bar for what quality means. Bugasura gives your QA team the intelligence and agents to raise their game with it — deeper coverage, sharper risk decisions, and test strategies that reflect what actually matters to your users."
        primaryLabel="Start for free"
        primaryHref="https://my.bugasura.io?go=sign_up"
        secondaryLabel="See it in action"
        secondaryHref="https://calendly.com/get-bugasura/45min"
        illustration="/illustrations/qa-teams.png"
        trustBadges={[
          { Icon: Users,    iconColor: "#29A5FF", label: "50,000+ QA engineers worldwide", desc: "Trusted by QA teams at companies of all sizes across 80+ countries" },
          { Icon: Infinity, iconColor: "#CC7A00", label: "Free forever",                   desc: "Full platform access, unlimited users and projects — no credit card" },
          { Icon: Star,     iconColor: "#E52727", label: "#1 on Product Hunt",             desc: "Top-ranked QA tool by the developer community" },
          { Icon: Puzzle,   iconColor: "#0077C2", label: "25+ integrations",               desc: "GitHub, Jira, Slack, Asana, ClickUp, Linear, and more" },
        ]}
      />

      <PlatformLogoCarousel />

      <SolutionsCards
        heading="Quality engineering gets stronger when AI gets faster."
        intro="The best QA teams aren't running to keep up with AI development — they're using it to go deeper than they ever could manually. Here's what that looks like in practice."
        bg="var(--cream)"
        cards={[
          {
            eyebrow: "AI-Assisted Testing",
            eyebrowColor: "#E52727",
            title: "From writing tests to making test decisions",
            body: "Bugasura generates the test cases. Your QA lead reviews, refines, and approves them. The expert judgment stays with your team — the tedious first draft doesn't.",
            image: "/qa/card-01.png",
          },
          {
            eyebrow: "Risk Intelligence",
            eyebrowColor: "#C47200",
            title: "From gut-feel coverage to risk-mapped coverage",
            body: "Coverage decisions backed by actual risk data — requirements, defect history, business impact — not sprint pressure and intuition. Test what matters most, not what's easiest to test.",
            image: "/qa/card-02.png",
          },
          {
            eyebrow: "Team Knowledge",
            eyebrowColor: "#0077C2",
            title: "From individual knowledge to team intelligence",
            body: "The institutional knowledge your senior testers carry — which modules are fragile, which edge cases always break — captured in the Knowledge Base and available to everyone, every sprint.",
            image: "/qa/card-03.png",
          },
        ]}
      />

      <SolutionsFeatureRow
        label="Test Management"
        labelColor="#AC1515"
        heading="Test strategies built on real product understanding — not written from scratch each sprint."
        body="Bugasura generates test cases from your requirements, knowledge base, and risk surface. A complete, prioritised first draft that your QA lead reviews and approves. The result is deeper coverage in less time — because you're refining expert-quality output, not starting from a blank page."
        items={[
          "AI-generated test cases from product context and requirements",
          "Risk-prioritised — highest-impact cases surface first for review",
          "Edge case and negative scenario generation included automatically",
          "Sprint-ready test plans generated alongside development scope",
        ]}
        ctaLabel="Learn about Test Management"
        ctaHref="https://bugasura.io/test-management"
        bg="#FDD9C8"
        checkColor="#AC1515"
        imageLeft={false}
        imageSlot={<DashboardEmbed src="/dashboard-preview/sprint-generate" />}
      />

      <SolutionsFeatureRow
        label="Asura Agents"
        labelColor="#C47200"
        heading="Agents that test while your team focuses on what needs human judgment."
        body="Asuras handle the systematic, repeatable execution — web flows, API contracts, backlog deduplication. Your testers focus on the complex, ambiguous, exploratory testing that still needs a human brain. The right work for the right intelligence."
        items={[
          "Browser Asura for end-to-end web flow testing",
          "API Asura for contract and regression validation",
          "Duplicate Bug Asura keeps your backlog clean automatically",
          "All agents inherit platform context — not just selectors",
        ]}
        ctaLabel="Meet the Asuras"
        ctaHref="/asuras"
        bg="#FFDAA8"
        checkColor="#C47200"
        imageLeft={true}
        imageSlot={<DashboardEmbed src="/dashboard-preview/asura-agents" />}
      />

      <SolutionsFeatureRow
        label="Knowledge Base"
        labelColor="#0077C2"
        heading="The QA knowledge your team builds, available to every tester — forever."
        body="Your best QA engineer's knowledge of fragile modules, recurring failure patterns, and product edge cases — externalised and searchable. New team members ramp faster. Every tester makes decisions with the same depth of context. And nothing is lost when someone moves on."
        items={[
          "Centralise product, tech, and historical defect knowledge",
          "AI-indexed and semantically searchable — find relevant context fast",
          "Stale content alerts when documentation falls out of date",
          "Feeds directly into test generation and Asura execution context",
        ]}
        ctaLabel="Learn about the Knowledge Base"
        ctaHref="https://bugasura.io/knowledge-base"
        bg="#B2D9EC"
        checkColor="#0077C2"
        imageLeft={false}
        imageSlot={<DashboardEmbed src="/dashboard-preview/knowledge-base" />}
      />

      <SolutionsPlatformLayers
        intro="QA teams use the full platform. Here's how each layer helps."
        contextNote="For QA teams, all four layers matter — Context gives the foundation, Refine maps risk, Generate creates test plans, Execute runs them and closes the loop."
        layers={[
          { number: "01", label: "01 Context", title: "Knowledge Base & Requirements", desc: "The foundation every test decision draws from", category: "Foundation" },
          { number: "02", label: "02 Refine",  title: "Testpert Q&A & Risk Mapping",   desc: "Coverage prioritised against real product risk",  category: "Strategy" },
          { number: "03", label: "03 Generate", title: "Test Management",              desc: "Sprint-aligned plans, AI-generated cases",          category: "Execution planning" },
          { number: "04", label: "04 Execute",  title: "Asuras · Bug Tracker · Reporting", desc: "Run, capture, and close the loop",             category: "Day-to-day" },
        ]}
      />

      <SolutionsTestimonial
        testimonials={[
          {
            quote: "Bugasura changed how we think about what QA is. We used to measure ourselves by how many tests we ran. Now we measure by how well we understand product risk — and that's a much better measure of quality engineering.",
            name: "Kiran R.",
            role: "QA Lead",
            company: "TechX",
          },
          {
            quote: "The test case generation alone saves our team hours every sprint. But the real value is the coverage decisions it makes — we're testing the right things now, not just the easy things.",
            name: "Priya M.",
            role: "Senior QA Engineer",
            company: "Stackline",
          },
          {
            quote: "New testers ramp up in days, not months. The Knowledge Base means the context that used to live in one person's head is now available to everyone on the team.",
            name: "Arjun D.",
            role: "QA Manager",
            company: "Helios Labs",
          },
        ]}
      />


      <Footer cta={{
        heading: <>Build the strongest QA team in your competitive set.</>,
        body: "Free for your whole team. No seat limits, no feature gates on the core platform.",
        primaryLabel: "Start for free",
        primaryHref: "https://my.bugasura.io?go=sign_up",
        secondaryLabel: "See it in action",
        secondaryHref: "https://calendly.com/get-bugasura/45min",
      }} />
    </main>
  );
}
