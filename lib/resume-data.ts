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
};

export type ResumeDocument = {
  title: string;
  summary: string;
  skills: ResumeSkillRow[];
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
    "Building Cayura — a multi-tenant SaaS platform for the Australian NDIS (National Disability Insurance Scheme) disability-care sector. Lead a 4-person team (3 developers including self + 1 UI/UX designer), owning task planning, code review, testing, and deployment.",
  bullets: [
    "Develop full-stack features with NestJS (backend) and Next.js (frontend) in TypeScript, on PostgreSQL with Prisma ORM, Redis, and Docker Compose behind a Caddy reverse proxy.",
    "Lead the team across every stage — breaking down tasks, reviewing code, driving testing, and managing releases — keeping a small team shipping consistently.",
    "Own deployment and server operations: manage releases on a Linux server via SSH, Git, and Docker Compose, with Caddy for reverse proxy and automatic TLS.",
    "Implemented database-level multi-tenant isolation using PostgreSQL Row-Level Security (RLS) with per-request organisation context — enforcing strict tenant separation at the database layer, not only in application code.",
    "Built the authentication and session layer: JWT access/refresh token flow with NestJS route guards and role-based access control (RBAC) aligned to RLS policies for defense-in-depth.",
    "Contributing to domain-driven API and database schema design across core modules (participants, workforce, rostering, compliance) within an architecture spanning 38 functional domains.",
    "Produced and consolidated competitor and market research across 15+ NDIS platforms, informing the product’s design blueprint, PRD, and technical positioning.",
  ],
};

const semicolon: ResumeJob = {
  title: "Full Stack JavaScript Developer",
  company: "Semicolon IT Solutions",
  dates: "2021 – April 2026",
  location: "On-site",
  bullets: [
    "Developed and maintained production web applications using Node.js, NestJS, React, and PostgreSQL",
    "Designed RESTful APIs for core business features, improving modularity and system performance",
    "Implemented JWT authentication and Docker + NGINX deployments on Linux",
    "Supported a high-traffic e-commerce backend capable of 1,700+ requests per second",
    "Mentored junior developers while shipping production fixes and new features",
  ],
};

const monitoring: ResumeProject = {
  name: "Server Monitoring Tools",
  stack: "Node.js, Express, TypeScript, SQLite, Docker, PM2, NGINX",
  bullets: [
    "Built a VPS monitor with CLI and REST API for CPU, memory, disk, network, Docker, PM2, and service status",
    "Supports local and SSH remote modes, a web dashboard, API-key auth, and systemd deployment",
  ],
};

const storage: ResumeProject = {
  name: "FileStore",
  stack: "Next.js, NestJS, PostgreSQL, MinIO, Docker",
  bullets: [
    "Built self-hosted file storage with upload, folders, sharing, and authenticated download",
    "Stored objects in S3-compatible MinIO so files sit outside the application server",
  ],
};

const erp: ResumeProject = {
  name: "eCommerce Multi-Store SaaS ERP",
  stack: "Next.js, NestJS, PostgreSQL, Redis, Docker, SSLCOMMERZ",
  bullets: [
    "Designed a multi-tenant SaaS ERP with catalog, inventory, POS, multi-store sync, and subscription billing",
    "Shipped plan limits, storage add-ons, and usage packs (SKUs, orders, staff, locations) from one admin",
  ],
};

export const resumeDocument: ResumeDocument = {
  title: "Full Stack Engineer",
  summary:
    "Full Stack Engineer with 5+ years of experience building multi-tenant SaaS and eCommerce platforms. Currently leading a 4-person team at Astitva Lab Pty Ltd on Cayura, an NDIS disability-care product, using NestJS, Next.js, TypeScript, PostgreSQL (RLS), Prisma, Redis, and Docker Compose. Previously delivered production systems at Semicolon IT Solutions spanning APIs, authentication, and high-traffic commerce.",
  skills: [
    { category: "Languages", items: "TypeScript, JavaScript" },
    {
      category: "Backend",
      items:
        "Node.js, NestJS, Express.js, REST APIs, Prisma, TypeORM, JWT, RBAC",
    },
    { category: "Frontend", items: "React.js, Next.js, Tailwind CSS, Redux" },
    {
      category: "Database",
      items: "PostgreSQL, Redis, MongoDB, MySQL",
    },
    {
      category: "DevOps",
      items:
        "Docker, Docker Compose, NGINX, Caddy, Linux, Git, CI/CD, GitHub Actions",
    },
    { category: "Automation", items: "n8n, MCP, Ollama, API integrations, webhooks" },
  ],
  experience: [astitva, semicolon],
  projects: [monitoring, storage, erp],
};
