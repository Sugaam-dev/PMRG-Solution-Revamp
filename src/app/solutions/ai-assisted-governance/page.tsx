import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "AI-Assisted Enterprise Governance Platform | PMRG",
  description:
    "Improve delivery accountability, risk visibility and executive decisions through PMRG's AI-assisted governance platform and agent ecosystem.",
  alternates: { canonical: "/solutions/ai-assisted-governance" },
};

// Document: "Why transformation programs lose control"
const PAIN_POINTS = [
  "Fragmented requirement ownership",
  "Late risk and dependency visibility",
  "Manual status consolidation",
  "Weak vendor and SLA accountability",
  "Disconnected UAT and release readiness",
  "Decisions without traceable evidence",
];

// Document: "Four connected governance layers"
const GOVERNANCE_LAYERS = [
  {
    title: "Executive governance",
    items: ["Priorities", "Investment", "Exposure", "Decision support"],
  },
  {
    title: "Organizational governance",
    items: ["Portfolios", "Capacity", "Dependencies", "Policy alignment"],
  },
  {
    title: "Project governance",
    items: ["Scope", "Milestones", "RAID", "Vendors", "Approvals", "UAT"],
  },
  {
    title: "Technical governance",
    items: [
      "Architecture",
      "Integration",
      "Quality",
      "Releases",
      "Security",
      "Technical debt",
    ],
  },
];

// Document: "Agent ecosystem"
const AGENTS = [
  {
    name: "Requirement Agent",
    desc: "Completeness, ambiguity, traceability and change impact.",
  },
  {
    name: "PMO Agent",
    desc: "Milestones, dependencies, risk trends and status quality.",
  },
  {
    name: "Vendor Agent",
    desc: "Commitments, SLA exposure, deliverables and escalations.",
  },
  {
    name: "UAT Agent",
    desc: "Coverage, defects, readiness and acceptance evidence.",
  },
  {
    name: "Executive Agent",
    desc: "Cross-program summaries, decisions and forward-looking exposure.",
  },
];

// Document: "Core capabilities" – exact 8 items
const CAPABILITIES = [
  "Requirement and change governance",
  "Sprint and milestone intelligence",
  "RAID and dependency management",
  "Vendor, SLA and escalation governance",
  "Approval and decision register",
  "Testing, UAT and release readiness",
  "Document and evidence repository",
  "Role-based dashboards and alerts",
];

// Document: "Engagement model"
const ENGAGEMENT_STEPS = [
  "Assessment",
  "Governance blueprint",
  "PoC or pilot",
  "Phased implementation",
  "Adoption and continuous improvement",
];

// Document: "Architecture, security and integration" points
const ARCHITECTURE_PILLARS = [
  "Role-based access and least privilege",
  "Encryption in transit and at rest",
  "Audit logs and traceable recommendations",
  "Human approval for material actions",
  "Configurable data retention and deployment patterns",
  "Integration with enterprise identity and reporting",
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
              Turn delivery data into accountable decisions.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-fg-dark-muted">
              PMRG&apos;s AI-assisted governance approach connects requirements,
              delivery, vendors, testing, risks, approvals and executive reporting
              into one governed decision layer.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">Request a Governance Assessment</Button>
              <Link
                href="/contact?type=demo"
                className="inline-flex items-center gap-1 rounded-lg border border-light-line px-6 py-3 text-sm font-medium text-fg-dark transition-colors hover:bg-[#f1f5f9]"
              >
                Schedule a Platform Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-[#f8fafc]">
        <div className="container-pmrg py-16 sm:py-20">
          {/* 1. WHY TRANSFORMATION PROGRAMS LOSE CONTROL */}
          <GlassCard theme="light" className="p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-fg-dark">
              Why transformation programs lose control
            </h2>
            <p className="mt-2 text-sm text-fg-dark-muted">
              Critical information sits across tools, documents, meetings and
              vendors. Leadership receives delayed summaries while dependencies,
              approval gaps and delivery risks grow underneath.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {PAIN_POINTS.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-light-line bg-white px-4 py-3 text-sm text-fg-dark"
                >
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* 2. FOUR CONNECTED GOVERNANCE LAYERS */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-fg-dark">
              Four connected governance layers
            </h2>
            <p className="mt-1 text-sm text-fg-dark-muted">
              The platform turns operational activity into progressively richer
              management and decision intelligence.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {GOVERNANCE_LAYERS.map((layer) => (
                <GlassCard key={layer.title} theme="light" className="p-6">
                  <h3 className="text-lg font-semibold text-fg-dark">
                    {layer.title}
                  </h3>
                  <ul className="mt-3 space-y-1.5">
                    {layer.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-fg-dark-muted"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* 3. AGENT ECOSYSTEM */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-fg-dark">
              Agent ecosystem
            </h2>
            <p className="mt-1 text-sm text-fg-dark-muted">
              Role-aligned AI agents organize evidence, surface exceptions and
              recommend action while accountable users retain decision authority.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {AGENTS.map((agent) => (
                <GlassCard key={agent.name} theme="light" className="p-6">
                  <h3 className="text-base font-semibold text-fg-dark">
                    {agent.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-fg-dark-muted">
                    {agent.desc}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* 4. CORE CAPABILITIES */}
          <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <GlassCard theme="light" className="p-8 sm:p-10">
              <h2 className="text-2xl font-semibold text-fg-dark">
                Core capabilities
              </h2>
              <p className="mt-2 text-sm text-fg-dark-muted">
                A governed workspace for delivery intelligence, not another
                disconnected task tracker.
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

            <GlassCard theme="light" className="p-8 sm:p-10">
              <h2 className="text-2xl font-semibold text-fg-dark">
                Architecture, security &amp; integration
              </h2>
              <p className="mt-2 text-sm text-fg-dark-muted">
                Integrate with existing project, service, source-control, testing,
                document and communication tools through APIs and controlled data
                pipelines.
              </p>
              <ul className="mt-5 space-y-2.5">
                {ARCHITECTURE_PILLARS.map((item) => (
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
          </div>

          {/* 5. ENGAGEMENT MODEL (replaces "Typical use cases") */}
          <GlassCard theme="light" className="mt-6 p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-fg-dark">
              Engagement model
            </h2>
            <p className="mt-2 text-sm text-fg-dark-muted">
              Begin with a maturity assessment, select priority use cases, validate
              through a focused pilot and scale through measurable governance waves.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {ENGAGEMENT_STEPS.map((step) => (
                <div
                  key={step}
                  className="rounded-xl border border-light-line bg-white px-4 py-3 text-sm text-fg-dark"
                >
                  {step}
                </div>
              ))}
            </div>
          </GlassCard>

          {/* 6. FINAL CTA – exact document copy */}
          <GlassCard theme="light" className="mt-6 p-8 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold text-fg-dark">
                  See where delivery decisions are delayed, evidence is fragmented
                  and accountability can be strengthened.
                </h2>
                <p className="mt-2 text-sm text-fg-dark-muted">
                  Start with a focused assessment or schedule a platform demo.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button href="/contact">
                  Request a Governance Assessment
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link
                  href="/contact?type=demo"
                  className="inline-flex items-center gap-1 rounded-lg border border-light-line px-6 py-3 text-sm font-medium text-fg-dark transition-colors hover:bg-[#f1f5f9]"
                >
                  Schedule a Platform Demo
                </Link>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}