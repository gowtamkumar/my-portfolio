import { AssistantPanel } from "@/components/AiAssistant";
import RotatingText from "@/components/RotatingText";
import { projects } from "@/lib/mock-data/project";
import { site } from "@/lib/site";
import Link from "next/link";

const stack = [
  "TypeScript",
  "NestJS",
  "Next.js",
  "PostgreSQL",
  "Prisma",
  "TypeORM",
  "N8N",
  "Redis",
  "Docker",
  "Caddy",
  "Linux",
  "Git",
  "CI/CD",
  "GitHub Actions",
  "NGINX",
];

export default function Home() {
  return (
    <main className="relative z-10">
      <section className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pb-16 pt-28 md:px-8">
        <p className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-signal/30 bg-signal/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-signal">
          <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse-dot" />
          {site.availability}
        </p>

        <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
          {site.role}
        </p>

        <h1 className="mt-4 max-w-4xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-7xl">
          {site.headline.replace(".", "")}{" "}
          <span className="text-[var(--muted)]">for the</span>{" "}
          <RotatingText
            words={["AI era.", "web.", "realtime.", "automation."]}
          />
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
          {site.summary}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-full bg-signal px-6 py-3 text-sm font-semibold text-ink hover:bg-white"
          >
            View systems
          </Link>
          <Link
            href="#assistant"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold hover:border-signal/40 hover:text-signal"
          >
            Ask GK assistant
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="rounded-full px-6 py-3 text-sm text-[var(--muted)] hover:text-[var(--fg)]"
          >
            {site.email}
          </a>
        </div>

        <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted)]">
              Years
            </dt>
            <dd className="mt-1 font-display text-3xl">{site.years}</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted)]">
              Focus
            </dt>
            <dd className="mt-1 font-display text-3xl">AI + FS</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted)]">
              Systems
            </dt>
            <dd className="mt-1 font-display text-3xl">{projects.length}</dd>
          </div>
        </dl>
      </section>

      <div className="overflow-hidden border-y border-white/10 py-4">
        <div className="flex w-max animate-marquee gap-10 font-mono text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
          {[...stack, ...stack].map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-10">
              {item}
              <span className="text-signal">/</span>
            </span>
          ))}
        </div>
      </div>

      <AssistantPanel />

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal">
              Selected work
            </p>
            <h2 className="mt-2 font-display text-3xl">Production systems</h2>
          </div>
          <Link href="/projects" className="text-sm text-[var(--muted)] hover:text-signal">
            All projects →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.slice(0, 4).map((project, i) => (
            <Link
              key={project.name}
              href="/projects"
              className={`group rounded-2xl border border-white/10 bg-[var(--card)] p-6 backdrop-blur-md transition hover:border-signal/30 ${i === 0 ? "md:col-span-2 md:p-8" : ""
                }`}
            >
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-[var(--muted)]">
                <span>0{i + 1} · {project.kind}</span>
                <span>{project.year}</span>
              </div>
              <h3 className="mt-4 font-display text-2xl group-hover:text-signal">
                {project.name}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 px-2.5 py-0.5 font-mono text-[10px] text-[var(--muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
