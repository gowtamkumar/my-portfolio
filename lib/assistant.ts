import { site } from "./site";

type Knowledge = {
  id: string;
  keywords: string[];
  answer: string;
};

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
    answer: `${site.name} is an ${site.role} based in ${site.location}. ${site.summary}`,
  },
  {
    id: "stack",
    keywords: [
      "stack",
      "skill",
      "tech",
      "language",
      "framework",
      "node",
      "nest",
      "react",
      "next",
      "postgres",
      "docker",
    ],
    answer:
      "Core stack: TypeScript, Node.js, NestJS, Next.js, PostgreSQL (including Row-Level Security), Prisma, TypeORM, Redis, Docker, Docker Compose, NGINX, Caddy, CI/CD, GitHub Actions, and Linux. Also React, JWT/RBAC, n8n, MCP, and Ollama.",
  },
  {
    id: "ai",
    keywords: [
      "ai",
      "n8n",
      "mcp",
      "ollama",
      "automat",
      "agent",
      "workflow",
      "openai",
      "llm",
      "intelligent",
    ],
    answer:
      "I build AI automation with n8n, MCP, and Ollama — local models, tool servers, API integrations, and webhook pipelines. I am currently exploring applied AI on top of production NestJS and Next.js systems.",
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
      "company",
      "astitva",
      "cayura",
      "ndis",
      "lead",
      "team",
    ],
    answer:
      "Currently Full Stack Engineer at Astitva Lab Pty Ltd (Australia, remote, April 2026–present), building Cayura — a multi-tenant NDIS SaaS. He leads a 4-person team and owns NestJS/Next.js features, PostgreSQL, JWT/RBAC, and Docker Compose + Caddy deploys. Previously Full Stack JavaScript Developer at Semicolon IT Solutions (2021–April 2026).",
  },
  {
    id: "projects",
    keywords: [
      "project",
      "portfolio",
      "ecommerce",
      "chat",
      "car",
      "work",
      "built",
      "demo",
    ],
    answer:
      "Featured work: a full e-commerce platform (Next.js, NestJS, PostgreSQL, SSLCOMMERZ), a real-time chat app (Socket.IO), an inventory system, a car-dealer hub, and an e-commerce landing with payments and order tracking. Open the Work page for details.",
  },
  {
    id: "backend",
    keywords: ["backend", "api", "database", "auth", "server"],
    answer:
      "Backend focus: NestJS APIs, PostgreSQL with Row-Level Security for multi-tenant isolation, Prisma, Redis, JWT/RBAC, and production ops with Docker Compose and Caddy.",
  },
  {
    id: "frontend",
    keywords: ["frontend", "ui", "react", "next", "css", "tailwind"],
    answer:
      "Frontend focus: React and Next.js with TypeScript, Tailwind, Redux/Context, responsive layouts, and API integration — including real-time UI over WebSockets.",
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
    answer: `${site.availability}. Email ${site.email} or call ${site.phoneDisplay}. GitHub and LinkedIn are linked in the header.`,
  },
  {
    id: "resume",
    keywords: ["resume", "cv", "pdf", "download"],
    answer:
      "The Resume page has Full Stack and Backend versions, each with a PDF download. Pick the target role before you export.",
  },
];

const greetings = ["hi", "hello", "hey", "yo", "salaam", "salam"];

export function answerAssistant(input: string): string {
  const text = input.toLowerCase().trim();
  if (!text) {
    return "Ask me about Gowtam’s stack, AI automation, projects, or how to hire him.";
  }

  if (greetings.some((g) => text === g || text.startsWith(`${g} `))) {
    return `Hey — I’m the on-site assistant for ${site.name}. I can talk about his stack, AI/n8n work, projects, or how to get in touch.`;
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
    return `I only know what’s on this site. Try “What is your stack?”, “Tell me about n8n”, or “How do I hire you?” — or email ${site.email}.`;
  }

  return scored[0].item.answer;
}

export const suggestedPrompts = [
  "Who is Gowtam?",
  "What AI work do you do?",
  "Show me the stack",
  "How do I hire you?",
];
