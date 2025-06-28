// components/ProjectsSection.tsx
export default function ProjectsSection() {
  return (
    <section className="my-2">
      <h2 className="text-xl font-semibold border-b my-1">PROJECTS</h2>
      <div>
        <h3 className="font-semibold text-lg">
          Full Stack Developer — E-commerce Application{" "}
          {/* <small className="text-sm text-gray-600">(2024 – Present)</small> */}
        </h3>
        <address className="text-sm">
          Tech Stack: Next.js, Express.js, PostgreSQL, SSLCOMMERZ
        </address>
        <ul className="list-disc ml-5 text-sm space-y-1">
          <li>
            Developed a responsive, full-featured e-commerce platform (80%
            complete)
          </li>
          <li>
            Implemented cart, checkout, order tracking, and payment integration.
          </li>
          <li>
            Designed dynamic discount modules (global, category, brand-level
            promotions).
          </li>
          <li>Optimized the UI for performance and scalability.</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-lg">
          Full Stack Developer — Inventory{" "}
          {/* <small className="text-sm text-gray-600">(2023 – 2024)</small> */}
        </h3>
        <address className="text-sm">
          Tech Stack: React.js, Nest.js, PostgreSQL
        </address>
        <ul className="list-disc ml-5 text-sm space-y-1">
          <li>
            Developed a full-stack Inventory application using React.js,
            Nest.js, and PostgreSQL.
          </li>
          <li>
            Implemented core functionalities including product management, Sale,
            Purchase, Stock, Loss & Profit,etc.
          </li>
          {/* <li>Integrated SSLCOMMERZ payment gateway for secure transactions.</li> */}
          <li>
            Project is 100% complete with responsive UI and optimized
            performance.
          </li>
        </ul>
      </div>
    </section>
  );
}
