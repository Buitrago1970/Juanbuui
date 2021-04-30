import React from "react";

//styles
import "./styles/Projects.css";
//images
import PrincipalProject from "../images/1.jpg";

export default function Projects() {
  return (
    <>
      <div className="container-projects">
        <div className="container-img-projects">
          <a href="#">
            <img
              className=" img-principal-project"
              src={PrincipalProject}
              alt="project img"
              id="projects"
            />
          </a>
        </div>
        <div className="container-text-projects ">
          <a className="title-project" href="/">
            SANDIEGO &rarr;
          </a>
          <div className="paragraph-projects">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
              exercitationem nobis veniam praesentium distinctio aliquam al
              reiciendis minima dolore! minima dolore! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Error quibusdam quam sapiente
              voluptate.
            </p>
          </div>
        </div>
      </div>
      <div className="container-projects container-projects-rv">
        <div className=" container-img-projects-rv">
          <a href="#">
            <img
              className=" img-principal-project"
              src={PrincipalProject}
              alt="project img"
            />
          </a>
        </div>
        <div className="container-text-projects container-text-projects-rv">
          <a className="title-project title-project-rv" href="/">
            SANDIEGO &rarr;
          </a>
          <div className="paragraph-projects">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
              exercitationem nobis veniam praesentium distinctio aliquam al
              reiciendis minima dolore! minima dolore! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Error quibusdam quam sapiente
              voluptate.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
