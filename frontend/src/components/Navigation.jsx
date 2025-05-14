import React from "react";
import "../styles/Navigation.scss";

const Navigation = ({ selectTopic, topic }) => {
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
            <li
              onClick={() => {
                selectTopic("landing");
                console.log(topic);
              }}>
              Home
            </li>
            <li
              onClick={() => {
                selectTopic("projects");
                console.log(topic);
              }}>
              Projects
            </li>
            <li
              onClick={() => {
                selectTopic("experience");
                console.log(topic);
              }}>
              Experience
            </li>
            <li
              onClick={() => {
                selectTopic("interests");
                console.log(topic);
              }}>
              Interests
            </li>
            <li
              onClick={() => {
                selectTopic("contact");
                console.log(topic);
              }}>
              Contact
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
