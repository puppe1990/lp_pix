import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.segurepix.com.br";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl.replace(/\/$/, "")}/sitemap.xml`,
    host: baseUrl.replace(/\/$/, ""),
  };
}
