import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle,
  ChevronRight,
  Database,
  HardDrive,
  Server,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";

import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { RevealGroup, RevealItem } from "@/components/animations/Reveal";

export const metadata: Metadata = {
  title: "Data Center Management & Operational Intelligence | PMRG",
  description:
    "Improve data center visibility across assets, capacity, incidents, energy, maintenance, risk, compliance and executive reporting.",
  alternates: { canonical: "/platforms/data-center-management" },
};

const assetFeatures = [
  "Asset register",
  "Location and rack mapping",
  "Lifecycle and warranty",
  "Dependency relationships",
  "Ownership and status",
];

const capacityFeatures = [
  "Capacity thresholds",
  "Utilization trends",
  "Forecast and reservations",
  "Hotspot identification",
  "Expansion planning",
];

const incidentFeatures = [
  "Incident intake",
  "Severity and escalation",
  "Root-cause evidence",
  "Preventive maintenance",
  "SLA and closure tracking",
];

const riskFeatures = [
  "Energy monitoring",
  "Environmental thresholds",
  "Resilience and availability",
  "Risk register",
  "Audit and compliance evidence",
];

const integrations = [
  "NMS and monitoring",
  "ITSM",
  "CMDB and inventory",
  "IoT and environmental sensors",
  "BI and executive reporting",
];

const whereWeHelp = [
  "Asset and configuration visibility",
  "Capacity and utilization planning",
  "Incident and maintenance management",
  "Energy, risk and compliance",
  "Integration and dashboards",
];

const capabilityCards = [
  {
    icon: "Server",
    title: "Asset & configuration visibility",
    description:
      "Create traceable views across locations, racks, equipment, ownership, state and service relationships.",
    items: assetFeatures,
    tone: "from-blue-500 to-cyan-500",
  },
  {
    icon: "HardDrive",
    title: "Capacity & utilization",
    description:
      "Support planning with evidence across space, power, compute, storage and network capacity.",
    items: capacityFeatures,
    tone: "from-indigo-500 to-violet-500",
  },
  {
    icon: "Shield",
    title: "Incident & maintenance",
    description:
      "Connect alarms, incidents, actions and maintenance history.",
    items: incidentFeatures,
    tone: "from-red-500 to-rose-500",
  },
  {
    icon: "BarChart3",
    title: "Energy, risk & compliance",
    description:
      "Create management visibility across operational efficiency, resilience and control obligations.",
    items: riskFeatures,
    tone: "from-amber-500 to-orange-500",
  },
];

export default function DataCenterManagementPage() {
  return (
    <>
      <PageHero
        eyebrow="Infrastructure Intelligence"
        title={
          <>
            See the infrastructure. Understand the risk.{" "}
            <span className="text-gradient">Act with confidence.</span>
          </>
        }
        description="PMRG's data center management approach connects operational, asset, capacity and incident information into one governed view."
      >
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <Button href="/contact" size="lg">
            Request a Data Center Assessment
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <Button href="#capabilities" variant="outline" size="lg">
            Explore the Capability Map
          </Button>
        </div>
      </PageHero>

      <section data-section-theme="light" className="section-light section">
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            eyebrow="What we do"
            title="Data center operational intelligence"
            description="PMRG helps infrastructure teams improve visibility across assets, capacity, incidents, energy, risk and operational readiness."
          />

          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whereWeHelp.map((item, i) => (
              <RevealItem key={item} as="div" variant="slide-up">
                <GlassCard theme="light" className="flex h-full items-start gap-3 p-6">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-soft font-mono text-sm font-bold text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-fg-dark">{item}</span>
                </GlassCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section id="capabilities" data-section-theme="light" className="section-light section border-t border-light-line">
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            eyebrow="Capability map"
            title="Complete infrastructure visibility"
            description="From asset inventory to executive reporting."
          />

          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {capabilityCards.map((card) => (
              <RevealItem key={card.title} as="div" variant="slide-up">
                <GlassCard theme="light" className="flex h-full flex-col p-8">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${card.tone} text-white`}
                  >
                    <Icon name={card.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-fg-dark">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-dark-muted">
                    {card.description}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        <span className="text-sm leading-relaxed text-fg-dark-muted">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section data-section-theme="light" className="section-light section">
        <div className="container-pmrg">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                theme="light"
                eyebrow="Integration & dashboards"
                title="Integration & dashboards"
                description="Integrate with monitoring, service, inventory and reporting systems according to the target architecture."
              />
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {integrations.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-light-line bg-white p-4"
                  >
                    <ChevronRight className="h-4 w-4 text-brand" />
                    <span className="text-sm text-fg-dark-muted">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <GlassCard theme="light" className="p-8">
              <div className="flex items-center gap-2 text-brand">
                <Database className="h-5 w-5" />
                <span className="font-semibold">Operational notes</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-fg-dark-muted">
                Real-time monitoring is dependent on source-system integrations.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-light-line bg-white p-4 text-center">
                  <Server className="mx-auto h-5 w-5 text-brand" />
                  <p className="mt-2 text-sm text-fg-dark-muted">Monitoring</p>
                </div>
                <div className="rounded-xl border border-light-line bg-white p-4 text-center">
                  <Shield className="mx-auto h-5 w-5 text-brand" />
                  <p className="mt-2 text-sm text-fg-dark-muted">Compliance</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section data-section-theme="light" className="section-light section border-t border-light-line">
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            eyebrow="Insights"
            title="Complete infrastructure visibility"
            description="Create management visibility across operational efficiency, resilience and control obligations."
          />

          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Asset and configuration visibility",
              "Capacity and utilization planning",
              "Incident and maintenance management",
              "Energy, risk and compliance",
              "Integration and dashboards",
            ].map((item, i) => (
              <RevealItem key={item} as="div" variant="slide-up">
                <GlassCard theme="light" className="flex h-full flex-col items-center p-6 text-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand/20 bg-brand-soft font-mono text-sm font-bold text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <BarChart3 className="mt-4 h-6 w-6 text-brand" />
                  <p className="mt-3 text-sm leading-relaxed text-fg-dark">{item}</p>
                </GlassCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section data-section-theme="light" className="section-light section">
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            eyebrow="CTA"
            title="Get full visibility into your data center operations."
            description=""
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact" size="lg">
              Request a Data Center Assessment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button href="/solutions/enterprise-solutions" variant="outline" size="lg">
              Explore Enterprise Solutions
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}