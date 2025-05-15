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

const Landing = () => {
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
            <button className="landing_buttons">downloadCV();</button>
            <button className="landing_buttons">contactMe();</button>
          </div>
          <div className="landing_facts_button_container">
            <div className="landing_skills">
              <h2>mySkills</h2>
              <div className="tech-icons-grid">
                <div className="tech-icon">
                  <SiJavascript title="JavaScript" />
                  <p>JavaScript</p>
                </div>
                <div className="tech-icon">
                  <SiReact title="React" />
                  <p>React</p>
                </div>
                <div className="tech-icon">
                  <SiNodedotjs title="Node.js" />
                  <p>Node.js</p>
                </div>
                <div className="tech-icon">
                  <SiExpress title="Express" />
                  <p>Express</p>
                </div>
                <div className="tech-icon">
                  <SiMongodb title="MongoDB" />
                  <p>MongoDB</p>
                </div>
                <div className="tech-icon">
                  <SiPostgresql title="PostgreSQL" />
                  <p>PostgreSQL</p>
                </div>
                <div className="tech-icon">
                  <SiHtml5 title="HTML" />
                  <p>HTML</p>
                </div>
                <div className="tech-icon">
                  <SiCss3 title="CSS" />
                  <p>CSS</p>
                </div>
                <div className="tech-icon">
                  <SiSass title="SASS" />
                  <p>SASS</p>
                </div>
                <div className="tech-icon">
                  <SiBootstrap title="Bootstrap" />
                  <p>Bootstrap</p>
                </div>
                <div className="tech-icon">
                  <SiJquery title="jQuery" />
                  <p>jQuery</p>
                </div>
                <div className="tech-icon">
                  <SiMocha title="Mocha" />
                  <p>Mocha</p>
                </div>
                <div className="tech-icon">
                  <FaMugHot title="Chai" />
                  <p>Chai</p>
                </div>
                <div className="tech-icon">
                  <FaLock title="bcrypt" />
                  <p>bcrypt</p>
                </div>
                <div className="tech-icon">
                  <FaCookie title="cookie-session" />
                  <p>cookie-session</p>
                </div>
                <div className="tech-icon">
                  <SiRuby title="Ruby" />
                  <p>Ruby</p>
                </div>
                <div className="tech-icon">
                  <SiRubyonrails title="Rails" />
                  <p>Rails</p>
                </div>
                <div className="tech-icon">
                  <FaExchangeAlt title="AJAX" />
                  <p>AJAX</p>
                </div>
                <div className="tech-icon">
                  <SiGit title="Git" />
                  <p>Git</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
