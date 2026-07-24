import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";
import GradientOrb from "@/components/animations/GradientOrb";

export default function Hero() {
  return (
    <section
      data-section-theme="dark"
      className="section-dark relative overflow-hidden"
    >
      {/* Deep blue gradient background with glassy glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #020617 0%, #0f172a 42%, #172554 72%, #2563eb 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% -20%, rgba(56, 189, 248, 0.15), transparent 65%)",
        }}
      />

      {/* Animated gradient orbs for depth */}
      <GradientOrb
        color="blue"
        size={800}
        animate
        className="-left-40 -top-40"
      />
      <GradientOrb
        color="cyan"
        size={600}
        animate
        className="-right-32 top-20"
      />
      <GradientOrb
        color="indigo"
        size={500}
        animate
        className="bottom-0 left-1/3"
      />

      {/* Subtle grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-100 mask-fade-y"
      />

      {/* Decorative glow ring behind hero text */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0%, rgba(37,99,235,0.18) 25%, transparent 50%, rgba(56,189,248,0.16) 75%, transparent 100%)",
          filter: "blur(70px)",
        }}
      />

      <div className="container-pmrg relative flex min-h-[88vh] flex-col items-center justify-center py-28 text-center">
        <Reveal variant="fade-in">
          <span className="eyebrow">AI-led · Outcome-driven · Human-accountable</span>
        </Reveal>

        <Reveal delay={0.08} variant="slide-up">
          <h1 className="mt-7 max-w-4xl text-balance text-4xl font-bold leading-[1.08] tracking-tight text-fg sm:text-5xl lg:text-6xl">
            Govern complex transformation.{" "}
            <span className="text-gradient">Build AI-ready institutions.</span>{" "}
            Modernize enterprise operations.
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted">
            From strategy to governed execution, PMRG combines AI
            platforms, enterprise systems and domain-led delivery to turn ambitious
            transformation into measurable progress.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button href="/contact" size="lg">
              Book a 30-Minute Strategy Session
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button href="/solutions" variant="outline" size="lg" className="border-white/40 bg-white/10 text-white hover:border-white/70 hover:bg-white/15 hover:text-white">
              Explore Solutions
            </Button>
          </div>
        </Reveal>

        {/* Trust row */}
        <Reveal delay={0.34}>
            <div className="mt-16 flex flex-col items-center gap-3 text-sm text-fg-subtle">
            <div className="h-px w-10 bg-white" />
            <span>
              Trusted across{" "}
              <span className="font-semibold text-fg">enterprise, telecom, education</span>{" "}
              and emerging businesses
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
