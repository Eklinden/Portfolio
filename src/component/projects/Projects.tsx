import { Fade } from "react-awesome-reveal";
import Line from "../../assets/line.svg";
import QuestionPic from "../../assets/questionmark.png";
import RewindPic from "../../assets/rewind.png";
import SpotifyPic from "../../assets/Spotify.png";
import "./Projects.scss";

const Projects = () => {
  return (
    <main className="projects">
      <h2 className="section-number">
        2 <span>.</span>
      </h2>
      <figure>
        <img src={Line} alt="" />
      </figure>
      <div className="projects-container">
        <h2 className="section-title project-title">projekt</h2>
        <article className="project-card">
          <Fade
            className="project-img"
            triggerOnce
            fraction={1}
            direction="left"
            duration={2000}
          >
            <figure>
              <img src={RewindPic} alt="" />
            </figure>
          </Fade>
          <Fade
            triggerOnce
            fraction={1}
            className="card-text-container"
            direction="right"
            duration={2000}
          >
            <section>
              <h2>rewind</h2>
              <p>Padel-tracker för att spara dina padel-resultat</p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>REACT</li>
              </ul>
              <a href="" className="btn">
                Se Projekt
              </a>
            </section>
          </Fade>
        </article>
        <article className="project-card">
          <Fade
            triggerOnce
            fraction={1}
            className="card-text-container"
            direction="left"
            duration={2000}
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
              <a href="https://eklinden.github.io/Spotify/" className="btn">
                Se Projekt
              </a>
            </section>
          </Fade>
          <Fade
            className="project-img"
            triggerOnce
            fraction={1}
            direction="right"
            duration={2000}
          >
            <figure>
              <img src={SpotifyPic} alt="" />
            </figure>
          </Fade>
        </article>
        <article className="project-card">
          <Fade
            className="project-img"
            triggerOnce
            fraction={1}
            direction="left"
            duration={2000}
          >
            <figure>
              <img src={QuestionPic} alt="" />
            </figure>
          </Fade>
          <Fade
            triggerOnce
            fraction={1}
            className="card-text-container"
            direction="right"
            duration={2000}
          >
            <section>
              <h2>In-progress</h2>
              <p>En Escargot resturang</p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>REACT</li>
                <li>LowDB</li>
                <li>Express</li>
              </ul>
              <a href="" className="btn">
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
