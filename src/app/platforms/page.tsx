import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Gauge,
  Layers,
  LineChart,
  Network,
  Sparkles,
} from "lucide-react";

import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { RevealGroup, RevealItem } from "@/components/animations/Reveal";

export const metadata: Metadata = {
  title: "AI Governance & Enterprise Platforms | PMRG",
  description:
    "Explore PMRG platforms for governance, sprint intelligence, sales and customer lifecycle, and data center management.",
  alternates: { canonical: "/platforms" },
};

const platforms = [
  {
    slug: "ai-governance-layer",
    title: "AI Governance Layer",
    description:
      "Connect delivery evidence, risks, decisions and accountability across management levels.",
    icon: "Layers",
    color: "from-indigo-500 to-purple-600",
    outcome:
      "Govern delivery and decisions — Create accountability across requirements, vendors, risks, approvals, UAT and executive reporting.",
  },
  {
    slug: "sprint-delivery-intelligence",
    title: "Sprint & Delivery Intelligence",
    description:
      "Plan, track and govern delivery across sprints, milestones, teams and vendors.",
    icon: "Gauge",
    color: "from-blue-500 to-cyan-500",
    outcome:
      "Improve delivery visibility — Track commitments, dependencies, risks and outcomes across teams.",
  },
  {
    slug: "ai-sales-tracker-clm",
    title: "AI Sales Tracker & CLM",
    description:
      "Connect external leads, qualification, follow-up, opportunity progress and lifecycle insight.",
    icon: "LineChart",
    color: "from-emerald-500 to-teal-500",
    outcome:
      "Convert leads to customers — Turn scattered follow-ups into visible, accountable sales journeys.",
  },
  {
    slug: "data-center-management",
    title: "Data Center Management",
    description:
      "Improve visibility across assets, capacity, incidents, energy, risk and operational readiness.",
    icon: "Cpu",
    color: "from-orange-500 to-red-500",
    outcome:
      "See the infrastructure — Understand risk and act with confidence across your data center operations.",
  },
];

const whereWeHelp = [
  "Govern delivery and decisions",
  "Build an AI-ready campus",
  "Modernize enterprise operations",
  "Transform telecom operations",
  "Partner with PMRG",
];

const engagementSteps = [
  { step: "Discovery", desc: "Understand your current environment and needs" },
  { step: "Demonstration", desc: "See the platform in action with your use cases" },
  { step: "Fit-Gap", desc: "Map capabilities to your requirements" },
  { step: "Pilot", desc: "Validate with a controlled deployment" },
  { step: "Implementation & Support", desc: "Scale with ongoing guidance" },
];

export default function PlatformsPage() {
  return (
    <>
      <PageHero
        eyebrow="Platforms"
        title={
          <>
            Platforms that turn operational signals into{" "}
            <span className="text-gradient">accountable action.</span>
          </>
        }
        description="PMRG's platforms support governance, execution, sales intelligence and infrastructure visibility while integrating with the tools organizations already use."
      >
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <Button href="#platforms" size="lg">
            Explore the Platforms
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Request a Demo
          </Button>
        </div>
      </PageHero>

      <section data-section-theme="light" className="section-light section">
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            eyebrow="Choose your outcome"
            title="Choose the outcome you need. We bring the architecture, AI and delivery."
            description="PMRG connects AI-assisted governance, enterprise platforms, education transformation and telecom expertise to help organizations move from fragmented initiatives to governed, measurable progress."
          />

          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {platforms.map((p) => (
              <RevealItem key={p.slug} as="div" variant="slide-up">
                <Link href={`/platforms/${p.slug}`} className="group block h-full">
                  <GlassCard theme="light" className="flex h-full flex-col p-8">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${p.color} text-white`}
                    >
                      <Icon name={p.icon} className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-fg-dark">
                      {p.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-dark-muted">
                      {p.outcome}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-fg-dark-subtle transition-colors group-hover:text-brand">
                      Learn more
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </GlassCard>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section data-section-theme="light" className="section-light section border-t border-light-line">
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            eyebrow="What we do"
            title="Five connected solution areas"
            description="Each solution area is supported by reusable platforms, domain expertise and a structured delivery approach."
          />

          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whereWeHelp.map((item, i) => (
              <RevealItem key={item} as="div" variant="slide-up">
                <GlassCard theme="light" className="flex h-full items-start gap-3 p-6">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-soft font-mono text-sm font-bold text-brand">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-fg-dark">{item}</span>
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
            eyebrow="Platforms"
            title="Explore our platforms"
            description="Each platform is designed to solve a specific operational challenge while integrating with your existing tools."
          />

          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {platforms.map((p) => (
              <RevealItem key={p.slug} as="div" variant="slide-up">
                <Link href={`/platforms/${p.slug}`} className="group block h-full">
                  <GlassCard theme="light" className="flex h-full flex-col p-8">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${p.color} text-white`}
                    >
                      <Icon name={p.icon} className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold text-fg-dark">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-fg-dark-muted">
                      {p.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-fg-dark-subtle transition-colors group-hover:text-brand">
                      Learn more
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </GlassCard>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section data-section-theme="light" className="section-light section border-t border-light-line">
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            eyebrow="Engagement model"
            title="Platform engagement"
            description="Platforms can be assessed, demonstrated, piloted and configured around your operating model and integrations."
          />   
 

 
          <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {engagementSteps.map((e, i) => (
              <RevealItem key={e.step} as="div" variant="slide-up">
                <GlassCard theme="light" className="flex h-full flex-col p-6 text-center">
                  <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-brand/20 bg-brand-soft font-mono text-sm font-bold text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-fg-dark">
                    {e.step}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-dark-muted">
                    {e.desc}
                  </p>
                </GlassCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}