import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: "Careers, Internships & Expert Opportunities | PMRG",
  description:
    "Explore careers, internships, advisory opportunities and specialist roles across AI, telecom, enterprise platforms, delivery and growth at PMRG.",
  alternates: { canonical: "/company/careers" },
};

export default function CompanyCareersPage() {
  return (
    <ComingSoon
      pageTitle="Careers at PMRG"
      description="Build technology, capability and businesses that solve real problems. PMRG works with experienced leaders, architects, delivery specialists, growth professionals and emerging talent across technology and transformation programs."
    />
  );
}
