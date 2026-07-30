import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, GraduationCap, Building2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "AI & Digital Transformation for Education | PMRG",
  description:
    "Support schools and universities with AI readiness, smart campus systems, employability, placements, incubation and digital operations.",
  alternates: { canonical: "/industries/education" },
};

const ROUTE_CARDS = [
  {
    icon: GraduationCap,
    title: "For schools",
    description:
      "Age-appropriate AI learning, teacher enablement, innovation labs, responsible-use policies and operational support.",
    href: "/solutions/ai-for-schools",
  },
  {
    icon: Building2,
    title: "For universities",
    description:
      "Smart campus, admissions, student support, internships, placements, incubation, faculty enablement and dashboards.",
    href: "/solutions/ai-for-universities",
  },
];

const INSTITUTIONAL_OUTCOMES = [
  "AI readiness and safe adoption",
  "Faculty and student participation",
  "Operational response and visibility",
  "Internship and placement engagement",
  "Innovation participation and prototype progress",
];

const COLLABORATION_STEPS = [
  "Discovery",
  "Blueprint",
  "Pilot programs",
  "Operational enablement",
  "Evidence and scale",
];

export default function EducationIndustryPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-white">
        <div className="container-pmrg py-16 sm:py-20 text-center">
          <div className="mx-auto max-w-4xl">
            <p className="eyebrow-light"> Education</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-fg-dark sm:text-5xl">
              Technology should strengthen learning, operations and career
              outcomes together.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-fg-dark-muted">
              PMRG helps education leaders move from isolated initiatives to an
              institution-wide roadmap for responsible AI, digital operations,
              employability and innovation.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/contact?type=education">
                Request an Institutional Workshop
              </Button>
              <Button
                href="#routes"
                variant="outline" size="lg"
              >
                Choose School or University
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section id="routes" className="bg-[#f8fafc]">
        <div className="container-pmrg py-16 sm:py-20">
          {/* 1. SCHOOL + UNIVERSITY ROUTE CARDS */}
          <div className="grid gap-6 lg:grid-cols-2">
            {ROUTE_CARDS.map((card) => (
              <Link key={card.href} href={card.href} className="group">
                <GlassCard
                  theme="light"
                  className="flex h-full flex-col p-8 sm:p-10"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-light-line bg-blue-50 text-brand">
                    <card.icon className="h-6 w-6" />
                  </span>
                  <h2 className="mt-5 text-2xl font-semibold text-fg-dark">
                    {card.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-dark-muted">
                    {card.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand transition-transform group-hover:translate-x-1">
                    Explore {card.title.toLowerCase()}{" "}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </GlassCard>
              </Link>
            ))}
          </div>

          {/* 2. INSTITUTIONAL OUTCOMES */}
          <GlassCard theme="light" className="mt-6 p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-fg-dark">
              Institutional outcomes
            </h2>
            <p className="mt-2 text-sm text-fg-dark-muted">
              Define measures appropriate to the institution instead of applying
              generic technology metrics.
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {INSTITUTIONAL_OUTCOMES.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-light-line bg-white px-4 py-3 text-sm text-fg-dark"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          {/* 3. COLLABORATION MODEL */}
          <GlassCard theme="light" className="mt-6 p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-fg-dark">
              Collaboration model
            </h2>
            <p className="mt-2 text-sm text-fg-dark-muted">
              PMRG can work with institutional leadership, academic departments,
              placement cells, incubation centers and industry partners through
              one coordinated roadmap.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
              {COLLABORATION_STEPS.map((step, i) => (
                <div
                  key={step}
                  className="rounded-xl border border-light-line bg-white px-4 py-3 text-center text-sm text-fg-dark"
                >
                  <span className="mb-1 block text-xs font-semibold text-brand">
                    Step {i + 1}
                  </span>
                  {step}
                </div>
              ))}
            </div>
          </GlassCard>

          {/* FINAL CTA */}
          <GlassCard theme="light" className="mt-6 p-8 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold text-fg-dark">
                  Request an Institutional Workshop
                </h2>
                <p className="mt-2 text-sm text-fg-dark-muted">
                  Explore how AI, digital operations and career outcomes connect
                  for your institution.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="/contact?type=education">
                  Request a Workshop
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  href="/contact"
                  variant="outline" size="lg"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}
