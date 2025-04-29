import React from "react";

export default function Achievement() {
  return (
    <section className="my-2">
      <h2 className="text-xl font-semibold border-b my-2">ACHIEVEMENTS</h2>
      <ul className="list-disc ml-5 text-sm space-y-1">
        <li>
          <strong>Developing a High-Traffic E-commerce Website:</strong>{" "}
          frontend that can support over 1700 users per second.
        </li>
        <li>
          <strong>Mentoring Junior Developers:</strong> Provided guidance and
          mentorship to junior developers, resulting in their successful
          completion of several high-profile projects and increased team
          productivity.
        </li>
      </ul>
    </section>
  );
}
