import type { Metadata } from "next";
import ComingSoon from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: "Enterprise AI Agents & Workflow Automation | PMRG",
  description:
    "Design and deploy governed AI agents and copilots for knowledge, operations, service, sales and decision support.",
  alternates: { canonical: "/solutions/ai-agents-automation" },
};

export default function AiAgentsAutomationPage() {
  return (
    <ComingSoon
      pageTitle="AI Agents & Automation"
      description="AI agents that work inside your operating model—not outside your control. PMRG identifies high-value agentic use cases, designs the architecture and embeds human oversight, security, evidence and measurable execution."
    />
  );
}
