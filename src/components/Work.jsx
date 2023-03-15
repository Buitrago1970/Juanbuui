import React from "react";
import Projects from "./Projects";
import ImgSAN from "../images/sanss.png";
import ImgAVO from "../images/13kitsch.png";
import ImgHAR from "../images/harss.jpeg";
import ImgAngular from "../images/angular.png";

export default function Work() {
  const value = [
    {
      key: "san",
      link: "https://san-diego.com.co",
      title: "🥩 SANDIEGO",
      technologies: ["React", "Strapi", "Heroku", "Axios", "JWT"],
      image: "src/images/sanss.png",
      description:
        "En este proyecto tuve la oportunidad de trabajar en una aplicación web de comercio electrónico utilizando tecnologías como React, CSS Grid, Flex, Axios y React Hooks. Como desarrollador frontend, asumí la responsabilidad de diseñar y optimizar la interfaz para diferentes dispositivos, asegurando una experiencia de usuario excepcional.",
      shortDescription: "E-commerce website",
      figcaption: "San-Diego Home Page",
      endAge: "Noviembre 2021",
    },

    {
      key: "harvard",
      link: "https://harvard-api.netlify.app",
      title: "Harvard Museum API",
      description:
        "Una aplicación web para visualizar datos del museo de arte de Harvard. Vea sus mejores obras de arte, títulos, pistas principales, pistas reproducidas recientemente e información del artista y técnicas detalladas sobre cada una.  ",
      shortDescription: "Art website",
      technologies: ["React", "Harvard API", "Axios/fetch", "Netlify"],
      image: "src/images/sanss.png",

      figcaption: "Harvard-Art-Museum API Home Page",
      endAge: "abril 2022",
    },
    {
      key: "13Kitsch",
      link: "https://13kitsch-gz3prqmdx-buitrago1970.vercel.app",
      title: "13Kitsch",
      description:
        "13Kitasch es una tienda en línea de alta calidad construida en Next.js, diseñada para brindar una experiencia de usuario excepcional en todos los dispositivos. Con estilos de Tailwind y técnicas de desarrollo bien estructuradas, cada detalle ha sido cuidadosamente considerado para crear una plataforma elegante y fácil de usar.",
      shortDescription: "E-commerce website",
      technologies: ["Next.js", "Tailwind", "redux", "Axios", "Vercel"],
      image: "src/images/13kitsch.png",
      figcaption: "Harvard-Art-Museum API Home Page",
      endAge: "Febrero 2023",
    },
    {
      key: "Angular Store",
      link: "https://ngstoreangular.netlify.app",
      title: "Angular Store",
      description:
        "Angular Store es una tienda en línea de alta calidad construida en Angular, diseñada para brindar una experiencia de usuario excepcional en todos los dispositivos. Con estilos de Tailwind y técnicas de desarrollo bien estructuradas, cada detalle ha sido cuidadosamente considerado para crear una plataforma elegante y fácil de usar.",
      shortDescription: "E-commerce website",
      technologies: [
        "Angular",
        "Tailwind",
        "angular-Forms",
        "Angular-HttpClient",
        "Angular-Router",
      ],
      figcaption: "Angular Store Home Page",
      image: "src/images/angular.png",
      endAge: "Marzo 2023",
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
          <Projects data={value[1]} image={ImgHAR} />
          <Projects data={value[2]} image={ImgAVO} />
          <Projects data={value[3]} image={ImgAngular} />
        </ul>
      </section>
    </>
  );
}
