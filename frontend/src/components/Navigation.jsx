import React, { useState } from "react";
import "../styles/Navigation.scss";

const Navigation = ({ selectTopic }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (topic) => {
    selectTopic(topic);
    setMenuOpen(false); // Close menu on navigation
  };

  return (
    <div className="nav_container">
      <div className="nav_branding" onClick={() => handleNavClick("landing")}>
        <img
          className="nav_img"
          src="/compressed_image_new.jpg"
          alt="small photo of Alec Faustino"
        />
        <h2 className="nav_name">Alec Faustino</h2>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen((prev) => !prev)}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>

      <div className={`nav_topics_container ${menuOpen ? "open" : ""}`}>
        <ul>
          <li onClick={() => handleNavClick("landing")}>Home</li>
          <li onClick={() => handleNavClick("projects")}>Projects</li>
          <li onClick={() => handleNavClick("experience")}>Experience</li>
          <li onClick={() => handleNavClick("contact")}>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
