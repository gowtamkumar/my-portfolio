import { skills } from "@/lib/mock-data/skill";
import React from "react";

export default function Skill() {
  return (
    <section className="my-2">
      <h2 className="text-xl font-semibold border-b">SKILLS</h2>
      <ul className="list-disc ml-5 text-sm space-y-1 py-1">
        {skills.map((item, idx) => {
          return (
            <li key={idx} className="gap-2 text-sm">
              <strong>{item.name}</strong>:{" "}
              <span className="me-2">{item.skills + "," + " "}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
