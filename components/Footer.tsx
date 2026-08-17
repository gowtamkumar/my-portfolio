import { site } from "@/lib/site";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="no-print relative z-10 border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between md:px-8">
        <p className="font-mono text-xs">
          © {new Date().getFullYear()} {site.name} · {site.role}
        </p>
        <div className="flex gap-5">
          <Link href={site.socials.github} target="_blank" rel="noreferrer" className="hover:text-signal">
            GitHub
          </Link>
          <Link href={site.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-signal">
            LinkedIn
          </Link>
          <a href={`mailto:${site.email}`} className="hover:text-signal">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
