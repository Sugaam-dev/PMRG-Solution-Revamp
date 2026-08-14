import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import MeetTheTeam from "@/components/home/MeetTheTeam";
import type { MeetTeamMember } from "@/components/home/MeetTheTeam";

export const metadata: Metadata = {
  title: "Our Team | PMRG Solution",
  description:
    "Meet the people behind PMRG Solution — the leadership, engineers and professionals driving AI governance, enterprise transformation and institutional innovation.",
  alternates: { canonical: "/company/our-team" },
};

/* ── Team data ───────────────────────────────────────────────── */

const TEAM_MEMBERS: MeetTeamMember[] = [
  {
    name: "Debaabrata Ghosh",
    firstName: "Debaabrata",
    lastName: "Ghosh",
    position: "Co-Founder",
    image: "/team/debaabrata-ghosh.jpg",
    description: "Visionary leader driving PMRG's mission in AI governance and enterprise transformation with over two decades of industry expertise.",
  },
  {
    name: "Pratima Mishra",
    firstName: "Pratima",
    lastName: "Mishra",
    position: "Joint Director",
    image: "/team/pratima-mishra.jpeg",
    description: "Strategic operations leader ensuring seamless delivery and client success across PMRG's portfolio of enterprise solutions.",
  },
  {
    name: "Rekha Ghosh",
    firstName: "Rekha",
    lastName: "Ghosh",
    position: "Joint Director",
    image: "/team/rekha-ghosh.jpeg",
    description: "Driving institutional partnerships and organizational growth with a focus on sustainable innovation and governance.",
  },
  {
    name: "Shilpa Amminabhavi",
    firstName: "Shilpa",
    lastName: "Amminabhavi",
    position: "Senior Developer",
    image: "/team/Shilpa Amminabhavi-Senior Developer.jpeg",
    description: "Full-stack expert architecting scalable platforms and leading technical delivery across mission-critical projects.",
  },
  {
    name: "Dhurjoti Ghosh",
    firstName: "Dhurjoti",
    lastName: "Ghosh",
    position: "Web Developer",
    image: "/team/Dhurjoti Ghosh-Web Developer.png",
    description: "Crafting performant, pixel-perfect web experiences with modern frameworks and a keen eye for design detail.",
  },
  {
    name: "Pamir Nayak",
    firstName: "Pamir",
    lastName: "Nayak",
    position: "Web Developer",
    image: "/team/pamir-nayak.jpeg",
    description: "Building responsive, accessible interfaces and contributing to PMRG's front-end engineering excellence.",
  },
  {
    name: "Udesh",
    firstName: "Udesh",
    lastName: "",
    position: "Developer",
    image: "/team/Udesh-Developer.jpeg?v=2",
    description: "Versatile developer delivering robust solutions across the stack with a focus on clean code and reliability.",
  },
  {
    name: "Govind Maskare",
    firstName: "Govind",
    lastName: "Maskare",
    position: "Intern",
    image: "/team/Govind Maskare-Intern.jpeg",
    description: "Ambitious engineering intern contributing fresh ideas and learning rapidly across development workflows.",
  },
  {
    name: "Mahek Mishra",
    firstName: "Mahek",
    lastName: "Mishra",
    position: "Intern",
    image: "/team/Mahek Mishra-Intern.jpeg",
    description: "Enthusiastic intern bringing creativity and energy to front-end development and team collaboration.",
  },
  {
    name: "Omkar Ghumare",
    firstName: "Omkar",
    lastName: "Ghumare",
    position: "Intern",
    image: "/team/Omkar Ghumare-Intern.jpeg",
    description: "Driven intern exploring full-stack development and gaining hands-on experience in real-world projects.",
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

      {/* ── Meet the Team — Interactive Section ─────────────── */}
      <section
        data-section-theme="dark"
        className="section-dark section"
      >
        <div className="container-pmrg">
          <SectionHeading
            theme="dark"
            eyebrow="Leadership & Team"
            title={
              <>
                Meet the team driving{" "}
                <span className="text-gradient">transformation.</span>
              </>
            }
            description="Every member of PMRG brings domain expertise, technical depth and a commitment to client outcomes."
          />

          <Reveal>
            <div className="mt-14">
              <MeetTheTeam members={TEAM_MEMBERS} />
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
