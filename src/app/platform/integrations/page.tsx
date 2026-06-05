import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SolutionsHero from "@/components/sections/solutions/SolutionsHero";
import SolutionsFeatureRow from "@/components/sections/solutions/SolutionsFeatureRow";
import FeaturesPlatformFlow from "@/components/sections/features/FeaturesPlatformFlow";
import SolutionsTestimonial from "@/components/sections/solutions/SolutionsTestimonial";

export const metadata = {
  title: "MCP Server & Integrations — Bugasura",
  description: "The Bugasura MCP server puts your quality data — requirements, defect history, test coverage, risk signals — directly inside Claude and Cursor. No tab switching, no copy-pasting.",
};

const INTEGRATION_LOGOS = [
  { name: "GitHub",  file: "github"  },
  { name: "Jira",    file: "jira"    },
  { name: "Slack",   file: "slack"   },
  { name: "Linear",  file: "linear"  },
  { name: "Asana",   file: "asana"   },
  { name: "ClickUp", file: "clickup" },
  { name: "Zoho",    file: "zoho"    },
  { name: "GitLab",  file: "gitlab"  },
  { name: "Notion",  file: "notion"  },
  { name: "Trello",  file: "trello"  },
];

function IntegrationLogoGrid() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "16px 12px",
      }}
    >
      {INTEGRATION_LOGOS.map(({ name, file }) => (
        <div
          key={name}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div style={{
            background: "rgba(255,255,255,0.4)",
            borderRadius: "16px",
            padding: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <Image
              src={`/integrations/${file}.svg`}
              alt={name}
              width={64}
              height={64}
              style={{ objectFit: "contain" }}
            />
          </div>
          <span
            style={{
              fontFamily: "'Clash Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              color: "rgba(30,30,30,0.7)",
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            {name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function IntegrationsPage() {
  return (
    <main className="flex flex-col gap-2">
      <Navbar />

      <SolutionsHero
        headline={<>Quality context where developers actually work.</>}
        body="The Bugasura MCP server puts your quality data — requirements, defect history, test coverage, risk signals — directly inside Claude and Cursor. No tab switching, no copy-pasting, no excuses for skipping tests."
        darkText={true}
        illustration="/illustrations/integrations.png"
        heroBg="#FFA840"
        primaryLabel="Start for free"
        primaryHref="https://my.bugasura.io?go=sign_up"
        secondaryLabel="View MCP docs"
        secondaryHref="https://bugasura.io/mcp-server"
        featureCards={[
          { title: "MCP Server",          body: "Native integration with Claude, Cursor, VS Code, Windsurf, and any MCP-compatible AI tool." },
          { title: "REST API",            body: "Full programmatic access to your projects, issues, test runs, and requirements." },
          { title: "Chrome Reporter",     body: "Capture bugs from any web page — with screenshots, console logs, and network requests." },
          { title: "Native integrations", body: "GitHub, Jira, Asana, Slack, ClickUp, Zoho, Linear — connected out of the box." },
        ]}
      />

      <SolutionsFeatureRow
        label="MCP Server"
        labelColor="#AC1515"
        heading="Your AI coding assistant, now with full QA context."
        body="Connect Bugasura's MCP server to Claude or Cursor and your developers can query test coverage, open defects, and requirement status without leaving their editor. When they're about to ship a change, they'll know what's at risk before they push."
        items={[
          "Works with Claude Desktop, Cursor, VS Code, and Windsurf",
          "Query open bugs, test coverage, and requirements in natural language",
          "Create and update Bugasura issues directly from your editor",
          "Self-hosted MCP option for air-gap and enterprise environments",
        ]}
        bg="#FDD9C8"
        checkColor="#AC1515"
        imageLeft={false}
      />

      <SolutionsFeatureRow
        label="Chrome Reporter"
        labelColor="#C47200"
        heading="Capture bugs from anywhere — in seconds."
        body="The Bugasura Chrome Reporter turns any tester into a fast, precise bug reporter. One click captures the page state, screenshot, console logs, and network requests — then AI generates the report. Works on any web app, no setup required."
        items={[
          "One-click bug capture from any web page",
          "Automatic screenshot, console log, and network request capture",
          "AI-generated bug description from the captured state",
          "Sends directly to your Bugasura project — no copy-pasting URLs",
        ]}
        bg="#FFDAA8"
        checkColor="#C47200"
        imageLeft={true}
      />

      <SolutionsFeatureRow
        label="Tool Connectivity"
        labelColor="#0077B6"
        heading="Connect the tools your team already uses."
        body="Bugasura doesn't replace your existing stack — it connects to it. Bugs sync to Jira. Commits link to issues in GitHub. Status updates post to Slack. Coverage reports surface in your CI pipeline. One QA system that talks to everything else."
        items={[]}
        itemsSlot={<IntegrationLogoGrid />}
        bg="#B2D9EC"
        checkColor="#0077B6"
        imageLeft={false}
      />

      <FeaturesPlatformFlow
        description="MCP and integrations aren't a layer — they're how the platform surfaces everywhere. The entire Bugasura context is accessible to any MCP-compatible AI tool, meaning quality intelligence lives inside every developer's workflow."
        image="/platform-flow/Execute-Active.png"
      />

      <SolutionsTestimonial
        testimonials={[
          {
            quote: "The MCP integration was the thing that finally got our developers to care about test coverage. They can see open bugs and coverage gaps right in Cursor — it's not separate from their workflow anymore. It's just there.",
            name: "Rahul N.",
            role: "Engineering Manager",
            company: "TechX",
          },
          {
            quote: "The Chrome Reporter completely changed how our manual testers report bugs. One click, AI writes the report, it's in the backlog. What used to take 15 minutes now takes 30 seconds.",
            name: "Divya K.",
            role: "QA Lead",
            company: "Stackframe",
          },
          {
            quote: "We have Bugasura syncing to Jira, GitHub, and Slack. The team barely notices it's a separate tool — it just shows up where they already are.",
            name: "Arun T.",
            role: "CTO",
            company: "Pillar Systems",
          },
        ]}
      />

      <Footer cta={{
        heading: <>Connect Bugasura to where{<br />}your team works.</>,
        body: "MCP server is open source. REST API is free. Chrome Reporter is free. Start in minutes.",
        primaryLabel: "Start for free",
        primaryHref: "https://my.bugasura.io?go=sign_up",
        secondaryLabel: "View MCP docs",
        secondaryHref: "https://bugasura.io/mcp-server",
      }} />
    </main>
  );
}
