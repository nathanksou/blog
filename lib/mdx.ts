import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const contentDirectory = path.join(process.cwd(), "content");

export interface TravelFrontmatter {
  title: string;
  description: string;
  emoji: string;
  regions: string[];
  lastUpdated: string;
  order?: number;
}

export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime?: string;
}

export interface ContentItem<T> {
  slug: string;
  frontmatter: T;
  content: string;
  readingTime: string;
}

function getContentFromDirectory<T>(subdir: string): ContentItem<T>[] {
  const dir = path.join(contentDirectory, subdir);

  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data, content } = matter(raw);
    const stats = readingTime(content);

    return {
      slug: file.replace(/\.mdx$/, ""),
      frontmatter: data as T,
      content,
      readingTime: stats.text,
    };
  });
}

export function getTravelGuides(): ContentItem<TravelFrontmatter>[] {
  const guides = getContentFromDirectory<TravelFrontmatter>("travel");
  return guides.sort(
    (a, b) => (a.frontmatter.order ?? 99) - (b.frontmatter.order ?? 99)
  );
}

export function getTravelGuide(
  slug: string
): ContentItem<TravelFrontmatter> | undefined {
  return getContentFromDirectory<TravelFrontmatter>("travel").find(
    (g) => g.slug === slug
  );
}

export function getBlogPosts(): ContentItem<BlogFrontmatter>[] {
  const posts = getContentFromDirectory<BlogFrontmatter>("blog");
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}

export function getBlogPost(
  slug: string
): ContentItem<BlogFrontmatter> | undefined {
  return getContentFromDirectory<BlogFrontmatter>("blog").find(
    (p) => p.slug === slug
  );
}
