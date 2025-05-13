import Achievement from "@/components/resume/Achievement";
import Education from "@/components/resume/Education";
import Experience from "@/components/resume/Experience";
import Header from "@/components/resume/ResumeHeader";
import ProjectsSection from "@/components/resume/Projects";
import Skill from "@/components/resume/Skill";
import Strengths from "@/components/resume/Strengths";
import Summary from "@/components/resume/Summary";

export default function Resume() {
  return (
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
  );
}
