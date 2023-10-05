import { projects } from "@/mockData/route";
import Image from "next/image";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

export default function Blogs() {
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

            </div>
          </div>
        );
      })}
    </div>
  );
}
