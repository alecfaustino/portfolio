import React from "react";
import "../styles/Projects.scss";
import projectsList from "../data/projects";
import techIcons from "../data/techicons";

const Projects = ({ setShowModal, setSelectedProject, showModal }) => {
  const handleModalClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
    console.log("Clicked project:", project);
    console.log("###", showModal);
  };
  return (
    <div className="projects_main_container">
      <h1>myProjects</h1>
      <div className="project_cards_container">
        {[...projectsList]
          .sort((a, b) => b.id - a.id)
          .map((project) => (
            <div
              className="project_card"
              key={project.id}
              onClick={() => handleModalClick(project)}>
              <div>
                <img className="project_card_img" src={project.photo[0]} />
              </div>
              <div>
                {project.deployedUrl ? (
                  <a
                    href={project.deployedUrl}
                    target="_blank"
                    rel="noopener noreferrer">
                    {project.title}
                  </a>
                ) : (
                  <h4>{project.title}</h4>
                )}
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
    </div>
  );
};

export default Projects;
