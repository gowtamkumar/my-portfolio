"use client";
import Achievement from "@/components/resume/Achievement";
import Awards from "@/components/resume/Awards";
import Education from "@/components/resume/Education";
import Experience from "@/components/resume/Experience";
import Header from "@/components/resume/Header";
import Language from "@/components/resume/Language";
import ProjectsSection from "@/components/resume/Projects";
import Skill from "@/components/resume/Skill";
import Strengths from "@/components/resume/Strengths";
import Summary from "@/components/resume/Summary";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from "react";

export default function Resume() {
  const printRef = useRef(null);

  const handleDownloadPdf = async () => {
    const element = printRef.current as any;
    const canvas = await html2canvas(element, {
      scale: 1.5,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/jpeg", 0.7);
    const pdf = new jsPDF("p", "mm", "a4", true); // true = compress

    const pageWidth = 210;
    const pageHeight = 297;

    const imgProps = pdf.getImageProperties(imgData);
    const imgWidth = pageWidth;
    const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

    const totalPages = Math.ceil(imgHeight / pageHeight);
    const pageCanvas = document.createElement("canvas");
    const pageCtx = pageCanvas.getContext("2d")!;
    const scale = 1.5;
    const pagePixelHeight = (pageHeight * imgProps.height) / imgHeight;

    pageCanvas.width = canvas.width;
    pageCanvas.height = pagePixelHeight;

    for (let page = 0; page < totalPages; page++) {
      const startY = page * pagePixelHeight;

      pageCtx.clearRect(0, 0, pageCanvas.width, pageCanvas.height);

      pageCtx.drawImage(
        canvas,
        0,
        startY,
        canvas.width,
        pagePixelHeight,
        0,
        0,
        canvas.width,
        pagePixelHeight
      );

      const pageData = pageCanvas.toDataURL("image/jpeg", 0.7);

      if (page > 0) pdf.addPage();
      pdf.addImage(pageData, "JPEG", 0, 0, imgWidth, pageHeight, "", "FAST");
    }

    pdf.save("gowtamkumar(Web Developer).pdf");
  };

  return (
    <div>
      <div className="container">
        <button
          onClick={handleDownloadPdf}
          className=" bg-blue-600 text-whiterounded-lg"
        >
          Download PDF
        </button>
      </div>


      <div
        ref={printRef}
        className="max-w-4xl mx-auto bg-white p-8 shadow-lg font-sans text-gray-800"
      >
        <Header />
        <Summary />
        <ProjectsSection />
        <Experience />

        <Skill />

        {/* <Language /> */}
        <Strengths />
        {/* <div className="page-break" /> */}
        <Achievement />
        {/* <Awards /> */}
        <Education />
      </div>
    </div>
  );
}
