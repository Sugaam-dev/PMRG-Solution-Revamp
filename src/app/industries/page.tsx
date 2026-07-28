import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, RadioTower, GraduationCap, Building2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "Industry Solutions for Telecom, Education & Enterprise | PMRG",
  description:
    "Explore PMRG's domain-led AI governance, digital transformation and platform solutions for telecom, education and enterprise.",
  alternates: { canonical: "/industries" },
};

const INDUSTRIES = [
  {
    icon: RadioTower,
    title: "Telecom & MSO",
    description:
      "Customer lifecycle, BSS/OSS architecture, orchestration, inventory, billing and AI-led program governance.",
    href: "/industries/telecom-mso",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "AI learning, smart campus, operations, admissions, placements, internships, incubation and institutional intelligence.",
    href: "/industries/education",
  },
  {
    icon: Building2,
    title: "Enterprise & SME",
    description:
      "ERP, CRM, sales and lifecycle, workflow automation, AI agents, analytics and infrastructure visibility.",
    href: "/industries/enterprise-sme",
  },
];

const CROSS_INDUSTRY_STEPS = [
  "Discover",
  "Design",
  "Validate",
  "Implement",
  "Measure and scale",
];

export default function IndustriesOverviewPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-white">
        <div className="container-pmrg py-16 sm:py-20 text-center">
          <div className="mx-auto max-w-4xl">
            <p className="eyebrow-light">Industries</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-fg-dark sm:text-5xl">
              Domain context changes the solution. Outcomes still require
              accountable execution.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-fg-dark-muted">
              PMRG combines reusable platforms with sector-specific processes,
              architecture, regulations, stakeholders and adoption needs.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="#industries">Choose Your Industry</Button>
              <Button
                href="/contact"
                variant="outline" size="lg"
              >
                Discuss Your Business Context
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY CARDS */}
      <section id="industries" className="bg-[#f8fafc]">
        <div className="container-pmrg py-16 sm:py-20">
          <div className="grid gap-6 lg:grid-cols-3">
            {INDUSTRIES.map((industry) => (
              <Link key={industry.href} href={industry.href} className="group">
                <GlassCard
                  theme="light"
                  className="flex h-full flex-col p-8 sm:p-10"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-light-line bg-blue-50 text-brand">
                    <industry.icon className="h-6 w-6" />
                  </span>
                  <h2 className="mt-5 text-2xl font-semibold text-fg-dark">
                    {industry.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-dark-muted">
                    {industry.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand transition-transform group-hover:translate-x-1">
                    Explore {industry.title}{" "}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </GlassCard>
              </Link>
            ))}
          </div>

          {/* CROSS-INDUSTRY APPROACH */}
          <GlassCard theme="light" className="mt-6 p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-fg-dark">
              Cross-industry approach
            </h2>
            <p className="mt-2 text-sm text-fg-dark-muted">
              PMRG starts with business context, maps the operating model,
              selects fit-for-purpose technology and governs implementation
              through measurable phases.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
              {CROSS_INDUSTRY_STEPS.map((step, i) => (
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
                  Discuss your business context
                </h2>
                <p className="mt-2 text-sm text-fg-dark-muted">
                  Select an industry above or tell us about your specific
                  operating environment and priorities.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="/contact">
                  Start a Conversation
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}
