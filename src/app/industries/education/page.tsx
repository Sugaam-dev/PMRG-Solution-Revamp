import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: "AI & Digital Transformation for Education | PMRG",
  description:
    "Support schools and universities with AI readiness, smart campus systems, employability, placements, incubation and digital operations.",
  alternates: { canonical: "/industries/education" },
};

export default function EducationIndustryPage() {
  return (
    <ComingSoon
      pageTitle="Education"
      description="Technology should strengthen learning, operations and career outcomes together. PMRG helps education leaders move from isolated initiatives to an institution-wide roadmap for responsible AI, digital operations, employability and innovation."
    />
  );
}
