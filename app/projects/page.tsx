import Image from "next/image";
import React from "react";
import image from "../../public/gowtamkumar.jpeg";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  return (
    <div className="flex gap-10 mt-5">
      <div className="bg-white text-black justify-center rounded-sm">
        <Image src={image} width={400} height={400} alt="Gowtam kumar" />
        <article className="p-1">
          Trust Home Clener is cleaner service holder. Project have to auth
          login system and you can get home cleaner service
        </article>
        <div className="gap-2 flex justify-end p-2">
          <button className="bg-sky-500 hover:bg-sky-700 p-2 flex items-center gap-1">
            <span>Source Code</span>
            <FiExternalLink />
          </button>
          <button className="bg-sky-500 hover:bg-sky-700 p-2 flex items-center gap-1">
            <span>Preview</span>
            <FiExternalLink />
          </button>
        </div>
      </div>

      <div className="bg-white text-black justify-center rounded-sm">
        <Image src={image} width={400} height={400} alt="Gowtam kumar" />
        <article className="p-1">
          Trust Home Clener is cleaner service holder. Project have to auth
          login system and you can get home cleaner service
        </article>
        <div className="gap-2 flex justify-end p-2">
          <button className="bg-sky-500 hover:bg-sky-700 p-2 flex items-center gap-1">
            <span>Source Code</span>
            <FiExternalLink />
          </button>
          <button className="bg-sky-500 hover:bg-sky-700 p-2 flex items-center gap-1">
            <span>Preview</span>
            <FiExternalLink />
          </button>
        </div>
      </div>

      <div className="bg-white text-black justify-center rounded-sm">
        <Image src={image} width={400} height={400} alt="Gowtam kumar" />
        <article className="p-1">
          Trust Home Clener is cleaner service holder. Project have to auth
          login system and you can get home cleaner service
        </article>
        <div className="gap-2 flex justify-end p-2">
          <button className="bg-sky-500 hover:bg-sky-700 p-2 flex items-center gap-1">
            <span>Source Code</span>
            <FiExternalLink />
          </button>
          <button className="bg-sky-500 hover:bg-sky-700 p-2 flex items-center gap-1">
            <span>Preview</span>
            <FiExternalLink />
          </button>
        </div>
      </div>
    </div>
  );
}
