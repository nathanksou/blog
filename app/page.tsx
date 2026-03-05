import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-[680px] px-6 py-16 md:py-24 md:px-8">
      <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
        Hey, I&apos;m Nate.
      </h1>
      <div className="mt-8 space-y-6 text-lg leading-relaxed text-secondary">
        <p>
          Builder, traveler, and indie dev. I&apos;m the cofounder of{" "}
          <strong className="text-foreground">Climbing Cat</strong> and CTO at{" "}
          <strong className="text-foreground">Devil Child Studio</strong> — two
          indie studios shipping products at the intersection of AI and everyday
          tools.
        </p>
        <p>Right now I&apos;m building:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong className="text-foreground">Haku&apos;s Playground</strong>{" "}
            — an AI education app
          </li>
          <li>
            <strong className="text-foreground">Undertone</strong> — a voice
            assistant journal
          </li>
          <li>
            <strong className="text-foreground">Ghostwriterrr</strong> — an AI
            LinkedIn post generator
          </li>
          <li>
            <strong className="text-foreground">Typeless</strong> — iOS keyboard
            shortcuts
          </li>
        </ul>
        <p>
          I also write about the places I travel and the things I learn building
          software.
        </p>
      </div>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/travel"
          className="inline-flex items-center gap-1 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/80"
        >
          Read the travel guides &rarr;
        </Link>
        <Link
          href="/work"
          className="inline-flex items-center gap-1 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-foreground/5"
        >
          See what I&apos;m building &rarr;
        </Link>
      </div>
    </div>
  );
}
