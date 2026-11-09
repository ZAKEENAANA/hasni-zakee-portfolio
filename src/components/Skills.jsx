
const skillCategories = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: ["Python", "Java", "JavaScript"],
  },
  {
    title: "Frontend Development",
    icon: "🎨",
    skills: ["HTML5", "CSS3", "React.js", "Next.js"],
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    skills: ["Python", "Flask", "FastAPI", "REST APIs"],
  },
  {
    title: "Database Technologies",
    icon: "🗄️",
    skills: ["MySQL", "TiDB Cloud", "SQL"],
  },
  {
    title: "AI & Machine Learning",
    icon: "🤖",
    skills: ["Pandas", "Scikit-learn", "Machine Learning"],
  },
  {
    title: "Development Tools",
    icon: "🛠️",
    skills: ["Git", "GitHub", "VS Code", "ChatGPT", "Claude AI", "Cursor"],
  },
];

function Skills() {
  return (
    <section className="skills section-padding" id="skills">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">MY TECHNICAL EXPERTISE</p>
          <h2>Technical <span>Skills</span></h2>
          <p>
            Technologies and tools I use while developing
            practical software solutions.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div className="skill-card" key={category.title}>

              <div className="skill-card-heading">
                <span>{category.icon}</span>
                <h3>{category.title}</h3>
              </div>

              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>

            </div>
          ))}
        </div>

        <div className="learning-note">
          <span>🌱</span>
          <p>
            Always learning, practising and improving my
            software engineering skills through hands-on projects.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Skills;
