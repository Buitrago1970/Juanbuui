import React from "react";

//styles
import "./styles/About.css";
//images
import about from "../images/narutoS.jpg";
//icons
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { GrGatsbyjs } from "react-icons/gr";
import { SiJavascript, SiStylus } from "react-icons/si";

export default function About() {
  return (
    <>
      <div className="container work" data-aos="fade-up">
        {/*CAMBIAR POR UN LINK DE REACT ROUTER */}

        <div className="container-paragraph">
          <h1 className="title-about">About Me</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            exercitationem nobis veniam praesentium distinctio aliquam al
            reiciendis minima dolore! minima dolore!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Su
            accusantium a corrupti quaerat quia ipsum necessitatib iusto
            possimus quam! sto possimus quam!
          </p>
          <ul className="skills-list">
            <li>
              <div className="icon-containers-us">
                <SiJavascript className="icon-1" />
              </div>
              JavaScript (ES6+)
            </li>
            <li>
              <div className="icon-containers-us">
                <FaReact className="icon-2" />
              </div>
              React
            </li>
            <li>
              <div className="icon-containers-us">
                <GrGatsbyjs className="icon-3" />
              </div>
              gatsby
            </li>
            <li>
              <div className="icon-containers-us">
                <FaHtml5 className="icon-4" />
              </div>
              HTML
            </li>
            <li>
              <div className="icon-containers-us">
                <FaCss3 className="icon-5" />
              </div>
              Css
            </li>
            <li>
              <div className="icon-containers-us">
                <SiStylus className="icon-6" />
              </div>{" "}
              Stylus
            </li>
          </ul>
        </div>
        <div className="container-img">
          <img
            className="img img-principal-project"
            src={about}
            alt="project img"
          />
        </div>
      </div>
    </>
  );
}
