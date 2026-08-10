import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/thank-you", "/api/"],
      },
      {
        userAgent: ["GPTBot", "CCBot", "Google-Extended"],
        disallow: "/",
      },
    ],
    sitemap: `${COMPANY.url}/sitemap.xml`,
  };
}
