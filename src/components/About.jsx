
function About() {
  return (
    <section className="about section-padding" id="about">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">GET TO KNOW ME</p>
          <h2>About <span>Me</span></h2>
          <p>
            A little about my background, experience and passion
            for technology.
          </p>
        </div>

        <div className="about-grid">

          <div className="about-content">
            <h3>Building Technology That Solves Real Problems</h3>

            <p>
              I am an aspiring Software Engineer passionate about
              software development, artificial intelligence and
              creating practical technology solutions.
            </p>

            <p>
              I have completed the academic programme of my
              BSc (Hons) Software Engineering top-up degree at
              Cardiff Metropolitan University, delivered through
              ICBT Campus, Sri Lanka. I am currently awaiting
              my final results and official degree award.
            </p>

            <p>
              My development interests include websites, business
              management applications, POS systems, full-stack
              platforms and AI-powered applications.
            </p>

            <p>
              Alongside my technical interests, I have approximately
              six years of practical experience in sales, customer
              service and business operations through working in
              my family's fabric retail business.
            </p>

            <p>
              I believe in continuous learning, practical experience
              and using technology to solve meaningful problems.
            </p>
          </div>

          <div className="about-highlights">

            <div className="highlight-card">
              <span className="highlight-icon">💻</span>
              <h4>Software Development</h4>
              <p>Building practical software applications.</p>
            </div>

            <div className="highlight-card">
              <span className="highlight-icon">🤖</span>
              <h4>AI & Machine Learning</h4>
              <p>Exploring intelligent business solutions.</p>
            </div>

            <div className="highlight-card">
              <span className="highlight-icon">🚀</span>
              <h4>Continuous Learning</h4>
              <p>Improving technical skills through projects.</p>
            </div>

            <div className="highlight-card">
              <span className="highlight-icon">🏢</span>
              <h4>Business Understanding</h4>
              <p>Combining practical business experience with technology.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
