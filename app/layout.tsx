import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gowtam Kumar | Portfolio",
  description:
    "Web Development, Web developer, Front-end Developer, Back-end Developer, React Develoepr",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`dark:bg-slate-800`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
