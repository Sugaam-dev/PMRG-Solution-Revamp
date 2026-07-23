import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/animations/Reveal";
import GradientOrb from "@/components/animations/GradientOrb";

/* ── Flagship 1: AI Governance ────────────────────────────────── */

const GOVERNANCE_POINTS = [
  "Requirement, PMO, Vendor, UAT and Executive agents",
  "Sprint, milestone, SLA, dependency, approval and testing intelligence",
  "Role-based dashboards with human review and explainable recommendations",
];

export function FlagshipGovernance() {
  return (
    <section
      data-section-theme="dark"
      className="section-navy section relative overflow-hidden"
    >
      <GradientOrb color="blue" size={500} animate className="-right-20 top-10" />
      <GradientOrb color="indigo" size={400} className="-left-20 bottom-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-50 mask-fade-y"
      />
      <div className="container-pmrg relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              theme="dark"
              eyebrow="Flagship"
              title={
                <>
                  AI-assisted{" "}
                  <span className="text-gradient">governance</span>
                </>
              }
              description="Capability without governance is just an expensive liability. PMRG's governance approach combines intelligence with accountability across executive, organizational, project and technical layers."
            />
            <Reveal>
              <ul className="mt-8 space-y-3">
                {GOVERNANCE_POINTS.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-fg-muted">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Check className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal>
              <div className="mt-8">
                <Button href="/solutions/ai-assisted-governance" size="lg">
                  Explore Governance
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right: Visual card */}
          <Reveal variant="slide-up" delay={0.1}>
            <GlassCard className="p-8">
              <div className="grid grid-cols-2 gap-4">
                {["Requirements Agent", "PMO Agent", "Vendor Agent", "UAT Agent", "Executive Agent", "Sprint Intelligence"].map(
                  (agent) => (
                    <div
                      key={agent}
                      className="flex items-center gap-2 rounded-lg border border-line bg-surface-2 p-3 text-sm font-medium text-fg"
                    >
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      {agent}
                    </div>
                  )
                )}
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── Flagship 2: Smart Campus ─────────────────────────────────── */

const CAMPUS_POINTS = [
  "AI literacy, faculty enablement and innovation labs",
  "Smart-campus dashboards, student support and operational automation",
  "Internships, live projects, placement readiness, incubation and ideathons",
];

export function FlagshipSmartCampus() {
  return (
    <section
      data-section-theme="light"
      className="section-light section border-t border-light-line"
    >
      <div className="container-pmrg">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left: Visual card */}
          <Reveal variant="slide-up">
            <GlassCard theme="light" className="p-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  "AI Literacy Program",
                  "Faculty Enablement",
                  "Innovation Labs",
                  "Smart-Campus Dashboard",
                  "Student Support AI",
                  "Placement Readiness",
                ].map((mod) => (
                  <div
                    key={mod}
                    className="flex items-center gap-2 rounded-lg border border-light-line bg-light-bg-slate p-3 text-sm font-medium text-fg-dark"
                  >
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    {mod}
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>

          {/* Right: Content */}
          <div>
            <SectionHeading
              align="left"
              theme="light"
              eyebrow="Education"
              title={
                <>
                  Smart Campus and{" "}
                  <span className="text-gradient">AI for Education</span>
                </>
              }
              description="Help schools and universities become AI-ready while protecting human judgment, responsible use and institutional priorities."
            />
            <Reveal>
              <ul className="mt-8 space-y-3">
                {CAMPUS_POINTS.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-fg-dark-muted">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-brand">
                      <Check className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal>
              <div className="mt-8">
                <Button href="/solutions/smart-campus-education" size="lg">
                  Explore Smart Campus
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Flagship 3: Enterprise & Telecom ────────────────────────── */

const ENTERPRISE_POINTS = [
  "Outcome-led consulting and solution architecture",
  "Phased implementation, integration and adoption support",
  "Domain depth across telecom, education and emerging enterprises",
];

export function FlagshipEnterprise() {
  return (
    <section
      data-section-theme="light"
      className="section-light-grey section"
    >
      <div className="container-pmrg">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <SectionHeading
              align="left"
              theme="light"
              eyebrow="Enterprise & Telecom"
              title={
                <>
                  Enterprise and{" "}
                  <span className="text-gradient">telecom capability</span>
                </>
              }
              description="Modernize core operations through ERPNext, CRM, CLM, AI agents, sales intelligence, data center management and telecom BSS/OSS expertise."
            />
            <Reveal>
              <ul className="mt-8 space-y-3">
                {ENTERPRISE_POINTS.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-fg-dark-muted">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-brand">
                      <Check className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/solutions/enterprise-solutions" size="lg">
                  Enterprise Solutions
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
                <Button href="/solutions/telecom-bss-oss" variant="outline" size="lg">
                  Telecom BSS/OSS
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Visual */}
          <Reveal variant="slide-up" delay={0.1}>
            <GlassCard theme="light" className="p-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  "ERPNext & CRM",
                  "AI Agents & Automation",
                  "Sales Intelligence",
                  "CLM & Billing",
                  "Data Center Mgmt",
                  "BSS/OSS Modernization",
                ].map((cap) => (
                  <div
                    key={cap}
                    className="flex items-center gap-2 rounded-lg border border-light-line bg-white p-3 text-sm font-medium text-fg-dark"
                  >
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    {cap}
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
