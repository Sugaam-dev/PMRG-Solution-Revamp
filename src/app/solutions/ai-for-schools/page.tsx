import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, GraduationCap, Users, Lightbulb, Shield, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "AI for Schools: Literacy, Teachers & Innovation | PMRG",
  description:
    "A human-first AI program for students, teachers, school operations, digital safety and innovation across Classes 6–12.",
  alternates: { canonical: "/solutions/ai-for-schools" },
};

// Document: "AI literacy for Classes 6–8"
const CLASS_6_8 = [
  "AI awareness and everyday examples",
  "Computational thinking and logic",
  "Digital safety and responsible use",
  "Prompt basics and fact checking",
  "Storytelling and simple project-based learning",
];

// Document: "Applied AI for Classes 9–10"
const CLASS_9_10 = [
  "AI project cycle",
  "Data awareness and interpretation",
  "Prompt design and evaluation",
  "Bias, privacy and responsible AI",
  "Team projects connected to school or community problems",
];

// Document: "Career and innovation exposure for Classes 11–12"
const CLASS_11_12 = [
  "AI and emerging-technology careers",
  "Applied projects and presentations",
  "Research, entrepreneurship and innovation exposure",
  "Portfolio and industry-readiness guidance",
  "Responsible use in higher education",
];

// Document: "Teacher enablement"
const TEACHER_ENABLEMENT = [
  "Prompting for educators",
  "Verification and academic integrity",
  "AI-assisted content preparation",
  "Student-use policies",
  "Classroom adoption playbook",
];

// Document: "AI Innovation Lab and Club"
const INNOVATION_LAB = [
  "Annual activity calendar",
  "Mentor-supported project cycles",
  "Showcase and demo day",
  "Responsible-AI charter",
  "Student leadership roles",
];

// Document: "School operations and governance"
const SCHOOL_OPS = [
  "Use-case prioritization",
  "Data and privacy controls",
  "Role-based access",
  "Approval and review processes",
  "Impact and adoption measurement",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO – exact document copy */}
      <section className="bg-white">
        <div className="container-pmrg py-16 sm:py-20">
          <div className="max-w-4xl">
            <p className="eyebrow-light">Solutions</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-fg-dark sm:text-5xl">
              Human-first AI for students, teachers and future-ready schools.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-fg-dark-muted">
              PMRG helps schools introduce AI with age-appropriate learning,
              responsible use, teacher confidence, practical projects and
              institutional governance.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact?type=schools">
                Request a School AI Readiness Workshop
              </Button>
              <Link
                href="#program-structure"
                className="inline-flex items-center gap-1 rounded-lg border border-light-line px-6 py-3 text-sm font-medium text-fg-dark transition-colors hover:bg-[#f1f5f9]"
              >
                View the Program Structure
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-[#f8fafc]" id="program-structure">
        <div className="container-pmrg py-16 sm:py-20">
          {/* 1. AI LITERACY – Classes 6–8 */}
          <div className="mb-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-blue-100 p-2">
                <GraduationCap className="h-6 w-6 text-brand" />
              </div>
              <h2 className="text-2xl font-semibold text-fg-dark">
                AI literacy for Classes 6–8
              </h2>
            </div>
            <p className="mt-1 text-sm text-fg-dark-muted">
              Build curiosity, logic and digital responsibility before complexity.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {CLASS_6_8.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-light-line bg-white px-4 py-3 text-sm text-fg-dark"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 2. APPLIED AI – Classes 9–10 */}
          <div className="mb-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-green-100 p-2">
                <Sparkles className="h-6 w-6 text-brand" />
              </div>
              <h2 className="text-2xl font-semibold text-fg-dark">
                Applied AI for Classes 9–10
              </h2>
            </div>
            <p className="mt-1 text-sm text-fg-dark-muted">
              Move from awareness to structured problem solving and responsible project work.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {CLASS_9_10.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-light-line bg-white px-4 py-3 text-sm text-fg-dark"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. CAREER EXPOSURE – Classes 11–12 */}
          <div className="mb-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-purple-100 p-2">
                <Lightbulb className="h-6 w-6 text-brand" />
              </div>
              <h2 className="text-2xl font-semibold text-fg-dark">
                Career and innovation exposure for Classes 11–12
              </h2>
            </div>
            <p className="mt-1 text-sm text-fg-dark-muted">
              Help senior students understand AI pathways, real-world use cases and portfolio creation.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {CLASS_11_12.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-light-line bg-white px-4 py-3 text-sm text-fg-dark"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. TEACHER ENABLEMENT */}
          <GlassCard theme="light" className="mb-6 p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-orange-100 p-2">
                <Users className="h-6 w-6 text-brand" />
              </div>
              <h2 className="text-2xl font-semibold text-fg-dark">
                Teacher enablement
              </h2>
            </div>
            <p className="mt-2 text-sm text-fg-dark-muted">
              Teachers remain the decision-makers. AI supports lesson preparation,
              differentiated material, feedback, administration and professional
              development.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {TEACHER_ENABLEMENT.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-light-line bg-white px-4 py-3 text-sm text-fg-dark"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* 5. AI INNOVATION LAB AND CLUB */}
          <GlassCard theme="light" className="mb-6 p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-teal-100 p-2">
                <BookOpen className="h-6 w-6 text-brand" />
              </div>
              <h2 className="text-2xl font-semibold text-fg-dark">
                AI Innovation Lab and Club
              </h2>
            </div>
            <p className="mt-2 text-sm text-fg-dark-muted">
              Create a structured environment for projects, demonstrations,
              competitions and interdisciplinary problem solving.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {INNOVATION_LAB.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-light-line bg-white px-4 py-3 text-sm text-fg-dark"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* 6. SCHOOL OPERATIONS AND GOVERNANCE */}
          <GlassCard theme="light" className="mb-6 p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-red-100 p-2">
                <Shield className="h-6 w-6 text-brand" />
              </div>
              <h2 className="text-2xl font-semibold text-fg-dark">
                School operations and governance
              </h2>
            </div>
            <p className="mt-2 text-sm text-fg-dark-muted">
              Identify safe uses of AI across communication, knowledge management,
              reporting and student support without exposing sensitive data.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {SCHOOL_OPS.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-light-line bg-white px-4 py-3 text-sm text-fg-dark"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* 7. FINAL CTA – exact document copy */}
          <GlassCard theme="light" className="mt-6 p-8 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold text-fg-dark">
                  Request a School AI Readiness Workshop
                </h2>
                <p className="mt-2 text-sm text-fg-dark-muted">
                  Ready to define your school's AI readiness and transformation
                  roadmap? Start with a focused discovery session.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button href="/contact?type=schools">
                  Request a School AI Readiness Workshop
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link
                  href="/solutions/smart-campus-education"
                  className="inline-flex items-center gap-1 rounded-lg border border-light-line px-6 py-3 text-sm font-medium text-fg-dark transition-colors hover:bg-[#f1f5f9]"
                >
                  View the Program Structure
                </Link>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}