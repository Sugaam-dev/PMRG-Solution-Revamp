import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/constants";

const routes = [
  "",
  "/solutions",
  "/solutions/ai-assisted-governance",
  "/solutions/smart-campus-education",
  "/solutions/ai-for-schools",
  "/solutions/ai-for-universities",
  "/solutions/enterprise-solutions",
  "/solutions/ai-agents-automation",
  "/solutions/telecom-bss-oss",
  "/platforms",
  "/platforms/ai-governance-layer",
  "/platforms/sprint-delivery-intelligence",
  "/platforms/ai-sales-tracker-clm",
  "/platforms/data-center-management",
  "/industries",
  "/industries/telecom-mso",
  "/industries/education",
  "/industries/enterprise-sme",
  "/success-stories",
  "/partnerships",
  "/company/about",
  "/company/careers",
  "/insights",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((route) => ({
    url: `${COMPANY.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
