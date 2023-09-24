import { projects } from "@/mockData/route";
import Image from "next/image";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  return (
    <div className="mt-5 w-3/4 mx-auto">
      {projects.map((item, idx) => {
        return (
          <div
            className="md:flex bg-slate-900 justify-center rounded-sm gap-2 mt-4"
            key={idx}
          >
            <Image src={item.img} width={300} height={100} alt="Gowtam kumar" />
            <div className="p-1">
              <h2 className="text-white mb-3">{item.name}</h2>
              <article className="text-slate-400">{item.description}</article>

              <div className="flex gap-2 flex-wrap rounded-sm mt-2">
                {item.tech.map((item, idx) => {
                  return (
                    <div className="text-white bg-slate-800 p-1" key={idx}>
                      {item}
                    </div>
                  );
                })}
              </div>

              <div className="gap-2 flex mt-3 justify-items-stretch">
                <button className="bg-slate-900 ring-offset-1 ring-1 hover:bg-slate-400 p-2 flex items-center gap-1 text-white">
                  <span>Source Code</span>
                  <FiExternalLink />
                </button>
                <button className="text-white bg-slate-900 ring-offset-1 ring-1 hover:bg-slate-400 p-2 flex items-center gap-1">
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
