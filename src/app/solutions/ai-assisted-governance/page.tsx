import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { RevealGroup, RevealItem } from "@/components/animations/Reveal";

export const metadata: Metadata = {
  title: "AI-Assisted Governance for Delivery & Decisions | PMRG",
  description:
    "Govern strategy, programs, sprints, vendors, risks and decisions with AI-supported intelligence, human accountability and connected evidence.",
  alternates: { canonical: "/solutions/ai-assisted-governance" },
};

const GOVERNANCE_LAYERS = [
  {
    title: "Executive governance",
    items: ["Portfolio and investment oversight", "Strategic KPIs and outcome tracking", "Risk and dependency visibility", "Decision logs and escalation paths"],
  },
  {
    title: "Program and project governance",
    items: ["Milestone and commitment tracking", "Budget and resource oversight", "Vendor and SLA management", "RAID management"],
  },
  {
    title: "Sprint and delivery governance",
    items: ["Sprint health and commitment accuracy", "Blocked and aging work detection", "Dependency and integration risks", "Quality and readiness evidence"],
  },
  {
    title: "Technical governance",
    items: ["Architecture and standards compliance", "Security and data governance", "Release and deployment controls", "Observability and SLA adherence"],
  },
];

const AGENT_ECOSYSTEM = [
  "Status and health summarization",
  "Anomaly and exception detection",
  "Requirement completeness and consistency checks",
  "Dependency and impact analysis",
  "Trend and forecast intelligence",
  "Decision and escalation recommendations",
];

const CORE_CAPABILITIES = [
  "Requirement-to-delivery traceability",
  "Multi-vendor governance and SLA tracking",
  "UAT readiness and release governance",
  "Approval workflows and decision evidence",
  "Cross-program dependency management",
  "Executive narrative and report generation",
];

const ARCHITECTURE = [
  "Role-based access and identity integration",
  "API, event and controlled-batch ingestion",
  "Audit, observability and data retention",
  "Model and prompt governance",
  "Human approval and review gates",
  "Cloud, on-premises and hybrid deployment",
];

const ENGAGEMENT_STEPS = [
  { title: "Governance maturity assessment", description: "Understand current governance practices, gaps and priorities." },
  { title: "Target model design", description: "Define the governance layers, roles, evidence and AI support required." },
  { title: "Platform configuration", description: "Configure the AI Governance Layer platform around agreed governance areas." },
  { title: "Pilot", description: "Deploy with a contained scope, acceptance criteria and user feedback." },
  { title: "Scale and adoption", description: "Extend to additional programs, layers, teams and integrations." },
];

export default function AIAssistedGovernancePage() {
  return (
    <>
      <PageHero
        eyebrow="AI-Assisted Governance"
        title={
          <>
            Transformation fails when decisions are invisible and accountability is{" "}
            <span className="text-gradient">assumed, not structured.</span>
          </>
        }
        description="PMRG helps organizations build a connected governance model across strategy, programs, sprints, vendors, risks and decisions — supported by AI and grounded in human accountability."
      >
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <Button href="/contact" size="lg">
            Request a Governance Assessment
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <Button href="/platforms/ai-governance-layer" variant="outline" size="lg">
            Explore the Platform
          </Button>
        </div>
      </PageHero>

      {/* Why transformation programs lose control */}
      <section data-section-theme="light" className="section-light section">
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            title="Why transformation programs lose control"
            description="Organizations invest in roadmaps but struggle to connect intent, execution, evidence, decisions and accountability across levels."
          />
          <Reveal>
            <div className="mx-auto mt-10 max-w-3xl">
              <GlassCard theme="light" className="p-8">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Disconnected reporting and status updates",
                    "Decisions made without traceable evidence",
                    "Vendor accountability gaps",
                    "Delayed risk and dependency visibility",
                    "Manual governance effort that doesn't scale",
                    "Executive dashboards that reflect activity, not outcomes",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-fg-dark">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500">
                        <span className="text-xs">✕</span>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Four connected governance layers */}
      <section data-section-theme="light" className="section-light section border-t border-light-line">
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            title="Four connected governance layers"
            description="Governance works when executive, program, delivery and technical layers share evidence and accountability."
          />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {GOVERNANCE_LAYERS.map((layer) => (
              <RevealItem key={layer.title} as="div" variant="slide-up">
                <GlassCard theme="light" className="flex h-full flex-col p-7">
                  <h3 className="text-lg font-semibold text-fg-dark">{layer.title}</h3>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {layer.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-fg-dark-muted">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-brand">
                          <Check className="h-3 w-3" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Agent ecosystem */}
      <section data-section-theme="light" className="section-light section border-t border-light-line">
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            title="AI agent ecosystem"
            description="AI agents summarize, detect, recommend and generate — but accountable users review, approve and act."
          />
          <Reveal>
            <div className="mx-auto mt-10 max-w-3xl">
              <GlassCard theme="light" className="p-8">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {AGENT_ECOSYSTEM.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-fg-dark">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-brand">
                        <Check className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core capabilities */}
      <section data-section-theme="light" className="section-light section border-t border-light-line">
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            title="Core capabilities"
            description="Build governance around what the organization actually needs to control."
          />
          <Reveal>
            <div className="mx-auto mt-10 max-w-3xl">
              <GlassCard theme="light" className="p-8">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {CORE_CAPABILITIES.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-fg-dark">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-brand">
                        <Check className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Architecture, security and integration */}
      <section data-section-theme="light" className="section-light section border-t border-light-line">
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            title="Architecture, security and integration"
            description="Enterprise-grade architecture with role-based access, identity integration and deployment flexibility."
          />
          <Reveal>
            <div className="mx-auto mt-10 max-w-3xl">
              <GlassCard theme="light" className="p-8">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {ARCHITECTURE.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-fg-dark">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-brand">
                        <Check className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Engagement model */}
      <section data-section-theme="light" className="section-light section border-t border-light-line">
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            title="Engagement model"
            description="Begin with a governance maturity assessment and expand through structured phases."
          />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {ENGAGEMENT_STEPS.map((s, i) => (
              <RevealItem key={s.title} as="div" variant="slide-up">
                <GlassCard theme="light" className="flex h-full flex-col p-6 text-center">
                  <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-brand/20 bg-brand-soft font-mono text-sm font-bold text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-sm font-semibold text-fg-dark">{s.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-fg-dark-muted">{s.description}</p>
                </GlassCard>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              <Button href="/contact" size="lg">
                Request a Governance Assessment
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button href="/platforms/ai-governance-layer" variant="outline" size="lg">
                Explore the Platform
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
