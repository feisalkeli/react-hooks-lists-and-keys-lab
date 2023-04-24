import React from "react";

function ProjectItem({ about, technologies, name }) {
  console.log(name);
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        <span>{technologies}</span>
      </div>
    </div>
  );
}

export default ProjectItem;
