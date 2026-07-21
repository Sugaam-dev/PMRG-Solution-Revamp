import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: "Data Center Management & Operational Intelligence | PMRG",
  description:
    "Improve data center visibility across assets, capacity, incidents, energy, maintenance, risk, compliance and executive reporting.",
  alternates: { canonical: "/platforms/data-center-management" },
};

export default function DataCenterManagementPage() {
  return (
    <ComingSoon
      pageTitle="Data Center Management"
      description="See the infrastructure. Understand the risk. Act with confidence. PMRG's data center management approach connects operational, asset, capacity and incident information into one governed view."
    />
  );
}
