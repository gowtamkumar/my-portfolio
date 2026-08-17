"use client";

import StandardCv from "@/components/resume/StandardCv";
import { resumeDocuments, type ResumeTrack } from "@/lib/resume-data";
import { useRef, useState } from "react";

const tabs: { id: ResumeTrack; label: string }[] = [
  { id: "fullstack", label: "Full stack" },
  { id: "backend", label: "Backend" },
];

export default function Resume() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<ResumeTrack>("fullstack");
  const [busy, setBusy] = useState(false);

  const handleDownloadPdf = async () => {
    const element = contentRef.current;
    if (!element) return;
    setBusy(true);
    try {
      const html2pdf = (await import("html2pdf.js")).default;
      await html2pdf()
        .from(element)
        .set({
          margin: 0,
          filename: resumeDocuments[activeTab].filename,
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: {
            scale: 2,
            useCORS: true,
            letterRendering: true,
            backgroundColor: "#ffffff",
          },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
          pagebreak: { mode: ["css", "legacy"] },
        })
        .save();
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="relative z-10 mx-auto max-w-[210mm] px-4 pb-24 pt-28 md:px-0">
      <div className="no-print mb-8 px-1">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal">
          Index / Resume
        </p>
        <h1 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">
          Curriculum Vitae
        </h1>
        <p className="mt-3 text-[var(--muted)]">
          Standard one-page CV. Choose a target role, then download or print.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2 rounded-full border border-white/10 bg-[var(--card)] p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-4 py-1.5 text-sm transition ${
                  activeTab === tab.id
                    ? "bg-signal text-ink"
                    : "text-[var(--muted)] hover:text-[var(--fg)]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold hover:border-signal/40 hover:text-signal"
            >
              Print
            </button>
            <button
              type="button"
              onClick={handleDownloadPdf}
              disabled={busy}
              className="rounded-full border border-signal/40 px-4 py-2 text-sm font-semibold text-signal hover:bg-signal hover:text-ink disabled:opacity-60"
            >
              {busy ? "Preparing…" : "Download PDF"}
            </button>
          </div>
        </div>
      </div>

      <div ref={contentRef}>
        <StandardCv track={activeTab} />
      </div>
    </main>
  );
}
