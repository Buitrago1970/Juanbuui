import React from "react";

//styles
import "./styles/Projects.css";
import { GoLinkExternal } from "react-icons/go";

export default function Projects({ data, image }) {
  let container = "container-projects";
  let imgContainer = "container-img-projects";
  let text = "container-text-projects";
  if (data.reverse) {
    container += " reverse";
    imgContainer += " container-img-projects-reverse";
    text += " container-text-projects-reverse";
  }
  return (
    <>
      <div className={container}>
        <div className={imgContainer}>
          <a href={data.link} target="_blank" rel="noreferrer nofollow">
            <img
              className="img-principal-project"
              src={image}
              alt="project img"
              id="projects"
            />
          </a>
        </div>
        <div className={text}>
          <a
            className="title-project"
            href={data.link}
            target="_blank"
            rel="noreferrer nofollow"
          >
            {data.title}

            <GoLinkExternal />
          </a>
          <div className="paragraph-projects">
            <p>{data.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <div className="container-projects">
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
  </div> */
}
