import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative z-10 mx-auto flex min-h-[70svh] max-w-6xl flex-col justify-center px-5 pt-28 md:px-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal">
        404
      </p>
      <h1 className="mt-3 font-display text-5xl">This route is untrained.</h1>
      <p className="mt-4 text-[var(--muted)]">
        No page at this path. Back to the systems index.
      </p>
      <Link href="/" className="mt-8 w-fit rounded-full bg-signal px-5 py-2 text-sm font-semibold text-ink">
        Home
      </Link>
    </main>
  );
}
