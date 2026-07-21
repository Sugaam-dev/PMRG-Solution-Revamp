import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, Check } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/animations/Reveal";

export const metadata: Metadata = {
  title: "Solutions | PMRG",
  description:
    "Explore PMRG solutions for AI governance, smart campus, enterprise systems, AI automation, and telecom transformation.",
  alternates: { canonical: "/solutions" },
};

const SOLUTIONS = [
  {
    id: "ai-assisted-governance",
    slug: "ai-assisted-governance",
    name: "AI-Assisted Governance",
    tagline: "Govern with clarity and control.",
    description:
      "Turn delivery data into accountable decisions, earlier risk visibility, and governed execution.",
    icon: "shield",
    metrics: [
      { value: "01", label: "Governed layer" },
      { value: "05", label: "Core agents" },
      { value: "12", label: "Month path" },
    ],
    features: [
      "Requirement traceability",
      "Vendor and SLA governance",
      "Risk and dependency intelligence",
      "UAT and release readiness",
      "Executive dashboards",
      "Security and audit view",
    ],
  },
  {
    id: "smart-campus-education",
    slug: "smart-campus-education",
    name: "Smart Campus & Education",
    tagline: "Build AI-ready institutions.",
    description:
      "Create an AI-ready institution that connects learning, operations, innovation, employability, and industry engagement.",
    icon: "graduation-cap",
    metrics: [
      { value: "02", label: "Child pages" },
      { value: "100", label: "Day roadmap" },
      { value: "01", label: "Campus view" },
    ],
    features: [
      "AI for Schools",
      "AI for Universities",
      "Smart campus command center",
      "Student and faculty enablement",
      "Admissions and placement CRM",
      "Innovation and incubation",
    ],
  },
  {
    id: "enterprise-solutions",
    slug: "enterprise-solutions",
    name: "Enterprise Solutions",
    tagline: "Modernize core operations.",
    description:
      "Modernize ERP, CRM, workflows, data, and operational visibility without losing control.",
    icon: "layers",
    metrics: [
      { value: "ERP", label: "Core systems" },
      { value: "AI", label: "Automation" },
      { value: "Ops", label: "Visibility" },
    ],
    features: [
      "ERPNext and CRM",
      "AI agents and workflows",
      "Sales and lifecycle intelligence",
      "Data center management",
      "Analytics and integration",
      "Managed support",
    ],
  },
  {
    id: "ai-agents-automation",
    slug: "ai-agents-automation",
    name: "AI Agents & Automation",
    tagline: "Deploy copilots with governance.",
    description:
      "Use AI agents for knowledge, decisions, service, sales, and operations with human oversight.",
    icon: "bot",
    metrics: [
      { value: "04", label: "Use cases" },
      { value: "AI", label: "Agents" },
      { value: "HITL", label: "Review" },
    ],
    features: [
      "Knowledge copilots",
      "Sales and follow-up automation",
      "Project and governance agents",
      "Document analysis",
      "Operational alerts",
      "Human-in-the-loop controls",
    ],
  },
  {
    id: "telecom-bss-oss",
    slug: "telecom-bss-oss",
    name: "Telecom BSS/OSS",
    tagline: "Transform telecom journeys.",
    description:
      "Apply deep telecom expertise across customer lifecycle, catalog, order, inventory, billing, orchestration, and delivery governance.",
    icon: "network",
    metrics: [
      { value: "BSS", label: "Customer lifecycle" },
      { value: "OSS", label: "Operations" },
      { value: "AI", label: "Governance" },
    ],
    features: [
      "CRM and customer lifecycle",
      "Product catalog and orders",
      "Inventory and billing",
      "Orchestration and activation",
      "Migration and integration",
      "Program governance",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions & Products"
        title={
          <>
            Flagship platforms,{" "}
            <span className="text-gradient">battle-tested at scale</span>
          </>
        }
        description="Explore PMRG solution areas built around governance, education, enterprise operations, and telecom transformation."
      />

      <section
        id="portfolio"
        data-section-theme="light"
        className="section-light section py-24"
      >
        <div className="container-pmrg flex flex-col gap-10">
          {SOLUTIONS.map((product, idx) => (
            <Reveal key={product.id}>
              <section id={product.id} className="scroll-mt-28">
                <GlassCard
                  theme="light"
                  strong
                  className="relative overflow-hidden rounded-3xl border border-light-line p-10 transition-all hover:scale-[1.01] hover:border-brand/30"
                >
                  <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
                    <div className="lg:col-span-5">
                      <div className="flex items-center gap-4">
                        <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-light-line bg-blue-50 text-brand">
                          <Icon name={product.icon} className="h-8 w-8" />
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-md border border-light-line bg-light-bg-slate px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-fg-dark-muted">
                          Product 0{idx + 1}
                        </span>
                      </div>

                      <h2 className="mt-6 text-3xl font-bold text-fg-dark sm:text-4xl">
                        {product.name}
                      </h2>
                      <p className="mt-2 text-sm font-medium text-brand">
                        {product.tagline}
                      </p>
                      <p className="mt-5 text-base leading-relaxed text-fg-dark-muted">
                        {product.description}
                      </p>

                      <div className="mt-7 grid grid-cols-3 gap-4">
                        {product.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="rounded-2xl border border-light-line bg-light-bg-grey p-4 text-center"
                          >
                            <div className="font-display text-2xl font-extrabold text-gradient">
                              {m.value}
                            </div>
                            <div className="mt-1 text-[10px] uppercase tracking-wider text-fg-dark-subtle">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-wrap items-center gap-4">
                        <Button href="/contact">
                          Request a Demo
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>

                        <Link
                          href={`/solutions/${product.slug}`}
                          className="inline-flex items-center gap-1 text-sm font-medium text-brand transition-colors hover:text-brand-deep"
                        >
                          View Details
                          <ExternalLink className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>

                    <div className="lg:col-span-7">
                      <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-fg-dark-subtle">
                        Key Capabilities
                      </h3>
                      <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {product.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2.5 text-sm text-fg-dark"
                          >
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-brand">
                              <Check className="h-3 w-3" />
                            </span>
                            {f}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8 rounded-2xl border border-light-line bg-light-bg-grey p-6">
                        <div className="font-mono text-[10px] uppercase tracking-wider text-fg-dark-subtle">
                          Reference Architecture
                        </div>
                        <ArchitectureDiagram />
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </section>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

function ArchitectureDiagram() {
  const layers = [
    { label: "Data Sources", nodes: ["APIs", "Events", "Batch"] },
    { label: "Ingestion", nodes: ["Kafka", "Stream"] },
    { label: "Core Engine", nodes: ["Process", "AI / Rules"] },
    { label: "Delivery", nodes: ["APIs", "UI", "Insights"] },
  ];

  return (
    <div className="mt-4 flex items-stretch gap-2 overflow-x-auto pb-1">
      {layers.map((layer, i) => (
        <div key={layer.label} className="flex min-w-[110px] flex-1 items-center">
          <div className="w-full rounded-lg border border-light-line bg-white p-3">
            <div className="font-mono text-[9px] uppercase tracking-wider text-brand">
              {layer.label}
            </div>
            <div className="mt-2 flex flex-col gap-1.5">
              {layer.nodes.map((n) => (
                <div
                  key={n}
                  className="rounded-md bg-light-bg-grey px-2 py-1.5 text-center text-[10px] text-fg-dark-muted"
                >
                  {n}
                </div>
              ))}
            </div>
          </div>
          {i < layers.length - 1 && (
            <span className="mx-1 shrink-0 text-brand/50">→</span>
          )}
        </div>
      ))}
    </div>
  );
}