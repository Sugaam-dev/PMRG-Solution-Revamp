import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  ChevronRight,
  Gauge,
  PieChart,
  Shield,
  Target,
  Zap,
} from "lucide-react";

import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { RevealGroup, RevealItem } from "@/components/animations/Reveal";

export const metadata: Metadata = {
  title: "Sprint Planning & Delivery Intelligence Platform | PMRG",
  description:
    "Plan sprints, track commitments, expose dependencies and improve delivery governance across teams, milestones and vendors.",
  alternates: { canonical: "/platforms/sprint-delivery-intelligence" },
};

const planningFeatures = [
  "Backlog and priority view",
  "Capacity and allocation",
  "Dependency mapping",
  "Milestone alignment",
  "Definition of ready",
];

const executionFeatures = [
  "Commitment versus completion",
  "Blocked and aging work",
  "Dependency exposure",
  "Risk and issue trends",
  "Vendor commitments",
];

const qualityFeatures = [
  "Defect trends",
  "UAT status",
  "Acceptance evidence",
  "Release criteria",
  "Readiness scorecards",
];

const dashboards = [
  { name: "Sprint dashboard", desc: "Team-level progress and blockers" },
  { name: "Program dashboard", desc: "Cross-team milestone tracking" },
  { name: "Vendor dashboard", desc: "SLA and delivery performance" },
  { name: "Risk & dependency dashboard", desc: "Exposure and mitigation status" },
  { name: "Executive summary", desc: "Forward-looking decision intelligence" },
];

const whereWeHelp = [
  "Planning and prioritization",
  "Delivery and execution visibility",
  "Quality and readiness control",
  "Leadership dashboards",
  "Governed vendor oversight",
];

const capabilityCards = [
  {
    icon: "Target",
    title: "Planning",
    description:
      "Create a governed planning view across priorities, capacity and dependencies.",
    items: planningFeatures,
    tone: "from-blue-500 to-cyan-500",
  },
  {
    icon: "Gauge",
    title: "Execution intelligence",
    description:
      "Surface progress, exceptions and evidence across teams and vendors.",
    items: executionFeatures,
    tone: "from-indigo-500 to-violet-500",
  },
  {
    icon: "Shield",
    title: "Quality & readiness",
    description:
      "Connect development activity to testing, acceptance and release readiness.",
    items: qualityFeatures,
    tone: "from-emerald-500 to-teal-500",
  },
];

export default function SprintDeliveryIntelligencePage() {
  return (
    <>
      <PageHero
        eyebrow="Delivery Intelligence"
        title={
          <>
            Move from sprint activity to{" "}
            <span className="text-gradient">delivery intelligence</span>.
          </>
        }
        description="Connect plans, capacity, dependencies, risks, commitments and outcomes so delivery leaders can act before slippage becomes status history."
      >
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <Button href="/contact" size="lg">
            Request a Sprint Intelligence Demo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <Button href="#capabilities" variant="outline" size="lg">
            Review the Capability Map
          </Button>
        </div>
      </PageHero>

      <section data-section-theme="light" className="section-light section">
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            eyebrow="What we do"
            title="End-to-end delivery governance"
            description="From planning to execution to leadership visibility."
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
            title="End-to-end delivery governance"
            description="From planning to execution to leadership visibility."
          />

          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
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
                eyebrow="Dashboards"
                title="Leadership dashboards"
                description="Different views for teams, PMO, delivery leadership and executives."
              />
            </div>

            <GlassCard theme="light" className="p-8">
              <div className="flex items-center gap-2 text-brand">
                <BarChart3 className="h-5 w-5" />
                <span className="font-semibold">Dashboard views</span>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {dashboards.map((d, i) => (
                  <div key={d.name} className="rounded-xl border border-light-line bg-white p-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-soft font-mono text-sm font-bold text-brand">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-fg-dark">{d.name}</h4>
                        <p className="text-xs leading-relaxed text-fg-dark-muted">{d.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section data-section-theme="light" className="section-light section border-t border-light-line">
        <div className="container-pmrg">
          <div className="grid gap-12 lg:grid-cols-2">
            <GlassCard theme="light" className="p-8">
              <div className="flex items-center gap-2 text-brand">
                <PieChart className="h-5 w-5" />
                <span className="font-semibold">Governed visibility</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-fg-dark-muted">
                Positioned as an intelligence and governance layer — not a Jira replacement. Integrates with your existing tools.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-light-line bg-white p-4 text-center">
                  <Gauge className="mx-auto h-5 w-5 text-brand" />
                  <p className="mt-2 text-sm text-fg-dark-muted">Delivery control</p>
                </div>
                <div className="rounded-xl border border-light-line bg-white p-4 text-center">
                  <Shield className="mx-auto h-5 w-5 text-brand" />
                  <p className="mt-2 text-sm text-fg-dark-muted">Readiness checks</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard theme="light" className="p-8">
              <div className="flex items-center gap-2 text-brand">
                <ChevronRight className="h-5 w-5" />
                <span className="font-semibold">Notes</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-fg-dark-muted">
                Different views for teams, PMO, delivery leadership and executives.
              </p>
              <div className="mt-6 rounded-xl border border-light-line bg-white p-4">
                <p className="text-sm text-fg-dark-muted">
                  <span className="font-semibold text-fg-dark">Focus:</span> planning, execution, quality, readiness and leadership reporting.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section data-section-theme="light" className="section-light section">
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            eyebrow="CTA"
            title="Get delivery intelligence before problems escalate."
            description=""
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact" size="lg">
              Request a Sprint Intelligence Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button href="/solutions/ai-assisted-governance" variant="outline" size="lg">
              Explore Governance
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}