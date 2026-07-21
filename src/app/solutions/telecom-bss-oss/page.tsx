import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: "Telecom BSS/OSS, CLM & Transformation Consulting | PMRG",
  description:
    "PMRG supports telecom customer lifecycle, catalog, order, inventory, billing, orchestration, activation and AI-led delivery governance.",
  alternates: { canonical: "/solutions/telecom-bss-oss" },
};

export default function TelecomBssOssPage() {
  return (
    <ComingSoon
      pageTitle="Telecom BSS/OSS"
      description="Telecom transformation grounded in architecture, customer lifecycle and execution reality. PMRG combines BSS/OSS domain expertise with AI-assisted governance, enterprise architecture and implementation leadership."
    />
  );
}
