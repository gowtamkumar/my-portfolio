"use client";
import { menu } from "@/lib/mock-data/menu";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function Header() {
  const [darkLight, setDarkLight] = useState<string>("dark");
  const pathname = usePathname();

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "dark";
    setDarkLight(theme);
  }, []);

  useEffect(() => {
    const html = document.querySelector("html");
    if (darkLight === "dark") {
      html?.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html?.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkLight]);

  const handleDarkLight = () => {
    setDarkLight(prev => prev === "light" ? "dark" : "light");
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="relative flex items-center gap-8 px-3 py-2 bg-gray-800/50 dark:bg-gray-900/50 backdrop-blur-lg border border-white/10 rounded-full shadow-2xl">
        <Link href="/" className="text-white text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 w-10 h-10 flex items-center justify-center rounded-full">
          GK
        </Link>
        <nav className="flex items-center">
          {menu.map((item) => {
            const isActive = pathname === item.url;
            return (
              <Link
                key={item.name}
                href={item.url}
                className={`relative flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors duration-300 ${isActive ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white'}`}>
                {item.icon}
                <span className="hidden sm:inline">{item.name}</span>
                {isActive && (
                  <div className="absolute inset-0 bg-gray-300/50 dark:bg-white/10 rounded-full -z-10" />
                )}
              </Link>
            );
          })}
        </nav>
        <button
          onClick={handleDarkLight}
          className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-yellow-400 dark:text-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white">
          {darkLight === "dark" ? <MdOutlineDarkMode className="text-xl" /> : <MdOutlineLightMode className="text-xl" />}
        </button>
      </div>
    </header>
  );
}
