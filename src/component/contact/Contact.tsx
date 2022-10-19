import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Line from "../../assets/line.svg";
import { refObj } from "../../interface/data";
import "./Contact.scss";

const Contact = () => {
  const [nameOpen, setNameOpen] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);

  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  function checkName() {
    if (!name) {
      setNameOpen(false);
    }
    return;
  }
  function checkMessage() {
    if (!message) {
      setMessageOpen(false);
    }
    return;
  }
  function sendMail() {
    window.open(`mailto:l.eklind1@gmail.com?subject=${name}&body=${message}`);
  }

  return (
    <article className="contact">
      <h2 className="section-number">
        4 <span>.</span>
      </h2>
      <figure className="line">
        <img src={Line} alt="" />
      </figure>
      <section className="contact-container">
        <h2 className="section-title">kontakta mig</h2>
        <form onSubmit={() => sendMail()} className="contact-form">
          <Fade
            triggerOnce
            direction="left"
            duration={1000}
            cascade
            damping={0.1}
          >
            <div className="user-box">
              <input
                onChange={(e) => setName(e.target.value)}
                onBlur={() => checkName()}
                onSelect={() => setNameOpen(true)}
                type="text"
                name=""
                required
              />
              <label className={nameOpen ? "targeted" : ""} htmlFor="">
                Namn*
              </label>
            </div>
            <div className="user-box">
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                onBlur={() => checkMessage()}
                onSelect={() => setMessageOpen(true)}
                name="message"
                required
              />
              <label
                className={`contact-message ${
                  messageOpen ? "targeted-message" : ""
                }`}
                htmlFor="message"
              >
                Meddelande*
              </label>
            </div>
            <input className="btn btn--submit" type="submit" value="submit" />
          </Fade>
        </form>
      </section>
    </article>
  );
};

export default Contact;
