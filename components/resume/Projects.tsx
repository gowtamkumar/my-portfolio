import { resumeDocument } from "@/lib/resume";

export default function ProjectsSection() {
  return (
    <section className="my-2">
      <h2 className="text-xl font-semibold border-b my-1">Projects</h2>
      <div className="space-y-3">
        {resumeDocument.projects.map((project) => (
          <div key={project.name}>
            <h3 className="font-semibold text-lg">
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-signal"
                >
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h3>
            <address className="text-sm not-italic text-gray-600">
              Tech Stack: {project.stack}
            </address>
            <ul className="list-disc ml-5 text-sm space-y-1 mt-1">
              {project.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
