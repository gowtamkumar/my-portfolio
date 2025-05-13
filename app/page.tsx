"use client";
import Header from "@/components/Header";
import { menu } from "@/lib/mock-data/menu";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-4">
        <section
          className="flex items-center justify-center"
          style={{ height: "85vh" }}
        >
          <div className="text-center">
            <h1 className="text-6xl text-black dark:text-white">
              Hey 👋 I,m Gowtam,
            </h1>
            <p className="my-4 text-[40px] dark:text-white">
              a
              <span className="text-[40px] p-1 m-4 bg-opacity-100 backdrop-filter backdrop-blur-sm filter saturate-200 text-primary-200 rounded-2xl default-transition default-focus">
                <Typewriter
                  words={["JavaScript Developer", "Web Developer"]}
                  loop={Infinity}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </p>
            {/* <p className="mt-4 dark:text-slate-400">
            I’m a Javascript Developer & Web developer
          </p> */}
            {/* 
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
          </div> */}
          </div>
        </section>
      </main>
    </>
  );
}
