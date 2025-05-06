import {
  AiOutlineEdit,
  AiOutlineFundProjectionScreen,
  AiOutlineGithub,
  AiOutlineHome,
  AiOutlineProfile,
} from "react-icons/ai";



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

