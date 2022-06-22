import * as React from "react";
import "./styles/ProjecItem.css";
import { AiFillGithub } from "react-icons/ai";
import { BsArrowBarUp } from "react-icons/bs";
export default function ProjecItem({ data }) {
  return (
    <>
        <li className="projects__" key={data.key} onClick={()=>window.open('google.com', '_blank')}>
          <div className="other-projects">
            <div className="header">
              <div className="project-top">
                {data.image ? (
                  <img className="gymclass" src={`${data.image}`} alt="" />
                ) : null}

                <h2 className="title-other-projects">{data.title}</h2>
                <div className="icons-project">
                  <a
                    className="icon-project"
                    href={data.github}
                    target="_blank"
                    rel="noreferrer nofollow"
                  >
                    <AiFillGithub />
                  </a>
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
    </>
  );
}
