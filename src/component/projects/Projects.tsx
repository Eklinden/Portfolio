
import { Fade } from 'react-awesome-reveal';
import Line from '../../assets/line.svg';
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
        <h2>projekt</h2>
        <div className="projects-container">
          <article className="project-card">
            <figure>
              <img src="" alt="" />
            </figure>
            <section className="card-text-container">
              <h2>rewind</h2>
              <p>Padel-tracker för att spara dina padel-resultat</p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>REACT</li>
              </ul>
            </section>
          </article>
        </div>


    </main>
  )
}

export default Projects