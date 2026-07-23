import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  Mail,
  Settings,
  Lightbulb,
  TrendingUp,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { RevealGroup, RevealItem } from "@/components/animations/Reveal";

export const metadata: Metadata = {
  title: "Careers, Internships & Expert Opportunities | PMRG",
  description:
    "Explore careers, internships, advisory opportunities and specialist roles across AI, telecom, enterprise platforms, delivery and growth at PMRG.",
  alternates: { canonical: "/company/careers" },
};

/* ── Experienced professionals ───────────────────────────────── */

const PROFESSIONAL_ROLES = [
  "AI and enterprise architecture",
  "Telecom BSS/OSS",
  "ERP/CRM and automation",
  "Project and delivery governance",
  "Solution consulting",
];

/* ── Growth and partnerships ─────────────────────────────────── */

const GROWTH_ROLES = [
  "Enterprise sales",
  "Strategic partnerships",
  "Academic and institutional growth",
  "Market and account development",
];

/* ── Internship steps ────────────────────────────────────────── */

const INTERNSHIP_STEPS = [
  {
    phase: "Step 1",
    title: "Foundation and domain orientation",
    icon: BookOpen,
  },
  {
    phase: "Step 2",
    title: "Project allocation",
    icon: Lightbulb,
  },
  {
    phase: "Step 3",
    title: "Live or simulated delivery",
    icon: Settings,
  },
  {
    phase: "Step 4",
    title: "Capstone and portfolio",
    icon: GraduationCap,
  },
  {
    phase: "Step 5",
    title: "Performance-based opportunities",
    icon: TrendingUp,
  },
];



/* ── Page component ──────────────────────────────────────────── */

export default function CompanyCareersPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <PageHero
        eyebrow="Careers at PMRG"
        title={
          <>
            Build technology, capability and businesses that{" "}
            <span className="text-gradient">solve real problems.</span>
          </>
        }
        description="PMRG works with experienced leaders, architects, delivery specialists, growth professionals and emerging talent across technology and transformation programs."
      >
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <Button href="/contact" size="lg">
            View Open Opportunities
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <Button href="mailto:hr@pmrgsolution.com" variant="outline" size="lg">
            Send Your Profile
          </Button>
        </div>
      </PageHero>

      {/* ── Experienced professionals ─────────────────────── */}
      <section data-section-theme="light" className="section-light section">
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            title="Experienced professionals"
            description="Contribute architecture, consulting, implementation, delivery and program leadership across PMRG solutions and client engagements."
          />
          <Reveal>
            <div className="mx-auto mt-10 max-w-3xl">
              <GlassCard theme="light" className="p-8">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {PROFESSIONAL_ROLES.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-fg-dark"
                    >
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

      {/* ── Growth and partnerships ───────────────────────── */}
      <section
        data-section-theme="light"
        className="section-light section border-t border-light-line"
      >
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            title="Growth and partnerships"
            description="Help build qualified opportunities, strategic partnerships and product-led ventures with clear ownership and ethical market engagement."
          />
          <Reveal>
            <div className="mx-auto mt-10 max-w-3xl">
              <GlassCard theme="light" className="p-8">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {GROWTH_ROLES.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-fg-dark"
                    >
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

      {/* ── Internships and industry readiness ────────────── */}
      <section
        data-section-theme="light"
        className="section-light section border-t border-light-line"
      >
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            title="Internships and industry readiness"
            description="PMRG internships are structured around learning, supervised work, project exposure and demonstrated capability—not certificates alone."
          />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {INTERNSHIP_STEPS.map((step) => {
              const IconCmp = step.icon;
              return (
                <RevealItem key={step.phase} as="div" variant="slide-up">
                  <GlassCard
                    theme="light"
                    className="flex h-full flex-col items-center p-6 text-center"
                  >
                    <span className="inline-flex items-center justify-center rounded-full border border-brand/20 bg-brand-soft px-3 py-1 font-mono text-xs font-bold text-brand">
                      {step.phase}
                    </span>
                    <span className="mt-4 flex h-10 w-10 items-center justify-center rounded-xl border border-brand/20 bg-brand-soft text-brand">
                      <IconCmp className="h-5 w-5" />
                    </span>
                    <h3 className="mt-3 text-sm font-semibold text-fg-dark">
                      {step.title}
                    </h3>
                  </GlassCard>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* ── How to apply ──────────────────────────────────── */}
      <section
        data-section-theme="light"
        className="section-light section border-t border-light-line"
      >
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            title="How to apply"
            description="Send a concise profile with the role or capability area in the subject line."
          />
          <Reveal>
            <div className="mx-auto mt-10 max-w-3xl">
              <GlassCard theme="light" className="p-8">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand/20 bg-brand-soft text-brand">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-fg-dark">
                      Email your profile
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-fg-dark-muted">
                      Send your resume and a brief note about the role or
                      capability area you are interested in.
                    </p>
                    <a
                      href="mailto:hr@pmrgsolution.com"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
                    >
                      hr@pmrgsolution.com
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
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
                View Open Opportunities
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button
                href="mailto:hr@pmrgsolution.com"
                variant="outline"
                size="lg"
              >
                Send Your Profile
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
