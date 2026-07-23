import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  MapPin,
  Target,
  Eye,
  Lightbulb,
  Box,
  Settings,
  Users,
  BookOpen,
  Handshake,
  Globe,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { RevealGroup, RevealItem } from "@/components/animations/Reveal";

export const metadata: Metadata = {
  title: "About PMRG Solution | AI & Digital Transformation",
  description:
    "PMRG Solution LLP combines AI, telecom, enterprise platforms, smart-campus programs and governed delivery to create measurable transformation.",
  alternates: { canonical: "/company/about" },
};

/* ── Who we are ──────────────────────────────────────────────── */

const WHO_WE_ARE = [
  { icon: Lightbulb, title: "Technology and consulting" },
  { icon: Box, title: "Product and platform innovation" },
  { icon: Settings, title: "Implementation and delivery" },
  { icon: Handshake, title: "Capability and ecosystem building" },
];

/* ── How PMRG creates value ──────────────────────────────────── */

const VALUE_ROLES = [
  {
    icon: Target,
    title: "Transformation Partner",
    description: "Strategy-to-execution leadership for complex programs.",
  },
  {
    icon: Lightbulb,
    title: "Product Innovator",
    description: "Building platforms that turn insight into accountable action.",
  },
  {
    icon: Settings,
    title: "Implementation Team",
    description: "Governed delivery with visible ownership and measurable checkpoints.",
  },
  {
    icon: BookOpen,
    title: "Capability Builder",
    description: "Enabling teams, institutions and ecosystems with structured programs.",
  },
  {
    icon: Globe,
    title: "Domain Specialist",
    description: "Deep expertise across telecom, education and enterprise domains.",
  },
  {
    icon: Users,
    title: "Ecosystem Enabler",
    description: "Connecting partners, institutions and industry for shared outcomes.",
  },
];

/* ── Values ──────────────────────────────────────────────────── */

const VALUES = [
  "Accountability",
  "Integrity",
  "Innovation with purpose",
  "Collaboration",
  "Continuous learning",
];

/* ── Page component ──────────────────────────────────────────── */

export default function CompanyAboutPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <PageHero
        eyebrow="About PMRG"
        title={
          <>
            Innovate to elevate—technology that improves decisions,{" "}
            <span className="text-gradient">accountability and outcomes.</span>
          </>
        }
        description="PMRG Solution LLP is a technology and consulting company serving enterprises, telecom organizations, educational institutions and emerging businesses."
      >
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <Button href="/contact" size="lg">
            Start a Conversation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <Button href="/solutions" variant="outline" size="lg">
            Explore Our Solutions
          </Button>
        </div>
      </PageHero>

      {/* ── Who we are ────────────────────────────────────── */}
      <section data-section-theme="light" className="section-light section">
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            title="Who we are"
            description="PMRG brings together artificial intelligence, agentic AI, enterprise architecture, Telecom BSS/OSS, ERP/CRM, governance and education transformation capabilities."
          />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHO_WE_ARE.map((item) => {
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

      {/* ── Mission & Vision ──────────────────────────────── */}
      <section
        data-section-theme="light"
        className="section-light section border-t border-light-line"
      >
        <div className="container-pmrg">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal>
              <GlassCard theme="light" className="flex h-full flex-col p-8">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand/20 bg-brand-soft text-brand">
                  <Target className="h-5 w-5" />
                </span>
                <h2 className="mt-5 text-xl font-bold text-fg-dark">Mission</h2>
                <p className="mt-3 text-sm leading-relaxed text-fg-dark-muted">
                  To help organizations and institutions adopt technology
                  responsibly, execute transformation with accountability and
                  create measurable value for people, operations and
                  stakeholders.
                </p>
              </GlassCard>
            </Reveal>
            <Reveal delay={0.08}>
              <GlassCard theme="light" className="flex h-full flex-col p-8">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand/20 bg-brand-soft text-brand">
                  <Eye className="h-5 w-5" />
                </span>
                <h2 className="mt-5 text-xl font-bold text-fg-dark">Vision</h2>
                <p className="mt-3 text-sm leading-relaxed text-fg-dark-muted">
                  To become a trusted transformation and innovation partner that
                  connects AI capability, domain expertise and governed execution
                  across enterprise and education ecosystems.
                </p>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── How PMRG creates value ────────────────────────── */}
      <section
        data-section-theme="light"
        className="section-light section border-t border-light-line"
      >
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            title="How PMRG creates value"
            description="Innovation matters only when it improves decisions, simplifies work, strengthens accountability and enables people to perform better."
          />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VALUE_ROLES.map((role) => {
              const IconCmp = role.icon;
              return (
                <RevealItem key={role.title} as="div" variant="slide-up">
                  <GlassCard theme="light" className="flex h-full flex-col p-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand/20 bg-brand-soft text-brand">
                      <IconCmp className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-sm font-semibold text-fg-dark">
                      {role.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-fg-dark-muted">
                      {role.description}
                    </p>
                  </GlassCard>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* ── Values ────────────────────────────────────────── */}
      <section
        data-section-theme="light"
        className="section-light section border-t border-light-line"
      >
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            title="Values"
            description="PMRG's work should reflect accountability, practical innovation, collaboration, transparency and a commitment to client and institutional outcomes."
          />
          <Reveal>
            <div className="mx-auto mt-10 max-w-3xl">
              <GlassCard theme="light" className="p-8">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {VALUES.map((item) => (
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

      {/* ── Where we work ─────────────────────────────────── */}
      <section
        data-section-theme="light"
        className="section-light section border-t border-light-line"
      >
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            title="Where we work"
          />
          <Reveal>
            <div className="mx-auto mt-10 max-w-3xl">
              <GlassCard theme="light" className="p-8">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand/20 bg-brand-soft text-brand">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-fg-dark">
                      Pune, India
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-fg-dark-muted">
                      PMRG is based in Pune, India and supports clients,
                      institutions and partners through remote, hybrid and
                      on-site engagement models based on project requirements.
                    </p>
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
                Start a Conversation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button href="/solutions" variant="outline" size="lg">
                Explore Our Solutions
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
