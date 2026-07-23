import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { RevealGroup, RevealItem } from "@/components/animations/Reveal";

export const metadata: Metadata = {
  title: "AI for Schools — Responsible AI Learning Programs | PMRG",
  description:
    "Introduce responsible, age-appropriate AI learning across Classes 6–12 with teacher enablement, innovation labs, governance and institutional support.",
  alternates: { canonical: "/solutions/ai-for-schools" },
};

const SECTIONS = [
  {
    title: "AI literacy for Classes 6–8",
    description: "Introduce AI awareness and computational thinking in safe, engaging, and age-appropriate formats.",
    items: ["AI awareness and concepts", "Computational thinking", "Prompt basics and digital safety", "Creative projects and storytelling", "Responsible-use introduction"],
  },
  {
    title: "Applied AI for Classes 9–10",
    description: "Move from awareness to practical, project-based AI application across subjects.",
    items: ["Subject-linked AI projects", "Data, models and patterns", "Research and problem-solving", "Ethics, bias and critical thinking", "Portfolio and demonstration"],
  },
  {
    title: "Career and innovation exposure for Classes 11–12",
    description: "Connect AI skills to career awareness, innovation and industry readiness.",
    items: ["AI career and industry awareness", "Innovation and ideation projects", "Prototype and solution design", "Collaboration and presentation", "Portfolio and competition readiness"],
  },
  {
    title: "Teacher enablement",
    description: "Equip teachers to use AI as a productivity and pedagogy tool — not a replacement.",
    items: ["AI copilots for lesson planning", "Worksheet and assessment generation", "Feedback and differentiated learning support", "Responsible-use modelling", "Continuous learning and peer exchange"],
  },
  {
    title: "AI Innovation Lab and Club",
    description: "Create a visible, structured space for students to explore, build and showcase AI projects.",
    items: ["Innovation lab setup and governance", "Student AI Club activities", "Internal and external showcases", "Competitions and hackathons", "Industry and mentor engagement"],
  },
  {
    title: "School operations and governance",
    description: "Support school administration with AI-assisted workflows, communication and reporting.",
    items: ["Communication and parent engagement", "Attendance, timetable and scheduling support", "Administrative workflow automation", "Institutional dashboards", "AI policy and usage governance"],
  },
];

export default function AIForSchoolsPage() {
  return (
    <>
      <PageHero
        eyebrow="AI for Schools"
        title={
          <>
            Responsible AI that helps students <span className="text-gradient">think, create and learn</span> — not just consume.
          </>
        }
        description="PMRG helps schools introduce age-appropriate AI learning across Classes 6–12 while enabling teachers, supporting operations and building a responsible adoption framework."
      >
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <Button href="/contact" size="lg">
            Request a School AI Readiness Workshop
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <Button href="/solutions/smart-campus-education" variant="outline" size="lg">
            Back to Education Overview
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

      {/* Final CTA */}
      <section data-section-theme="light" className="section-light section border-t border-light-line">
        <div className="container-pmrg text-center">
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button href="/contact" size="lg">
                Request a School AI Readiness Workshop
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Discuss a School Program
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
