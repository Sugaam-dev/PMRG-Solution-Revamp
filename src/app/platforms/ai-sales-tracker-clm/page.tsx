import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: "AI Sales Tracker & Customer Lifecycle Platform | PMRG",
  description:
    "Connect external lead sources, qualification, follow-ups, opportunity progress, customer lifecycle and revenue visibility.",
  alternates: { canonical: "/platforms/ai-sales-tracker-clm" },
};

export default function AiSalesTrackerClmPage() {
  return (
    <ComingSoon
      pageTitle="AI Sales Tracker & CLM"
      description="Turn scattered leads and follow-ups into a visible, accountable sales journey. PMRG's AI-led sales tracker connects lead sources, activities, opportunities, next actions and customer lifecycle intelligence in one management view."
    />
  );
}
