import React from "react";

//styles
import "./styles/Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav id="nav">
        <div className="logo">JuuanBuitrago</div>
        <div className="col-1">
          <div className="container-nav-links">
            <a className="btn" href="">
              About
            </a>
            <br />
            <a className="btn" href="">
              Projects
            </a>
          </div>
          <div>
            <a className=" btn" href="">
              Email
            </a>
          </div>
          {/* <div className="resume-button">
            <a href="">Resume</a>
          </div> */}
        </div>
      </nav>
    </>
  );
}
