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

const menu = [
  {
    name: "Home",
    url: "/",
    icon: <AiOutlineHome className="mr-2 h-5 w-5" />,
  },
  {
    name: "Projects",
    url: "/projects",
    icon: <AiOutlineFundProjectionScreen className="mr-2 h-5 w-5" />,
  },
  {
    name: "About",
    url: "/about",
    icon: <AiOutlineProfile className="mr-2 h-5 w-5" />,
  },
  {
    name: "Blog",
    url: "/blogs",
    icon: <AiOutlineEdit className="mr-2 h-5 w-5" />,
  },
];

export default function Header() {
  const [dark, setDark] = useState(false);
  return (
    <div className="flex justify-between">
      <div className="top-16 text-right">
        <Menu as="div" className="relative inline-block text-left z-10">
          <Menu.Button className="text-[26px] bg-slate-900 hover:bg-slate-400 inline-flex w-full justify-center rounded-md bg-opacity-40 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-white focus-visible:ring-opacity-75">
            <PiListDashesFill />
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
            <Menu.Items className="absolute backdrop-filter-sm bg-slate-900 bg-opacity-100 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md border border-gray-500 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {menu.map((item, idx) => {
                return (
                  <div className="px-1 py-1" key={idx}>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href={`${item.url}`}
                          className={`${
                            active
                              ? "hover:bg-slate-400 text-gray-900"
                              : " text-white"
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
        <button onClick={() => setDark(!dark)} className="text-[22px]">
          {dark ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
        </button>
      </div>
    </div>
  );
}
