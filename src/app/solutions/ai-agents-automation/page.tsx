import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "Enterprise AI Agents & Workflow Automation | PMRG",
  description:
    "Design and deploy governed AI agents and copilots for knowledge, operations, service, sales and decision support.",
  alternates: { canonical: "/solutions/ai-agents-automation" },
};

// Document: "Where agents create value" – exact match
const CAPABILITIES = [
  "Knowledge and policy assistants",
  "Sales and follow-up copilots",
  "Project and governance agents",
  "Customer service support",
  "Document and requirement analysis",
  "Operational monitoring and exception alerts",
];

// Document: "Engagement path" – 5 steps (added missing "Production rollout and monitoring")
const ENGAGEMENT_STEPS = [
  "Use-case prioritization",
  "Data and security assessment",
  "Prototype",
  "Pilot with acceptance criteria",
  "Production rollout and monitoring",
];

// Document: "Human-in-the-loop by design" – key pillars
const HUMAN_OVERSIGHT = [
  "Defined decision rights",
  "Confidence and exception thresholds",
  "Approval workflows",
  "Audit history",
  "Feedback and correction loops", // added from doc
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section – exact copy from document */}
      <section className="bg-white">
        <div className="container-pmrg py-16 sm:py-20">
          <div className="max-w-4xl">
            <p className="eyebrow-light">Solutions</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-fg-dark sm:text-5xl">
              AI agents that work inside your operating model---not outside your control.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-fg-dark-muted">
              PMRG identifies high-value agentic use cases, designs the architecture and embeds human oversight, security, evidence and measurable execution.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-[#f8fafc]">
        <div className="container-pmrg py-16 sm:py-20">
          {/* Two column: What it does / Who it is for */}
          <div className="grid gap-6 lg:grid-cols-2">
            <GlassCard theme="light" className="p-8 sm:p-10">
              <h2 className="text-2xl font-semibold text-fg-dark">Where agents create value</h2>
              <p className="mt-4 text-sm leading-relaxed text-fg-dark-muted">
                Select tasks with repeatable inputs, clear decision boundaries and evidence that can be verified.
              </p>
            </GlassCard>

            <GlassCard theme="light" className="p-8 sm:p-10">
              <h2 className="text-2xl font-semibold text-fg-dark">Who it is for</h2>
              <p className="mt-4 text-sm leading-relaxed text-fg-dark-muted">
                Business leaders, CIOs, operations heads and product teams.
              </p>
            </GlassCard>
          </div>

          {/* Key capabilities list */}
          <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <GlassCard theme="light" className="p-8 sm:p-10">
              <h2 className="text-2xl font-semibold text-fg-dark">Key capabilities</h2>
              <ul className="mt-5 space-y-3">
                {CAPABILITIES.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-fg-dark-muted">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            {/* Human-in-the-loop by design */}
            <GlassCard theme="light" className="p-8 sm:p-10">
              <h2 className="text-2xl font-semibold text-fg-dark">Human-in-the-loop by design</h2>
              <p className="mt-2 text-sm text-fg-dark-muted">
                AI can organize evidence, draft responses and recommend actions. Accountable users approve material decisions and external communication.
              </p>
              <div className="mt-5 space-y-3">
                {HUMAN_OVERSIGHT.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-light-line bg-light-bg-grey px-4 py-3 text-sm text-fg-dark"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Engagement path (was "Typical use cases") – now matches document */}
          <GlassCard theme="light" className="mt-6 p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-fg-dark">Engagement path</h2>
            <p className="mt-2 text-sm text-fg-dark-muted">
              Begin with use-case assessment and feasibility, then move through prototype, controlled pilot and production hardening.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {ENGAGEMENT_STEPS.map((step) => (
                <div
                  key={step}
                  className="rounded-xl border border-light-line bg-light-bg-grey p-4 text-sm text-fg-dark"
                >
                  {step}
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Reference architecture – new section as per document */}
          <GlassCard theme="light" className="mt-6 p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-fg-dark">Reference architecture</h2>
            <p className="mt-2 text-sm text-fg-dark-muted">
              A modular architecture separates channels, orchestration, models, enterprise tools, data and governance controls.
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {[
                "User and system channels",
                "Agent orchestration",
                "Model and tool layer",
                "Enterprise integrations",
                "Knowledge and data layer",
                "Identity, security, monitoring and audit",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-fg-dark-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>

          {/* Final CTA – matches document exactly */}
          <GlassCard theme="light" className="mt-6 p-8 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold text-fg-dark">
                  Identify an Agentic AI Use Case
                </h2>
                <p className="mt-2 text-sm text-fg-dark-muted">
                  Ready to explore where AI agents can add value in your organization? Start with a focused assessment.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button href="/contact">
                  Identify an Agentic AI Use Case
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-1 text-sm font-medium text-brand"
                >
                  Discuss the Architecture
                </Link>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}