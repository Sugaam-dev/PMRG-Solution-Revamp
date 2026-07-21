import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: "Smart Campus & AI for Education Solutions | PMRG",
  description:
    "Build AI-ready schools and universities through responsible AI learning, smart operations, employability, incubation and institutional intelligence.",
  alternates: { canonical: "/solutions/smart-campus-education" },
};

export default function SmartCampusEducationPage() {
  return (
    <ComingSoon
      pageTitle="Smart Campus & AI for Education"
      description="Build an AI-ready institution—without losing the human purpose of education. PMRG connects responsible AI learning, faculty enablement, institutional operations, employability and innovation into a practical transformation model."
    />
  );
}
