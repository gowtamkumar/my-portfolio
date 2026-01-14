import { coreSkills } from "@/lib/mock-data/skill";

export default function Skill() {
  return (
    <section className="my-2">
      <h2 className="text-xl font-semibold border-b my-1">Skills</h2>
      <ul className="list-disc ml-5 text-sm space-y-1">
        {coreSkills.map((item, idx) => {
          return (
            <li key={idx} className="gap-2 text-sm">
              <span className="me-2">{item + "," + " "}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
