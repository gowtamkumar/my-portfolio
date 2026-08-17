"use client";

import { nav, site } from "@/lib/site";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function Header() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    setTheme(stored === "light" ? "light" : "dark");
  }, []);

  const applyTheme = (next: "dark" | "light") => {
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <header className="no-print fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="group flex items-center gap-2 font-display text-sm font-semibold tracking-tight">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-ink-800 text-[11px] text-signal">
            {site.shortName}
            <span className="absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-signal animate-pulse-dot" />
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-[var(--line)] bg-white/70 px-1.5 py-1 backdrop-blur-xl md:flex dark:bg-ink-900/70">
          {nav.map((item) => {
            const active = pathname === item.url;
            return (
              <Link
                key={item.url}
                href={item.url}
                className={`rounded-full px-4 py-1.5 text-sm transition ${
                  active
                    ? "bg-signal/15 text-signal"
                    : "text-[var(--muted)] hover:text-[var(--fg)]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => applyTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] text-[var(--muted)] hover:text-signal"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <MdOutlineDarkMode className="text-lg" />
            ) : (
              <MdOutlineLightMode className="text-lg" />
            )}
          </button>
          <Link
            href="/contact"
            className="hidden rounded-full bg-signal px-4 py-2 text-sm font-semibold text-ink hover:bg-white sm:inline"
          >
            Hire me
          </Link>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <span className="font-mono text-xs">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink-900/95 px-5 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-2">
            {nav.map((item) => (
              <Link
                key={item.url}
                href={item.url}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm hover:bg-white/5"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-signal px-4 py-2 text-center text-sm font-semibold text-ink"
            >
              Hire me
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
