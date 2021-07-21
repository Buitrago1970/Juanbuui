import React, { useContext } from "react";

//styles
import "./styles/Work.css";
//components
import Projects from "./Projects";
import SecondaryProjects from "./SecondaryProjects";
// import ProjectContext from "../context/ProjectContext";

export default function Work() {
  // const { principalProjects } = useContext(ProjectContext);
  const value = [
    {
      key: "10",
      link: "https://www.Surtisandiego.com",
      title: "🥩 SANDIEGO",
      path: `/static/e82df19bdaa017772dca01d464db2a92/8df4d/SAN.png`,
      description:
        "Ecommerce para brindar la conveniencia de la entrega a domicilio aquellos que admiran la verdadera calidad de Prime Beef, una variedad de carnes para todos los gustos y preferencias.",
    },
    {
      key: "11",
      link: "https://www.512.com",
      title: "5️⃣1️⃣2️⃣ Oficialmente 512",
      path: `/static/16371c6670830a2fe8b8b3023dcbc6ac/48734/512.png`,
      description:
        " Compañía dedicada a la creación en apps webs mobile utilizando tecnologías como React.js React Native Gatsby entre otras.",
      reverse: "True",
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
        {/* {principalProjects.map((value) => (
          <Projects key={value.key} data={value} />
        ))} */}
        <Projects key={value.keys} data={value[0]} />
        <Projects key={value.keys} data={value[1]} />
        <SecondaryProjects />
      </div>
    </>
  );
}
