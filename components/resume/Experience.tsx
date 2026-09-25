import { resumeDocument } from "@/lib/resume";

export default function Experience() {
  return (
    <section className="my-2">
      <h2 className="text-xl font-semibold border-b my-1">Experience</h2>
      <div className="space-y-4">
        {resumeDocument.experience.map((job) => (
          <div key={`${job.company}-${job.title}`}>
            <h3 className="font-semibold text-lg">
              {job.title} — {job.company}{" "}
              <small className="text-sm text-gray-600">
                ({job.dates} | {job.location})
              </small>
            </h3>
            {job.context ? (
              <p className="text-sm mt-1 text-gray-700">{job.context}</p>
            ) : null}
            <ul className="list-disc ml-5 text-sm space-y-1 mt-1">
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
