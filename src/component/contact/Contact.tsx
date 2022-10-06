import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Line from "../../assets/line.svg";
import { refObj } from "../../interface/data";
import "./Contact.scss";

const Contact = () => {
  const [emailOpen, setEmailOpen] = useState(false);
  const [nameOpen, setNameOpen] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  function checkName() {
    if (!name) {
      setNameOpen(false);
    }
    return;
  }
  function checkEmail() {
    if (!email) {
      setEmailOpen(false);
    }
    return;
  }
  function checkMessage() {
    if (!message) {
      setMessageOpen(false);
    }
    return;
  }

  return (
    <article className="contact">
      <h2 className="section-number">
        4 <span>.</span>
      </h2>
      <figure>
        <img src={Line} alt="" />
      </figure>
      <section className="contact-container">
        <h2 className="section-title">kontakta mig</h2>
        <form action="" className="contact-form">
          <Fade
            triggerOnce
            direction="left"
            duration={1500}
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
              <input
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => checkEmail()}
                onSelect={() => setEmailOpen(true)}
                type="email"
                name=""
                required
              />
              <label className={emailOpen ? "targeted" : ""} htmlFor="">
                E-mail*
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
