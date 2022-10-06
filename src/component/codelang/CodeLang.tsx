import { Fade } from 'react-awesome-reveal';
import CssSVG from '../../assets/codelang-icons/css.svg';
import FigmaSVG from '../../assets/codelang-icons/figma.svg';
import HtmlSVG from '../../assets/codelang-icons/html.svg';
import JsSVG from '../../assets/codelang-icons/js.svg';
import NodeSVG from '../../assets/codelang-icons/node.svg';
import ReactSVG from '../../assets/codelang-icons/react.svg';
import Line from '../../assets/line.svg';
import './CodeLang.scss';


const CodeLang = () => {
  return (
    <article className="codelang">
        <h2 className="section-number">
          3 <span>.</span>
        </h2>
        <figure>
          <img src={Line} alt="" />
        </figure>
        <section className="codelang-section">
          <Fade triggerOnce duration={1500}>
            <h2 className="section-title">Kodspråk</h2>
          </Fade>
          <section className="codelang-wrapper">
            <ul className="codelang-names">
              <Fade triggerOnce duration={1500} direction="left" cascade damping={0.1}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>React</li>
                <li>Figma</li>
                <li>Node.js</li>
              </Fade>
            </ul>
            <ul className="codelang-icons">
              <Fade triggerOnce duration={1500}>
                <li><img src={HtmlSVG} /></li>
                <li><img src={CssSVG} /></li>
                <li><img src={JsSVG} /></li>
                <li><img src={ReactSVG} /></li>
                <li><img src={FigmaSVG} /></li>
                <li><img src={NodeSVG} /></li>
              </Fade>
            </ul>
          </section>
        </section>
        <section className="project-management-section">
          <Fade triggerOnce duration={1500}>
            <h2 className="section-title">Projekthantering</h2>
          </Fade>
          <ul>
            <Fade triggerOnce duration={1500} direction="right" cascade damping={0.1}>
              <li>Github</li>
              <li>Gitproject</li>
              <li>Trello</li>
              <li>Scrum</li>
              <li>Kanban</li>
            </Fade>
          </ul>
        </section>
    </article>
  )
}

export default CodeLang