
import { resumeMeta } from "@/lib/resume";

export default function ResumeHeader() {
  return (
    <header className="mb-4 border-b pb-3">
      <h1 className="text-2xl font-bold text-gray-900">{resumeMeta.name}</h1>
      <p className="text-lg font-semibold text-gray-700">
        Full Stack JavaScript Developer (Node.js, NestJS, ReactJS)
      </p>
      <div className="text-sm text-gray-600 mt-2">
        <p>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${resumeMeta.email}`} className="hover:underline">
            {resumeMeta.email}
          </a>{" "}
          | <strong>Phone:</strong>{" "}
          <a
            href={`tel:${resumeMeta.phone.replace(/\s+/g, "")}`}
            className="hover:underline"
          >
            {resumeMeta.phone}
          </a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href={`https://${resumeMeta.linkedin.replace(/^https?:\/\//, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {resumeMeta.linkedin}
          </a>{" "}
          | <strong>GitHub:</strong>{" "}
          <a
            href={`https://${resumeMeta.github.replace(/^https?:\/\//, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {resumeMeta.github}
          </a>
          {resumeMeta.portfolio ? (
            <>
              {" "}
              | <strong>Portfolio:</strong>{" "}
              <a
                href={`https://${resumeMeta.portfolio.replace(/^https?:\/\//, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {resumeMeta.portfolio}
              </a>
            </>
          ) : null}
        </p>
      </div>
    </header>
  );
}
