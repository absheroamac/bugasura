import { Zap, Bug, Cpu } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SolutionsHero from "@/components/sections/solutions/SolutionsHero";
import SolutionsCards from "@/components/sections/solutions/SolutionsCards";
import SolutionsFeatureRow from "@/components/sections/solutions/SolutionsFeatureRow";
import SolutionsPlatformLayers from "@/components/sections/solutions/SolutionsPlatformLayers";
import SolutionsTestimonial from "@/components/sections/solutions/SolutionsTestimonial";

export const metadata = {
  title: "Bugasura for Engineering Teams — Ship with quality built in",
  description: "Quality context where developers actually work. The Bugasura MCP server brings test coverage, open defects, and risk signals into Claude and Cursor — so engineers know what they're risking before they push.",
};

export default function EngineeringTeamsPage() {
  return (
    <main className="flex flex-col gap-2">
      <Navbar />

      <SolutionsHero
        headline={<>Ship faster without shipping more bugs.</>}
        body="Quality context where developers actually work. The Bugasura MCP server brings test coverage, open defects, and risk signals into Claude and Cursor — so your engineers know what they're risking before they push."
        primaryLabel="Start for free"
        primaryHref="https://my.bugasura.io?go=sign_up"
        secondaryLabel="View MCP docs"
        secondaryHref="https://bugasura.io/mcp-server"
        illustration="/illustrations/engineering-teams.png"
        trustBadges={[
          { Icon: Zap,  iconColor: "#CC7A00", label: "Free forever" },
          { Icon: Bug,  iconColor: "#E52727", label: "Unlimited bug reports" },
          { Icon: Cpu,  iconColor: "#29A5FF", label: "MCP server included" },
        ]}
      />

      <SolutionsCards
        heading="Quality that keeps pace with your development velocity."
        intro="The fastest engineering teams aren't ignoring quality — they've built it into their workflow. Bugasura gives you the tools to move fast without the regressions that slow you down."
        bg="var(--cream)"
        cards={[
          {
            title: "Quality context in your editor",
            body: "The Bugasura MCP server connects to Claude and Cursor. Before you push a change, you can see open bugs, test coverage gaps, and requirements linked to the code you're touching — without switching tools.",
          },
          {
            title: "Bugs fixed faster, not filed slower",
            body: "AI-enriched bug reports include reproduction steps, environment context, and linked requirements automatically. Engineers spend time fixing, not interpreting. Defect cycle time drops.",
          },
          {
            title: "Agents for the systematic work",
            body: "Asuras handle web flow testing, API contract validation, and duplicate bug detection. Your team focuses on the complex, exploratory work that needs a human — not the regression suite they run on every deploy.",
          },
        ]}
      />

      <SolutionsFeatureRow
        label="MCP Server"
        labelColor="#AC1515"
        heading="Quality data inside the tools your engineers already use."
        body="Connect Bugasura to Claude Desktop or Cursor and your developers can query open defects, test coverage, and requirement status without leaving their editor. When they're about to push a change that touches a fragile module, they'll know before it's too late."
        items={[
          "Works with Claude Desktop, Cursor, VS Code, and Windsurf",
          "Query open bugs, test coverage, and requirements in natural language",
          "Create and update Bugasura issues directly from your editor",
          "Self-hosted MCP option for air-gap and enterprise environments",
        ]}
        ctaLabel="View MCP docs"
        ctaHref="https://bugasura.io/mcp-server"
        bg="#FDD9C8"
        checkColor="#AC1515"
        imageLeft={false}
      />

      <SolutionsFeatureRow
        label="Bug Tracker"
        labelColor="#C47200"
        heading="Defect reports that give engineering what they need to fix fast."
        body="A bug report that says 'it's broken on the dashboard' costs engineering half a day. A bug report with reproduction steps, console logs, environment details, and the linked requirement costs 10 minutes. Bugasura generates the second kind automatically."
        items={[
          "AI-generated reproduction steps from screenshot or description",
          "Automatic console log, network request, and environment capture",
          "Defect linked to requirements and test cases at creation time",
          "Semantic duplicate detection — the same bug doesn't get filed twice",
        ]}
        ctaLabel="Learn about the Bug Tracker"
        ctaHref="/platform/bug-tracker"
        bg="#FFDAA8"
        checkColor="#C47200"
        imageLeft={true}
      />

      <SolutionsFeatureRow
        label="Asura Agents"
        labelColor="#0077C2"
        heading="Automated coverage that runs without owning your team's time."
        body="Browser Asura, API Asura, and Duplicate Bug Asura run against your product continuously — finding regressions, validating contracts, and keeping your backlog clean. Your engineering team gets coverage they didn't have to write and maintain."
        items={[
          "Browser Asura for autonomous web flow testing",
          "API Asura for contract and regression validation on every deploy",
          "Duplicate Bug Asura cleans your backlog in real time",
          "All Asuras inherit your knowledge base — context-aware, not script-bound",
        ]}
        ctaLabel="Meet the Asuras"
        ctaHref="/asuras"
        bg="#B2D9EC"
        checkColor="#0077C2"
        imageLeft={false}
      />

      <SolutionsPlatformLayers
        intro="Engineering teams interact with Bugasura at every layer."
        contextNote="Developers get quality context through the MCP server. Bug capture feeds the Execute layer. Requirements and knowledge feed the Context layer. The whole system compounds sprint over sprint."
        layers={[
          { number: "01", label: "01 Context", title: "Knowledge Base & Requirements", desc: "The foundation quality decisions draw from", category: "Foundation" },
          { number: "02", label: "02 Refine",  title: "Risk Surface & Test Strategy",  desc: "What to test and why — before the sprint starts", category: "Strategy" },
          { number: "03", label: "03 Generate", title: "Test Management",              desc: "Sprint-aligned plans, AI-generated cases",           category: "Planning" },
          { number: "04", label: "04 Execute",  title: "MCP · Asuras · Bug Tracker",   desc: "Quality in the editor, agents in CI, bugs closed fast", category: "Day-to-day" },
        ]}
      />

      <SolutionsTestimonial
        testimonials={[
          {
            quote: "The MCP integration was the thing that finally got our developers to care about test coverage. They can see open bugs and coverage gaps right in Cursor — it's not a separate conversation anymore, it's just there when they need it.",
            name: "Rahul N.",
            role: "Engineering Manager",
            company: "TechX",
          },
          {
            quote: "Bug reports used to come in with barely enough context to reproduce the issue. Now every report has reproduction steps, logs, and a linked requirement. Our defect cycle time dropped by 60%.",
            name: "Suresh P.",
            role: "Senior Engineer",
            company: "Meridian Tech",
          },
          {
            quote: "We have Asuras running against every deploy. Regressions that used to reach production now get caught in the pipeline. It's not revolutionary — it's just good engineering, finally automated.",
            name: "Vikram A.",
            role: "CTO",
            company: "Helios Labs",
          },
        ]}
      />


      <Footer cta={{
        heading: <>Quality built into how your{<br />}engineering team works.</>,
        body: "Free for your whole team. MCP server is open source. Start in minutes.",
        primaryLabel: "Start for free",
        primaryHref: "https://my.bugasura.io?go=sign_up",
        secondaryLabel: "View MCP docs",
        secondaryHref: "https://bugasura.io/mcp-server",
      }} />
    </main>
  );
}
