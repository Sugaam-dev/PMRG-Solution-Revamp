import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: "AI Governance Layer for Delivery & Decisions | PMRG",
  description:
    "A configurable governance layer for requirements, sprints, vendors, risks, approvals, UAT, releases and executive intelligence.",
  alternates: { canonical: "/platforms/ai-governance-layer" },
};

export default function AiGovernanceLayerPage() {
  return (
    <ComingSoon
      pageTitle="AI Governance Layer"
      description="One governance layer across delivery, vendors, risk and decisions. Bring evidence from existing tools into a role-based governance workspace that highlights exceptions, traceability and decisions requiring attention."
    />
  );
}
