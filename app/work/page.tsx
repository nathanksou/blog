import type { Metadata } from "next";
import { WaitlistForm } from "@/components/waitlist-form";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "products by nathan sou — haku's playground, undertone, ghostwriter, and typeless.",
};

const products = [
  {
    name: "haku's playground",
    description: "a playful guide to ai",
    cta: { label: "learn more", href: "https://hakus-playground.vercel.app" },
    waitlist: false,
  },
  {
    name: "ghostwriter",
    description: "write, schedule, and publish linkedin posts with ai",
    cta: { label: "try it", href: "https://www.ghostwriterrr.com" },
    waitlist: false,
  },
  {
    name: "undertone",
    description: "your inner voice, illuminated",
    cta: null,
    ctaLabel: "coming soon",
    waitlist: true,
  },
  {
    name: "typeless",
    description: "keyboard shortcuts for ios",
    cta: {
      label: "app store",
      href: "https://apps.apple.com/us/app/typeless-keyboard-shortcuts/id6742476791",
    },
    waitlist: false,
  },
];

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24 md:px-8">
      <h1 className="font-serif text-4xl font-bold tracking-tight">projects</h1>
      <p className="mt-4 text-lg text-secondary">
        products i&apos;m building across{" "}
        <a
          href="https://climbingcat.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-foreground"
        >
          climbing cat
        </a>{" "}
        and{" "}
        <a
          href="https://devilchild.studio"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-foreground"
        >
          devil child studio
        </a>
        .
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {products.map((product) => (
          <div
            key={product.name}
            className="group rounded-lg border border-border p-6 transition-all hover:border-foreground/20"
          >
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              {product.cta ? (
                <a
                  href={product.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-xs font-medium tracking-wide text-accent hover:underline"
                >
                  {product.cta.label} {"\u2197"}
                </a>
              ) : (
                <span className="shrink-0 text-xs font-medium tracking-wide text-secondary">
                  {"ctaLabel" in product
                    ? (product as { ctaLabel: string }).ctaLabel
                    : ""}
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-secondary">{product.description}</p>
            {product.waitlist && <WaitlistForm product={product.name} />}
          </div>
        ))}
      </div>
    </div>
  );
}
