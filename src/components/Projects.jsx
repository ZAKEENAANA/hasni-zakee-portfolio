
const projects = [
  {
    number: "01",
    icon: "🦷",
    title: "Sunrise Dental Clinic Software System",
    category: "Healthcare Management",
    description:
      "A software system designed to support dental clinic operations and management through a digital platform.",
    technologies: [],
    status: "Project Showcase",
  },
  {
    number: "02",
    icon: "🤝",
    title: "HelpBridge Lanka",
    category: "Full-Stack Development",
    description:
      "A multilingual community assistance platform designed to connect people who need support with volunteers who can help.",
    technologies: ["Next.js", "FastAPI", "Python", "MySQL"],
    github: "",
    status: "Project Showcase",
  },
  {
    number: "03",
    icon: "📊",
    title: "Smart Business Sales Prediction System",
    category: "AI & Machine Learning",
    description:
      "An intelligent business analytics system that analyses historical sales data and generates product and revenue forecasts.",
    technologies: [
      "Python",
      "Flask",
      "Pandas",
      "Scikit-learn",
      "MySQL",
    ],
    github:
      "https://github.com/ZAKEENAANA/smart-sales-prediction-clean",
    status: "Project Showcase",
  },
  {
    number: "04",
    icon: "🧵",
    title: "Lanka Cut Pieces",
    category: "Business Website",
    description:
      "A responsive website developed for a real fabric retail business to establish its online presence and help customers discover the business.",
    technologies: ["HTML5", "CSS3", "JavaScript", "SEO"],
    demo: "https://lanka-cut-pieces.vercel.app/",
    status: "Live Website",
  },
];

function Projects() {
  return (
    <section className="projects section-padding" id="projects">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">MY WORK</p>
          <h2>Featured <span>Projects</span></h2>
          <p>
            Practical software projects developed to explore
            technology and solve real-world problems.
          </p>
        </div>

        <div className="projects-grid">

          {projects.map((project) => (
            <article className="project-card" key={project.number}>

              <div className="project-top">
                <span className="project-icon">{project.icon}</span>
                <span className="project-number">
                  {project.number}
                </span>
              </div>

              <p className="project-category">
                {project.category}
              </p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-technologies">
                {project.technologies.length > 0 ? (
                  project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))
                ) : (
                  <span>Technology details to be added</span>
                )}
              </div>

              <div className="project-actions">

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-primary"
                  >
                    Live Website ↗
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-secondary"
                  >
                    GitHub ↗
                  </a>
                )}

                {!project.demo && !project.github && (
                  <span className="project-status">
                    {project.status}
                  </span>
                )}

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;
