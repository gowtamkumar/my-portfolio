
'use client';
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
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { useRef } from 'react';

export default function Resume() {

  const printRef = useRef(null);

  const handleDownloadPdf = async () => {
    const element = printRef.current as any;
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');

    const pageWidth = 210;
    const pageHeight = 297;

    const imgProps = pdf.getImageProperties(imgData);
    const imgWidth = pageWidth;
    const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

    const totalPages = Math.ceil(imgHeight / pageHeight);
    const pageCanvas = document.createElement('canvas');
    const pageCtx = pageCanvas.getContext('2d')!;
    const scale = 2;
    const pagePixelHeight = (pageHeight * imgProps.height) / imgHeight;

    pageCanvas.width = canvas.width;
    pageCanvas.height = pagePixelHeight;

    for (let page = 0; page < totalPages; page++) {
      const startY = page * pagePixelHeight;

      // Clear canvas
      pageCtx.clearRect(0, 0, pageCanvas.width, pageCanvas.height);

      // Draw slice
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

      const pageData = pageCanvas.toDataURL('image/png');

      if (page > 0) pdf.addPage();
      pdf.addImage(pageData, 'PNG', 0, 0, imgWidth, pageHeight);
    }

    pdf.save('multi-page.pdf');
  };



  return (
    <div ref={printRef} className="max-w-4xl mx-auto bg-white p-8 shadow-lg font-sans text-gray-800">
      <button
        onClick={handleDownloadPdf}
        className=" bg-blue-600 text-white p-1 rounded-lg"
      >
        Download PDF
      </button>
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
  );
}
