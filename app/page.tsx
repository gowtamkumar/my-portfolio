"use client";
import { menu } from "@/mockData/route";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion-3d"

export default function Home() {
  return (
    <main className="p-4">
      <section
        className="flex items-center justify-center"
        style={{ height: "85vh" }}
      >
        <div className="text-center">
          <h1 className="text-6xl text-black dark:text-white">
            Hey 👋 I,m Gowtam,
          </h1>
          <p className="text-6xl my-4 dark:text-white">
            a
            <span className="dark:bg-slate-900 bg-slate-400 p-1 m-4 bg-opacity-100 backdrop-filter backdrop-blur-sm filter saturate-200 text-primary-200 rounded-2xl default-transition default-focus">
              <Typewriter
                words={["JavaScript Developer", "Mobile App Developer"]}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
          <p className="mt-4 dark:text-slate-400">
            I am a Javascript Developer & Mobile Application developer
          </p>
          <div className="md:flex mx-auto mt-2 items-center justify-center gap-2">
            {menu.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="dark:text-white dark:bg-slate-900 ring-offset-1 ring-1 hover:bg-slate-400 rounded p-2  bg-opacity-15 backdrop-filter backdrop-blur-sm filter saturate-200 text-primary-200  default-transition default-focus mt-5"
                >
                  <Link href={`${item.url}`}>
                    <span className="flex items-center justify-center">
                      {item.icon} {item.name}
                    </span>
                  </Link>
                </div>
              );
            })}

          </div>
        </div>
      </section>
    </main>
  );
}
