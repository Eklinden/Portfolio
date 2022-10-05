import { Fade } from 'react-awesome-reveal';
import Line from '../../assets/line.svg';
import RewindPic from '../../assets/rewind.png';
import './Projects.scss';

const Projects = () => {

  return (
    <main className="projects">
        <h2>
          2 <span>.</span>
        </h2>
        <figure>
          <img src={Line} alt="" />
        </figure>
        <h2 className="projects-title">projekt</h2>
        <div className="projects-container">
          <article className="project-card">
            <Fade className="project-img" triggerOnce fraction={1} direction="left" duration={2000}>
              <figure>
                <img src={RewindPic} alt="" />
              </figure>
            </Fade>
            <Fade triggerOnce fraction={1} className="card-text-container" direction="right" duration={2000}>
              <section>
                <h2>rewind</h2>
                <p>Padel-tracker för att spara dina padel-resultat</p>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JS</li>
                  <li>REACT</li>
                </ul>
                <button className="btn">Se Projekt</button>
              </section>
            </Fade>
          </article>
          <article className="project-card">
          <Fade triggerOnce fraction={1} className="card-text-container" direction="left" duration={2000}>
              <section>
                <h2>rewind</h2>
                <p>Padel-tracker för att spara dina padel-resultat</p>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JS</li>
                  <li>REACT</li>
                </ul>
                <button className="btn">Se Projekt</button>
              </section>
            </Fade>
            <Fade className="project-img" triggerOnce fraction={1} direction="right" duration={2000}>
              <figure>
                <img src={RewindPic} alt="" />
              </figure>
            </Fade>
          </article>
          <article className="project-card">
            <Fade className="project-img" triggerOnce fraction={1} direction="left" duration={2000}>
              <figure>
                <img src={RewindPic} alt="" />
              </figure>
            </Fade>
            <Fade triggerOnce fraction={1} className="card-text-container" direction="right" duration={2000}>
              <section>
                <h2>rewind</h2>
                <p>Padel-tracker för att spara dina padel-resultat</p>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JS</li>
                  <li>REACT</li>
                </ul>
                <button className="btn">Se Projekt</button>
              </section>
            </Fade>
          </article>
        </div>
    </main>
  )
}

export default Projects