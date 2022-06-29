import * as React from "react";

export default function Projects({ data, image }) {
  // let container = "container-projects";
  // if (data.reverse) {
  //   container += "reverse";
  //   imgContainer += " container-img-projects-reverse";
  //   text += " container-text-projects-reverse";
  // }
  return (
    <li className="project" id="projects" key={data.key}>
      <div className="content">
        <div className="titles">
          <a href={data.link} target="_blank" rel="noreferrer nofollow">
            <h1 className="titles__title">{data.title}</h1>
          </a>
          <ul className="titles__color-list">
            <li>xxx</li>
            <li>xxx</li>
            <li>xxx</li>
            <li>xxx</li>
          </ul>
        </div>
        <div className="content__description">
          <p className="content__description__start-age">{data.endAge}</p>
          <div className="content__description__text">
            <p>{data.description}</p>
          </div>
        </div>
      </div>
      <div className="image-tech--project">
        <ul className="image-tech--project__list">
          {data.technologies.map((tech) => (
            <li>{tech}</li>
          ))}
        </ul>
        <a href={data.link} target="_blank" rel="noreferrer nofollow">
          <picture>
            <img src={image} alt="amg mercedes" />
            <figcaption>{data.figcaption}</figcaption>
          </picture>
        </a>
      </div>
      <br />
    </li>
  );
}
