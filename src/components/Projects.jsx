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

        <div className="container-paragraph-projec">
          <h1 className="title-project">SANDIEGO</h1>
          <p className="class-projects">website</p>
        </div>
      </div>
    </>
  );
}
