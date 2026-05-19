import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ProblemStatement from "@/components/sections/ProblemStatement";
import FourLayers from "@/components/sections/FourLayers";
import BentoFeatures from "@/components/sections/BentoFeatures";
import AsuraAgents from "@/components/sections/AsuraAgents";
import Integrations from "@/components/sections/Integrations";
import Testimonials from "@/components/sections/Testimonials";
import Enterprise from "@/components/sections/Enterprise";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemStatement />
      <FourLayers />
      <BentoFeatures />
      <AsuraAgents />
      <Integrations />
      <Testimonials />
      <Enterprise />
      <Footer />
    </main>
  );
}
