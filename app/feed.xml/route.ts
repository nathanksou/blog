import { getTravelGuides, getBlogPosts } from "@/lib/mdx";

export async function GET() {
  const baseUrl = "https://nathansou.com";
  const guides = getTravelGuides();
  const posts = getBlogPosts();

  const items = [
    ...posts.map((post) => ({
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      url: `${baseUrl}/blog/${post.slug}`,
      date: new Date(post.frontmatter.date).toUTCString(),
    })),
    ...guides.map((guide) => ({
      title: `${guide.frontmatter.title} Travel Guide`,
      description: guide.frontmatter.description,
      url: `${baseUrl}/travel/${guide.slug}`,
      date: new Date(guide.frontmatter.lastUpdated).toUTCString(),
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Nathan Sou</title>
    <link>${baseUrl}</link>
    <description>Travel guides, tech blog, and product showcase by Nathan Sou.</description>
    <language>en-us</language>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items
      .map(
        (item) => `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${item.url}</link>
      <guid>${item.url}</guid>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${item.date}</pubDate>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
