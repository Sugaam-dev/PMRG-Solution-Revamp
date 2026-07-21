import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: "Technology, Delivery & Academic Partnerships | PMRG",
  description:
    "Partner with PMRG across technology, delivery, account-led growth, telecom solutions, education and innovation programs.",
  alternates: { canonical: "/partnerships" },
};

export default function PartnershipsPage() {
  return (
    <ComingSoon
      pageTitle="Partnerships"
      description="Build more together—with clear roles, protected value and delivery accountability. PMRG collaborates with organizations that bring complementary products, market access, institutional reach or delivery capability."
    />
  );
}
