import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "Enterprise & SME ERP, CRM and AI Solutions | PMRG",
  description:
    "Improve enterprise and SME operations through ERPNext, CRM, AI automation, sales intelligence, analytics and data center visibility.",
  alternates: { canonical: "/industries/enterprise-sme" },
};

const GROWTH_CONSTRAINTS = [
  "Disconnected spreadsheets and tools",
  "Manual approvals and follow-ups",
  "Limited sales and customer visibility",
  "Inconsistent master data",
  "Delayed management reporting",
  "Infrastructure and service blind spots",
];

const CAPABILITIES = [
  "ERPNext and business systems",
  "CRM and CLM",
  "AI Sales Tracker",
  "AI agents and workflow automation",
  "Data Center Management",
  "Dashboards and analytics",
];

const ADOPTION_STEPS = [
  "Prioritize",
  "Prototype or configure",
  "Validate",
  "Go live",
  "Stabilize and expand",
];

export default function EnterpriseSmeIndustryPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-white">
        <div className="container-pmrg py-16 sm:py-20 text-center">
          <div className="mx-auto max-w-4xl">
            <p className="eyebrow-light"> Enterprise &amp; SME</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-fg-dark sm:text-5xl">
              Practical enterprise transformation for organizations that need
              visibility and speed.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-fg-dark-muted">
              PMRG connects process improvement, enterprise systems and AI
              automation through phased implementation designed around business
              priorities.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/contact?type=enterprise">
                Request an Enterprise Discovery Session
              </Button>
              <Button href="/solutions/enterprise-solutions" variant="outline" size="lg">
                Explore Enterprise Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-[#f8fafc]">
        <div className="container-pmrg py-16 sm:py-20">
          {/* 1. COMMON GROWTH CONSTRAINTS + RELEVANT CAPABILITIES – 2 col */}
          <div className="grid gap-6 lg:grid-cols-2">
            <GlassCard theme="light" className="p-8 sm:p-10">
              <h2 className="text-2xl font-semibold text-fg-dark">
                Common growth constraints
              </h2>
              <p className="mt-2 text-sm text-fg-dark-muted">
                Technology investment often follows symptoms rather than the
                underlying operating model.
              </p>
              <ul className="mt-5 space-y-3">
                {GROWTH_CONSTRAINTS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-fg-dark-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard theme="light" className="p-8 sm:p-10">
              <h2 className="text-2xl font-semibold text-fg-dark">
                Relevant PMRG capabilities
              </h2>
              <p className="mt-2 text-sm text-fg-dark-muted">
                Select and combine only the capabilities required for the current
                priority.
              </p>
              <ul className="mt-5 space-y-3">
                {CAPABILITIES.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-fg-dark-muted"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>

          {/* 2. PHASED ADOPTION */}
          <GlassCard theme="light" className="mt-6 p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-fg-dark">
              Phased adoption
            </h2>
            <p className="mt-2 text-sm text-fg-dark-muted">
              Protect business continuity by sequencing discovery, core
              configuration, integrations, UAT, go-live and stabilization.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {ADOPTION_STEPS.map((step, i) => (
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

          {/* 3. FINAL CTA */}
          <GlassCard theme="light" className="mt-6 p-8 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold text-fg-dark">
                  Discuss your business context
                </h2>
                <p className="mt-2 text-sm text-fg-dark-muted">
                  Tell us about your specific operating environment and
                  priorities. We&apos;ll recommend the right starting point.
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
