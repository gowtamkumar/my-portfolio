/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import image from "../../public/gowtamkumar.jpeg";
import Link from "next/link";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { skills } from "@/lib/mock-data/skill";

export default function About() {
  return (
    <section
      className="md:flex md:w-3/5 p-3 md:m-0 md:mx-auto items-center "
      style={{ height: "88vh" }}
    >
      <div className="md:w-1/5 text-center">
        <Image src={image} placeholder="blur" alt="Gowtam kumar" />
        <div className="flex gap-2 mt-3 items-center justify-around">
          <Link
            href="https://www.linkedin.com/in/gowtamkumar/"
            className="bg-slate-900 hover:bg-slate-400 p-2 text-white"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="text-[22px]" />
          </Link>
          <Link
            href="https://github.com/gowtamkumar"
            className="bg-slate-900 hover:bg-slate-400 p-2 text-white"
            target="blank"
          >
            <AiFillGithub className="text-[22px]" />
          </Link>
          <Link
            href="https://www.facebook.com/Gowtamkumar17"
            className="bg-slate-900 hover:bg-slate-400 p-2 text-white"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillFacebook className="text-[22px]" />
          </Link>
        </div>
        <div className="bg-slate-900 dark:text-slate-400 text-white rounded-lg mt-3">
          <Link href={"/resume"} className="p-2">
            Resume
          </Link>
          {/* <Link
            href="/Gowtam-kumar-(JavaScript developer).pdf"
            download={true}
            target="_blank"
          >
            Download CV
          </Link> */}
        </div>
      </div>

      <div className="md:w-4/5 md:px-3 overflow-auto">
        <h2 className="text-3xl font-bold mb-3 text-slate-400">About Me</h2>

        <h5 className="text-slate-400 font-bold">
          {" "}
          Hey 👋 I,m Gowtam Kumar, JavaScript Developer
        </h5>

        <article>
          <p className="justify-center text-slate-400">
            Hello! I'm a passionate JavaScript developer with experience in
            building web applications. I enjoy solving problems and creating
            efficient, scalable, and user-friendly solutions.
          </p>
          <p className="text-slate-400">
            My expertise includes React, Node.js, and other modern technologies.
            I'm always eager to learn new things and stay updated with the
            latest trends in web development.
          </p>
          <p className="text-slate-400 font-bold">
            Feel free contract with me, E-mail:
            <Link href="mailto:gowtampaul0@gmail.com">
              gowtampaul0@gmail.com
            </Link>
          </p>

          <div className="py-3">
            {skills.map((item, idx) => {
              return (
                <div key={idx} className="gap-1 text-slate-400 ">
                  <strong>{item.name}</strong>:{" "}
                  <span className="me-2 text-slate-400">
                    {item.skills + "," + " "}
                  </span>
                </div>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
}
