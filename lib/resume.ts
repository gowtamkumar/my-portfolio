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
  portfolio: "my-portfolio-six-pi-19.vercel.app",
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
    "Multi-tenancy & ERP: Architected a multi-tenant retail SaaS ERP platform with secure tenant data isolation, centralizing multi-branch operations and catalog distribution",
    "Warehouse Inventory: Engineered real-time multi-location warehouse stock tracking with automated stock movements, transfer auditing, and low-stock threshold alerts",
    "Point of Sale (POS): Built an integrated retail POS checkout terminal for physical branches featuring instant barcode scanning and live inventory sync",
    "Subscription Billing & Usage Quotas: Designed tiered SaaS subscription plans with automated renewals and dynamic quota enforcement (SKUs, orders, staff seats, locations)",
    "Payment Integration: Implemented end-to-end SSLCOMMERZ payment gateway processing with instant IPN webhook verification and automated subscription provisioning",
  ],
};

const inventory: ResumeProject = {
  name: "Enterprise Inventory Management System",
  stack: "React.js, NestJS, TypeScript, PostgreSQL, TypeORM, Docker, Redux Toolkit",
  url: "https://inventory.semicolonit.com/",
  bullets: [
    "Enterprise Architecture: Architected a modular full-stack inventory platform using NestJS, React, and PostgreSQL with TypeORM, supporting multi-branch retail and central warehouse operations",
    "Stock & Warehouse Tracking: Engineered multi-warehouse inventory tracking with real-time stock adjustments, transfer auditing, automated batch/unit tracking, and low-stock threshold alerts",
    "Point of Sale & Billing: Developed an integrated POS checkout terminal featuring instant barcode scanning, flexible tax/discount calculations, order invoicing, and thermal receipt printing",
    "Accounts & Financial Reporting: Implemented double-entry financial tracking for supplier/customer dues, income/expense ledgers, bank transactions, and automated profit/loss valuation reports",
    "Data Integrity & DevOps: Enforced ACID-compliant database transactions using TypeORM transactional decorators, structured Winston audit logging, and automated Docker database backup routines",
  ],
};

export const resumeDocument: ResumeDocument = {
  title: "Full Stack Developer",
  summary:
    "Full Stack Developer with 5+ years of production experience architecting scalable multi-tenant SaaS platforms, high-throughput eCommerce engines, and distributed real-time systems. Expert in TypeScript, NestJS, Next.js, PostgreSQL (RLS), Redis, and Dockerized Linux infrastructure. Proven track record in designing domain-driven backend services, robust RBAC/security layers, and responsive web applications with end-to-end DevOps automation.",
  experience: [astitva, semicolon],
  projects: [erp, inventory],
};
