import React from "react";

//styles
import "./styles/SecondaryProjects.css";
//images
import project from "../images/Captura de pantalla (21).png";
export default function SecondaryProjects() {
  return (
    <>
      <div className="container-projects  container-secondary-projects">
        <div className="container-img-SP-projects">
          <a
            href="https://platzi.com/p/juan-sebastian-buitrago/"
            target="_blank"
            rel="noreferrer nofollow"
          >
            <img
              className=" img-principal-project"
              src={project}
              alt="project img"
            />
          </a>
        </div>
        <div className="container-text-projects ">
          <a
            className="title-project title-secondary-project"
            href="https://platzi.com/p/juan-sebastian-buitrago/"
            target="_blank"
            rel="noreferrer nofollow"
          >
            Cursos Aprobados &rarr;
          </a>
          <p className="sse">Certificados</p>
          <div className="paragraph-projects">
            {/* <p>Certificados obtenidos en plataformas como Platzi.</p> */}
          </div>
        </div>
      </div>
    </>
  );
}
