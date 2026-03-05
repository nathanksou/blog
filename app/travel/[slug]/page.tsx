import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getTravelGuide, getTravelGuides } from "@/lib/mdx";
import { MDXContent } from "@/components/mdx-content";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return getTravelGuides().map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getTravelGuide(slug);
  if (!guide) return {};

  return {
    title: guide.frontmatter.title,
    description: guide.frontmatter.description,
    openGraph: {
      title: `${guide.frontmatter.title} Travel Guide`,
      description: guide.frontmatter.description,
      type: "article",
    },
  };
}

export default async function TravelGuidePage({ params }: { params: Params }) {
  const { slug } = await params;
  const guide = getTravelGuide(slug);
  if (!guide) notFound();

  const allGuides = getTravelGuides().filter((g) => g.slug !== slug);

  return (
    <div className="mx-auto max-w-[680px] px-6 py-16 md:py-24 md:px-8">
      <header className="mb-10">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{guide.frontmatter.emoji}</span>
          <h1 className="font-serif text-4xl font-bold tracking-tight">
            {guide.frontmatter.title}
          </h1>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {guide.frontmatter.regions.map((region) => (
            <span
              key={region}
              className="rounded-full bg-foreground/5 px-3 py-1 text-xs text-secondary"
            >
              {region}
            </span>
          ))}
        </div>
        <p className="mt-2 text-sm text-secondary">
          {guide.readingTime} &middot; Last updated{" "}
          {guide.frontmatter.lastUpdated}
        </p>
      </header>

      <MDXContent content={guide.content} />

      <section className="mt-16 border-t border-border pt-10">
        <h2 className="font-serif text-2xl font-semibold">More Guides</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {allGuides.slice(0, 4).map((g) => (
            <Link
              key={g.slug}
              href={`/travel/${g.slug}`}
              className="rounded-lg border border-border p-4 transition-colors hover:bg-foreground/[0.02]"
            >
              <span className="text-lg">{g.frontmatter.emoji}</span>{" "}
              <span className="font-medium">{g.frontmatter.title}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
