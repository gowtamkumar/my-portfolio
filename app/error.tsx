"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="relative z-10 mx-auto flex min-h-[70svh] max-w-6xl flex-col justify-center px-5 pt-28 md:px-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-pulse">
        Fault
      </p>
      <h2 className="mt-3 font-display text-4xl">Something dropped a token.</h2>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-8 w-fit rounded-full bg-signal px-5 py-2 text-sm font-semibold text-ink"
      >
        Try again
      </button>
    </main>
  );
}
