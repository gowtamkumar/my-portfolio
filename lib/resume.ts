export type ResumeSkillRow = { category: string; items: string };

export type ResumeJob = {
  title: string;
  company: string;
  dates: string;
  location: string;
  context?: string;
  bullets: string[];
};

export type ResumeProject = {
  name: string;
  stack: string;
  bullets: string[];
  url?: string;
};

export type ResumeDocument = {
  title: string;
  summary: string;
  // skills: ResumeSkillRow[];
  experience: ResumeJob[];
  projects: ResumeProject[];
};

export const resumeMeta = {
  name: "Gowtam Kumar",
  location: "Bangladesh",
  email: "gowtampaul0@gmail.com",
  phone: "+880 1767-163576",
  linkedin: "linkedin.com/in/gowtamkumar",
  github: "github.com/gowtamkumar",
  education: {
    degree: "Bachelor of Social Science (BSS)",
    school: "National University, Bangladesh",
  },
  languages: "English, Bangla",
};

const astitva: ResumeJob = {
  title: "Full Stack Engineer",
  company: "Astitva Lab Pty Ltd",
  dates: "April 2026 – Present",
  location: "Australia (Remote)",
  context:
    "Building Cayura — a multi-tenant enterprise SaaS platform engineered for the Australian National Disability Insurance Scheme (NDIS) disability-care sector, driving architecture across 38 domain-driven modules, secure multi-tenant isolation, and automated cloud deployments.",
  bullets: [
    "Architected database-level multi-tenancy using PostgreSQL Row-Level Security (RLS) with dynamic per-request organization scoping, ensuring ironclad data isolation across tenants.",
    "Designed and shipped 38 modular domain services using NestJS, Next.js, and TypeScript with Prisma ORM and Redis caching (managing participant plans, staff rostering, and compliance audits).",
    "Engineered a defense-in-depth security model featuring JWT access/refresh token rotation, NestJS route guards, and fine-grained Role-Based Access Control (RBAC) synchronized with PostgreSQL RLS.",
    "Orchestrated containerized production releases on Linux VPS using Docker Compose, Git workflows, and Caddy reverse proxy with automated SSL/TLS certificate provisioning.",
    "Conducted deep-dive technical benchmarks across 15+ competitor platforms to architect scalable PRDs and technical blueprints aligned with Australian regulatory standards.",
  ],
};

const semicolon: ResumeJob = {
  title: "Full Stack JavaScript Developer",
  company: "Semicolon IT Solutions",
  dates: "2021 – April 2026",
  location: "On-site",
  context:
    "Spearheaded end-to-end engineering of enterprise web applications, high-throughput e-commerce systems, and distributed real-time platforms across full development lifecycles.",
  bullets: [
    "Architected high-concurrency e-commerce backends handling spike traffic, optimizing database throughput via advanced PostgreSQL indexing, query tuning, and Redis caching layers.",
    "Engineered modular RESTful microservices with NestJS, Node.js, and TypeScript, decoupling monolithic bottlenecks to significantly lower API response latency.",
    "Constructed responsive, accessible frontends and merchant management portals using React, Next.js, TypeScript, and Tailwind CSS with real-time WebSocket state synchronization.",
    "Strengthened system security via stateless JWT authentication protocols and established containerized Docker environments fronted by NGINX reverse proxies on production Linux servers.",
    "Fostered engineering excellence by conducting rigorous code reviews, expanding automated integration test suites, and mentoring junior engineers in clean code and Git practices.",
  ],
};

const erp: ResumeProject = {
  name: "eCommerce Multi-Store SaaS ERP",
  stack: "Next.js, NestJS, TypeScript, PostgreSQL, Redis, Docker, SSLCOMMERZ",
  url: "https://github.com/gowtamkumar/eCommerce-multi-store-saas-erp",
  bullets: [
    "Architected a multi-tenant retail ERP synchronizing catalog, warehouse inventory, and integrated POS across physical branches",
    "Designed tiered subscription billing with dynamic usage quotas (SKUs, orders, staff seats) and SSLCOMMERZ gateway integration",
  ],
};

const inventory: ResumeProject = {
  name: "Enterprise Inventory Management System",
  stack: "React.js, NestJS, TypeScript, PostgreSQL, TypeORM, Redis",
  url: "https://inventory.semicolonit.com/",
  bullets: [
    "Architected a full-stack enterprise inventory system at Semicolon IT Solutions to streamline product lifecycles, stock tracking, and multi-warehouse operations",
    "Engineered modular NestJS REST APIs with PostgreSQL, implementing real-time low-stock threshold alerts, valuation auditing, and automated profit/loss reporting",
  ],
};

export const resumeDocument: ResumeDocument = {
  title: "Full Stack Engineer",
  summary:
    "Full Stack Engineer with 5+ years of production experience architecting scalable multi-tenant SaaS platforms, high-throughput eCommerce engines, and distributed real-time systems. Expert in TypeScript, NestJS, Next.js, PostgreSQL (RLS), Redis, and Dockerized Linux infrastructure. Proven track record in designing domain-driven backend microservices, robust RBAC/security layers, and responsive web applications with end-to-end DevOps automation.",
  experience: [astitva, semicolon],
  projects: [erp, inventory],
};
