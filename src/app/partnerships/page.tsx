import type { Metadata } from "next";
import { ArrowRight, Check, ShieldCheck, Layers, Box, Settings, BookOpen } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { RevealGroup, RevealItem } from "@/components/animations/Reveal";

export const metadata: Metadata = {
  title: "Technology, Delivery & Academic Partnerships | PMRG",
  description:
    "Partner with PMRG across technology, delivery, account-led growth, telecom solutions, education and innovation programs.",
  alternates: { canonical: "/partnerships" },
};

/* ── Partnership model sections ──────────────────────────────── */

const PARTNERSHIP_MODELS = [
  {
    title: "Technology and product partnerships",
    description:
      "Combine complementary platforms or specialist products with PMRG architecture, integration and market-facing solution design.",
    items: [
      "Product integration",
      "Joint solution design",
      "Co-demonstration",
      "Implementation enablement",
      "Mutual opportunity qualification",
    ],
  },
  {
    title: "Delivery partnerships",
    description:
      "Extend delivery capacity while maintaining clear scope, ownership, governance and quality expectations.",
    items: [
      "Specialist capability",
      "Implementation support",
      "Architecture and assurance",
      "Defined RACI",
      "Customer and data confidentiality",
    ],
  },
  {
    title: "Sales and account partnerships",
    description:
      "Work together on qualified, transparent opportunities with agreed commercials, account roles and delivery responsibilities.",
    items: [
      "Opportunity registration",
      "Joint qualification",
      "Solution and commercial alignment",
      "Customer engagement model",
      "Payment and delivery terms through contract",
    ],
  },
  {
    title: "Academic and innovation partnerships",
    description:
      "Connect institutions, students, faculty, mentors and industry through structured programs and digital platforms.",
    items: [
      "AI and smart-campus programs",
      "Internships and live projects",
      "Incubation and ideations",
      "Faculty and student enablement",
      "Industry and CSR engagement",
    ],
  },
];

/* ── What PMRG brings ────────────────────────────────────────── */

const PMRG_CONTRIBUTIONS = [
  {
    icon: Layers,
    title: "Solution architecture",
  },
  {
    icon: Box,
    title: "Product and platform capability",
  },
  {
    icon: Settings,
    title: "Implementation and PMO",
  },
  {
    icon: BookOpen,
    title: "Domain consulting",
  },
];

/* ── Partnership principles ──────────────────────────────────── */

const PRINCIPLES = [
  "Clear scope and account ownership",
  "Confidentiality and IP protection",
  "Transparent commercials",
  "Quality and acceptance criteria",
  "No public logo or relationship claim without approval",
];

/* ── Page component ──────────────────────────────────────────── */

export default function PartnershipsPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <PageHero
        eyebrow="Partnerships"
        title={
          <>
            Build more together—with clear roles, protected value and{" "}
            <span className="text-gradient">delivery accountability.</span>
          </>
        }
        description="PMRG collaborates with organizations that bring complementary products, market access, institutional reach or delivery capability."
      >
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <Button href="/contact" size="lg">
            Explore Partnership Fit
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Propose an Opportunity
          </Button>
        </div>
      </PageHero>

      {/* ── Partnership model sections ────────────────────── */}
      {PARTNERSHIP_MODELS.map((model, idx) => (
        <section
          key={model.title}
          data-section-theme="light"
          className={`section-light section ${idx > 0 ? "border-t border-light-line" : ""}`}
        >
          <div className="container-pmrg">
            <SectionHeading
              theme="light"
              title={model.title}
              description={model.description}
            />
            <Reveal>
              <div className="mx-auto mt-10 max-w-3xl">
                <GlassCard theme="light" className="p-8">
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {model.items.map((item) => (
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
      ))}

      {/* ── What PMRG brings ──────────────────────────────── */}
      <section
        data-section-theme="light"
        className="section-light section border-t border-light-line"
      >
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            title="What PMRG brings"
            description="PMRG contributes technology architecture, AI and enterprise capabilities, telecom domain expertise, program design and governed delivery."
          />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PMRG_CONTRIBUTIONS.map((item) => {
              const IconCmp = item.icon;
              return (
                <RevealItem key={item.title} as="div" variant="slide-up">
                  <GlassCard theme="light" className="flex h-full flex-col items-center p-6 text-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand/20 bg-brand-soft text-brand">
                      <IconCmp className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 text-sm font-semibold text-fg-dark">
                      {item.title}
                    </h3>
                  </GlassCard>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* ── Partnership principles ─────────────────────────── */}
      <section
        data-section-theme="light"
        className="section-light section border-t border-light-line"
      >
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            title="Partnership principles"
            description="Every partnership should protect the customer, intellectual property, confidential information and the responsibilities agreed by both parties."
          />
          <Reveal>
            <div className="mx-auto mt-10 max-w-3xl">
              <GlassCard theme="light" className="p-8">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand/20 bg-brand-soft text-brand">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-semibold text-fg-dark">
                    Trust and governance
                  </h3>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {PRINCIPLES.map((item) => (
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

      {/* ── Bottom CTA ────────────────────────────────────── */}
      <section
        data-section-theme="light"
        className="section-light section border-t border-light-line"
      >
        <div className="container-pmrg text-center">
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button href="/contact" size="lg">
                Explore Partnership Fit
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Propose an Opportunity
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
