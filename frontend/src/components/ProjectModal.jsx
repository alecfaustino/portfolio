import React from "react";
import "../styles/ProjectModal.scss";
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
import ImageSlider from "./ImageSlider";

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

const ProjectModal = ({ project, setShowModal }) => {
  if (!project) return null;

  return (
    <>
      <div className="modal_overlay" onClick={() => setShowModal(false)}>
        <div className="modal_content" onClick={(e) => e.stopPropagation()}>
          <h2>{project.title}</h2>
          <ImageSlider photos={project.photo} />
          <p>{project.description}</p>
          <h2>Tech Used </h2>
          <div className="tech_icon_container">
            {project.stack.map((tech, index) => (
              <span key={index} className="tech_icon">
                {techIcons[tech]}
              </span>
            ))}
          </div>
          <p>{project.highlights}</p>
          {project.isDeployed && (
            <>
              <h2>Live URL</h2>
              <a href={project.deployedUrl}>{project.deployedUrl}</a>
            </>
          )}
          <h2>Repo URL </h2>
          <a href={project.repoURL}>{project.repoURL}</a>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;
