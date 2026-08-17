import type { Metadata } from "next";
import { DM_Sans, IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import AiAssistant from "@/components/AiAssistant";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SiteBackground from "@/components/SiteBackground";
import ThemeScript from "@/components/ThemeScript";
import { site } from "@/lib/site";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description: site.summary,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.headline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-sans antialiased`}
      >
        <ThemeScript />
        <SiteBackground />
        <Header />
        {children}
        <Footer />
        <AiAssistant />
      </body>
    </html>
  );
}
