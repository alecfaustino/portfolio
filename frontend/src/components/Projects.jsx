import React from "react";
import "../styles/Projects.scss";
import projectsList from "../data/projects";
const Projects = () => {
  return (
    <>
      <h1>Working</h1>
      <div className="project_cards_container">
        {projectsList.map((project) => (
          <div className="project_card" key={project.id}>
            {project.id}
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
