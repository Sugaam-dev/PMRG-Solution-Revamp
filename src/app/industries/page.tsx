import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: "Industry Solutions for Telecom, Education & Enterprise | PMRG",
  description:
    "Explore PMRG's domain-led AI governance, digital transformation and platform solutions for telecom, education and enterprise.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesOverviewPage() {
  return (
    <ComingSoon
      pageTitle="Industries"
      description="Domain context changes the solution. Outcomes still require accountable execution. PMRG combines reusable platforms with sector-specific processes, architecture, regulations, stakeholders and adoption needs."
    />
  );
}
