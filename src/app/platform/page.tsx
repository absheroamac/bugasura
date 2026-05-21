import Navbar from "@/components/layout/Navbar";
import PlatformHero from "@/components/sections/platform/PlatformHero";
import PlatformLogoCarousel from "@/components/sections/platform/PlatformLogoCarousel";
import PlatformLayers from "@/components/sections/platform/PlatformLayers";
import PlatformComparison from "@/components/sections/platform/PlatformComparison";
import PlatformStats from "@/components/sections/platform/PlatformStats";
import PlatformEnterprise from "@/components/sections/platform/PlatformEnterprise";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Platform Overview — Bugasura",
  description: "The Bugasura Platform: Context, Refine, Generate, Execute — end-to-end AI quality.",
};

export default function PlatformPage() {
  return (
    <main className="flex flex-col gap-2">
      <Navbar />
      <PlatformHero />
      <PlatformLogoCarousel />
      <PlatformLayers />
      <PlatformComparison />
      <PlatformStats />
      <PlatformEnterprise />
      <Footer cta={{
        heading: <>See how the platform fits your team&apos;s workflow.</>,
        body: "Start on the free tier and explore all four layers — or talk to us about what you’re trying to solve.",
        primaryLabel: "Start Free",
        primaryHref: "/signup",
        secondaryLabel: "Book a Walkthrough",
        secondaryHref: "/demo",
      }} />
    </main>
  );
}
