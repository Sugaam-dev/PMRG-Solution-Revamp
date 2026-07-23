import type { Metadata } from "next";
import {
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  Building2,
  Server,
  Building,
  Target,
  Settings,
  TrendingUp,
  AlertTriangle,
  Route,
  FastForward,
  User,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { RevealGroup, RevealItem } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "PMRG Solution Success Stories & Use Cases",
  description:
    "Explore PMRG approaches to AI governance, education transformation, enterprise systems and telecom modernization.",
  alternates: { canonical: "/success-stories" },
};

/* ── 7-point case-story template fields ──────────────────────── */

type StorySection = {
  label: string;
  icon: any;
  content: string;
};

type Story = {
  id: string;
  category: string;
  client: string;
  title: string;
  summary: string;
  sections: StorySection[];
  icon: any;
  color: string;
};

const STORIES: Story[] = [
  {
    id: "delivery-governance",
    category: "Governance",
    client: "Enterprise / MSO Client",
    title: "AI-led delivery governance",
    summary:
      "How PMRG structures requirements, vendors, UAT, risks, approvals and executive visibility for a complex enterprise delivery environment.",
    sections: [
      {
        label: "Client context",
        icon: User,
        content:
          "A large enterprise / MSO organization managing multiple concurrent technology delivery programs across internal teams and external vendors.",
      },
      {
        label: "Business challenge",
        icon: Target,
        content:
          "The delivery environment lacked structured visibility across requirements, vendor dependencies, user acceptance testing and risks — leading to delays, rework and unclear accountability.",
      },
      {
        label: "Why the existing approach was insufficient",
        icon: AlertTriangle,
        content:
          "Spreadsheet-based tracking, disconnected status meetings and manual escalation workflows could not provide the real-time, evidence-based oversight that executive leadership required.",
      },
      {
        label: "PMRG solution and architecture",
        icon: Settings,
        content:
          "Implemented a governed delivery architecture with structured phase gates, automated risk tracking, executive visibility dashboards and vendor deliverable alignment to release cycles and approval workflows.",
      },
      {
        label: "Implementation approach",
        icon: Route,
        content:
          "Phased rollout starting with a pilot program to validate governance structures, followed by full-scale deployment across all active delivery tracks with training for PMO and delivery leads.",
      },
      {
        label: "Outcome and evidence",
        icon: TrendingUp,
        content:
          "Established predictable release cycles, reduced critical UAT defects through earlier intervention, and provided the PMO with real-time, evidence-based delivery metrics.",
      },
      {
        label: "Next phase",
        icon: FastForward,
        content:
          "Extension of governance platform to cover vendor performance scoring, automated compliance checks and AI-assisted risk prediction across upcoming delivery cycles.",
      },
    ],
    icon: ShieldCheck,
    color: "from-brand to-brand-cyan",
  },
  {
    id: "ai-readiness",
    category: "Education",
    client: "University Reference",
    title: "Institutional AI readiness",
    summary:
      "The path from isolated AI interest to a structured program across learners, faculty, operations, employability and innovation.",
    sections: [
      {
        label: "Client context",
        icon: User,
        content:
          "A university seeking to transition from isolated AI lab experiments to a campus-wide, structured AI readiness program aligned to industry expectations.",
      },
      {
        label: "Business challenge",
        icon: Target,
        content:
          "The institution had pockets of AI interest across individual departments but lacked a unified program covering learner outcomes, faculty enablement, operational efficiency and employability.",
      },
      {
        label: "Why the existing approach was insufficient",
        icon: AlertTriangle,
        content:
          "Ad-hoc AI initiatives without cross-departmental coordination, measurable progression frameworks or industry alignment made it impossible to demonstrate institutional readiness or student outcomes.",
      },
      {
        label: "PMRG solution and architecture",
        icon: Settings,
        content:
          "Designed a phased roadmap moving from an AI lab concept to an AI-ready institution. Connected curriculum updates with operational systems to track student capability progression against industry needs.",
      },
      {
        label: "Implementation approach",
        icon: Route,
        content:
          "Structured program model and roadmap delivered in phases — starting with faculty orientation, followed by curriculum integration, operational system connections and industry partnership alignment.",
      },
      {
        label: "Outcome and evidence",
        icon: TrendingUp,
        content:
          "Created a unified, cross-departmental AI governance framework, equipped educators with guided capability programs and provided students with structured, measurable industry-readiness tracks.",
      },
      {
        label: "Next phase",
        icon: FastForward,
        content:
          "Expansion to additional departments, introduction of AI-driven student performance analytics and formalization of industry partnership pathways for internship and placement programs.",
      },
    ],
    icon: GraduationCap,
    color: "from-accent to-accent-light",
  },
  {
    id: "erp-modernization",
    category: "Enterprise",
    client: "Enterprise Client",
    title: "ERP and process modernization",
    summary:
      "How a business process was mapped, configured, validated and stabilized through ERPNext or related enterprise systems.",
    sections: [
      {
        label: "Client context",
        icon: User,
        content:
          "An enterprise client operating with legacy, manually driven business processes that needed to be modernized through a structured ERP implementation.",
      },
      {
        label: "Business challenge",
        icon: Target,
        content:
          "Existing business processes were highly manual and disconnected, leading to inconsistent data, slow operational cycles and limited visibility into performance bottlenecks.",
      },
      {
        label: "Why the existing approach was insufficient",
        icon: AlertTriangle,
        content:
          "Fragmented tools and manual handoffs across departments created data silos, duplication of effort and an inability to generate reliable operational intelligence for decision-making.",
      },
      {
        label: "PMRG solution and architecture",
        icon: Settings,
        content:
          "Mapped and streamlined core business processes before configuring and stabilizing them within a modern enterprise ERP environment. Applied strict validation gates for data migration and system integration.",
      },
      {
        label: "Implementation approach",
        icon: Route,
        content:
          "Process discovery and mapping phase, followed by iterative configuration cycles with user validation at each stage. Data migration executed with documented reconciliation checkpoints.",
      },
      {
        label: "Outcome and evidence",
        icon: TrendingUp,
        content:
          "Achieved unified data visibility, automated repetitive workflow handoffs and created a stable, scalable foundation for future AI and operational intelligence initiatives.",
      },
      {
        label: "Next phase",
        icon: FastForward,
        content:
          "Integration of AI-assisted process optimization, advanced reporting dashboards and extension to additional business units and operational domains.",
      },
    ],
    icon: Building2,
    color: "from-brand-deep to-brand",
  },
];

