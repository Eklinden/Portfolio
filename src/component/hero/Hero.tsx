import { Fade } from 'react-awesome-reveal';
import codeIcon from '../../assets/code-icon.svg';
import downOne from '../../assets/down/downOne.svg';
import downThree from '../../assets/down/downThree.svg';
import downTwo from '../../assets/down/downTwo.svg';
import Line from '../../assets/line.svg';
import './Hero.scss';

const Hero = () => {


  return (
    <article className="hero">
      <Fade triggerOnce duration={1500}>
        <figure className="watermark-icon">
          <img src={codeIcon} alt="" />
        </figure>
      </Fade>
      <section className="hero-text">
        <Fade triggerOnce direction="left" duration={2000}>
          <h2>
            1 <span>.</span>
          </h2>
        </Fade>
        <Fade triggerOnce delay={100} duration={2000}><img className="line" src={Line} alt="" /></Fade>

        <Fade triggerOnce delay={100} duration={1000}>
          <h1>Skapar <span>responsiva</span> <br /> och <span>användarvänliga</span> <br /> hemsidor</h1>
        </Fade>
        <Fade triggerOnce cascade damping={0.5} delay={2500}>
          <ul>
            <img src={downOne} alt="" />
            <img src={downTwo} alt="" />
            <img src={downThree} alt="" />
          </ul>
        </Fade>
      </section>
    </article>
  )
}

export default Hero