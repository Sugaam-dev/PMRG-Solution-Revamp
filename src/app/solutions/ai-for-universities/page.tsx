import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  GraduationCap,
  Briefcase,
  Lightbulb,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "AI for Universities & Smart Campus Solutions | PMRG",
  description:
    "Connect student services, campus operations, placements, internships, incubation and AI governance through a practical smart-campus roadmap.",
  alternates: { canonical: "/solutions/ai-for-universities" },
};

// Document: "Student experience and support"
const STUDENT_EXPERIENCE = [
  "Student support assistant",
  "Service request tracking",
  "Knowledge and policy access",
  "Personalized alerts and guidance",
  "Feedback and issue intelligence",
];

// Document: "Admissions and institutional growth"
const ADMISSIONS_GROWTH = [
  "Program landing pages",
  "Admissions CRM",
  "Lead source and stage tracking",
  "Communication workflows",
  "Management dashboards",
];

// Document: "Industry readiness and placements"
const INDUSTRY_READINESS = [
  "Structured internships",
  "PMRG-supported live projects",
  "Placement-readiness programs",
  "Recruiter engagement",
  "Portfolio and outcome dashboards",
];

// Document: "Incubation and innovation"
const INCUBATION = [
  "Ideathons and hackathons",
  "Mentor and expert network",
  "Prototype support",
  "Startup readiness",
  "CSR and industry engagement",
];

// Document: "Faculty and operational enablement"
const FACULTY_OPS = [
  "Faculty development",
  "Research support",
  "Administrative workflows",
  "Policy and responsible-AI framework",
  "Role-based dashboards",
];

// Document: "Indicative 100-day roadmap"
const ROADMAP_STEPS = [
  {
    days: "Days 1–20",
    desc: "Institutional discovery and baseline",
  },
  {
    days: "Days 21–40",
    desc: "Blueprint and pilot design",
  },
  {
    days: "Days 41–70",
    desc: "Priority pilot implementation",
  },
  {
    days: "Days 71–100",
    desc: "Evidence, adoption and scale plan",
  },
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
              From campus operations to career outcomes---build one connected,
              AI-ready institution.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-fg-dark-muted">
              PMRG brings institutional strategy, AI enablement, digital
              platforms, employability programs and innovation ecosystems into a
              phased smart-campus model.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact?type=universities">
                Design My 100-Day Campus Roadmap
              </Button>
              <Link
                href="/contact?type=universities-workshop"
                className="inline-flex items-center gap-1 rounded-lg border border-light-line px-6 py-3 text-sm font-medium text-fg-dark transition-colors hover:bg-[#f1f5f9]"
              >
                Request a Leadership Workshop
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-[#f8fafc]">
        <div className="container-pmrg py-16 sm:py-20">
          {/* 1. STUDENT EXPERIENCE */}
          <div className="mb-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-blue-100 p-2">
                <Users className="h-6 w-6 text-brand" />
              </div>
              <h2 className="text-2xl font-semibold text-fg-dark">
                Student experience and support
              </h2>
            </div>
            <p className="mt-1 text-sm text-fg-dark-muted">
              Create clearer access to academic, administrative, career and
              campus information through governed digital journeys.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {STUDENT_EXPERIENCE.map((item) => (
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

          {/* 2. ADMISSIONS AND INSTITUTIONAL GROWTH */}
          <div className="mb-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-green-100 p-2">
                <GraduationCap className="h-6 w-6 text-brand" />
              </div>
              <h2 className="text-2xl font-semibold text-fg-dark">
                Admissions and institutional growth
              </h2>
            </div>
            <p className="mt-1 text-sm text-fg-dark-muted">
              Connect website journeys, inquiries, follow-ups and conversion
              visibility.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {ADMISSIONS_GROWTH.map((item) => (
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

          {/* 3. INDUSTRY READINESS AND PLACEMENTS */}
          <div className="mb-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-purple-100 p-2">
                <Briefcase className="h-6 w-6 text-brand" />
              </div>
              <h2 className="text-2xl font-semibold text-fg-dark">
                Industry readiness and placements
              </h2>
            </div>
            <p className="mt-1 text-sm text-fg-dark-muted">
              Move beyond certificates to structured exposure, live projects,
              portfolios and employer engagement.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {INDUSTRY_READINESS.map((item) => (
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

          {/* 4. INCUBATION AND INNOVATION */}
          <div className="mb-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-orange-100 p-2">
                <Lightbulb className="h-6 w-6 text-brand" />
              </div>
              <h2 className="text-2xl font-semibold text-fg-dark">
                Incubation and innovation
              </h2>
            </div>
            <p className="mt-1 text-sm text-fg-dark-muted">
              Create repeatable pathways from idea discovery to prototype,
              mentorship, validation and ecosystem visibility.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {INCUBATION.map((item) => (
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

          {/* 5. FACULTY AND OPERATIONAL ENABLEMENT */}
          <div className="mb-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-teal-100 p-2">
                <Users className="h-6 w-6 text-brand" />
              </div>
              <h2 className="text-2xl font-semibold text-fg-dark">
                Faculty and operational enablement
              </h2>
            </div>
            <p className="mt-1 text-sm text-fg-dark-muted">
              Support teaching, research, reporting and administration through
              responsible AI practices and controlled automation.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {FACULTY_OPS.map((item) => (
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

          {/* 6. INDICATIVE 100-DAY ROADMAP */}
          <GlassCard theme="light" className="mb-6 p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-red-100 p-2">
                <Calendar className="h-6 w-6 text-brand" />
              </div>
              <h2 className="text-2xl font-semibold text-fg-dark">
                Indicative 100-day roadmap
              </h2>
            </div>
            <p className="mt-2 text-sm text-fg-dark-muted">
              The roadmap shown is a service offering, separate from the
              three-week PMRG website build plan.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {ROADMAP_STEPS.map((step) => (
                <div
                  key={step.days}
                  className="rounded-xl border border-light-line bg-white p-5 text-center"
                >
                  <div className="text-sm font-semibold text-brand">
                    {step.days}
                  </div>
                  <p className="mt-1 text-sm text-fg-dark-muted">{step.desc}</p>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* 7. FINAL CTA – exact document copy */}
          <GlassCard theme="light" className="mt-6 p-8 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold text-fg-dark">
                  Design My 100-Day Campus Roadmap
                </h2>
                <p className="mt-2 text-sm text-fg-dark-muted">
                  Ready to define your university's AI transformation journey?
                  Let's build the institutional roadmap together.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button href="/contact?type=universities">
                  Design My 100-Day Campus Roadmap
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link
                  href="/contact?type=universities-workshop"
                  className="inline-flex items-center gap-1 rounded-lg border border-light-line px-6 py-3 text-sm font-medium text-fg-dark transition-colors hover:bg-[#f1f5f9]"
                >
                  Request a Leadership Workshop
                </Link>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}