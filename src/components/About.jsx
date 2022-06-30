import * as React from "react";

//icons
import { FaReact, FaHtml5, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiNextdotjs } from "react-icons/si";
import { DiSass } from "react-icons/di";
import pythonIcon from "../images/python-5.svg";
import webflowIcon from "../images/Webflow.svg";
//compress images
import image from "../images/giphy.gif";

export default function About() {
  return (
    <>
      <article id="about-me">
        <div className="container-paragraph">
          <div className="container-titles">
            <p>01.</p>
            <h1 className="title-about">Sobre mí</h1>
          </div>
          <p>
            👋 ¡Hola! Mi nombre es Juan Buitrago y Me encanta diseñar interfaces
            frescas con atencion al detalle y coherencia para una representacion
            brillante, tengo 3 años de experiencia en el diseño y la capacidad
            de llevar conceptos a la vida a través del desarrollo front-end para
            proyectos 👨‍💻
          </p>
          <p>
            Avanzando rápido hasta hoy, he tenido el privilegio de trabajar con
            herramientas de realidad aumentada Spark AR,{" "}
            {
              <a
                href="https://www.instagram.com/0_0hentay_kun0_0/"
                rel="noopener"
                target="_blank"
                className="link__aboutMe"
              >
                creando filtros
              </a>
            }{" "}
            para Instagram, Facebook, Messenger con mas 200k vistas
          </p>
          <p>
            Recientemente lance{" "}
            {
              <a
                href="https://harvard-api.netlify.app"
                rel="noopener"
                target="_blank"
                className="link__aboutMe"
              >
                una pagina con conexión a la API del museo de arte de Harvard
              </a>
            }{" "}
            para visualizar su catalogo de obras de arte usando React, Axios y
            styles Components
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
              Git/GitHub
            </li>

            <li title="←_←">
              <div className="icon-containers-us">
                <FaHtml5 className="icon-4" />
              </div>
              HTML
            </li>
            <li title="✨">
              <div className="icon-containers-us">
                <DiSass className="icon-5" />
              </div>
              Sass
            </li>
            <li title="📦">
              <div className="icon-containers-us">
                <SiNextdotjs className="icon-6" />
              </div>
              Next.js
            </li>
            <li title="🐍">
              <div className="icon-containers-us">
                <img className="python-icon" src={pythonIcon} alt="" />
              </div>
              Python
            </li>
            <li title="x">
              <div className="icon-containers-us">
                <img className="python-icon" src={webflowIcon} alt="" />
              </div>
              Webflow
            </li>
          </ul>
        </div>
        <div className="container-img">
          <img className="img-about-us" src={image} alt="project img" />
        </div>
      </article>
    </>
  );
}
