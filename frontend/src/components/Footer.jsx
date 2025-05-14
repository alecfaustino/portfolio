import React from "react";
import "../styles/Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="footer_main_container">
        <div>
          <p>Unique Visitors Today: 24</p>
        </div>
        <div>
          <p>Server is: Live 🟢</p>
        </div>
        <div className="footer_logo_container">
          <ul>
            <li className="footer_contact_logos">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </li>
            <li className="footer_contact_logos">
              <FontAwesomeIcon icon={faPhone} size="2x" />
            </li>
            <li className="footer_contact_logos">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </li>
            <li className="footer_contact_logos">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
