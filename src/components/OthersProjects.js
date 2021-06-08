import React from "react";
import ProjectItem from "./ProjectItem";
import "./styles/OthersProjects.css";

export default function OthersProjects() {
  return (
    <>
      <div className="container-projects container-others-projects">
        <h2 className="title title-others-projects">
          Other Noteworthy Projects
        </h2>
        <ul className="project-list">
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </ul>
      </div>
    </>
  );
}
