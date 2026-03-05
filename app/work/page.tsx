import type { Metadata } from "next";
import { WaitlistForm } from "@/components/waitlist-form";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Products by Nate Ksou — Haku's Playground, Undertone, Ghostwriterrr, and Typeless.",
};

const products = [
  {
    name: "Haku's Playground",
    studio: "Climbing Cat",
    description:
      "An AI-powered education app that makes learning interactive and fun. Built by Climbing Cat.",
    status: "Live" as const,
    cta: { label: "Try it", href: "https://hakus-playground.vercel.app" },
    waitlist: false,
  },
  {
    name: "Undertone",
    studio: "Climbing Cat",
    description:
      "A voice assistant journal that listens, suggests, and takes action — from creating calendar events to capturing ideas on the go. Launching end of March 2026.",
    status: "Pre-launch" as const,
    cta: null,
    waitlist: true,
  },
  {
    name: "Ghostwriterrr",
    studio: "Devil Child Studio",
    description:
      "Write, schedule, and publish LinkedIn posts with AI. Your ghostwriter for professional content. Built by Devil Child Studio. Launching end of March 2026.",
    status: "Beta" as const,
    cta: null,
    waitlist: true,
  },
  {
    name: "Typeless",
    studio: "Devil Child Studio",
    description:
      "Keyboard shortcuts for iOS — type faster with custom text expansions. Available on the App Store.",
    status: "Live" as const,
    cta: null,
    waitlist: false,
  },
];

const statusColors: Record<string, string> = {
  Live: "bg-green-100 text-green-800",
  "Pre-launch": "bg-amber-100 text-amber-800",
  Beta: "bg-blue-100 text-blue-800",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24 md:px-8">
      <h1 className="font-serif text-4xl font-bold tracking-tight">Work</h1>
      <p className="mt-4 text-lg text-secondary">
        Products I&apos;m building across Climbing Cat and Devil Child Studio.
      </p>
      <div className="mt-10 space-y-6">
        {products.map((product) => (
          <div
            key={product.name}
            className="rounded-lg border border-border p-6"
          >
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColors[product.status]}`}
              >
                {product.status}
              </span>
            </div>
            <p className="mt-1 text-sm text-secondary">{product.studio}</p>
            <p className="mt-3 text-secondary">{product.description}</p>
            {product.cta && (
              <a
                href={product.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
              >
                {product.cta.label} &rarr;
              </a>
            )}
            {product.waitlist && <WaitlistForm product={product.name} />}
          </div>
        ))}
      </div>
    </div>
  );
}
