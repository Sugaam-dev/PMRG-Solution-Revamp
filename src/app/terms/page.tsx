import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "PMRG Website Terms of Use | PMRG Solution LLP",
  description:
    "PMRG's public website terms for www.pmrgsolution.com and PMRG-controlled subdomains.",
  alternates: { canonical: "/terms" },
};

const websiteTerms = [
  {
    title: "1. About PMRG and These Terms",
    items: [
      "The Website is operated by PMRG Solution LLP and includes www.pmrgsolution.com, PMRG-controlled subdomains, forms and public portals.",
      "You must be at least 18 years old and legally competent, unless access is authorised by a responsible institution.",
      "Signed agreements, order forms, NDAs or programme-specific terms prevail over these Terms for the same subject matter.",
    ],
  },
  {
    title: "2. PMRG Services and Website Information",
    items: [
      "PMRG provides and promotes technology and consulting offerings including AI-assisted governance, Agentic AI, Telecom BSS/OSS, CRM and ERP solutions, digital transformation and education programmes.",
      "Website content, case studies, demos, roadmaps, timelines, estimates and indicative pricing are general information only.",
      "Only an accepted quotation, order form, statement of work or signed agreement creates a commercial commitment.",
    ],
  },
  {
    title: "3. Limited Website Licence and PMRG Intellectual Property",
    items: [
      "PMRG grants a limited, revocable, non-exclusive and non-transferable permission to use the Website for lawful personal use or internal business evaluation.",
      "PMRG and its licensors retain all rights in the Website, software, source code, designs, workflows, architecture, models, documentation, text, images, product names, logos and databases.",
    ],
  },
  {
    title: "4. Prohibited Activities",
    items: [
      "Do not use the Website for unlawful, fraudulent, abusive, deceptive, defamatory, discriminatory or rights-infringing activity.",
      "Do not gain unauthorised access, probe or stress the Website, bypass security, or introduce malware or disruptive traffic.",
      "Do not scrape, crawl, harvest, mirror, frame, republish or extract content except ordinary search-engine indexing.",
      "Do not use PMRG content to train or enrich an AI model without prior written consent.",
      "Do not reverse engineer, copy source code, remove proprietary notices, impersonate PMRG or overload the Website.",
    ],
  },
  {
    title: "5. Forms, Submissions, Ideas and Programme Applications",
    items: [
      "Information submitted through forms must be accurate, lawful and authorised.",
      "Do not submit confidential, regulated or third-party information unless PMRG requests it through an approved process.",
      "Unsolicited information is not confidential unless a signed NDA or specific programme terms apply.",
      "PMRG may process submitted content only as needed to respond, evaluate, administer, operate or comply with law.",
    ],
  },
  {
    title: "6. Accounts, Security and Responsible Reporting",
    items: [
      "Any account, demo credential, invitation or protected link is limited to its authorised recipient.",
      "Keep credentials confidential and report compromise, phishing, impersonation or vulnerabilities to support@pmrgsolution.com.",
      "Unauthorised testing, exploitation or public disclosure is prohibited unless PMRG approves a responsible-disclosure process in writing.",
    ],
  },
  {
    title: "7. AI-Enabled Features and Outputs",
    items: [
      "AI-assisted, generative, predictive or automated outputs may be incomplete, inaccurate, biased or unsuitable.",
      "Use qualified human review before relying on them.",
      "Never use them as the sole basis for legal, medical, financial, employment, admissions or safety-critical decisions.",
      "PMRG will not use identifiable confidential client data to train a general-purpose model unless allowed by written agreement or valid consent.",
    ],
  },
  {
    title: "8. Third-Party Services",
    items: [
      "The Website may link to or use third-party hosting, cloud, analytics, communication, payment, map, social-media or embedded services.",
      "Their own terms and privacy notices apply.",
      "PMRG does not control their availability, security or content, and a link is not an endorsement.",
    ],
  },
  {
    title: "9. Availability, Disclaimers and Liability",
    items: [
      "The Website and public content are provided as is and as available without warranties of accuracy, completeness, availability, security, merchantability, fitness or non-infringement.",
      "PMRG may change, restrict, suspend or discontinue any Website feature without notice.",
      "PMRG is not liable for indirect, incidental, special, punitive or consequential loss, subject to non-excludable law.",
      "For free public Website use, aggregate liability will not exceed INR 10,000.",
    ],
  },
  {
    title: "10. Indemnity, Suspension and Termination",
    items: [
      "To the extent permitted by law, you will indemnify PMRG against third-party claims arising from unlawful Website use, breach of these Terms, submitted content, infringement, security misconduct or misrepresentation.",
      "PMRG may suspend or terminate access to protect PMRG, users, systems or rights, investigate misconduct, comply with law or enforce these Terms.",
    ],
  },
  {
    title: "11. Governing Law and Disputes",
    items: [
      "These Terms are governed by Indian law.",
      "Parties will first attempt in good faith for 30 days to resolve a dispute after written notice.",
      "Unresolved arbitrable disputes will be decided by a sole arbitrator under the Arbitration and Conciliation Act, 1996.",
      "Seat and venue will be Pune, Maharashtra, and proceedings will be in English.",
    ],
  },
  {
    title: "12. Changes and Contact",
    items: [
      "PMRG may update these Terms by revising the Last Updated date.",
      "General notices may be sent to support@pmrgsolution.com.",
      "Formal legal notices should also be sent to PMRG's registered office.",
      "Registered office: Revell Orchid, E2-103, Porwal Road, Lohegaon, Pune-411047.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-white">
        <div className="container-pmrg py-16 text-center sm:py-20">
          <div className="mx-auto max-w-4xl">
            <p className="eyebrow-light">Legal</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-fg-dark sm:text-5xl">
              PMRG Website Terms of Use
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-fg-dark-muted">
              PMRG Solution LLP&apos;s concise public website terms for www.pmrgsolution.com
              and PMRG-controlled subdomains.
            </p>
            <p className="mt-3 text-sm text-fg-dark-subtle">
              Version: 2.1 | Effective date: 28 July 2026 | Governing law: India
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/contact?type=demo">Contact PMRG</Button>
              <Button href="/privacy-policy" variant="outline" size="lg">
                View Privacy Policy
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc]">
        <div className="container-pmrg py-16 sm:py-20">
          <div className="grid gap-6 lg:grid-cols-2">
            {websiteTerms.map((section) => (
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
                  Need clarification?
                </h2>
                <p className="mt-2 text-sm text-fg-dark-muted">
                  For general questions or legal notices, contact PMRG at support@pmrgsolution.com.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="/contact?type=legal">
                  Send a Message
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/privacy-policy" variant="outline" size="lg">
                  Privacy Policy
                </Button>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}