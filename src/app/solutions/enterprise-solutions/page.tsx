import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "Enterprise ERP, CRM, Automation & AI Solutions | PMRG",
  description:
    "Modernize operations with ERPNext, CRM, customer lifecycle, workflow automation, analytics and infrastructure visibility from PMRG.",
  alternates: { canonical: "/solutions/enterprise-solutions" },
};

// Document: "Where PMRG helps" – 6 business areas
const BUSINESS_AREAS = [
  "Finance, procurement and inventory",
  "Sales, CRM and customer lifecycle",
  "HR and workforce operations",
  "Projects, service and support",
  "Data center and infrastructure operations",
  "Management analytics and reporting",
];

// Document: "ERPNext and business systems" – 6 steps
const ERP_STEPS = [
  "Process discovery",
  "Core configuration",
  "Master-data preparation",
  "Role and workflow setup",
  "Reports and dashboards",
  "UAT, go-live and stabilization",
];

// Document: "CRM and customer lifecycle" – 5 items
const CRM_CAPABILITIES = [
  "Lead and opportunity management",
  "Sales activity and follow-up",
  "Customer 360",
  "Service and issue journeys",
  "Lifecycle reporting",
];

// Document: "AI automation" – 5 items
const AI_AUTOMATION = [
  "Document intelligence",
  "Knowledge assistants",
  "Operational copilots",
  "Exception and risk detection",
  "Workflow recommendations",
];

// Document: "Delivery approach" – 5 steps
const DELIVERY_STEPS = [
  "Business-process assessment",
  "Target architecture",
  "Prioritized backlog",
  "Phased implementation",
  "Adoption and support",
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
              Modernize processes. Automate decisions. Improve visibility.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-fg-dark-muted">
              PMRG helps growing and established organizations simplify operations
              through enterprise platforms, AI automation, integration and governed
              delivery.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">Map a Transformation Sprint</Button>
              <Link
                href="/contact?type=erp"
                className="inline-flex items-center gap-1 rounded-lg border border-light-line px-6 py-3 text-sm font-medium text-fg-dark transition-colors hover:bg-[#f1f5f9]"
              >
                Discuss an ERP or Automation Need
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-[#f8fafc]">
        <div className="container-pmrg py-16 sm:py-20">
          {/* 1. WHERE PMRG HELPS */}
          <div>
            <h2 className="text-2xl font-semibold text-fg-dark">
              Where PMRG helps
            </h2>
            <p className="mt-1 text-sm text-fg-dark-muted">
              Prioritize the processes that create delays, duplicate effort,
              inconsistent data or management blind spots.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {BUSINESS_AREAS.map((area) => (
                <GlassCard
                  key={area}
                  theme="light"
                  className="p-6 text-sm text-fg-dark"
                >
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    {area}
                  </span>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* 2. ERPNEXT + CRM – side by side */}
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <GlassCard theme="light" className="p-8 sm:p-10">
              <h2 className="text-2xl font-semibold text-fg-dark">
                ERPNext and business systems
              </h2>
              <p className="mt-2 text-sm text-fg-dark-muted">
                Configure and implement integrated processes aligned to how the
                organization actually operates.
              </p>
              <ul className="mt-5 space-y-3">
                {ERP_STEPS.map((step) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 text-sm text-fg-dark-muted"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard theme="light" className="p-8 sm:p-10">
              <h2 className="text-2xl font-semibold text-fg-dark">
                CRM and customer lifecycle
              </h2>
              <p className="mt-2 text-sm text-fg-dark-muted">
                Connect leads, opportunities, onboarding, service, retention and
                management visibility.
              </p>
              <ul className="mt-5 space-y-3">
                {CRM_CAPABILITIES.map((item) => (
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

          {/* 3. AI AUTOMATION */}
          <GlassCard theme="light" className="mt-6 p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-fg-dark">AI automation</h2>
            <p className="mt-2 text-sm text-fg-dark-muted">
              Apply AI to repeatable knowledge and workflow tasks with clear
              ownership, approvals and auditability.
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {AI_AUTOMATION.map((item) => (
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

          {/* 4. DELIVERY APPROACH (replaces "Typical use cases") */}
          <GlassCard theme="light" className="mt-6 p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-fg-dark">
              Delivery approach
            </h2>
            <p className="mt-2 text-sm text-fg-dark-muted">
              Start small enough to learn and structured enough to scale.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {DELIVERY_STEPS.map((step) => (
                <div
                  key={step}
                  className="rounded-xl border border-light-line bg-white px-4 py-3 text-center text-sm text-fg-dark"
                >
                  {step}
                </div>
              ))}
            </div>
          </GlassCard>

          {/* 5. FINAL CTA – exact document copy */}
          <GlassCard theme="light" className="mt-6 p-8 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold text-fg-dark">
                  Map a Transformation Sprint
                </h2>
                <p className="mt-2 text-sm text-fg-dark-muted">
                  Have a specific process or operational challenge? Let's define the
                  scope, architecture and execution plan together.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button href="/contact">
                  Map a Transformation Sprint
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link
                  href="/contact?type=erp"
                  className="inline-flex items-center gap-1 rounded-lg border border-light-line px-6 py-3 text-sm font-medium text-fg-dark transition-colors hover:bg-[#f1f5f9]"
                >
                  Discuss an ERP or Automation Need
                </Link>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}