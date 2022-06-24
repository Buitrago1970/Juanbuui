import React, { useContext } from "react";
import ProjectItem from "./secondaryItem";
import ProjectContext from "../context/ProjectContext";

export default function OthersProjects() {
  const { secondaryProjects } = useContext(ProjectContext);
  return (
    <>
      <div className=" container-others-projects">
        <div className="container-titles">
          <p>03.</p>
          <h1 className="title-about">Otros Proyectos Destacados</h1>
        </div>
        <ul className="project-list">
          {secondaryProjects.map((value) => (
            <ProjectItem key={value.key} data={value} />
          ))}
        </ul>
      </div>
    </>
  );
}
