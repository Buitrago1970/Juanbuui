import React from "react";

//styles
import "./styles/Footer.css";
//icons
import { AiFillHeart } from "react-icons/ai";
//images
import email from "../images/email.png";

export default function Work() {
  return (
    <>
      <footer className="footer" id="footer">
        <div className="rights-reseved">
          <p className="footers">Desing and developed by Juuan Bui.</p>
          <p className="footers">All Rights reserved.</p>
        </div>
        <div className="whit-love">
          <p>
            Echo Con <AiFillHeart />
            En Colombia
          </p>
        </div>
        <div className="email">
          <a
            className="footer-button"
            href="mailto:juanbuitrago2002@outlook.com"
          >
            Escríbeme al email
          </a>
          <div className="container-img-f">
            <img className="img-email" src={email} alt="" />
          </div>
        </div>
      </footer>
    </>
  );
}
