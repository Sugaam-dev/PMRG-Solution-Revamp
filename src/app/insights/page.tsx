import type { Metadata } from "next";
import {
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  Building2,
  RadioTower,
  FileText,
  Download,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/animations/Reveal";
import { RevealGroup, RevealItem } from "@/components/animations/Reveal";

export const metadata: Metadata = {
  title: "Insights on AI Governance, Telecom & Education | PMRG",
  description:
    "Practical perspectives from PMRG on AI governance, enterprise systems, telecom BSS/OSS, smart campus and industry readiness.",
  alternates: { canonical: "/insights" },
};

/* ── Insight categories ──────────────────────────────────────── */

const CATEGORIES = [
  {
    icon: ShieldCheck,
    title: "AI governance",
    description:
      "How organizations can combine intelligence with accountability, evidence and human decision authority.",
    articles: [
      {
        type: "Article",
        title: "Capability without governance is an expensive liability",
      },
      {
        type: "Asset",
        title: "AI governance maturity checklist",
      },
    ],
    color: "from-brand to-brand-cyan",
  },
  {
    icon: GraduationCap,
    title: "Smart Campus and education",
    description:
      "Practical approaches to responsible AI, student outcomes, institutional operations and industry readiness.",
    articles: [
      {
        type: "Article",
        title: "From AI lab to AI-ready institution",
      },
      {
        type: "Asset",
        title: "Smart-campus 100-day roadmap",
      },
    ],
    color: "from-accent to-accent-light",
  },
  {
    icon: Building2,
    title: "Enterprise transformation",
    description:
      "Guidance for ERP, CRM, AI automation, sales intelligence and phased adoption.",
    articles: [
      {
        type: "Article",
        title: "Where enterprise AI should begin",
      },
      {
        type: "Asset",
        title: "ERP and AI modernization guide",
      },
    ],
    color: "from-brand-deep to-brand",
  },
  {
    icon: RadioTower,
    title: "Telecom BSS/OSS",
    description:
      "Architecture and delivery perspectives across customer lifecycle, ordering, inventory, billing and orchestration.",
    articles: [
      {
        type: "Article",
        title: "Governing complex telecom transformation",
      },
      {
        type: "Asset",
        title: "Telecom CLM reference architecture",
      },
    ],
    color: "from-brand-cyan to-brand",
  },
];

/* ── Page component ──────────────────────────────────────────── */

export default function InsightsPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Practical thinking for{" "}
            <span className="text-gradient">governed transformation.</span>
          </>
        }
        description="Explore perspectives, frameworks, architecture notes and implementation guidance across PMRG's priority domains."
      >
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <Button href="#topics" size="lg">
            Explore Insights
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Discuss a Topic with PMRG
          </Button>
        </div>
      </PageHero>

      {/* ── Topic categories ──────────────────────────────── */}
      <section
        id="topics"
        data-section-theme="light"
        className="section-light section"
      >
        <div className="container-pmrg">
          <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {CATEGORIES.map((cat) => {
              const IconCmp = cat.icon;
              return (
                <RevealItem key={cat.title} as="div" variant="slide-up">
                  <GlassCard
                    theme="light"
                    glowOnHover={false}
                    className="flex h-full flex-col p-8"
                  >
                    {/* icon + title */}
                    <div className="flex items-center gap-3">
                      <span
                        className="flex h-11 w-11 items-center justify-center rounded-xl text-white"
                        style={{
                          background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                        }}
                      >
                        <span
                          className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${cat.color} text-white`}
                        >
                          <IconCmp className="h-5 w-5" />
                        </span>
                      </span>
                      <h2 className="text-lg font-bold text-fg-dark">
                        {cat.title}
                      </h2>
                    </div>

                    {/* description */}
                    <p className="mt-4 text-sm leading-relaxed text-fg-dark-muted">
                      {cat.description}
                    </p>

                    {/* planned articles */}
                    <div className="mt-6 flex flex-col gap-3 border-t border-light-line pt-5">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-dark-subtle">
                        Coming soon
                      </span>
                      {cat.articles.map((article) => (
                        <div
                          key={article.title}
                          className="flex items-start gap-2.5 text-sm text-fg-dark"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-light-bg-slate text-fg-dark-subtle">
                            {article.type === "Article" ? (
                              <FileText className="h-3 w-3" />
                            ) : (
                              <Download className="h-3 w-3" />
                            )}
                          </span>
                          <span>
                            <span className="font-medium">{article.title}</span>
                            <span className="ml-1.5 rounded bg-light-bg-slate px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-fg-dark-subtle">
                              {article.type}
                            </span>
                          </span>
                        </div>
                      ))}
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
                Discuss a Topic with PMRG
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
