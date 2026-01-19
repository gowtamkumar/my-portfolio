import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

export default function ResumeHeader() {
  return (
    <header className="mb-4">
      <h1 className="text-2xl font-bold text-gray-900">Gowtam Kumar</h1>
      <p className="text-lg font-semibold">
        Full Stack JavaScript Developer (Node.js, NestJS, ReactJS)
      </p>
      <div className="text-sm text-gray-600 flex flex-wrap gap-x-4 gap-y-1">
        <div className="flex items-center gap-2">
          <FaEnvelope />
          <Link href="mailto:gowtampaul0@gmail.com">gowtampaul0@gmail.com</Link>
        </div>
        <div className="flex items-center gap-2">
          <FaPhone />
          <p>+880 1767-163576</p>
        </div>
        {/* <div className="flex items-center gap-2">
          <p>Bangladesh</p>
        </div> */}
      </div>
      <div className="text-gray-600">
        <div className="flex items-center gap-2">
          <FaLinkedin />
          <Link href="https://www.linkedin.com/in/gowtamkumar">
            linkedin.com/in/gowtamkumar
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <FaGithub />
          <Link href="https://github.com/gowtamkumar">
            github.com/gowtamkumar
          </Link>
        </div>
      </div>
    </header>
  );
}
