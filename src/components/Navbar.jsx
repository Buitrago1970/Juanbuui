import React from "react";

//styles
import "./styles/Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="logo">JuuanBuitrago</div>
        <div className="col-1">
          <div className="container-nav-links">
            <a href="">About</a>
            <br />
            <a href="">Projects</a>
          </div>
          <div>
            <a href="">Email</a>
          </div>
          <div className="resume-button">
            <a href="">Resume</a>
          </div>
        </div>
      </nav>
    </>
  );
}
