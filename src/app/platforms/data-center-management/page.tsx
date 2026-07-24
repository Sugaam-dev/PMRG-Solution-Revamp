import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "Data Center Management & Operational Intelligence | PMRG",
  description:
    "Improve data center visibility across assets, capacity, incidents, energy, maintenance, risk, compliance and executive reporting.",
  alternates: { canonical: "/platforms/data-center-management" },
};

const ASSET_VISIBILITY = [
  "Asset register",
  "Location and rack mapping",
  "Lifecycle and warranty",
  "Dependency relationships",
  "Ownership and status",
];

const CAPACITY_UTILIZATION = [
  "Capacity thresholds",
  "Utilization trends",
  "Forecast and reservations",
  "Hotspot identification",
  "Expansion planning",
];

const INCIDENT_MAINTENANCE = [
  "Incident intake",
  "Severity and escalation",
  "Root-cause evidence",
  "Preventive maintenance",
  "SLA and closure tracking",
];

const ENERGY_RISK_COMPLIANCE = [
  "Energy monitoring",
  "Environmental thresholds",
  "Resilience and availability",
  "Risk register",
  "Audit and compliance evidence",
];

const INTEGRATION_DASHBOARDS = [
  "NMS and monitoring",
  "ITSM",
  "CMDB and inventory",
  "IoT and environmental sensors",
  "BI and executive reporting",
];

export default function DataCenterManagementPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-white">
        <div className="container-pmrg py-16 sm:py-20">
          <div className="max-w-4xl">
            <p className="eyebrow-light">Platform</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-fg-dark sm:text-5xl">
              See the infrastructure. Understand the risk. Act with confidence.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-fg-dark-muted">
              PMRG&apos;s data center management approach connects operational,
              asset, capacity and incident information into one governed view.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact?type=assessment">
                Request a Data Center Assessment
              </Button>
              <Link
                href="/contact?type=capability-map"
                className="inline-flex items-center gap-1 rounded-lg border border-light-line px-6 py-3 text-sm font-medium text-fg-dark transition-colors hover:bg-[#f1f5f9]"
              >
                Explore the Capability Map
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-[#f8fafc]">
        <div className="container-pmrg py-16 sm:py-20">
          {/* 1. ASSET + CAPACITY – 2 col */}
          <div className="grid gap-6 lg:grid-cols-2">
            <GlassCard theme="light" className="p-8 sm:p-10">
              <h2 className="text-2xl font-semibold text-fg-dark">
                Asset and configuration visibility
              </h2>
              <p className="mt-2 text-sm text-fg-dark-muted">
                Create traceable views across locations, racks, equipment,
                ownership, state and service relationships.
              </p>
              <ul className="mt-5 space-y-3">
                {ASSET_VISIBILITY.map((item) => (
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
                Capacity and utilization
              </h2>
              <p className="mt-2 text-sm text-fg-dark-muted">
                Support planning with evidence across space, power, compute,
                storage and network capacity.
              </p>
              <ul className="mt-5 space-y-3">
                {CAPACITY_UTILIZATION.map((item) => (
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

          {/* 2. INCIDENT + ENERGY – 2 col */}
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <GlassCard theme="light" className="p-8 sm:p-10">
              <h2 className="text-2xl font-semibold text-fg-dark">
                Incident and maintenance
              </h2>
              <p className="mt-2 text-sm text-fg-dark-muted">
                Connect alarms, incidents, actions and maintenance history.
              </p>
              <ul className="mt-5 space-y-3">
                {INCIDENT_MAINTENANCE.map((item) => (
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
                Energy, risk and compliance
              </h2>
              <p className="mt-2 text-sm text-fg-dark-muted">
                Create management visibility across operational efficiency,
                resilience and control obligations.
              </p>
              <ul className="mt-5 space-y-3">
                {ENERGY_RISK_COMPLIANCE.map((item) => (
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

          {/* 3. INTEGRATION AND DASHBOARDS */}
          <GlassCard theme="light" className="mt-6 p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-fg-dark">
              Integration and dashboards
            </h2>
            <p className="mt-2 text-sm text-fg-dark-muted">
              Integrate with monitoring, service, inventory and reporting
              systems according to the target architecture.
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {INTEGRATION_DASHBOARDS.map((item) => (
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

          {/* FINAL CTA */}
          <GlassCard theme="light" className="mt-6 p-8 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold text-fg-dark">
                  Request a Data Center Assessment
                </h2>
                <p className="mt-2 text-sm text-fg-dark-muted">
                  Understand your current visibility gaps and define a practical
                  roadmap toward governed infrastructure operations.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="/contact?type=assessment">
                  Request an Assessment
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link
                  href="/contact?type=capability-map"
                  className="inline-flex items-center gap-1 rounded-lg border border-light-line px-6 py-3 text-sm font-medium text-fg-dark transition-colors hover:bg-[#f1f5f9]"
                >
                  Explore the Capability Map
                </Link>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}