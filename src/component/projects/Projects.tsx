import { Fade } from "react-awesome-reveal";
import Line from "../../assets/line.svg";
import "./Projects.scss";

const Projects = () => {
  return (
    <main className="projects">
      <h2 className="section-number">
        2 <span>.</span>
      </h2>
      <figure>
        <img className="line" src={Line} alt="" />
      </figure>
      <div className="projects-container">
        <h2 className="section-title project-title">projekt</h2>
        <article className="project-card">
          <Fade
            className="project-img"
            triggerOnce
            fraction={1}
            direction="left"
            duration={1500}
          >
            <div></div>
          </Fade>
          <Fade
            triggerOnce
            fraction={1}
            className="card-text-container"
            direction="right"
            duration={1500}
          >
            <section>
              <h2>rewind</h2>
              <p>Padel-tracker för att spara dina padel-resultat</p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>REACT</li>
                <li>Docker</li>
              </ul>
              <h3 className="btn btn--disabled">temporärt nedlagt</h3>
            </section>
          </Fade>
        </article>
        <article className="project-card">
          <Fade
            triggerOnce
            fraction={1}
            className="card-text-container"
            direction="left"
            duration={1500}
          >
            <section>
              <h2>Spotify Lissner</h2>
              <p>Uses Spotifys API to gather 30sec preview of songs</p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>API</li>
              </ul>
              <a
                href="https://eklinden.github.io/Spotify/"
                target="_blank"
                className="btn"
              >
                Se Projekt
              </a>
            </section>
          </Fade>
          <Fade
            className="project-img"
            triggerOnce
            fraction={1}
            direction="right"
            duration={1500}
          >
            <div></div>
          </Fade>
        </article>
        <article className="project-card">
          <Fade
            className="project-img"
            triggerOnce
            fraction={1}
            direction="left"
            duration={1500}
          >
            <div></div>
          </Fade>
          <Fade
            triggerOnce
            fraction={1}
            className="card-text-container"
            direction="right"
            duration={1500}
          >
            <section>
              <h2>In-progress</h2>
              <p>En Escargot resturang (Första renderingen är väldigt långsam)</p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>REACT</li>
                <li>LowDB</li>
                <li>Express</li>
              </ul>
              <a
                href="https://escargot-to-go.onrender.com"
                target="_blank"
                className="btn"
              >
                Se Projekt
              </a>
            </section>
          </Fade>
        </article>
      </div>
    </main>
  );
};

export default Projects;
