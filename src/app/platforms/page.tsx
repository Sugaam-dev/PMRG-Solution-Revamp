import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CalendarCheck, Users, Server } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "AI Governance & Enterprise Platforms | PMRG",
  description:
    "Explore PMRG platforms for governance, sprint intelligence, sales and customer lifecycle, and data center management.",
  alternates: { canonical: "/platforms" },
};

const PLATFORMS = [
  {
    icon: ShieldCheck,
    title: "AI Governance Layer",
    description:
      "Connect delivery evidence, risks, decisions and accountability across management levels.",
    href: "/platforms/ai-governance-layer",
  },
  {
    icon: CalendarCheck,
    title: "Sprint & Delivery Intelligence",
    description:
      "Plan, track and govern delivery across sprints, milestones, teams and vendors.",
    href: "/platforms/sprint-delivery-intelligence",
  },
  {
    icon: Users,
    title: "AI Sales Tracker & CLM",
    description:
      "Connect external leads, qualification, follow-up, opportunity progress and lifecycle insight.",
    href: "/platforms/ai-sales-tracker-clm",
  },
  {
    icon: Server,
    title: "Data Center Management",
    description:
      "Improve visibility across assets, capacity, incidents, energy, risk and operational readiness.",
    href: "/platforms/data-center-management",
  },
];

const ENGAGEMENT_STEPS = [
  "Discovery",
  "Demonstration",
  "Fit-gap",
  "Pilot",
  "Implementation and support",
];

export default function PlatformsOverviewPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-white">
        <div className="container-pmrg py-16 sm:py-20">
          <div className="max-w-4xl">
            <p className="eyebrow-light">Platforms</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-fg-dark sm:text-5xl">
              Platforms that turn operational signals into accountable action.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-fg-dark-muted">
              PMRG&apos;s platforms support governance, execution, sales
              intelligence and infrastructure visibility while integrating with
              the tools organizations already use.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#platforms">Explore the Platforms</Button>
              <Link
                href="/contact?type=demo"
                className="inline-flex items-center gap-1 rounded-lg border border-light-line px-6 py-3 text-sm font-medium text-fg-dark transition-colors hover:bg-[#f1f5f9]"
              >
                Request a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM CARDS */}
      <section id="platforms" className="bg-[#f8fafc]">
        <div className="container-pmrg py-16 sm:py-20">
          <div className="grid gap-6 sm:grid-cols-2">
            {PLATFORMS.map((platform) => (
              <Link key={platform.href} href={platform.href} className="group">
                <GlassCard theme="light" className="flex h-full flex-col p-8 sm:p-10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-light-line bg-blue-50 text-brand">
                    <platform.icon className="h-6 w-6" />
                  </span>
                  <h2 className="mt-5 text-2xl font-semibold text-fg-dark">
                    {platform.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-dark-muted">
                    {platform.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand transition-transform group-hover:translate-x-1">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </GlassCard>
              </Link>
            ))}
          </div>

          {/* PLATFORM ENGAGEMENT */}
          <GlassCard theme="light" className="mt-6 p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-fg-dark">
              Platform engagement
            </h2>
            <p className="mt-2 text-sm text-fg-dark-muted">
              Platforms can be assessed, demonstrated, piloted and configured
              around the client&apos;s operating model and integrations.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {ENGAGEMENT_STEPS.map((step, i) => (
                <div
                  key={step}
                  className="rounded-xl border border-light-line bg-white px-4 py-3 text-center text-sm text-fg-dark"
                >
                  <span className="mb-1 block text-xs font-semibold text-brand">
                    Step {i + 1}
                  </span>
                  {step}
                </div>
              ))}
            </div>
          </GlassCard>

          {/* FINAL CTA */}
          <GlassCard theme="light" className="mt-6 p-8 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold text-fg-dark">
                  Explore a platform for your context
                </h2>
                <p className="mt-2 text-sm text-fg-dark-muted">
                  Select a platform above or tell us your operational challenge
                  and we&apos;ll recommend the right starting point.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="/contact">
                  Request a Demo
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}