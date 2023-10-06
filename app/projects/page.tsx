import { projects } from "@/mockData/route";
import Image from "next/image";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  return (
    <div className="mt-5 md:w-3/5 mx-auto">
      {projects.map((item, idx) => {
        return (
          <div
            className="md:flex dark:bg-slate-900 bg-white border dark:border-none  justify-between items-center rounded-md my-2 py-3 text-center"
            key={idx}
          >
            <div className="md:w-1/4 p-5 flex md:text-start justify-center">
              <Image
                src={item.img}
                width={200}
                height={80}
                alt="Gowtam kumar"
              />
            </div>
            <div className="md:w-3/4 text-center md:text-start">
              <span className="text-2xl dark:text-slate-100">{item.name}</span>
              <article className="text-slate-400">{item.description}</article>
              <div className="flex gap-1 flex-wrap rounded-sm mt-2 md:justify-start justify-center">
                {item.tech.map((item: string, idx: number) => {
                  return (
                    <div className="dark:bg-slate-800 dark:text-slate-400 p-[3px] border dark:border-none" key={idx}>
                      {item}
                    </div>
                  );
                })}
              </div>

              <div className="gap-2 flex my-4 justify-center md:justify-start ">
                <button className="flex items-center gap-1 dark:text-white dark:bg-slate-900 bg-white ring-offset-1 ring-1 hover:bg-slate-400 rounded p-1 bg-opacity-15 backdrop-filter backdrop-blur-sm filter saturate-200 text-primary-200 default-transition default-focus">
                  <span>Source Code</span>
                  <FiExternalLink />
                </button>
                <button className="flex items-center gap-1 dark:text-white dark:bg-slate-900 bg-white ring-offset-1 ring-1 hover:bg-slate-400 rounded p-1 bg-opacity-15 backdrop-filter backdrop-blur-sm filter saturate-200 text-primary-200 default-transition default-focus">
                  <span>Preview</span>
                  <FiExternalLink />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
