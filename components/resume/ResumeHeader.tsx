import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ResumeHeader() {
  return (
    <header className="mb-4">
      <h1 className="text-4xl font-bold text-gray-900">Gowtam Kumar</h1>
      <p className="text-lg text-sky-600 font-semibold">Javascript Developer</p>
      <div className="mt-2 text-sm text-gray-600 flex flex-wrap gap-x-4 gap-y-1">
        <div className="flex items-center gap-2">
          <FaEnvelope />
          <Link href="mailto:gowtampaul0@gmail.com">
            gowtampaul0@gmail.com
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <FaPhone />
          <p>+880 1234-567890</p>
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt />
          <p>Jashore, Bangladesh</p>
        </div>
        <div className="flex items-center gap-2">
          <FaLinkedin />
          <Link
            className="text-sky-600"
            href="https://www.linkedin.com/in/gowtamkumar"
          >
            linkedin.com/in/gowtamkumar
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <FaGithub />
          <Link
            className="text-sky-600"
            href="https://github.com/gowtamkumar"
          >
            github.com/gowtamkumar
          </Link>
        </div>
      </div>
    </header>
  );
}
