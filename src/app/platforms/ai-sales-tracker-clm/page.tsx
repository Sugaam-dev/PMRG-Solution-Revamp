import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  ChevronRight,
  Filter,
  RefreshCw,
  Target,
  Users,
} from "lucide-react";

import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { RevealGroup, RevealItem } from "@/components/animations/Reveal";

export const metadata: Metadata = {
  title: "AI Sales Tracker & Customer Lifecycle Platform | PMRG",
  description:
    "Connect external lead sources, qualification, follow-ups, opportunity progress, customer lifecycle and revenue visibility.",
  alternates: { canonical: "/platforms/ai-sales-tracker-clm" },
};

const leadFeatures = [
  "Website and campaign forms",
  "Partner and referral leads",
  "Imported lists",
  "External lead-generation integrations",
  "Deduplication and source tracking",
];

const qualFeatures = [
  "Fit and intent fields",
  "Lead scoring",
  "Priority and aging",
  "Duplicate and incomplete lead detection",
  "Human review and reassignment",
];

const activityFeatures = [
  "Calls, meetings and notes",
  "Tasks and reminders",
  "Opportunity stages",
  "Proposal and commercial milestones",
  "Dormancy and escalation alerts",
];

const lifecycleFeatures = [
  "Customer 360",
  "Onboarding milestones",
  "Service and issue history",
  "Renewal and growth signals",
  "Account health and risks",
];

const dashboards = [
  "Source and stage funnel",
  "Owner and team performance",
  "Aging and stalled opportunities",
  "Forecast and next actions",
  "Lifecycle and account health",
];

const whereWeHelp = [
  "Lead capture and integration",
  "Qualification and prioritization",
  "Activity and opportunity management",
  "Customer lifecycle intelligence",
  "Management dashboards",
];

const flowCards = [
  {
    icon: "Filter",
    title: "Lead capture",
    description: "Bring leads into one governed pipeline from approved sources.",
  },
  {
    icon: "Target",
    title: "Qualification",
    description: "Apply business rules and AI-assisted signals.",
  },
  {
    icon: "RefreshCw",
    title: "Opportunity management",
    description: "Track ownership, follow-up and next actions.",
  },
  {
    icon: "Users",
    title: "Lifecycle intelligence",
    description: "Extend visibility into onboarding, service and growth.",
  },
];

export default function AISalesTrackerCLMPage() {
  return (
    <>
      <PageHero
        eyebrow="Sales & Lifecycle Intelligence"
        title={
          <>
            Turn scattered leads and follow-ups into a{" "}
            <span className="text-gradient">
              visible, accountable sales journey
            </span>
            .
          </>
        }
        description="PMRG's AI-led sales tracker connects lead sources, activities, opportunities, next actions and customer lifecycle intelligence in one management view."
      >
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <Button href="/contact" size="lg">
            Request a Sales Tracker Demo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <Button href="#pipeline" variant="outline" size="lg">
            Discuss Your Lead Pipeline
          </Button>
        </div>
      </PageHero>

      <section data-section-theme="light" className="section-light section">
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            eyebrow="What we do"
            title="Sales and lifecycle intelligence"
            description="PMRG helps sales leaders, founders and revenue operations teams connect leads, activities, opportunities and customer lifecycle into one governed view."
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

      <section
        id="pipeline"
        data-section-theme="light"
        className="section-light section border-t border-light-line"
      >
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            eyebrow="Pipeline flow"
            title="Lead-to-customer intelligence"
            description="A governed pipeline from capture to lifecycle management."
          />

          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {flowCards.map((card, index) => (
              <RevealItem key={card.title} as="div" variant="slide-up">
                <GlassCard
                  theme="light"
                  className="group flex h-full flex-col p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-brand transition-colors group-hover:bg-brand-soft">
                      <Icon name={card.icon} className="h-6 w-6" />
                    </span>
                    <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-fg-dark">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-fg-dark-muted">
                    {card.description}
                  </p>

                  <div className="mt-6 h-px w-full bg-light-line" />

                  <p className="mt-4 text-xs font-medium uppercase tracking-wider text-fg-dark-subtle">
                    View stage
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
                eyebrow="Lead capture"
                title="Lead capture & integration"
                description="Bring leads into one governed pipeline from approved sources."
              />
              <GlassCard theme="light" className="mt-6 p-6">
                <ul className="space-y-3">
                  {leadFeatures.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                      <span className="text-fg-dark-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>

            <div>
              <SectionHeading
                theme="light"
                eyebrow="Qualification"
                title="Qualification & prioritization"
                description="Apply business rules and AI-assisted signals."
              />
              <GlassCard theme="light" className="mt-6 p-6">
                <ul className="space-y-3">
                  {qualFeatures.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                      <span className="text-fg-dark-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>

            <div>
              <SectionHeading
                theme="light"
                eyebrow="Activity"
                title="Activity & opportunity management"
                description="Track ownership, follow-up and next actions."
              />
              <GlassCard theme="light" className="mt-6 p-6">
                <ul className="space-y-3">
                  {activityFeatures.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                      <span className="text-fg-dark-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>

            <div>
              <SectionHeading
                theme="light"
                eyebrow="Lifecycle"
                title="Customer lifecycle intelligence"
                description="Extend visibility into onboarding, service and growth."
              />
              <GlassCard theme="light" className="mt-6 p-6">
                <ul className="space-y-3">
                  {lifecycleFeatures.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                      <span className="text-fg-dark-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <section
        data-section-theme="light"
        className="section-light section border-t border-light-line"
      >
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            eyebrow="Management dashboards"
            title="Management dashboards"
            description="Evidence for action, not vanity metrics."
          />

          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {dashboards.map((item, i) => (
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

          <div className="mt-8 rounded-2xl bg-brand-soft/40 p-6 text-center">
            <p className="text-sm text-fg-dark-muted">
              Note: External lead-source logos used only when actual integrations are confirmed.
            </p>
          </div>
        </div>
      </section>

      <section data-section-theme="light" className="section-light section">
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            eyebrow="CTA"
            title="Turn scattered leads into visible, accountable sales journeys."
            description=""
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact" size="lg">
              Request a Sales Tracker Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Discuss Your Lead Pipeline
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}