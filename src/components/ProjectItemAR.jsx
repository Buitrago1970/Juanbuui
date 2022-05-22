import * as React from "react";

import "./styles/ProjecItemAR.css";
import { BsArrowBarUp } from "react-icons/bs";


export default function ProjecItemAR({ data }) {
  return (
    <>
      <a
        className={"container-projects-secondary-projects"}
        key={data.key}
        href={data.link}
        target="_blank"
        rel="noreferrer nofollow"
      >
        <li className="xxx xxxAR">
          <div className="other-projects">
            <div className="header">
              <div className="project-top">
                {data.image ? (
                  <img className="gymclass" src={`${data.image}`} alt="" />
                ) : null}

                <h2 className="title-other-projects">{data.title}</h2>
                <div className="icons-projectAR">
                
                  <a
                    className="icon-project a-ne-resize"
                    href={data.link}
                    target="_blank"
                    rel="noreferrer nofollow"
                  >
                    <BsArrowBarUp />
                  </a>
                </div>
              </div>
              <div className="project-description container-paragraph">
                {data.description}
              </div>
            </div>
            <div className="footer-project-item">
              <ul className="technologies-list">
                <li className="">
                  <div
                    style={{ color: data.technologies.primero.color }}
                    className="item-technologies"
                  >
                    {data.technologies.primero.name}
                  </div>
                </li>

                <li className="">
                  <div className="item-technologies">
                    {data.technologies.segundo
                      ? data.technologies.segundo.name
                      : null}
                  </div>
                </li>

                <li className="">
                  <div ull className="item-technologies">
                    {data.technologies.tercero
                      ? data.technologies.tercero.name
                      : null}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </a>
    </>
  );
}
