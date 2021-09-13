import * as React from "react";
//styles
import "./styles/About.css";

//icons
import { FaReact, FaHtml5, FaCss3, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiWebpack } from "react-icons/si";
import pythonIcon from "../images/python-5.svg";
//compress images
import image from "../images/giphy.gif";

export default function About() {
  return (
    <>
      <div className="container work" id="about-me">
        <div className="container-paragraph">
          <h1 className="title-about">Sobre mí</h1>
          <p>
            !Hola¡ Mi nombre es Juan Buitrago y Me encanta diseñar interfaces
            frescas con atencion al detalle y coherencia para una representacion
            brillante✨
          </p>
          <p>
            Tengo 2 años de experiencia en el diseño y la capacidad de llevar
            conceptos a la vida a través del desarrollo front-end para proyectos
            👨‍💻
          </p>
          <p>
            Aquí hay algunas tecnologías con las que he estado trabajando
            recientemente:
          </p>
          <ul className="skills-list">
            <li title="→_→">
              <div className="icon-containers-us">
                <SiJavascript className="icon-1" />
              </div>
              JavaScript (ES6+)
            </li>
            <li title="🦄">
              <div className="icon-containers-us">
                <FaReact className="icon-2" />
              </div>
              React
            </li>

            <li title="🐈">
              <div className="icon-containers-us">
                <FaGitAlt className="icon-3" />
              </div>
              Git
            </li>

            <li title="←_←">
              <div className="icon-containers-us">
                <FaHtml5 className="icon-4" />
              </div>
              HTML
            </li>
            <li title="✨">
              <div className="icon-containers-us">
                <FaCss3 className="icon-5" />
              </div>
              Css
            </li>
            <li title="📦">
              <div className="icon-containers-us">
                <SiWebpack className="icon-6" />
              </div>
              Webpack
            </li>
            <li title="🐍">
              <div className="icon-containers-us">
                <img className="python-icon" src={pythonIcon} alt="" />
              </div>
              Python
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
