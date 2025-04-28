import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <header className="mb-6">
      <h1 className="text-4xl font-bold text-gray-900">Gowtam Kumar</h1>
      <p className="text-lg text-sky-600 font-semibold">Javascript Developer</p>
      <p className="text-sm text-gray-600 flex">
        📧 {" "}
        <Link href="mailto:gowtampaul0@gmail.com">gowtampaul0@gmail.com
        </Link> | <div className="flex gap-2 ms-1">
          <Link href="https://www.linkedin.com/in/gowtamkumar">
            <FaLinkedin />
          </Link>
          <Link href="https://github.com/gowtamkumar">
            <FaGithub />
          </Link>
        </div>
        📍 Jashore, Bangladesh
      </p>

    </header>
  );
}
