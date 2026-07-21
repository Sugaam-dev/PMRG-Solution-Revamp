import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "Telecom BSS/OSS, CLM & Transformation Consulting | PMRG",
  description:
    "PMRG supports telecom customer lifecycle, catalog, order, inventory, billing, orchestration, activation and AI-led delivery governance.",
  alternates: { canonical: "/solutions/telecom-bss-oss" },
};

// Document: "Customer and channel"
const CUSTOMER_CHANNEL = [
  "CRM and customer lifecycle",
  "Digital self-care",
  "Customer 360",
  "KYC and document journeys",
  "Notifications, service and support",
];

// Document: "Product, order and orchestration"
const PRODUCT_ORDER = [
  "Product catalog",
  "Order capture and decomposition",
  "Service order management",
  "Orchestration and activation",
  "Fallout and retry management",
];

// Document: "Inventory, charging and billing"
const INVENTORY_BILLING = [
  "Resource and service inventory",
  "Number and SIM lifecycle",
  "Charging and balance interactions",
  "Billing and invoice processes",
  "Payments, refunds and reconciliation",
];

// Document: "Architecture and modernization"
const ARCHITECTURE_MODERNIZATION = [
  "Capability and gap assessment",
  "ODA-aligned architecture",
  "API and event integration",
  "Migration and cutover planning",
  "Cloud, security and observability",
];

// Document: "AI-led governance"
const AI_GOVERNANCE = [
  "Requirement traceability",
  "Multi-vendor governance",
  "UAT and release readiness",
  "SLA and dependency intelligence",
  "Executive program dashboards",
];

// Document: "Why PMRG"
const WHY_PMRG = [
  "Business-to-technology translation",
  "End-to-end BSS/OSS perspective",
  "Architecture and implementation alignment",
  "Governed delivery across stakeholders",
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
              Telecom transformation grounded in architecture, customer lifecycle
              and execution reality.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-fg-dark-muted">
              PMRG combines BSS/OSS domain expertise with AI-assisted governance,
              enterprise architecture and implementation leadership.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">Discuss a Telecom Use Case</Button>
              <Link
                href="/contact?type=telecom"
                className="inline-flex items-center gap-1 rounded-lg border border-light-line px-6 py-3 text-sm font-medium text-fg-dark transition-colors hover:bg-[#f1f5f9]"
              >
                Request a Reference Architecture Session
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-[#f8fafc]">
        <div className="container-pmrg py-16 sm:py-20">
          {/* 1. CUSTOMER + PRODUCT + INVENTORY – 3 column grid */}
          <div className="grid gap-6 lg:grid-cols-3">
            <GlassCard theme="light" className="p-8 sm:p-10">
              <h2 className="text-2xl font-semibold text-fg-dark">
                Customer and channel
              </h2>
              <p className="mt-2 text-sm text-fg-dark-muted">
                Design consistent assisted and digital journeys across onboarding,
                self-care, service and retention.
              </p>
              <ul className="mt-5 space-y-3">
                {CUSTOMER_CHANNEL.map((item) => (
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
                Product, order and orchestration
              </h2>
              <p className="mt-2 text-sm text-fg-dark-muted">
                Connect commercial intent to feasible, traceable and governed
                service fulfillment.
              </p>
              <ul className="mt-5 space-y-3">
                {PRODUCT_ORDER.map((item) => (
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
                Inventory, charging and billing
              </h2>
              <p className="mt-2 text-sm text-fg-dark-muted">
                Align resource availability, service state, commercial policy and
                financial events.
              </p>
              <ul className="mt-5 space-y-3">
                {INVENTORY_BILLING.map((item) => (
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

          {/* 2. ARCHITECTURE + AI GOVERNANCE – 2 column grid */}
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <GlassCard theme="light" className="p-8 sm:p-10">
              <h2 className="text-2xl font-semibold text-fg-dark">
                Architecture and modernization
              </h2>
              <p className="mt-2 text-sm text-fg-dark-muted">
                Support target architecture, product selection, migration,
                integration and phased transformation.
              </p>
              <ul className="mt-5 space-y-3">
                {ARCHITECTURE_MODERNIZATION.map((item) => (
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
                AI-led governance
              </h2>
              <p className="mt-2 text-sm text-fg-dark-muted">
                Improve requirement quality, vendor accountability, delivery
                visibility, testing and executive decision support across telecom
                programs.
              </p>
              <ul className="mt-5 space-y-3">
                {AI_GOVERNANCE.map((item) => (
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

          {/* 3. WHY PMRG */}
          <GlassCard theme="light" className="mt-6 p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-fg-dark">Why PMRG</h2>
            <p className="mt-2 text-sm text-fg-dark-muted">
              Senior telecom architecture experience combined with practical
              delivery and AI transformation capability.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {WHY_PMRG.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-light-line bg-white px-4 py-3 text-sm text-fg-dark"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* 4. FINAL CTA – exact document copy */}
          <GlassCard theme="light" className="mt-6 p-8 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold text-fg-dark">
                  Discuss a Telecom Use Case
                </h2>
                <p className="mt-2 text-sm text-fg-dark-muted">
                  Have a specific BSS/OSS challenge or transformation goal? Let's
                  review the architecture and define the path forward.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button href="/contact">
                  Discuss a Telecom Use Case
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link
                  href="/contact?type=telecom"
                  className="inline-flex items-center gap-1 rounded-lg border border-light-line px-6 py-3 text-sm font-medium text-fg-dark transition-colors hover:bg-[#f1f5f9]"
                >
                  Request a Reference Architecture Session
                </Link>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}