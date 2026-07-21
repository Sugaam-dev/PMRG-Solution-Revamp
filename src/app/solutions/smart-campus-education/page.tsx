import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "Smart Campus & AI for Education Solutions | PMRG",
  description:
    "Build AI-ready schools and universities through responsible AI learning, smart operations, employability, incubation and institutional intelligence.",
  alternates: { canonical: "/solutions/smart-campus-education" },
};

// Document: "Choose your path"
const PATHS = [
  {
    title: "AI for Schools",
    href: "/solutions/ai-for-schools",
    description:
      "AI literacy, safety, teacher enablement, innovation clubs and school operations.",
  },
  {
    title: "AI for Universities",
    href: "/solutions/ai-for-universities",
    description:
      "Smart campus, student support, internships, placements, incubation and institutional dashboards.",
  },
];

// Document: "Five transformation pillars"
const PILLARS = [
  "AI learning and responsible use",
  "Faculty and staff enablement",
  "Digital and operational intelligence",
  "Employability and industry readiness",
  "Innovation, incubation and ecosystem engagement",
];

// Document: "What institutional leaders gain"
const LEADER_GAINS = [
  "Clear AI readiness baseline",
  "Role-based program design",
  "Defined pilots and success measures",
  "Student, faculty and management journeys",
  "Governance and responsible-AI controls",
];

// Document: "How PMRG works"
const ENGAGEMENT_STEPS = ["Discover", "Blueprint", "Pilot", "Measure", "Scale"];

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO – exact document copy */}
      <section className="bg-white">
        <div className="container-pmrg py-16 sm:py-20">
          <div className="max-w-4xl">
            <p className="eyebrow-light">Solutions</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-fg-dark sm:text-5xl">
              Build an AI-ready institution---without losing the human purpose of
              education.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-fg-dark-muted">
              PMRG connects responsible AI learning, faculty enablement,
              institutional operations, employability and innovation into a
              practical transformation model.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/solutions/ai-for-schools">
                Explore Your Institution Path
              </Button>
              <Link
                href="/contact?type=education"
                className="inline-flex items-center gap-1 rounded-lg border border-light-line px-6 py-3 text-sm font-medium text-fg-dark transition-colors hover:bg-[#f1f5f9]"
              >
                Request an Institutional Workshop
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-[#f8fafc]">
        <div className="container-pmrg py-16 sm:py-20">
          {/* 1. CHOOSE YOUR PATH */}
          <div>
            <h2 className="text-2xl font-semibold text-fg-dark">
              Choose your path
            </h2>
            <p className="mt-1 text-sm text-fg-dark-muted">
              Institutional needs differ. Select the path designed for your
              learners, faculty and operating context.
            </p>
            <div className="mt-5 grid gap-6 md:grid-cols-2">
              {PATHS.map((path) => (
                <Link
                  key={path.href}
                  href={path.href}
                  className="group rounded-2xl border border-light-line bg-white p-8 transition-all hover:border-brand/30 hover:shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-fg-dark group-hover:text-brand">
                    {path.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-dark-muted">
                    {path.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand">
                    Explore {path.title}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* 2. FIVE TRANSFORMATION PILLARS */}
          <GlassCard theme="light" className="mt-6 p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-fg-dark">
              Five transformation pillars
            </h2>
            <p className="mt-2 text-sm text-fg-dark-muted">
              PMRG links learning and operations rather than treating AI as an
              isolated laboratory activity.
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {PILLARS.map((pillar) => (
                <li
                  key={pillar}
                  className="flex items-start gap-3 rounded-xl border border-light-line bg-white px-4 py-3 text-sm text-fg-dark"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span>{pillar}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          {/* 3. WHAT INSTITUTIONAL LEADERS GAIN */}
          <GlassCard theme="light" className="mt-6 p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-fg-dark">
              What institutional leaders gain
            </h2>
            <p className="mt-2 text-sm text-fg-dark-muted">
              A phased roadmap aligned to current maturity, priorities and
              capacity.
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {LEADER_GAINS.map((gain) => (
                <li
                  key={gain}
                  className="flex items-start gap-3 rounded-xl border border-light-line bg-white px-4 py-3 text-sm text-fg-dark"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span>{gain}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          {/* 4. HOW PMRG WORKS */}
          <GlassCard theme="light" className="mt-6 p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-fg-dark">
              How PMRG works
            </h2>
            <p className="mt-2 text-sm text-fg-dark-muted">
              Start with discovery, create the institutional blueprint, launch
              selected high-value pilots and expand only after evidence and
              adoption are established.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-5">
              {ENGAGEMENT_STEPS.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-3 rounded-xl border border-light-line bg-white px-4 py-3 text-sm text-fg-dark"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* 5. FINAL CTA – exact document copy */}
          <GlassCard theme="light" className="mt-6 p-8 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold text-fg-dark">
                  Request an Institutional Workshop
                </h2>
                <p className="mt-2 text-sm text-fg-dark-muted">
                  Ready to define your institution's AI readiness and
                  transformation roadmap? Start with a focused discovery session.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button href="/contact?type=education">
                  Request an Institutional Workshop
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link
                  href="/solutions/ai-for-schools"
                  className="inline-flex items-center gap-1 rounded-lg border border-light-line px-6 py-3 text-sm font-medium text-fg-dark transition-colors hover:bg-[#f1f5f9]"
                >
                  Explore Your Institution Path
                </Link>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}