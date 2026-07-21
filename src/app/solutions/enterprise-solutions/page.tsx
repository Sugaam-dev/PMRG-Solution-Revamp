import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: "Enterprise ERP, CRM, Automation & AI Solutions | PMRG",
  description:
    "Modernize operations with ERPNext, CRM, customer lifecycle, workflow automation, analytics and infrastructure visibility from PMRG.",
  alternates: { canonical: "/solutions/enterprise-solutions" },
};

export default function EnterpriseSolutionsPage() {
  return (
    <ComingSoon
      pageTitle="Enterprise Solutions"
      description="Modernize processes. Automate decisions. Improve visibility. PMRG helps growing and established organizations simplify operations through enterprise platforms, AI automation, integration and governed delivery."
    />
  );
}
