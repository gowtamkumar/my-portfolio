"use client";
import Header from "@/components/Header";
import Achievement from "@/components/resume/Achievement";
import Education from "@/components/resume/Education";
import Experience from "@/components/resume/Experience";
import ProjectsSection from "@/components/resume/Projects";
import ResumeHeader from "@/components/resume/ResumeHeader";
import Skill from "@/components/resume/Skill";
import Strengths from "@/components/resume/Strengths";
import Summary from "@/components/resume/Summary";
import { useSearchParams } from "next/navigation";

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
    <div className="pt-32">
      <Header />
      {!isPrint && (
        <div className="max-w-4xl mx-auto flex justify-end py-2">
          <button
            onClick={downloadPDF}
            // className="bg-blue-600 text-white rounded-sm p-1"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg"
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
