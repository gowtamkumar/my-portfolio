"use client";
import Achievement from "@/components/resume/Achievement";
import Education from "@/components/resume/Education";
import Experience from "@/components/resume/Experience";
import ProjectsSection from "@/components/resume/Projects";
import Skill from "@/components/resume/Skill";
import Strengths from "@/components/resume/Strengths";
import Summary from "@/components/resume/Summary";
import { useSearchParams } from "next/navigation";
import ResumeHeader from "@/components/resume/ResumeHeader";
import Header from "@/components/Header";

export default function Resume() {
  const searchParams = useSearchParams();
  const isPrint = searchParams.get("print") === "true";

  const downloadPDF = async () => {
    try {
      const res = await fetch("/api/generate-resume");

      if (!res.ok) {
        alert("Failed to generate PDF.");
        return;
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "gowtamkumar(Javascript Developer).pdf";
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error fetching PDF:", error);
      alert("Failed to download PDF.");
    }
  };

  return (
    <div>
      <Header/>
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
        <ResumeHeader />
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
