import React from "react";
import ProjectItem from "./ProjectItem";
import { myProjects } from "../Data";
import "../css/projects.css"
function Projects() {
  return (
    <>
      <span className="anchor-projects" id="section-projects"></span>
      <div className="projects" id="section-projects">
        
        <div className="project-list">
          {myProjects.map((project, key) => {
            return (
              <ProjectItem
                key={key}
                name={project.name}
                description={project.description}
                url={project.url}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
