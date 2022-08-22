import React from "react";
import "../css/projects.css"

function ProjectItem({ name, description, url }) {
  return (
    <div className="project-item">
      <a href={url} target="_blank">
        <p className="project-title">{name}</p>
        <p className="project-description">{description}</p>
      </a>
    </div>
  );
}

export default ProjectItem;
