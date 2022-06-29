import * as React from "react";

export default function Contact() {
  return (
    <article id="contact">
      <div className="container-titles">
        <p>04.</p>
        <h1 className="title-about">Que sigue?</h1>
        {/* <p>
          Hola, mi nombre es Juan Buitrago. Si te gustó el aspecto de alguno de
          mis trabajos, no dudes en contactarnos.
        </p> */}
      </div>
      <div className="card-contact">
        <div className="card-contact__info-contact">
          <p>juanbuitrago2002@outlook.com</p>
          <p>🇨🇴+57 3105706238</p>
        </div>
        <div className="card-contact__message">Saludar</div>
        <div className="card-contact__social-networks-links">
          <a
            href="https://www.linkedin.com/in/juan-sebastian-buitrago-90a769165/"
            target="_blank"
            rel="noreferrer nofollow"
          >
            LINKEDIN
          </a>
          <a
            href="https://github.com/Buitrago1970"
            target="_blank"
            rel="noreferrer nofollow"
          >
            GITHUB
          </a>
          <a
            href="https://t.me/LegalmenteJuanBuitrago"
            target="_blank"
            rel="noreferrer nofollow"
          >
            TELEGRAM
          </a>
        </div>
      </div>
    </article>
  );
}
