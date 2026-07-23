import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ShieldCheck, GraduationCap, Building2, BrainCircuit, RadioTower } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/animations/Reveal";
import { RevealGroup, RevealItem } from "@/components/animations/Reveal";

export const metadata: Metadata = {
  title: "AI Governance, Smart Campus, Enterprise & Telecom Solutions | PMRG",
  description:
    "Explore PMRG solutions for AI-assisted governance, smart campus and education, enterprise ERP/CRM, AI agents, and telecom BSS/OSS transformation.",
  alternates: { canonical: "/solutions" },
};

const SOLUTION_CARDS = [
  {
    icon: "ShieldCheck",
    title: "AI-Assisted Governance",
    description: "Govern strategy, delivery, risks, vendors and decisions with AI-supported oversight.",
    href: "/solutions/ai-assisted-governance",
  },
  {
    icon: "GraduationCap",
    title: "Smart Campus & Education",
    description: "Build AI-ready schools and universities across learning, operations, innovation and careers.",
    href: "/solutions/smart-campus-education",
  },
  {
    icon: "Building2",
    title: "Enterprise Solutions",
    description: "Modernize ERP, CRM, workflows, data and operational visibility.",
    href: "/solutions/enterprise-solutions",
  },
  {
    icon: "BrainCircuit",
    title: "AI Agents & Automation",
    description: "Deploy role-based copilots and workflow agents with human oversight.",
    href: "/solutions/ai-agents-automation",
  },
  {
    icon: "RadioTower",
    title: "Telecom BSS/OSS",
    description: "Transform customer lifecycle, orders, inventory, billing, orchestration and delivery governance.",
    href: "/solutions/telecom-bss-oss",
  },
];

const ENGAGEMENT_STEPS = [
  { step: "01", title: "Discover", description: "Understand business context, stakeholders, constraints and opportunities." },
  { step: "02", title: "Design", description: "Define target architecture, roadmap, governance and measurable scope." },
  { step: "03", title: "Pilot", description: "Deliver a focused proof of value with clear acceptance criteria." },
  { step: "04", title: "Scale", description: "Implement, integrate, adopt and expand across the organization." },
  { step: "05", title: "Operate", description: "Support, measure, optimize and continuously improve." },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={
          <>
            Choose the <span className="text-gradient">outcome you need.</span> We bring the architecture, AI and delivery.
          </>
        }
        description="PMRG connects AI-assisted governance, enterprise platforms, education transformation and telecom expertise to help organizations move from fragmented initiatives to governed, measurable progress."
      >
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <Button href="/contact" size="lg">
            Book a Strategy Session
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <Button href="#solutions" variant="outline" size="lg">
            Browse Solutions
          </Button>
        </div>
      </PageHero>

      {/* Solutions Grid */}
      <section id="solutions" data-section-theme="light" className="section-light section">
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            eyebrow="What We Do"
            title="Five connected solution areas"
            description="Each solution area is supported by reusable platforms, domain expertise and a structured delivery approach."
          />

          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SOLUTION_CARDS.map((card) => (
              <RevealItem key={card.title} as="div" variant="slide-up">
                <Link href={card.href} className="group block h-full">
                  <GlassCard theme="light" className="flex h-full flex-col p-8">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-light-line bg-blue-50 text-brand transition-colors duration-200 group-hover:border-brand/40 group-hover:bg-blue-100">
                      <Icon name={card.icon} className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-fg-dark">{card.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-dark-muted">{card.description}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-fg-dark-subtle transition-colors group-hover:text-brand">
                      Explore
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </GlassCard>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* How PMRG engages */}
      <section data-section-theme="light" className="section-light section border-t border-light-line">
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            eyebrow="Engagement Approach"
            title="How PMRG engages"
            description="PMRG follows a phased approach to ensure discovery, evidence, adoption and measurable value at each stage."
          />

          <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {ENGAGEMENT_STEPS.map((s) => (
              <RevealItem key={s.step} as="div" variant="slide-up">
                <GlassCard theme="light" className="flex h-full flex-col p-6 text-center">
                  <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-brand/20 bg-brand-soft font-mono text-sm font-bold text-brand">
                    {s.step}
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-fg-dark">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-dark-muted">{s.description}</p>
                </GlassCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}