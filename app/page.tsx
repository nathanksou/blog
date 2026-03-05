import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-[680px] px-6 py-16 md:py-24 md:px-8">
      <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
        hey, I&apos;m Nate.
      </h1>
      <div className="mt-8 text-lg leading-relaxed text-secondary">
        <div>
          <p>builder, traveler, and indie dev</p>
          <p>
            building products and agents at the intersection of AI and everyday
            tools
          </p>
          <p>
            founder of{" "}
            <a
              href="https://climbingcat.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground underline underline-offset-2 hover:text-accent"
            >
              climbing cat
            </a>{" "}
            and CTO at{" "}
            <a
              href="https://devilchild.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground underline underline-offset-2 hover:text-accent"
            >
              devil child studio
            </a>
          </p>
        </div>
        <div className="mt-6">
          <p>right now I&apos;m building:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <strong className="text-foreground">Ghostwriterrr</strong> — an AI
              linkedin post generator
            </li>
            <li>
              <strong className="text-foreground">undertone</strong> — a voice
              assistant journal
            </li>
          </ul>
        </div>
        <p className="mt-6">
          I also write about the things I learn building software and the
          places I&apos;ve traveled
        </p>
      </div>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/80"
        >
          read the blog &rarr;
        </Link>
        <Link
          href="/travel"
          className="inline-flex items-center gap-1 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-foreground/5"
        >
          travel guides &rarr;
        </Link>
      </div>
    </div>
  );
}
