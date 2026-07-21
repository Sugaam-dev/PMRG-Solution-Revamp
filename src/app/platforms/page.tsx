import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: "AI Governance & Enterprise Platforms | PMRG",
  description:
    "Explore PMRG platforms for governance, sprint intelligence, sales and customer lifecycle, and data center management.",
  alternates: { canonical: "/platforms" },
};

export default function PlatformsOverviewPage() {
  return (
    <ComingSoon
      pageTitle="Platforms"
      description="Platforms that turn operational signals into accountable action. PMRG's platforms support governance, execution, sales intelligence and infrastructure visibility while integrating with the tools organizations already use."
    />
  );
}
