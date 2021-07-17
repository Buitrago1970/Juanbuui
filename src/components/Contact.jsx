import React from "react";
import "./styles/Contact.css";
import { AiFillThunderbolt } from "react-icons/ai";
import { GiBleedingEye } from "react-icons/gi";
import { RiEyeCloseLine } from "react-icons/ri";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="matrice">
        <div className="div1 div-container-contact-icons"> 🧠</div>
        <div className="div2 div-container-contact-icons"> </div>
        <div className="div3 div-container-contact-icons"> 🌎</div>
        <div className="div4 div-container-contact-icons"> </div>
        <div className="div5 div-container-contact-icons"> ⚗️</div>
        <div className="div6 div-container-contact-icons">🦜 </div>
        <div className="div7 div-container-contact-icons"> </div>
        <div className="div8 div-container-contact-icons"> </div>
        <div className="div9 div-container-contact-icons"></div>
        <div className="div10 div-container-contact-icons">
          <RiEyeCloseLine />{" "}
        </div>
        <div className="div11">
          <div className="contact-titles">
            <p className="contact-subtitle">Other Noteworthy Projects</p>
            <h1 className="contact-title">Contacto</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
