import * as React from "react";
//styles
import "./styles/Navbar.css";
//scroll
import { Link as LinkS } from "react-scroll";

export default function Navbar() {
  return (
    <>
      <nav id="nav">
        <a className="logo" href="/" title="A">
          JuuanBuitrago
        </a>
        <div className="col-1">
          <div className="container-nav-links">
            <LinkS
              to={"about-me"}
              offset={10}
              smooth={true}
              className="btn"
              title="E"
            >
              Sobre Mí
            </LinkS>
            <br />
            <LinkS
              to={"projects"}
              offset={65}
              smooth={true}
              className="btn"
              title="i"
            >
              proyectos
            </LinkS>
          </div>
          <div className="btn-email">
            <LinkS
              title="O"
              to={"contact"}
              offset={170}
              smooth={true}
              className=" btn "
              href="mailto:juanbuitrago2002@outlook.com"
            >
              Email
            </LinkS>
          </div>
          <div className="resume-button">
            <a
              href="mailto:juanbuitrago2002@outlook.com"
              title="U juanbuitrago2002@outlook.com"
            >
              {" "}
              Escríbeme un email
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
