import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PricingHero from "@/components/sections/pricing/PricingHero";
import PricingPlans from "@/components/sections/pricing/PricingPlans";
import PricingTestpert from "@/components/sections/pricing/PricingTestpert";
import PricingAsura from "@/components/sections/pricing/PricingAsura";
import PricingFaq from "@/components/sections/pricing/PricingFaq";

export const metadata = {
  title: "Pricing — Bugasura",
  description: "Bugasura is free for unlimited users and unlimited projects. Custom pricing only when you need on-prem, Testpert AI, or enterprise-scale Asura execution.",
};

export default function PricingPage() {
  return (
    <main className="flex flex-col gap-2">
      <Navbar />
      <PricingHero />
      <PricingPlans />
      <PricingTestpert />
      <PricingAsura />
      <PricingFaq />
      <Footer cta={{
        heading: <>Start free. Stay free.<br />Scale when you&apos;re ready.</>,
        body: "No card. No trial. No expiry. Just the full Bugasura platform — free, for your whole team.",
        primaryLabel: "Start for Free",
        primaryHref: "https://my.bugasura.io?go=sign_up",
        secondaryLabel: "Talk to us about Custom",
        secondaryHref: "https://calendly.com/get-bugasura/45min",
      }} />
    </main>
  );
}
