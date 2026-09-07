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
          Building Cayura — a multi-tenant SaaS platform tailored for the
          Australian NDIS (National Disability Insurance Scheme) disability-care
          sector, contributing across backend architecture, frontend applications,
          and deployment workflows.
        </p>
        <ul className="list-disc ml-5 text-sm space-y-1 mt-1">
          <li>
            Engineered database-level multi-tenant isolation using PostgreSQL
            Row-Level Security (RLS) with per-request organization context
          </li>
          <li>
            Architected and shipped modular full-stack features with NestJS,
            Next.js, and TypeScript on PostgreSQL with Prisma ORM and Redis
          </li>
          <li>
            Implemented defense-in-depth authentication with JWT access/refresh
            tokens, NestJS route guards, and RBAC aligned with PostgreSQL RLS
          </li>
          <li>
            Orchestrated Linux server infrastructure and continuous releases
            using Docker Compose, Git, and Caddy with automatic SSL/TLS
          </li>
          <li>
            Conducted competitive and market analysis across 15+ NDIS platforms
            to define technical architecture and PRDs
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
        <p className="text-sm mt-1">
          Spearheaded the engineering of enterprise-grade web applications,
          high-throughput e-commerce backends, and distributed systems across full
          software lifecycles.
        </p>
        <ul className="list-disc ml-5 text-sm space-y-1 mt-1">
          <li>
            Architected and scaled high-concurrency e-commerce backends to
            sustain heavy traffic volumes, implementing aggressive PostgreSQL
            indexing and multi-tiered Redis caching
          </li>
          <li>
            Engineered robust, modular RESTful APIs and micro-services with NestJS,
            Node.js, and TypeScript, decoupling monolithic bottlenecks to
            dramatically reduce endpoint latency
          </li>
          <li>
            Constructed intuitive, high-performance user interfaces and
            administrative portals using React, TypeScript, and Tailwind CSS with
            real-time bidirectional WebSocket event streams
          </li>
          <li>
            Hardened application security via stateless JWT access/refresh token
            protocols and orchestrated containerized Docker deployments fronted by
            NGINX reverse proxies on Linux VPS infrastructure
          </li>
          <li>
            Championed engineering excellence by instituting rigorous code review
            standards, expanding test coverage, and mentoring junior engineers in
            idiomatic TypeScript and collaborative Git workflows
          </li>
        </ul>
      </div>
    </section>
  );
}
