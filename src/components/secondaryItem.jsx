import * as React from "react";
import { AiFillGithub } from "react-icons/ai";

export default function ProjecItem({ data }) {
  return (
    <li
      className="secondary-projects"
      key={data.key}
      onClick={() => window.open("google.com", "_blank")}
    >
      <div className="secondary-projects__header">
        <a href="">
          <AiFillGithub />
        </a>
        <a href="">🔗</a>
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
    </li>
  );
}
