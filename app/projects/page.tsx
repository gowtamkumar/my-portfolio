"use client";
import Header from "@/components/Header";
import { projects } from "@/lib/mock-data/project";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`group relative rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-36"
        }`}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={project.img}
          alt={project.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
      <div className="relative z-20 flex flex-col justify-end h-full p-6 text-white">
        <h3 className="text-2xl font-bold mb-2 transition-transform duration-500 ease-in-out group-hover:-translate-y-52">
          {project.name}
        </h3>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out absolute bottom-6 left-6 right-6">
          <p className="text-gray-300 mb-4 text-sm h-24 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech: string, idx: number) => (
              <span
                key={idx}
                className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-end gap-4">
            {project.sourceCode && (
              <Link
                href={project.sourceCode}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 transform hover:scale-105"
              >
                <FiGithub className="text-xl" />
                <span>Source</span>
              </Link>
            )}
            {project.url && (
              <Link
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 transform hover:scale-105"
              >
                <FiExternalLink className="text-xl" />
                <span>Preview</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <>
      <Header />
      <div
        className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans"
        style={{
          backgroundImage: "url(/pattern-dark.20747baf.svg)",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <main className="container mx-auto px-4 pt-32 pb-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
              My Creations
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 dark:text-gray-300 mt-4">
              A collection of my favorite projects. Each one is a testament to
              my passion for building beautiful and functional web experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 h-[500px]">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} index={idx} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
