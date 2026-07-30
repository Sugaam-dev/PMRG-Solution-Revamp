"use client";

import { WHY_PMRG } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { RevealGroup, RevealItem } from "@/components/animations/Reveal";
import { IconPress } from "@/components/animations/IconPress";

export default function WhyChooseUs() {
  return (
    <section
      data-section-theme="light"
      className="section-light-grey section"
    >
      <div className="container-pmrg">
        <SectionHeading
          align="center"
          theme="light"
          eyebrow="Why PMRG"
          title={
            <>
              Built for outcomes,{" "}
              <span className="text-gradient">governed by trust</span>
            </>
          }
          description="PMRG works as a transformation partner, product innovator, implementation team, capability builder, domain specialist and ecosystem enabler."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-light-line bg-light-line sm:grid-cols-2 lg:grid-cols-3">
          {WHY_PMRG.map((item) => (
            <RevealItem key={item.title} as="div">
              <div className="h-full bg-white p-6">
                <IconPress className="flex h-10 w-10 items-center justify-center rounded-lg border border-light-line bg-blue-50 text-brand">
                  <Icon name={item.icon} className="h-5 w-5" />
                </IconPress>
                <h3 className="mt-4 text-base font-semibold text-fg-dark">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-fg-dark-muted">{item.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
