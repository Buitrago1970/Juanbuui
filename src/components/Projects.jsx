import React from "react";

//styles
import "./styles/Projects.css";
import { GoLinkExternal } from "react-icons/go";

export default function Projects({ data }) {
  console.log(data);
  return (
    <>
      <div className="container-projects">
        <div className="container-img-projects">
          <a href={data.link} target="_blank" rel="noreferrer nofollow">
            <img
              className="img-principal-project"
              src={data.path}
              alt="project img"
              id="projects"
            />
          </a>
        </div>
        <div className="container-text-projects ">
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
