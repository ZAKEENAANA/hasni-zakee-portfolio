import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

import "./App.css";

function App() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      <main>
        {/* Home Section */}
        <section id="home">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Skills Section */}
        <section id="skills">
          <Skills />
        </section>

        {/* Projects Section */}
        <section id="projects">
          <Projects />
        </section>

        {/* Experience Section */}
        <Experience />

        {/* Education Section */}
        <section id="education" className="section-padding">
          <div className="section-container">

            <div className="section-heading">
              <span className="section-label">ACADEMIC BACKGROUND</span>
              <h2>Education</h2>
              <p>
                My academic journey in computing and software engineering.
              </p>
            </div>

            <div className="education-list">

              <article className="education-card">
                <h3>BSc (Hons) Software Engineering</h3>
                <h4>Cardiff Metropolitan University, UK</h4>
                <p>Delivered through ICBT Campus, Sri Lanka</p>
                <span>Programme completed – Final results pending</span>
              </article>

              <article className="education-card">
                <h3>HND in Computing</h3>
                <h4>Cardiff Metropolitan University</h4>
                <p>Delivered through ICBT Campus, Sri Lanka</p>
                <span>Completed</span>
              </article>

              <article className="education-card">
                <h3>HND in Software Engineering</h3>
                <h4>Cardiff Metropolitan University</h4>
                <p>Delivered through ICBT Campus, Sri Lanka</p>
                <span>Completed</span>
              </article>

              <article className="education-card">
                <h3>GCE Advanced Level – Physical Science</h3>
                <p>Studied Combined Mathematics, Physics and Chemistry.</p>
              </article>

              <article className="education-card">
                <h3>GCE Ordinary Level</h3>
                <span>Completed</span>
              </article>

            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding">
          <div className="section-container">

            <div className="section-heading">
              <span className="section-label">GET IN TOUCH</span>
              <h2>Let's Connect</h2>
              <p>
                Interested in software engineering, AI, machine learning
                and data science opportunities? Feel free to contact me.
              </p>
            </div>

            <div className="contact-details">

              <div className="contact-item">
                <h3>Email</h3>
                <a href="mailto:hasnizakee20@gmail.com">
                  hasnizakee20@gmail.com
                </a>
              </div>

              <div className="contact-item">
                <h3>GitHub</h3>
                <a
                  href="https://github.com/ZAKEENAANA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit GitHub Profile
                </a>
              </div>

              <div className="contact-item">
                <h3>LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/hasnizakee-zakee-90268a29b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit LinkedIn Profile
                </a>
              </div>

              <div className="contact-item">
                <h3>Location</h3>
                <p>Galgamuwa, Kurunegala, Sri Lanka</p>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="section-container">
          <p>
            © {new Date().getFullYear()} Hasni Zakee.
            All rights reserved.
          </p>
          <p>Software Engineering | AI | Machine Learning | Data Science</p>
        </div>
      </footer>
    </>
  );
}

export default App;