import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: "AI for Universities & Smart Campus Solutions | PMRG",
  description:
    "Connect student services, campus operations, placements, internships, incubation and AI governance through a practical smart-campus roadmap.",
  alternates: { canonical: "/solutions/ai-for-universities" },
};

export default function AiForUniversitiesPage() {
  return (
    <ComingSoon
      pageTitle="AI for Universities & Smart Campus"
      description="From campus operations to career outcomes—build one connected, AI-ready institution. PMRG brings institutional strategy, AI enablement, digital platforms, employability programs and innovation ecosystems into a phased smart-campus model."
    />
  );
}
