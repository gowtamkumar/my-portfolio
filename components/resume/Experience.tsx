export default function Experience() {
  return (
    <section className="my-2">
      <h2 className="text-xl font-semibold border-b my-1">EXPERIENCE</h2>
      <div>
        <h3 className="font-semibold text-lg">
          Web Developer — Semicolon It Solutions{" "}
          <small className="text-sm text-gray-600">
            (2021 – Present | On-site)
          </small>
        </h3>
        {/* <p className="text-sm text-gray-600">2021 – Present | On-site</p> */}
        <ul className="list-disc ml-5 text-sm space-y-1">
          <li>
            Developed and maintained scalable, responsive web applications using
            React.js, Next.js, and JavaScript, leading to a 15% increase in
            website traffic across multiple client projects.
          </li>
          <li>
            Built and integrated RESTful APIs and backend services using Node.js
            and PostgreSQL, ensuring robust data management and performance.
          </li>
          <li>
            Implemented responsive design, ensuring seamless cross-browser and
            cross-device compatibility for modern user experiences.
          </li>
          <li>
            Conducted code and performance optimizations, reducing average page
            load times by 20% through efficient component structuring and lazy
            loading techniques.
          </li>
          <li>
            Collaborated with UI/UX designers and QA engineers in an Agile
            development environment, ensuring timely delivery and continuous
            improvement.
          </li>
          <li>
            Handled DevOps tasks, including Docker setup production
          </li>
          <li>
            Provided technical support and ongoing maintenance to clients,
            addressing bugs, performance issues, and feature updates.
          </li>
        </ul>
      </div>
    </section>
  );
}
