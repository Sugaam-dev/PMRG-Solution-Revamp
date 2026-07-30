import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: "Thank You | PMRG Solution",
  description: "Thank you for contacting PMRG Solution.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/thank-you" },
};

export default function ThankYouPage() {
  return (
    <ComingSoon
      pageTitle="Thank You"
      description="Your enquiry has been received. The PMRG team will review the information and route it to the relevant solution, institutional or partnership contact."
    />
  );
}
