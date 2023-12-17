import {
  AiOutlineEdit,
  AiOutlineFundProjectionScreen,
  AiOutlineGithub,
  AiOutlineHome,
  AiOutlineProfile,
} from "react-icons/ai";

import image from "../public/gowtamkumar.jpeg";

export const menu = [
  {
    name: "Home",
    url: "/",
    icon: <AiOutlineHome className="me-2 h-5 w-5 text-2xl" />,
  },
  {
    name: "Projects",
    url: "/projects",
    icon: <AiOutlineFundProjectionScreen className="me-2 h-5 w-5 text-2xl" />,
  },
  {
    name: "About",
    url: "/about",
    icon: <AiOutlineProfile className="me-2 h-5 w-5 text-2xl" />,
  },
  // {
  //   name: "Blog",
  //   url: "/blogs",
  //   icon: <AiOutlineEdit className="me-2 h-5 w-5 text-2xl" />,
  // },
  // {
  //   name: "GitHub",
  //   url: "https://github.com/Gowtamkumar",
  //   icon: <AiOutlineGithub className="me-2 h-5 w-5 text-2xl" />,
  // },
];

export const projects = [
  {
    name: "Project Heading",
    img: image,
    sourceCode: "",
    url: "",
    description:
      "Trust Home Clener is cleaner service holder.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Next.js",
      "Node.js",
      "PostgreSQL",
    ],
  },
  {
    name: "Project Heading 1",
    img: image,
    sourceCode: "",
    url: "",
    description:
      "Trust Home Clener is cleaner service holder.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Next.js",
      "Node.js",
      "PostgreSQL",
    ],
  },
  {
    name: "Project Heading 3",
    img: image,
    sourceCode: "",
    url: "",
    description:
      "Trust Home Clener is cleaner service holder.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "Node.js",
      "PostgreSQL",
    ],
  },
];
