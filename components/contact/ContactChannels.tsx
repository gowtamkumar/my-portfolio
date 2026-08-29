"use client";

import SocialMedia from "@/components/SocialMedia";
import { site } from "@/lib/about";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import {
  FiCheck,
  FiClock,
  FiCopy,
  FiGlobe,
  FiMail,
  FiPhone,
  FiZap,
} from "react-icons/fi";

export default function ContactChannels() {
  const [copied, setCopied] = useState<string | null>(null);
  const [localTime, setLocalTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeString = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Dhaka",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        }).format(new Date());
        setLocalTime(timeString);
      } catch {
        setLocalTime("UTC+6");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="space-y-4">
      {/* Availability Status Card */}
      <div className="rounded-3xl border border-signal/20 bg-signal/5 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-signal" />
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-signal">
              Available For Hire
            </span>
          </div>
          <span className="flex items-center gap-1 font-mono text-[11px] text-[var(--muted)]">
            <FiZap className="text-signal" /> &lt; 24h reply
          </span>
        </div>

        <p className="mt-3 text-sm text-[var(--muted)]">
          Full-time engineering roles, high-impact contract systems, and SaaS backend development.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-white/10 pt-4 text-xs text-[var(--muted)]">
          <div className="flex items-center gap-1.5 font-mono">
            <FiGlobe className="text-signal" />
            <span>{site.location} (UTC+6)</span>
          </div>
          {localTime ? (
            <div className="flex items-center gap-1.5 font-mono">
              <FiClock className="text-signal" />
              <span>{localTime} (Local)</span>
            </div>
          ) : null}
        </div>
      </div>

      {/* Email Card */}
      <div className="group relative rounded-3xl border border-white/10 bg-[var(--card)] p-6 transition hover:border-signal/40">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-signal">
              <FiMail className="text-lg" />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted)]">
                Email Address
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-0.5 block font-display text-lg text-[var(--fg)] hover:text-signal"
              >
                {site.email}
              </a>
            </div>
          </div>

          <button
            type="button"
            onClick={() => handleCopy(site.email, "email")}
            title="Copy email"
            className="flex h-8 items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 font-mono text-[11px] text-[var(--muted)] transition hover:border-signal/40 hover:text-signal"
          >
            {copied === "email" ? (
              <>
                <FiCheck className="text-signal" />
                <span className="text-signal">Copied!</span>
              </>
            ) : (
              <>
                <FiCopy />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Phone Card */}
      <div className="group relative rounded-3xl border border-white/10 bg-[var(--card)] p-6 transition hover:border-signal/40">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-signal">
              <FiPhone className="text-lg" />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted)]">
                Phone / Direct Call
              </p>
              <a
                href={`tel:${site.phoneTel}`}
                className="mt-0.5 block font-display text-lg text-[var(--fg)] hover:text-signal"
              >
                {site.phoneDisplay}
              </a>
            </div>
          </div>

          <button
            type="button"
            onClick={() => handleCopy(site.phoneTel, "phone")}
            title="Copy phone"
            className="flex h-8 items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 font-mono text-[11px] text-[var(--muted)] transition hover:border-signal/40 hover:text-signal"
          >
            {copied === "phone" ? (
              <>
                <FiCheck className="text-signal" />
                <span className="text-signal">Copied!</span>
              </>
            ) : (
              <>
                <FiCopy />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* WhatsApp Card */}
      <a
        href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi Gowtam, I want to talk about a project.")}`}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center justify-between rounded-3xl border border-white/10 bg-[var(--card)] p-6 transition hover:border-emerald-500/40 hover:bg-emerald-500/[0.02]"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
            <FaWhatsapp className="text-xl" />
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted)]">
              Instant Messaging
            </p>
            <p className="mt-0.5 font-display text-lg text-[var(--fg)] group-hover:text-emerald-400">
              WhatsApp Chat
            </p>
          </div>
        </div>
        <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-[var(--muted)] group-hover:border-emerald-500/30 group-hover:text-emerald-400">
          Chat now →
        </span>
      </a>

      {/* Social Networks Card */}
      <div className="rounded-3xl border border-white/10 bg-[var(--card)] p-6">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted)]">
            Professional Networks
          </p>
          <div className="flex items-center gap-2">
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
}

