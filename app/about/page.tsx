import SocialMedia from "@/components/SocialMedia";
import { site } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import image from "../../public/gowtamkumar.jpeg";

export const metadata: Metadata = {
  title: "About",
  description: site.summary,
};

const stats = [
  { label: "Years shipping", value: site.years },
  { label: "Team led", value: "4" },
  { label: "NDIS domains", value: "38" },
  { label: "Peak RPS", value: "1.7k" },
];

const principles = [
  {
    index: "01",
    title: "Multi-tenant systems",
    body: "Isolation at the database, not only in app code. PostgreSQL, per-request organisation context, JWT + RBAC as defense in depth.",
  },
  {
    index: "02",
    title: "Lead the loop",
    body: "A 4-person team only ships if planning, review, tests, and release are owned. I break work down and take the last mile to Linux.",
  },
  {
    index: "03",
    title: "Automation that ships",
    body: "n8n, MCP, Ollama, webhooks, and API glue for ops that should not be manual. The assistant on this site is the same idea: useful, local, tied to real content.",
  },
];

const timeline = [
  {
    when: "Apr 2026 — Present",
    where: "Astitva Lab Pty Ltd · Australia (Remote)",
    title: "Full Stack Engineer",
    body: "Cayura — multi-tenant NDIS SaaS. NestJS, Next.js, PostgreSQL, Prisma, Redis, Docker Compose, Caddy.",
  },
  {
    when: "2021 — Apr 2026",
    where: "Semicolon IT Solutions · On-site",
    title: "Full Stack JavaScript Developer",
    body: "Production APIs, commerce, and realtime systems. NestJS, React, PostgreSQL, Docker, NGINX. Mentored juniors.",
  },
  {
    when: "Education",
    where: "National University, Bangladesh",
    title: "Bachelor of Social Science (BSS)",
    body: "English and Bangla. Self-taught engineering practice in production from 2021.",
  },
];

const aboutSkills = [
  { name: "Languages", items: ["TypeScript", "JavaScript"] },
  { name: "Backend", items: ["NestJS", "Node.js", "Prisma", "TypeORM", "REST", "JWT / RBAC"] },
  { name: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "Redux"] },
  { name: "Data", items: ["PostgreSQL", "Row-Level Security", "Redis"] },
  { name: "DevOps", items: ["Docker", "Docker Compose", "NGINX", "Caddy", "CI/CD", "GitHub Actions", "Linux", "Git"] },
  { name: "Automation", items: ["n8n", "MCP", "Ollama", "Webhooks", "API integrations"] },
];

export default function About() {
  return (
    <main className="relative z-10 mx-auto max-w-6xl px-5 pb-24 pt-28 md:px-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal">
        Index / About
      </p>

      <div className="mt-8 grid items-start gap-12 lg:grid-cols-[minmax(0,320px)_1fr]">
        <aside className="lg:sticky lg:top-28">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[var(--card)]">
            <div className="relative aspect-[4/5]">
              <Image
                src={image}
                alt={site.name}
                fill
                sizes="(min-width: 1024px) 320px, calc(100vw - 2.5rem)"
                className="object-cover"
                placeholder="blur"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
                  {site.location} · Remote AU
                </p>
                <h1 className="mt-1 font-display text-2xl">{site.name}</h1>
              </div>
            </div>
            <div className="space-y-4 p-5">
              <p className="text-sm text-[var(--muted)]">{site.role}</p>
              <SocialMedia />
              <div className="flex flex-col gap-2">
                <Link
                  href="/resume"
                  className="rounded-full bg-signal py-2.5 text-center text-sm font-semibold text-ink"
                >
                  View resume
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-white/15 py-2.5 text-center text-sm font-semibold hover:border-signal/40 hover:text-signal"
                >
                  Hire me
                </Link>
              </div>
            </div>
          </div>
        </aside>

        <div className="min-w-0">
          <p className="inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-signal">
            <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse-dot" />
            {site.availability}
          </p>

          <h2 className="mt-5 max-w-2xl font-display text-4xl leading-[1.1] tracking-tight md:text-5xl">
            I lead small teams that ship tenant-safe SaaS.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            {site.summary}
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-[var(--muted)]">
            I care about systems that stay correct under load: schema, auth,
            isolation, and the release path. Interfaces in Next.js. Services in
            NestJS. The database as the last line of tenancy, not an afterthought.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-6 border-y border-white/10 py-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted)]">
                  {stat.label}
                </dt>
                <dd className="mt-1 font-display text-3xl">{stat.value}</dd>
              </div>
            ))}
          </dl>

          <section className="mt-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal">
              Now
            </p>
            <div className="mt-4 rounded-3xl border border-signal/20 bg-signal/5 p-6 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-2xl">Cayura</h3>
                  <p className="mt-1 text-sm text-signal">
                    Astitva Lab Pty Ltd · NDIS · Australia
                  </p>
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-[var(--muted)]">
                  Active
                </span>
              </div>
              <p className="mt-4 max-w-2xl leading-relaxed text-[var(--muted)]">
                Multi-tenant SaaS for the Australian National Disability
                Insurance Scheme. I lead three developers and a UI/UX designer
                through planning, review, testing, and deploy — NestJS and
                Next.js on PostgreSQL, with Row-Level Security so tenants
                cannot see each other even if application code fails.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "PostgreSQL",
                  "Prisma",
                  "TypeORM",
                  "JWT + RBAC",
                  "20+ domains",
                  "Caddy + TLS",
                  "15+ competitor studies",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] text-[var(--muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal">
              Practice
            </p>
            <h3 className="mt-2 font-display text-2xl">How the work actually happens</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {principles.map((item) => (
                <article
                  key={item.index}
                  className="rounded-2xl border border-white/10 bg-[var(--card)] p-5"
                >
                  <p className="font-mono text-[11px] text-signal">{item.index}</p>
                  <h4 className="mt-2 font-display text-lg">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal">
              Path
            </p>
            <h3 className="mt-2 font-display text-2xl">A short history</h3>
            <ol className="mt-6 space-y-0 border-l border-white/10 pl-6">
              {timeline.map((item) => (
                <li key={item.when} className="relative pb-8 last:pb-0">
                  <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-signal" />
                  <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--muted)]">
                    {item.when}
                  </p>
                  <p className="mt-1 font-display text-xl">{item.title}</p>
                  <p className="text-sm text-signal">{item.where}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {item.body}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal">
              Stack
            </p>
            <h3 className="mt-2 font-display text-2xl">Tools I keep in production</h3>
            <div className="mt-6 space-y-5">
              {aboutSkills.map((group) => (
                <div key={group.name} className="sm:grid sm:grid-cols-[140px_1fr] sm:items-start sm:gap-4">
                  <h4 className="font-mono text-[11px] uppercase tracking-widest text-[var(--muted)]">
                    {group.name}
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2 sm:mt-0">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 px-3 py-1 text-sm hover:border-signal/40 hover:text-signal"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14 rounded-3xl border border-white/10 bg-[var(--card)] p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal">
              Next
            </p>
            <h3 className="mt-2 font-display text-3xl">Need a system that holds?</h3>
            <p className="mt-3 max-w-xl text-[var(--muted)]">
              Freelance or full-time. Product engineering, tenant-safe backends,
              and n8n automation.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${site.email}`}
                className="rounded-full bg-signal px-5 py-2.5 text-sm font-semibold text-ink"
              >
                {site.email}
              </a>
              <Link
                href="/projects"
                className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold hover:border-signal/40 hover:text-signal"
              >
                See systems
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
