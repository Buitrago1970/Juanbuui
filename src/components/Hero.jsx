import * as React from "react";
import { Link as LinkS } from "react-scroll";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="short-description">
          <p className="paragraph-hero">
            Soy un ingeniero de software en Colombia que se especializa en crear
            y diseñar experiencias digitales excepcionales 💫
          </p>
          <LinkS
            to={"about-me"}
            smooth={true}
            className="read-more"
            title="Leer mas sobre mí"
          >
            Leer mas sobre mí
          </LinkS>
        </div>
        <div className="titles-hero">
          <p className="greeting">👋 Hola, me llamo</p>
          <h1 className="title-hero">Juan Sebastian Buitrago</h1>
          <p className="secondary-title">Programador Front-end.</p>
        </div>
      </div>
    </>
  );
}
