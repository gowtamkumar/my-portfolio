import ContactChannels from "@/components/contact/ContactChannels";
import ContactForm from "@/components/contact/ContactForm";
import { site } from "@/lib/about";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} — ${site.role}. Available for full-time engineering roles, SaaS development, and AI automation.`,
};

export default function Contact() {
  return (
    <main className="relative z-10 mx-auto max-w-6xl px-5 pb-24 pt-28 md:px-8">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal">
          Index / Contact
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-tight md:text-6xl">
          Let’s ship something intelligent.
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
          {site.availability}. Reach out directly through your preferred channel or send a message using the form below.
        </p>
      </div>

      <div className="mt-12 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        {/* Left Column: Direct Channels, Copy buttons & Live Status */}
        <ContactChannels />

        {/* Right Column: Interactive Inquiry Form */}
        <ContactForm recipientEmail={site.email} />
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:flex-row">
        <p className="font-mono text-xs text-[var(--muted)]">
          Prefer an interactive AI conversation?{" "}
          <a href="/#assistant" className="font-medium text-signal hover:underline">
            Ask the on-site GK Assistant
          </a>
        </p>
        <p className="font-mono text-xs text-[var(--muted)]">
          Response SLA: within 24 hours
        </p>
      </div>
    </main>
  );
}
