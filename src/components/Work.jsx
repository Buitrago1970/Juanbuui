import * as React from "react";
import Projects from "./Projects";
import ImgSAN from "../images/sanss.png";
import ImgAVO from "../images/avoss.png";
import ImgHAR from "../images/harss.jpeg";
import ImgLOU from "../images/louss.png";

export default function Work() {
  const value = [
    {
      key: "san",
      link: "https://san-diego.com.co",
      title: "🥩 SANDIEGO",
      technologies: ["React", "Strapi", "Heroku", "Axios", "JWT"],
      image: "src/images/sanss.png",
      description:
        "E-commerce para brindar la conveniencia de la entrega a domicilio de productos cárnicos, Desarrollo e implementación, Frontend y backend del e-commerce de San-Diego.",
      figcaption: "San-Diego Home Page",
      endAge: "Diciembre 2021",
    },
    {
      key: "Avocado",
      link: "https://avocado-x.netlify.app",
      title: "Avocado",
      description:
        "Diseño de Ecommerce dedica al diseño y fabricación de artículos de moda, echa en Next.js, styled componets.",
      technologies: ["Next.js", "Styled Components", "Netlify"],
      image: "src/images/sanss.png",
      figcaption: "Avocado Home Page",
      endAge: "Febrero 2022",
    },
    {
      key: "harvard",
      link: "https://harvard-api.netlify.app",
      title: "Harvard Museum API",
      description:
        "Una aplicación web para visualizar datos del museo de arte de Harvard. Vea sus mejores obras de arte, títulos, pistas principales, pistas reproducidas recientemente e información del artista y técnicas detalladas sobre cada una.  ",
      technologies: ["React", "Harvard API", "Axios/fetch", "Netlify"],
      image: "src/images/sanss.png",

      figcaption: "Harvard-Art-Museum API Home Page",
      endAge: "abril 2022",
    },
    {
      key: "lv",
      link: "https://louisvuitton-fa.webflow.io/",
      title: "LOUIS VUITTON",
      description:
        "Re-Diseño de la aplicación web principal de LOUIS VUITTON, con las temporadas de 2021 echa en Webflow.xw",
      technologies: ["Webflow", "Html", "CSS"],
      image: "src/images/sanss.png",

      figcaption: "Louis-Vuitton Re-Desing Home Page",
      endAge: "junio 2021",
    },
  ];
  return (
    <>
      <section id="proyectos">
        <div className="container-titles">
          <p>01.</p>
          <h1 className="title-about">Algunos proyectos que he creado</h1>
        </div>
        <ul className="project-list">
          {/* {value.map((project) => (
            <Projects data={project} />
          ))} */}
          <Projects data={value[0]} image={ImgSAN} />
          <Projects data={value[1]} image={ImgAVO} />
          <Projects data={value[2]} image={ImgHAR} />
          <Projects data={value[3]} image={ImgLOU} />
        </ul>
      </section>
    </>
  );
}
