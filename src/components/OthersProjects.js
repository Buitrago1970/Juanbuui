import React, { useContext } from "react";
import ProjectItem from "./ProjectItem";


import "./styles/OthersProjects.css";
import ProjectContext from "../context/ProjectContext";

export default function OthersProjects() {
  const { secondaryProjects, secondaryProjectsAR } = useContext(ProjectContext);
  return (
    <>
      <div className=" container-others-projects">
        <h2 className="title title-others-projects">
          Otros proyectos destacados 🦄
        </h2>
        <ul className="project-list">
          {secondaryProjects.map((value) => (
            <ProjectItem key={value.key} data={value} />
          ))}
        </ul>
      </div>
    </>
  );
}
