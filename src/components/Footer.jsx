import * as React from "react";

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
        <div className="container-rights-reseved">
          <div className="rights-reseved">
            <p className="footers">Desing and developed by Juuan Bui.</p>
            <p className="footers">All Rights reserved.</p>
          </div>
          <div className="whit-love">
            <p className="whit-love-p">
              Echo Con <AiFillHeart />
              en Bogotá, Colombia
            </p>
          </div>
        </div>
        <div className="email">
          <div className="social-media">
            <a
              className="footer-button instagram"
              href="https://www.instagram.com/el_guaso0n_bebe/"
              target="_blank"
              rel="noreferrer nofollow"
            >
              <AiOutlineInstagram />
            </a>
            <a
              className="footer-button linkedin"
              href="https://twitter.com/home"
              target="_blank"
              rel="noreferrer nofollow"
            >
              {" "}
              <AiOutlineLinkedin />
            </a>
            <a
              className="footer-button github"
              href="https://github.com/Buitrago1970"
              target="_blank"
              rel="noreferrer nofollow"
            >
              <AiOutlineGithub />
            </a>
            <a
              className="footer-button footer-button-email"
              href="mailto:juanbuitrago2002@outlook.com"
              title="juanbuitrago2002@outlook.com"
            >
              Escríbeme un email
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