/* ── Relationships Data ──────────────────────────────────────── */

const RELATIONSHIPS = [
  {
    title: "Clients",
    icon: Building,
    desc: "Enterprises, telecom operators and institutions executing governed transformation.",
  },
  {
    title: "Academic Relationships",
    icon: GraduationCap,
    desc: "Universities and schools building practical capability and industry readiness.",
  },
  {
    title: "Technology & Delivery Partners",
    icon: Server,
    desc: "Platform providers and specialist firms extending implementation capacity.",
  },
];

/* ── Page component ──────────────────────────────────────────── */

export default function SuccessStoriesPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <PageHero
        eyebrow="Success Stories"
        title={
          <>
            Proof should show the problem, the intervention and{" "}
            <span className="text-gradient">the outcome.</span>
          </>
        }
        description="Explore selected PMRG use cases and engagements across governance, telecom, education and enterprise transformation. Named references and metrics are published only after approval."
      >
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <Button href="#stories" size="lg">
            Explore the Stories
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Discuss a Similar Challenge
          </Button>
        </div>
      </PageHero>

      {/* ── Stories Section ─────────────────────────────────── */}
      <section
        id="stories"
        data-section-theme="light"
        className="section-light section"
      >
        <div className="container-pmrg">

          {/* Stories — one card per story */}
          <div className="flex flex-col gap-10">
            {STORIES.map((story) => {
              const IconCmp = story.icon;
              return (
                <Reveal key={story.id}>
                  <GlassCard theme="light" className="overflow-hidden">
                    {/* Story header */}
                    <div className="border-b border-light-line bg-light-bg-slate p-6 sm:p-8">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
                        <span
                          className={cn(
                            "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md",
                            story.color
                          )}
                        >
                          <IconCmp className="h-6 w-6" />
                        </span>
                        <div>
                          <div className="flex items-center gap-3">
                            <span className="rounded-full border border-brand/20 bg-brand-soft px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand">
                              {story.category}
                            </span>
                            <span className="text-xs font-medium text-fg-dark-muted">
                              {story.client}
                            </span>
                          </div>
                          <h2 className="mt-2 text-xl font-bold text-fg-dark lg:text-2xl">
                            {story.title}
                          </h2>
                          <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-fg-dark-muted">
                            {story.summary}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 7-point case-story sections */}
                    <div className="p-6 sm:p-8">
                      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-light-line bg-light-line md:grid-cols-2 lg:grid-cols-3">
                        {story.sections.map((section, sIdx) => {
                          const SectionIcon = section.icon;
                          return (
                            <div
                              key={section.label}
                              className={cn(
                                "bg-white p-5",
                                /* last item spans full width if odd count */
                                sIdx === story.sections.length - 1 &&
                                  story.sections.length % 3 !== 0 &&
                                  "lg:col-span-1"
                              )}
                            >
                              <div className="flex items-center gap-2">
                                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-light-bg-slate text-brand">
                                  <SectionIcon className="h-3.5 w-3.5" />
                                </span>
                                <span className="text-xs font-bold uppercase tracking-wider text-fg-dark-subtle">
                                  {section.label}
                                </span>
                              </div>
                              <p className="mt-3 text-sm leading-relaxed text-fg-dark-muted">
                                {section.content}
                              </p>
                            </div>
                          );
                        })}
                      </div>

                      {/* CTA */}
                      <div className="mt-6 flex justify-end">
                        <Button
                          href="/contact"
                          variant="ghost"
                          size="sm"
                          className="gap-1.5 px-0 text-brand hover:bg-transparent"
                        >
                          Discuss a similar challenge
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </GlassCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Relationship Logo Area ──────────────────────────── */}
      <section
        data-section-theme="light"
        className="section-light section border-t border-light-line bg-light-bg-slate"
      >
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            title="Trusted Relationships"
            description="Separate Clients, Academic Relationships and Technology/Delivery Partners. All logo and naming use requires written approval."
          />
          <RevealGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {RELATIONSHIPS.map((rel) => {
              const IconCmp = rel.icon;
              return (
                <RevealItem key={rel.title} as="div" variant="slide-up">
                  <GlassCard
                    theme="light"
                    className="flex h-full flex-col p-6 text-center sm:p-8"
                  >
                    <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-light-line bg-white text-fg-dark-subtle shadow-sm">
                      <IconCmp className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-base font-semibold text-fg-dark">
                      {rel.title}
                    </h3>
                    <p className="mt-2 text-sm text-fg-dark-muted">
                      {rel.desc}
                    </p>

                    {/* Logo placeholders — link to relevant story where possible */}
                    <div className="mt-auto pt-8">
                      <p className="mb-3 text-[10px] font-medium uppercase tracking-wider text-fg-dark-subtle">
                        Logos published after approval
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        {[1, 2, 3].map((n) => (
                          <div
                            key={n}
                            className="flex h-10 items-center justify-center rounded-lg border border-dashed border-light-line-strong bg-light-bg-slate text-[9px] font-medium text-fg-dark-subtle"
                          >
                            Logo
                          </div>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </RevealItem>
              );
            })}
          </RevealGroup>
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
                Discuss a Similar Challenge
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button href="/solutions" variant="outline" size="lg">
                Explore Solutions
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
