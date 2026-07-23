import type { Metadata } from "next";
import { Mail, Phone, MapPin, ArrowRight, Users } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/animations/Reveal";
import ContactForm from "./ContactForm";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact PMRG Solution | Start a Strategy Conversation",
  description:
    "Contact PMRG Solution about AI governance, smart campus, enterprise platforms, telecom BSS/OSS, partnerships or careers.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Bring us the business problem.{" "}
            <span className="text-gradient">We will help define the path forward.</span>
          </>
        }
        description="Tell PMRG what you are trying to improve, build or govern. We will route the enquiry to the relevant solution or partnership team."
      />

      <section data-section-theme="light" className="section-light pb-28">
        <div className="container-pmrg grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* form */}
          <Reveal className="lg:col-span-7">
            <GlassCard theme="light" strong className="relative overflow-hidden p-7 sm:p-9">
              <h2 className="relative text-xl font-semibold text-fg-dark">Submit your requirement</h2>
              <p className="relative mt-1.5 text-sm text-fg-dark-muted">
                AI Governance · Smart Campus · Enterprise Platforms · Telecom BSS/OSS · Partnerships · Careers
              </p>
              <div className="relative mt-7">
                <ContactForm />
              </div>
            </GlassCard>
          </Reveal>

          {/* info */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="flex h-full flex-col gap-5">
              {/* Direct contact */}
              <GlassCard theme="light" className="p-7">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-fg-dark-subtle">
                  Direct contact
                </h3>
                <ul className="mt-5 space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-light-line bg-blue-50 text-brand">
                      <Mail className="h-4.5 w-4.5" style={{ width: 18, height: 18 }} />
                    </span>
                    <div>
                      <div className="text-xs text-fg-dark-subtle">General enquiries</div>
                      <a href={`mailto:${COMPANY.email}`} className="text-sm text-fg-dark hover:text-brand">
                        {COMPANY.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-light-line bg-blue-50 text-brand">
                      <Users className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-xs text-fg-dark-subtle">Careers</div>
                      <a href="mailto:hr@pmrgsolution.com" className="text-sm text-fg-dark hover:text-brand">
                        hr@pmrgsolution.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-light-line bg-blue-50 text-brand">
                      <Phone className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-xs text-fg-dark-subtle">Phone</div>
                      <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="text-sm text-fg-dark hover:text-brand">
                        {COMPANY.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-light-line bg-blue-50 text-brand">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-xs text-fg-dark-subtle">Location</div>
                      <p className="text-sm leading-relaxed text-fg-dark">{COMPANY.address}</p>
                    </div>
                  </li>
                </ul>
              </GlassCard>

              {/* What happens next */}
              <GlassCard theme="light" className="p-7">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-fg-dark-subtle">
                  What happens next
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-fg-dark-muted">
                  PMRG will review the enquiry, identify the relevant capability
                  owner and contact you using the information provided.
                </p>
              </GlassCard>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
