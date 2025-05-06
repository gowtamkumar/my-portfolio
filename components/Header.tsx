"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { menu } from "@/lib/mock-data/menu";

export default function Header() {
  const [darkLight, setDarkLight] = useState<string>("dark");

  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "dark");
    }
  }, []);

  useEffect(() => {
    const html = document.querySelector("html");
    if (localStorage.getItem("theme") === "dark") {
      html?.classList.add("dark");
      setDarkLight("dark");
    } else {
      html?.classList.remove("dark");
      setDarkLight("light");
    }
  }, [darkLight]);

  const handleDarkLight = () => {
    if (localStorage.getItem("theme") === "light") {
      setDarkLight("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setDarkLight("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="flex justify-between w-full mb-5  items-center px-6 py-4 bg-slate-200 dark:bg-slate-800 border-b-[1px]">
      {/* Horizontal Menu */}
      <nav className="flex gap-6">
        {menu.map((item, idx) => (
          <Link
            key={idx}
            href={item.url}
            className="flex items-center gap-1 text-sm text-black dark:text-white hover:text-blue-500 transition"
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Theme Toggle */}
      <button onClick={handleDarkLight}>
        {darkLight === "dark" ? (
          <MdOutlineDarkMode className="text-white text-[25px]" />
        ) : (
          <MdOutlineLightMode className="text-black text-[25px]" />
        )}
      </button>
    </header>
  );
}
