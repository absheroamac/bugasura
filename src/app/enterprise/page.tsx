import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PlatformLogoCarousel from "@/components/sections/platform/PlatformLogoCarousel";
import EnterpriseHero from "@/components/sections/enterprise/EnterpriseHero";
import EnterprisePersonas from "@/components/sections/enterprise/EnterprisePersonas";
import EnterpriseDeploy from "@/components/sections/enterprise/EnterpriseDeploy";
import EnterpriseSecurity from "@/components/sections/enterprise/EnterpriseSecurity";
import EnterpriseProcess from "@/components/sections/enterprise/EnterpriseProcess";
import EnterpriseConference from "@/components/sections/enterprise/EnterpriseConference";

export const metadata = {
  title: "Enterprise — Bugasura",
  description: "Bugasura for enterprise teams — deployment options, compliance certifications, and the security posture your procurement and infosec teams need.",
};

export default function EnterprisePage() {
  return (
    <main className="flex flex-col gap-2">
      <Navbar />
      <EnterpriseHero />
      <PlatformLogoCarousel />
      <EnterprisePersonas />
      <EnterpriseDeploy />
      <EnterpriseSecurity />
      <EnterpriseProcess />
      <EnterpriseConference />
      <Footer cta={{
        heading: <>Ready to talk about</>,
        subheading: <>enterprise deployment?</>,
        body: "Tell us your team size, deployment requirements, and what you're trying to solve. We'll come back with a scoped proposal within 2–3 days.",
        primaryLabel: "Book a demo",
        primaryHref: "https://calendly.com/get-bugasura/45min",
        secondaryLabel: "Download security overview",
        secondaryHref: "#",
      }} />
    </main>
  );
}
