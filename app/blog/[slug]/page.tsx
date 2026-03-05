import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts } from "@/lib/mdx";
import { MDXContent } from "@/components/mdx-content";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <div className="mx-auto max-w-[680px] px-6 py-16 md:py-24 md:px-8">
      <header className="mb-10">
        <h1 className="font-serif text-4xl font-bold tracking-tight">
          {post.frontmatter.title}
        </h1>
        <div className="mt-3 flex gap-3 text-sm text-secondary">
          <span>{post.frontmatter.date}</span>
          <span>&middot;</span>
          <span>{post.readingTime}</span>
        </div>
      </header>
      <MDXContent content={post.content} />
    </div>
  );
}
