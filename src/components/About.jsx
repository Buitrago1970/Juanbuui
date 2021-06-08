import React from "react";

//styles
import "./styles/About.css";

//icons
import { FaReact, FaHtml5, FaCss3, FaGitAlt } from "react-icons/fa";
import { GrGatsbyjs } from "react-icons/gr";
import { SiJavascript, SiStylus, SiWebpack, SiNetlify } from "react-icons/si";
//compress images
import image from "../images/narutoS.jpg";

export default function About() {
  return (
    <>
      <div className="container work" id="about-me">
        <div className="container-paragraph">
          <h1 className="title-about">About Me</h1>
          <p>
            ¡Hola! Me llamo Juan Sebastian y disfruto creando cosas que viven en
            Internet. Mi interés en el desarrollo web comenzó en 2018 cuando
            decidi comezar con una proyecto vendiendo gafas en linea. aprendindo
            las bases de crear un sitio web con HTML-CSS-JAVASCRIPT.
          </p>
          <p>
            Actualmente me enfoco en crear y diseñar experiencias digitales
            excepcionales
          </p>
          <p>
            Aquí hay algunas tecnologías con las que he estado trabajando
            recientemente:
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
                <FaGitAlt className="icon-3" />
              </div>
              Git
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
                <SiWebpack className="icon-6" />
              </div>
              Webpack
            </li>
            <li>
              <div className="icon-containers-us">
                <GrGatsbyjs className="icon-7" />
              </div>
              gatsby
            </li>
            <li>
              <div className="icon-containers-us">
                <SiNetlify className="icon-8" />
              </div>
              Netlify
            </li>
            <li>
              <div className="icon-containers-us">
                <SiStylus className="icon-9" />
              </div>
              Stylus
            </li>
          </ul>
        </div>

        <div className="container-img">
          <img className="img-about-us" src={image} alt="project img" />
        </div>
      </div>
    </>
  );
}
