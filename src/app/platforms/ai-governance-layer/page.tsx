import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  ChevronRight,
  Database,
  FileCheck,
  Gauge,
  GitBranch,
  Layers,
  Shield,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { RevealGroup, RevealItem } from "@/components/animations/Reveal";

export const metadata: Metadata = {
  title: "AI Governance Layer for Delivery & Decisions | PMRG",
  description:
    "A configurable governance layer for requirements, sprints, vendors, risks, approvals, UAT, releases and executive intelligence.",
  alternates: { canonical: "/platforms/ai-governance-layer" },
};

const modules = [
  {
    icon: "FileCheck",
    title: "Requirement governance",
    desc: "Track completeness, traceability and change impact across requirements.",
  },
  {
    icon: "GitBranch",
    title: "Program & sprint oversight",
    desc: "Monitor milestones, dependencies and status quality in real time.",
  },
  {
    icon: "Shield",
    title: "RAID & dependencies",
    desc: "Surface risks, assumptions, issues and dependencies before they escalate.",
  },
  {
    icon: "Users",
    title: "Vendor & SLA governance",
    desc: "Track commitments, deliverables and escalation triggers.",
  },
  {
    icon: "CheckCircle",
    title: "Approvals & decisions",
    desc: "Maintain a traceable register of decisions and approval workflows.",
  },
  {
    icon: "Gauge",
    title: "Testing, UAT & release",
    desc: "Connect test coverage, defect trends and release readiness.",
  },
  {
    icon: "Database",
    title: "Document evidence",
    desc: "Centralize evidence with version control and access management.",
  },
  {
    icon: "Layers",
    title: "Executive dashboards",
    desc: "Get forward-looking exposure and decision intelligence at a glance.",
  },
];

const aiCapabilities = [
  "Completeness and consistency checks",
  "Trend and exception detection",
  "Impact and dependency analysis",
  "Status-quality checks",
  "Executive narrative generation",
  "Decision and escalation prompts",
];

const integrations = [
  "Project and work management",
  "Source control and CI/CD",
  "Testing and defect tools",
  "Document repositories",
  "Communication platforms",
  "BI and reporting",
];

const controls = [
  "Role-based access",
  "Identity integration",
  "Audit and observability",
  "Data retention",
  "Model and prompt controls",
  "Human approval",
];

const governanceLayers = [
  {
    title: "Executive governance",
    icon: "Layers",
    items: [
      "Portfolio and investment oversight",
      "Strategic KPIs and outcome tracking",
      "Risk and dependency visibility",
      "Decision logs and escalation paths",
    ],
  },
  {
    title: "Program and project governance",
    icon: "GitBranch",
    items: [
      "Milestone and commitment tracking",
      "Budget and resource oversight",
      "Vendor and SLA management",
      "RAID management",
    ],
  },
  {
    title: "Sprint and delivery governance",
    icon: "Gauge",
    items: [
      "Sprint health and commitment accuracy",
      "Blocked and aging work detection",
      "Dependency and integration risks",
    ],
  },
  {
    title: "Technical governance",
    icon: "Shield",
    items: [
      "Architecture and standards compliance",
      "Security and data governance",
      "Release and deployment controls",
    ],
  },
];

