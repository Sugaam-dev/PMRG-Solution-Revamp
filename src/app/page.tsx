import Hero from "@/components/home/Hero";
import ClientsStrip from "@/components/home/ClientsStrip";
import OutcomeCards from "@/components/home/OutcomeCards";
import { FlagshipGovernance, FlagshipSmartCampus, FlagshipEnterprise } from "@/components/home/FlagshipSections";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientsStrip />
      <OutcomeCards />
      <FlagshipGovernance />
      <FlagshipSmartCampus />
      <FlagshipEnterprise />
      <WhyChooseUs />
      <CTABanner />
    </>
  );
}
