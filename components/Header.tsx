"use client";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { PiCircle, PiListDashesFill, PiListDashesLight } from "react-icons/pi";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import Link from "next/link";
import {
  AiOutlineEdit,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineProfile,
} from "react-icons/ai";
import { menu } from "@/mockData/route";

export default function Header() {
  const [darkLight, setDarkLight] = useState<string>("dark");

  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light");
    }
  }, []);

  useEffect(() => {
    const newHtml = document.querySelector("html") as HTMLHtmlElement | null;
    if (localStorage.getItem("theme") === "dark") {
      newHtml?.classList.add("dark");
      setDarkLight("dark");
    } else {
      newHtml?.classList.remove("dark");
      setDarkLight("light");
    }
  }, [darkLight]);

  const handleDarkLight = () => {
    if (localStorage.getItem("theme") === "light") {
      setDarkLight("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setDarkLight("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="flex justify-between">
      <div className="top-16 text-right">
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="dark:text-white dark:bg-slate-900 ring-offset-1 ring-1 hover:bg-slate-400 rounded p-2 bg-opacity-15 backdrop-filter backdrop-blur-sm filter saturate-200 text-primary-200 default-transition default-focus">
            <PiListDashesFill className="text-2xl" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute backdrop-filter-sm dark:bg-slate-900 bg-slate-300 dark:text-white text-black bg-opacity-100 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md border border-gray-500 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {menu.map((item, idx) => {
                return (
                  <div className="px-1 py-1" key={idx}>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href={`${item.url}`}
                          className={`${
                            active
                              ? "hover:bg-slate-400 dark:text-gray-900"
                              : " text-dark dark:text-white"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {active ? item.icon : item.icon}
                          {item.name}
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                );
              })}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <div>
        <button onClick={handleDarkLight} className="text-[22px]">
          {darkLight === "dark" ? (
            <MdOutlineDarkMode className="text-white" />
          ) : (
            <MdOutlineLightMode />
          )}
        </button>
      </div>
    </div>
  );
}
