import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import BlogGrid from "./BlogGrid";
import Testimonials from "@/components/home/Testimonials";

export const metadata: Metadata = {
  title: "Blogs & Testimonials",
  description:
    "Insights on AI/ML, telecom BSS/OSS, digital transformation, cloud, and industry trends from the PMRG team. Read testimonials from our valued clients.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blogs & Testimonials"
        title={
          <>
            Thinking from the <span className="text-gradient">edge of enterprise tech</span>
          </>
        }
        description="Deep dives, playbooks, and field notes on AI, telecom, cloud, and digital transformation — written by the engineers doing the work."
      />

      {/* Blogs Section */}
      <section data-section-theme="light" className="section-light pb-16">
        <div className="container-pmrg">
          <BlogGrid />
        </div>
      </section>

      {/* Testimonials Section — same as homepage */}
      <Testimonials />
    </>
  );
}
