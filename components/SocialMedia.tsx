import Link from "next/link";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function SocialMedia() {
  return (
    <div className="flex justify-center space-x-6 mt-4">
      <Link
        href="https://www.linkedin.com/in/gowtamkumar/"
        target="_blank"
        rel="noreferrer"
        className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-300 transform hover:scale-110"
      >
        <AiFillLinkedin className="text-2xl" />
      </Link>
      <Link
        href="https://github.com/gowtamkumar"
        target="_blank"
        rel="noreferrer"
        className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300 transform hover:scale-110"
      >
        <AiFillGithub className="text-2xl" />
      </Link>
      <Link
        href="https://www.facebook.com/Gowtamkumar17"
        target="_blank"
        rel="noreferrer"
        className="text-gray-500 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
      >
        <AiFillFacebook className="text-2xl" />
      </Link>
    </div>
  )
}
