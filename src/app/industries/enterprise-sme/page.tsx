import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: "Enterprise & SME ERP, CRM and AI Solutions | PMRG",
  description:
    "Improve enterprise and SME operations through ERPNext, CRM, AI automation, sales intelligence, analytics and data center visibility.",
  alternates: { canonical: "/industries/enterprise-sme" },
};

export default function EnterpriseSmeIndustryPage() {
  return (
    <ComingSoon
      pageTitle="Enterprise & SME"
      description="Practical enterprise transformation for organizations that need visibility and speed. PMRG connects process improvement, enterprise systems and AI automation through phased implementation designed around business priorities."
    />
  );
}
