import React from "react";

//styles
import "./styles/Footer.css";
//icons
import {
  AiFillHeart,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
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
          <div className="social-media">
            <a
              className="footer-button instagram"
              href="https://www.instagram.com/el_guaso0n_bebe/"
            >
              <AiOutlineInstagram />
            </a>
            <a className="footer-button linkedin" href="">
              {" "}
              <AiOutlineLinkedin />
            </a>
            <a className="footer-button github" href="">
              <AiOutlineGithub />
            </a>
            <a
              className="footer-button footer-button-email"
              href="mailto:juanbuitrago2002@outlook.com"
            >
              Escríbeme al email
            </a>
          </div>
          <div className="container-img-f">
            <img className="img-email" src={email} alt="" />
          </div>
        </div>
      </footer>
    </>
  );
}
