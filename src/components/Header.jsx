import * as React from "react";

import { Link as LinkS } from "react-scroll";

export default function Navbar() {
  return (
    <>
      <header>
        <a className="logo" href="/" title="A">
          JuanBuitrago
        </a>
        <div className="container-header-links">
          <LinkS
            to={"about-me"}
            offset={10}
            smooth={true}
            className="header-btn"
            title="E"
          >
            {"< Sobre Mí />"}
          </LinkS>

          <LinkS
            to={"projects"}
            offset={65}
            smooth={true}
            className="header-btn"
            title="i"
          >
            {"< Trabajos />"}
          </LinkS>
          <LinkS
            title="O"
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
