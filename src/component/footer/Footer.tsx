import facebookIcon from "../../assets/socials/facebookIcon.svg";
import instaIcon from "../../assets/socials/instaIcon.svg";
import linkedinIcon from "../../assets/socials/linkedinIcon.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <h2>Sociala Medier</h2>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/linus-eklind/">
            <img src={linkedinIcon} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/linus.eklind/">
            <img src={instaIcon} />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/linus.eklind.5">
            <img src={facebookIcon} />
          </a>
        </li>
      </ul>
      <p>© 2022 Linus Eklind</p>
    </footer>
  );
};

export default Footer;
