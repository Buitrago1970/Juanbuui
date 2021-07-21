import React from "react";

//styles
import "./styles/Navbar.css";
//scroll
import { Link as LinkS } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  return (
    <>
      <nav id="nav">
        <a className="logo" onClick={scroll.scrollToTop} href="/">
          JuuanBuitrago
        </a>
        <div className="col-1">
          <div className="container-nav-links">
            <LinkS to={"about-me"} offset={70} smooth={true} className="btn">
              Sobre Mí
            </LinkS>
            <br />
            <LinkS to={"projects"} offset={80} smooth={true} className="btn">
              proyectos
            </LinkS>
          </div>
          <div className="btn-email">
            <LinkS
              to={"contact"}
              offset={80}
              smooth={true}
              className=" btn "
              href="mailto:juanbuitrago2002@outlook.com"
            >
              Email
            </LinkS>
          </div>
          {/* <div className="resume-button">
            <a >Resume</a>
          </div> */}
        </div>
      </nav>
    </>
  );
}
