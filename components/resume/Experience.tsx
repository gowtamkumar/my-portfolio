export default function Experience() {
  return (
    <section className="my-2">
      <h2 className="text-xl font-semibold border-b my-1">Experience</h2>
      <div>
        <h3 className="font-semibold text-lg">
          Full Stack JavaScript Developer — Semicolon It Solutions{" "}
          <small className="text-sm text-gray-600">
            (2021 – Present | On-site)
          </small>
        </h3>
        <ul className="list-disc ml-5 text-sm space-y-1">
          <li>
            Developed and maintained scalable web applications using Node.js, NestJS, and PostgreSQL
          </li>
          <li>
            Designed and implemented RESTful APIs for core business features, improving system modularity and performance
          </li>
          <li>
            Built and optimized backend services to ensure high performance and reliability in production environments
          </li>
          <li>
            Implemented authentication and authorization systems using JWT and secure API practices
          </li>

          <li>
            Containerized applications using Docker and managed deployments with NGINX on Linux servers
          </li>
          <li>
            Maintained and enhanced production systems by fixing bugs, improving performance, and delivering new features
          </li>
        </ul>
      </div>
    </section>
  );
}
