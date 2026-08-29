import { site } from "./about";
import { skills } from "./mock-data/skill";

type Knowledge = {
  id: string;
  keywords: string[];
  answer: string;
};

const allSkillsFormatted = skills
  .map((group) => `• ${group.name}: ${group.items.join(", ")}`)
  .join("\n");

const getSkillItems = (name: string) =>
  skills.find((s) => s.name.toLowerCase().includes(name.toLowerCase()))?.items.join(", ") || "";

const knowledge: Knowledge[] = [
  {
    id: "who",
    keywords: [
      "who",
      "you",
      "name",
      "gowtam",
      "about",
      "introduce",
      "bio",
      "background",
    ],
    answer: `${site.name} is a ${site.role} based in ${site.location}. ${site.summary}`,
  },
  {
    id: "skills",
    keywords: [
      "skill",
      "skills",
      "technical skill",
      "technical skills",
      "stack",
      "tech",
      "technologies",
      "tools",
      "capabilities",
      "what do you know",
      "what can you do",
    ],
    answer: `Technical Skills by Category:\n${allSkillsFormatted}`,
  },
  {
    id: "languages",
    keywords: ["language", "languages", "javascript", "typescript", "python"],
    answer: `Programming Languages: ${getSkillItems("Languages")}. Primary focus on TypeScript for end-to-end type safety across backend and frontend.`,
  },
  {
    id: "frontend",
    keywords: ["frontend", "ui", "react", "next", "css", "tailwind", "redux"],
    answer: `Frontend Skills: ${getSkillItems("Frontend")}. Specializes in high-performance responsive interfaces with Next.js App Router, Tailwind CSS, and state management.`,
  },
  {
    id: "backend",
    keywords: [
      "backend",
      "api",
      "server",
      "nest",
      "nestjs",
      "node",
      "express",
      "fastapi",
      "prisma",
      "typeorm",
      "websocket",
    ],
    answer: `Backend Skills: ${getSkillItems("Backend")}. Focuses on modular NestJS architectures, RESTful APIs, WebSockets, and type-safe Prisma/TypeORM data access.`,
  },
  {
    id: "database",
    keywords: ["database", "databases", "postgres", "postgresql", "mysql", "mongodb", "redis", "sql", "rls"],
    answer: `Database & Caching: ${getSkillItems("Database")}. Deep experience with PostgreSQL Row-Level Security (RLS) for multi-tenant isolation, and Redis for caching and sessions.`,
  },
  {
    id: "devops",
    keywords: [
      "devops",
      "docker",
      "docker compose",
      "caddy",
      "nginx",
      "linux",
      "ci/cd",
      "github actions",
      "railway",
      "deploy",
      "deployment",
      "server",
      "infrastructure",
    ],
    answer: `DevOps & Infrastructure: ${getSkillItems("DevOps")}. Experienced in Linux VPS management, Docker Compose multi-service stacks, Caddy reverse proxy with automated TLS, and GitHub Actions CI/CD.`,
  },
  {
    id: "ai",
    keywords: [
      "ai",
      "mcp",
      "ollama",
      "automat",
      "agent",
      "agents",
      "workflow",
      "openai",
      "llm",
      "intelligent",
      "model",
    ],
    answer: `AI & Automation: ${getSkillItems("AI")}. Builds local LLM workflows with Ollama, Model Context Protocol (MCP) servers, tool integration pipelines, and automated webhooks.`,
  },
  {
    id: "experience",
    keywords: [
      "experience",
      "job",
      "work",
      "semicolon",
      "career",
      "year",
      "years",
      "company",
      "astitva",
      "cayura",
      "ndis",
    ],
    answer:
      "Currently Full Stack Engineer at Astitva Lab Pty Ltd (Australia, remote, April 2026–present), building Cayura — a multi-tenant NDIS SaaS. He develops NestJS/Next.js features, PostgreSQL with RLS, JWT/RBAC, and Docker Compose + Caddy deploys. Previously Full Stack JavaScript Developer at Semicolon IT Solutions (2021–April 2026).",
  },
  {
    id: "projects",
    keywords: [
      "project",
      "projects",
      "portfolio",
      "ecommerce",
      "chat",
      "monitor",
      "vps",
      "storage",
      "file",
      "minio",
      "erp",
      "saas",
      "multi-store",
      "built",
      "demo",
    ],
    answer:
      "Featured work: Server Monitoring Tools, File Store, eCommerce Multi-Store SaaS ERP, an e-commerce platform, and a real-time chat app. Open the Work / Projects page for details.",
  },
  {
    id: "contact",
    keywords: [
      "contact",
      "email",
      "phone",
      "hire",
      "freelance",
      "available",
      "reach",
      "whatsapp",
    ],
    answer: `${site.availability}. Email ${site.email} or call ${site.phoneDisplay}. WhatsApp and direct inquiry form are available on the Contact page.`,
  },
  {
    id: "resume",
    keywords: ["resume", "cv", "print", "pdf"],
    answer:
      "The Resume page has a standard A4 CV. Open /resume to view, print, or save as PDF.",
  },
];

const greetings = ["hi", "hello", "hey", "yo", "salaam", "salam"];

export function answerAssistant(input: string): string {
  const text = input.toLowerCase().trim();
  if (!text) {
    return "Ask me about Gowtam’s technical skills, AI automation, projects, or how to hire him.";
  }

  if (greetings.some((g) => text === g || text.startsWith(`${g} `))) {
    return `Hey — I’m the on-site assistant for ${site.name}. I can talk about his technical skills, stack, AI work, projects, or how to get in touch.`;
  }

  const scored = knowledge
    .map((item) => ({
      item,
      score: item.keywords.reduce(
        (sum, word) => sum + (text.includes(word) ? 1 : 0),
        0,
      ),
    }))
    .sort((a, b) => b.score - a.score);

  if (scored[0].score === 0) {
    return `I only know what’s on this site. Try “What are your technical skills?”, “Tell me about your backend stack”, or “How do I hire you?” — or email ${site.email}.`;
  }

  return scored[0].item.answer;
}

export const suggestedPrompts = [
  "What are your technical skills?",
  "What AI work do you do?",
  "Tell me about Cayura",
  "Show me the backend stack",
  "How do I hire you?",
];
