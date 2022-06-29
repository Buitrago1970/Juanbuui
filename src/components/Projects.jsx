import * as React from "react";
import image from "../images/scope.png";

export default function Projects({ data }) {
  // let container = "container-projects";
  // let imgContainer = "container-img-projects";
  // let text = "container-text-projects";
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
            {/* <source media="(width: 100%)" srcset={image} />
          <source media="(width: 100%)" srcset={image} /> */}
            {data.image ? (
              <img src={data.image} alt="image" />
            ) : (
              <img src={image} alt="image" />
            )}

            <figcaption>{data.figcaption}</figcaption>
          </picture>
        </a>
      </div>
    </li>
  );
}
