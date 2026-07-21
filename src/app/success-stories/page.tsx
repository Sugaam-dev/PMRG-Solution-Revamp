import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: "PMRG Solution Success Stories & Use Cases",
  description:
    "Explore PMRG approaches to AI governance, education transformation, enterprise systems and telecom modernization.",
  alternates: { canonical: "/success-stories" },
};

export default function SuccessStoriesPage() {
  return (
    <ComingSoon
      pageTitle="Success Stories"
      description="Proof should show the problem, the intervention and the outcome. Explore selected PMRG use cases and engagements across governance, telecom, education and enterprise transformation."
    />
  );
}
