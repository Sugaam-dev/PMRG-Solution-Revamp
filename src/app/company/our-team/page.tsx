import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { RevealGroup, RevealItem } from "@/components/animations/Reveal";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Team | PMRG Solution",
  description:
    "Meet the people behind PMRG Solution — the leadership, engineers and professionals driving AI governance, enterprise transformation and institutional innovation.",
  alternates: { canonical: "/company/our-team" },
};

/* ── Team data ───────────────────────────────────────────────── */

interface TeamMember {
  name: string;
  position: string;
  image: string;
  bio: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Debaabrata Ghosh",
    position: "Co-Founder",
    image: "/team/debaabrata-ghosh.jpeg",
    bio: "Debaabrata co-founded PMRG with a vision to bridge the gap between advanced technology and accountable business outcomes. He brings strategic leadership across AI, telecom and enterprise transformation.",
  },
  {
    name: "Pratima Mishra",
    position: "Joint Director",
    image: "/team/pratima-mishra.webp",
    bio: "Pratima drives institutional partnerships and operational excellence at PMRG. Her expertise in governance and stakeholder engagement ensures every program delivers measurable impact.",
  },
  {
    name: "Rekha Ghosh",
    position: "Joint Director",
    image: "/team/rekha-ghosh.webp",
    bio: "Rekha leads strategic initiatives across education and enterprise verticals. She is dedicated to building capability programs that create lasting value for clients and communities.",
  },
  {
    name: "Pamir Nayak",
    position: "Web Developer",
    image: "/team/pamir-nayak.webp",
    bio: "Pamir brings creativity and precision to every digital experience he builds. He specializes in modern web technologies to deliver fast, accessible and visually compelling platforms.",
  },
  {
    name: "Rohit Ghosh",
    position: "Web Developer",
    image: "/team/rohit-ghosh.webp",
    bio: "Rohit is passionate about building intuitive user interfaces and scalable web applications. He combines clean code practices with an eye for detail to craft seamless digital products.",
  },
];

/* ── Page component ──────────────────────────────────────────── */

export default function OurTeamPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <PageHero
        eyebrow="Our Team"
        title={
          <>
            The people behind{" "}
            <span className="text-gradient">PMRG&apos;s impact.</span>
          </>
        }
        description="A diverse team of strategists, engineers, domain specialists and educators — united by a shared commitment to building technology that improves decisions, accountability and outcomes."
      >
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <Button href="/company/careers" size="lg">
            Join Our Team
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Get in Touch
          </Button>
        </div>
      </PageHero>

      {/* ── Team grid ─────────────────────────────────────── */}
      <section
        data-section-theme="light"
        className="section-light section"
      >
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            eyebrow="Leadership & Team"
            title={
              <>
                Meet the team driving{" "}
                <span className="text-gradient">transformation.</span>
              </>
            }
            description="Every member of PMRG brings domain expertise, technical depth and a commitment to client outcomes."
          />

          <RevealGroup className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM_MEMBERS.map((member) => (
              <RevealItem key={member.name} as="div" variant="slide-up">
                <div className="team-card group relative flex flex-col items-center text-center">
                  {/* Card container */}
                  <div className="relative w-full overflow-hidden rounded-2xl border border-light-line bg-white shadow-card-light transition-shadow duration-500 ease-out hover:shadow-xl hover:shadow-brand/8">

                    {/* Photo area with circular avatar */}
                    <div className="relative flex items-center justify-center bg-gradient-to-br from-slate-100 to-blue-50/40 py-10"
                         style={{ minHeight: "240px" }}>
                      <div className="team-card-avatar">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                          style={{ objectPosition: "center 20%" }}
                          sizes="180px"
                        />
                      </div>
                    </div>

                    {/* Name & position */}
                    <div className="px-6 pt-5 pb-2">
                      <h3 className="text-lg font-bold text-fg-dark leading-snug">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-brand">
                        {member.position}
                      </p>
                    </div>

                    {/* Bio — fades in on hover */}
                    <div className="px-6 pb-6">
                      <div className="team-card-bio">
                        <div className="border-t border-light-line pt-4 mt-2">
                          <p className="text-sm leading-relaxed text-fg-dark-muted">
                            {member.bio}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────── */}
      <section
        data-section-theme="light"
        className="section-light section border-t border-light-line"
      >
        <div className="container-pmrg text-center">
          <Reveal>
            <SectionHeading
              theme="light"
              title="Want to be part of the team?"
              description="PMRG is always looking for passionate technologists, domain specialists and delivery-focused professionals."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href="/company/careers" size="lg">
                View Open Positions
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
