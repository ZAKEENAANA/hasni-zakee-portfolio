function Experience() {
  const experiences = [
    {
      number: "01",
      category: "Practical Business Experience",
      role: "Sales & Business Operations",
      company: "Lanka Cut Piece Fabric Store",
      duration: "August 2020 – Present",
      description:
        "Gained practical experience in daily business operations, customer interactions, sales activities and inventory management within a retail business.",
      responsibilities: [
        "Managed daily business operations and customer service.",
        "Handled sales activities and customer requirements.",
        "Monitored inventory and stock availability.",
        "Developed practical problem-solving and communication skills.",
        "Identified opportunities to improve business processes using technology."
      ],
      technologies: ["Business Operations", "Problem Solving", "Customer Management"]
    },
    {
      number: "02",
      category: "Software Development Experience",
      role: "Full-Stack & Application Development",
      company: "Independent Technical Projects",
      duration: "Academic & Personal Projects",
      description:
        "Applied software engineering knowledge to design and develop practical web applications, backend services, database solutions and machine learning projects.",
      responsibilities: [
        "Developed web applications using React and Next.js.",
        "Built backend APIs using Python, Flask and FastAPI.",
        "Designed and worked with MySQL databases.",
        "Developed a machine learning-based sales prediction system.",
        "Used Git and GitHub for source code management."
      ],
      technologies: ["Python", "React", "Next.js", "FastAPI", "Flask", "MySQL"]
    }
  ];

  return (
    <section id="experience" className="experience section-padding">
      <div className="section-container">

        <div className="section-heading">
          <span className="section-label">MY BACKGROUND</span>
          <h2>Experience & Development</h2>
          <p>
            My practical experience and journey in software development,
            application building and technology.
          </p>
        </div>

        <div className="experience-grid">
          {experiences.map((experience) => (
            <article className="experience-card" key={experience.number}>

              <div className="experience-card-top">
                <span className="experience-number">
                  {experience.number}
                </span>

                <span className="experience-category">
                  {experience.category}
                </span>
              </div>

              <h3>{experience.role}</h3>

              <h4>{experience.company}</h4>

              <span className="experience-duration">
                {experience.duration}
              </span>

              <p className="experience-description">
                {experience.description}
              </p>

              <h5>Key Activities</h5>

              <ul className="experience-list">
                {experience.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <div className="experience-technologies">
                {experience.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;