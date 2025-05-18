import React from "react";
import "../styles/Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="footer_main_container">
        <div>
          <p>Unique Visitors (feature coming soon)</p>
        </div>
        <div>
          <p>Server is: (Backend server indicator coming soon)</p>
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
