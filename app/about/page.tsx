/* eslint-disable react/no-unescaped-entities */
import Header from "@/components/Header";
import { skills } from "@/lib/mock-data/skill";
import Image from "next/image";
import Link from "next/link";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaCode, FaPaintBrush, FaServer } from "react-icons/fa";
import image from "../../public/gowtamkumar.jpeg";

// Reusable Card Component
const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white dark:bg-gray-800 dark:bg-opacity-60 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-blue-500 hover:shadow-blue-500/20 ${className}`}>
    {children}
  </div>
);

// Skill Badge Component
const SkillBadge = ({ skill }: { skill: string }) => (
  <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium px-4 py-2 rounded-full shadow-md transition-all duration-300 hover:bg-blue-500 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white hover:scale-110 hover:shadow-lg cursor-default">
    {skill}
  </span>
);

export default function About() {
  const whatIDo = [
    { icon: <FaCode className="text-4xl text-blue-500" />, title: "Frontend Development", description: "Crafting beautiful and responsive user interfaces with modern technologies like React and Next.js." },
    { icon: <FaServer className="text-4xl text-green-500" />, title: "Backend Development", description: "Building robust and scalable server-side applications with Node.js, Express, and PostgreSQL." },
    { icon: <FaPaintBrush className="text-4xl text-purple-500" />, title: "UI/UX Design", description: "Designing intuitive and engaging user experiences with a focus on clean aesthetics and usability." },
  ];

  return (
    <>
      <Header />
      <div
        className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans overflow-x-hidden pt-24"
      // style={{
      //   backgroundImage: "url(/pattern-dark.20747baf.svg)",
      //   backgroundSize: "cover",
      //   backgroundAttachment: "fixed",
      // }}
      >
        <main className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left Column: Sticky Profile Card */}
            <aside className="lg:w-1/3 lg:sticky top-24 self-start">
              <Card className="text-center">
                <div className="relative w-40 h-40 mx-auto mb-6 ring-4 ring-offset-4 ring-offset-white dark:ring-offset-gray-800 ring-blue-500 rounded-full">
                  <Image
                    src={image}
                    alt="Gowtam Kumar"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                    placeholder="blur"
                  />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Gowtam Kumar</h1>
                <p className="text-xl text-blue-500 dark:text-blue-400 mt-2">
                  JavaScript Developer
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-5 text-sm max-w-xs mx-auto">
                  Crafting elegant and efficient solutions in the world of web
                  development.
                </p>
                <div className="flex justify-center space-x-6 mt-8">
                  <Link href="https://www.linkedin.com/in/gowtamkumar/" target="_blank" rel="noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-300 transform hover:scale-110">
                    <AiFillLinkedin className="text-3xl" />
                  </Link>
                  <Link href="https://github.com/gowtamkumar" target="_blank" rel="noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300 transform hover:scale-110">
                    <AiFillGithub className="text-3xl" />
                  </Link>
                  <Link href="https://www.facebook.com/Gowtamkumar17" target="_blank" rel="noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-600 transition-colors duration-300 transform hover:scale-110">
                    <AiFillFacebook className="text-3xl" />
                  </Link>
                </div>
                <div className="mt-10">
                  <Link href="/resume" className="block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg">
                    View Resume
                  </Link>
                </div>
              </Card>
            </aside>

            {/* Right Column: Content */}
            <div className="lg:w-2/3">
              <div className="space-y-12">
                {/* About Me Card */}
                <Card>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-5 border-b-2 border-blue-500 pb-3 inline-block">
                    About Me
                  </h2>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                    <p>
                      Hello! I'm a passionate JavaScript developer with a strong
                      focus on building modern, scalable, and user-friendly web
                      applications. I thrive on solving complex problems and
                      turning ideas into reality through clean and efficient code.
                    </p>
                    <p>
                      My expertise lies in the MERN stack (MongoDB, Express.js,
                      React, Node.js), and I'm always excited to explore new
                      technologies and stay ahead of the curve in the ever-evolving
                      world of web development.
                    </p>
                    <p>
                      Feel free to connect with me or explore my work. You can
                      reach me at:{" "}
                      <Link href="mailto:gowtampaul0@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
                        gowtampaul0@gmail.com
                      </Link>
                    </p>
                  </div>
                </Card>

                {/* What I Do Card */}
                <Card>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b-2 border-blue-500 pb-3 inline-block">
                    What I Do
                  </h2>
                  <div className="space-y-8">
                    {whatIDo.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-6">
                        <div className="flex-shrink-0 mt-1">{item.icon}</div>
                        <div>
                          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400 mt-1 text-lg">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* My Skills Card */}
                <Card>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b-2 border-blue-500 pb-3 inline-block">
                    My Skills
                  </h2>
                  <div className="space-y-8">
                    {skills.map((skillSet, idx) => (
                      <div key={idx}>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                          {skillSet.name}
                        </h3>
                        <div className="flex flex-wrap gap-4">
                          {skillSet.skills.map((skill, sIdx) => (
                            <SkillBadge key={sIdx} skill={skill} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
