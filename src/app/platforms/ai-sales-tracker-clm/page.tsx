import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "AI Sales Tracker & Customer Lifecycle Platform | PMRG",
  description:
    "Connect external lead sources, qualification, follow-ups, opportunity progress, customer lifecycle and revenue visibility.",
  alternates: { canonical: "/platforms/ai-sales-tracker-clm" },
};

const LEAD_CAPTURE = [
  "Website and campaign forms",
  "Partner and referral leads",
  "Imported lists",
  "External lead-generation integrations",
  "Deduplication and source tracking",
];

const QUALIFICATION = [
  "Fit and intent fields",
  "Lead scoring",
  "Priority and aging",
  "Duplicate and incomplete lead detection",
  "Human review and reassignment",
];

const ACTIVITY_OPPORTUNITY = [
  "Calls, meetings and notes",
  "Tasks and reminders",
  "Opportunity stages",
  "Proposal and commercial milestones",
  "Dormancy and escalation alerts",
];

const LIFECYCLE_INTELLIGENCE = [
  "Customer 360",
  "Onboarding milestones",
  "Service and issue history",
  "Renewal and growth signals",
  "Account health and risks",
];

const MANAGEMENT_DASHBOARDS = [
  "Source and stage funnel",
  "Owner and team performance",
  "Aging and stalled opportunities",
  "Forecast and next actions",
  "Lifecycle and account health",
];

export default function AiSalesTrackerClmPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-white">
        <div className="container-pmrg py-16 sm:py-20 text-center">
          <div className="mx-auto max-w-4xl">
            <p className="eyebrow-light">Platform</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-fg-dark sm:text-5xl">
              Turn scattered leads and follow-ups into a visible, accountable
              sales journey.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-fg-dark-muted">
              PMRG&apos;s AI-led sales tracker connects lead sources, activities,
              opportunities, next actions and customer lifecycle intelligence in
              one management view.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/contact?type=demo">
                Request a Sales Tracker Demo
              </Button>
              <Button
                href="/contact?type=pipeline"
                variant="outline" size="lg"
              >
                Discuss Your Lead Pipeline
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-[#f8fafc]">
        <div className="container-pmrg py-16 sm:py-20">
          {/* 1. LEAD CAPTURE + QUALIFICATION – 2 col */}
          <div className="grid gap-6 lg:grid-cols-2">
            <GlassCard theme="light" className="p-8 sm:p-10">
              <h2 className="text-2xl font-semibold text-fg-dark">
                Lead capture and integration
              </h2>
              <p className="mt-2 text-sm text-fg-dark-muted">
                Bring leads into one governed pipeline from approved internal
                and external sources.
              </p>
              <ul className="mt-5 space-y-3">
                {LEAD_CAPTURE.map((item) => (
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
                Qualification and prioritization
              </h2>
              <p className="mt-2 text-sm text-fg-dark-muted">
                Apply defined business rules and AI-assisted signals without
                hiding the basis of prioritization.
              </p>
              <ul className="mt-5 space-y-3">
                {QUALIFICATION.map((item) => (
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

          {/* 2. ACTIVITY + LIFECYCLE – 2 col */}
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <GlassCard theme="light" className="p-8 sm:p-10">
              <h2 className="text-2xl font-semibold text-fg-dark">
                Activity and opportunity management
              </h2>
              <p className="mt-2 text-sm text-fg-dark-muted">
                Make ownership, follow-up and next action visible.
              </p>
              <ul className="mt-5 space-y-3">
                {ACTIVITY_OPPORTUNITY.map((item) => (
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
                Customer lifecycle intelligence
              </h2>
              <p className="mt-2 text-sm text-fg-dark-muted">
                Extend visibility beyond initial conversion into onboarding,
                service, growth and retention.
              </p>
              <ul className="mt-5 space-y-3">
                {LIFECYCLE_INTELLIGENCE.map((item) => (
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

          {/* 3. MANAGEMENT DASHBOARDS */}
          <GlassCard theme="light" className="mt-6 p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-fg-dark">
              Management dashboards
            </h2>
            <p className="mt-2 text-sm text-fg-dark-muted">
              Provide evidence for action, not vanity metrics.
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {MANAGEMENT_DASHBOARDS.map((item) => (
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
                  Request a Sales Tracker Demo
                </h2>
                <p className="mt-2 text-sm text-fg-dark-muted">
                  See how leads, activities, opportunities and lifecycle signals
                  connect in one accountable view.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="/contact?type=demo">
                  Request a Demo
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  href="/contact?type=pipeline"
                  variant="outline" size="lg"
                >
                  Discuss Your Lead Pipeline
                </Button>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}