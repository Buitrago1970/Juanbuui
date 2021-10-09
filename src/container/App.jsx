import React, { useRef, useEffect } from "react";

//components
import Seo from "../components/Seo";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Footer from "../components/Footer";
import OthersProjects from "../components/OthersProjects";
import Contact from "../components/Contact";
import ProjectContext from "../context/ProjectContext";
import initialState from "../initialState";
//styles
import "../pages/styles/global.css";

const App = () => {
  let refScrollBar = useRef();
  useEffect(() => {
    let totalHeight = document.body.scrollHeight - window.innerHeight;
    window.onscroll = function () {
      let progresHeigth = (window.pageYOffset / totalHeight) * 100;
      refScrollBar.current.style.height = progresHeigth + "%";
    };
  }, []);

  return (
    <>
      <div ref={refScrollBar} className="progressbar"></div>
      <div className="scrollPath"> </div>
      <Seo />
      <ProjectContext.Provider value={initialState}>
        <Navbar />
        <Hero />
        <About />
        <Work />
        <OthersProjects />
        <Contact />
        <Footer />
      </ProjectContext.Provider>
    </>
  );
};

export default App;
