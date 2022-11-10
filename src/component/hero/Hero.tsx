import { Fade } from "react-awesome-reveal";
import downOne from "../../assets/arrow-down/downOne.svg";
import downThree from "../../assets/arrow-down/downThree.svg";
import downTwo from "../../assets/arrow-down/downTwo.svg";
import Line from "../../assets/line.svg";
import Header from "../header/Header";

import "./Hero.scss";

const Hero = () => {
  return (
    <article className="hero">
      <Header />
      <Fade className="watermark-icon" triggerOnce duration={1000}>
        <div></div>
      </Fade>
      <section className="hero-text">
        <Fade
          className="section-number"
          triggerOnce
          direction="left"
          duration={1500}
        >
          <h2 className="section-number">
            1 <span>.</span>
          </h2>
        </Fade>
        <Fade triggerOnce delay={100} duration={1500}>
          <img className="line" src={Line} alt="" />
        </Fade>

        <section>
          <Fade triggerOnce delay={100} duration={1000}>
            <h1>
              Skapar <span>responsiva</span> <br /> och{" "}
              <span>användarvänliga</span> <br /> hemsidor
            </h1>
          </Fade>
          <Fade triggerOnce cascade damping={0.4} delay={2000}>
            <ul>
              <img src={downOne} alt="" />
              <img src={downTwo} alt="" />
              <img src={downThree} alt="" />
            </ul>
          </Fade>
        </section>
      </section>
    </article>
  );
};

export default Hero;
