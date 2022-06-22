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
          <div className="container-nav-links">
            <LinkS
              to={"about-me"}
              offset={10}
              smooth={true}
              className="navbar-btn"
              title="E"
            >
            <p>01.</p>  Sobre Mí
            </LinkS>
           
            <LinkS
              to={"projects"}
              offset={65}
              smooth={true}
              className="navbar-btn"
              title="i"
            >
               <p>02.</p>Proyectos
            </LinkS>
            <LinkS
              title="O"
              to={"contact"}
              offset={170}
              smooth={true}
              className="navbar-btn"
              href="mailto:juanbuitrago2002@outlook.com"
            >
           <p>03.</p> Otros Proyectos
            </LinkS>
          
            <LinkS
              title="O"
              to={"contact"}
              offset={170}
              smooth={true}
              className="navbar-btn"
              href="mailto:juanbuitrago2002@outlook.com"
            >
             <p>04.</p> Email
            </LinkS>
          </div>
      </nav>
    </>
  );
}
