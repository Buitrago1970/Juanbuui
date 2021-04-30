import React from "react";

//styles
import "./styles/SecondaryProjects.css";
//images
import project from "../images/descarga.jpg";
export default function SecondaryProjects() {
  return (
    <>
      <div className="container-projects  container-secondary-projects">
        <div className="container-img-SP-projects">
          <a href="#">
            <img
              className=" img-principal-project"
              src={project}
              alt="project img"
            />
          </a>
        </div>
        <div className="container-text-projects ">
          <a className="title-project title-secondary-project" href="/">
            GAME &rarr;
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
