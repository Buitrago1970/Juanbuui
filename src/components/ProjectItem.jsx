import React from "react";
import "./styles/ProjecItem.css";
import { AiFillGithub } from "react-icons/ai";
import { BsArrowBarUp } from "react-icons/bs";
export default function ProjecItem() {
  return (
    <>
      <li className="xxx">
        <div className="other-projects">
          <div className="header">
            <div className="project-top">
              <h2 className="title-other-projects">titulo proyecto</h2>
              <div className="icons-project">
                <a className="icon-project" href="/">
                  <AiFillGithub />
                </a>
                <a className="icon-project a-ne-resize" href="/">
                  <BsArrowBarUp />
                </a>
              </div>
            </div>
            <div className="project-description container-paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae beatae. Lorem ipsum dolor sit amet consectetur.
            </div>
          </div>
          <div className="footer-project-item">
            <ul className="technologies-list">
              <li className="">
                <div className="item-technologies">
                  <BsArrowBarUp />
                  react
                </div>
              </li>
              <li className="">
                <div className="item-technologies">
                  <BsArrowBarUp />
                  html
                </div>
              </li>
              <li className="">
                <div className="item-technologies">
                  <BsArrowBarUp />
                  css
                </div>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </>
  );
}
