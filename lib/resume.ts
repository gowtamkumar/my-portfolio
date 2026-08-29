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
    "Building Cayura — a multi-tenant SaaS platform tailored for the Australian NDIS (National Disability Insurance Scheme) disability-care sector, contributing across backend architecture, frontend applications, and deployment workflows.",
  bullets: [
    "Engineered database-level multi-tenant isolation using PostgreSQL Row-Level Security (RLS) with per-request organization context, ensuring strict cross-tenant data separation.",
    "Architected and shipped modular full-stack features using NestJS, Next.js, and TypeScript with Prisma ORM and Redis caching, spanning 38 domain-driven modules (participants, workforce rostering, compliance).",
    "Implemented defense-in-depth authentication with JWT access/refresh token rotation, NestJS route guards, and granular Role-Based Access Control (RBAC) aligned with PostgreSQL RLS policies.",
    "Orchestrated Linux server infrastructure and continuous releases using Docker Compose, Git, and Caddy reverse proxy with automated SSL/TLS provisioning.",
    "Conducted comprehensive competitive and market analysis across 15+ NDIS platforms, translating business requirements into technical blueprints and PRDs.",
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
  name: "File Store",
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
    "Full Stack Engineer with 5+ years of experience building multi-tenant SaaS and eCommerce platforms. Currently engineering Cayura at Astitva Lab Pty Ltd (NDIS disability-care platform) using NestJS, Next.js, TypeScript, PostgreSQL (RLS), Prisma, Redis, and Docker Compose. Previously delivered production systems at Semicolon IT Solutions spanning APIs, authentication, and high-traffic commerce.",
  experience: [astitva, semicolon],
  projects: [monitoring, storage, erp],
};
