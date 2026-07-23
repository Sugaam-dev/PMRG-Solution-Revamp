import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/animations/Reveal";
import { RevealGroup, RevealItem } from "@/components/animations/Reveal";

export const metadata: Metadata = {
  title: "Smart Campus & AI for Education Solutions | PMRG",
  description:
    "Build AI-ready schools and universities through responsible AI learning, smart operations, employability, incubation and institutional intelligence.",
  alternates: { canonical: "/solutions/smart-campus-education" },
};

const PATH_CARDS = [
  {
    icon: "GraduationCap",
    title: "For Schools",
    description: "Age-appropriate AI learning, teacher enablement, innovation labs, responsible-use policies and operational support.",
    href: "/solutions/ai-for-schools",
  },
  {
    icon: "Building2",
    title: "For Universities",
    description: "Smart campus, admissions, student support, internships, placements, incubation, faculty enablement and dashboards.",
    href: "/solutions/ai-for-universities",
  },
];

const PILLARS = [
  {
    title: "AI learning and readiness",
    items: ["Age-appropriate curricula", "Faculty and teacher enablement", "Responsible-AI policy"],
  },
  {
    title: "Student and campus experience",
    items: ["Admissions and lifecycle", "Student support and engagement", "Campus operations"],
  },
  {
    title: "Employability and industry connect",
    items: ["Internships and placements", "Industry projects and mentoring", "Career readiness programs"],
  },
  {
    title: "Innovation and incubation",
    items: ["Ideathons and hackathons", "Startup pipelines", "Mentor and investor engagement"],
  },
  {
    title: "Institutional intelligence",
    items: ["KPI dashboards", "Accreditation readiness", "Data-driven decision support"],
  },
];

const OUTCOMES = [
  "Structured AI adoption without institutional risk",
  "Improved student experience and institutional responsiveness",
  "Greater employability, placement and industry alignment",
  "Stronger innovation and research outcomes",
  "Efficient, governed and connected operations",
  "A phased, measurable transformation roadmap",
];

export default function SmartCampusEducationPage() {
  return (
    <>
      <PageHero
        eyebrow="Smart Campus & AI for Education"
        title={
          <>
            Build an <span className="text-gradient">AI-ready institution</span> — without losing the human purpose of education.
          </>
        }
        description="PMRG connects responsible AI learning, faculty enablement, institutional operations, employability and innovation into a practical transformation model."
      >
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <Button href="/contact" size="lg">
            Request an Institutional Workshop
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <Button href="#paths" variant="outline" size="lg">
            Choose Your Path
          </Button>
        </div>
      </PageHero>

      {/* Choose your path */}
      <section id="paths" data-section-theme="light" className="section-light section">
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            title="Choose your path"
            description="PMRG tailors programs for schools and universities with different maturity, stakeholder and regulatory contexts."
          />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
            {PATH_CARDS.map((card) => (
              <RevealItem key={card.title} as="div" variant="slide-up">
                <Link href={card.href} className="group block h-full">
                  <GlassCard theme="light" className="flex h-full flex-col p-8 text-center">
                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-light-line bg-blue-50 text-brand transition-colors group-hover:bg-blue-100">
                      <Icon name={card.icon} className="h-7 w-7" />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold text-fg-dark">{card.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-dark-muted">{card.description}</p>
                    <span className="mt-5 inline-flex items-center justify-center gap-1.5 text-sm font-medium text-brand transition-colors group-hover:text-brand-deep">
                      Explore
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </GlassCard>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Five transformation pillars */}
      <section data-section-theme="light" className="section-light section border-t border-light-line">
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            title="Five transformation pillars"
            description="A connected approach across learning, experience, employability, innovation and intelligence."
          />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((pillar) => (
              <RevealItem key={pillar.title} as="div" variant="slide-up">
                <GlassCard theme="light" className="flex h-full flex-col p-7">
                  <h3 className="text-base font-semibold text-fg-dark">{pillar.title}</h3>
                  <ul className="mt-4 flex flex-col gap-2">
                    {pillar.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-fg-dark-muted">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-brand">
                          <Check className="h-3 w-3" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* What institutional leaders gain */}
      <section data-section-theme="light" className="section-light section border-t border-light-line">
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            title="What institutional leaders gain"
            description="Define measures appropriate to the institution instead of applying generic technology metrics."
          />
          <Reveal>
            <div className="mx-auto mt-10 max-w-3xl">
              <GlassCard theme="light" className="p-8">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {OUTCOMES.map((item) => (
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

      {/* How PMRG works with institutions */}
      <section data-section-theme="light" className="section-light section border-t border-light-line">
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            title="How PMRG works with institutions"
            description="PMRG can work with institutional leadership, academic departments, placement cells, incubation centers and industry partners through one coordinated roadmap."
          />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {["Discovery", "Blueprint", "Pilot programs", "Operational enablement", "Evidence and scale"].map((step, i) => (
              <RevealItem key={step} as="div" variant="slide-up">
                <GlassCard theme="light" className="flex h-full flex-col p-6 text-center">
                  <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-brand/20 bg-brand-soft font-mono text-sm font-bold text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-sm font-semibold text-fg-dark">{step}</h3>
                </GlassCard>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              <Button href="/contact" size="lg">
                Request an Institutional Workshop
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
