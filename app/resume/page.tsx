import ResumeViewer from "@/components/resume/ResumeViewer";
import { resumeDocument, resumeMeta } from "@/lib/resume";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${resumeMeta.name} — ${resumeDocument.title}`,
  description: resumeDocument.summary,
};

export default function Resume() {
  return (
    <main className="relative z-10 mx-auto max-w-[210mm] px-4 pb-24 pt-28 md:px-0">
      <ResumeViewer />
    </main>
  );
}
