import "./style.css";

function App() {
  return (
    <>
      <nav id="navbar">
        <span className="nav-logo">📖 Study Tracker</span>
        <ul className="nav-links">
          <li><a href="#intro">About Me</a></li>
          <li><a href="#subjects">Subjects</a></li>
          <li><a href="#evidence">Study Log</a></li>
          <li><a href="#progress">Progress</a></li>
        </ul>
      </nav>

      <header id="hero">
        <img src="/images/setup.jpg" alt="My study setup" />
        <div id="hero-text">
          <h1>Personal Study & Revision Tracker</h1>
        </div>
      </header>

      <main>

        <section id="intro">
          <h2 className="section-title">About Me</h2>

          <article className="intro-card">
            <div className="intro-text">
              <h3>
                <span className="highlight">
                  Mobasher Zaid M Najeeb
                </span>
              </h3>

              <p>
                I am a third-year Software Engineering student at the
                University of Kurdistan Hewlêr.
              </p>

              <ul className="bio-tags">
                <li>University of Kurdistan Hewlêr</li>
                <li>Software Engineering</li>
                <li>Kurdistan — Iraq</li>
              </ul>
            </div>
          </article>
        </section>

        <section id="subjects">
          <h2 className="section-title">Subjects & Skills</h2>

          <div className="subjects-grid">

            <article className="subject-card">
              <h3>Software Testing</h3>

              <dl className="subject-details">
                <dt>What I'm learning</dt>
                <dd>
                  Automated and manual software testing techniques.
                </dd>

                <dt>Why I'm studying it</dt>
                <dd>
                  To improve software reliability and catch bugs.
                </dd>

                <dt>How I practise</dt>
                <dd>
                  I apply techniques to previous projects.
                </dd>
              </dl>
            </article>

            <article className="subject-card">
              <h3>Operating Systems — CSE302</h3>

              <dl className="subject-details">
                <dt>What I'm learning</dt>
                <dd>
                  Linux processes, memory management, and file systems.
                </dd>

                <dt>Why I'm studying it</dt>
                <dd>
                  Required for my Software Engineering degree.
                </dd>

                <dt>How I practise</dt>
                <dd>
                  Repeating in-class exercises independently.
                </dd>
              </dl>
            </article>

          </div>
        </section>

        <section id="evidence">
          <h2 className="section-title">
            Study Log — Evidence
          </h2>

          <div className="day-logs">

            <div className="log-card">
              <h4>Equivalence Class Testing</h4>

              <img
                src="/images/ccode.jpg"
                alt="C code"
                className="evidence-img"
              />
            </div>

            <div className="log-card">
              <h4>Linux Setup</h4>

              <img
                src="/images/studying.jpeg"
                alt="Linux study"
                className="evidence-img"
              />
            </div>

            <div className="log-card">
              <h4>Chess</h4>

              <img
                src="/images/chess.jpeg"
                alt="Chess"
                className="evidence-img"
              />
            </div>

          </div>
        </section>

        <section id="progress">
          <h2 className="section-title">
            Progress Summary
          </h2>

          <div className="progress-grid">

            <article className="progress-card improved">
              <h3>Most Improved</h3>

              <p>
                Software testing improved the most.
              </p>
            </article>

            <article className="progress-card challenges">
              <h3>Challenges Faced</h3>

              <p>
                Operating Systems and Linux took extra effort.
              </p>
            </article>

            <article className="progress-card future">
              <h3>Future Plans</h3>

              <p>
                Integrate testing into all future projects.
              </p>
            </article>

          </div>
        </section>

      </main>

      <footer id="site-footer">
        <p>
          <strong>Mobasher Zaid M Najeeb</strong> — CS304 Web Technologies
        </p>
      </footer>
    </>
  );
}

export default App;