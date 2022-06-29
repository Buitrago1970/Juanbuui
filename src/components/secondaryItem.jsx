import * as React from "react";
import { AiFillGithub } from "react-icons/ai";

export default function ProjecItem({ data }) {
  return (
    <li className="secondary-projects" key={data.key}>
      <a href={data.link} target="_blank" rel="noreferrer nofollow">
        <div className="secondary-projects__header">
          <a href={data.github} target="_blank" rel="noreferrer nofollow">
            <AiFillGithub />
          </a>
          <a href={data.link} target="_blank" rel="noreferrer nofollow">
            🔗
          </a>
        </div>
        <div className="secondary-projects__main">
          <h3 className="secondary-projects__main__title">{data.title}</h3>
          <p className="secondary-projects__main__description">
            {data.description}
          </p>
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
