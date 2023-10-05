import { projects } from "@/mockData/route";
import Image from "next/image";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  return (
    <div className="mt-5 w-3/5 mx-auto">
      {projects.map((item, idx) => {
        return (
          <div
            className="md:flex bg-slate-900 justify-between items-center rounded-md my-2"
            key={idx}
          >
            <div className="w-1/4 p-5">
              <Image
                src={item.img}
                width={200}
                height={80}
                alt="Gowtam kumar"
              />
            </div>
            <div className="w-3/4">
              <span className="text-white text-2xl">{item.name}</span>
              <article className="text-slate-400">{item.description}</article>
              <div className="flex gap-1 flex-wrap rounded-sm mt-2">
                {item.tech.map((item: string, idx: number) => {
                  return (
                    <div className="text-white bg-slate-800 p-[3px]" key={idx}>
                      {item}
                    </div>
                  );
                })}
              </div>

              <div className="gap-2 flex my-4 justify-items-stretch">
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
