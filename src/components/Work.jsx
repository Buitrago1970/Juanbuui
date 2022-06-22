import * as React from "react";
import Projects from "./Projects";
import SecondaryProjects from "./SecondaryProjects";
import Project1 from "../images/SAN.png";
import Project2 from "../images/scope.png";
import Project3 from "../images/Louis vuitton (2).png";
import Project4 from "../images/harvard.png";

import "./styles/Work.css";

export default function Work() {
  const value = [
    {
      key: "10",
      link: "https://san-diego.com.co",
      title: "🥩 SANDIEGO",
      description:
        "Ecommerce para brindar la conveniencia de la entrega a domicilio aquellos que admiran la verdadera calidad de Prime Beef, una variedad de carnes para todos los gustos y preferencias.",
    },
    {
      key: "11",
      link: "https://sc8pe.netlify.app",
      title: "SCOPE",
      description:
        "Diseño de Ecommerce dedica al diseño y fabricación de artículos de moda, echa en Next.js, styled componets.",
    },
    {
      key: "13",
      link: "https://harvard-api.netlify.app",
      title: "Harvard Museum API",
      description:"Consumo de la API REST del museo de arte de harvard, Creando con un buscador de sus galerias, titulos, objetos y numeros de galeria ",
      reverse: "Yes",
    },
    {
      key: "12",
      link: "https://louisvuitton-fa.webflow.io/",
      title: "LOUIS VUITTON",
      description:
        "Diseño de la pagina principal de LOUIS VUITTON, con las temporadas de 2021 echa en Webflow, diseño mobile.",
      reverse: "Yes",
    },
  ];
  return (
    <>
      <div id="proyectos" className="container ">
      <div className="container-titles">
          <p>01.</p>
           <h1 className="title-about">Sobre mí</h1>
          </div>
        <Projects image={Project1} key={value[0].key} data={value[0]} />
        <Projects image={Project3} key={value[3].key} data={value[3]}/>
        <Projects image={Project2} key={value[1].key} data={value[1]} />
        <Projects image={Project4} key={value[2].key} data={value[2]}  />
        <SecondaryProjects />
      </div>
    </>
  );
}
