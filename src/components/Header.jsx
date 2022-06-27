import * as React from "react";

import { Link as LinkS } from "react-scroll";

export default function Navbar() {
  return (
    <>
      <header>
        <a className="logo" href="/" title="juan Buitrago :)">
          JuanBuitrago
        </a>
        <div className="container-header-links">
          <LinkS
            to={"about-me"}
            offset={10}
            smooth={true}
            className="header-btn"
            title="Sobre mi"
          >
            {"< Sobre Mí />"}
          </LinkS>

          <LinkS
            to={"projects"}
            offset={0}
            smooth={true}
            className="header-btn"
            title="projects"
          >
            {"< Trabajos />"}
          </LinkS>
          <LinkS
            title="concact"
            to={"contact"}
            offset={170}
            smooth={true}
            className="header-btn"
            href="mailto:juanbuitrago2002@outlook.com"
          >
            {"< Email />"}
          </LinkS>
        </div>
      </header>
    </>
  );
}
