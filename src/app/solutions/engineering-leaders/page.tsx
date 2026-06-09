import { ShieldCheck, Layers, TrendingUp, Users } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SolutionsHero from "@/components/sections/solutions/SolutionsHero";
import SolutionsCards from "@/components/sections/solutions/SolutionsCards";
import SolutionsFeatureRow from "@/components/sections/solutions/SolutionsFeatureRow";
import SolutionsPlatformLayers from "@/components/sections/solutions/SolutionsPlatformLayers";
import SolutionsTestimonial from "@/components/sections/solutions/SolutionsTestimonial";
import DashboardEmbed from "@/components/ui/DashboardEmbed";

export const metadata = {
  title: "Bugasura for Engineering Leaders — Quality risk visibility before production",
  description: "Eagle Eye gives engineering and product leaders strategic quality visibility — where risk is concentrated, whether QA coverage is keeping pace with development velocity, and whether the features being shipped are actually ready to ship.",
};

export default function LeadersPage() {
  return (
    <main className="flex flex-col gap-2">
      <Navbar />

      <SolutionsHero
        headline={<>See quality risk<br/>before it hits production.</>}
        body="Eagle Eye gives engineering and product leaders strategic quality visibility — where risk is concentrated, whether QA coverage is keeping pace with development velocity, and whether the features being shipped are actually ready to ship."
        primaryLabel="Book a demo"
        primaryHref="https://calendly.com/get-bugasura/45min"
        secondaryLabel="Start for free"
        secondaryHref="https://my.bugasura.io?go=sign_up"
        illustration="/illustrations/engineering-leaders.png"
        illustrationPortrait={true}
        trustBadges={[
          { Icon: ShieldCheck, iconColor: "#29A5FF", label: "SOC 2 Type II certified" },
          { Icon: Layers,      iconColor: "#CC7A00", label: "Enterprise ready" },
          { Icon: TrendingUp,  iconColor: "#E52727", label: "Compounds over time" },
          { Icon: Users,       iconColor: "#0077C2", label: "50,000+ engineers worldwide" },
        ]}
      />

      <SolutionsCards
        heading="You're making quality and shipping decisions without quality data."
        intro="Most quality problems aren't discovered in testing — they're discovered in production. Here's what's causing the blind spot."
        bg="var(--cream)"
        cards={[
          {
            title: "Quality visibility only exists when something breaks",
            body: "You find out about quality problems from customer complaints, not from your quality dashboard. By then the cost — in engineering time, customer trust, and revenue — is already real.",
          },
          {
            title: "Development velocity is accelerating but QA isn't",
            body: "AI co-pilots ship features faster than before. Your QA team size and processes are the same. That gap doesn't stay invisible — it compounds into release risk that eventually becomes a production incident.",
          },
          {
            title: "Shipping confidence is based on gut feel, not coverage data",
            body: "As a product owner, you're deciding whether a feature is ready to ship. Without requirement-to-test traceability, that decision is based on what your team tells you — not on what's actually been validated against what was promised.",
          },
        ]}
      />

      <SolutionsFeatureRow
        label="Eagle Eye"
        labelColor="#AC1515"
        heading="Strategic quality visibility — not a dashboard of test counts."
        body="Eagle Eye surfaces what's breaking, where quality risk is concentrated by product area, and how coverage is trending against development velocity. Built for the engineering and product leadership conversation — not the daily standup."
        items={[
          "Quality risk heatmap by product area and feature",
          "Development velocity vs. QA coverage trend — the gap made visible",
          "Open critical defects with business impact scoring",
          "Sprint-over-sprint quality health trend",
        ]}
        ctaLabel="Learn about Eagle Eye"
        ctaHref="https://bugasura.io/eagle-eye"
        bg="#FDD9C8"
        checkColor="#AC1515"
        imageLeft={false}
        imageSlot={<DashboardEmbed src="/dashboard-preview" />}
      />

      <SolutionsFeatureRow
        label="Requirements Traceability"
        labelColor="#C47200"
        heading="Know exactly which requirements have been tested — before you ship."
        body="For product owners, the most important question before a release isn't 'how many tests passed' — it's 'have the things we promised actually been validated?' Bugasura's requirements traceability gives you a live, requirement-level view of what's covered and what isn't."
        items={[
          "Requirement → test case → defect chain — live, not manually updated",
          "Coverage percentage per requirement and feature area",
          "Uncovered requirements flagged before release sign-off",
          "Change impact visibility — what needs retesting when a requirement shifts",
        ]}
        ctaLabel="Learn about Traceability"
        ctaHref="https://bugasura.io/traceability"
        bg="#FFDAA8"
        checkColor="#C47200"
        imageLeft={true}
        imageSlot={<DashboardEmbed src="/dashboard-preview/plan" />}
      />

      <SolutionsFeatureRow
        label="Platform Intelligence"
        labelColor="#0077C2"
        heading="A platform that gets smarter every sprint — not one you reset each quarter."
        body="Every sprint adds to Bugasura's understanding of your product's risk surface. Defect patterns, coverage gaps, and high-risk areas are tracked longitudinally. By sprint 10, your QA is materially better than sprint 1 — without adding headcount."
        items={[
          "Cumulative defect pattern detection across release history",
          "Risk surface that evolves as the product evolves",
          "Coverage debt tracking — what's been consistently undertested",
          "Regression risk identification flagged before each release",
        ]}
        ctaLabel="See the Platform"
        ctaHref="https://bugasura.io/platform"
        bg="#B2D9EC"
        checkColor="#0077C2"
        imageLeft={false}
        imageSlot={<DashboardEmbed src="/dashboard-preview" />}
      />

      <SolutionsFeatureRow
        label="Testpert"
        labelColor="#555555"
        heading="Expert-level QA strategy at the scale your velocity demands."
        body="Testpert is the AI intelligence layer that makes strategic test decisions the way your most experienced QA lead would — mapping risk against business impact, surfacing hidden coverage gaps, and keeping expert judgment in the loop. Available as a Custom/Enterprise add-on."
        items={[
          "Expert Q&A engine for risk discovery before sprint planning",
          "Risk surface mapping against business and user impact",
          "Expert-in-the-loop mode — humans approve, AI prepares",
          "Private AI processing — your product data never leaves your environment",
        ]}
        ctaLabel="Meet Testpert"
        ctaHref="https://bugasura.io/testpert"
        bg="#DCDCDC"
        checkColor="#555555"
        imageLeft={true}
        imageSlot={<DashboardEmbed src="/dashboard-preview/plan" />}
      />

      <SolutionsPlatformLayers
        intro="The leadership view of the Bugasura platform."
        contextNote="For engineering and product leaders, the value is the whole system — a platform that builds quality intelligence over time, giving you visibility that individual tools never can."
        layers={[
          { number: "01", label: "01 Context", title: "Knowledge Base & Requirements", desc: "Foundation — requirement traceability for product owners", category: "Shipping confidence" },
          { number: "02", label: "02 Refine",  title: "Risk Mapping & Testpert",       desc: "Strategic coverage prioritisation",                        category: "Strategy" },
          { number: "03", label: "03 Generate", title: "Test Management",              desc: "Sprint-aligned coverage execution",                         category: "Execution" },
          { number: "04", label: "04 Execute",  title: "Eagle Eye · Asuras · Bug Tracker", desc: "Quality visibility and risk surface for leadership",    category: "Your view" },
        ]}
      />

      <SolutionsTestimonial
        testimonials={[
          {
            quote: "As a product owner I used to rely on my QA lead telling me we were ready to ship. Now I can see it — which requirements are covered, where the gaps are, what's at risk. That's a completely different level of confidence before a release.",
            name: "Neha P.",
            role: "Product Owner",
            company: "Cloudnix",
          },
          {
            quote: "Eagle Eye gave us visibility we never had before. We can now see quality risk concentrated by product area and make release decisions based on data, not gut feel.",
            name: "Rahul S.",
            role: "VP Engineering",
            company: "Orbify",
          },
          {
            quote: "By sprint 8 the platform had learned our product's risk surface well enough that our post-release defect rate dropped significantly. It genuinely compounds over time.",
            name: "Divya K.",
            role: "CTO",
            company: "Luminary AI",
          },
        ]}
      />


      <Footer cta={{
        heading: <>See what your quality risk actually looks like.</>,
        body: "Book a 30-minute demo — we'll show you Eagle Eye against your actual product context.",
        primaryLabel: "Book a demo",
        primaryHref: "https://calendly.com/get-bugasura/45min",
        secondaryLabel: "Start for free",
        secondaryHref: "https://my.bugasura.io?go=sign_up",
      }} />
    </main>
  );
}
