/**
 * Semantic text for search engines and assistive technology when the visual
 * homepage content is animated or rendered progressively.
 */
export default function SeoContent() {
  return (
    <div
      className="sr-only"
      aria-hidden="false"
      itemScope
      itemType="https://schema.org/Person"
    >
      <h1 itemProp="name">Gaurav Saini — Full-Stack Developer</h1>

      <p itemProp="description">
        Gaurav Saini is a full-stack developer from India who builds responsive
        websites, web applications, backend systems, databases, and AI-powered
        features. His work combines clear interface design with dependable,
        practical functionality.
      </p>

      <p itemProp="jobTitle">Full-Stack Developer</p>

      <section aria-label="Development services">
        <h2>Full-Stack Development Services</h2>

        <article>
          <h3>Full-Stack Web Applications</h3>
          <p>
            Complete web applications with responsive interfaces, backend
            services, authentication, dashboards, and production deployment.
          </p>
        </article>

        <article>
          <h3>Business Websites and Portfolios</h3>
          <p>
            Modern business websites, landing pages, and developer portfolios
            designed for performance, accessibility, search visibility, and
            reliable use across devices.
          </p>
        </article>

        <article>
          <h3>Backend APIs and Database Systems</h3>
          <p>
            REST APIs, database architecture, authentication, CRUD systems,
            business logic, and third-party service integrations.
          </p>
        </article>

        <article>
          <h3>AI Features and Workflow Automation</h3>
          <p>
            AI API integrations, smart assistants, custom productivity tools,
            content features, and automated application workflows.
          </p>
        </article>
      </section>

      <section aria-label="Technical skills">
        <h2>Technical Skills</h2>
        <p itemProp="knowsAbout">
          React, Next.js, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS,
          Node.js, Express, Laravel, PHP, Python, MongoDB, PostgreSQL, MySQL,
          Git, Vercel, Netlify, Postman, REST APIs, database design, responsive
          web design, and AI API integration.
        </p>
      </section>

      <section aria-label="About Gaurav Saini">
        <h2>About Gaurav Saini</h2>
        <p>
          Gaurav works across the complete development process, from building
          responsive user interfaces to implementing backend logic and database
          systems. He selects technologies according to each project and focuses
          on creating polished digital products that balance design, performance,
          and real-world usability.
        </p>
      </section>

      <section aria-label="Contact Gaurav Saini">
        <h2>Work With Gaurav Saini</h2>
        <p>
          Use the contact page to discuss a website, web application, backend,
          database, or AI integration project.
        </p>
      </section>
    </div>
  );
}
