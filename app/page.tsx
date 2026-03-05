import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-[680px] px-6 py-16 md:py-24 md:px-8">
      <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
        Hey, I&apos;m Nate.
      </h1>
      <div className="mt-8 space-y-6 text-lg leading-relaxed text-secondary">
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
          <strong className="text-foreground">devil child studio</strong>
        </p>
        <p>Right now I&apos;m building:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <a
              href="https://hakus-playground.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground underline underline-offset-2 hover:text-accent"
            >
              Haku&apos;s Playground
            </a>{" "}
            — an AI education app
          </li>
          <li>
            <strong className="text-foreground">undertone</strong> — a voice
            assistant journal
          </li>
          <li>
            <strong className="text-foreground">Ghostwriterrr</strong> — an AI
            LinkedIn post generator
          </li>
          <li>
            <a
              href="https://apps.apple.com/us/app/typeless-keyboard-shortcuts/id6742476791"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground underline underline-offset-2 hover:text-accent"
            >
              Typeless
            </a>{" "}
            — iOS keyboard shortcuts
          </li>
        </ul>
        <p>
          I also write about the places I travel and the things I learn building
          software.
        </p>
      </div>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/80"
        >
          Read the blog &rarr;
        </Link>
        <Link
          href="/travel"
          className="inline-flex items-center gap-1 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-foreground/5"
        >
          Travel guides &rarr;
        </Link>
      </div>
    </div>
  );
}
