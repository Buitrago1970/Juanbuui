import React, { useContext } from "react";
import ProjectItem from "./ProjectItem";
import ProjectItemAR from "./ProjectItemAR";

import "./styles/OthersProjectsAR.css";
import ProjectContext from "../context/ProjectContext";

export default function OthersProjects() {
  const { secondaryProjects, secondaryProjectsAR } = useContext(ProjectContext);
  return (
    <>
      <div className="container-projects container-others-projects">
        <h2 className="title title-others-projects">
          Otros proyectos destacados 🦄
        </h2>
        <ul className="project-list">
          {secondaryProjects.map((value) => (
            <ProjectItem key={value.key} data={value} />
          ))}
          {secondaryProjectsAR.map((value) => (
            <ProjectItemAR key={value.key} data={value} />
          ))}
        </ul>
      </div>
    </>
  );
}
