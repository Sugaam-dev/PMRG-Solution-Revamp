import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: "About PMRG Solution | AI & Digital Transformation",
  description:
    "PMRG Solution LLP combines AI, telecom, enterprise platforms, smart-campus programs and governed delivery to create measurable transformation.",
  alternates: { canonical: "/company/about" },
};

export default function CompanyAboutPage() {
  return (
    <ComingSoon
      pageTitle="About PMRG"
      description="Innovate to elevate—technology that improves decisions, accountability and outcomes. PMRG Solution LLP is a technology and consulting company serving enterprises, telecom organizations, educational institutions and emerging businesses."
    />
  );
}
