import * as React from "react";
import Projects from "./Projects";

export default function Work() {
  const value = [
    {
      key: "san",
      link: "https://san-diego.com.co",
      title: "🥩 SANDIEGO",
      technologies: ["React", "Strapi", "Heroku", "Axios", "JWT"],
      description:
        "Ecommerce para brindar la conveniencia de la entrega a domicilio aquellos que admiran la verdadera calidad de Prime Beef, una variedad de carnes para todos los gustos y preferencias.",
      figcaption: "San-Diego Home Page",
    },
    {
      key: "scope",
      link: "https://sc8pe.netlify.app",
      title: "SCOPE",
      description:
        "Diseño de Ecommerce dedica al diseño y fabricación de artículos de moda, echa en Next.js, styled componets.",
      technologies: ["Next.js", "Styled Components", "Netlify"],
      figcaption: "Scope Home Page",
    },
    {
      key: "harvard",
      link: "https://harvard-api.netlify.app",
      title: "Harvard Museum API",
      description:
        "Consumo de la API REST del museo de arte de harvard, Creando con un buscador de sus galerias, titulos, objetos y numeros de galeria ",
      technologies: ["React", "Harvard API", "Axios/fetch", "Netlify"],
      figcaption: "Harvard-Art-Museum API Home Page",
    },
    {
      key: "lv",
      link: "https://louisvuitton-fa.webflow.io/",
      title: "LOUIS VUITTON",
      description:
        "Diseño de la pagina principal de LOUIS VUITTON, con las temporadas de 2021 echa en Webflow, diseño mobile.",
      technologies: ["Webflow", "Html", "CSS"],
      figcaption: "Louis-Vuitton Re-Desing Home Page",
    },
  ];
  return (
    <>
      <section id="proyectos">
        <div className="container-titles">
          <p>01.</p>
          <h1 className="title-about">Algunas cosas q he creado</h1>
        </div>
        <ul className="project-list">
          {value.map((project) => (
            <Projects data={project} />
          ))}
        </ul>
      </section>
    </>
  );
}
