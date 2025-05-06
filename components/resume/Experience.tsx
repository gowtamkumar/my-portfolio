import React from "react";

export default function Experience() {
  return (
    <section className="my-2">
      <h2 className="text-xl font-semibold border-b my-1">EXPERIENCE</h2>
      <div>
        <h3 className="font-semibold text-lg">Web Developer — Semicolon It Solutions <small className="text-sm text-gray-600">(2021 – Present | On-site)</small></h3>
        {/* <p className="text-sm text-gray-600">2021 – Present | On-site</p> */}
        <ul className="list-disc ml-5 text-sm space-y-1">
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
