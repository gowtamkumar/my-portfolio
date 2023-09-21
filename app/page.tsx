/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import {
  AiOutlineEdit,
  AiOutlineFundProjectionScreen,
  AiOutlineGithub,
  AiOutlineHome,
  AiOutlineProfile,
} from "react-icons/ai";
export default function Home() {
  return (
    <main className="flex items-center justify-center bg-slate-800 mx-auto h-screen p-3">
      <div className="text-center">
        <h1 className="text-6xl">
          Hey 👋 I'm Gowtam,
          {/* <br /> */}
          <br />
        </h1>
        <p className="text-6xl my-4">
          a
          <span className="bg-purple-900 p-1 m-4 bg-opacity-15 backdrop-filter backdrop-blur-sm filter saturate-200 text-primary-200 rounded-2xl default-transition default-focus">
            developer
          </span>
        </p>
        <p className="mt-4">
          I am a Javascript Developer & Mobile Application developer
        </p>
        <div className="md:flex mx-auto mt-2 items-center justify-around gap-2">
          <div className="bg-purple-900  ring-offset-2 ring-2 rounded p-2  bg-opacity-15 backdrop-filter backdrop-blur-sm filter saturate-200 text-primary-200  default-transition default-focus mt-5">
            <Link href="/">
              <span className="flex items-center justify-center gap-1">
                <AiOutlineHome /> Home
              </span>
            </Link>
          </div>
          <div className="bg-purple-900 p-2 ring-offset-2 ring-2 rounded  bg-opacity-15 backdrop-filter backdrop-blur-sm filter saturate-200 text-primary-200  default-transition default-focus mt-5">
            <Link href="/projects">
              <span className="flex items-center justify-center gap-1">
                <AiOutlineFundProjectionScreen /> Projects
              </span>
            </Link>
          </div>
          <div className="bg-purple-900 p-2 ring-offset-2 ring-2 rounded   bg-opacity-15 backdrop-filter backdrop-blur-sm filter saturate-200 text-primary-200  default-transition default-focus mt-5">
            <Link href="/about">
              <span className="flex items-center justify-center gap-1">
                <AiOutlineProfile /> About
              </span>
            </Link>
          </div>
          <div className="bg-purple-900 p-2 ring-offset-2 ring-2 rounded  bg-opacity-15 backdrop-filter backdrop-blur-sm filter saturate-200 text-primary-200  default-transition default-focus mt-5">
            <Link href="/blogs">
              <span className="flex items-center justify-center gap-1">
                <AiOutlineEdit /> Blog
              </span>
            </Link>
          </div>
          <div className="bg-purple-900 p-2 ring-offset-2 ring-2 rounded   bg-opacity-15 backdrop-filter backdrop-blur-sm filter saturate-200 text-primary-200  default-transition default-focus mt-5">
            <Link href="https://github.com/Gowtamkumar">
              <span className="flex items-center justify-center gap-1">
                <AiOutlineGithub /> GitHub
              </span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
