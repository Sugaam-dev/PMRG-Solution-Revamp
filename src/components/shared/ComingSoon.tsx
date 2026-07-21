"use client";

import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";

type ComingSoonProps = {
  /** Page title shown in the hero area */
  pageTitle: string;
  /** Short description of what this page will contain */
  description?: string;
};

export default function ComingSoon({ pageTitle, description }: ComingSoonProps) {
  return (
    <>
      {/* Hero */}
      <section
        data-section-theme="light"
        className="section-light relative overflow-hidden pb-8 pt-16 sm:pt-20"
      >
        <div className="container-pmrg relative text-center">
          <Reveal variant="slide-up">
            <span className="eyebrow-light">Coming Soon</span>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-fg-dark sm:text-5xl lg:text-6xl">
              {pageTitle}
            </h1>
            {description && (
              <p className="mx-auto mt-4 max-w-2xl text-lg text-fg-dark-muted">
                {description}
              </p>
            )}
          </Reveal>
        </div>
      </section>

      {/* Coming Soon Card */}
      <section
        data-section-theme="light"
        className="section-light section"
      >
        <div className="container-pmrg flex justify-center">
          <Reveal>
            <GlassCard theme="light" strong className="max-w-lg p-10 text-center">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-light-line bg-blue-50 text-brand">
                <Clock className="h-8 w-8" />
              </span>
              <h2 className="mt-6 text-2xl font-bold text-fg-dark">
                Under Construction
              </h2>
              <p className="mt-3 text-base leading-relaxed text-fg-dark-muted">
                We&apos;re working on something great. This page will be available
                soon with detailed content about our offerings.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button href="/contact" size="lg">
                  Contact Us
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button href="/" variant="outline" size="lg">
                  Back to Home
                </Button>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </section>
    </>
  );
}
