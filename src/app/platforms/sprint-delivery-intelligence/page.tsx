import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: "Sprint Planning & Delivery Intelligence Platform | PMRG",
  description:
    "Plan sprints, track commitments, expose dependencies and improve delivery governance across teams, milestones and vendors.",
  alternates: { canonical: "/platforms/sprint-delivery-intelligence" },
};

export default function SprintDeliveryIntelligencePage() {
  return (
    <ComingSoon
      pageTitle="Sprint & Delivery Intelligence"
      description="Move from sprint activity to delivery intelligence. Connect plans, capacity, dependencies, risks, commitments and outcomes so delivery leaders can act before slippage becomes status history."
    />
  );
}
