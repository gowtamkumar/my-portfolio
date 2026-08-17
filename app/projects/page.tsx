import { projects } from "@/lib/mock-data/project";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected production systems — commerce, realtime, and automation.",
};

export default function Projects() {
  return (
    <main className="relative z-10 mx-auto max-w-6xl px-5 pb-24 pt-28 md:px-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal">
        Index / Work
      </p>
      <h1 className="mt-3 font-display text-4xl tracking-tight md:text-6xl">
        Systems in production
      </h1>
      <p className="mt-4 max-w-2xl text-[var(--muted)]">
        Observability, commerce, and realtime systems — APIs first, then a
        sharp interface.
      </p>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {projects.map((project, idx) => (
          <article
            key={project.name}
            className={`group overflow-hidden rounded-2xl border border-white/10 bg-[var(--card)] backdrop-blur-md ${
              idx === 0 ? "lg:col-span-2" : ""
            }`}
          >
            <div className={`relative overflow-hidden ${idx === 0 ? "h-64 md:h-80" : "h-52"}`}>
              <Image
                src={project.img}
                alt={project.name}
                fill
                priority={idx === 0}
                loading={idx === 0 ? "eager" : "lazy"}
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes={
                  idx === 0
                    ? "(min-width: 1024px) 72rem, calc(100vw - 2.5rem)"
                    : "(min-width: 1024px) 36rem, calc(100vw - 2.5rem)"
                }
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              <div className="absolute bottom-4 left-4 font-mono text-[11px] uppercase tracking-widest text-signal">
                0{idx + 1} · {project.kind}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <h2 className="font-display text-2xl">{project.name}</h2>
                <div className="flex gap-2">
                  {project.sourceCode && (
                    <Link
                      href={project.sourceCode}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/10 p-2 text-[var(--muted)] hover:text-signal"
                      aria-label="Source"
                    >
                      <FiGithub />
                    </Link>
                  )}
                  {project.url ? (
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/10 p-2 text-[var(--muted)] hover:text-signal"
                      aria-label="Live"
                    >
                      <FiExternalLink />
                    </Link>
                  ) : null}
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] text-[var(--muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
