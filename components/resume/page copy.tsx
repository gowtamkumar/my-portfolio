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
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useRef, useState } from "react";
import {
  Document,
  Page,
  Text,
  View,
  Link,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 12, fontFamily: "Helvetica" },
  section: { marginBottom: 12 },
  heading: { fontSize: 16, marginBottom: 4 },
  link: { color: "blue", textDecoration: "underline" },
});

export default function Resume() {
  const printRef = useRef(null);
  const [showPdf, setShowPdf] = useState(false);

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

  const PdfResume = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.heading}>Gowtam Kumar</Text>
          <Text>
            Website:{" "}
            <Link src="https://gowtamkumar.vercel.app" style={styles.link}>
              gowtamkumar.vercel.app
            </Link>
          </Text>
          <Text>
            GitHub:{" "}
            <Link src="https://github.com/gowtamkumar" style={styles.link}>
              github.com/gowtamkumar
            </Link>
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Projects</Text>
          <Text>• Influencer Marketing Platform (React + Nest.js)</Text>
          <Text>• Portfolio Website with Tailwind & Next.js</Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <div>
      <div className="p-4">
        <div className="max-w-4xl mx-auto flex justify-end py-2 gap-4">
          <button
            onClick={() => setShowPdf(!showPdf)}
            className="bg-green-600 text-white px-4 py-1 rounded-sm"
          >
            {showPdf ? "Hide PDF" : "View PDF (Clickable)"}
          </button>
        </div>

        {showPdf ? (
          <div className="mt-4 border shadow-lg">
            <PDFViewer width="100%" height={800}>
              <PdfResume />
            </PDFViewer>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
}
