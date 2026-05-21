import Navbar from "@/components/layout/Navbar";
import AsuraHero from "@/components/sections/asuras/AsuraHero";
import AsuraShowcase from "@/components/sections/asuras/AsuraShowcase";
import PlatformLogoCarousel from "@/components/sections/platform/PlatformLogoCarousel";
import AsuraPlatform from "@/components/sections/asuras/AsuraPlatform";
import AsuraOpen from "@/components/sections/asuras/AsuraOpen";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "World of Asuras — Bugasura",
  description: "Specialized QA agents built on Bugasura's platform intelligence. Named, context-aware, and deployable out of the box.",
};

export default function AsuraPage() {
  return (
    <main className="flex flex-col gap-2">
      <Navbar />
      <AsuraHero />
      <PlatformLogoCarousel />
      <AsuraShowcase />
      <AsuraPlatform />
      <AsuraOpen />
      <Footer cta={{
        heading: <>
          <span className="lg:block">Asuras run on{" "}</span>
          <span className="lg:block">Bugasura.</span>
        </>,
        body: "Start on Bugasura's free tier — and access the first Asuras as they launch to early users.",
        primaryLabel: "Start for Free on Bugasura",
        primaryHref: "/signup",
        secondaryLabel: "Talk to us about Asuras",
        secondaryHref: "/demo",
      }} />
    </main>
  );
}
