import React from "react";
import "../styles/Navigation.scss";

const Navigation = () => {
  return (
    <>
      <div className="nav_container">
        <div className="nav_branding">
          <img
            className="nav_img"
            src="../../public/compressed_image_new.jpg"
            alt="small photo of Alec Faustino"></img>
          <h2 className="nav_name">Alec Faustino</h2>
        </div>
        <div className="nav_topics_container">
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>Experience</li>
            <li>Interests</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
