"use client";
import Header from "@/components/Header";
import Education from "@/components/resume/Education";
import Experience from "@/components/resume/Experience";
import ProjectsSection from "@/components/resume/Projects";

import { backendSkills, backendSummary, coreSkills, frontendSkills, frontendSummary, fullstackSummary } from "@/lib/mock-data/skill";
import html2pdf from "html2pdf.js";
import { useRef, useState } from "react";

type ResumeType = "fullstack" | "backend" | "frontend";

export default function Resume() {
  const contentRef = useRef(null);
  const [activeTab, setActiveTab] = useState<ResumeType>("fullstack");

  const handleDownloadPdf = () => {
    const element = contentRef.current;
    if (!element) return;

    const filenames: Record<ResumeType, string> = {
      fullstack: "Gowtam_Kumar_FullStack_Developer.pdf",
      backend: "Gowtam_Kumar_Backend_Developer.pdf",
      frontend: "Gowtam_Kumar_Frontend_Developer.pdf",
    };

    const options = {
      margin: 1,
      filename: filenames[activeTab],
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 3 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf()
      .from(element)
      .set(options as any)
      .save();
  };

  const jobTitles: Record<ResumeType, string> = {
    fullstack: "Full Stack JavaScript Developer (Node.js, NestJS, ReactJS)",
    backend: "Backend Developer (Node.js, NestJS, PostgreSQL)",
    frontend: "Frontend Developer (React.js, Next.js, TypeScript)",
  };

  const summaries: Record<ResumeType, string> = {
    fullstack: fullstackSummary,
    backend: backendSummary,
    frontend: frontendSummary,
  };

  const skillsMap: Record<ResumeType, string[]> = {
    fullstack: coreSkills,
    backend: backendSkills,
    frontend: frontendSkills,
  };

  return (
    <div className="pt-32">
      <Header />

      {/* Tabs */}
      <div className="max-w-4xl mx-auto flex gap-2 mb-4 flex-wrap">
        <button
          onClick={() => setActiveTab("fullstack")}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${activeTab === "fullstack"
            ? "bg-blue-600 text-white shadow-lg"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
        >
          Full Stack
        </button>
        <button
          onClick={() => setActiveTab("backend")}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${activeTab === "backend"
            ? "bg-green-600 text-white shadow-lg"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
        >
          Backend
        </button>
        <button
          onClick={() => setActiveTab("frontend")}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${activeTab === "frontend"
            ? "bg-purple-600 text-white shadow-lg"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
        >
          Frontend
        </button>
      </div>

      <div className="max-w-4xl mx-auto flex justify-end py-2">
        <button
          onClick={handleDownloadPdf}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-1 px-3 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Download PDF
        </button>
      </div>

      <div
        className="max-w-4xl mx-auto bg-white p-6 shadow-lg font-sans text-gray-800"
        ref={contentRef}
      >
        {/* Header */}
        <header className="mb-4 border-b pb-3">
          <h1 className="text-2xl font-bold text-gray-900">Gowtam Kumar</h1>
          <p className="text-lg font-semibold text-gray-700">{jobTitles[activeTab]}</p>
          <div className="text-sm text-gray-600 mt-2">
            <p>
              <strong>Email:</strong> gowtampaul0@gmail.com | <strong>Phone:</strong> +880 1767-163576
            </p>
            <p>
              <strong>LinkedIn:</strong> linkedin.com/in/gowtamkumar | <strong>GitHub:</strong> github.com/gowtamkumar
            </p>
          </div>
        </header>

        {/* Summary */}
        <section className="my-2">
          <h2 className="text-xl font-semibold border-b my-1">Summary</h2>
          <p className="text-sm">{summaries[activeTab]}</p>
        </section>

        {/* Skills */}
        <section className="my-2">
          <h2 className="text-xl font-semibold border-b my-1">Skills</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            {skillsMap[activeTab].join(" • ")}
          </p>
        </section>

        <Experience />
        <ProjectsSection />
        <Education />
      </div>
    </div>
  );
}

