"use client";
import Header from "@/components/Header";
import Education from "@/components/resume/Education";
import Experience from "@/components/resume/Experience";
import ProjectsSection from "@/components/resume/Projects";
import ResumeHeader from "@/components/resume/ResumeHeader";
import Skill from "@/components/resume/Skill";
import Summary from "@/components/resume/Summary";

import html2pdf from "html2pdf.js";
import { useRef } from "react";

export default function Resume() {
  const contentRef = useRef(null);

  const handleDownloadPdf = () => {
    const element = contentRef.current;
    if (!element) return;

    // Configuration options for html2pdf
    const options = {
      margin: 1,
      filename: "downloaded-document.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 3 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf()
      .from(element)
      .set(options as any)
      .save();
  };

  return (
    <div className="pt-32">
      <Header />
      <div className="max-w-4xl mx-auto flex justify-end py-2">
        <button
          onClick={handleDownloadPdf}
          // className="bg-blue-600 text-white rounded-sm p-1"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-1 px-3 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Download PDF
        </button>
      </div>

      <div
        className="max-w-4xl mx-auto bg-white p-8 shadow-lg font-sans text-gray-800"
        ref={contentRef}
      >
        <ResumeHeader />
        <Summary />
        <Skill />
        <Experience />
        <ProjectsSection />
        {/* <Strengths /> */}
        {/* <Achievement /> */}
        <Education />
      </div>
    </div>
  );
}
