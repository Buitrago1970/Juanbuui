import React from "react";

import "./styles/Hero.css";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="div">
          <p className="paragraph-hero">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium nulla cum dolor totam eos inventore cupiditate odio
            dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            ea, quaerat soluta odio.
          </p>
          <a className="read-more" href="">
            Read More About Me
          </a>
        </div>
        <div className="titles-hero">
          <h1 className="title-hero">Juan Sebastian Buitrago</h1>
          <h3 className="secondary-title">I build things for the web.</h3>
        </div>
      </div>
    </>
  );
}
