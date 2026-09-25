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
      "Lightweight VPS infrastructure and observability tool providing dual-mode telemetry (local agent or remote SSH). Streams real-time metrics for CPU, memory, disk I/O, network bandwidth, Docker containers, PM2 processes, and system service health via authenticated REST APIs and an interactive dashboard.",
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
      "Enterprise-grade cloud storage and asset management platform decoupling application servers from S3-compatible MinIO object storage. Features high-speed chunked uploads, automated image compression via Sharp, granular folder access permissions, and secure, time-expiring shareable links.",
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
      "Multi-tenant retail ERP and commerce ecosystem engineered for omnichannel branch management. Synchronizes real-time inventory across warehouses and physical outlets, integrating Point of Sale (POS), tiered SaaS subscriptions, dynamic resource quotas (SKUs, staff seats, locations), and automated payment gateways.",
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
      "High-throughput full-stack commerce engine featuring multi-vendor management, dynamic variant catalogs, and real-time order tracking. Built with Next.js, Express, and PostgreSQL, incorporating flexible promotional discount engines, SSLCOMMERZ payment processing, and containerized Docker deployments behind NGINX.",
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
      "Scalable real-time communication platform supporting direct messaging, group channels, and WebRTC-powered peer-to-peer audio/video calls with screen sharing. Architected with Next.js, NestJS, Socket.IO, and Redis pub/sub for low-latency state synchronization with persistent PostgreSQL storage.",
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
