import * as React from "react";
import Projects from "./Projects";
import SecondaryProjects from "./SecondaryProjects";
import Project1 from "../images/SAN.png";
import Project2 from "../images/scope.png";
import Project3 from "../images/Louis vuitton (2).png";
import Project4 from "../images/https___b-a-d.ne.png";

import "./styles/Work.css";

export default function Work() {
  const value = [
    {
      key: "10",
      link: "https://san-diego.com",
      title: "🥩 SANDIEGO",
      description:
        "Ecommerce para brindar la conveniencia de la entrega a domicilio aquellos que admiran la verdadera calidad de Prime Beef, una variedad de carnes para todos los gustos y preferencias.",
    },
    {
      key: "11",
      link: "https://sc8pe.netlify.app",
      title: "SCOPE",
      description:
        "Diseño web de marca de ropa scope echa en Next.js.",
    },
    {
      key: "13",
      link: "https://b-a-d.netlify.app/",
      title: "👁Bad",
      // description:
      //   " Compañía dedicada a la creación en apps webs mobile utilizando tecnologías como React.js React Native Gatsby entre otras.",
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
        <div className="work-title">
          <h1 className="h1-work">
            <span className="row">
              <span className="outline">
                work work work work work work work work work
              </span>
              <span className="outline reverse">
                work work work work work work work work work
              </span>
            </span>
          </h1>
        </div>
        <p className="container-secondary-title-projects">
          <span className="">PROYECTOS DESTACADOS</span>
        </p>
        <Projects image={Project1} key={value[0].key} data={value[0]} />
        <Projects image={Project3} key={value[3].key} data={value[3]} />
        <Projects image={Project2} key={value[1].key} data={value[1]} />
        <Projects image={Project4} key={value[2].key} data={value[2]} />
        <SecondaryProjects />
      </div>
    </>
  );
}
