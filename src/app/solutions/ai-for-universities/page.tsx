import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { RevealGroup, RevealItem } from "@/components/animations/Reveal";

export const metadata: Metadata = {
  title: "AI for Universities & Smart Campus Solutions | PMRG",
  description:
    "Design a smart campus across admissions, student experience, placements, incubation, faculty enablement, operations and institutional intelligence.",
  alternates: { canonical: "/solutions/ai-for-universities" },
};

const SECTIONS = [
  {
    title: "Student experience and support",
    description: "Use AI and digital tools to improve how students interact with their institution from admission to graduation.",
    items: ["AI-assisted student support", "Academic advising", "Campus service access", "Engagement and feedback", "Early intervention signals"],
  },
  {
    title: "Admissions and institutional growth",
    description: "Streamline enquiry, application, selection and enrolment into a connected digital journey.",
    items: ["Enquiry and lead management", "Application and evaluation", "Communication and follow-up", "Selection and onboarding", "Conversion analytics"],
  },
  {
    title: "Industry readiness and placements",
    description: "Connect students to internships, live projects, mentors and employers through a structured, governed platform.",
    items: ["Internship management", "Placement drives and tracking", "Employer and mentor engagement", "Student readiness assessment", "Outcome dashboards"],
  },
  {
    title: "Incubation and innovation",
    description: "Support structured innovation pipelines from idea to market readiness.",
    items: ["Idea intake and evaluation", "Cohort and milestone governance", "Mentor, corporate and investor networks", "Prototype and market validation", "Innovation portfolio dashboards"],
  },
  {
    title: "Faculty and operational enablement",
    description: "Support faculty productivity, institutional operations and administrative efficiency.",
    items: ["Faculty AI copilots", "Curriculum and assessment support", "Research support", "Administrative workflows", "Policy and responsible-AI framework", "Role-based dashboards"],
  },
];

const ROADMAP = [
  { phase: "Days 1–20", title: "Institutional discovery and baseline" },
  { phase: "Days 21–40", title: "Blueprint and pilot design" },
  { phase: "Days 41–70", title: "Priority pilot implementation" },
  { phase: "Days 71–100", title: "Evidence, adoption and scale plan" },
];

export default function AIForUniversitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="AI for Universities & Smart Campus"
        title={
          <>
            A campus that connects learning, operations, careers and innovation{" "}
            <span className="text-gradient">into one intelligent system.</span>
          </>
        }
        description="PMRG helps universities build a connected campus experience across the student lifecycle, academic delivery, placements, incubation, facilities and institutional decision-making."
      >
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <Button href="/contact" size="lg">
            Design a 100-Day Campus Roadmap
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Request an Institutional Workshop
          </Button>
        </div>
      </PageHero>

      {SECTIONS.map((section, idx) => (
        <section
          key={section.title}
          data-section-theme="light"
          className={`section-light section ${idx > 0 ? "border-t border-light-line" : ""}`}
        >
          <div className="container-pmrg">
            <SectionHeading
              theme="light"
              title={section.title}
              description={section.description}
            />
            <Reveal>
              <div className="mx-auto mt-10 max-w-3xl">
                <GlassCard theme="light" className="p-8">
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {section.items.map((item) => (
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

      {/* 100-day roadmap */}
      <section data-section-theme="light" className="section-light section border-t border-light-line">
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            title="Indicative 100-day roadmap"
            description="The roadmap shown is a service offering, separate from the three-week PMRG website build plan."
          />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ROADMAP.map((step) => (
              <RevealItem key={step.phase} as="div" variant="slide-up">
                <GlassCard theme="light" className="flex h-full flex-col p-6 text-center">
                  <span className="inline-flex items-center justify-center rounded-full border border-brand/20 bg-brand-soft px-3 py-1 font-mono text-xs font-bold text-brand">
                    {step.phase}
                  </span>
                  <h3 className="mt-4 text-sm font-semibold text-fg-dark">{step.title}</h3>
                </GlassCard>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              <Button href="/contact" size="lg">
                Design a 100-Day Campus Roadmap
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
