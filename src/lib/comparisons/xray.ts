import type { ComparisonData } from "./types";

export const xray: ComparisonData = {
  slug: "xray-alternative",
  competitor: "Xray",
  metaTitle: "Xray Alternative for Jira Teams: Bugasura vs Xray",
  metaDescription:
    "Xray is licensed against your whole Jira instance, not your QA team. Bugasura is free for unlimited users and works with or without Jira.",
  heroImage: "/Comparison/xray.png",
  hero: {
    line1: "Test Management",
    line2: "That Does Not Bill",
    line3: "Your Whole Company!",
    body: "Xray is licensed to match your Jira tier. Two hundred Jira seats with ten testers pays $1,098 a month, $13,176 a year, which is $1,318 for each person who actually opens it. That is Atlassian's platform rule, not an Xray decision. You still pay it. Bugasura is free for unlimited users, integrates with Jira, and keeps working the day you leave Jira.",
  },
  whyHeading: ["Why Bugasura is the", "best FREE Xray alternative"],
  whyIntro: "Xray lives inside Jira and is billed by Jira. Bugasura works with Jira, and without it.",
  reasons: [
    {
      title: "Context Before Test Cases",
      body: "Xray organises test artefacts as Jira issues. Bugasura builds the context those artefacts should come from: product docs in the knowledge base, requirements linked to tests, defect history showing where this area broke before, then a risk map, then generation.",
    },
    {
      title: "You Pay for Testers, Not for Head Count",
      body: "Atlassian's licensing page says an app only functions if its licence matches or exceeds the host product tier, even if only some licensed users need it. Bugasura prices against nothing at all.",
    },
    {
      title: "It Survives a Move Off Jira",
      body: "Xray tests, test sets, plans, executions and preconditions are Jira issue types. Elegant while you are on Jira, total dependency the moment you are not. Bugasura integrates with Jira instead of living inside it.",
    },
    {
      title: "Capture That Is Not a Separate Desktop App",
      body: "Chrome Reporter, embeddable web widget and Android reporter. Session replay, annotation, voice notes, device and environment info, on any operating system.",
    },
    {
      title: "Everything in One Purchase",
      body: "Versioning, Test Case Designer and AI test model generation sit in Xray Enterprise, a second Marketplace app bought on top of the first. Bugasura is one platform on the free plan.",
    },
  ],
  painHeading: "Want to know why so many Jira teams want to move away from Xray like you?",
  painIntro: "Three themes dominate Xray's review base on G2 and Capterra.",
  pains: [
    {
      title: "The bill is sized to the company.",
      body: "The per-user number in the Marketplace calculator looks cheap. The invoice is calculated on Jira seats, and most of those people never test.",
    },
    {
      title: "The learning curve is structural.",
      body: "Five to seven interlocking entity types sitting on top of Jira's own issue model. Reviewers describe getting started as a serious investment of video watching and documentation reading.",
    },
    {
      title: "Getting data out is thin.",
      body: "The documented export route is the Document Generator with a custom template, producing XLSX. It covers test cases only. Attachments and execution history do not come with it.",
    },
  ],
  tableHeading: ["See a feature by feature", "comparison of Xray vs Bugasura"],
  tableIntro: "A straight look at what Xray gives you versus what Bugasura gives you.",
  rows: [
    { label: "Licensing basis", bugasura: "Per organisation. Free, unlimited users", competitor: "Matched to your total Jira user tier" },
    { label: "200 Jira users, 10 testers", bugasura: "$0", competitor: "$1,098/month, $13,176/year, which is $1,318 per actual tester" },
    { label: "Free plan", bugasura: "Full platform. Unlimited users, 50 GB", competitor: "None. Marketplace trial" },
    { label: "Runs without Jira", bugasura: "Yes", competitor: "No. Jira app only" },
    { label: "Native defect tracking", bugasura: "Yes, auto-linked to the case that caught it", competitor: "Jira issues" },
    { label: "Knowledge base feeding generation", bugasura: "Yes", competitor: "No" },
    { label: "Bug capture with evidence", bugasura: "Chrome, web widget and Android reporters, any OS. Session replay, annotation, voice notes", competitor: "Xray Exploratory App. Windows desktop only" },
    { label: "BDD, Gherkin, Cucumber", bugasura: "Not a primary workflow", competitor: "First class, Standard edition" },
    { label: "Expert review before a case is finalised", bugasura: "Built into the flow", competitor: "Manual" },
    { label: "Risk-weighted coverage", bugasura: "Scored per sprint", competitor: "Coverage by linked requirement" },
    { label: "Defect history analysis", bugasura: "Recurring failure points and regression patterns", competitor: "No" },
    { label: "Agentic execution", bugasura: "Asuras run browser flows and API contracts. Early access", competitor: "No" },
    { label: "Automation coverage", bugasura: "Bugasura Automation: web, API, mobile, mSite and OTT TV", competitor: "Bring your own framework" },
    { label: "Leadership reporting", bugasura: "Eagle Eye, included", competitor: "Jira dashboards and gadgets" },
    { label: "Products to buy", bugasura: "One", competitor: "Standard or Advanced, plus Xray Enterprise as a separate app" },
    { label: "Integrations and MCP", bugasura: "25+ integrations and an MCP server for Claude and Cursor, included", competitor: "Jira ecosystem. Rovo skills on Standard" },
    { label: "Interface languages", bugasura: "24", competitor: "English" },
    { label: "On-premise, SSO and SAML", bugasura: "Custom plan", competitor: "Via Jira Data Center" },
  ],
  tableNote: "Xray pricing read from the Atlassian Marketplace calculator, monthly billing. Xray publishes no rate card, so re-verify monthly.",
  faqHeading: "Xray and Bugasura: questions people actually ask",
  faqs: [
    {
      q: "Is there a free alternative to Xray for Jira?",
      a: "Yes. Bugasura's full platform is free for unlimited users and integrates with Jira, so you keep the Jira workflow without licensing a Marketplace app against your entire Jira user count. Xray has no free tier, only a Marketplace trial.",
    },
    {
      q: "Why is Xray so expensive for a small QA team?",
      a: "Because Atlassian requires Marketplace apps to be licensed at the same user tier as the host product, even if only some licensed users need the app. Read from the Marketplace calculator on monthly billing, Standard runs $10 a month flat up to 10 Jira users, $364 at 50 and $728 at 100. A company with 200 Jira users and 10 testers licenses Xray for 200 users: $13,176 a year, or $1,318 for each person who actually tests. The same rule hits Zephyr.",
    },
    {
      q: "Can Xray be used without Jira?",
      a: "No. Xray is a Jira app with no standalone version, so your test management leaves whenever Jira does. The only separate artefact is the free Xray Exploratory App, a Windows desktop capture tool that pushes results back into Jira. Bugasura runs with or without Jira.",
    },
    {
      q: "Does Bugasura support BDD or Gherkin?",
      a: "BDD is not Bugasura's primary workflow. If Gherkin-based test definition is central to how your team works, Xray's support there is deeper and we would tell you so rather than let you find out in a trial.",
    },
    {
      q: "Can I keep using Jira if I move to Bugasura?",
      a: "Yes. Jira is one of 25+ integrations on the free plan. Push defects into Jira, link Jira issues for traceability, and leave your developers' workflow exactly as it is.",
    },
  ],
};
