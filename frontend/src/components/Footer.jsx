import React from "react";
import "../styles/Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="footer_main_container">
        <div>
          <h3>Unique Visitors Today: 24</h3>
        </div>
        <div>
          <h3>Server is: Live 🟢</h3>
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
      </div>
    </>
  );
};

export default Footer;
