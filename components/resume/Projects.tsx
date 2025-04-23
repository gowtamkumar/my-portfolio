// components/ProjectsSection.tsx
export default function ProjectsSection() {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold border-b pb-1 mb-2">PROJECTS</h2>

      <div className="mb-4">
        <h3 className="font-semibold text-lg">E-commerce Application</h3>
        <p className="text-sm text-gray-600">2024 – Present | Remote</p>
        <ul className="list-disc ml-5 text-sm mt-1 space-y-1">
          <li>Developed a full-stack e-commerce application using Next.js, Express.js, and PostgreSQL.</li>
          <li>Implemented core functionalities including product management, cart, checkout, and order tracking.</li>
          <li>Integrated discount features such as global, category, brand-level, and promotional offers.</li>
          <li>Integrated SSLCOMMERZ payment gateway for secure transactions.</li>
          <li>Project is 80% complete with responsive UI and optimized performance.</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-lg">Full Stack Developer — Personal Project</h3>
        <p className="text-sm text-gray-600">2024 – Present | Remote</p>
        <ul className="list-disc ml-5 text-sm mt-1 space-y-1">
          <li>Currently developing an e-commerce application using Next.js, Express.js, and PostgreSQL.</li>
          <li>Implemented core e-commerce functionalities including product management, cart, checkout, and order tracking.</li>
          <li>Integrated discount features such as global, category, brand-level, and promotional offers.</li>
          <li>Integrated SSLCOMMERZ payment gateway for secure transactions.</li>
          <li>Project is 80% complete with responsive UI and optimized performance.</li>
        </ul>
      </div>
    </section>
  );
}