export default function AIGovernanceLayerPage() {
  return (
    <>
      <PageHero
        eyebrow="Flagship Platform"
        title={
          <>
            One governance layer across{" "}
            <span className="text-gradient">
              delivery, vendors, risk and decisions
            </span>
            .
          </>
        }
        description="Bring evidence from existing tools into a role-based governance workspace that highlights exceptions, traceability and decisions requiring attention."
      >
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <Button href="/contact" size="lg">
            Schedule a Platform Demo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <Button href="#modules" variant="outline" size="lg">
            Request a Fit Assessment
          </Button>
        </div>
      </PageHero>

      <section data-section-theme="light" className="section-light section">
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            eyebrow="Governance framework"
            title="Four connected governance layers"
            description="Governance works when executive, program, delivery and technical layers share evidence and accountability."
          />

          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {governanceLayers.map((layer) => (
              <RevealItem key={layer.title} as="div" variant="slide-up">
                <GlassCard theme="light" className="flex h-full flex-col p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-brand">
                    <Icon name={layer.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-fg-dark">
                    {layer.title}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {layer.items.map((item) => (
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

      <section data-section-theme="light" className="section-light section border-t border-light-line">
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            eyebrow="Platform modules"
            title="Platform modules"
            description="Configure the platform around the governance areas that matter most to your organization."
          />

          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {modules.map((m) => (
              <RevealItem key={m.title} as="div" variant="slide-up">
                <GlassCard theme="light" className="flex h-full flex-col p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                    <Icon name={m.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-fg-dark">
                    {m.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-dark-muted">
                    {m.desc}
                  </p>
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
                eyebrow="AI-supported intelligence"
                title={
                  <>
                    AI-supported <span className="text-gradient">intelligence</span>
                  </>
                }
                description="Use AI to summarize evidence, detect gaps and recommend actions while retaining human accountability."
              />
              <ul className="mt-6 space-y-3">
                {aiCapabilities.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    <span className="text-fg-dark-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <GlassCard theme="light" className="p-8">
              <div className="flex items-center gap-2 text-brand">
                <Shield className="h-5 w-5" />
                <span className="font-semibold">Human accountability</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-fg-dark-muted">
                AI organizes evidence and recommends actions. Accountable users retain decision authority for material actions and external communication.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-light-line bg-white p-4 text-center">
                  <span className="text-2xl font-bold text-brand">✓</span>
                  <p className="mt-1 text-sm text-fg-dark-muted">Human approval</p>
                </div>
                <div className="rounded-xl border border-light-line bg-white p-4 text-center">
                  <span className="text-2xl font-bold text-brand">📋</span>
                  <p className="mt-1 text-sm text-fg-dark-muted">Audit history</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section data-section-theme="light" className="section-light section border-t border-light-line">
        <div className="container-pmrg">
          <div className="grid gap-12 lg:grid-cols-2">
            <GlassCard theme="light" className="p-8">
              <h3 className="text-xl font-semibold text-fg-dark">Integration model</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-dark-muted">
                Connect through APIs, events or controlled batch ingestion according to enterprise constraints.
              </p>
              <ul className="mt-5 space-y-3">
                {integrations.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <ChevronRight className="h-4 w-4 text-brand" />
                    <span className="text-sm text-fg-dark-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard theme="light" className="p-8">
              <h3 className="text-xl font-semibold text-fg-dark">Deployment & controls</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-dark-muted">
                Deployment architecture is selected with your security, data and operational requirements.
              </p>
              <ul className="mt-5 space-y-3">
                {controls.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <ChevronRight className="h-4 w-4 text-brand" />
                    <span className="text-sm text-fg-dark-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      <section id="modules" data-section-theme="light" className="section-light section">
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            eyebrow="What it covers"
            title="Governance coverage"
            description="Everything is designed to make decisions, exceptions and responsibilities visible."
          />

          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Requirements and traceability",
              "Sprint and delivery oversight",
              "Risk, issue and dependency management",
              "Vendor and SLA governance",
              "Approvals and decision logs",
              "Testing, UAT and release control",
            ].map((item, index) => (
              <RevealItem key={item} as="div" variant="slide-up">
                <GlassCard theme="light" className="flex h-full items-start gap-3 p-6">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-soft font-mono text-sm font-bold text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-fg-dark">{item}</span>
                </GlassCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section data-section-theme="light" className="section-light section border-t border-light-line">
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            eyebrow="CTA"
            title="See where delivery decisions are delayed and accountability can be strengthened."
            description=""
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact" size="lg">
              Request a Governance Assessment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Schedule a Platform Demo
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}