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
  {
    name: "Car Dealer",
    img: "/car-dealer.png",
    sourceCode: "https://github.com/gowtamkumar/car-dealer",
    url: "",
    year: "2023",
    kind: "Marketplace",
    description:
      "A hub for automotive enthusiasts to explore models, share, and engage — Next.js on the front, Nest.js and PostgreSQL behind it.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Ant Design",
      "Node.js",
      "Nest.js",
      "PostgreSQL",
    ],
  },
  {
    name: "E-commerce Leading Page",
    img: "/ecommerce-leanding.png",
    sourceCode: "https://github.com/gowtamkumar",
    url: "",
    year: "2025",
    kind: "Commerce / Payments",
    description:
      "High-performance storefront with product media, multi-currency, Cash on Delivery + SSLCommerz, and live order tracking. Built for real-world checkout, not just a landing mock.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Docker",
      "Nginx",
      "SSLCOMMERZ",
    ],
  },
];
