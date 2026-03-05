import type { Metadata } from "next";
import Link from "next/link";
import { getTravelGuides } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Travel Guides",
  description:
    "City guides with restaurant recommendations, activities, and local tips — Sydney, Melbourne, Singapore, Vietnam, New Zealand, NYC, and more.",
};

export default function TravelPage() {
  const guides = getTravelGuides();

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24 md:px-8">
      <h1 className="font-serif text-4xl font-bold tracking-tight">
        Travel Guides
      </h1>
      <p className="mt-4 text-lg text-secondary">
        City guides with personal recommendations, local tips, and the best
        places to eat.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/travel/${guide.slug}`}
            className="group rounded-lg border border-border p-6 transition-all hover:border-foreground/20 hover:bg-foreground/[0.02]"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{guide.frontmatter.emoji}</span>
              <h2 className="text-xl font-semibold group-hover:text-accent transition-colors">
                {guide.frontmatter.title}
              </h2>
            </div>
            <p className="mt-2 text-sm text-secondary">
              {guide.frontmatter.regions.join(" · ")}
            </p>
            <p className="mt-1 text-sm text-secondary">
              {guide.frontmatter.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
