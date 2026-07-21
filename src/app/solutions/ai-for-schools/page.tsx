import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: "AI for Schools: Literacy, Teachers & Innovation | PMRG",
  description:
    "A human-first AI program for students, teachers, school operations, digital safety and innovation across Classes 6–12.",
  alternates: { canonical: "/solutions/ai-for-schools" },
};

export default function AiForSchoolsPage() {
  return (
    <ComingSoon
      pageTitle="AI for Schools"
      description="Human-first AI for students, teachers and future-ready schools. PMRG helps schools introduce AI with age-appropriate learning, responsible use, teacher confidence, practical projects and institutional governance."
    />
  );
}
