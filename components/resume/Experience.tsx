export default function Experience() {
  return (
    <section className="my-2">
      <h2 className="text-xl font-semibold border-b my-1">Experience</h2>
      <div>
        <h3 className="font-semibold text-lg">
          Full Stack Engineer — Astitva Lab Pty Ltd{" "}
          <small className="text-sm text-gray-600">
            (April 2026 – Present | Australia, Remote)
          </small>
        </h3>
        <p className="text-sm mt-1">
          Building Cayura — a multi-tenant SaaS platform for the Australian NDIS
          disability-care sector. Lead a 4-person team (3 developers including
          self + 1 UI/UX designer), owning task planning, code review, testing,
          and deployment.
        </p>
        <ul className="list-disc ml-5 text-sm space-y-1 mt-1">
          <li>
            Develop full-stack features with NestJS and Next.js in TypeScript,
            on PostgreSQL with Prisma, Redis, and Docker Compose behind Caddy
          </li>
          <li>
            Own Linux server releases via SSH, Git, and Docker Compose, with
            Caddy reverse proxy and automatic TLS
          </li>
          <li>
            Implemented PostgreSQL Row-Level Security for database-level
            multi-tenant isolation
          </li>
          <li>
            Built JWT access/refresh auth with NestJS guards and RBAC aligned to
            PostgreSQL Row-Level Security
          </li>
        </ul>
      </div>
      <div className="mt-3">
        <h3 className="font-semibold text-lg">
          Full Stack JavaScript Developer — Semicolon IT Solutions{" "}
          <small className="text-sm text-gray-600">
            (2021 – April 2026 | On-site)
          </small>
        </h3>
        <ul className="list-disc ml-5 text-sm space-y-1">
          <li>
            Developed and maintained scalable web applications using Node.js,
            NestJS, and PostgreSQL
          </li>
          <li>
            Designed and implemented RESTful APIs for core business features
          </li>
          <li>
            Implemented JWT authentication and Docker + NGINX deployments on
            Linux
          </li>
        </ul>
      </div>
    </section>
  );
}
