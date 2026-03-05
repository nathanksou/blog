import type { Metadata } from "next";
import { getBlogPosts } from "@/lib/mdx";
import Link from "next/link";

export const metadata: Metadata = {
  title: "blog",
  description:
    "writing about building with ai, indie dev life, and the tools i use to ship fast.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  if (posts.length === 0) {
    return (
      <div className="mx-auto max-w-[680px] px-6 py-16 md:py-24 md:px-8">
        <h1 className="font-serif text-4xl font-bold tracking-tight">blog</h1>
        <p className="mt-6 text-lg leading-relaxed text-secondary">
          coming soon. i&apos;ll be writing about building with ai, indie dev
          life, and the tools i use to ship fast.
        </p>
        <p className="mt-4 text-lg text-secondary">
          want to know when i publish?{" "}
          <a
            href="https://x.com/nathanksou"
            className="text-accent underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            follow me on X &rarr;
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24 md:px-8">
      <h1 className="font-serif text-4xl font-bold tracking-tight">blog</h1>
      <div className="mt-10 space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block rounded-lg border border-border p-6 transition-colors hover:bg-foreground/[0.02]"
          >
            <h2 className="text-xl font-semibold">{post.frontmatter.title}</h2>
            <p className="mt-2 text-secondary">
              {post.frontmatter.description}
            </p>
            <div className="mt-3 flex gap-3 text-xs text-secondary">
              <span>{post.frontmatter.date}</span>
              <span>&middot;</span>
              <span>{post.readingTime}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
