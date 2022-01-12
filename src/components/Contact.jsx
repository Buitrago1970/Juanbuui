import * as React from "react";
import "./styles/Contact.css";
import { RiEyeCloseLine } from "react-icons/ri";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="matrice">
        <div className="div1 div-container-contact-icons"> 🧠</div>
        <div className="div2 div-container-contact-icons"> </div>
        <div className="div3 div-container-contact-icons"> 🦋</div>
        <div className="div4 div-container-contact-icons"> </div>
        <div className="div5 div-container-contact-icons"> 🎈</div>
        <div className="div6 div-container-contact-icons"> 🌈</div>
        <div className="div7 div-container-contact-icons"> </div>
        <div className="div8 div-container-contact-icons">
        👁
        </div>
        <div className="div9 div-container-contact-icons"></div>
        <div className="div10 div-container-contact-icons">
          <RiEyeCloseLine />
        </div>
        <div className="div11">
          <div className="contact-titles">
            <h1 className="contact-title">Contacto</h1>
            <p className="contact-subtitle">
              Por mail, Instagram, Linkedin y Github
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
