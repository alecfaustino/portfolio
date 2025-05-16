import React from "react";
import "../styles/Projects.scss";
import projectsList from "../data/projects";
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

const techIcons = {
  html: <SiHtml5 title="HTML" />,
  css: <SiCss3 title="CSS" />,
  javascript: <SiJavascript title="JavaScript" />,
  react: <SiReact title="React" />,
  nodejs: <SiNodedotjs title="Node.js" />,
  expressjs: <SiExpress title="Express.js" />,
  ruby: <SiRuby title="Ruby" />,
  jquery: <SiJquery title="jQuery" />,
  cookies: <FaCookie title="cookies" />,
  bcrypt: <FaLock title="bcrypt" />,
  ajax: <FaExchangeAlt title="AJAX" />,
  bootstrap: <SiBootstrap title="bootstrap" />,
  sass: <SiSass title="sass" />,
  postgresql: <SiPostgresql title="PostgreSQL" />,
  mocha: <SiMocha title="mocha" />,
  git: <SiGit title="git" />,
  chai: <FaMugHot title="chai" />,
  mongodb: <SiMongodb title="MongoDB" />,
  rails: <SiRubyonrails title="Ruby on Rails" />,
};

const Projects = () => {
  return (
    <>
      <h2>myProjects</h2>
      <div className="project_cards_container">
        {[...projectsList]
          .sort((a, b) => b.id - a.id)
          .map((project) => (
            <div className="project_card" key={project.id}>
              <div>
                <img className="project_card_img" src={project.photo} />
              </div>
              <div>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <footer>
                  <h5>Tech Used: </h5>
                  <div className="tech_icon_container">
                    {project.stack.map((tech, index) => (
                      <span key={index} className="tech_icon">
                        {techIcons[tech]}
                      </span>
                    ))}
                  </div>
                </footer>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Projects;
