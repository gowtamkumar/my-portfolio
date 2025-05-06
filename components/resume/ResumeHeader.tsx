import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ResumeHeader() {
  return (
    <header>
      <h1 className="text-4xl font-bold text-gray-900">Gowtam Kumar</h1>
      <p className="text-lg text-sky-600 font-semibold">Javascript Developer</p>
      <div className="text-sm text-gray-600 md:flex items-center">
        <div className="flex items-center gap-1">
          <p><Link href="mailto:gowtampaul0@gmail.com">📧 gowtampaul0@gmail.com</Link>|</p>{" "}
          <Link href="https://www.linkedin.com/in/gowtamkumar">
            <FaLinkedin />
          </Link>
          <Link href="https://github.com/gowtamkumar">
            <FaGithub />
          </Link>
        </div>
        <p className="text-sm">
          📍 Jashore, Bangladesh
        </p>
      </div>
    </header>
  );
}
