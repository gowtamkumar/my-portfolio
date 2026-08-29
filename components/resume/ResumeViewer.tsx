"use client";

import { resumeDocument, resumeMeta } from "@/lib/resume";
import { skills } from "@/lib/mock-data/skill";
import Link from "next/link";
import { useState } from "react";
import {
  FiArrowRight,
  FiBriefcase,
  FiCheck,
  FiCode,
  FiEye,
  FiEyeOff,
  FiFileText,
  FiMail,
  FiMapPin,
  FiPrinter,
} from "react-icons/fi";
import StandardCv from "./StandardCv";

export default function ResumeViewer() {
  const [showCv, setShowCv] = useState(false);

  const handlePrint = () => {
    setShowCv(true);
    setTimeout(() => {
      const previous = document.title;
      document.title = `${resumeMeta.name} — ${resumeDocument.title}`;
      const restore = () => {
        document.title = previous;
        window.removeEventListener("afterprint", restore);
      };
      window.addEventListener("afterprint", restore);
      window.print();
    }, 150);
  };

  return (
    <div className="space-y-8">
      {/* Top Header Card */}
      <div className="no-print rounded-3xl border border-white/10 bg-[var(--card)] p-6 md:p-8 backdrop-blur-md">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-signal animate-pulse-dot" />
              <span className="font-mono text-xs uppercase tracking-wider text-signal">
                Verified Curriculum Vitae
              </span>
            </div>
            <h1 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
              {resumeMeta.name}
            </h1>
            <p className="mt-1 font-display text-lg text-signal">
              {resumeDocument.title}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-[var(--muted)]">
              <span className="flex items-center gap-1.5 font-mono">
                <FiMapPin className="text-signal" /> {resumeMeta.location}
              </span>
              <span className="flex items-center gap-1.5 font-mono">
                <FiMail className="text-signal" /> {resumeMeta.email}
              </span>
              <span className="flex items-center gap-1.5 font-mono">
                <FiCode className="text-signal" /> 5+ Years Shipping
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setShowCv((prev) => !prev)}
              className="flex items-center gap-2 rounded-full bg-signal px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-white"
            >
              {showCv ? (
                <>
                  <FiEyeOff className="text-base" /> Hide Printable CV
                </>
              ) : (
                <>
                  <FiEye className="text-base" /> View Full Resume
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-[var(--fg)] transition hover:border-signal/40 hover:text-signal"
            >
              <FiPrinter className="text-base" /> Print / Save PDF
            </button>
          </div>
        </div>

        {/* Quick Summary View (Visible when full CV is collapsed) */}
        {!showCv && (
          <div className="mt-8 border-t border-white/10 pt-6 space-y-6">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
                Summary
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {resumeDocument.summary}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {/* Latest Experience Preview */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-signal">
                  <FiBriefcase /> Current Experience
                </div>
                <h4 className="mt-2 font-display text-base font-semibold">
                  {resumeDocument.experience[0].title} — {resumeDocument.experience[0].company}
                </h4>
                <p className="text-xs text-[var(--muted)]">
                  {resumeDocument.experience[0].dates} · {resumeDocument.experience[0].location}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
                  {resumeDocument.experience[0].context}
                </p>
              </div>

              {/* Skills Preview */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-signal">
                  <FiCode /> Key Technologies
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {skills.flatMap((s) => s.items).slice(0, 14).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-[var(--muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                  <span className="rounded-full border border-signal/20 bg-signal/5 px-2.5 py-1 font-mono text-[11px] text-signal">
                    + more in CV
                  </span>
                </div>
              </div>
            </div>

            {/* Click to Reveal Callout */}
            <div
              onClick={() => setShowCv(true)}
              className="group cursor-pointer rounded-2xl border border-dashed border-signal/30 bg-signal/[0.03] p-5 text-center transition hover:border-signal hover:bg-signal/[0.06]"
            >
              <div className="flex items-center justify-center gap-2 font-display text-base font-medium text-signal">
                <FiFileText className="text-lg" />
                <span>Click here to open and review the standard A4 Curriculum Vitae</span>
                <FiArrowRight className="transition group-hover:translate-x-1" />
              </div>
              <p className="mt-1 text-xs text-[var(--muted)]">
                Formatted for recruitment systems, standard print, and PDF export.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Full Standard A4 CV Container */}
      <div
        className={`${
          showCv ? "block animate-fadeIn" : "hidden print:block"
        }`}
      >
        <div className="no-print mb-4 flex items-center justify-between px-2">
          <p className="font-mono text-xs text-[var(--muted)]">
            Standard A4 Sheet Format · Ready for Print &amp; PDF
          </p>
          <button
            type="button"
            onClick={() => setShowCv(false)}
            className="font-mono text-xs text-signal hover:underline"
          >
            Collapse CV view ↑
          </button>
        </div>

        <StandardCv />
      </div>
    </div>
  );
}

