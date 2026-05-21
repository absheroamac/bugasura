import Navbar from "@/components/layout/Navbar";
import AsuraHero from "@/components/sections/asuras/AsuraHero";
import AsuraShowcase from "@/components/sections/asuras/AsuraShowcase";
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
      <AsuraShowcase />
      <Footer cta={{
        heading: <><span style={{ display: "block" }}>Your QA agents are</span><span style={{ display: "block" }}>ready to deploy.</span></>,
        subheading: <>What are you waiting for?</>,
        body: "Connect an Asura to your Bugasura project in minutes. No scaffolding, no setup — just results.",
        primaryLabel: "Start Free",
        primaryHref: "/signup",
        secondaryLabel: "See in Action",
        secondaryHref: "/demo",
      }} />
    </main>
  );
}
