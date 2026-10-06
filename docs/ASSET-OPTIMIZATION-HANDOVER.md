# Image optimisation — what changed

App: `bugasura-v2`. Local changes only; nothing pushed.

**Result:** `public/` went from 119 MB to 23 MB on disk. Modern browsers download AVIF files (7 MB for all 64 images); the 11 MB of WebP copies are only sent to old browsers. Heaviest image on any page is now about 534 KB.

## 1. Images in `public/`

64 PNGs were converted. For each one:
- the PNG was **deleted**
- a `.avif` with the same name was **added** (`paper-bg.png` → `paper-bg.avif`)
- a `.webp` with the same name was **added** next to it (fallback for old browsers)

Converted images (shown without extension; each is now `.avif` + `.webp`):

```
asura-pods, asuras-enterprise-pricing, asuras-free-pricing, beta-banner, beta-bg, beta-success,
bugasura-logo, bugasura-product, jira-hero-img, paper-bg, prize-sovereign, prize-wanderer, prize-warrior
asuras/              char-api, char-browser, char-duplicate, char-mobile, hero-illustration, jar, s4-card1, s4-card2, s4-card3
dashboard-preview/   sprint-coverage-infographic
enterprise/          card1-bg-v4, enterprise_hero, three-teams/01, three-teams/02, three-teams/03
footer/              character, footer-wordmark
hero/                Background, asura-mouth
illustrations/       bug-tracker, comparison-left, comparison-right, engineering-leaders, engineering-teams, integrations,
                     knowledge-base, pricing, qa-teams, requirements, security-hero, test-management,
                     testimonial-character, testpert-hero
navbar/dropdown/     asuras, illustration, itsfree
platform-flow/       Context-Active, Execute-Active, Generate-Active
platform/            bugasura-everywhere, comparison-right, illustration, layers
qa/                  card-01, card-02, card-03
section2/            illustration1, illustration2
section4/            card1-bg
section5/            train
section6/            asura
```

22 PNGs that nothing in our code used were also **deleted** (check your code before deleting any of these):

```
cta-banner-asura, hero-card-asura, prize-asura, section3/card1, section5/asura-icon,
illustrations/feedback, platform/city,
enterprise/card1-bg, enterprise/card1-bg-v2, enterprise/card1-bg-v3,
platform/layers/execute, platform/layers/generate, platform/layers/refine,
platform/screenshots/ (bt-ai-capture, int-chrome-reporter, int-tool-connectivity, kb-ingest,
  kb-team-knowledge, req-capture, tm-coverage-tracking, tm-sprint-planning, tm-test-case-generation)
```

Everything else in `public/` is unchanged (SVGs, fonts, logos, other PNGs). `beta-share-card.png` was deliberately kept as a PNG (used for social share images).

## 2. Code files — image paths only (38 files)

In each file, every path to one of the 64 images above changed from `.png` to `.avif`. No other change in these files. `*` = also has the `<img>` → `<Image>` edit in section 3.

```
src/app/admin/page.tsx
src/app/asuras/event/page.tsx *
src/app/best-free-jira-alternative/page.tsx
src/app/dashboard-preview/sprint-coverage/page.tsx
src/app/early-access/page.tsx
src/app/marketplace/register/page.tsx *
src/app/platform/bug-tracker/page.tsx
src/app/platform/integrations/page.tsx
src/app/platform/knowledge-base/page.tsx
src/app/platform/requirement-management/page.tsx
src/app/platform/test-management/page.tsx
src/app/pricing/PricingTabs.tsx
src/app/security/page.tsx
src/app/solutions/engineering-leaders/page.tsx
src/app/solutions/engineering-teams/page.tsx
src/app/solutions/qa-teams/page.tsx
src/app/testpert/page.tsx
src/components/layout/Footer.tsx
src/components/layout/Navbar.tsx
src/components/sections/AsuraAgents.tsx
src/components/sections/BentoFeatures.tsx
src/components/sections/Hero.tsx
src/components/sections/Integrations.tsx
src/components/sections/ProblemStatement.tsx
src/components/sections/asuras/AsuraHero.tsx
src/components/sections/asuras/AsuraOpen.tsx
src/components/sections/asuras/AsuraShowcase.tsx *
src/components/sections/enterprise/EnterpriseHero.tsx
src/components/sections/enterprise/EnterprisePersonas.tsx
src/components/sections/enterprise/EnterpriseSecurity.tsx
src/components/sections/features/FeaturesPlatformFlow.tsx
src/components/sections/platform/PlatformCTA.tsx
src/components/sections/platform/PlatformComparison.tsx
src/components/sections/platform/PlatformHero.tsx
src/components/sections/platform/PlatformStats.tsx
src/components/sections/pricing/PricingHero.tsx
src/components/sections/pricing/PricingPlans.tsx
src/components/sections/solutions/SolutionsTestimonial.tsx
```

## 3. Code files — `<img>` changed to `<Image>` (3 files)

Raw `<img>` tags for 7 large images were changed to Next's `<Image>` (same layout, now responsive). Needs `import Image from "next/image"` at the top.

- `src/app/marketplace/register/page.tsx`: hero background, pods illustration, train
- `src/app/asuras/event/page.tsx`: hero background, train, pods illustration
- `src/components/sections/asuras/AsuraShowcase.tsx`: jar

## 4. Config and dependencies

- `next.config.mjs`: added image formats (AVIF, then WebP), a 1-year image cache, a rule that serves the `.webp` copy when a browser doesn't support AVIF, and cache headers for static assets:

```js
images: { formats: ["image/avif", "image/webp"], minimumCacheTTL: 31536000 },
async rewrites() {
  return { beforeFiles: [{
    source: "/:path*.avif",
    missing: [{ type: "header", key: "accept", value: ".*image/avif.*" }],
    destination: "/:path*.webp",
  }] };
},
async headers() {
  return [
    { source: "/:path*.(avif|webp|svg|woff2|ttf)",
      headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }] },
    { source: "/:path*.avif", headers: [{ key: "Vary", value: "Accept" }] },
  ];
},
```

- `package.json` and `package-lock.json`: added the `sharp` package (`npm install sharp`).

## Not changed
Middleware, API routes, `lib/`, UI components, all CSS files, environment variables.

## Note: existing issue, not caused by this change
Eight testimonial photos (`/testimonials/brijesh.jpg`, `roshan`, `akshay`, `kopila`, `naveen`, `elango`, `rithvik`, `irfan`) are used in the code but are not in `public/`, so they show as broken images. This was already the case before.
