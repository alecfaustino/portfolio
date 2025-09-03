import React from "react";
import "../styles/ProjectModal.scss";
import techIcons from "../data/techicons";
import ImageSlider from "./ImageSlider";

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
              <a href={project.deployedUrl} className="modal_urls">
                {project.deployedUrl}
              </a>
            </>
          )}
          <h2>Repo URL </h2>
          {project.repoURL && project.repoURL.startsWith("http") ? (
            <a href={project.repoURL} className="modal_urls">
              {project.repoURL}
            </a>
          ) : (
            <p>Repo Unavailable: Private Repo</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectModal;
