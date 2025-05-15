import React from "react";
import "../styles/Landing.scss";
import {
  SiJavascript,
  SiRuby,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiRubyonrails,
  SiJquery,
  SiBootstrap,
  SiSass,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiMocha,
} from "react-icons/si";
import { FaCookie, FaLock, FaMugHot, FaExchangeAlt } from "react-icons/fa";
import { useState } from "react";

const Landing = () => {
  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = () => setShowAll((prev) => !prev);
  return (
    <>
      <div className="landing_main_container">
        <div className="landing_image_container">
          <img className="landing_main_img" src="../../public/mainphoto.jpg" />
        </div>
        <div className="landing_interactive_container">
          <section className="landing_Aboutme_container">
            <h2>aboutMe</h2>
            <p>
              I’m a <strong>software developer</strong> based in{" "}
              <strong>Calgary</strong> with a background in
              <strong>team leadership</strong> and a focus on building{" "}
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
            <button className="landing_buttons">downloadCV</button>
            <button className="landing_buttons">contactMe</button>
          </div>
          <div className="landing_facts_button_container">
            <div className="landing_skills">
              <h2>mySkills</h2>
              <div
                className={`tech_icons_grid ${
                  showAll ? "expanded" : "collapsed"
                }`}>
                <div className="tech_icon">
                  <SiJavascript title="JavaScript" />
                  <p>JavaScript</p>
                </div>
                <div className="tech_icon">
                  <SiReact title="React" />
                  <p>React</p>
                </div>
                <div className="tech_icon">
                  <SiNodedotjs title="Node.js" />
                  <p>Node.js</p>
                </div>
                <div className="tech_icon">
                  <SiExpress title="Express" />
                  <p>Express</p>
                </div>
                <div className="tech_icon">
                  <SiMongodb title="MongoDB" />
                  <p>MongoDB</p>
                </div>
                <div className="tech_icon">
                  <SiPostgresql title="PostgreSQL" />
                  <p>PostgreSQL</p>
                </div>
                <div className="tech_icon">
                  <SiHtml5 title="HTML" />
                  <p>HTML</p>
                </div>
                <div className="tech_icon">
                  <SiCss3 title="CSS" />
                  <p>CSS</p>
                </div>
                <div className="tech_icon">
                  <SiSass title="SASS" />
                  <p>SASS</p>
                </div>
                <div className="tech_icon">
                  <SiBootstrap title="Bootstrap" />
                  <p>Bootstrap</p>
                </div>
                <div className="tech_icon">
                  <SiJquery title="jQuery" />
                  <p>jQuery</p>
                </div>
                <div className="tech_icon">
                  <SiMocha title="Mocha" />
                  <p>Mocha</p>
                </div>
                <div className="tech_icon">
                  <FaMugHot title="Chai" />
                  <p>Chai</p>
                </div>
                <div className="tech_icon">
                  <FaLock title="bcrypt" />
                  <p>bcrypt</p>
                </div>
                <div className="tech_icon">
                  <FaCookie title="cookie_session" />
                  <p>cookie_session</p>
                </div>
                <div className="tech_icon">
                  <SiRuby title="Ruby" />
                  <p>Ruby</p>
                </div>
                <div className="tech_icon">
                  <SiRubyonrails title="Rails" />
                  <p>Rails</p>
                </div>
                <div className="tech_icon">
                  <FaExchangeAlt title="AJAX" />
                  <p>AJAX</p>
                </div>
                <div className="tech_icon">
                  <SiGit title="Git" />
                  <p>Git</p>
                </div>
              </div>
              <button onClick={toggleShowAll} className="show_more_btn">
                {showAll ? "Show less" : "Show more"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
