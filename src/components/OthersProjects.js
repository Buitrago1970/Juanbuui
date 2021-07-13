import React, { useContext } from "react";
import ProjectItem from "./ProjectItem";
import "./styles/OthersProjects.css";
import ProjectContext from "../context/ProjectContext";

export default function OthersProjects() {
  const { secondaryProjects } = useContext(ProjectContext);
  return (
    <>
      <div className="container-projects container-others-projects">
        <h2 className="title title-others-projects">
          Other Noteworthy Projects
        </h2>
        <ul className="project-list">
          {secondaryProjects.map((value) => (
            <ProjectItem data={value} />
          ))}
        </ul>
      </div>
    </>
  );
}
