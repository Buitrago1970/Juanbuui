import * as React from "react";

//icons
import { FaReact, FaHtml5, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiNextdotjs } from "react-icons/si";
import { DiSass } from "react-icons/di";
import pythonIcon from "../images/python-5.svg";
import webflowIcon from "../images/Webflow.svg";
//compress images
import image from "../images/about2.png";

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
            👋¡Hola! Soy Juan Buitrago, un desarrollador frontend apasionado por
            crear interfaces frescas y coherentes con atención al detalle. Con
            más de 4 años de experiencia en diseño y desarrollo, tengo la
            habilidad de transformar conceptos en realidad a través del
            desarrollo frontend.
          </p>
          <p>
            Me complace presentar mi última creación: Utilicé Next.js, Redux y
            Tailwind para garantizar una experiencia de usuario excepcional y un
            rendimiento óptimo.
            {
              <a
                href="https://harvard-api.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="link__aboutMe"
              >
                una tienda en línea de alta calidad construida en Next.js con
                una interfaz elegante y funcional
              </a>
            }{" "}
            Además, estoy siempre en busca de nuevos retos y oportunidades para
            aprender y crecer en mi carrera.
          </p>
          <p>
            Si estás buscando un desarrollador frontend que pueda llevar tus
            proyectos al siguiente nivel, no dudes en contactarme.
          </p>
          <p>
            También puedes encontrar más información sobre mí y mi trabajo en mi
            perfil de LinkedIn:
            <a
              href="https://www.linkedin.com/in/sebastianbbuitrago/ "
              target="_blank"
              rel="noreferrer"
              className="link__aboutMe"
            >
              https://linkedin.com/in/sebastianbbuitrago
            </a>
            y mi página en GitHub:
            <a
              href="https://github.com/Buitrago1970."
              target="_blank"
              rel="noreferrer"
              className="link__aboutMe"
            >
              https://github.com/Buitrago1970.
            </a>{" "}
            ¡Espero poder colaborar contigo en el futuro! 👨‍💻
          </p>
          <p>
            Aquí hay algunas tecnologías recientes con las que he estado
            trabajando recientemente:
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
              CSS/Sass/tailwind
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
          <div className="overlay"></div>
        </div>
      </article>
    </>
  );
}
