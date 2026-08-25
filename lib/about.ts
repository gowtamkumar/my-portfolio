export const site = {
  name: "Gowtam Kumar",
  shortName: "GK",
  role: "Full Stack Engineer",
  headline: "I build intelligent web systems.",
  summary:
    "Full Stack Engineer with 5+ years shipping multi-tenant SaaS and e-commerce. Currently leading Cayura at Astitva Lab Pty Ltd — NestJS, Next.js, PostgreSQL, Prisma, and Docker.",
  years: "5+",
  location: "Bangladesh",
  availability: "Open for freelance & full-time",
  email: "gowtampaul0@gmail.com",
  phoneDisplay: "+880 1767-163576",
  phoneTel: "+8801767163576",
  whatsapp: "8801767163576",
  socials: {
    github: "https://github.com/gowtamkumar",
    linkedin: "https://www.linkedin.com/in/gowtamkumar/",
    facebook: "https://www.facebook.com/Gowtamkumar17",
  },
  focus: ["NestJS", "Next.js", "PostgreSQL", "MCP", "Ollama"],
} as const;

export const nav = [
  { name: "Work", url: "/projects" },
  { name: "About", url: "/about" },
  { name: "Resume", url: "/resume" },
  { name: "Contact", url: "/contact" },
] as const;
