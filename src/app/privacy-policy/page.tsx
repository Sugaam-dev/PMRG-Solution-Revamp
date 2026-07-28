import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "Privacy Policy | PMRG Solution LLP",
  description:
    "PMRG's privacy policy for its public website, forms, cookies and related public interactions.",
  alternates: { canonical: "/privacy-policy" },
};

const privacySections = [
  {
    title: "1. Scope and PMRG's Role",
    items: [
      "For data collected through PMRG's Website for PMRG's own purposes, PMRG Solution LLP generally acts as the Data Fiduciary.",
      "Where PMRG processes data inside a client's CRM, ERP, telecom, smart-campus, AI, cloud or other solution on the client's instructions, PMRG acts as a Data Processor or service provider.",
      "This Policy operates with the Digital Personal Data Protection Act, 2023 and applicable Indian law.",
    ],
  },
  {
    title: "2. Personal Data We May Collect",
    items: [
      "Identity and contact details, including name, organisation, role, email, telephone number and communication preferences.",
      "Business enquiry, meeting, demo, proposal, support, partner and project information you choose to provide.",
      "Career, internship, ideathon and education-programme information including CVs, qualifications, skills and application responses.",
      "Account, authentication, access, security and audit information.",
      "Technical and usage data such as IP address, device/browser details, timestamps, page interactions, cookie identifiers and error logs.",
      "Marketing preferences, consent, opt-out and grievance records.",
    ],
  },
  {
    title: "3. Why We Use Personal Data",
    items: [
      "Operate, secure, troubleshoot and improve the Website.",
      "Respond to enquiries, arrange meetings or demos, assess requirements, prepare proposals and manage opportunities.",
      "Administer accounts, contracted services, support, recruitment, internships, ideathons, incubation and education programmes.",
      "Send requested communications and, where permitted, marketing.",
      "Prevent fraud, abuse and security threats; enforce agreements; and comply with law.",
    ],
  },
  {
    title: "4. Cookies, Analytics and Marketing",
    items: [
      "PMRG may use necessary cookies for security, forms, authentication, load balancing and core operation.",
      "Preference, analytics or marketing technologies should be activated only after valid user choice where consent is required.",
      "The Website should provide Accept, Reject Non-Essential and Manage Preferences options with comparable prominence.",
      "Marketing emails may be stopped through unsubscribe or by contacting PMRG.",
    ],
  },
  {
    title: "5. Sharing and International Processing",
    items: [
      "PMRG does not sell or rent personal data.",
      "Data may be shared only as reasonably necessary with PMRG personnel, advisers, hosting, cloud, email, CRM, analytics, communications, security, recruitment, payment and support providers, relevant clients or programme sponsors, authorities where required by law, and parties to a corporate transaction under safeguards.",
      "Data may be processed outside your state or country for cloud or support operations, subject to reasonable contractual, organisational and technical safeguards.",
    ],
  },
  {
    title: "6. Retention and Security",
    items: [
      "PMRG retains personal data only as long as reasonably necessary for the stated purpose, relationship or programme, security, contracts, tax, legal requirements, disputes and lawful preservation.",
      "Data is then deleted, securely destroyed or irreversibly anonymised, subject to backups and legal holds.",
      "Safeguards may include encryption, access controls, authentication, secure development, logging, monitoring, backups, vulnerability management, vendor diligence and incident response.",
      "Where required, PMRG will notify the Data Protection Board of India, affected individuals, clients or authorities of a breach in the prescribed manner and timeframe.",
    ],
  },
  {
    title: "7. Your Rights and Grievances",
    items: [
      "Subject to law and verification, you may request information, correction, completion, erasure, withdrawal of consent and grievance redressal.",
      "PMRG may request proportionate information to verify identity and authority.",
      "Requests must not impersonate another person, suppress material information or be false or frivolous.",
    ],
  },
  {
    title: "8. Children, Recruitment and AI Processing",
    items: [
      "The Website is intended for adults and business or institutional users.",
      "For a school, internship or education programme involving a person under 18, PMRG will use an age-appropriate notice and obtain verifiable consent where required.",
      "Applicant and programme data is used to evaluate eligibility, communicate, arrange assessments and administer the process; submission does not guarantee selection, employment, internship, reward, funding, certification or commercial engagement.",
      "PMRG may use AI-assisted tools to organise enquiries, support search, summarise communications, detect abuse or analyse performance, with human oversight where decisions may significantly affect a person.",
    ],
  },
  {
    title: "9. Updates and Privacy Contact",
    items: [
      "PMRG may update this Policy for legal, technological, security or operational changes by revising the Last Updated date and providing additional notice where appropriate.",
      "For privacy questions, consent withdrawal, rights requests or grievances, contact support@pmrgsolution.com.",
      "Registered office: Revell Orchid, E2-103, Porwal Road, Lohegaon, Pune-411047.",
      "Required officer details must be inserted before publication.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-white">
        <div className="container-pmrg py-16 text-center sm:py-20">
          <div className="mx-auto max-w-4xl">
            <p className="eyebrow-light">Legal</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-fg-dark sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-fg-dark-muted">
              PMRG Solution LLP&apos;s privacy policy for its public website, forms, cookies and related public interactions.
            </p>
            <p className="mt-3 text-sm text-fg-dark-subtle">
              Read together with the Website Terms & Conditions and any notice at the point of collection.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/contact?type=privacy">Contact PMRG</Button>
              <Button href="/terms" variant="outline" size="lg">
                View Terms & Conditions
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc]">
        <div className="container-pmrg py-16 sm:py-20">
          <div className="grid gap-6 lg:grid-cols-2">
            {privacySections.map((section) => (
              <GlassCard key={section.title} theme="light" className="p-8 sm:p-10">
                <h2 className="text-2xl font-semibold text-fg-dark">
                  {section.title}
                </h2>
                <ul className="mt-5 space-y-3">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-fg-dark-muted"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>

          <GlassCard theme="light" className="mt-6 p-8 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold text-fg-dark">
                  Need to raise a privacy request?
                </h2>
                <p className="mt-2 text-sm text-fg-dark-muted">
                  You can contact PMRG for rights requests, consent withdrawal or grievances.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="/contact?type=privacy">
                  Send a Privacy Request
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/terms" variant="outline" size="lg">
                  View Terms & Conditions
                </Button>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}