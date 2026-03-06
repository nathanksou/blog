"use client";

import { useState } from "react";

export function WaitlistForm({ product }: { product: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, product }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        const data = await res.json();
        setErrorMessage(data.error || "something went wrong");
        setStatus("error");
      }
    } catch {
      setErrorMessage("something went wrong. try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="mt-4 text-sm font-medium text-green-700">
        you&apos;re on the list! we&apos;ll be in touch.
      </p>
    );
  }

  return (
    <div className="mt-4">
      {status === "error" && (
        <p className="mb-2 text-sm text-red-600">{errorMessage}</p>
      )}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          className="h-10 flex-1 rounded-lg border border-border bg-surface px-3 text-sm outline-none transition-colors placeholder:text-secondary/60 focus:border-accent"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="h-10 rounded-lg bg-foreground px-4 text-sm font-medium text-background transition-colors hover:bg-foreground/80 disabled:opacity-50"
        >
          {status === "loading" ? "joining..." : "join waitlist"}
        </button>
      </form>
    </div>
  );
}
