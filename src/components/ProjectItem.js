import React from "react";

function ProjectItem(props) {
  console.log(props);
  return (
    <div className="project-item">
      <h3>{props.name}</h3>
      <p>{}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
      </div>
    </div>
  );
}

export default ProjectItem;
