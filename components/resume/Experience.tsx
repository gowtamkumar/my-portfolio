import React from "react";

export default function Experience() {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold border-b pb-1 mb-2">EXPERIENCE</h2>


      <div className="mb-4">
        <h3 className="font-semibold text-lg">Web Developer — 123 Co</h3>
        <p className="text-sm text-gray-600">2015 – 2017 | New York, NY</p>
        <ul className="list-disc ml-5 text-sm mt-1 space-y-1">
          <li>
            Developed and maintained responsive websites for multiple clients
            resulting in a 15% increase in website traffic.
          </li>
          <li>Developed websites using HTML, CSS, JavaScript, and jQuery.</li>
          <li>
            Implemented responsive design and cross-browser compatibility.
          </li>
          <li>
            Conducted performance optimization resulting in a 20% increase in
            page load speed.
          </li>
          <li>Provided ongoing maintenance and support to clients.</li>
        </ul>
      </div>
    </section>
  );
}
