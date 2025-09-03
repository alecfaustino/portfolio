import React from "react";
import "../styles/Landing.scss";
import techIcons from "../data/techicons";
import { useState } from "react";

const Landing = ({ selectTopic, handleDownload }) => {
  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = () => setShowAll((prev) => !prev);

  return (
    <>
      <div className="landing_main_container">
        <div className="landing_image_container">
          <h2>Hello World, I'm Alec.</h2>
          <img
            className="landing_main_img"
            src="/mainphoto.jpg"
            alt="profile photo of Alec"
          />
        </div>
        <div className="landing_interactive_container">
          <section className="landing_Aboutme_container">
            <h2>aboutMe</h2>
            <p>
              I’m a <strong>software developer</strong> based in{" "}
              <strong>Calgary</strong> with a background in
              <strong> team leadership</strong> and a focus on building{" "}
              <em>thoughtful, user-centered</em> web applications.
            </p>
            <p>
              Before transitioning into tech, I earned a{" "}
              <strong>
                Bachelor of Science in Cellular and Molecular Biology
              </strong>
              , originally planning to pursue medicine. But along the way, I
              realized the reasons I was drawn to that path —
              <strong>continuous learning</strong>,{" "}
              <strong>career growth</strong>, and working in a{" "}
              <strong>professional, problem-solving environment</strong> — were
              also deeply present in <strong>software development</strong>.
            </p>
            <p>
              I began learning the <strong>JavaScript ecosystem</strong> through
              hands-on projects and a <strong>full-time bootcamp</strong>, and
              I’m always open to learning new tools and technologies as the work
              requires.
            </p>
            <p>
              My experience leading teams taught me how to{" "}
              <strong>collaborate</strong>,{" "}
              <strong>solve problems efficiently</strong>, and
              <strong>follow through on delivering results</strong> — skills I
              now bring to writing <strong>clear, maintainable code</strong>.
              I’m looking to join a team where I can continue building{" "}
              <em>useful software</em> and growing as a developer.
            </p>
          </section>
          <div className="landing_contact_buttons_container">
            <button
              onClick={() => handleDownload()}
              className="landing_buttons">
              downloadCV
            </button>

            <button
              onClick={() => selectTopic("contact")}
              className="landing_buttons">
              contactMe
            </button>
          </div>
          <div className="landing_facts_button_container">
            <div className="landing_skills">
              <h2>mySkills</h2>
              <div
                className={`tech_icons_grid ${
                  showAll ? "expanded" : "collapsed"
                }`}>
                {Object.entries(techIcons).map(([name, Icon]) => (
                  <div className="tech_icon" key={name}>
                    {Icon}
                    <p>{Icon.props.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={toggleShowAll} className="show_more_btn">
              {showAll ? "Show less" : "Show more"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
