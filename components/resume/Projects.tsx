export default function ProjectsSection() {
  return (
    <section className="my-2">
      <h2 className="text-xl font-semibold border-b my-1">Projects</h2>
      <div>
        <h3 className="font-semibold text-lg">
          Full Stack Developer — E-commerce Application
          {/* <small className="text-sm text-gray-600">(2024 – Present)</small> */}
        </h3>
        <address className="text-sm">
          Tech Stack: Next.js, Nest.js, PostgreSQL, SSLCOMMERZ
        </address>
        <ul className="list-disc ml-5 text-sm space-y-1">
          <li>
            Built a scalable, full-featured e-commerce platform with modern responsive UI using Next.js and Nest.js.
          </li>
          <li>
            Developed RESTful APIs with Nest.js for cart, checkout, order management, and user workflows
          </li>
          <li>
            Integrated secure payment gateway (SSLCOMMERZ) supporting real-time transaction processing
          </li>
          <li>Designed flexible discount engine supporting global, category, and brand-level promotions</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-lg">
          Full Stack Developer — Inventory{" "}
        </h3>
        <address className="text-sm">
          Tech Stack: React.js, Nest.js, PostgreSQL
        </address>
        <ul className="list-disc ml-5 text-sm space-y-1">
          <li>
            Developed a full-stack inventory management system using React.js (frontend) and NestJS (backend)
          </li>
          <li>
            Designed modules for product management, sales, purchases, stock tracking, and profit/loss analysis
          </li>
          <li>Implemented REST APIs with NestJS following modular architecture and clean code practices</li>
          <li>
            Project is 100% complete with responsive UI and optimized
            performance.
          </li>
        </ul>
      </div>
    </section>
  );
}
