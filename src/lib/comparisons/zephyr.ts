import type { ComparisonData } from "./types";

export const zephyr: ComparisonData = {
  slug: "zephyr-alternative",
  competitor: "Zephyr",
  competitorLabel: "Zephyr (Marketplace apps)",
  metaTitle: "Zephyr Alternative: Bugasura vs Zephyr Test Management",
  metaDescription:
    "Essential, Standard, Advanced, Enterprise or QMetry? One Bugasura platform instead, free for unlimited users. Pricing compared.",
  heroImage: "/Comparison/zephyr.png",
  hero: {
    line1: "One Product",
    line2: "Where Zephyr Gives",
    line3: "You Five!",
    body: "Zephyr Essential, Zephyr Standard, Zephyr Advanced, Zephyr Enterprise, QMetry. Two purchasing routes, different features in each, and a migration between two of them that drops your execution audit logs on the floor. Bugasura is one platform, free for unlimited users, that works with Jira without being licensed against it.",
  },
  whyHeading: ["Why Bugasura is the", "best FREE Zephyr alternative"],
  whyIntro: "Zephyr is a family of products with an edition matrix. Bugasura is one platform.",
  reasons: [
    {
      title: "Context Before Test Cases",
      body: "Zephyr manages the test cases you write. Bugasura decides what is worth writing: product docs in the knowledge base, requirements linked to tests, defect history showing recurring failure points, then a risk map that allocates coverage by business impact rather than by count.",
    },
    {
      title: "One Thing to Buy",
      body: "No edition matrix, no separate standalone product for on-premise, no 20-user minimum.",
    },
    {
      title: "Priced Against Nothing",
      body: "A hundred Jira seats with ten testers pays $681 a month for Zephyr, $8,172 a year, $817 per actual tester. Bugasura charges per nobody.",
    },
    {
      title: "No Migration That Loses Your History",
      body: "SmartBear's own upgrade guide says the Squad to Essential move drops BDD data, execution audit logs, saved JQL filters and custom field change history, and that delta data created during the migration cannot be migrated afterwards.",
    },
    {
      title: "Capture Instead of Upload",
      body: "Chrome Reporter, web widget and Android reporter, with session replay, annotation and device info. Zephyr has no built-in capture tool.",
    },
  ],
  painHeading: "Want to know why so many teams want to move away from Zephyr like you?",
  pains: [
    {
      title: "Licensing.",
      body: "One Capterra reviewer put it plainly: \"You can't do individual licenses… you have to pay for every JIRA user; which is insane,\" describing roughly $15,000 a year for a mid-sized organisation.",
    },
    {
      title: "Which product am I buying?",
      body: "Squad became Essential. Scale is now sold as Zephyr in Standard and Advanced. Enterprise and QMetry are separate products entirely. Every comparison written before 2026 describes a range that no longer exists.",
    },
    {
      title: "The upgrade path costs you data.",
      body: "See the migration losses above, from SmartBear's own documentation.",
    },
  ],
  tableHeading: ["See a feature by feature", "comparison of Zephyr vs Bugasura"],
  tableIntro: "A straight look at what Zephyr gives you versus what Bugasura gives you.",
  rows: [
    { label: "100 Jira users, 10 testers", bugasura: "$0", competitor: "$681/month, $8,172/year, which is $817 per actual tester" },
    { label: "Free plan", bugasura: "Full platform. Unlimited users, 50 GB", competitor: "None" },
    { label: "Runs without Jira", bugasura: "Yes", competitor: "No. Only Enterprise and QMetry, as separate products" },
    { label: "Native defect tracking", bugasura: "Yes, auto-linked to the case that caught it", competitor: "Jira issues" },
    { label: "Knowledge base feeding generation", bugasura: "Yes", competitor: "No" },
    { label: "Bug capture with evidence", bugasura: "Chrome, web widget and Android reporters. Session replay, annotation, voice notes", competitor: "No built-in capture tool" },
    { label: "Risk-weighted coverage", bugasura: "Scored per sprint", competitor: "Coverage by linked requirement" },
    { label: "Defect history analysis", bugasura: "Recurring failure points and regression patterns", competitor: "No" },
    { label: "Agentic execution", bugasura: "Asuras run browser flows and API contracts. Early access", competitor: "No" },
    { label: "No-code automation", bugasura: "Via Bugasura Automation", competitor: "HaloAI, limited on Standard, expanded on Advanced" },
    { label: "Automation coverage", bugasura: "Bugasura Automation: web, API, mobile, mSite and OTT TV", competitor: "Parallel and cross-browser on Advanced" },
    { label: "Leadership reporting", bugasura: "Eagle Eye, included", competitor: "31 canned reports" },
    { label: "Integrations and MCP", bugasura: "25+ integrations and an MCP server for Claude and Cursor, included", competitor: "Jira ecosystem. MCP on both editions" },
    { label: "Interface languages", bugasura: "24", competitor: "English" },
    { label: "On-premise, SSO and SAML", bugasura: "Custom plan", competitor: "Zephyr Enterprise or Data Center, 20-user minimum" },
    { label: "SOC 2 Type II", bugasura: "Yes", competitor: "Yes" },
  ],
  tableNote: "Zephyr pricing read from the Atlassian Marketplace calculator, monthly billing. SmartBear publishes no rate card, so re-verify monthly.",
  faqHeading: "Zephyr and Bugasura: questions people actually ask",
  faqs: [
    {
      q: "What is the difference between Zephyr Squad, Zephyr Scale and Zephyr Enterprise?",
      a: "Zephyr Squad was renamed Zephyr Essential. Zephyr Scale is now sold as \"Zephyr\" in Standard and Advanced editions. Zephyr Enterprise is a separate non-Marketplace product, on-premise or SmartBear-hosted, with a 20-user minimum. QMetry is positioned separately again.",
    },
    {
      q: "Is there a free alternative to Zephyr?",
      a: "Yes. Bugasura's full platform is free for unlimited users: test management, requirements, knowledge base, AI issue tracking and 25+ integrations, with no seat cap. Zephyr's Jira apps have no free tier, and Zephyr Enterprise is quote-only with a 20-user minimum.",
    },
    {
      q: "How much does Zephyr cost?",
      a: "Read from the Atlassian Marketplace calculator on monthly billing: $10 a month flat up to 10 Jira users, $340.50 at 50 users and $681 at 100 users on Standard. Advanced is $15, $436.50 and $873 at the same tiers. The invoice is calculated on Jira seats, not on testers.",
    },
    {
      q: "What data is lost migrating from Zephyr Squad to Zephyr Essential?",
      a: "Per SmartBear's own upgrade guide: BDD data, test execution audit logs, saved JQL filters, test step custom field change history, and Cascading Select List and Label custom fields. Delta data created during the migration cannot be migrated afterwards.",
    },
    {
      q: "Does Bugasura have built-in automation?",
      a: "Bugasura pulls results from the automation you already run, and adds Asura-driven execution for browser flows and API contracts, currently in early access. Bugasura Automation covers web, API, mobile, mSite and OTT TV, which is wider screen coverage than any tool in this comparison offers.",
    },
  ],
};
