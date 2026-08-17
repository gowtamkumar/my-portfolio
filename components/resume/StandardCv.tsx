import { resumeDocuments, resumeMeta, type ResumeTrack } from "@/lib/resume-data";

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="mb-1.5 border-b border-neutral-800 pb-0.5 text-[11px] font-bold uppercase tracking-[0.14em] text-neutral-900">
      {children}
    </h2>
  );
}

export default function StandardCv({ track }: { track: ResumeTrack }) {
  const cv = resumeDocuments[track];

  return (
    <article className="cv-sheet bg-white text-neutral-900">
      <header className="text-center">
        <h1 className="text-[26px] font-bold leading-none tracking-wide text-neutral-900">
          {resumeMeta.name.toUpperCase()}
        </h1>
        <p className="mt-1.5 text-[13px] font-semibold text-neutral-700">{cv.title}</p>
        <p className="mt-2 text-[11px] leading-relaxed text-neutral-600">
          {resumeMeta.location}
          <span className="mx-1.5 text-neutral-400">|</span>
          {resumeMeta.email}
          <span className="mx-1.5 text-neutral-400">|</span>
          {resumeMeta.phone}
        </p>
        <p className="text-[11px] text-neutral-600">
          {resumeMeta.linkedin}
          <span className="mx-1.5 text-neutral-400">|</span>
          {resumeMeta.github}
        </p>
      </header>

      <section className="mt-4">
        <SectionTitle>Professional Summary</SectionTitle>
        <p className="text-[11.5px] leading-[1.45] text-neutral-800">{cv.summary}</p>
      </section>

      <section className="mt-3.5">
        <SectionTitle>Technical Skills</SectionTitle>
        <div className="space-y-0.5 text-[11.5px] leading-[1.45] text-neutral-800">
          {cv.skills.map((row) => (
            <p key={row.category}>
              <span className="font-semibold">{row.category}:</span> {row.items}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-3.5">
        <SectionTitle>Professional Experience</SectionTitle>
        {cv.experience.map((job) => (
          <div key={`${job.company}-${job.title}`} className="mt-2 first:mt-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <p className="text-[12.5px] font-bold text-neutral-900">
                {job.title}
                <span className="font-semibold text-neutral-700"> — {job.company}</span>
              </p>
              <p className="text-[11px] font-medium text-neutral-600">
                {job.dates} · {job.location}
              </p>
            </div>
            {job.context ? (
              <p className="mt-1 text-[11.5px] leading-[1.45] text-neutral-800">{job.context}</p>
            ) : null}
            <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[11.5px] leading-[1.45] text-neutral-800">
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mt-3.5">
        <SectionTitle>Projects</SectionTitle>
        <div className="space-y-2.5">
          {cv.projects.map((project) => (
            <div key={project.name}>
              <p className="text-[12.5px] font-bold text-neutral-900">{project.name}</p>
              <p className="text-[11px] italic text-neutral-600">{project.stack}</p>
              <ul className="mt-0.5 list-disc space-y-0.5 pl-4 text-[11.5px] leading-[1.45] text-neutral-800">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-3.5">
        <SectionTitle>Education</SectionTitle>
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 text-[11.5px]">
          <p>
            <span className="font-bold">{resumeMeta.education.degree}</span>
            <span className="text-neutral-700"> — {resumeMeta.education.school}</span>
          </p>
        </div>
      </section>

      <section className="mt-3.5">
        <SectionTitle>Languages</SectionTitle>
        <p className="text-[11.5px] text-neutral-800">{resumeMeta.languages}</p>
      </section>
    </article>
  );
}
