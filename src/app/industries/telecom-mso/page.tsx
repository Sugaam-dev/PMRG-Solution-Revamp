import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: "Telecom & MSO Digital Transformation Solutions | PMRG",
  description:
    "Transform telecom customer lifecycle, fulfillment, inventory, billing and program governance with PMRG domain expertise.",
  alternates: { canonical: "/industries/telecom-mso" },
};

export default function TelecomMsoPage() {
  return (
    <ComingSoon
      pageTitle="Telecom & MSO"
      description="Modernize telecom journeys without losing operational control. PMRG helps operators, MSOs and technology partners connect customer experience, BSS/OSS architecture and governed delivery."
    />
  );
}
