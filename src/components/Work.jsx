import React from "react";

//styles
import "./styles/Work.css";
//components
import Projects from "./Projects";
import SecondaryProjects from "./SecondaryProjects";

export default function Work() {
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
          <span className="">featured projects</span>
        </p>
        <Projects />
        <SecondaryProjects />
      </div>
    </>
  );
}
