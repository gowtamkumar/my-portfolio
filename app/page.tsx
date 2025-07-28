"use client";
import Header from "@/components/Header";
import Link from "next/link";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <>
      <Header />
      <main
        className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4"
      // style={{
      //   backgroundImage: "url(/pattern-dark.20747baf.svg)",
      //   backgroundSize: "cover",
      //   backgroundAttachment: "fixed",
      // }}
      >
        <div className="text-center z-10 -mt-20">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Hey 👋 I'm Gowtam,
          </h1>
          <div className="my-6 text-3xl md:text-5xl font-semibold text-blue-600 dark:text-blue-400 h-20 md:h-24">
            a{" "}
            <Typewriter
              words={["JavaScript Developer", "Full-Stack Engineer", "Web Developer", "Problem Solver"]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10">
            I specialize in building exceptional, high-quality websites and applications.
            Currently exploring the world of AI and building cool things with it.
          </p>
          <div className="flex justify-center gap-4 mb-10">
            <Link
              href="/projects"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              View My Work
            </Link>
            <Link
              href="/about"
              className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              About Me
            </Link>
          </div>
          <div className="flex justify-center space-x-6">
            <Link href="https://github.com/gowtamkumar" target="_blank" rel="noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300 transform hover:scale-125">
              <AiFillGithub className="text-4xl" />
            </Link>
            <Link href="https://www.linkedin.com/in/gowtamkumar/" target="_blank" rel="noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-300 transform hover:scale-125">
              <AiFillLinkedin className="text-4xl" />
            </Link>
            <Link href="https://www.facebook.com/Gowtamkumar17" target="_blank" rel="noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-600 transition-colors duration-300 transform hover:scale-125">
              <AiFillFacebook className="text-4xl" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
