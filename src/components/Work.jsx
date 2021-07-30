import * as React from "react";
import Projects from "./Projects";
import SecondaryProjects from "./SecondaryProjects";
import Project1 from "../images/SAN.png";
import Project2 from "../images/512.png";
import "./styles/Work.css";

export default function Work() {
  const value = [
    {
      key: "10",
      link: "https://www.Surtisandiego.com",
      title: "🥩 SANDIEGO",
      description:
        "Ecommerce para brindar la conveniencia de la entrega a domicilio aquellos que admiran la verdadera calidad de Prime Beef, una variedad de carnes para todos los gustos y preferencias.",
    },
    {
      key: "11",
      link: "https://oficialmente512.com/",
      title: "5️⃣1️⃣2️⃣ Oficialmente 512",
      description:
        " Compañía dedicada a la creación en apps webs mobile utilizando tecnologías como React.js React Native Gatsby entre otras.",
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
        <Projects image={Project1} key={value[0].keys} data={value[0]} />
        <Projects image={Project2} key={value[1].keys} data={value[1]} />
        <SecondaryProjects />
      </div>
    </>
  );
}
