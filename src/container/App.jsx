import React, { useRef, useEffect } from "react";

//components
import Seo from "../components/Seo";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Footer from "../components/Footer";
import OthersProjects from "../components/OthersProjects";
import Contact from "../components/Contact";
import ProjectContext from "../context/ProjectContext";
import initialState from "../initialState";
//styles
import "../pages/styles/index.scss";

const App = () => {
  let refScrollBar = useRef();
  useEffect(() => {
    let totalHeight = refScrollBar.current.scrollHeight;
    window.onscroll = function () {
      let scroll = window.scrollY;
      let percent = (scroll / totalHeight) * 99;
      refScrollBar.current.style.height = `${percent}%`;
    };
  }, [refScrollBar]);

  return (
    <>
      <div ref={refScrollBar} className="progressbar"></div>
      <div className="scrollPath"> </div>
      <Seo />
      <ProjectContext.Provider value={initialState}>
        <Header />
        <section id="pricipal-section">
          <Hero />
          <About />
          <Work />
          <OthersProjects />
          <Contact />
        </section>
        <Footer />
      </ProjectContext.Provider>
    </>
  );
};

export default App;
