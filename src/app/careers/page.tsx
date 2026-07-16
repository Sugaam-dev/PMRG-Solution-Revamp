import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal, RevealGroup, RevealItem } from "@/components/animations/Reveal";
import GradientOrb from "@/components/animations/GradientOrb";
import JobsList from "./JobsList";
import { BENEFITS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join PMRG Solution. Explore open roles across engineering, AI, cloud, and design — and the benefits of building with us.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      {/* Hero — light theme */}
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Build the future of{" "}
            <span className="text-gradient">intelligent enterprise</span> — with us
          </>
        }
        description="We're a remote-first team of engineers, scientists, and designers shaping how telecom and enterprise companies use AI. Come build with us."
      >
        <Button href="#openings" size="lg">
          View Open Roles
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </PageHero>

      {/* Culture — white */}
      <section data-section-theme="light" className="section-light section">
        <div className="container-pmrg grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow-light">Our Culture</span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-fg-dark sm:text-4xl">
              High talent density, <span className="text-gradient">low ego</span>, real ownership
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-fg-dark-muted">
              <p>
                We hire senior, curious people and trust them to do their best work. No
                micromanagement, no politics — just clear ownership, great teammates, and
                hard problems worth solving.
              </p>
              <p>
                Async by default, remote-first by design, and global by choice. You'll work
                with people across four continents on systems that matter.
              </p>
            </div>
          </Reveal>

          <Reveal className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[
                { k: "Remote-first", v: "Work from anywhere" },
                { k: "300+", v: "Teammates globally" },
                { k: "4", v: "Delivery centers" },
                { k: "94%", v: "Would refer a friend" },
              ].map((stat, i) => (
                <GlassCard theme="light" key={stat.k} className={i % 2 === 1 ? "mt-6 p-6" : "p-6"}>
                  <div className="font-display text-3xl font-extrabold text-gradient">
                    {stat.k}
                  </div>
                  <div className="mt-1 text-sm text-fg-dark-muted">{stat.v}</div>
                </GlassCard>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Openings — light grey */}
      <section id="openings" data-section-theme="light" className="section-light-grey section scroll-mt-28">
        <div className="container-pmrg">
          <SectionHeading
            align="left"
            theme="light"
            eyebrow="Open Positions"
            title={
              <>
                Find your <span className="text-gradient">next role</span>
              </>
            }
            description="Filter by team to find the right fit. Don't see your role? We're always open to exceptional people."
          />
          <div className="mt-10">
            <JobsList />
          </div>
        </div>
      </section>

      {/* Benefits — dark navy */}
      <section data-section-theme="dark" className="section-navy section relative overflow-hidden">
        <GradientOrb color="blue" size={500} animate className="-right-20 top-20" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-50 mask-fade-y" />
        <div className="container-pmrg relative">
          <SectionHeading
            theme="dark"
            eyebrow="Benefits & Perks"
            title={
              <>
                We invest in <span className="text-gradient">our people</span>
              </>
            }
            description="Competitive compensation, meaningful equity, and the support you need to do the best work of your career."
          />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
            {BENEFITS.map((benefit) => (
              <RevealItem key={benefit.title}>
                <GlassCard className="h-full p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-line-strong bg-white/[0.02] text-accent">
                    <Icon name={benefit.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-fg">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {benefit.description}
                  </p>
                </GlassCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* CTA — blue gradient */}
      <section data-section-theme="dark" className="section-gradient-cta relative overflow-hidden py-20 sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid opacity-20"
        />
        <div className="container-pmrg relative text-center">
          <Reveal variant="slide-up">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl">
              Don't see the right role?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/80">
              Send us your story. We hire for trajectory, not just job descriptions.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact" size="lg" className="bg-white text-brand-deep hover:bg-white/90 hover:text-brand-deep">
                Introduce Yourself
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
