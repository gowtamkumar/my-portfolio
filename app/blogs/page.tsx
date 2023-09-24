import Image from "next/image";
import React from "react";
import image from "../../public/gowtamkumar.jpeg";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="mt-5 w-3/4 mx-auto">
      <div className="md:flex bg-white text-black justify-center rounded-sm gap-2 mt-4 ">
        <Image src={image} width={300} height={100} alt="Gowtam kumar" />
        <div className=" p-1 content-between ">
          <article>
            <h6>Heading 1</h6>
            Trust Home Clener is cleaner service holder. Project have to auth
            login system and you can get home cleaner service Trust Home Clener
            is cleaner service holder. Project have to auth login system and you
            can get home cleaner service Trust Home Clener is cleaner service
            holder. Project have to auth login system and you can get home
            cleaner service Trust Home Clener is cleaner service holder. Project
            have to auth login system and you can get home cleaner service Trust
            Home Clener is cleaner service holder.
          </article>

          <div className="gap-2 flex p-2 justify-items-stretch">
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
      <div className="md:flex bg-white text-black justify-center rounded-sm gap-2 mt-4 ">
        <Image src={image} width={300} height={80} alt="Gowtam kumar" />
        <div className=" p-1 content-between ">
          <article>
            <h6>Heading 1</h6>
            Trust Home Clener is cleaner service holder. Project have to auth
            login system and you can get home cleaner service Trust Home Clener
            is cleaner service holder. Project have to auth login system and you
            can get home cleaner service Trust Home Clener is cleaner service
            holder. Project have to auth login system and you can get home
            cleaner service Trust Home Clener is cleaner service holder. Project
            have to auth login system and you can get home cleaner service Trust
            Home Clener is cleaner service holder.
          </article>

          <div className="gap-2 flex p-2 justify-items-stretch">
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
      <div className="md:flex bg-white text-black justify-center rounded-sm gap-2 mt-4 ">
        <Image src={image} width={300} height={100} alt="Gowtam kumar" />
        <div className=" p-1 content-between ">
          <article>
            <h6>Heading 1</h6>
            Trust Home Clener is cleaner service holder. Project have to auth
            login system and you can get home cleaner service Trust Home Clener
            is cleaner service holder. Project have to auth login system and you
            can get home cleaner service Trust Home Clener is cleaner service
            holder. Project have to auth login system and you can get home
            cleaner service Trust Home Clener is cleaner service holder. Project
            have to auth login system and you can get home cleaner service Trust
            Home Clener is cleaner service holder.
          </article>

          <div className="gap-2 flex p-2 justify-items-stretch">
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

    </div>
  );
}
