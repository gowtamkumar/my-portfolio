export type Project = {
  name: string;
  img: string;
  sourceCode: string;
  url: string;
  description: string;
  tech: string[];
  year: string;
  kind: string;
};

export const projects: Project[] = [
  {
    name: "Server Monitoring Tools",
    img: "/server-monitoring-tools.png",
    sourceCode: "https://github.com/gowtamkumar/server-monitoring-tools",
    url: "",
    year: "2026",
    kind: "DevOps / Observability",
    description:
      "VPS monitoring with CLI and REST API: CPU, memory, disk, network, Docker containers, PM2, and service health (NGINX, PHP-FPM). Runs locally or over SSH, with a web dashboard and systemd deploy.",
    tech: [
      "TypeScript",
      "Node.js",
      "Express",
      "SQLite",
      "Docker",
      "PM2",
      "NGINX",
      "SSH",
      "systemd",
    ],
  },
  {
    name: "FileStore",
    img: "/file-storage-application.png",
    sourceCode: "https://github.com/gowtamkumar/file-storage-application",
    url: "",
    year: "2026",
    kind: "Storage / SaaS",
    description:
      "Secure file storage for modern teams — fast uploads, encryption, sharing, and 64MB files with auto compression. Full-stack app with object storage behind the API.",
    tech: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "MinIO",
      "Docker",
      "NGINX",
    ],
  },
  {
    name: "eCommerce Multi-Store SaaS ERP",
    img: "/ecommerce-multi-store-saas-erp.png",
    sourceCode: "https://github.com/gowtamkumar/eCommerce-multi-store-saas-erp",
    url: "",
    year: "2026",
    kind: "SaaS / ERP",
    description:
      "Multi-tenant commerce ERP with catalog, inventory, POS, multi-store sync, and subscription billing. Plans, add-ons, and usage limits (SKUs, orders, staff, locations) from one admin.",
    tech: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Docker",
      "NGINX",
      "SSLCOMMERZ",
    ],
  },
  {
    name: "E-commerce Platform",
    img: "/ecommerce-leanding.png",
    sourceCode: "https://github.com/gowtamkumar/ecommerce-application",
    url: "",
    year: "2024",
    kind: "SaaS / Commerce",
    description:
      "An advanced, scalable e-commerce platform with seller dashboards, discounts, reviews, real-time order tracking, and SSLCOMMERZ payments. Containerized with Docker and served behind Nginx.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Redux",
      "Node.js",
      "Express.js",
      "TypeORM",
      "PostgreSQL",
      "Docker",
      "Nginx",
      "SSLCOMMERZ",
    ],
  },
  {
    name: "Chat Application",
    img: "/chat-application.png",
    sourceCode: "https://github.com/gowtamkumar/chat-application",
    url: "",
    year: "2024",
    kind: "Realtime",
    description:
      "One-to-one and group messaging with media, reactions, presence, and typing indicators over WebSockets. Persistent conversations with Docker + Nginx production setup.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Redux",
      "Node.js",
      "NestJS",
      "TypeORM",
      "PostgreSQL",
      "Docker",
      "Nginx",
      "Socket.IO",
    ],
  },
];
