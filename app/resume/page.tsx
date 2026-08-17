import PrintCvButton from "@/components/resume/PrintCvButton";
import StandardCv from "@/components/resume/StandardCv";
import { resumeDocument, resumeMeta } from "@/lib/resume-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${resumeMeta.name} — ${resumeDocument.title}`,
};

export default function Resume() {
  return (
    <main className="relative z-10 mx-auto max-w-[210mm] px-4 pb-24 pt-28 md:px-0">
      <div className="no-print mb-8 flex flex-wrap items-end justify-between gap-4 px-1">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal">
            Index / Resume
          </p>
          <h1 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">
            Curriculum Vitae
          </h1>
          <p className="mt-3 text-[var(--muted)]">
            Standard A4 CV. Print or save as PDF from the dialog.
          </p>
        </div>
        <PrintCvButton />
      </div>

      <StandardCv />
    </main>
  );
}
