import Image from "next/image";
import React from "react";
import image from "../../public/gowtamkumar.jpeg";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import { getUsers } from "@/lib/getAllUsers";

interface Users {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function Blog() {
  const users = await getUsers();
  console.log("users", users);

  return (
    <div className="mt-5 w-3/4 mx-auto">
      {users.map((item: Users) => {
        return (
          <div
            className="md:flex bg-slate-900 text-black justify-center rounded-sm gap-2 mt-4"
            key={item.id}
          >
            <Image src={image} width={300} height={100} alt="Gowtam kumar" />
            <div className="p-1">
              <h6 className="text-white mb-3">{item.title}</h6>
              <article className="text-slate-400">{item.body}</article>

              <div className="flex gap-2 flex-wrap rounded-sm">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React.js",
                  "Next.js",
                  "Node.js",
                  "PostgreSQL",
                ].map((item, idx) => {
                  return (
                    <div className="text-white bg-slate-800 p-1" key={idx}>
                      {item}
                    </div>
                  );
                })}
              </div>

              <div className="gap-2 flex mt-3 justify-items-stretch">
                <button className="bg-sky-500 hover:bg-sky-700 p-2 flex items-center gap-1 text-white">
                  <span>Source Code</span>
                  <FiExternalLink />
                </button>
                <button className="text-white bg-sky-500 hover:bg-sky-700 p-2 flex items-center gap-1">
                  <span>Preview</span>
                  <FiExternalLink />
                </button>
              </div>
            </div>
          </div>
        );
      })}

      {/* <div className="md:flex bg-slate-900 text-black justify-center rounded-sm gap-2 mt-4 ">
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
      <div className="md:flex bg-slate-900 text-black justify-center rounded-sm gap-2 mt-4 ">
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
      </div> */}
    </div>
  );
}
