function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-container">

        <div className="hero-content">

          <p className="hero-greeting">
            HELLO, WELCOME TO MY PORTFOLIO
          </p>

          <h1>
            Hi, I'm <span>Hasni Zakee</span>
          </h1>

          <h2>
            Aspiring Software Engineer
          </h2>

          <p className="hero-description">
            I build practical software solutions that solve
            real-world problems. My interests include full-stack
            development, business management systems, and
            artificial intelligence.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn btn-primary">
              Explore My Projects →
            </a>

            <a
              href="https://github.com/ZAKEENAANA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              GitHub ↗
            </a>

          </div>

          <div className="hero-tech">
            <span>Python</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>FastAPI</span>
            <span>Machine Learning</span>
          </div>

        </div>

        <div className="hero-visual">

          <div className="hero-card">

            <div className="code-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="code-content">
              <p><span className="code-purple">const</span> developer = {"{"}</p>
              <p>&nbsp;&nbsp;name: <span className="code-green">"Hasni Zakee"</span>,</p>
              <p>&nbsp;&nbsp;role: <span className="code-green">"Software Engineer"</span>,</p>
              <p>&nbsp;&nbsp;passion: <span className="code-green">"Building Solutions"</span>,</p>
              <p>&nbsp;&nbsp;learning: <span className="code-green">true</span></p>
              <p>{"};"}</p>
              <br />
              <p className="code-comment">
                // Turning ideas into reality.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;