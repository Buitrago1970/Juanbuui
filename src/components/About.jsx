import React from "react";

//styles
import "./styles/About.css";

//icons
import { FaReact, FaHtml5, FaCss3, FaGitAlt } from "react-icons/fa";
import { GrGatsbyjs } from "react-icons/gr";
import { SiJavascript, SiStylus, SiWebpack, SiNetlify } from "react-icons/si";
//compress images
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

export default function About() {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["narutoS"] }
        }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);
  return (
    <>
      <div className="container work" id="about-me">
        <div className="container-paragraph">
          <h1 className="title-about">About Me</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            exercitationem nobis veniam praesentium distinctio aliquam al
            reiciendis minima dolore! minima dolore!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Su
            accusantium a corrupti quaerat quia ipsum necessitatib iusto
            possimus quam! sto possimus quam!
          </p>
          <ul className="skills-list">
            <li>
              <div className="icon-containers-us">
                <SiJavascript className="icon-1" />
              </div>
              JavaScript (ES6+)
            </li>
            <li>
              <div className="icon-containers-us">
                <FaReact className="icon-2" />
              </div>
              React
            </li>

            <li>
              <div className="icon-containers-us">
                <FaGitAlt className="icon-3" />
              </div>
              Git
            </li>

            <li>
              <div className="icon-containers-us">
                <FaHtml5 className="icon-4" />
              </div>
              HTML
            </li>
            <li>
              <div className="icon-containers-us">
                <FaCss3 className="icon-5" />
              </div>
              Css
            </li>
            <li>
              <div className="icon-containers-us">
                <SiWebpack className="icon-6" />
              </div>
              Webpack
            </li>
            <li>
              <div className="icon-containers-us">
                <GrGatsbyjs className="icon-7" />
              </div>
              gatsby
            </li>
            <li>
              <div className="icon-containers-us">
                <SiNetlify className="icon-8" />
              </div>
              Netlify
            </li>
            <li>
              <div className="icon-containers-us">
                <SiStylus className="icon-9" />
              </div>
              Stylus
            </li>
          </ul>
        </div>

        <div className="container-img">
          {data.allFile.edges.map((image, key) => (
            <GatsbyImage
              key={key}
              image={image.node.childImageSharp.gatsbyImageData}
            />
          ))}
        </div>
      </div>
    </>
  );
}
