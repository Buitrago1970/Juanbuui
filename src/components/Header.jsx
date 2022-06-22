import * as React from "react";
//styles
import "./styles/_header.scss";
//scroll
import { Link as LinkS } from "react-scroll";

export default function Navbar() {
  return (
    <>
      <header>
        <a className="logo" href="/" title="A">
          JuuanBuitrago
        </a>
        <div className="container-header-links">
          <LinkS
            to={"about-me"}
            offset={10}
            smooth={true}
            className="header-btn"
            title="E"
          >
            <p>01.</p> Sobre Mí
          </LinkS>

          <LinkS
            to={"projects"}
            offset={65}
            smooth={true}
            className="header-btn"
            title="i"
          >
            <p>02.</p>Proyectos
          </LinkS>
          <LinkS
            title="O"
            to={"contact"}
            offset={170}
            smooth={true}
            className="header-btn"
            href="mailto:juanbuitrago2002@outlook.com"
          >
            <p>03.</p> Otros Proyectos
          </LinkS>

          <LinkS
            title="O"
            to={"contact"}
            offset={170}
            smooth={true}
            className="header-btn"
            href="mailto:juanbuitrago2002@outlook.com"
          >
            <p>04.</p> Email
          </LinkS>
        </div>
      </header>
    </>
  );
}
