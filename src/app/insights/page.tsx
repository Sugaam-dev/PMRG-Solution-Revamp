import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: "Insights on AI Governance, Telecom & Education | PMRG",
  description:
    "Practical perspectives from PMRG on AI governance, enterprise systems, telecom BSS/OSS, smart campus and industry readiness.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <ComingSoon
      pageTitle="Insights"
      description="Practical thinking for governed transformation. Explore perspectives, frameworks, architecture notes and implementation guidance across PMRG's priority domains."
    />
  );
}
