import React from "react";
import "../styles/Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="footer_main_container">
        <div className="footer_left">
          <p className="footer_contact_logos">
            <FontAwesomeIcon icon={faLocationDot} /> Calgary, AB
          </p>
        </div>
        <div className="footer_mid">
          <p>Actively Seeking Opportunities</p>
        </div>
        <div className="footer_logo_container">
          <ul>
            <li className="footer_contact_logos">
              <a
                href="https://www.linkedin.com/in/alecfaustino/"
                target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </li>
            <li className="footer_contact_logos">
              <a href="mailto:alecfaustino9@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </a>
            </li>

            <li className="footer_contact_logos">
              <a href="https://github.com/alecfaustino" target="_blank">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
