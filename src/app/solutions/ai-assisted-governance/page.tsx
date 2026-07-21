import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: "AI-Assisted Enterprise Governance Platform | PMRG",
  description:
    "Improve delivery accountability, risk visibility and executive decisions through PMRG's AI-assisted governance platform and agent ecosystem.",
  alternates: { canonical: "/solutions/ai-assisted-governance" },
};

export default function AiAssistedGovernancePage() {
  return (
    <ComingSoon
      pageTitle="AI-Assisted Governance"
      description="Turn delivery data into accountable decisions. PMRG's AI-assisted governance approach connects requirements, delivery, vendors, testing, risks, approvals and executive reporting into one governed decision layer."
    />
  );
}
