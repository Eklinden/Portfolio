import { keyframes } from "@emotion/react";
import { useState } from 'react';
import { Fade, Reveal } from 'react-awesome-reveal';
import './App.scss';
import CodeLang from './component/codelang/CodeLang';
import Contact from './component/contact/Contact';
import Header from './component/header/Header';
import Hero from './component/hero/Hero';
import Projects from './component/projects/Projects';
import './scss/standard.scss';


function App() {
  const [showContent, setshowContent] = useState(true)
  setTimeout(() => {
    setshowContent(false)
  }, 3500);
  
  const loadOutAni = keyframes`
  0% {
    opacity: 0;
    transform: translateY(0);
  }

  30% {
    opacity: 1;
    transform: translateY(-115px);
  }
  70% {
    opacity: 1;
    transform: translateY(-115px);
  }
  100% {
    opacity: 0;
    transform: translateY(0);
  }
`;

  return (      
    <div className="App">
      {
        showContent? (
          <div className="centered">
            <h1 id="loading-text">
              <Reveal keyframes={loadOutAni} duration={2200} cascade damping={.035}>
                <div className="chars">l</div>
                <div className="chars">i</div>
                <div className="chars">n</div>
                <div className="chars">u</div>
                <div className="chars">s</div>
                <div className="chars">.</div>
                <div className="chars">e</div>
                <div className="chars">k</div>
                <div className="chars">l</div>
                <div className="chars">i</div>
                <div className="chars">n</div>
                <div className="chars">d</div>
              </Reveal>
            </h1>
          </div>
        ):
        (
      <div>
        <Header/>
        <Hero />
        <Projects />
        <CodeLang />
        <Contact />
      </div>
        )
      }
    </div>
  )
}

export default App
