"use client";

import { useState, useTransition } from "react";
import { FiCheck, FiMail, FiMessageSquare, FiSend, FiUser, FiZap } from "react-icons/fi";

const inquiryTypes = [
  "Multi-Tenant SaaS",
  "Full-Stack Web App",
  "AI & MCP Automation",
  "Full-Time Role",
  "Contract / Freelance",
  "Other Inquiry",
];

export default function ContactForm({ recipientEmail }: { recipientEmail: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedType, setSelectedType] = useState(inquiryTypes[0]);
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    startTransition(async () => {
      // Simulate quick interaction delay
      await new Promise((resolve) => setTimeout(resolve, 400));

      const subject = encodeURIComponent(`[Portfolio Inquiry] ${selectedType} - ${name}`);
      const body = encodeURIComponent(
        `Hi Gowtam,\n\nName: ${name}\nEmail: ${email}\nProject / Role Type: ${selectedType}\n\nMessage:\n${message}\n\nSent from portfolio contact form.`
      );

      // Open native mailto
      window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
      setSubmitted(true);
    });
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setSelectedType(inquiryTypes[0]);
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-signal/30 bg-signal/5 p-8 text-center md:p-10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-signal/40 bg-signal/10 text-signal">
          <FiCheck className="text-2xl" />
        </div>
        <h3 className="mt-5 font-display text-2xl">Message Prepared!</h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[var(--muted)]">
          Your mail client has been opened with your message pre-filled. If it didn&apos;t open automatically, you can also reach out directly to{" "}
          <a href={`mailto:${recipientEmail}`} className="font-semibold text-signal underline">
            {recipientEmail}
          </a>
          .
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${recipientEmail}?subject=${encodeURIComponent(`[Inquiry] ${selectedType} - ${name}`)}&body=${encodeURIComponent(message)}`}
            className="rounded-full bg-signal px-6 py-2.5 text-sm font-semibold text-ink transition hover:bg-white"
          >
            Open Mail Client Again
          </a>
          <button
            type="button"
            onClick={handleReset}
            className="rounded-full border border-white/15 px-6 py-2.5 text-sm font-semibold text-[var(--fg)] transition hover:border-signal/40 hover:text-signal"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10 bg-[var(--card)] p-6 md:p-8"
    >
      <div className="flex items-center justify-between border-b border-white/10 pb-5">
        <div>
          <h3 className="font-display text-xl">Send a direct inquiry</h3>
          <p className="mt-1 text-xs text-[var(--muted)]">
            Fill out the form below to start a conversation.
          </p>
        </div>
        <span className="flex items-center gap-1 rounded-full border border-signal/20 bg-signal/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-signal">
          <FiZap className="text-xs" /> Quick Start
        </span>
      </div>

      <div className="mt-6 space-y-5">
        <div>
          <label className="block font-mono text-[11px] uppercase tracking-widest text-[var(--muted)]">
            I am interested in
          </label>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {inquiryTypes.map((type) => {
              const isSelected = selectedType === type;
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => setSelectedType(type)}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${isSelected
                      ? "border-signal bg-signal/15 text-signal"
                      : "border-white/10 text-[var(--muted)] hover:border-white/20 hover:text-[var(--fg)]"
                    }`}
                >
                  {type}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block font-mono text-[11px] uppercase tracking-widest text-[var(--muted)]"
            >
              Your Name <span className="text-signal">*</span>
            </label>
            <div className="relative mt-2">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-[var(--muted)]">
                <FiUser className="text-sm" />
              </span>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alex Morgan"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-2.5 pl-10 pr-4 text-sm text-[var(--fg)] placeholder:text-neutral-500 focus:border-signal/50 focus:bg-white/[0.06] focus:outline-none focus:ring-1 focus:ring-signal/50"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block font-mono text-[11px] uppercase tracking-widest text-[var(--muted)]"
            >
              Email Address <span className="text-signal">*</span>
            </label>
            <div className="relative mt-2">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-[var(--muted)]">
                <FiMail className="text-sm" />
              </span>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex@company.com"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-2.5 pl-10 pr-4 text-sm text-[var(--fg)] placeholder:text-neutral-500 focus:border-signal/50 focus:bg-white/[0.06] focus:outline-none focus:ring-1 focus:ring-signal/50"
              />
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block font-mono text-[11px] uppercase tracking-widest text-[var(--muted)]"
          >
            Project / Inquiry Details <span className="text-signal">*</span>
          </label>
          <div className="relative mt-2">
            <span className="pointer-events-none absolute left-3.5 top-3 text-[var(--muted)]">
              <FiMessageSquare className="text-sm" />
            </span>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project, timeline, tech stack, or role requirements..."
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-2.5 pl-10 pr-4 text-sm text-[var(--fg)] placeholder:text-neutral-500 focus:border-signal/50 focus:bg-white/[0.06] focus:outline-none focus:ring-1 focus:ring-signal/50"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-signal py-3 font-medium text-ink transition hover:bg-white disabled:opacity-50"
        >
          {isPending ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink border-t-transparent" />
              Preparing Email...
            </>
          ) : (
            <>
              <FiSend className="text-base" /> Send Message
            </>
          )}
        </button>
      </div>
    </form>
  );
}
