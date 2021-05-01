import React from "react";

//styles
import "./styles/Projects.css";
//images
// import PrincipalProject from "../images/1.jpg";
import project1 from "../images/estaes.png";
import project2 from "../images/oficial.png";

export default function Projects() {
  return (
    <>
      <div className="container-projects">
        <div className="container-img-projects">
          <a
            href="https://www.Surtisandiego.com"
            target="_blank"
            rel="noreferrer nofollow"
          >
            <img
              className=" img-principal-project"
              src={project1}
              alt="project img"
              id="projects"
            />
          </a>
        </div>
        <div className="container-text-projects ">
          <a
            className="title-project"
            href="https://www.Surtisandiego.com"
            target="_blank"
            rel="noreferrer nofollow"
          >
            SANDIEGO &rarr;
          </a>
          <div className="paragraph-projects">
            <p>
              Ecommerce para brindar la conveniencia de la entrega a domicilio a
              aquellos que admiran la verdadera calidad de Prime Beef, una
              variedad de carnes para todos los gustos y preferencias
            </p>
          </div>
        </div>
      </div>
      <div className="container-projects container-projects-rv">
        <div className=" container-img-projects-rv">
          <a
            href="https://oficialmente512.com/"
            target="_blank"
            rel="noreferrer nofollow"
          >
            <img
              className=" img-principal-project"
              src={project2}
              alt="project img"
            />
          </a>
        </div>
        <div className="container-text-projects container-text-projects-rv">
          <a
            className="title-project title-project-rv"
            href="https://oficialmente512.com/"
            target="_blank"
            rel="noreferrer nofollow"
          >
            Oficialmente512 &rarr;
          </a>
          <div className="paragraph-projects">
            <p>
              Compañia dedicada a la creacion en apps webs mobile utilizando
              tecnologias como React.js React Native Gatsby entre otras.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
