import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        ink: {
          DEFAULT: "#07080c",
          50: "#f3f4f8",
          100: "#e6e8ef",
          800: "#12141c",
          900: "#0b0c11",
        },
        signal: {
          DEFAULT: "#5eead4",
          dim: "#14b8a6",
        },
        pulse: {
          DEFAULT: "#a78bfa",
        },
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(94, 234, 212, 0.45)",
      },
      keyframes: {
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 28s linear infinite",
        marquee: "marquee 28s linear infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

export default config;
