import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "AI Governance Layer for Delivery & Decisions | PMRG",
  description:
    "A configurable governance layer for requirements, sprints, vendors, risks, approvals, UAT, releases and executive intelligence.",
  alternates: { canonical: "/platforms/ai-governance-layer" },
};

const PLATFORM_MODULES = [
  "Requirement governance",
  "Program and sprint oversight",
  "RAID and dependencies",
  "Vendor and SLA governance",
  "Approvals and decisions",
  "Testing, UAT and release",
  "Document evidence",
  "Executive dashboards",
];

const AI_INTELLIGENCE = [
  "Completeness and consistency checks",
  "Trend and exception detection",
  "Impact and dependency analysis",
  "Status-quality checks",
  "Executive narrative generation",
  "Decision and escalation prompts",
];

const INTEGRATION_MODEL = [
  "Project and work management",
  "Source control and CI/CD",
  "Testing and defect tools",
  "Document repositories",
  "Communication platforms",
  "BI and reporting",
];

const DEPLOYMENT_CONTROLS = [
  "Role-based access",
  "Identity integration",
  "Audit and observability",
  "Data retention",
  "Model and prompt controls",
  "Human approval",
];

export default function AiGovernanceLayerPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-white">
        <div className="container-pmrg py-16 sm:py-20">
          <div className="max-w-4xl">
            <p className="eyebrow-light">Platform</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-fg-dark sm:text-5xl">
              One governance layer across delivery, vendors, risk and decisions.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-fg-dark-muted">
              Bring evidence from existing tools into a role-based governance
              workspace that highlights exceptions, traceability and decisions
              requiring attention.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact?type=demo">Schedule a Platform Demo</Button>
              <Link
                href="/contact?type=fit-assessment"
                className="inline-flex items-center gap-1 rounded-lg border border-light-line px-6 py-3 text-sm font-medium text-fg-dark transition-colors hover:bg-[#f1f5f9]"
              >
                Request a Fit Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-[#f8fafc]">
        <div className="container-pmrg py-16 sm:py-20">
          {/* 1. PLATFORM MODULES + AI INTELLIGENCE – 2 col */}
          <div className="grid gap-6 lg:grid-cols-2">
            <GlassCard theme="light" className="p-8 sm:p-10">
              <h2 className="text-2xl font-semibold text-fg-dark">
                Platform modules
              </h2>
              <p className="mt-2 text-sm text-fg-dark-muted">
                Configure the platform around the governance areas that matter
                most.
              </p>
              <ul className="mt-5 space-y-3">
                {PLATFORM_MODULES.map((item) => (
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
                AI-supported intelligence
              </h2>
              <p className="mt-2 text-sm text-fg-dark-muted">
                Use AI to summarize evidence, detect gaps and recommend actions
                while retaining human accountability.
              </p>
              <ul className="mt-5 space-y-3">
                {AI_INTELLIGENCE.map((item) => (
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

          {/* 2. INTEGRATION MODEL + DEPLOYMENT – 2 col */}
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <GlassCard theme="light" className="p-8 sm:p-10">
              <h2 className="text-2xl font-semibold text-fg-dark">
                Integration model
              </h2>
              <p className="mt-2 text-sm text-fg-dark-muted">
                Connect through APIs, events or controlled batch ingestion
                according to enterprise constraints.
              </p>
              <ul className="mt-5 space-y-3">
                {INTEGRATION_MODEL.map((item) => (
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
                Deployment and controls
              </h2>
              <p className="mt-2 text-sm text-fg-dark-muted">
                Deployment architecture is selected with the client&apos;s
                security, data and operational requirements.
              </p>
              <ul className="mt-5 space-y-3">
                {DEPLOYMENT_CONTROLS.map((item) => (
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
                  Schedule a Platform Demo
                </h2>
                <p className="mt-2 text-sm text-fg-dark-muted">
                  See how the governance layer connects delivery evidence, risk
                  signals and decision workflows in one workspace.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="/contact?type=demo">
                  Schedule a Platform Demo
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link
                  href="/contact?type=fit-assessment"
                  className="inline-flex items-center gap-1 rounded-lg border border-light-line px-6 py-3 text-sm font-medium text-fg-dark transition-colors hover:bg-[#f1f5f9]"
                >
                  Request a Fit Assessment
                </Link>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}