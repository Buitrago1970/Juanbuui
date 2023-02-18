import React, { useContext, useState } from "react";
import ProjectItem from "./secondaryItem";
import ProjectContext from "../context/ProjectContext";

export default function OthersProjects() {
  const { secondaryProjects } = useContext(ProjectContext);
  const [showMore, setShowMore] = useState(false);
  const maxProjects = 6;

  const projectsToShow = showMore
    ? secondaryProjects
    : secondaryProjects.slice(0, maxProjects);

  const handleShowMore = () => {
    setShowMore(true);
  };
  return (
    <>
      <div className=" container-others-projects">
        <div className="container-titles">
          <p>03.</p>
          <h1 className="title-about">Otros Proyectos Destacados</h1>
        </div>
        <ul className="project-list">
          {projectsToShow.map((value) => (
            <ProjectItem key={value.key} data={value} />
          ))}
        </ul>
        {!showMore && secondaryProjects.length > maxProjects && (
          <button className="btn-show-more" onClick={handleShowMore}>
            Ver más
          </button>
        )}
      </div>
    </>
  );
}
