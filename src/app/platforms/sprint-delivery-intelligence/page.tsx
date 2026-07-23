import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "Sprint Planning & Delivery Intelligence Platform | PMRG",
  description:
    "Plan sprints, track commitments, expose dependencies and improve delivery governance across teams, milestones and vendors.",
  alternates: { canonical: "/platforms/sprint-delivery-intelligence" },
};

const PLANNING = [
  "Backlog and priority view",
  "Capacity and allocation",
  "Dependency mapping",
  "Milestone alignment",
  "Definition of ready",
];

const EXECUTION_INTELLIGENCE = [
  "Commitment versus completion",
  "Blocked and aging work",
  "Dependency exposure",
  "Risk and issue trends",
  "Vendor commitments",
];

const QUALITY_READINESS = [
  "Defect trends",
  "UAT status",
  "Acceptance evidence",
  "Release criteria",
  "Readiness scorecards",
];

const LEADERSHIP_DASHBOARDS = [
  "Sprint dashboard",
  "Program dashboard",
  "Vendor dashboard",
  "Risk and dependency dashboard",
  "Executive summary",
];

export default function SprintDeliveryIntelligencePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-white">
        <div className="container-pmrg py-16 sm:py-20">
          <div className="max-w-4xl">
            <p className="eyebrow-light">Platform</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-fg-dark sm:text-5xl">
              Move from sprint activity to delivery intelligence.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-fg-dark-muted">
              Connect plans, capacity, dependencies, risks, commitments and
              outcomes so delivery leaders can act before slippage becomes status
              history.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact?type=demo">
                Request a Sprint Intelligence Demo
              </Button>
              <Link
                href="/contact?type=capability-map"
                className="inline-flex items-center gap-1 rounded-lg border border-light-line px-6 py-3 text-sm font-medium text-fg-dark transition-colors hover:bg-[#f1f5f9]"
              >
                Review the Capability Map
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-[#f8fafc]">
        <div className="container-pmrg py-16 sm:py-20">
          {/* 1. PLANNING + EXECUTION – 2 col */}
          <div className="grid gap-6 lg:grid-cols-2">
            <GlassCard theme="light" className="p-8 sm:p-10">
              <h2 className="text-2xl font-semibold text-fg-dark">Planning</h2>
              <p className="mt-2 text-sm text-fg-dark-muted">
                Create a governed planning view across priorities, capacity and
                dependencies.
              </p>
              <ul className="mt-5 space-y-3">
                {PLANNING.map((item) => (
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

            <GlassCard theme="light" className="p-8 sm:p-10">
              <h2 className="text-2xl font-semibold text-fg-dark">
                Execution intelligence
              </h2>
              <p className="mt-2 text-sm text-fg-dark-muted">
                Surface progress, exceptions and evidence across teams and
                vendors.
              </p>
              <ul className="mt-5 space-y-3">
                {EXECUTION_INTELLIGENCE.map((item) => (
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

          {/* 2. QUALITY + DASHBOARDS – 2 col */}
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <GlassCard theme="light" className="p-8 sm:p-10">
              <h2 className="text-2xl font-semibold text-fg-dark">
                Quality and readiness
              </h2>
              <p className="mt-2 text-sm text-fg-dark-muted">
                Connect development activity to testing, acceptance and release
                readiness.
              </p>
              <ul className="mt-5 space-y-3">
                {QUALITY_READINESS.map((item) => (
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

            <GlassCard theme="light" className="p-8 sm:p-10">
              <h2 className="text-2xl font-semibold text-fg-dark">
                Leadership dashboards
              </h2>
              <p className="mt-2 text-sm text-fg-dark-muted">
                Provide different views for teams, PMO, delivery leadership and
                executives.
              </p>
              <ul className="mt-5 space-y-3">
                {LEADERSHIP_DASHBOARDS.map((item) => (
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

          {/* FINAL CTA */}
          <GlassCard theme="light" className="mt-6 p-8 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold text-fg-dark">
                  Request a Sprint Intelligence Demo
                </h2>
                <p className="mt-2 text-sm text-fg-dark-muted">
                  See how delivery plans, commitments, risks and outcomes
                  connect in one intelligence view.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="/contact?type=demo">
                  Request a Demo
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link
                  href="/contact?type=capability-map"
                  className="inline-flex items-center gap-1 rounded-lg border border-light-line px-6 py-3 text-sm font-medium text-fg-dark transition-colors hover:bg-[#f1f5f9]"
                >
                  Review the Capability Map
                </Link>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}
