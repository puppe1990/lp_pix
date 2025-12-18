import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const rawBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.segurepix.com.br";
  const parsedBaseUrl = new URL(rawBaseUrl);
  if (parsedBaseUrl.host === "segurepix.com.br") {
    parsedBaseUrl.host = "www.segurepix.com.br";
  }
  const baseUrl = parsedBaseUrl.toString().replace(/\/$/, "");

  const posts = getAllPosts();
  const latestPostDate = posts
    .map((post) => (post.date ? new Date(post.date) : null))
    .filter((date): date is Date => Boolean(date))
    .sort((a, b) => b.getTime() - a.getTime())[0];
  const siteLastModified = latestPostDate || new Date("2025-12-01T00:00:00.000Z");

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: siteLastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: siteLastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/seguranca`,
      lastModified: siteLastModified,
      changeFrequency: "yearly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/lgpd`,
      lastModified: siteLastModified,
      changeFrequency: "yearly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/sobre-nos`,
      lastModified: siteLastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/interesse`,
      lastModified: siteLastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/api-integracao`,
      lastModified: siteLastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/termos-de-uso`,
      lastModified: siteLastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/politica-de-privacidade`,
      lastModified: siteLastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const highPriorityPosts: Record<string, number> = {
    "por-que-pix-expoe-cpf-como-resolver": 0.9,
    "pix-receita-saude-como-receber-2025-sem-malha-fina": 0.85,
    "lgpd-profissionais-saude-guia-conformidade-consultorio": 0.85,
    "receita-saude-2025-guia-recibos-digitais-profissionais-saude": 0.85,
  };

  const now = Date.now();
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => {
    const postDate = post.date ? new Date(post.date) : null;
    const lastModified = postDate || siteLastModified;
    const isFresh = postDate ? now - postDate.getTime() <= 14 * 24 * 60 * 60 * 1000 : false;
    const changeFrequency: "weekly" | "monthly" = isFresh ? "weekly" : "monthly";

    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified,
      changeFrequency,
      priority: highPriorityPosts[post.slug] ?? 0.7,
    };
  });

  return [...staticRoutes, ...blogRoutes];
}
