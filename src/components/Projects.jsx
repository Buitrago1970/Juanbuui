import React from "react";

//styles
import "./styles/Projects.css";
//images
import principalProjects from "../images/1.jpg";

export default function Projects() {
  return (
    <>
      <div className="container-projects">
        <div className="container-img-projects">
          <a href="#">
            <img
              className=" img-principal-project"
              src={principalProjects}
              alt="project img"
            />
          </a>
        </div>

        <div className="container-text-projects">
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
    </>
  );
}
