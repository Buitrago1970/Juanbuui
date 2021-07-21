import React from "react";

//styles
import "./styles/About.css";

//icons
import { FaReact, FaHtml5, FaCss3, FaGitAlt, FaPython } from "react-icons/fa";
import { GrGatsbyjs } from "react-icons/gr";
import { SiJavascript, SiWebpack } from "react-icons/si";
import pythonIcon from "../images/python-5.svg";
//compress images
import image from "../images/narutoS.jpg";

export default function About() {
  return (
    <>
      <div className="container work" id="about-me">
        <div className="container-paragraph">
          <h1 className="title-about">Sobre mí</h1>
          <p>
            {/* ¡Hola! Me llamo Juan Sebastian y disfruto creando cosas que viven en
            Internet. Mi interés en el desarrollo web comenzó en 2018 cuando
            decidi comezar con una proyecto vendiendo gafas en linea. aprendindo
            las bases de crear un sitio web con HTML-CSS-JAVASCRIPT. */}
            Desde muy joven comenzó a rapear y al realizar una actuación en un
            supermercado, llamó la atención de una señora, quien era esposa de
            un director ejecutivo de un sello discográfico, por lo que Jam firmó
            un contrato de grabación y con casi catorce años, lanzó su primer EP
            titulado ...Distinto a los demás.✨
          </p>
          <p>
            Actualmente me enfoco en crear, diseñar y producir paginas
            jodidamente cabronas, En 2013, Nicky 👁‍🗨 empezó a ganar popularidad
            nuevamente en varios países de Latinoamérica con el sencillo «Voy a
            beber».4​ En 2015, lanza el tema «El perdón»🔅
          </p>
          <p>Tecnologías con las que he estado trabajando recientemente:</p>
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
