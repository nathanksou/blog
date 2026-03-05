import type { MetadataRoute } from "next";
import { getTravelGuides, getBlogPosts } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nathansou.com";

  const travelGuides = getTravelGuides().map((guide) => ({
    url: `${baseUrl}/travel/${guide.slug}`,
    lastModified: new Date(guide.frontmatter.lastUpdated),
    priority: 0.8 as const,
  }));

  const blogPosts = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.date),
    priority: 0.8 as const,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/travel`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/work`, lastModified: new Date(), priority: 0.7 },
    ...travelGuides,
    ...blogPosts,
  ];
}
