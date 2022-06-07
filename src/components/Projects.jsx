import * as React from "react";

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
