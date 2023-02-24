import * as React from "react";
import { AiFillGithub } from "react-icons/ai";

export default function ProjecItem({ data }) {
  return (
    <li className="secondary-projects" key={data.key}>
      <a
        href={data.link}
        target="_blank"
        rel="noreferrer nofollow"
        className="secondary-projects__body"
      >
        <div className="secondary-projects__header">
          <a
            href={data.github}
            target="_blank"
            rel="noreferrer nofollow"
            className="github-icon-2items"
          >
            <AiFillGithub />
          </a>

          <a
            href={data.link}
            target="_blank"
            rel="noreferrer nofollow"
            className="link-icon-2items"
          >
            🔗
          </a>
        </div>
        <div className="secondary-projects__main">
          <h3 className="secondary-projects__main__title">{data.title}</h3>
          <div className="secondary-projects__main__description-container">
            <p className="secondary-projects__main__description">
              {data.description}
            </p>
          </div>
        </div>
        <ul className="secondary-projects__tech-list">
          {data.technologies.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </a>
    </li>
  );
}
