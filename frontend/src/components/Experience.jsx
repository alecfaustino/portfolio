import React from "react";
import "../styles/Experience.scss";
import experienceList from "../data/experiences";

const Experience = () => {
  return (
    <section className="experience-section">
      <h2>myExperience</h2>
      <div className="timeline">
        {experienceList.map((item, index) => (
          <div className="experience-item" key={index}>
            <div className="dot"></div>
            <div className="content">
              <h3>
                {item.title} <span>@ {item.company}</span>
              </h3>
              <p className="date">{item.date}</p>
              <ul>
                {item.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
