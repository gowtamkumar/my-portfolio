"use client";
import Achievement from "@/components/resume/Achievement";
import Awards from "@/components/resume/Awards";
import Education from "@/components/resume/Education";
import Experience from "@/components/resume/Experience";
import Header from "@/components/resume/ResumeHeader";
import Language from "@/components/resume/Language";
import ProjectsSection from "@/components/resume/Projects";
import Skill from "@/components/resume/Skill";
import Strengths from "@/components/resume/Strengths";
import Summary from "@/components/resume/Summary";
import { useSearchParams } from "next/navigation";
import { useRef } from "react";

export default function Resume() {
  const searchParams = useSearchParams();
  const isPrint = searchParams.get("print") === "true";

 const downloadPDF = async () => {
  const res = await fetch("/api/generate-resume");

  if (!res.ok) {
    alert("Failed to generate PDF.");
    return;
  }

  const blob = await res.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "resume.pdf";
  a.click();
  window.URL.revokeObjectURL(url); // Clean up the object URL after download
};

  return (
    <div>
      {!isPrint && (
        <div className="max-w-4xl mx-auto flex justify-end py-2">
          <button
            onClick={downloadPDF}
            className="bg-blue-600 text-white rounded-sm p-2"
          >
            Download PDF
          </button>
        </div>
      )}

      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg font-sans text-gray-800">
        <Header />
        <Summary />
        <ProjectsSection />
        <Experience />
        <Skill />
        <Strengths />
        <Achievement />
        <Education />
      </div>
    </div>
  );
}
