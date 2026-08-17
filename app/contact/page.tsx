import SocialMedia from "@/components/SocialMedia";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: `Hire ${site.name} — ${site.role}.`,
};

export default function Contact() {
  return (
    <main className="relative z-10 mx-auto flex min-h-[80svh] max-w-6xl flex-col justify-center px-5 pb-24 pt-28 md:px-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal">
        Index / Contact
      </p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-tight md:text-6xl">
        Let’s ship something intelligent.
      </h1>
      <p className="mt-5 max-w-xl text-lg text-[var(--muted)]">
        {site.availability}. Freelance systems, full-stack product work, and
        n8n / AI automation.
      </p>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        <a
          href={`mailto:${site.email}`}
          className="rounded-2xl border border-white/10 bg-[var(--card)] p-8 transition hover:border-signal/40"
        >
          <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--muted)]">
            Email
          </p>
          <p className="mt-3 font-display text-2xl text-signal">{site.email}</p>
        </a>
        <a
          href={`tel:${site.phoneTel}`}
          className="rounded-2xl border border-white/10 bg-[var(--card)] p-8 transition hover:border-signal/40"
        >
          <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--muted)]">
            Phone
          </p>
          <p className="mt-3 font-display text-2xl">{site.phoneDisplay}</p>
        </a>
        <a
          href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi Gowtam, I want to talk about a project.")}`}
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-white/10 bg-[var(--card)] p-8 transition hover:border-signal/40"
        >
          <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--muted)]">
            WhatsApp
          </p>
          <p className="mt-3 font-display text-2xl">Message directly</p>
        </a>
        <div className="rounded-2xl border border-white/10 bg-[var(--card)] p-8">
          <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--muted)]">
            Networks
          </p>
          <div className="mt-4">
            <SocialMedia />
          </div>
        </div>
      </div>

      <p className="mt-10 font-mono text-xs text-[var(--muted)]">
        Prefer the assistant? Use the spark control in the corner — it answers
        from this site, then send email when you are ready.
      </p>
    </main>
  );
}
