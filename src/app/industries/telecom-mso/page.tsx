import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "Telecom & MSO Digital Transformation Solutions | PMRG",
  description:
    "Transform telecom customer lifecycle, fulfillment, inventory, billing and program governance with PMRG domain expertise.",
  alternates: { canonical: "/industries/telecom-mso" },
};

const BUSINESS_OUTCOMES = [
  "Faster and more consistent customer journeys",
  "Reduced order and provisioning fallout",
  "Clearer product and inventory alignment",
  "Stronger multi-vendor accountability",
  "Improved release and UAT visibility",
];

const RELEVANT_SOLUTIONS = [
  { label: "Telecom BSS/OSS", href: "/solutions/telecom-bss-oss" },
  { label: "AI-Assisted Governance", href: "/solutions/ai-assisted-governance" },
  { label: "AI Governance Layer", href: "/platforms/ai-governance-layer" },
  {
    label: "Sprint & Delivery Intelligence",
    href: "/platforms/sprint-delivery-intelligence",
  },
  { label: "AI Sales Tracker & CLM", href: "/platforms/ai-sales-tracker-clm" },
];

const ENGAGEMENT_SCENARIOS = [
  "Capability and gap assessment",
  "Target solution architecture",
  "Requirements and vendor governance",
  "Product or implementation advisory",
  "UAT, release and transformation governance",
];

export default function TelecomMsoPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-white">
        <div className="container-pmrg py-16 sm:py-20 text-center">
          <div className="mx-auto max-w-4xl">
            <p className="eyebrow-light"> Telecom &amp; MSO</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-fg-dark sm:text-5xl">
              Modernize telecom journeys without losing operational control.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-fg-dark-muted">
              PMRG helps operators, MSOs and technology partners connect customer
              experience, BSS/OSS architecture and governed delivery.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/contact?type=telecom">
                Book a Telecom Architecture Session
              </Button>
              <Button
                href="/solutions/telecom-bss-oss"
                variant="outline" size="lg"
              >
                Explore Telecom Capabilities
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-[#f8fafc]">
        <div className="container-pmrg py-16 sm:py-20">
          {/* 1. BUSINESS OUTCOMES + RELEVANT SOLUTIONS – 2 col */}
          <div className="grid gap-6 lg:grid-cols-2">
            <GlassCard theme="light" className="p-8 sm:p-10">
              <h2 className="text-2xl font-semibold text-fg-dark">
                Business outcomes
              </h2>
              <p className="mt-2 text-sm text-fg-dark-muted">
                Align customer, operational and technology priorities across the
                transformation.
              </p>
              <ul className="mt-5 space-y-3">
                {BUSINESS_OUTCOMES.map((item) => (
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
                Relevant PMRG solutions
              </h2>
              <p className="mt-2 text-sm text-fg-dark-muted">
                Connect industry needs to the right solution pages.
              </p>
              <ul className="mt-5 space-y-3">
                {RELEVANT_SOLUTIONS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 text-sm font-medium text-brand transition-colors hover:text-brand-deep"
                    >
                      <ArrowRight className="h-4 w-4 shrink-0" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>

          {/* 2. ENGAGEMENT SCENARIOS */}
          <GlassCard theme="light" className="mt-6 p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-fg-dark">
              Engagement scenarios
            </h2>
            <p className="mt-2 text-sm text-fg-dark-muted">
              PMRG can support the architecture, delivery or product dimensions
              of a telecom initiative.
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {ENGAGEMENT_SCENARIOS.map((item) => (
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
                  Book a Telecom Architecture Session
                </h2>
                <p className="mt-2 text-sm text-fg-dark-muted">
                  Discuss your BSS/OSS challenge, customer lifecycle goals or
                  transformation program with PMRG&apos;s telecom team.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="/contact?type=telecom">
                  Book a Session
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  href="/solutions/telecom-bss-oss"
                  variant="outline" size="lg"
                >
                  Explore Telecom Capabilities
                </Button>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}
