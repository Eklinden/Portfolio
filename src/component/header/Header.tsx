import { Fade } from 'react-awesome-reveal';
import logo from '../../assets/logo.svg';

import './Header.scss';

const header = () => {
  return (
    <header className="header">
        <Fade triggerOnce duration={2000}>
          <figure>
              <img src={logo} alt="" />
          </figure>
        </Fade>
        <a href="#" className="flex">
          <Fade direction="down" triggerOnce cascade damping={.05} duration={800}>
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
          </Fade>
        </a>
    </header>
  )
}

export default header