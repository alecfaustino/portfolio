import React from "react";
import "../styles/Navigation.scss";

const Navigation = ({ selectTopic, topic }) => {
  return (
    <>
      <div className="nav_container">
        <div className="nav_branding" onClick={() => selectTopic("landing")}>
          <img
            className="nav_img"
            src="../../public/compressed_image_new.jpg"
            alt="small photo of Alec Faustino"></img>
          <h2 className="nav_name">Alec Faustino</h2>
        </div>
        <div className="nav_topics_container">
          <ul>
            <li onClick={() => selectTopic("landing")}>Home</li>
            <li onClick={() => selectTopic("projects")}>Projects</li>
            <li onClick={() => selectTopic("experience")}>Experience</li>
            <li onClick={() => selectTopic("interests")}>Interests</li>
            <li onClick={() => selectTopic("contact")}>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
