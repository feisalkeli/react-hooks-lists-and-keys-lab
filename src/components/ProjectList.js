import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  // const newList = {
  //   id: projects.id,
  //   name: projects.name,
  //   about: projects.about,
  //   technologies: projects.technologies,
  // };
  // const newList = projects.map((lists) => {
  //   <li key={lists.id}>{lists}</li>;
  // });

  // console.log(newList);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        <ProjectItem
          technologies={projects.map((user) => {
            <div key={user.id}></div>;
            <span>{user.name}</span>;
            <span>{user.about}</span>;
            <span>{user.technologies}</span>;
          })}
        />
      </div>
    </div>
  );
}

export default ProjectList;
