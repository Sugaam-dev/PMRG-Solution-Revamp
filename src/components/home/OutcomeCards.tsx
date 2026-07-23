import Link from "next/link";
import { ArrowUpRight, ShieldCheck, GraduationCap, Building2, RadioTower, Handshake } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealGroup, RevealItem } from "@/components/animations/Reveal";

const OUTCOMES = [
  {
    icon: ShieldCheck,
    title: "Govern delivery and decisions",
    description:
      "Create accountability across requirements, vendors, risks, approvals, UAT and executive reporting.",
    href: "/solutions/ai-assisted-governance",
    color: "from-brand to-brand-cyan",
  },
  {
    icon: GraduationCap,
    title: "Build an AI-ready campus",
    description:
      "Connect learning, operations, employability, innovation and institutional intelligence.",
    href: "/solutions/smart-campus-education",
    color: "from-accent to-accent-light",
  },
  {
    icon: Building2,
    title: "Modernize enterprise operations",
    description:
      "Improve processes through ERP, CRM, automation, data and AI-led visibility.",
    href: "/solutions/enterprise-solutions",
    color: "from-brand-deep to-brand",
  },
  {
    icon: RadioTower,
    title: "Transform telecom operations",
    description:
      "Modernize customer lifecycle, ordering, inventory, billing and service orchestration.",
    href: "/solutions/telecom-bss-oss",
    color: "from-brand to-indigo-600",
  },
  {
    icon: Handshake,
    title: "Partner with PMRG",
    description:
      "Combine market access with PMRG architecture, technology and delivery capability.",
    href: "/partnerships",
    color: "from-brand-cyan to-brand",
  },
];

export default function OutcomeCards() {
  return (
    <section
      data-section-theme="light"
      className="section-light section"
    >
      <div className="container-pmrg">
        <SectionHeading
          theme="light"
          eyebrow="Solutions"
          title={
            <>
              Choose the outcome{" "}
              <span className="text-gradient">you need</span>
            </>
          }
          description="Start with the business outcome, then connect to the most relevant PMRG capability."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {OUTCOMES.map((item) => {
            const IconCmp = item.icon;
            return (
              <RevealItem key={item.title} as="div" variant="slide-up">
                <Link href={item.href} className="group block h-full">
                  <GlassCard theme="light" className="flex h-full flex-col p-7">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md transition-transform duration-200 group-hover:-translate-y-0.5 ${item.color}`}
                    >
                      <IconCmp className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-base font-semibold text-fg-dark leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-dark-muted">
                      {item.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-fg-dark-subtle transition-colors group-hover:text-brand">
                      Explore
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </GlassCard>
                </Link>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
