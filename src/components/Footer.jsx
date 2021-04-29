import React from "react";

//styles
import "./styles/Footer.css";
//icons
import { AiFillHeart } from "react-icons/ai";

export default function Work() {
  return (
    <>
      <footer className="footer" id="footer">
        <div className="rights-reseved">
          <p className="footers">Desing and developed by Juuan Bui.</p>
          <p className="footers">All Rights reserved.</p>
        </div>
        <div className="con-amor">
          <p>
            Echo Con <AiFillHeart />
            En Colombia
          </p>
        </div>
        <a className="footer-button" href="#nav">
          GET IN TOUCH
        </a>
      </footer>
    </>
  );
}
