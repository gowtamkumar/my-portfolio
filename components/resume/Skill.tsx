import { coreSkills } from "@/lib/mock-data/skill";

export default function Skill() {
  return (
    <section className="my-2">
      <h2 className="text-xl font-semibold border-b my-1">Skills</h2>
      <p className="text-sm text-gray-700 leading-relaxed">
        {coreSkills.join(" • ")}
      </p>
    </section>
  );
}

